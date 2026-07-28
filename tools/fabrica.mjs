#!/usr/bin/env node
/**
 * Diagnóstico portátil da fábrica Prospector Premium.
 *
 * Uso:
 *   node tools/fabrica.mjs
 *   node tools/fabrica.mjs --json
 *   node tools/fabrica.mjs --install   # instala apenas o Chromium do Playwright, se faltar
 *
 * Nunca executa `npm install`: dependências NPM têm de ser instaladas de forma explícita
 * pelo operador (`npm ci`). Isto evita alterar um ambiente sem consentimento.
 */
import { createRequire } from 'node:module';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { verificar as verificarCatalogoLock } from './catalogo-lock.mjs';

export const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
export const NODE_MINIMA = 22;

const ARQUIVOS_OBRIGATORIOS = [
  'package.json', 'package-lock.json', 'README.md',
  'tools/run.mjs', 'tools/check.mjs', 'tools/verificar.mjs',
  'tools/tema/hydrate.mjs', 'tools/tema/compor-tema.mjs',
  'themes/base/direcoes.json', 'themes/base/kits.json', 'catalogo.lock.json',
  'skills/contrato-servico/SKILL.md', 'skills/curador-componentes/SKILL.md',
  'skills/proposta-email/SKILL.md', 'skills/prospeccao-maps/SKILL.md',
];

function item(nome, ok, detalhe, remedio, nivel = 'erro') {
  return { nome, ok, detalhe, remedio: ok ? undefined : remedio, nivel: ok ? 'ok' : nivel };
}

export function versaoMaior(valor) {
  const match = String(valor || '').match(/^(?:v)?(\d+)/);
  return match ? Number(match[1]) : 0;
}

export function verificarArquivos(root = ROOT, arquivos = ARQUIVOS_OBRIGATORIOS) {
  return arquivos.map(caminho => item(
    `arquivo:${caminho}`,
    existsSync(join(root, caminho)),
    existsSync(join(root, caminho)) ? 'presente' : 'ausente',
    'Restaure o ficheiro a partir do repositório antes de gerar sites.',
  ));
}

/** O banco premium é opcional para gerar com kits já promovidos, nunca para curar peças novas. */
export function avaliarCatalogo(catalogo) {
  if (catalogo.estado === 'ok') {
    return item('banco:catalogo', true, catalogo.mensagem);
  }
  if (catalogo.estado === 'sem-banco') {
    return item(
      'banco:catalogo', false, 'banco premium ausente — modo kits existentes',
      'Para trazer componentes novos, instale uma cópia autorizada que corresponda a catalogo.lock.json. Os kits já aprovados continuam disponíveis.',
      'aviso',
    );
  }
  return item(
    'banco:catalogo', false, catalogo.mensagem,
    'Restaure o catálogo de referência ou não gere novos sites até a divergência ser resolvida.',
  );
}

/** Cada tema Next tem dependências próprias; sem lock a mesma build pode variar entre máquinas. */
export function verificarLocksTemas(root = ROOT) {
  const temas = join(root, 'themes');
  if (!existsSync(temas)) return [item('tema:diretório', false, 'themes/ ausente', 'Restaure a pasta themes/.')];
  return readdirSync(temas).flatMap(nome => {
    const dir = join(temas, nome);
    if (!statSync(dir).isDirectory() || !existsSync(join(dir, 'package.json'))) return [];
    const lock = join(dir, 'package-lock.json');
    return [item(
      `tema:${nome}:lock`, existsSync(lock),
      existsSync(lock) ? 'package-lock.json presente' : 'package-lock.json ausente',
      `Gere e versione themes/${nome}/package-lock.json com npm install (não automaticamente pela fábrica).`,
    )];
  });
}

/** Mantida injectável para testes e para não transformar um diagnóstico em instalação implícita. */
export function diagnosticar({
  root = ROOT,
  nodeVersion = process.versions.node,
  env = process.env,
  arquivos = ARQUIVOS_OBRIGATORIOS,
  playwright = null,
  catalogo = null,
  locksTemas = null,
} = {}) {
  const resultados = [];
  const major = versaoMaior(nodeVersion);
  resultados.push(item(
    'node', major >= NODE_MINIMA,
    `Node ${nodeVersion} (mínimo ${NODE_MINIMA})`,
    `Instale Node.js ${NODE_MINIMA} ou superior e execute novamente.`,
  ));

  resultados.push(...verificarArquivos(root, arquivos));
  resultados.push(avaliarCatalogo(catalogo || verificarCatalogoLock()));
  resultados.push(...(locksTemas || verificarLocksTemas(root)));

  const playwrightPkg = join(root, 'node_modules', 'playwright', 'package.json');
  resultados.push(item(
    'npm:playwright', existsSync(playwrightPkg),
    existsSync(playwrightPkg) ? 'dependência de QA instalada' : 'node_modules/playwright ausente',
    'Execute `npm ci` na raiz do repositório.',
  ));

  let browserOk = false;
  let browserDetalhe = 'Playwright indisponível';
  if (playwright?.chromium?.executablePath) {
    try {
      const executavel = playwright.chromium.executablePath();
      browserOk = Boolean(executavel && existsSync(executavel));
      browserDetalhe = browserOk ? `Chromium: ${executavel}` : 'Chromium do Playwright não foi encontrado';
    } catch (erro) {
      browserDetalhe = `Chromium não verificável: ${erro.message}`;
    }
  }
  resultados.push(item(
    'browser:chromium', browserOk, browserDetalhe,
    'Execute `npm run fabrica -- --install` para instalar apenas o browser de QA.',
  ));

  resultados.push(item(
    'configuração:local', existsSync(join(root, 'prospector-config.json')),
    existsSync(join(root, 'prospector-config.json')) ? 'configuração operacional encontrada' : 'usa apenas o exemplo/versionado',
    'Copie `prospector-config.exemplo.json` para `prospector-config.json` e preencha os valores locais.',
    'aviso',
  ));
  resultados.push(item(
    'deploy:vercel', Boolean(env.VERCEL_TOKEN),
    env.VERCEL_TOKEN ? 'token Vercel disponível no ambiente' : 'nenhum VERCEL_TOKEN detectado',
    'Opcional para ensaio. Para publicar, configure VERCEL_TOKEN no ambiente local.',
    'aviso',
  ));
  resultados.push(item(
    'agentes:externos', Boolean(env.CODEX_HOME || env.CLAUDE_CODE_ENTRYPOINT),
    (env.CODEX_HOME || env.CLAUDE_CODE_ENTRYPOINT) ? 'runtime de agentes detectado' : 'runtime de agentes não detectado',
    'Opcional: instale/configure Codex ou Claude Code. As skills portáveis do projeto já estão versionadas.',
    'aviso',
  ));

  const erros = resultados.filter(r => !r.ok && r.nivel === 'erro');
  const avisos = resultados.filter(r => !r.ok && r.nivel === 'aviso');
  return { ok: erros.length === 0, erros: erros.length, avisos: avisos.length, resultados };
}

function carregarPlaywright() {
  try { return createRequire(import.meta.url)('playwright'); }
  catch { return null; }
}

export function instalarChromium({ playwrightDisponivel, executar = spawnSync, platform = process.platform } = {}) {
  if (!playwrightDisponivel) return { ok: false, mensagem: 'Playwright não está instalado. Execute `npm ci` primeiro.' };
  const comando = platform === 'win32' ? 'npx.cmd' : 'npx';
  const resultado = executar(comando, ['playwright', 'install', 'chromium'], { cwd: ROOT, stdio: 'inherit' });
  return { ok: resultado.status === 0, mensagem: resultado.status === 0 ? 'Chromium instalado.' : 'Falhou ao instalar Chromium.' };
}

function imprimir(relatorio, json) {
  if (json) return console.log(JSON.stringify(relatorio, null, 2));
  console.log(`\nFábrica: ${relatorio.ok ? 'PRONTA' : 'BLOQUEADA'} — ${relatorio.erros} erro(s), ${relatorio.avisos} aviso(s)\n`);
  for (const r of relatorio.resultados) {
    const marca = r.ok ? '✓' : r.nivel === 'aviso' ? '!' : '✗';
    console.log(`${marca} ${r.nome}: ${r.detalhe}`);
    if (!r.ok) console.log(`  → ${r.remedio}`);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const json = process.argv.includes('--json');
  const instalar = process.argv.includes('--install');
  const opcoesDesconhecidas = process.argv.slice(2).filter(a => !['--json', '--install'].includes(a));
  if (opcoesDesconhecidas.length) {
    console.error(`Opção desconhecida: ${opcoesDesconhecidas.join(', ')}. Uso: node tools/fabrica.mjs [--json] [--install]`);
    process.exit(2);
  }
  const playwright = carregarPlaywright();
  let relatorio = diagnosticar({ playwright });
  if (instalar && !relatorio.resultados.find(r => r.nome === 'browser:chromium')?.ok) {
    if (json) console.error('A instalar Chromium do Playwright (saída da instalação em stderr)...');
    const instalado = instalarChromium({ playwrightDisponivel: Boolean(playwright) });
    if (!instalado.ok) console.error(instalado.mensagem);
    relatorio = diagnosticar({ playwright: carregarPlaywright() });
  }
  imprimir(relatorio, json);
  process.exitCode = relatorio.ok ? 0 : 1;
}
