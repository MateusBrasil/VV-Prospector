#!/usr/bin/env node
/**
 * Motor de montagem — Prospector Premium
 * Uso: node assemble.mjs <brief.json> [--out sites/<slug>]
 *
 * POR QUE ISTO EXISTE
 * O gerador antigo pedia ao LLM que cuspisse ~20k tokens de HTML (6-12 min de streaming
 * por cliente) — e o resultado convergia pra média, i.e. "cara de IA".
 * Aqui o LLM só decide e escreve TEXTO (brief.json, ~3k tokens). Este script monta o HTML
 * a partir de blocos escritos à mão. Esqueleto humano => não parece IA. E é ~5x mais rápido.
 *
 * Contrato: tudo que é cor/tipo/espaço vem de token (Lei de Estética C3/E1).
 * Blocos NUNCA trazem hex — só var(--x).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BLOCKS = join(HERE, '..', 'blocks');
const VENDOR = join(HERE, '..', 'vendor');

const briefPath = process.argv[2];
if (!briefPath) { console.error('uso: node assemble.mjs <brief.json> [--out dir]'); process.exit(1); }
const brief = JSON.parse(readFileSync(briefPath, 'utf8'));
const outIdx = process.argv.indexOf('--out');
const outDir = outIdx > -1 ? process.argv[outIdx + 1] : join('sites', brief.slug);

/* ---------- helpers ---------- */
const esc = s => String(s ?? '').replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

// {{slot}} = escapado · {{{slot}}} = html cru (só onde o bloco declara) · {{#slot}}...{{/slot}} = condicional
function render(tpl, data) {
  return tpl
    .replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_, k, body) => (data[k] ? body : ''))
    .replace(/\{\{\{(\w+)\}\}\}/g, (_, k) => data[k] ?? '')
    .replace(/\{\{(\w+)\}\}/g, (_, k) => esc(data[k]));
}

function loadBlock(tipo, variante) {
  const p = join(BLOCKS, tipo, `${variante}.html`);
  if (!existsSync(p)) {
    const disponiveis = existsSync(join(BLOCKS, tipo)) ? readdirSync(join(BLOCKS, tipo)).map(f => f.replace('.html', '')) : [];
    throw new Error(`bloco inexistente: ${tipo}/${variante}. Disponíveis em "${tipo}": ${disponiveis.join(', ') || '(nenhum)'}`);
  }
  const raw = readFileSync(p, 'utf8');
  const css = [...raw.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');
  const html = raw.replace(/<style>[\s\S]*?<\/style>/g, '').trim();
  return { css, html };
}

/* ---------- 0. nível de motion (opt-in pelo brief) ----------
 * brief.motion = { nivel: "sobrio" | "cinema", lenis: true|false }
 *
 * "sobrio" (DEFAULT) — só o reveal CSS que já existia. Zero JS de biblioteca, zero KB extra.
 *   É o default de propósito: clínica não precisa de cinema, e o peso é o argumento.
 * "cinema" — inlina o subset do anime.js (+ Lenis se pedido) e liga 3 efeitos com
 *   propósito declarado. Custo medido: +38 KB raw / +16 KB gzip sobre os ~21 KB do sóbrio.
 *
 * Lenis (Lei S6): só em página narrativa, lerp 0.08–0.12. Exige cinema — smooth scroll
 * sem o resto do sistema é enfeite solto.
 */
const motion = brief.motion || {};
const cinema = motion.nivel === 'cinema';
const usarLenis = cinema && motion.lenis === true;
if (motion.nivel && !['sobrio', 'cinema'].includes(motion.nivel))
  throw new Error(`motion.nivel inválido: "${motion.nivel}" — use "sobrio" ou "cinema"`);
if (motion.lenis === true && !cinema)
  throw new Error('motion.lenis exige motion.nivel:"cinema" — Lei S6: smooth scroll isolado é enfeite.');

const lerLib = f => {
  const p = join(VENDOR, f);
  if (!existsSync(p)) throw new Error(`vendor em falta: ${p} — corre "node tools/vendor-anime.mjs"`);
  const src = readFileSync(p, 'utf8');
  // O ficheiro antigo do anime era uma mensagem de erro de 67 bytes servida como JS.
  // Falhar aqui é barato; falhar no navegador do cliente não é.
  try { new Function(src); } catch (e) { throw new Error(`vendor/${f} não é JS válido: ${e.message}`); }
  return src;
};

/* ---------- 1. tokens (Lei C3/E1: única fonte de cor/espaço) ---------- */
const t = brief.tokens || {};
// A escala vem PRIMEIRO e os tokens do brief DEPOIS: a base e uma rede de
// seguranca, o brief afina por cima. Ao contrario, um brief sem `step-4` gerava
// um hero com o h1 a 17px — o `var(--step-4)` do bloco ficava por resolver e o
// font-size herdava o corpo. O brief.exemplo.json nao traz `step-4`, portanto
// todo lead novo saia com o titulo do tamanho do texto. Medido, nao suposto.
const tokensCss = `:root{
  --step--1: clamp(.8125rem,.79rem + .12vw,.875rem);
  --step-0:  clamp(1rem,.96rem + .22vw,1.0625rem);
  --step-1:  clamp(1.25rem,1.15rem + .5vw,1.5rem);
  --step-2:  clamp(1.75rem,1.5rem + 1.2vw,2.5rem);
  --step-3:  clamp(2.25rem,1.7rem + 2.6vw,4rem);
  --step-4:  clamp(2.6rem,1.9rem + 3.4vw,4.4rem);
  --step-giga: clamp(4.5rem,3.2rem + 6.5vw,7.5rem);
  /* marca: o nome curto em tamanho de cartaz. 158px @1440 contra corpo de 17px
     = ratio 9.3x, o patamar medido no Kasablanca (9.4x). So aguenta 1-3 palavras. */
  --step-marca: clamp(3.5rem,11vw,13rem);
  --space-1:.5rem; --space-2:1rem; --space-3:1.5rem;
  --space-4:2.5rem; --space-5:4rem; --space-6:6rem;
  --ease: cubic-bezier(0.32, 0.72, 0, 1);
  --ring: 0 0 0 1px color-mix(in oklab, var(--ink) 12%, transparent);
${Object.entries(t).map(([k, v]) => `  --${k}: ${v};`).join('\n')}
}`;

/* ---------- 2. reset + base (uma voz só) ---------- */
const baseCss = `*,*::before,*::after{box-sizing:border-box}
body,h1,h2,h3,p,figure,blockquote,ul,ol{margin:0}
ul[role="list"]{list-style:none;padding:0}
html{-webkit-text-size-adjust:100%}
img,picture,svg{max-width:100%;display:block}
body{
  font-family:var(--font-body);font-size:var(--step-0);line-height:1.6;
  color:var(--ink);background:var(--canvas);
  -webkit-font-smoothing:antialiased;
  /* tratamento de foto uniforme — Lei: mesmo filtro no site inteiro */
}
img.foto{filter:contrast(1.03) saturate(0.96) brightness(1.01)}
h1,h2,h3{font-family:var(--font-display);line-height:1.1;letter-spacing:-0.02em;text-wrap:balance}
h1{font-size:var(--step-3)}
h2{font-size:var(--step-2)}
p{text-wrap:pretty;max-width:70ch}
a{color:inherit}
.wrap{width:min(100% - 2.5rem, 1140px);margin-inline:auto}
section{padding-block:var(--space-6)}
@media (max-width:768px){section{padding-block:var(--space-5)}}
.hairline{border:0;border-top:1px solid var(--hairline)}
/* CTA — Lei: cor do arquétipo, press feedback, focus ring. Nunca verde flutuante nem pulse. */
.cta{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.9rem 1.6rem;border-radius:var(--radius);
  background:var(--brand-cta);color:var(--cta-ink,#fff);
  font-family:var(--font-body);font-weight:600;text-decoration:none;
  transition:transform 100ms var(--ease), box-shadow 150ms var(--ease);
}
.cta:hover{transform:translateY(-1px)}
.cta:active{transform:scale(.97)}
.cta:focus-visible{outline:2px solid var(--brand-cta);outline-offset:3px}
/* barra de CTA no mobile (substitui o flutuante verde) */
.cta-bar{position:fixed;inset:auto 0 0 0;padding:.75rem 1rem;background:var(--canvas);
  border-top:1px solid var(--hairline);z-index:50;transform:translateY(100%);
  transition:transform 240ms var(--ease)}
.cta-bar.on{transform:none}
.cta-bar .cta{width:100%;justify-content:center}
@media (min-width:769px){.cta-bar{display:none}}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms !important;transition-duration:.01ms !important}
  .reveal{opacity:1 !important;transform:none !important}
}
/* Progressive enhancement: o conteúdo é visível por omissão. Só esconde para animar
   SE o JS estiver vivo (classe .js posta pelo próprio script). Sem isto, JS lento/bloqueado
   = página em branco — falha que nenhum gate mecânico apanha, só o olho no navegador. */
.js .reveal{opacity:0;transform:translateY(12px);transition:opacity 400ms var(--ease),transform 400ms var(--ease)}
.js .reveal.in{opacity:1;transform:none}`;

/* ---------- 2b. CSS do cinema (só quando pedido) ----------
 * Mesmo contrato de PE do .reveal: só esconde se o JS estiver vivo (.js) e há rede de
 * segurança de 2s. Os estados iniciais usam :not(...) de propósito — quando a animação
 * acaba o JS põe a classe e a regra deixa de casar, devolvendo o elemento ao seu estado
 * natural de folha de estilo. Sem isto, o transform inline que o anime.js deixa ganha do
 * :hover (inline > stylesheet) e mata a micro-interação do card.
 */
const cinemaCss = `
/* h1: máscara por linha. padding/margin cancelam-se para o clip não comer descendentes (g, p, q). */
.js.cinema [data-motion="linhas"]:not(.pronto){opacity:0}
.linha{display:block;overflow:clip;padding-block:.09em;margin-block:-.09em}
.linha__i{display:block}
.js.cinema [data-motion="linhas"] .linha__i{transform:translateY(100%)}
/* números: tabular-nums para os dígitos não dançarem enquanto o contador sobe */
.js.cinema [data-motion="contador"] .cred__num{font-variant-numeric:tabular-nums}
/* cards: o stagger substitui o reveal do grid inteiro (Lei S3: quebra a corrida de entradas iguais) */
.js.cinema [data-motion="cards"].reveal{opacity:1;transform:none;transition:none}
.js.cinema [data-motion="cards"]:not(.feito)>*{opacity:0;transform:translateY(14px);transition:none}
@media (prefers-reduced-motion:reduce){
  .js.cinema [data-motion="linhas"]{opacity:1 !important}
  .js.cinema [data-motion="linhas"] .linha__i{transform:none !important}
  .js.cinema [data-motion="cards"]:not(.feito)>*{opacity:1 !important;transform:none !important}
}`;

/* ---------- 3. blocos ---------- */
const cssParts = [], htmlParts = [];
for (const b of brief.blocos) {
  const { css, html } = loadBlock(b.tipo, b.variante);
  if (css && !cssParts.includes(css)) cssParts.push(css);
  htmlParts.push(render(html, { ...brief.cliente, ...b.slots }));
}

/* ---------- 4. JS (vanilla, inline, mínimo) ---------- */
const js = `
// reveal — 1 eixo, 400ms, respeita reduced-motion (media query cobre).
// Rede de segurança: sem IntersectionObserver, ou se algo falhar, o conteúdo APARECE.
// Conteúdo nunca fica refém da animação.
(function(){
  var alvos=document.querySelectorAll('.reveal');
  var mostrarTudo=function(){alvos.forEach(function(e){e.classList.add('in')})};
  if(!('IntersectionObserver' in window)){mostrarTudo();return}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
  },{threshold:.12,rootMargin:'0px 0px -40px'});
  alvos.forEach(function(el){io.observe(el)});
  setTimeout(mostrarTudo,2000); // se em 2s algo não revelou, revela — nunca deixa em branco
})();
// barra de CTA: aparece só depois do hero sair (Lei: nada flutuando desde o topo)
const hero=document.querySelector('[data-hero]'),bar=document.querySelector('.cta-bar');
if(hero&&bar){new IntersectionObserver(([e])=>bar.classList.toggle('on',!e.isIntersecting),{threshold:0}).observe(hero)}
// accordion acessível (altura via grid-template-rows — nunca anima height)
document.querySelectorAll('[data-acc] button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('[data-acc-item]'),open=item.hasAttribute('data-open');
    item.toggleAttribute('data-open',!open);btn.setAttribute('aria-expanded',String(!open));
  });
});`;

/* ---------- 4b. JS do cinema — 3 efeitos, cada um com propósito ----------
 * Lei M2: uma curva só no projeto inteiro, a canónica do --ease.
 * Lei M10: stagger ≤60ms/item, sequência total ≤600ms (delay do último + duração).
 * Lei M1: só transform e opacity (o contador escreve texto, não anima layout).
 */
const jsCinema = `
(function(){
  if(!window.anime){return}                      // lib não chegou: o reveal CSS trata de tudo
  var CURVA='cubicBezier(0.32,0.72,0,1)';        // === var(--ease). Não somar curvas (M2).
  var animate=window.anime.animate, stagger=window.anime.stagger;
  var h1=document.querySelector('[data-motion="linhas"]');
  var cred=document.querySelector('[data-motion="contador"]');
  var cards=document.querySelector('[data-motion="cards"]');

  // Rede de segurança: se qualquer coisa aqui falhar, o conteúdo APARECE. Mesmo contrato do reveal.
  function desistir(){
    if(h1){h1.classList.add('pronto');
      [].forEach.call(h1.querySelectorAll('.linha__i'),function(l){l.style.transform='none';l.style.opacity='1'})}
    if(cards){cards.classList.add('feito');
      [].forEach.call(cards.children,function(c){c.style.transform='';c.style.opacity=''})}
  }
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){desistir();return}  // M3
  window.addEventListener('error',desistir);
  setTimeout(function(){if(h1&&!h1.classList.contains('pronto'))desistir()},2000);

  function aoEntrar(el,fn){
    if(!el)return;
    var feito=false,go=function(){if(feito)return;feito=true;fn()};
    if(!('IntersectionObserver' in window)){go();return}
    // threshold BAIXO de propósito: é razão de área visível/área do ELEMENTO.
    // Numa grelha de 2x2 fotos (~1100px), .35 nunca chega num ecrã de 800px
    // e o conteúdo fica invisível — bug visto no navegador, não no gate.
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);go()}})
    },{threshold:.15});
    io.observe(el);
    // Rede de segurança (mesmo contrato do reveal): se em 2,5s o IO não disparou
    // (captura full-page, IO avariado, tab em background), o efeito corre na mesma
    // e o conteúdo aparece. Conteúdo nunca fica refém da animação.
    setTimeout(go,2500);
  }

  /* 1. Reveal por linha no h1.
     PROPÓSITO: hierarquia — o olho lê a promessa antes de tudo o resto entrar. */
  function partirLinhas(el){
    var spans=el.textContent.trim().split(/\\s+/).map(function(p){
      var s=document.createElement('span');
      s.textContent=p;s.style.display='inline-block'; // inline-block = offsetTop fiável por palavra
      return s;
    });
    el.textContent='';
    spans.forEach(function(s){el.appendChild(s);el.appendChild(document.createTextNode(' '))});
    var linhas=[],topo=null,atual;
    spans.forEach(function(s){
      if(s.offsetTop!==topo){topo=s.offsetTop;atual=[];linhas.push(atual)}
      atual.push(s.textContent);
    });
    el.textContent='';
    return linhas.map(function(ws){
      var m=document.createElement('span');m.className='linha';
      var i=document.createElement('span');i.className='linha__i';
      i.textContent=ws.join(' ');m.appendChild(i);el.appendChild(m);
      return i;
    });
  }
  if(h1){
    // Medir só depois das fontes: com a fonte de fallback as linhas quebram noutro sítio.
    // Teto de 500ms porque o h1 é candidato a LCP — não fica refém da rede da Fontshare.
    var fontes=document.fonts?document.fonts.ready:Promise.resolve();
    Promise.race([fontes,new Promise(function(r){setTimeout(r,500)})]).then(function(){
      var linhas=partirLinhas(h1);
      h1.classList.add('pronto');
      // 4 linhas: 3x50 + 450 = 600ms no teto do M10
      animate(linhas,{translateY:['100%','0%'],opacity:[0,1],duration:450,delay:stagger(50),ease:CURVA});
    });
  }

  /* 2. Contador nos números.
     PROPÓSITO: o número é a prova social — animá-lo faz o olho parar nele. */
  function contar(el,i){
    var m=el.textContent.trim().match(/^(\\D*?)(\\d+(?:[.,]\\d+)?)(\\D*)$/);
    if(!m)return;                                   // não é número (ex.: "24h") — deixa quieto
    var pre=m[1],bruto=m[2],suf=m[3];
    var sep=bruto.indexOf(',')>-1?',':'.';          // 4,8 é pt-PT: a vírgula tem de sobreviver
    var casas=(bruto.split(/[.,]/)[1]||'').length;
    var o={v:0};
    animate(o,{v:parseFloat(bruto.replace(',','.')),duration:500,delay:i*40,ease:CURVA,
      onUpdate:function(){el.textContent=pre+o.v.toFixed(casas).replace('.',sep)+suf},
      onComplete:function(){el.textContent=pre+bruto+suf}  // aterra no texto original, sem arredondamento
    });
  }
  if(cred){
    var nums=[].slice.call(cred.querySelectorAll('.cred__num'));
    aoEntrar(cred,function(){nums.forEach(contar)});   // 3x40 + 500 = 580ms (M10)
  }

  /* 3. Stagger nos cards das clínicas.
     PROPÓSITO: as 4 moradas entram como lista legível, uma a uma, em vez de um bloco só. */
  if(cards){
    var itens=[].slice.call(cards.children);
    aoEntrar(cards,function(){
      animate(itens,{translateY:['14px','0px'],opacity:[0,1],duration:400,delay:stagger(50),ease:CURVA,
        onComplete:function(){
          // classe primeiro, inline depois: devolve o card à folha de estilo e o :hover volta a viver
          cards.classList.add('feito');
          itens.forEach(function(c){c.style.transform='';c.style.opacity=''});
        }});   // 3x50 + 400 = 550ms (M10)
    });
  }
})();${usarLenis ? `
/* Lenis — Lei S6: só em página narrativa, lerp 0.08–0.12. Nunca sob reduced-motion. */
(function(){
  if(!window.Lenis||window.matchMedia('(prefers-reduced-motion: reduce)').matches){return}
  var l=new Lenis({lerp:0.1});
  (function raf(t){l.raf(t);requestAnimationFrame(raf)})();
})();` : ''}`;

/* ---------- 4c. libs vendorizadas, inline ----------
 * Tem de ser inline: o output é um HTML único que abre standalone (file://), sem servidor.
 * Só entram no nível cinema — o sóbrio não paga um byte por isto.
 */
const libsJs = cinema
  ? [lerLib('anime.subset.min.js'), ...(usarLenis ? [lerLib('lenis.min.js')] : [])].join('\n')
  : '';

/* ---------- 5. shell ---------- */
const f = brief.fontes || {};
const doc = `<!doctype html>
<html lang="${brief.lang || 'pt-PT'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script>document.documentElement.classList.add('js'${cinema ? `,'cinema'` : ''})</script>
<title>${esc(brief.seo?.title)}</title>
<meta name="description" content="${esc(brief.seo?.description)}">
<meta property="og:title" content="${esc(brief.seo?.title)}">
<meta property="og:description" content="${esc(brief.seo?.description)}">
${brief.seo?.ogImage ? `<meta property="og:image" content="${esc(brief.seo.ogImage)}">` : ''}
<link rel="preconnect" href="${f.preconnect || 'https://api.fontshare.com'}" crossorigin>
<link rel="stylesheet" href="${f.url}">
${brief.schema ? `<script type="application/ld+json">${JSON.stringify(brief.schema)}</script>` : ''}
<style>
${tokensCss}
${baseCss}${cinema ? cinemaCss : ''}
${cssParts.join('\n')}
</style>
<noscript><style>.reveal,[data-motion]{opacity:1 !important;transform:none !important}</style></noscript>
</head>
<body>
${htmlParts.join('\n')}
${libsJs ? `<script>${libsJs}</script>` : ''}
<script>${js}${cinema ? jsCinema : ''}</script>
</body>
</html>`;

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, 'index.html');
writeFileSync(outFile, doc, 'utf8');
const peso = (doc.length / 1024).toFixed(1);
const custoLibs = libsJs ? ` · libs inline +${(libsJs.length / 1024).toFixed(1)} KB` : '';
console.log(`✓ ${outFile}  (${peso} KB · ${brief.blocos.length} blocos · arquétipo ${brief.arquetipo})`);
console.log(`  motion: ${cinema ? 'cinema' : 'sobrio'}${usarLenis ? ' + lenis' : ''}${custoLibs}`);
