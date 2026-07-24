#!/usr/bin/env node
/**
 * Banco de componentes — Prospector Premium
 * Uso:
 *   node bank.mjs cats                          → lista as categorias e quantos há em cada
 *   node bank.mjs list <categoria>              → os componentes de uma categoria
 *   node bank.mjs find <termo>                  → busca por nome, tag, categoria ou lib
 *   node bank.mjs show <nome|pasta>             → detalhe de um componente (libs, ficheiros, caminho)
 *   flags: --lib gsap|three|lenis|...  --sem-lib (só vanilla)  --json
 *
 * POR QUE ISTO EXISTE
 * Colhemos 613 componentes do Code Eagle (assinatura do Mateus) para bank/_componentes/.
 * Sem isto, 613 pastas são um monte, não um recurso: ninguém acha "um menu com GSAP" ou
 * "um botão sem dependências" no meio delas. Esta ferramenta é o índice pesquisável que
 * torna o banco utilizável PELO MOTOR e pelo operador.
 *
 * REGRA DE USO (a mesma de sempre): o componente é matéria-prima para estudar a técnica e
 * extrair a peça ADAPTADA aos nossos tokens e à Lei de Estética. NUNCA copiar o template
 * cru para o cliente, que é o que faz "todo cliente igual".
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK = join(HERE, '..', 'bank', '_componentes');
const CAT = join(BANK, '_catalogo.json');

if (!existsSync(CAT)) {
  console.error(`erro: falta ${CAT}. O banco ainda não foi colhido/indexado.`);
  process.exit(1);
}
const catalogo = JSON.parse(readFileSync(CAT, 'utf8'));
const comps = catalogo.componentes;

const argv = process.argv.slice(2);
const cmd = argv[0];
const arg = argv.slice(1).find(a => !a.startsWith('--'));
const flag = n => { const i = argv.indexOf(`--${n}`); return i > -1 ? argv[i + 1] : undefined; };
const tem = n => argv.includes(`--${n}`);
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** Aplica os filtros de lib comuns a qualquer lista. */
function filtrar(lista) {
  const lib = flag('lib');
  if (lib) lista = lista.filter(c => c.libs.includes(norm(lib)));
  if (tem('sem-lib')) lista = lista.filter(c => !c.libs.length);
  return lista;
}

/** Detalhe: lê os ficheiros da pasta em disco. */
function ficheirosDe(pasta) {
  const dir = join(BANK, pasta);
  if (!existsSync(dir)) return [];
  const out = [];
  (function walk(d) {
    for (const f of readdirSync(d)) {
      if (f === '.ok') continue;
      const p = join(d, f);
      const s = statSync(p);
      if (s.isDirectory()) walk(p);
      else out.push({ rel: p.slice(dir.length + 1), kb: +(s.size / 1024).toFixed(1) });
    }
  })(dir);
  return out;
}

if (cmd === 'cats') {
  const by = {};
  for (const c of comps) (by[c.categoria] ??= { n: 0, disco: 0, libs: {} }).n++, c.emDisco && by[c.categoria].disco++,
    c.libs.forEach(l => by[c.categoria].libs[l] = (by[c.categoria].libs[l] || 0) + 1);
  if (tem('json')) { console.log(JSON.stringify(by, null, 2)); process.exit(0); }
  console.log(`\nBanco de componentes — ${comps.length} peças em ${Object.keys(by).length} categorias (${catalogo.em_disco} em disco)\n`);
  for (const [cat, v] of Object.entries(by).sort((a, b) => b[1].n - a[1].n)) {
    const topLibs = Object.entries(v.libs).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([l, n]) => `${l}:${n}`).join(' ');
    console.log(`  ${cat.padEnd(24)} ${String(v.n).padStart(3)}   ${topLibs}`);
  }
  console.log(`\n  node bank.mjs list <categoria>  ·  node bank.mjs find <termo>  ·  --lib gsap  ·  --sem-lib\n`);

} else if (cmd === 'list') {
  if (!arg) { console.error('uso: node bank.mjs list <categoria>'); process.exit(1); }
  let lista = comps.filter(c => norm(c.categoria).includes(norm(arg)) || c.catSlug.includes(norm(arg)));
  lista = filtrar(lista);
  if (tem('json')) { console.log(JSON.stringify(lista, null, 2)); process.exit(0); }
  if (!lista.length) { console.log(`(nada em "${arg}"${flag('lib') ? ` com lib ${flag('lib')}` : ''})`); process.exit(0); }
  console.log(`\n${lista.length} componente(s) em "${arg}"${flag('lib') ? ` · lib ${flag('lib')}` : ''}${tem('sem-lib') ? ' · sem dependências' : ''}\n`);
  for (const c of lista) console.log(`  ${(c.nome || '?').padEnd(34)} ${c.tipo.padEnd(6)} ${c.libs.join(',') || '(vanilla)'}${c.emDisco ? '' : '  ⚠ não em disco'}`);
  console.log('');

} else if (cmd === 'find') {
  if (!arg) { console.error('uso: node bank.mjs find <termo>'); process.exit(1); }
  const q = norm(arg);
  let lista = comps.filter(c =>
    norm(c.nome).includes(q) || norm(c.categoria).includes(q) ||
    (c.tags || []).some(t => norm(t).includes(q)) || c.libs.some(l => l.includes(q)));
  lista = filtrar(lista);
  if (tem('json')) { console.log(JSON.stringify(lista, null, 2)); process.exit(0); }
  if (!lista.length) { console.log(`(nada para "${arg}")`); process.exit(0); }
  console.log(`\n${lista.length} resultado(s) para "${arg}"\n`);
  for (const c of lista.slice(0, 40)) console.log(`  ${(c.nome || '?').padEnd(32)} ${c.categoria.padEnd(20)} ${c.libs.join(',') || '(vanilla)'}`);
  if (lista.length > 40) console.log(`  ... e mais ${lista.length - 40}`);
  console.log('');

} else if (cmd === 'show') {
  if (!arg) { console.error('uso: node bank.mjs show <nome|pasta>'); process.exit(1); }
  const q = norm(arg);
  const c = comps.find(x => x.pasta === arg || norm(x.nome) === q) || comps.find(x => norm(x.nome).includes(q) || x.pasta.includes(q));
  if (!c) { console.error(`não encontrado: "${arg}"`); process.exit(1); }
  const fich = ficheirosDe(c.pasta);
  if (tem('json')) { console.log(JSON.stringify({ ...c, ficheiros: fich }, null, 2)); process.exit(0); }
  console.log(`\n╭─ ${c.nome}`);
  console.log(`│  categoria: ${c.categoria} · tipo: ${c.tipo}${c.tipoLayout ? ` · layout: ${c.tipoLayout}` : ''} · libs: ${c.libs.join(', ') || '(vanilla)'}`);
  console.log(`│  tags: ${(c.tags || []).join(', ') || '—'}`);
  console.log(`│  pasta: bank/_componentes/${c.pasta}  (${c.emDisco ? 'em disco' : '⚠ não baixado'})`);
  if (fich.length) {
    console.log(`│\n├─ ${fich.length} ficheiro(s):`);
    for (const f of fich.slice(0, 20)) console.log(`│    ${f.rel} (${f.kb}kb)`);
    if (fich.length > 20) console.log(`│    ... e mais ${fich.length - 20}`);
  }
  console.log(`│\n╰─ Regra: estudar a técnica e extrair a peça ADAPTADA aos nossos tokens. Nunca copiar cru.\n`);

} else {
  console.log(`
Banco de componentes — ${comps.length} peças do Code Eagle, pesquisáveis

  node bank.mjs cats                    categorias e contagens
  node bank.mjs list <categoria>        componentes de uma categoria
  node bank.mjs find <termo>            busca por nome, tag, categoria ou lib
  node bank.mjs show <nome>             detalhe + ficheiros de um componente

  filtros:  --lib gsap|three|lenis|matter  ·  --sem-lib (vanilla)  ·  --json

  exemplos:
    node bank.mjs find menu --lib gsap
    node bank.mjs list botoes --sem-lib
    node bank.mjs show "Revolutionary Button"
`);
}
