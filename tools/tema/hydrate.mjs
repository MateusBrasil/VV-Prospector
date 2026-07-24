#!/usr/bin/env node
/**
 * Materializa uma OBRA: tema + cliente → pasta pronta a `next build`.
 *
 * Uso: node tools/tema/hydrate.mjs <slug> [--tema restaurante-noir]
 *
 * PORQUÊ MATERIALIZAR EM VEZ DE BUILDAR NO SÍTIO
 * Buildar o tema no sítio, trocando só o ficheiro de conteúdo, partilharia o cache do `.next`
 * entre clientes — e a classe de bug que isso abre é exatamente a que já nos mordeu: conteúdo
 * de um cliente a aparecer no site de outro. Uma pasta por cliente, descartável, torna o
 * vazamento impossível por construção em vez de por disciplina.
 *
 * A OBRA VIVE DENTRO DO TEMA (`themes/<tema>/.obras/<slug>/`), e isso não é arrumação:
 * o Node resolve `node_modules` subindo a árvore, por isso a obra encontra o do tema sem
 * cópia nem symlink. Um junction para fora seria recusado pelo Turbopack
 * ("Symlink points out of the filesystem root") e copiar custa 378 MB e 65 s por cliente.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, rmSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolver, relatorio } from './schema.mjs';
import { gerarTokens } from './tokens.mjs';
import { gerarFontes } from './fonts.mjs';
import { materializarDobras } from './dobras-manifest.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };

export function hidratar(slug, temaNome) {
  const dirCliente = join(ROOT, 'clientes', slug);
  const fichaPath = join(dirCliente, 'cliente.json');
  if (!existsSync(fichaPath)) throw new Error(`não existe: clientes/${slug}/cliente.json`);

  const bruto = JSON.parse(readFileSync(fichaPath, 'utf8'));
  const tema = temaNome || String(bruto.tema || '').split('@')[0] || 'restaurante-noir';
  const dirTema = join(ROOT, 'themes', tema);
  if (!existsSync(dirTema)) throw new Error(`tema não existe: themes/${tema}`);

  /* 1. validar e resolver ------------------------------------------------ */
  const res = resolver(bruto);
  console.log(relatorio(res));
  if (!res.ok) { const e = new Error('cliente incompleto'); e.code = 'INCOMPLETO'; throw e; }

  /* 2. materializar o tema ---------------------------------------------- */
  const obra = join(dirTema, '.obras', slug);
  // `src` e `public` são SEMPRE recopiados: editar dentro da obra tem de ser inútil, senão
  // alguém corrige um bug lá e ele volta no build seguinte sem se perceber porquê.
  for (const p of ['src', 'public', 'content']) rmSync(join(obra, p), { recursive: true, force: true });
  mkdirSync(join(obra, 'content'), { recursive: true });
  for (const item of ['src', 'public', 'package.json', 'next.config.mjs', 'jsconfig.json']) {
    const de = join(dirTema, item);
    if (existsSync(de)) cpSync(de, join(obra, item), { recursive: true });
  }
  // Dependências de interface declaradas pelo tema, sempre a partir da fonte
  // canónica em `themes/base/dobras` e apenas se já foram promovidas.
  materializarDobras({ root: ROOT, dirTema, obra });

  /* 3. conteúdo resolvido ------------------------------------------------ */
  writeFileSync(join(obra, 'content', 'cliente.json'), JSON.stringify(res.cliente, null, 2), 'utf8');

  /* 4. fontes e tokens --------------------------------------------------- */
  const fontes = gerarFontes(res.cliente.design?.fontes);
  mkdirSync(join(obra, 'src', 'theme'), { recursive: true });
  writeFileSync(join(obra, 'src', 'theme', 'fontes.generated.js'), fontes.js, 'utf8');
  writeFileSync(join(obra, 'src', 'app', 'tokens.generated.css'),
    gerarTokens(res.cliente.design, fontes.valores), 'utf8');

  /* 5. globals.css = @import de fonte externa + tokens + sistema ---------- */
  // A ordem é obrigatória: `@import` de CSS só vale antes de qualquer outra declaração.
  const estrutura = readFileSync(join(ROOT, 'themes', 'base', 'sistema', 'estrutura.css'), 'utf8');
  writeFileSync(join(obra, 'src', 'app', 'globals.css'),
    [...fontes.cssImports, '@import "./tokens.generated.css";', '', estrutura].join('\n'), 'utf8');

  /* 6. fotos do cliente -------------------------------------------------- */
  const dirAssets = join(dirCliente, 'assets');
  if (existsSync(dirAssets)) cpSync(dirAssets, join(obra, 'public', 'assets'), { recursive: true });

  return { obra, tema, cliente: res.cliente, omitidos: res.omitidos };
}

if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  const slug = process.argv[2];
  if (!slug || slug.startsWith('--')) { console.error('uso: node tools/tema/hydrate.mjs <slug> [--tema <nome>]'); process.exit(1); }
  try {
    const { obra, tema } = hidratar(slug, arg('--tema'));
    console.log(`\n✓ obra: themes/${tema}/.obras/${slug}`);
    console.log(`  seguinte: cd nessa pasta e \`npx next build\``);
  } catch (e) {
    console.error(`\n✗ ${e.message}`);
    process.exit(1);
  }
}
