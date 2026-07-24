#!/usr/bin/env node
/**
 * Página-capa da proposta — Prospector Premium
 * Uso: node capa.mjs <brief.json> --antes <url> [--depois <url>] [--out sites/<slug>/proposta.html]
 *      [--nome "Dr. Fulano"] [--config prospector-config.json]
 * Lead sem site (brief.semSite = true, ver commands/criar-do-zero.md): omite --antes —
 *      node capa.mjs <brief.json> [--depois <url>] [...]
 *
 * --depois é OPCIONAL desde que a capa passou a viver SEMPRE na mesma pasta do site (proposta.html
 * ao lado de index.html — ver run.mjs). Sem --depois, o "depois" é "./index.html", relativo: não
 * há razão nenhuma para depender da URL que só o deploy conhece, e essa dependência era o único
 * motivo para existirem DOIS deploys da mesma pasta no run.mjs. Passa --depois só quando quiseres
 * gerar a capa isolada (fora do run.mjs) apontando a uma URL diferente da pasta local.
 *
 * POR QUE ISTO EXISTE
 * O cliente NUNCA deve receber um link cru. Um link cru de desconhecido = golpe.
 * Esta página é o invólucro de confiança: ele abre e vê o NEGÓCIO DELE — o nome, a nota
 * real do Google, o site antigo ao lado do novo. O red-team foi claro: isto vende mais que
 * o site em si, porque é a única peça que o lead vê antes de decidir se confia.
 * No repo original era um template de 74 linhas com placeholders — subinvestido.
 *
 * Lead sem site próprio (brief.semSite): não existe "antes" e não se pode fingir que existe —
 * o layout muda para apresentação única (só o "depois"), sem toggle nem grade de comparação.
 *
 * Contrato: renderizada no servidor (funciona sem JS), mesma Lei de Estética do comparador.mjs
 * (dark sóbrio, General Sans + Switzer, 1 accent, zero gradiente multi-matiz, zero glow, zero
 * emoji). Zero pedido de dado pessoal. Zero preço. noindex.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

/* ---------- args ---------- */
const argv = process.argv.slice(2);
const flag = n => { const i = argv.indexOf(`--${n}`); return i > -1 ? argv[i + 1] : undefined; };

const briefPath = argv[0];
if (!briefPath || briefPath.startsWith('--')) {
  console.error('uso: node capa.mjs <brief.json> --antes <url> [--depois <url>] [--out ficheiro.html] [--nome "Dr. Fulano"] [--config prospector-config.json]');
  process.exit(1);
}
const brief = JSON.parse(readFileSync(briefPath, 'utf8'));
const antes = flag('antes');
// --depois sem valor -> "./index.html", relativo. A capa nasce SEMPRE ao lado do index.html
// (mesma pasta, mesmo deploy), portanto um link relativo funciona em qualquer domínio onde a
// pasta acabe por ser publicada, sem a capa ter de saber essa URL de antemão.
const depoisFlag = flag('depois');
const depois = depoisFlag || './index.html';
// semSite (lead sem site próprio, ver commands/criar-do-zero.md): não há "antes" para comparar,
// e não se pode fingir que existe — --antes fica de fora de propósito, não é um esquecimento.
const semSite = brief.semSite === true;
if (!antes && !semSite) { console.error('erro: --antes <url> é obrigatório (a não ser que o brief tenha "semSite": true).'); process.exit(1); }
// A validação de "URL completa" só faz sentido para valores que TÊM de ser absolutos: "antes" é
// sempre um site alheio (nunca relativo); "depois" só é validado quando alguém o passou à mão
// (o default "./index.html" é relativo de propósito e reprovaria aqui sem esta condição).
for (const [k, v] of [['antes', antes], ...(depoisFlag ? [['depois', depoisFlag]] : [])]) {
  if (v && !/^https?:\/\//i.test(v)) { console.error(`erro: --${k} tem de ser uma URL http(s) completa (recebido: ${v})`); process.exit(1); }
}
const out = flag('out') || join('sites', brief.slug, 'proposta.html');
const semRede = argv.includes('--sem-verificacao');

/* ---------- o site antigo deixa-se pôr em iframe? ---------- */
// Verificado no santaluziavet.pt: devolve "X-Frame-Options: SAMEORIGIN" — o iframe fica um
// retângulo BRANCO. Numa página cujo trabalho é gerar confiança, isso lê-se como "está partido".
// Por isso perguntamos ao servidor ANTES de gerar, e se ele recusa, mostramos um cartão honesto
// (ou o screenshot antigo.png, se existir) em vez de uma moldura morta.
async function deixaIframe(url) {
  if (semRede) return { ok: true, porque: '(verificação saltada)' };
  try {
    const r = await fetch(url, { method: 'GET', redirect: 'follow' });
    const xfo = (r.headers.get('x-frame-options') || '').toLowerCase();
    const csp = (r.headers.get('content-security-policy') || '').toLowerCase();
    if (/deny|sameorigin/.test(xfo)) return { ok: false, porque: `X-Frame-Options: ${xfo}` };
    const fa = /frame-ancestors\s+([^;]+)/.exec(csp);
    if (fa && !/\*/.test(fa[1])) return { ok: false, porque: `CSP frame-ancestors: ${fa[1].trim()}` };
    if (!r.ok) return { ok: false, porque: `HTTP ${r.status}` };
    return { ok: true, porque: `HTTP ${r.status}, sem bloqueio` };
  } catch (e) { return { ok: false, porque: `sem resposta (${e.message})` }; }
}
const framavel = antes ? await deixaIframe(antes) : { ok: false, porque: '(sem site anterior — semSite)' };

/* ---------- config do UTILIZADOR (nunca dados do cliente) ---------- */
const cfgPath = flag('config') || 'prospector-config.json';
const cfg = existsSync(cfgPath) ? JSON.parse(readFileSync(cfgPath, 'utf8')) : {};
const eu = cfg.assinatura || {};
if (!eu.nome) console.warn('aviso: sem prospector-config.json (ou sem assinatura.nome) — a capa sai sem contacto teu. Cria o ficheiro antes de enviar.');

/* ---------- helpers (mesmo escape do comparador.mjs) ---------- */
const esc = s => String(s ?? '').replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

const c = brief.cliente || {};
const empresa = c.nome || brief.slug;
// Nome próprio do responsável: só se existir mesmo. Nunca inventar (regra do brief: zero inventado).
const pessoa = flag('nome') || c.responsavel || c.contacto || '';
// brief.capa.headline/sub ganham: é a copy aprovada (ex. copy-elite) a entrar pelo brief.
// O <em> destaca uma palavra no accent; se a copy trouxer o nome da empresa, envolvemo-lo.
const titulo = brief.capa?.headline
  ? esc(brief.capa.headline).replace(esc(empresa), `<em>${esc(empresa)}</em>`)
  : pessoa
    ? `${esc(pessoa)}, esta é a nova versão do site da ${esc(empresa)}`
    : `Esta é a nova versão do site da <em>${esc(empresa)}</em>`;

/* ---------- prova social real (só o que está no brief) ---------- */
const prova = [];
if (c.nota) prova.push({ n: c.nota, l: c.avaliacoes ? `no Google · ${c.avaliacoes} avaliações` : 'no Google' });
const anos = /(\d+)\+?\s*anos/i.exec(brief.seo?.description || '');
if (anos) prova.push({ n: `${anos[1]}+`, l: 'anos de casa' });
const provaHtml = prova.length ? `<ul class="prova" role="list">${prova.map(p =>
  `<li><span class="prova__n">${esc(p.n)}</span><span class="prova__l">${esc(p.l)}</span></li>`).join('')}</ul>` : '';

/* ---------- CTA: contacto do UTILIZADOR (PT: email + telefone, nunca WhatsApp BR) ---------- */
const ctas = [];
if (eu.email) ctas.push(`<a class="btn btn--primary" href="mailto:${esc(eu.email)}?subject=${encodeURIComponent(`Nova versão do site — ${empresa}`)}">Marcar uma conversa</a>`);
if (eu.telefoneRaw) ctas.push(`<a class="btn" href="tel:${esc(eu.telefoneRaw)}">${esc(eu.telefone || eu.telefoneRaw)}</a>`);
const assinatura = eu.nome
  ? `<p class="autor">Feito por <b>${esc(eu.nome)}</b>${eu.apresentacao ? ` · ${esc(eu.apresentacao)}` : ''}</p>`
  : '';

/* ---------- painel "antes": iframe, screenshot ou cartão — nunca moldura morta ---------- */
// Em semSite não existe "antes" nenhum — nem tentamos montar o painel (nada de iframe src="").
const shot = join(dirname(out), 'antigo.png');
const telaAntes = semSite ? '' : framavel.ok
  ? `<iframe src="${esc(antes)}" loading="lazy" title="Site atual de ${esc(empresa)}" referrerpolicy="no-referrer"></iframe>
      <p class="nota-frame"><a href="${esc(antes)}" target="_blank" rel="noopener">Abrir o site atual numa janela nova</a></p>`
  : existsSync(shot)
    ? `<img src="antigo.png" alt="O site atual de ${esc(empresa)}" loading="lazy">
      <p class="nota-frame">Imagem do site atual — <a href="${esc(antes)}" target="_blank" rel="noopener">abrir numa janela nova</a></p>`
    : `<div class="vazio">
        <p>O servidor do site atual não permite mostrá-lo aqui dentro.</p>
        <p><a class="btn" href="${esc(antes)}" target="_blank" rel="noopener">Abrir o site atual numa janela nova</a></p>
      </div>`;

const CSS = `
:root{--canvas:#0e0e10;--surface:#17171a;--ink:#f2f2f0;--muted:#9a9a97;--line:rgba(255,255,255,.1);--accent:#e8e6e1;--radius:12px;--ease:cubic-bezier(0.32,0.72,0,1)}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--canvas);color:var(--ink);font:400 16px/1.6 'Switzer',system-ui,sans-serif}
h1,h2{font-family:'General Sans',system-ui,sans-serif;letter-spacing:-0.02em;margin:0;line-height:1.1}
.wrap{width:min(100% - 2rem,1240px);margin-inline:auto}
header{padding:4rem 0 2rem;max-width:52rem}
.kicker{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:0 0 1rem}
h1{font-size:clamp(1.75rem,1.1rem + 2.6vw,3rem)}
h1 em{font-style:normal;color:var(--accent)}
.sub{color:var(--muted);margin:1rem 0 0;max-width:44rem}
.autor{color:var(--muted);font-size:.9rem;margin:1.25rem 0 0}
.autor b{color:var(--ink);font-weight:600}
.prova{display:flex;flex-wrap:wrap;gap:1rem 3rem;list-style:none;padding:1.75rem 0 0;margin:1.75rem 0 0;border-top:1px solid var(--line)}
.prova li{display:flex;flex-direction:column}
.prova__n{font-family:'General Sans',system-ui,sans-serif;font-size:1.75rem;font-weight:600;letter-spacing:-0.02em;line-height:1}
.prova__l{color:var(--muted);font-size:.85rem;margin-top:.35rem}
.barra{display:flex;flex-wrap:wrap;gap:1rem;align-items:center;justify-content:space-between;padding:2rem 0 1.25rem;border-top:1px solid var(--line);margin-top:2.5rem}
.toggle{display:inline-flex;border:1px solid var(--line);border-radius:999px;padding:3px}
.toggle button{all:unset;cursor:pointer;padding:.45rem 1.1rem;border-radius:999px;font-size:.85rem;font-weight:500;transition:background 150ms var(--ease),color 150ms var(--ease)}
.toggle button[aria-selected=true]{background:var(--accent);color:#111}
.toggle button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.dica{color:var(--muted);font-size:.85rem}
.telas{display:grid;gap:1rem}
@media (min-width:1000px){.telas{grid-template-columns:1fr 1fr}.telas.solo{grid-template-columns:1fr}}
.tela{border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:var(--surface);margin:0;min-width:0}
.tela figcaption{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.6rem .9rem;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-bottom:1px solid var(--line)}
.tela .tag{color:#111;background:var(--accent);padding:.15rem .5rem;border-radius:4px;font-weight:600;letter-spacing:.04em}
.tela iframe{width:100%;height:min(70vh,760px);border:0;display:block;background:#fff}
.tela img{width:100%;height:auto;display:block}
.tela.solo-off{display:none}
.vazio{height:min(70vh,760px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.25rem;text-align:center;padding:2rem;color:var(--muted)}
.vazio p{margin:0;max-width:26rem}
.nota-frame{color:var(--muted);font-size:.8rem;padding:.6rem .9rem;border-top:1px solid var(--line)}
.nota-frame a{color:var(--ink)}
.fecho{padding:4rem 0 5rem;margin-top:3rem;border-top:1px solid var(--line);max-width:44rem}
.fecho h2{font-size:clamp(1.35rem,1rem + 1.4vw,1.9rem)}
.fecho p{color:var(--muted);margin:.9rem 0 0}
.acoes{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.75rem}
.btn{display:inline-flex;align-items:center;padding:.8rem 1.4rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:.92rem;border:1px solid var(--line);color:var(--ink);transition:transform 100ms var(--ease)}
.btn--primary{background:var(--accent);color:#111;border-color:var(--accent)}
.btn:active{transform:scale(.97)}
.btn:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
footer{border-top:1px solid var(--line);padding:1.75rem 0 3rem;color:var(--muted);font-size:.8rem}
@media (prefers-reduced-motion:reduce){*{transition:none !important}}
`;

/* Toggle: progressive enhancement. Sem JS, os dois iframes ficam lado a lado (estado útil). */
const JS = String.raw`
(function(){
  var telas=document.getElementById('telas'), antes=document.getElementById('tela-antes');
  var bLado=document.getElementById('b-lado'), bNovo=document.getElementById('b-novo');
  if(!telas||!antes||!bLado||!bNovo) return;
  function modo(m){
    var solo = m==='novo';
    telas.classList.toggle('solo',solo);
    antes.classList.toggle('solo-off',solo);
    bLado.setAttribute('aria-selected',String(!solo));
    bNovo.setAttribute('aria-selected',String(solo));
  }
  bLado.addEventListener('click',function(){modo('lado')});
  bNovo.addEventListener('click',function(){modo('novo')});
})();
`;

const html = `<!doctype html>
<html lang="${esc(brief.lang || 'pt-PT')}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>A nova versão do site — ${esc(empresa)}</title>
<meta name="robots" content="noindex">
<meta name="referrer" content="no-referrer">
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&f[]=switzer@400,500,600&display=swap">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
  <header>
    <p class="kicker">Preparado para ${esc(empresa)}</p>
    <h1>${titulo}</h1>
    <p class="sub">${brief.capa?.sub ? esc(brief.capa.sub) : semSite
      ? 'Já está no ar, para poder ver com calma. Abra também no telemóvel, é onde a maioria dos seus clientes vai chegar.'
      : 'Já está no ar, para poder ver com calma. Ao lado fica o site atual, para comparar. Abra também no telemóvel, é onde a maioria dos seus clientes vai chegar.'}</p>
    ${assinatura}
    ${provaHtml}
  </header>

  ${semSite ? '' : `<div class="barra">
    <div class="toggle" role="tablist" aria-label="Modo de visualização">
      <button id="b-lado" type="button" role="tab" aria-selected="true">Lado a lado</button>
      <button id="b-novo" type="button" role="tab" aria-selected="false">Só a nova</button>
    </div>
    <p class="dica">As duas versões estão a abrir aqui dentro, ao vivo.</p>
  </div>`}

  <div class="telas${semSite ? ' solo' : ''}" id="telas">
    ${semSite ? '' : `<figure class="tela" id="tela-antes">
      <figcaption>Site atual</figcaption>
      ${telaAntes}
    </figure>`}
    <figure class="tela">
      <figcaption>${semSite ? 'A proposta' : 'Nova versão'} <span class="tag">nova</span></figcaption>
      <iframe src="${esc(depois)}" title="${semSite ? 'Proposta de site' : 'Nova versão do site'} de ${esc(empresa)}"></iframe>
      <p class="nota-frame"><a href="${esc(depois)}" target="_blank" rel="noopener">Abrir ${semSite ? 'a proposta' : 'a nova versão'} em ecrã inteiro</a></p>
    </figure>
  </div>

  <section class="fecho">
    <h2>Se fizer sentido, falamos.</h2>
    <p>Fiz esta versão por iniciativa própria, sem compromisso nenhum da sua parte. Se gostar, marcamos uma conversa curta e explico como fica publicada no domínio da ${esc(empresa)} — e respondo a qualquer dúvida.</p>
    <div class="acoes">${ctas.join('') || '<span class="dica">(sem contacto configurado — ver prospector-config.json)</span>'}</div>
  </section>
</div>
<footer class="wrap">Apresentação privada${eu.nome ? ` de ${esc(eu.nome)}` : ''} para ${esc(empresa)}. Esta página não recolhe qualquer dado.</footer>
<script>${JS}</script>
</body>
</html>`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, html, 'utf8');
console.log(`✓ ${out}  (${(html.length / 1024).toFixed(1)} KB · ${pessoa ? `dirigida a ${pessoa}` : 'dirigida à empresa'} · ${prova.length} prova(s) social(is))`);
if (semSite) {
  console.log('· semSite: modo apresentação única (sem "antes") — nada de comparação.');
} else {
  const painel = framavel.ok ? 'iframe ao vivo' : existsSync(shot) ? 'screenshot antigo.png' : 'cartão com link (sem moldura morta)';
  console.log(`· site atual: ${framavel.porque} → painel "antes" = ${painel}`);
  if (!framavel.ok && !existsSync(shot)) console.log(`  dica: põe um screenshot em ${shot} e volta a correr — vê-se muito melhor que o cartão.`);
}
