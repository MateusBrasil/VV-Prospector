#!/usr/bin/env node
/**
 * Galeria visual do banco — Prospector Premium
 * Uso: node bank-galeria.mjs   → gera bank/_componentes/_galeria.html
 *
 * POR QUE ISTO EXISTE
 * O `bank.mjs` pesquisa por texto (nome, lib, categoria). Mas curar componentes é
 * um ato VISUAL: "este hero é elegante para hotel, aquele é tech para SaaS" só se
 * decide com o olho. Renderizar os 613 um a um esbarra no timing de animação de
 * cada um. Solução: usar os thumbnails/vídeos OFICIAIS do Code Eagle (o autor já
 * capturou o estado final), montados numa página navegável por categoria.
 * Abrir _galeria.html no browser = ver os 613 e escolher.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK = join(HERE, '..', 'bank', '_componentes');
const api = JSON.parse(readFileSync(join(BANK, '_api-raw.json'), 'utf8'));
const cat = JSON.parse(readFileSync(join(BANK, '_catalogo.json'), 'utf8'));

// mapa nome -> {pasta, libs} do catálogo (para linkar o card ao ficheiro em disco)
const meta = new Map();
for (const c of cat.componentes) meta.set((c.nome || '').toLowerCase(), c);

const esc = s => String(s ?? '').replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

// agrupa por categoria (a legível, do catálogo)
const porCat = {};
for (const d of api) {
  const m = meta.get((d.title || '').toLowerCase());
  const categoria = m?.categoria || 'Outros';
  (porCat[categoria] ??= []).push({
    nome: d.title, thumb: d.thumbnailUrl, video: d.videoUrl,
    pasta: m?.pasta || '', libs: m?.libs || [], tipo: m?.tipo || '', temCodigo: m?.temCodigo !== false,
  });
}
const cats = Object.keys(porCat).sort((a, b) => porCat[b].length - porCat[a].length);

const card = c => `
<figure class="c${c.temCodigo ? '' : ' c--nocode'}" data-libs="${esc((c.libs || []).join(' '))}" data-nome="${esc(c.nome.toLowerCase())}" data-codigo="${c.temCodigo ? '1' : '0'}">
  <div class="c__media">
    ${c.temCodigo ? '' : '<span class="c__flag">só preview</span>'}
    ${c.video
      ? `<video src="${esc(c.video)}" ${c.thumb ? `poster="${esc(c.thumb)}"` : ''} muted loop playsinline preload="none" onmouseover="this.play()" onmouseout="this.pause()"></video>`
      : c.thumb ? `<img loading="lazy" src="${esc(c.thumb)}" alt="${esc(c.nome)}">`
      : `<div class="c__sem">sem preview</div>`}
  </div>
  <figcaption>
    <strong>${esc(c.nome || '?')}</strong>
    <span class="c__libs">${(c.libs || []).map(l => `<em>${esc(l)}</em>`).join('') || '<em class="van">vanilla</em>'}</span>
    ${c.pasta ? `<code>${esc(c.pasta)}</code>` : ''}
  </figcaption>
</figure>`;

const secoes = cats.map(cat => `
<section id="${esc(cat.replace(/\W+/g, '-'))}">
  <h2>${esc(cat)} <span>${porCat[cat].length}</span></h2>
  <div class="grid">${porCat[cat].map(card).join('')}</div>
</section>`).join('');

const nav = cats.map(c => `<a href="#${esc(c.replace(/\W+/g, '-'))}">${esc(c)} <b>${porCat[c].length}</b></a>`).join('');

const html = `<!doctype html><html lang="pt-PT"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Banco de componentes — galeria visual (${api.length})</title>
<style>
  :root{--bg:#0e0e10;--card:#17171a;--ink:#f2f2f0;--muted:#8a8a87;--line:rgba(255,255,255,.09);--accent:#e8e6e1}
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);font:400 14px/1.5 system-ui,sans-serif}
  header{position:sticky;top:0;z-index:9;background:color-mix(in srgb,var(--bg) 92%,transparent);
    backdrop-filter:blur(12px);border-bottom:1px solid var(--line);padding:.9rem 1.25rem}
  header h1{font-size:1rem;margin:0 0 .6rem}
  header input{width:min(320px,40vw);padding:.5rem .8rem;border-radius:8px;border:1px solid var(--line);
    background:var(--card);color:var(--ink);font-size:.9rem}
  nav{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.7rem}
  nav a{color:var(--muted);text-decoration:none;font-size:.78rem;padding:.25rem .6rem;border:1px solid var(--line);
    border-radius:999px}
  nav a:hover{color:var(--ink);border-color:var(--accent)}
  nav a b{color:var(--accent)}
  section{padding:1.5rem 1.25rem;border-top:1px solid var(--line)}
  section h2{font-size:1.1rem;display:flex;align-items:baseline;gap:.5rem;margin:0 0 1rem}
  section h2 span{color:var(--muted);font-size:.85rem;font-weight:400}
  .grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}
  .c{margin:0;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
  .c__media{position:relative;aspect-ratio:16/10;background:#000;overflow:hidden;display:flex;align-items:center;justify-content:center}
  .c__flag{position:absolute;top:.5rem;right:.5rem;z-index:2;background:#c0472b;color:#fff;font-size:.65rem;
    padding:.15rem .5rem;border-radius:4px;font-weight:600}
  .c--nocode{opacity:.6}
  .c__media img,.c__media video{width:100%;height:100%;object-fit:cover;display:block}
  .c__sem{color:var(--muted);font-size:.8rem}
  figcaption{padding:.6rem .75rem;display:flex;flex-direction:column;gap:.35rem}
  figcaption strong{font-size:.9rem;font-weight:600}
  .c__libs{display:flex;flex-wrap:wrap;gap:.3rem}
  .c__libs em{font-style:normal;font-size:.68rem;color:var(--muted);background:rgba(255,255,255,.06);
    padding:.1rem .45rem;border-radius:4px}
  .c__libs em.van{color:#9fd39f}
  figcaption code{font-size:.68rem;color:var(--muted);word-break:break-all}
  .hide{display:none !important}
</style></head><body>
<header>
  <h1>Banco de componentes — ${api.length} peças (Code Eagle) · passe o rato para ver o vídeo</h1>
  <input id="q" type="search" placeholder="filtrar por nome ou lib (gsap, three, lenis, vanilla)...">
  <nav>${nav}</nav>
</header>
${secoes}
<script>
  const q=document.getElementById('q');
  q.addEventListener('input',()=>{
    const v=q.value.trim().toLowerCase();
    document.querySelectorAll('.c').forEach(c=>{
      const hit=!v||c.dataset.nome.includes(v)||(c.dataset.libs||'').includes(v)||(v==='vanilla'&&!c.dataset.libs);
      c.classList.toggle('hide',!hit);
    });
    document.querySelectorAll('section').forEach(s=>{
      s.classList.toggle('hide',![...s.querySelectorAll('.c')].some(c=>!c.classList.contains('hide')));
    });
  });
</script>
</body></html>`;

const out = join(BANK, '_galeria.html');
writeFileSync(out, html, 'utf8');
const comThumb = api.filter(d => d.thumbnailUrl || d.videoUrl).length;
console.log(`✓ galeria: ${out}`);
console.log(`  ${api.length} componentes · ${comThumb} com preview · ${cats.length} categorias`);
console.log(`  abre no browser: file:///${out.replace(/\\/g, '/')}`);
