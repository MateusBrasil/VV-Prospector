#!/usr/bin/env node
/**
 * Normalizador de componentes — Prospector Premium
 * Uso: node blockify.mjs <categoria/id> [<categoria/id> ...]
 *      node blockify.mjs hero-section/hero-14 menu/navegacao-menu-20
 *
 * POR QUE ISTO EXISTE (a Camada 1 do motor de composição)
 * Os 613 componentes Code Eagle são lindos mas NÃO se juntam num site: 490 têm
 * `body{}` global, 135 usam `.container`, etc. Dois no mesmo HTML = colisão, o site
 * parte. Este normalizador pega um componente e transforma-o num BLOCO ISOLADO:
 *   - CSS com todos os seletores prefixados por um scope único (não colide);
 *   - globais (body/html/:root/*) reescritos para o scope (não vazam);
 *   - JS embrulhado numa IIFE escopada ao elemento (dois GSAP não brigam);
 *   - assets (img/fontes/js locais) recolhidos e caminhos reescritos;
 *   - block.json com as libs partilhadas (gsap/lenis/three) e slots do cliente.
 *
 * A técnica é a da régua (Kasablanca): cada secção com CSS próprio namespaced.
 * Saída: blocks-ce/<categoria>/<id>/ com block.html, block.css, block.js, block.json
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname, extname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const BANK = join(ROOT, 'bank', '_componentes');
const OUT = join(ROOT, 'blocks-ce');

/* ---------- libs partilhadas: o motor carrega-as UMA vez, não por bloco ---------- */
const LIBS_CONHECIDAS = ['gsap', 'scrolltrigger', 'flip', 'splittext', 'lenis', 'three', 'swiper',
  'splitting', 'splittype', 'matter', 'imagesloaded', 'barba', 'locomotive'];

/* ---------- localizar o index.html de entrada do componente ---------- */
function acharEntrada(dir) {
  // preferir o index.html menos "profundo" (o do componente, não de subdemos)
  const htmls = [];
  (function walk(d, prof) {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      const s = statSync(p);
      if (s.isDirectory()) { if (!/node_modules|\.git/.test(f)) walk(p, prof + 1); }
      else if (f.toLowerCase() === 'index.html') htmls.push({ p, prof });
    }
  })(dir, 0);
  htmls.sort((a, b) => a.prof - b.prof);
  return htmls[0]?.p || null;
}

/* ---------- extrair <body> e as referências do <head> ---------- */
function partirHtml(html, baseDir) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let corpo = bodyMatch ? bodyMatch[1] : html;
  // remover os <script> do corpo (tratamos o JS à parte) mas guardar os src locais
  const scriptsLocais = [];
  corpo = corpo.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) => {
    const src = (tag.match(/src=["']([^"']+)["']/) || [])[1];
    if (src && !/^https?:/.test(src)) scriptsLocais.push(src);
    return ''; // fora do markup
  });
  // CSS: inline <style> + <link> locais
  const cssInline = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join('\n');
  const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)]
    .map(l => (l[0].match(/href=["']([^"']+)["']/) || [])[1])
    .filter(h => h && !/^https?:/.test(h));
  // fontes externas (CDN) que valem a pena manter (typekit/google) — o motor decide
  const fontesCdn = [...html.matchAll(/<link[^>]+href=["'](https:\/\/(?:use\.typekit|fonts\.googleapis)[^"']+)["']/gi)]
    .map(m => m[1]);
  return { corpo: corpo.trim(), cssInline, cssLinks, scriptsLocais, fontesCdn };
}

/* ---------- o coração: prefixar CSS e neutralizar globais ----------
 * Estratégia de parsing por chaves (não regex frágil): percorre o CSS, isola cada
 * regra {seletor}{corpo}, e reescreve o seletor. Trata @media/@supports (recursivo
 * no bloco interno) e deixa @keyframes/@font-face intactos (não são seletores).
 */
function escoparCss(css, scope) {
  const SCOPE = `[data-blk="${scope}"]`;
  let out = '';
  let i = 0;
  const n = css.length;

  function lerBloco(fim) {
    // devolve [texto até '{' , corpoEntreChaves, novoIndice] a partir de i
  }

  while (i < n) {
    // saltar comentários
    if (css[i] === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      i = end === -1 ? n : end + 2;
      continue;
    }
    // at-rules
    if (css[i] === '@') {
      const chave = css.slice(i).match(/^@([\w-]+)/)?.[1] || '';
      // até '{' ou ';'
      let j = i;
      while (j < n && css[j] !== '{' && css[j] !== ';') j++;
      const prelude = css.slice(i, j);
      if (css[j] === ';') { out += prelude + ';'; i = j + 1; continue; }
      // tem bloco { }
      const corpo = extrairChaves(css, j);
      if (/^(media|supports|container|layer)$/i.test(chave)) {
        // recursar dentro (os seletores lá dentro também escopam)
        out += prelude + '{' + escoparCss(corpo.texto, scope) + '}';
      } else {
        // keyframes, font-face, page... deixar intacto
        out += prelude + '{' + corpo.texto + '}';
      }
      i = corpo.fim;
      continue;
    }
    // regra normal: seletor { corpo }
    let j = i;
    while (j < n && css[j] !== '{' && css[j] !== '}' && css[j] !== '@') j++;
    if (j >= n) { out += css.slice(i); break; }
    // se apareceu um '@' colado (at-rule sem separação da regra anterior), volta ao topo do loop
    if (css[j] === '@') {
      const antes = css.slice(i, j);
      if (antes.trim()) out += antes; // espaço/lixo entre regras
      i = j;
      continue;
    }
    if (css[j] === '}') { out += css.slice(i, j + 1); i = j + 1; continue; }
    const seletorBruto = css.slice(i, j).trim();
    const corpo = extrairChaves(css, j);
    if (seletorBruto) out += prefixarSeletor(seletorBruto, SCOPE) + '{' + corpo.texto + '}';
    i = corpo.fim;
  }
  return out;
}

// dado indice de '{', devolve {texto: interior, fim: indice apos '}'}
function extrairChaves(css, aberturaIdx) {
  let depth = 0, i = aberturaIdx;
  for (; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}') { depth--; if (depth === 0) { i++; break; } }
  }
  return { texto: css.slice(aberturaIdx + 1, i - 1), fim: i };
}

function prefixarSeletor(seletor, SCOPE) {
  return seletor.split(',').map(s => {
    s = s.trim();
    if (!s) return s;
    // globais → viram o próprio scope (não vazam para o resto da página)
    if (/^(html|body|:root)$/i.test(s)) return SCOPE;
    if (s === '*') return `${SCOPE} *`;
    if (/^(html|body)\b/i.test(s)) return s.replace(/^(html|body)\b/i, SCOPE);
    // já tem o scope? não duplicar
    if (s.startsWith(SCOPE)) return s;
    return `${SCOPE} ${s}`;
  }).join(',');
}

/* ---------- reescrever url(...) do CSS para os assets recolhidos ---------- */
function reescreverUrls(css) {
  // ../img/x.png ou img/x.png -> assets/x.png (tudo recolhido plano em assets/)
  return css.replace(/url\((['"]?)([^'")]+)\1\)/gi, (m, q, url) => {
    if (/^(https?:|data:|#)/.test(url)) return m;
    const nome = basename(url.split('?')[0]);
    return `url(${q}assets/${nome}${q})`;
  });
}

/* ---------- recolher assets locais (imagens, fontes, js) ---------- */
function recolherAssets(compDir, entradaDir, destDir) {
  const assetsDir = join(destDir, 'assets');
  mkdirSync(assetsDir, { recursive: true });
  const EXT_ASSET = /\.(png|jpe?g|webp|gif|svg|avif|woff2?|ttf|otf|eot|mp4|webm|glb|gltf|hdr|glsl|json)$/i;
  let n = 0;
  (function walk(d) {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      const s = statSync(p);
      if (s.isDirectory()) { if (!/node_modules|\.git/.test(f)) walk(p); }
      else if (EXT_ASSET.test(f)) {
        const alvo = join(assetsDir, basename(f));
        if (!existsSync(alvo)) { try { copyFileSync(p, alvo); n++; } catch {} }
      }
    }
  })(entradaDir);
  return n;
}

/* ---------- ler o JS local do componente e escopá-lo ----------
 * Segue os `import ... from './x.js'` LOCAIS e inclui o código desses ficheiros
 * (resolve o grafo de módulos de forma simples). Sem isto, um `import {preloadImages}`
 * some e o componente rebenta com "preloadImages is not defined" — visto no hero-14.
 * As libs conhecidas (gsap/lenis/...) NÃO se incluem: vêm do motor, carregadas 1x.
 */
function resolverModulos(entradaDir, srcRel, vistos) {
  const p = join(entradaDir, srcRel);
  if (!existsSync(p) || vistos.has(p)) return '';
  vistos.add(p);
  let js = readFileSync(p, 'utf8');
  const modDir = dirname(p);
  const prereq = [];
  // seguir imports locais (./x.js, ../x.js), ignorar libs externas (bare specifiers, http, .min)
  js = js.replace(/^\s*import\s+(?:[^;'"]+\s+from\s+)?['"]([^'"]+)['"];?\s*$/gm, (m, spec) => {
    if (/^[./]/.test(spec) && !/\.min\./.test(spec)) {
      const sub = relative(entradaDir, join(modDir, spec)).replace(/\\/g, '/');
      prereq.push(resolverModulos(entradaDir, sub, vistos));
    }
    return ''; // remove a linha de import
  });
  js = js.replace(/^\s*export\s+(?:default\s+)?/gm, ''); // export const x -> const x
  return prereq.join('\n') + `\n/* ${basename(srcRel)} */\n` + js;
}

// um <script src="js/gsap.min.js"> é uma LIB, não código do componente: o motor
// carrega-a 1x partilhada (blocks-ce/_libs/). Sem este filtro, o blockify inlina o
// ficheiro inteiro da lib dentro do bloco (visto no grid-12: GSAP duplicado 2x).
function ehLibConhecida(srcRel) {
  const nome = basename(srcRel).toLowerCase();
  return LIBS_CONHECIDAS.some(l => nome.includes(l)) || /\.min\.js$/.test(nome);
}

function lerJsEscopado(entradaDir, scriptsLocais, scope) {
  const vistos = new Set();
  let js = scriptsLocais.filter(src => !ehLibConhecida(src))
    .map(src => resolverModulos(entradaDir, src, vistos)).filter(Boolean).join('\n');
  if (!js) return '';
  // REDIRECIONAR referências globais para o root do bloco. O componente foi escrito
  // assumindo que É a página inteira; como bloco, `document.body` etc. têm de apontar
  // ao seu wrapper [data-blk]. Sem isto, `body.classList.remove('loading')` mexe no
  // body errado e o bloco fica escondido (visto no hero-14).
  //  - document.body            -> __root
  //  - document.querySelector   -> __q  (procura dentro do bloco, com fallback global)
  //  - document.querySelectorAll-> __qa
  js = js
    .replace(/\bdocument\.body\b/g, '__root')
    .replace(/\bdocument\.querySelectorAll\b/g, '__qa')
    .replace(/\bdocument\.querySelector\b/g, '__q');
  // IIFE com helpers escopados ao bloco
  return `(function(){
  var __root = document.querySelector('[data-blk="${scope}"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };
${js}
})();`;
}

/* ---------- detetar libs ---------- */
function detetarLibs(texto) {
  const libs = new Set();
  for (const l of LIBS_CONHECIDAS) {
    if (new RegExp(l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(texto)) libs.add(l);
  }
  return [...libs];
}

/* ---------- normalizar UM componente ---------- */
function blockify(refBloco) {
  const compDir = join(BANK, refBloco);
  if (!existsSync(compDir)) return { ref: refBloco, erro: 'não existe no banco' };
  const entrada = acharEntrada(compDir);
  if (!entrada) return { ref: refBloco, erro: 'sem index.html (só preview/link?)' };

  const entradaDir = dirname(entrada);
  const html = readFileSync(entrada, 'utf8');
  const { corpo, cssInline, cssLinks, scriptsLocais, fontesCdn } = partirHtml(html, entradaDir);

  const scope = refBloco.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const destDir = join(OUT, refBloco);
  rmSync(destDir, { recursive: true, force: true });
  mkdirSync(destDir, { recursive: true });

  // 1. juntar todo o CSS (inline + ficheiros externos locais)
  let cssBruto = cssInline + '\n';
  for (const href of cssLinks) {
    const p = join(entradaDir, href);
    if (existsSync(p)) cssBruto += '\n' + readFileSync(p, 'utf8');
  }
  // 2. escopar + reescrever urls
  const cssFinal = reescreverUrls(escoparCss(cssBruto, scope));

  // 3. markup: embrulhar num wrapper com o data-blk
  const htmlFinal = `<div data-blk="${scope}">\n${corpo}\n</div>`;

  // 4. recolher assets e reescrever caminhos no HTML também
  const nAssets = recolherAssets(compDir, entradaDir, destDir);
  const htmlComAssets = htmlFinal.replace(/(src|href|data-src)=(["'])([^"']+)\2/gi, (m, attr, q, url) => {
    if (/^(https?:|data:|#|mailto:|tel:)/.test(url)) return m;
    return `${attr}=${q}assets/${basename(url.split('?')[0])}${q}`;
  }).replace(/background-image:\s*url\((['"]?)([^'")]+)\1\)/gi, (m, q, url) => {
    if (/^(https?:|data:)/.test(url)) return m;
    return `background-image:url(${q}assets/${basename(url.split('?')[0])}${q})`;
  });

  // 5. JS escopado
  const jsFinal = lerJsEscopado(entradaDir, scriptsLocais, scope);

  // 6. libs + meta
  const libs = detetarLibs(cssBruto + '\n' + jsFinal + '\n' + scriptsLocais.join(' '));

  writeFileSync(join(destDir, 'block.html'), htmlComAssets, 'utf8');
  writeFileSync(join(destDir, 'block.css'), cssFinal, 'utf8');
  if (jsFinal) writeFileSync(join(destDir, 'block.js'), jsFinal, 'utf8');
  writeFileSync(join(destDir, 'block.json'), JSON.stringify({
    ref: refBloco, scope, libs, fontesCdn,
    tem_js: !!jsFinal, n_assets: nAssets,
    _nota: 'Bloco normalizado por blockify.mjs. CSS escopado por [data-blk]. Adaptar slots à mão onde o cliente entra.',
  }, null, 2), 'utf8');

  return { ref: refBloco, scope, libs, nAssets, temJs: !!jsFinal, css_kb: +(cssFinal.length / 1024).toFixed(1) };
}

/* ---------- CLI ---------- */
const alvos = process.argv.slice(2);
if (!alvos.length) {
  console.log(`uso: node blockify.mjs <categoria/id> [...]
  ex:  node blockify.mjs hero-section/hero-14 menu/navegacao-menu-20
  saída: blocks-ce/<categoria>/<id>/ (block.html, block.css, block.js, block.json)`);
  process.exit(0);
}
mkdirSync(OUT, { recursive: true });
console.log(`\nA normalizar ${alvos.length} componente(s)...\n`);
for (const a of alvos) {
  const r = blockify(a);
  if (r.erro) console.log(`  ✗ ${a} — ${r.erro}`);
  else console.log(`  ✓ ${r.ref}  scope="${r.scope}"  libs:${r.libs.join(',') || '—'}  ${r.nAssets} assets  css ${r.css_kb}kb  ${r.temJs ? 'js' : 'sem-js'}`);
}
console.log('');
