#!/usr/bin/env node
/**
 * Comparador antes/depois — Prospector Premium
 * Uso: node comparador.mjs <clientes.json> [--out comparar.html]
 *
 * O red-team foi claro: o que VENDE não é o site, é o comparador — é a peça que o cliente
 * abre no email. No repo original era um template de 74 linhas, subinvestido numa ordem de
 * grandeza. Merge de JSON é script, nunca LLM.
 *
 * clientes.json = [{ slug, nome, nota?, avaliacoes?, antes, depois, editor? }]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const src = process.argv[2];
if (!src) { console.error('uso: node comparador.mjs <clientes.json> [--out comparar.html]'); process.exit(1); }
const outIdx = process.argv.indexOf('--out');
const out = outIdx > -1 ? process.argv[outIdx + 1] : 'comparar.html';

const novos = JSON.parse(readFileSync(src, 'utf8'));

// merge: nunca perde clientes antigos (regra herdada do plugin original)
let todos = novos;
if (existsSync(out)) {
  const m = readFileSync(out, 'utf8').match(/const CLIENTES\s*=\s*(\[[\s\S]*?\]);\s*\n/);
  if (m) {
    try {
      const antigos = JSON.parse(m[1]);
      const slugs = new Set(novos.map(c => c.slug));
      todos = [...novos, ...antigos.filter(c => !slugs.has(c.slug))];
    } catch { /* comparador antigo ilegível — recomeça com os novos */ }
  }
}

const CSS = `
:root{--canvas:#0e0e10;--surface:#17171a;--ink:#f2f2f0;--muted:#9a9a97;--line:rgba(255,255,255,.1);--accent:#e8e6e1;--radius:12px;--ease:cubic-bezier(0.32,0.72,0,1)}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--canvas);color:var(--ink);font:400 16px/1.6 'Switzer',system-ui,sans-serif}
h1,h2{font-family:'General Sans',system-ui,sans-serif;letter-spacing:-0.02em;margin:0;line-height:1.1}
.wrap{width:min(100% - 2rem,1240px);margin-inline:auto}
header{padding:3rem 0 1.5rem}
h1{font-size:clamp(1.75rem,1.2rem + 2vw,2.75rem)}
.sub{color:var(--muted);margin-top:.5rem}
nav{display:flex;gap:.5rem;flex-wrap:wrap;padding:1.5rem 0;border-bottom:1px solid var(--line)}
nav button{all:unset;cursor:pointer;padding:.55rem 1rem;border-radius:999px;border:1px solid var(--line);font-weight:500;font-size:.9rem;transition:background 150ms var(--ease)}
nav button:hover{background:var(--surface)}
nav button[aria-selected=true]{background:var(--accent);color:#111;border-color:var(--accent)}
nav button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.painel{padding:2rem 0 4rem}
.meta{display:flex;flex-wrap:wrap;gap:1rem 2rem;align-items:baseline;margin-bottom:1.25rem}
.meta h2{font-size:1.5rem}
.meta .nota{color:var(--muted);font-size:.9rem}
.toggle{display:inline-flex;border:1px solid var(--line);border-radius:999px;padding:3px;margin-bottom:1.25rem}
.toggle button{all:unset;cursor:pointer;padding:.4rem 1rem;border-radius:999px;font-size:.85rem;font-weight:500;transition:background 150ms var(--ease)}
.toggle button[aria-selected=true]{background:var(--accent);color:#111}
.toggle button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.sem-antes{color:var(--muted);font-size:.85rem;margin:0 0 1.25rem}
.telas{display:grid;gap:1rem}
@media (min-width:1000px){.telas{grid-template-columns:1fr 1fr}.telas.solo{grid-template-columns:1fr}}
.tela{border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:var(--surface);margin:0}
.tela figcaption{display:flex;justify-content:space-between;align-items:center;padding:.6rem .9rem;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-bottom:1px solid var(--line)}
.tela .tag{color:#111;background:var(--accent);padding:.15rem .5rem;border-radius:4px;font-weight:600}
.tela iframe{width:100%;height:70vh;border:0;display:block;background:#fff}
.acoes{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.25rem}
.acoes a{display:inline-flex;align-items:center;gap:.4rem;padding:.7rem 1.2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:.9rem;border:1px solid var(--line);color:var(--ink);transition:transform 100ms var(--ease)}
.acoes a.primary{background:var(--accent);color:#111;border-color:var(--accent)}
.acoes a:active{transform:scale(.97)}
.acoes a:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
@media (prefers-reduced-motion:reduce){*{transition:none !important}}
`;

const JS = String.raw`
let atual = 0, modo = 'lado';
const abas = document.getElementById('abas'), painel = document.getElementById('painel');
function esc(s){return String(s==null?'':s).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]))}
function render(){
  abas.innerHTML = CLIENTES.map((c,i)=>'<button role="tab" aria-selected="'+(i===atual)+'" onclick="sel('+i+')">'+esc(c.nome)+'</button>').join('');
  const c = CLIENTES[atual];
  if(!c){painel.innerHTML='<p>Sem clientes.</p>';return}
  const nota = c.nota ? '<span class="nota">&#9733; '+esc(c.nota)+' &middot; '+esc(c.avaliacoes)+' avaliações no Google</span>' : '';
  const temAntes = !!c.antes;
  // Sem "antes" (lead sem site próprio): nunca um iframe src="" — cartão explícito em vez
  // de moldura vazia, e o toggle "lado a lado" nem aparece (não há o que alternar).
  const antes = !temAntes ? ''
    : modo==='lado'
      ? '<figure class="tela"><figcaption>Site atual</figcaption><iframe src="'+esc(c.antes)+'" loading="lazy" title="Site atual de '+esc(c.nome)+'"></iframe></figure>'
      : '';
  const editor = c.editor ? '<a href="'+esc(c.editor)+'" target="_blank" rel="noopener">Editar textos e fotos</a>' : '';
  const toggle = temAntes
    ? '<div class="toggle" role="tablist">'+
        '<button role="tab" aria-selected="'+(modo==='lado')+'" onclick="setModo(\'lado\')">Lado a lado</button>'+
        '<button role="tab" aria-selected="'+(modo==='novo')+'" onclick="setModo(\'novo\')">Só a nova</button>'+
      '</div>'
    : '<p class="sem-antes">Sem site anterior para comparar — proposta do zero.</p>';
  painel.innerHTML =
    '<div class="meta"><h2>'+esc(c.nome)+'</h2>'+nota+'</div>'+
    toggle+
    '<div class="telas'+(modo==='novo'||!temAntes?' solo':'')+'">'+antes+
      '<figure class="tela"><figcaption>Nova versão <span class="tag">nova</span></figcaption><iframe src="'+esc(c.depois)+'" loading="lazy" title="Nova versão de '+esc(c.nome)+'"></iframe></figure>'+
    '</div>'+
    '<div class="acoes">'+
      '<a class="primary" href="'+esc(c.depois)+'" target="_blank" rel="noopener">Abrir a nova versão</a>'+
      editor+
      (temAntes ? '<a href="'+esc(c.antes)+'" target="_blank" rel="noopener">Ver o site atual</a>' : '')+
    '</div>';
}
function sel(i){atual=i;render()}
function setModo(m){modo=m;render()}
render();
`;

const html = `<!doctype html>
<html lang="pt-PT">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Antes / Depois</title>
<meta name="robots" content="noindex">
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&f[]=switzer@400,500&display=swap">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>Antes / Depois</h1>
    <p class="sub">A versão atual do site vs. a nova versão — já no ar.</p>
  </header>
  <nav id="abas" role="tablist"></nav>
  <div class="painel" id="painel"></div>
</div>
<script>
const CLIENTES = ${JSON.stringify(todos, null, 2)};
${JS}
</script>
</body>
</html>`;

writeFileSync(out, html, 'utf8');
console.log(`✓ ${out}  (${todos.length} cliente(s) · merge preservou os antigos)`);
