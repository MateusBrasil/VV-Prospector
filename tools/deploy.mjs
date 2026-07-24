#!/usr/bin/env node
/**
 * Publicação na Vercel — Prospector Premium
 * Uso: node deploy.mjs <sites/slug> [--prod] [--seco] [--nome <slug-do-cliente>]
 *
 * POR QUE ISTO EXISTE
 * Um site em disco não vende nada: a proposta só existe depois de haver URL pública. Este é o
 * passo que fecha o ciclo — publica, CONFIRMA que a URL responde 200 (deploy que devolve URL
 * mas serve 404 é o modo de falha clássico da Vercel com output directory errado) e só então
 * escreve no CRM. Sem a verificação, o CRM mentia — e o email sairia com um link morto.
 *
 * Sem --prod é preview (o padrão, seguro). --seco mostra o que faria e não publica nada.
 *
 * --nome é obrigatório no modo 'tema': a pasta publicável é sempre themes/<tema>/.obras/<slug>/out/
 * — o próprio Next.js exporta para uma pasta chamada "out" — e o basename() do caminho seria
 * sempre "out", nunca o nome do cliente. Sem --nome, o projeto Vercel saía batizado "out" (achado
 * ao publicar a Vaninha Fashion a sério: a URL saiu "out-f9jfzie7r-...vercel.app").
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { basename, resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const dir = argv.find(a => !a.startsWith('--'));
const prod = argv.includes('--prod');
const seco = argv.includes('--seco');
const iNome = argv.indexOf('--nome');
const nomeExplicito = iNome !== -1 ? argv[iNome + 1] : undefined;

if (!dir) { console.error('uso: node deploy.mjs <sites/slug> [--prod] [--seco] [--nome <slug>]'); process.exit(1); }
const alvo = resolve(dir);
if (!existsSync(join(alvo, 'index.html'))) {
  console.error(`erro: ${dir} não tem index.html — não há nada para publicar. Corre o assemble.mjs primeiro.`);
  process.exit(1);
}
const slug = nomeExplicito || basename(alvo);

/* ---------- 0. o rascunho do email NÃO vai para a web ---------- */
// Apanhado a correr isto a sério: o email.mjs escreve email.txt/email.json DENTRO de
// sites/<slug>/ — que é exatamente a pasta que publicamos. Sem isto, o rascunho e o email
// do cliente ficavam públicos em https://.../email.txt. Escrevemos o .vercelignore sempre,
// porque quem se esquece disto uma vez expõe um lead.
// '_qa' entra aqui pela mesma razão que o email.txt: o verificar.mjs escreve screenshots e
// relatorio.json em <site>/_qa/, e esse relatório existe PARA CITAR os defeitos do site (inclui
// as strings da lista de marcas alheias que ele anda a caçar). Publicar isso junto do site seria
// entregar ao próprio cliente o diagnóstico dos defeitos que ele não pediu para ver.
const IGNORAR = ['email.txt', 'email.json', '*.local', '_qa'];
const ignorePath = join(alvo, '.vercelignore');
const atual = existsSync(ignorePath) ? readFileSync(ignorePath, 'utf8') : '';
const faltam = IGNORAR.filter(l => !atual.split(/\r?\n/).includes(l));
if (faltam.length) {
  writeFileSync(ignorePath, (atual ? atual.replace(/\s*$/, '\n') : '# gerado pelo deploy.mjs — o rascunho do email nunca vai para a web\n') + faltam.join('\n') + '\n', 'utf8');
  console.log(`· .vercelignore atualizado (${faltam.join(', ')}) — o rascunho fica fora da publicação`);
}

const win = process.platform === 'win32';
const npx = win ? 'npx.cmd' : 'npx';

// No Windows, o Node >=20 recusa-se a lançar um .cmd sem shell:true (mitigação da
// CVE-2024-27980) — dá EINVAL. Apanhado a correr isto a sério: sem o shell, o deploy
// morria a dizer "a CLI não respondeu" com a CLI instalada e autenticada.
// Com shell, as aspas passam a ser problema nosso: o caminho pode ter espaços.
const aspas = a => (/[\s"&|<>^()]/.test(a) ? `"${String(a).replace(/"/g, '\\"')}"` : a);
const corre = (args, opts = {}) => win
  ? spawnSync([npx, ...args.map(aspas)].join(' '), { shell: true, encoding: 'utf8', ...opts })
  : spawnSync(npx, args, { encoding: 'utf8', ...opts });

/* ---------- 1. modo ensaio: nem toca em rede/CLI ---------- */
// --seco é para validar o ciclo sem depender de internet nem da Vercel estar instalada.
// Chamar "vercel --version" aqui (mesmo só para checar) já falha sem rede e trava um
// ensaio que deveria correr offline. Por isso este bloco sai ANTES de qualquer corre().
if (seco) {
  console.log(`· ${slug} · ${prod ? 'PRODUÇÃO' : 'preview'} (ensaio, sem tocar em rede ou CLI)`);
  console.log(`· ficheiros: ${readdirSync(alvo).join(', ')}`);
  console.log(`\n[--seco] não publiquei nada. O comando real seria:\n  ${npx} vercel deploy ${alvo} --yes${prod ? ' --prod' : ''}`);
  process.exit(0);
}

/* ---------- 2. a CLI existe? ---------- */
const v = corre(['vercel', '--version'], { stdio: ['ignore', 'pipe', 'pipe'] });
if (v.status !== 0) {
  console.error(`erro: a CLI da Vercel não respondeu (${v.error?.message || v.stderr || `código ${v.status}`}).
  1. instala:  npm i -g vercel
  2. entra:    npx vercel login
  3. repete:   node deploy.mjs ${dir}${prod ? ' --prod' : ''}`);
  process.exit(1);
}
const versao = (v.stdout || '').trim().split('\n').pop();
console.log(`· vercel CLI ${versao} · ${slug} · ${prod ? 'PRODUÇÃO' : 'preview'}`);
console.log(`· ficheiros: ${readdirSync(alvo).join(', ')}`);

/* ---------- 3. publicar ---------- */
// Site estático puro: a pasta é a raiz. --yes salta as perguntas interativas (o script não tem tty).
// SEM o prefixo "prospector-": esse prefixo ia direto para a URL que o DONO DO RESTAURANTE recebe
// (ex. prospector-virtudes-guimaraes.vercel.app), e qualquer pessoa que a leia percebe que é uma
// máquina de prospeção em massa — o oposto exato da premissa "fiz este site para si".
const nomeProjeto = base => base.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 52) || 'site';
let nome = nomeProjeto(slug);
let colidiu = false;

// CLI ≥40: "--name" no deploy foi depreciado e É IGNORADO EM SILÊNCIO — o projeto sai
// com o nome da PASTA (ex. "out"), não do cliente. Apanhado a publicar a sério: a URL saiu
// "out-f9jfzie7r-....vercel.app" em vez de "vaninha-fashion...". O nome certo agora exige
// linkar o projeto ANTES do deploy, via `vercel link -p <nome> --yes` (cria se não existir).
function tentaLink(nomeAlvo) {
  return corre(['vercel', 'link', '--cwd', alvo, '-p', nomeAlvo, '--yes'], { stdio: ['ignore', 'pipe', 'pipe'] });
}
function tentaDeploy() {
  // --target explícito: a mesma versão da CLI promove o 1º deploy de um projeto novo a
  // PRODUÇÃO mesmo sem --prod ter sido passado (comportamento observado ao publicar a
  // Vaninha Fashion a sério — o "padrão seguro" documentado acima deixou de ser padrão).
  // Sem isto, "sem --prod" deixa de significar preview.
  const args = ['vercel', 'deploy', alvo, '--yes', '--target', prod ? 'production' : 'preview'];
  return corre(args);
}

let l = tentaLink(nome);
// A Vercel tem espaço de nomes global: "virtudes-guimaraes" pode já pertencer a outra conta.
// Sem isto, o deploy falhava sempre que dois leads no país inteiro tivessem nomes parecidos.
// Sufixo curto (4 hex) em vez de repetir o slug: o nome continua a ler-se como "feito para si",
// só com um pingo de sorte a menos.
if (l.status !== 0 && /already exists|already in use|already taken|is already assigned/i.test(l.stderr || l.stdout || '')) {
  colidiu = true;
  const sufixo = randomBytes(2).toString('hex');
  nome = nomeProjeto(`${slug}-${sufixo}`);
  console.log(`aviso: nome "${nomeProjeto(slug)}" já existe na Vercel (espaço global) — a tentar "${nome}"`);
  l = tentaLink(nome);
}
if (l.status !== 0) {
  console.error(`erro: não consegui linkar o projeto "${nome}" na Vercel (código ${l.status}).\n${l.stderr || l.stdout || ''}`);
  process.exit(1);
}

const r = tentaDeploy();
if (r.status !== 0) {
  console.error(`erro: o deploy falhou (código ${r.status}).\n${r.stderr || r.stdout || ''}`);
  console.error('Se falhou por autenticação: corre "npx vercel login" e repete.');
  process.exit(1);
}
// CLI ≥40: por omissão o `deploy` já não escreve só a URL no stdout — escreve um JSON
// ({ status, deployment: { url, ... } }). Tentamos o JSON primeiro e caímos para a regex
// antiga (URL nua numa linha) por compatibilidade com CLIs mais velhas.
let url;
try {
  const j = JSON.parse(r.stdout || '');
  const u = j?.deployment?.url;
  url = u ? (/^https?:\/\//.test(u) ? u : `https://${u}`) : undefined;
} catch { /* stdout não é JSON — tenta o formato antigo abaixo */ }
if (!url) url = (r.stdout || '').trim().split('\n').map(s => s.trim()).filter(s => /^https:\/\//.test(s)).pop();
if (!url) { console.error(`erro: a Vercel não devolveu URL.\n${r.stdout}\n${r.stderr}`); process.exit(1); }

/* ---------- 4. a URL responde mesmo? (senão o CRM mente) ---------- */
async function vivo(u, tentativas = 5) {
  for (let i = 1; i <= tentativas; i++) {
    try {
      const res = await fetch(u, { redirect: 'follow' });
      if (res.ok) return res.status;
      if (i === tentativas) return res.status;
    } catch (e) { if (i === tentativas) return `sem resposta (${e.message})`; }
    await new Promise(s => setTimeout(s, 2000)); // propagação do CDN
  }
}
const estado = await vivo(url);
if (estado !== 200) {
  console.error(`erro: ${url} respondeu ${estado} — publicado mas não servível. CRM não atualizado.`);
  console.error('Causa típica: pasta sem index.html na raiz, ou deploy protegido por autenticação (Vercel > Settings > Deployment Protection).');
  process.exit(1);
}

/* ---------- 5. CRM (fonte única da verdade) ---------- */
function crm(...a) {
  const c = spawnSync(process.execPath, [join(HERE, 'crm.mjs'), ...a], { encoding: 'utf8' });
  process.stdout.write(c.stdout || '');
  if (c.status !== 0) process.stderr.write(c.stderr || '');
  return c.status === 0;
}
console.log(`\n✓ 200 OK · ${url}`);
if (crm('set', slug, 'url_nova', url)) {
  crm('status', slug, 'publicado');
  // Nome efetivo só se gravar quando DIFERE do slug (colisão): rasto do que aconteceu, sem
  // ruído no CRM para o caso comum (sem colisão nenhuma, o nome do projeto já é óbvio pelo slug).
  if (colidiu) crm('set', slug, 'notas', `nome Vercel efetivo: ${nome} (colisão com "${nomeProjeto(slug)}")`);
} else console.log(`· (lead "${slug}" não está no CRM — corre "node tools/crm.mjs add briefs/${slug}.json")`);

console.log(`\npróximo passo:\n  node tools/capa.mjs briefs/${slug}.json --antes <url-do-site-atual> --depois ${url}`);
