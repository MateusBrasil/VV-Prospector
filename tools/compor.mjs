#!/usr/bin/env node
/**
 * Compositor — Prospector Premium (Camada 2 do motor)
 * Uso: node compor.mjs <plano.json> [--out sites/<slug>]
 *
 * POR QUE ISTO EXISTE
 * A Camada 0 (classificar) etiquetou cada componente como fluxo|contexto. A Camada 1
 * (blockify) transforma um componente num bloco isolado. Este compositor JUNTA os blocos
 * num site nível Awwwards, tratando cada tipo no modo certo:
 *   - CONTEXTO (hero/intro/overlay): wrapper com altura própria (min-height:100vh) para
 *     o 100vh interno não colapsar. É a correção do bug da Fase A (grelha descolou).
 *   - FLUXO (secções/texto/cards): empilham em sequência, no fluxo normal do documento.
 * Carrega as libs partilhadas (gsap/lenis/...) UMA vez. Injeta os tokens da marca.
 *
 * O plano.json descreve o site:
 * {
 *   "slug": "...", "titulo": "...", "descricao": "...",
 *   "tokens": { "--verde": "#...", ... },        // cor da marca (opcional)
 *   "fontes": "https://fonts.googleapis.com/...", // link de fonte (opcional)
 *   "blocos": [ { "ref": "hero-section/hero-14", "slots": {...} }, ... ]  // ordem = ordem no site
 * }
 * Cada bloco tem de ter sido normalizado antes (blocks-ce/<ref>/). Os slots trocam
 * imagens/textos do template pelas do cliente (find-replace simples por agora).
 *
 * `assetsExtra` (opcional, por bloco): pasta com fotos ESPECÍFICAS do cliente
 * (ex. "planos/_assets/<slug>/"), copiada por cima dos assets genéricos do bloco na
 * saída. NUNCA copiar foto de cliente para dentro de blocks-ce/ — é pasta partilhada
 * entre todos os sites que usam aquele bloco (ver armadilha do grid-12, 2026-07-21/22).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const BLOCKS = join(ROOT, 'blocks-ce');
const CAT = join(ROOT, 'bank', '_componentes', '_catalogo.json');

const planoPath = process.argv[2];
if (!planoPath) { console.error('uso: node compor.mjs <plano.json> [--out dir]'); process.exit(1); }
const plano = JSON.parse(readFileSync(planoPath, 'utf8'));
const outIdx = process.argv.indexOf('--out');
const outDir = outIdx > -1 ? process.argv[outIdx + 1] : join('sites', plano.slug);
const outAbs = join(ROOT, outDir);

// catálogo para saber o tipoLayout de cada bloco
const catalogo = existsSync(CAT) ? JSON.parse(readFileSync(CAT, 'utf8')) : { componentes: [] };
const tipoDe = ref => catalogo.componentes.find(c => c.pasta === ref)?.tipoLayout || 'fluxo';

/* ---------- mapa de libs partilhadas ---------- */
// ordem importa: ScrollTrigger/Flip são plugins do GSAP core, têm de carregar DEPOIS
const LIB_FILE = {
  gsap: 'gsap.min.js', scrolltrigger: 'ScrollTrigger.min.js', flip: 'Flip.min.js',
  lenis: 'lenis.min.js', imagesloaded: 'imagesloaded.pkgd.min.js',
};
const ORDEM_LIBS = ['gsap', 'scrolltrigger', 'flip', 'lenis', 'imagesloaded'];

/* ---------- montar ---------- */
mkdirSync(outAbs, { recursive: true });
const assetsOut = join(outAbs, 'blocos');
mkdirSync(assetsOut, { recursive: true });

const secoes = [];
const cssParts = [];
const jsParts = [];
const libsNecessarias = new Set();
const avisos = [];   // slots não encontrados, leftovers suspeitos — reportados no fim, não escondidos

// Nomes de marca conhecidos de sobrarem de templates de origem (Code Eagle/SaaS/agência) que já
// vazaram para sites entregues. Lista curada, cresce a cada caso real encontrado — ver auditoria
// dev-squad 2026-07-22 (Curology/Yourspace/Lumin no menu-20). Não é heurística genérica (isso fica
// mais caro e mais frágil); é a rede mínima que já teria apanhado todo vazamento visto até hoje.
const MARCAS_ALHEIAS = /\b(Curology|Yourspace|Lumin|AGENCY|Salle Blanche|Codegrid|MWT by|Le Cercle|Marbella|Lorem Ipsum|Lennox Montgomery|Zaire Dorwart|Alfonso Lubin|Hanna Siphron|Ashlynn Curtis|Martin Dorwart|Nolan Bergson)\b/i;

for (const b of plano.blocos) {
  const blkDir = join(BLOCKS, b.ref);
  if (!existsSync(blkDir)) { console.error(`✗ bloco não normalizado: ${b.ref} (corre blockify.mjs)`); continue; }
  const meta = JSON.parse(readFileSync(join(blkDir, 'block.json'), 'utf8'));
  const scope = meta.scope;
  // menu/header é fixed/overlay por natureza, nunca deve reservar 100vh no fluxo do documento
  const tipo = b.ref.startsWith('menu/') ? 'menu' : tipoDe(b.ref);

  // 1. HTML: aplicar slots (find-replace) e reescrever assets para blocos/<scope>/
  let html = readFileSync(join(blkDir, 'block.html'), 'utf8');
  for (const [de, para] of Object.entries(b.slots || {})) {
    const antes = html;
    html = html.split(de).join(para);
    if (html === antes) avisos.push(`⚠ SLOT NÃO ENCONTRADO em ${b.ref}: "${de.slice(0, 60)}${de.length > 60 ? '…' : ''}" — nada foi substituído (0 ocorrências)`);
  }
  html = html.replace(/(src|href)=(["'])assets\//gi, `$1=$2blocos/${scope}/assets/`)
             .replace(/url\((['"]?)assets\//gi, `url($1blocos/${scope}/assets/`);
  // E6 mecânico: se sobrou nome de marca alheia conhecida DEPOIS dos slots, o plano esqueceu de
  // preencher aquele texto. Falhar aqui é mais barato que o cliente encontrar no view-source.
  const marcaAlheia = html.match(MARCAS_ALHEIAS);
  if (marcaAlheia) avisos.push(`✗ MARCA ALHEIA no HTML final de ${b.ref}: "${marcaAlheia[0]}" — sobrou do template de origem, falta slot`);
  // envolver com a classe de tipo (contexto ganha altura própria)
  secoes.push(`<div class="blk blk--${tipo}" data-tipo="${tipo}">\n${html}\n</div>`);

  // 2. CSS (+ re-skin: 'vars' sobrepõe custom properties, 'estilo' injeta CSS extra — ambos scopados no bloco)
  let css = readFileSync(join(blkDir, 'block.css'), 'utf8');
  css = css.replace(/url\((['"]?)assets\//gi, `url($1blocos/${scope}/assets/`);
  // Uniformização de marca (fix da auditoria dev-squad 2026-07-22): cada bloco chega com a
  // fonte/peso do template ORIGINAL dele. Sem isto, compor 5 blocos de 5 templates diferentes
  // dá 4-5 famílias de fonte a brigar no mesmo site (medido: 4 no Virtudes v1) e reprova o gate
  // (T1/T10). `!important` de origem também é retirado — é quase sempre o autor do template a
  // brigar com o próprio framework dele, nunca uma decisão nossa; o `estilo` do plano (que SIM
  // pode usar !important) entra depois e vence por ordem no cascade.
  css = css.replace(/font-family\s*:\s*[^;]+;/gi, 'font-family: var(--font-body, inherit);')
           .replace(/!important/gi, '');
  cssParts.push(`/* ${b.ref} (${tipo}) */\n${css}`);
  if (b.vars && Object.keys(b.vars).length) {
    const decls = Object.entries(b.vars).map(([k, v]) => `  ${k}: ${v};`).join('\n');
    cssParts.push(`/* ${b.ref} — vars da marca */\n[data-blk="${scope}"]{\n${decls}\n}`);
  }
  if (b.estilo) {
    // reescreve o token {blk} pelo seletor de scope, para o autor do plano não repetir o data-blk
    cssParts.push(`/* ${b.ref} — re-skin */\n${b.estilo.split('{blk}').join(`[data-blk="${scope}"]`)}`);
  }

  // 3. JS
  if (meta.tem_js && existsSync(join(blkDir, 'block.js'))) {
    jsParts.push(`/* ${b.ref} */\n${readFileSync(join(blkDir, 'block.js'), 'utf8')}`);
  }

  // 4. libs + assets (fontesCdn do bloco NÃO entra: cada bloco vem de um template de origem
  // diferente e carregar a fonte de cada um é o que produz as 4 famílias a brigar no mesmo site.
  // A única fonte que carrega é a da marca, `plano.fontes` — ver uniformização de CSS acima.)
  (meta.libs || []).forEach(l => libsNecessarias.add(l));
  if (existsSync(join(blkDir, 'assets'))) {
    cpSync(join(blkDir, 'assets'), join(assetsOut, scope, 'assets'), { recursive: true });
  }
  // assetsExtra: fotos do cliente, copiadas por cima do genérico — NUNCA para dentro de blocks-ce/
  if (b.assetsExtra) {
    const extraDir = join(ROOT, b.assetsExtra);
    if (existsSync(extraDir)) cpSync(extraDir, join(assetsOut, scope, 'assets'), { recursive: true });
    else avisos.push(`⚠ assetsExtra não encontrado para ${b.ref}: ${b.assetsExtra}`);
  }
}

/* ---------- copiar libs partilhadas ---------- */
const libsOut = join(outAbs, 'libs');
mkdirSync(libsOut, { recursive: true });
const libSrc = join(BLOCKS, '_libs');
const libTags = [];
const jaCopiada = new Set();
const libsOrdenadas = [...libsNecessarias].sort((a, b) => ORDEM_LIBS.indexOf(a) - ORDEM_LIBS.indexOf(b));
for (const lib of libsOrdenadas) {
  const f = LIB_FILE[lib];
  if (f && !jaCopiada.has(f) && existsSync(join(libSrc, f))) {
    cpSync(join(libSrc, f), join(libsOut, f));
    libTags.push(`<script src="libs/${f}"></script>`);
    jaCopiada.add(f);
  }
}

/* ---------- tokens da marca ---------- */
// --font-heading/--font-body têm default (nunca 'inherit' vazio): sem isto, um bloco sem
// nenhuma das duas var() definidas herdava a font-family do <body> do browser (geralmente
// serifada), o oposto do que "uniformizar" deveria garantir.
const tokensDefault = { '--font-heading': "'Georgia', serif", '--font-body': "system-ui, -apple-system, sans-serif" };
const tokensFinais = { ...tokensDefault, ...(plano.tokens || {}) };
const tokens = `:root{\n${Object.entries(tokensFinais).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`;

/* ---------- CSS do motor: o tratamento por tipo (a correção da Fase A) ---------- */
const motorCss = `
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:#0e0e10;overflow-x:hidden;font-family:var(--font-body)}
/* CONTEXTO (hero/intro/overlay): altura própria para o 100vh interno não colapsar */
.blk--contexto{position:relative;min-height:100vh;width:100%;overflow:hidden}
.blk--contexto > [data-blk]{min-height:100vh}
/* FLUXO: empilha no fluxo normal */
.blk--fluxo{position:relative;width:100%}
/* MENU/HEADER: fixed/overlay por natureza, não reserva espaço no fluxo do documento */
.blk--menu{position:relative;width:100%;height:0}
/* Uniformização de marca: título usa a fonte de destaque, o resto herda o corpo.
   Vem DEPOIS dos blocos no cascade (mesma especificidade, ordem de origem decide) — cada
   bloco individual já foi normalizado para var(--font-body,inherit), isto só define o header. */
h1,h2,h3,h4,h5,h6,.display,.headline{font-family:var(--font-heading)}
`;

/* ---------- fontes ---------- */
const fonteMarca = plano.fontes ? `<link rel="stylesheet" href="${plano.fontes}">` : '';

/* ---------- shell ---------- */
const esc = s => String(s ?? '').replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
const doc = `<!doctype html>
<html lang="${plano.lang || 'pt-PT'}" class="js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(plano.titulo)}</title>
<meta name="description" content="${esc(plano.descricao)}">
${fonteMarca}
<style>
${tokens}
${motorCss}
${cssParts.join('\n\n')}
</style>
</head>
<body>
${secoes.join('\n\n')}
${libTags.join('\n')}
<script>
/* regista os plugins GSAP 1x para o site inteiro; os blocos não precisam repetir */
if (window.gsap) {
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (window.Flip) gsap.registerPlugin(Flip);
}
/* SplitText é plugin pago do GSAP (sem CDN livre); stub seguro para blocos que o referenciam não quebrarem */
if (!window.SplitText) {
  window.SplitText = class {
    constructor(el, opts) {
      const els = el instanceof Element ? [el] : Array.from(el || []);
      this.chars = els; this.words = els; this.lines = els;
    }
    revert() {}
  };
  if (window.gsap) gsap.registerPlugin(window.SplitText);
}
${jsParts.join('\n\n')}
</script>
</body>
</html>`;

writeFileSync(join(outAbs, 'index.html'), doc, 'utf8');
console.log(`\n✓ ${join(outDir, 'index.html')}`);
console.log(`  ${plano.blocos.length} blocos (${plano.blocos.map(b => tipoDe(b.ref)).join(', ')})`);
console.log(`  libs: ${[...libsNecessarias].join(', ') || '—'} · fonte da marca: ${plano.fontes ? 'sim' : 'não'}`);
console.log(`  peso HTML: ${(doc.length / 1024).toFixed(1)} KB`);

if (avisos.length) {
  const marcaAlheiaVista = avisos.some(a => a.startsWith('✗'));
  console.log(`\n${marcaAlheiaVista ? '❌' : '⚠'} ${avisos.length} aviso(s) de composição:`);
  for (const a of avisos) console.log(`  ${a}`);
  if (marcaAlheiaVista) {
    console.log('\nParar aqui: sobrou nome de marca alheia no HTML final (ver acima). Preencher o slot que falta no plano.json antes de publicar.');
    process.exit(1);
  }
} else {
  console.log('  0 avisos (nenhum slot vazio, nenhuma marca alheia detectada)');
}
