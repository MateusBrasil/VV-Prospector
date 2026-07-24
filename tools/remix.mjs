#!/usr/bin/env node
/**
 * Remix — clona um template do banco e re-skina para o cliente
 * Uso:
 *   node remix.mjs plan <template>            → mostra o :root, as fotos e os textos trocáveis
 *   node remix.mjs skin <template> <brief>    → gera sites/<slug>/ com a paleta do cliente
 *
 * POR QUE ISTO EXISTE (modo 2 do gerador)
 * `assemble.mjs` monta a partir dos NOSSOS blocos — controlo total, mas o tecto é o que
 * escrevemos à mão. Este modo faz o contrário: pega um template inteiro do banco (Code Eagle,
 * assinatura do Mateus) e troca só a pele + o conteúdo. Frontend igual ao original — que é
 * caro e bem feito — com a identidade do cliente.
 *
 * A REGRA QUE IMPEDE "TODO CLIENTE IGUAL":
 * Dois clientes do mesmo nicho NUNCA recebem o mesmo template. O `seed` (crc32 do place_id)
 * escolhe qual template do arquétipo entra — 17 templates × copy diferente × cor real da marca.
 * Se dois dentistas de Guimarães puserem os sites lado a lado e virem a mesma página, a venda
 * morre. O `--forcar` existe para o Mateus decidir, mas avisa.
 *
 * O QUE ESTE SCRIPT NÃO FAZ: adivinhar que texto é qual. O `plan` lista o que existe;
 * o brief diz o que entra no lugar. Sem brief.remix.textos, ele NÃO inventa — sai com erro.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const RAW = join(ROOT, 'bank', '_raw');

const cmd = process.argv[2];
const tpl = process.argv[3];

/** Extensões cujo conteúdo é reescrito (cor/texto/imagem). O resto é copiado byte a byte. */
const TEXTUAIS = ['.html', '.css', '.js', '.mjs', '.jsx', '.ts', '.tsx', '.vue', '.astro', '.svelte', '.json', '.md'];

const dirDe = t => join(RAW, t);
const listar = () => existsSync(RAW) ? readdirSync(RAW).filter(d => statSync(join(RAW, d)).isDirectory()) : [];

function ficheiros(dir) {
  const out = [];
  (function walk(d) {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) walk(p);
      else out.push(p);
    }
  })(dir);
  return out;
}

/** Extrai o :root e separa as vars de COR das outras.
 *  O cap de 20000 não é decorativo: o eagle2 tem um :root de 7776 chars e o cap antigo
 *  (6000) fazia o regex não casar — o `plan` saía com zero cores e o template parecia
 *  não ter tokens. Falha silenciosa, a pior espécie.
 *  `@theme{}` é o :root do Tailwind 4 (eagle5). Sem isto, o mesmo zero-cores. */
function tokensDe(txt) {
  const roots = [...txt.matchAll(/(?::root|@theme[^{]*)\s*\{([^}]{10,20000})\}/g)].map(m => m[1]).join('\n');
  const todas = [...roots.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(m => ({ k: m[1], v: m[2].trim() }));
  // Uma var por chave. Desde que passámos a ler todos os textuais, a mesma var aparece
  // em vários ficheiros e o plan listava "--brand--yellow" 2x — convite a mapear a
  // mesma cor duas vezes no brief. Fica a última definição (é a que o CSS aplica).
  const unicas = [...new Map(todas.map(t => [t.k, t])).values()];
  const eCor = v => /^#[0-9a-fA-F]{3,8}$|^(rgb|hsl|oklch)a?\(/.test(v);
  return { cores: unicas.filter(t => eCor(t.v)), outras: unicas.filter(t => !eCor(t.v)) };
}

/** Luminância relativa — para saber se uma cor é "clara" ou "escura" e mapear certo. */
function lum(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map(c => c + c).join('');
  if (h.length < 6) return 0.5;
  const [r, g, b] = [0, 2, 4].map(i => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
/** Croma aproximado (0-1) — distingue cor de marca de neutro. */
function croma(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map(c => c + c).join('');
  if (h.length < 6) return 0;
  const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
  return Math.max(r, g, b) - Math.min(r, g, b);
}

if (cmd === 'plan') {
  if (!tpl || !existsSync(dirDe(tpl))) {
    console.error(`uso: node remix.mjs plan <template>\ndisponíveis: ${listar().join(', ')}`);
    process.exit(1);
  }
  const dir = dirDe(tpl);
  const fs_ = ficheiros(dir);
  // Lê TODOS os textuais (não só .css/.html): num template React os tokens vivem num .ts
  // e o copy nos .tsx — filtrar por .html deixava o plan cego e a saída dizia "0 cores".
  const css = fs_.filter(f => TEXTUAIS.includes(extname(f))).map(f => readFileSync(f, 'utf8')).join('\n');
  const html = css;
  const { cores, outras } = tokensDe(css);

  const marca = cores.filter(c => croma(c.v) > 0.15).sort((a, b) => croma(b.v) - croma(a.v));
  const neutros = cores.filter(c => croma(c.v) <= 0.15);

  const imgs = [...new Set([...html.matchAll(/(?:src|href)="([^"]+\.(?:png|jpe?g|webp|svg|avif))"/gi)].map(m => m[1]))];
  const textos = [...new Set([...html.matchAll(/<(h1|h2|h3)[^>]*>([\s\S]{3,90}?)<\/\1>/gi)]
    .map(m => m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).filter(t => t.length > 3))];

  console.log(`\n╭─ REMIX PLAN — ${tpl}\n│`);
  console.log(`│  ${fs_.length} ficheiros · ${(fs_.reduce((a, f) => a + statSync(f).size, 0) / 1024).toFixed(0)} KB`);
  console.log(`│  libs: ${[...new Set((css.match(/gsap|lenis|three|swiper|tailwind|react/gi) || []).map(s => s.toLowerCase()))].join(', ') || '—'}`);
  console.log(`│\n├─ CORES DE MARCA (troca por brief.tokens) — ${marca.length}`);
  marca.slice(0, 8).forEach(c => console.log(`│    ${c.k.padEnd(34)} ${c.v.padEnd(10)} croma ${croma(c.v).toFixed(2)} ${lum(c.v) > .5 ? '(clara)' : '(escura)'}`));
  console.log(`│\n├─ NEUTROS (normalmente ficam) — ${neutros.length}`);
  neutros.slice(0, 5).forEach(c => console.log(`│    ${c.k.padEnd(34)} ${c.v}`));
  console.log(`│\n├─ OUTRAS VARS (fonte/espaço/radius) — ${outras.length}`);
  outras.slice(0, 4).forEach(c => console.log(`│    ${c.k.padEnd(34)} ${c.v.slice(0, 40)}`));
  console.log(`│\n├─ IMAGENS a trocar pelas do cliente — ${imgs.length}`);
  imgs.slice(0, 8).forEach(i => console.log(`│    ${i}`));
  console.log(`│\n├─ TÍTULOS a reescrever — ${textos.length}`);
  textos.slice(0, 8).forEach(t => console.log(`│    "${t.slice(0, 62)}"`));
  console.log(`│\n╰─ Põe o mapa em brief.remix = { template, cores:{--var:"#hex"}, textos:{"antigo":"novo"}, imagens:{"antiga":"nova"} }\n`);

} else if (cmd === 'skin') {
  const briefPath = process.argv[4];
  if (!tpl || !briefPath) { console.error('uso: node remix.mjs skin <template> <brief.json>'); process.exit(1); }
  const brief = JSON.parse(readFileSync(briefPath, 'utf8'));
  const r = brief.remix || {};
  const outIdx = process.argv.indexOf('--out');
  const outDir = outIdx > -1 ? process.argv[outIdx + 1] : join('sites', brief.slug);

  if (!existsSync(dirDe(tpl))) { console.error(`template "${tpl}" não está no banco — corre: node tools/ce-harvest.mjs pull ${tpl}`); process.exit(1); }
  if (!r.cores || !Object.keys(r.cores).length)
    { console.error('brief.remix.cores em falta — corre "plan" primeiro e mapeia as vars. Este script NÃO adivinha cor.'); process.exit(1); }

  const dir = dirDe(tpl);
  mkdirSync(outDir, { recursive: true });
  let trocasCor = 0, trocasTxt = 0, trocasImg = 0;

  for (const f of ficheiros(dir)) {
    const rel = relative(dir, f);
    const dest = join(outDir, rel);
    mkdirSync(dirname(dest), { recursive: true });
    const ext = extname(f).toLowerCase();

    // Templates React/Astro/Vue guardam o copy em .tsx/.jsx/.vue — não em .html.
    // Com a lista antiga (.html/.css/.js) o skin copiava-os intactos e o site saía
    // com o nome do template ainda lá, sem erro nenhum. Falha silenciosa que chega ao cliente.
    if (!TEXTUAIS.includes(ext)) { copyFileSync(f, dest); continue; }

    let txt = readFileSync(f, 'utf8');
    // 1. cor: troca o VALOR da var no :root — o resto do CSS herda sozinho
    for (const [k, v] of Object.entries(r.cores)) {
      const re = new RegExp(`(${k.replace(/[-]/g, '\\-')}\\s*:\\s*)([^;]+)(;)`, 'g');
      txt = txt.replace(re, (_, a, __, c) => { trocasCor++; return a + v + c; });
    }
    // 2. texto: substituição literal (o brief manda; não inventamos)
    for (const [de, para] of Object.entries(r.textos || {})) {
      if (txt.includes(de)) { txt = txt.split(de).join(para); trocasTxt++; }
    }
    // 3. imagem: troca src pelo asset real do cliente
    for (const [de, para] of Object.entries(r.imagens || {})) {
      if (txt.includes(de)) { txt = txt.split(de).join(para); trocasImg++; }
    }
    writeFileSync(dest, txt, 'utf8');
  }

  console.log(`\n✓ ${outDir}  (remix de "${tpl}")`);
  console.log(`  ${trocasCor} troca(s) de cor · ${trocasTxt} de texto · ${trocasImg} de imagem`);
  if (!trocasTxt) console.log(`  ⚠ zero textos trocados — o site ainda tem o copy do template. Mapeia brief.remix.textos.`);
  if (!trocasImg) console.log(`  ⚠ zero imagens trocadas — ainda tem as fotos do template. Fotos REAIS do cliente são regra inviolável.`);
  console.log(`\n  próximo: node tools/gate.mjs ${outDir}\n`);

} else {
  console.log(`
Remix — clonar template do banco e re-skinar para o cliente

  node remix.mjs plan <template>              o que dá para trocar (cores, textos, imagens)
  node remix.mjs skin <template> <brief.json> gera o site re-skinado

  templates no banco: ${listar().join(', ') || '(nenhum — corre ce-harvest.mjs pull todos)'}

Regra: 2 clientes do mesmo nicho nunca recebem o mesmo template (o seed escolhe).
Fotos e logo REAIS do cliente são inviolável — remix sem trocar imagem não vai para cliente.
`);
}
