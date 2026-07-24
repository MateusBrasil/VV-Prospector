#!/usr/bin/env node
/**
 * ADN medido de uma página do banco — Prospector Premium
 * Uso: node ce-dna.mjs <pasta-com-index.html> [--json]
 *
 * POR QUE ISTO EXISTE
 * A Lei de Estética julga o que o olho vê, não o que o CSS diz. Parsear CSS mente:
 * não resolve cascata, clamp(), media queries, nem herança. Isto abre a página num
 * Chrome real a 1440px e lê o getComputedStyle de cada nó — o número medido.
 *
 * Mede: ratio display:corpo, peso/line-height do display, famílias + género,
 * tokens de cor, gradientes, censo de easings e propriedades animadas.
 *
 * Régua (kasablanca-site, o padrão a bater): ratio 9,4× @1440 · mínimo aceitável 8×
 * peso 900 · line-height 0,85 · serif+grotesca+mono · 6 tokens de cor.
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('C:/Users/mateu/Documents/Projetos/kasablanca-site/node_modules/');
const { chromium } = require('playwright-core');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const DIR = resolve(process.argv[2] || '.');
const AS_JSON = process.argv.includes('--json');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.glb': 'model/gltf-binary',
  '.woff': 'font/woff', '.woff2': 'font/woff2' };

// Serve a pasta como está. Sem build: queremos o ADN do template como ele veio.
const server = createServer((req, res) => {
  let p = join(DIR, decodeURIComponent(req.url.split('?')[0]));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p)) { res.writeHead(404); return res.end('404'); }
  res.writeHead(200, { 'Content-Type': MIME[extname(p).toLowerCase()] || 'application/octet-stream' });
  res.end(readFileSync(p));
});

const GENERO = f => {
  const s = f.toLowerCase();
  if (/mono|code|courier|consol/.test(s)) return 'mono';
  if (/serif|georgia|times|garamond|playfair|merriweather|lora|cormorant/.test(s) && !/sans-serif/.test(s)) return 'serif';
  if (/script|cursive|hand/.test(s)) return 'script';
  return 'grotesca';
};

const medir = async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(1200); // deixa o GSAP/entrada assentar antes de ler

  const dna = await page.evaluate(() => {
    const texto = [];
    const familias = new Map(), cores = new Map(), grads = new Set(), easings = new Map(), props = new Map();
    for (const el of document.querySelectorAll('*')) {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
      if (own && r.width > 0 && cs.visibility !== 'hidden' && cs.display !== 'none') {
        const px = parseFloat(cs.fontSize);
        const lhRaw = cs.lineHeight;
        texto.push({
          px, peso: +cs.fontWeight,
          lh: lhRaw === 'normal' ? null : +(parseFloat(lhRaw) / px).toFixed(3),
          transform: cs.textTransform,
          fam: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
          tag: el.tagName.toLowerCase(),
          txt: el.textContent.trim().slice(0, 45),
        });
        familias.set(cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(), 1);
      }
      // cor: só o que pinta pixel — texto visível, fundos não transparentes, bordas com largura
      if (own) cores.set(cs.color, (cores.get(cs.color) || 0) + 1);
      const bg = cs.backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') cores.set(bg, (cores.get(bg) || 0) + 1);
      const bi = cs.backgroundImage;
      if (bi && bi.includes('gradient')) { grads.add(bi.slice(0, 120)); }
      // `transition-property: all` é o DEFAULT do CSS: todo o nó o reporta, anime ou não.
      // Contar sem olhar a duração dava "all ×150" — ruído que faz passar por motion o que é estático.
      // Só conta quem tem duração > 0. E o split tem de ser no topo: `cubic-bezier(.2,.8,.2,1)`
      // tem vírgulas dentro e um split ingénuo cospe "0.2" e "0.8" como easings separados.
      const topSplit = s => {
        const out = []; let d = 0, cur = '';
        for (const ch of s || '') {
          if (ch === '(') d++; if (ch === ')') d--;
          if (ch === ',' && d === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
        }
        if (cur.trim()) out.push(cur.trim());
        return out;
      };
      const dur = topSplit(cs.transitionDuration).map(parseFloat);
      const anim = parseFloat(cs.animationDuration) || 0;
      if (dur.some(x => x > 0)) {
        topSplit(cs.transitionTimingFunction).forEach((e, i) => {
          if ((dur[i] ?? dur[0]) > 0) easings.set(e, (easings.get(e) || 0) + 1);
        });
        topSplit(cs.transitionProperty).forEach((p, i) => {
          if ((dur[i] ?? dur[0]) > 0) props.set(p === 'all' ? 'all ⚠' : p, (props.get(p === 'all' ? 'all ⚠' : p) || 0) + 1);
        });
      }
      if (anim > 0) for (const e of topSplit(cs.animationTimingFunction)) easings.set(e, (easings.get(e) || 0) + 1);
    }
    texto.sort((a, b) => b.px - a.px);
    const display = texto[0] || null;
    // corpo = o tamanho mais frequente entre os nós de texto pequenos (< 24px): é o que domina a leitura
    const freq = new Map();
    for (const t of texto) if (t.px < 24) freq.set(t.px, (freq.get(t.px) || 0) + 1);
    const corpo = [...freq.entries()].sort((a, b) => b[1] - a[1])[0] || null;
    const ord = m => [...m.entries()].sort((a, b) => b[1] - a[1]);
    return {
      display, corpo: corpo ? { px: corpo[0], nós: corpo[1] } : null,
      familias: [...familias.keys()],
      cores: ord(cores).map(([c, n]) => ({ cor: c, usos: n })),
      gradientes: [...grads],
      easings: ord(easings).map(([e, n]) => ({ easing: e, usos: n })),
      props_animadas: ord(props).map(([p, n]) => ({ prop: p, usos: n })),
      nós_texto: texto.length,
    };
  });

  await browser.close(); server.close();

  const ratio = dna.display && dna.corpo ? +(dna.display.px / dna.corpo.px).toFixed(2) : null;
  const generos = [...new Set(dna.familias.map(GENERO))];
  return {
    medido_em: '1440x900, Chrome real, getComputedStyle',
    ratio_display_corpo: ratio,
    regua_kasablanca: { ratio: 9.4, minimo_aceitavel: 8, peso: 900, line_height: 0.85, tokens_cor: 6 },
    display: dna.display && { px: +dna.display.px.toFixed(1), peso: dna.display.peso, line_height: dna.display.lh,
      transform: dna.display.transform, familia: dna.display.fam, tag: dna.display.tag, texto: dna.display.txt },
    corpo: dna.corpo,
    familias: dna.familias, generos, contraste_genero: generos.filter(g => g !== 'script').length >= 3,
    tokens_cor: dna.cores.length, cores: dna.cores.slice(0, 12),
    gradientes: dna.gradientes.length, gradientes_amostra: dna.gradientes.slice(0, 3),
    easings: dna.easings, props_animadas: dna.props_animadas,
    nós_texto: dna.nós_texto,
  };
};

medir().then(d => {
  if (AS_JSON) return console.log(JSON.stringify(d, null, 2));
  console.log(`\nADN medido — ${DIR}\n`);
  console.log(`  ratio display:corpo   ${d.ratio_display_corpo}×  (régua 9,4× · mínimo 8×) ${d.ratio_display_corpo >= 8 ? '✓' : '✗'}`);
  if (d.display) console.log(`  display               ${d.display.px}px peso ${d.display.peso} lh ${d.display.line_height} ${d.display.transform} — "${d.display.texto}"`);
  if (d.corpo) console.log(`  corpo                 ${d.corpo.px}px (${d.corpo.nós} nós)`);
  console.log(`  famílias              ${d.familias.join(', ')}`);
  console.log(`  géneros               ${d.generos.join(' + ')} ${d.contraste_genero ? '✓' : '✗ (a régua pede serif+grotesca+mono)'}`);
  console.log(`  tokens de cor         ${d.tokens_cor}  (régua 6) ${d.tokens_cor <= 8 ? '✓' : '✗'}`);
  console.log(`  gradientes            ${d.gradientes}`);
  console.log(`  easings               ${d.easings.map(e => `${e.easing}×${e.usos}`).join(' · ') || '—'}`);
  console.log(`  props animadas        ${d.props_animadas.map(p => `${p.prop}×${p.usos}`).join(' · ') || '—'}\n`);
}).catch(e => { console.error('✗', e.message); server.close(); process.exit(1); });
