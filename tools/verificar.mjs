#!/usr/bin/env node
/**
 * PASSE VISUAL — o que faz "pronto" significar pronto sem alguém ter de olhar.
 *
 * Uso:  node tools/verificar.mjs <pasta-servível> [--brief <brief.json>] [--json]
 *       [--sem-screenshot] [--hotlink-estrito] [--viewports 375,1440]
 *
 * POR QUE ISTO EXISTE
 * O `gate.mjs` faz grep ao CÓDIGO. Isso deixa passar tudo o que só existe depois do JS montar
 * o DOM, e é lá que vivem os defeitos que já foram entregues a clientes reais deste projeto:
 *   · "Advisora" ×26 e "Pipely" ×10 no HTML de um site publicado
 *   · uma secção inteira a renderizar sem texto e com imagens vazias, com o build a passar
 *   · o site inteiro a cair para Times New Roman porque um token de fonte não resolvia
 * Nenhum destes é visível no source. Todos são triviais de ver num browser. Isto é o browser.
 *
 * O QUE ISTO NÃO FAZ, E TEM DE ESTAR ESCRITO
 * Não diz se está bonito, se a foto é mesmo do negócio, se a copy é verdadeira, se a animação
 * parece cara, nem se funciona em Safari real. Verde aqui significa "não está partido", nunca
 * "está aprovado". No dia em que alguém confundir as duas coisas, esta ferramenta passa a ser
 * um risco em vez de uma rede.
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { contexto, fecharBrowser, fonteBrowser, versaoBrowser } from './lib/browser.mjs';
import { servir } from './lib/servir.mjs';
import { LEFTOVER } from './lib/leftovers.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');

const VIEWPORTS_PADRAO = [
  { nome: '375', width: 375, height: 812, dpr: 2, movel: true },
  { nome: '1440', width: 1440, height: 900, dpr: 1, movel: false },
];

/** Hosts que servem imagem e que não controlamos. Um site vendido que dependa destes
 *  parte-se quando o dono do CDN mexer, sem nos avisar. */
const CDN_ALHEIO = /cloudfront\.net|images\.unsplash\.com|tympanus\.net|pexels\.com|pixabay\.com/i;
/** Fontes por CDN são toleradas (o próprio Kasablanca usa uma); imagens não. */
const CDN_FONTE = /fonts\.googleapis\.com|fonts\.gstatic\.com|fonts\.cdnfonts\.com|api\.fontshare\.com|use\.typekit\.net/i;

/**
 * Estabiliza a página ANTES de medir. É o passo que separa esta ferramenta de uma que
 * produz lixo: quase tudo aqui começa em opacity:0 e só entra quando o ScrollTrigger
 * dispara. Medir sem rolar lê metade do site como invisível, o gate cospe dezenas de
 * falsos positivos, e ao fim de uma semana alguém desliga a verificação. O passe de
 * scroll também força o lazy-load legítimo a resolver, o que isola o defeito real
 * (lazy ACIMA da dobra) do ruído.
 */
async function estabilizar(page, altura) {
  await page.waitForLoadState('networkidle').catch(() => {});
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const passo = Math.floor(altura * 0.8);
  for (let y = 0; y < total; y += passo) {
    await page.evaluate(v => window.scrollTo(0, v), y);
    await page.waitForTimeout(220);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
}

/* ---------- medições dentro da página ---------- */

/* Um só parâmetro: `page.evaluate` do Playwright serializa UM argumento, não vários.
 * As regex viajam como string porque objetos RegExp não sobrevivem à serialização. */
const medir = ({ leftoverSrc, cdnAlheioSrc, cdnFonteSrc }) => {
  const LEFT = new RegExp(leftoverSrc, 'i');
  const ALHEIO = new RegExp(cdnAlheioSrc, 'i');
  const FONTE_CDN = new RegExp(cdnFonteSrc, 'i');
  const achados = [];
  const add = (regra, nome, nivel, msg, el, extra = {}) => {
    const r = el?.getBoundingClientRect?.();
    achados.push({
      regra, nome, nivel, msg,
      seletor: el ? seletorDe(el) : null,
      rect: r ? { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) } : null,
      ...extra,
    });
  };
  function seletorDe(el) {
    if (!el?.tagName) return null;
    const t = el.tagName.toLowerCase();
    if (el.id) return `${t}#${el.id}`;
    const c = (typeof el.className === 'string' ? el.className : '').trim().split(/\s+/).filter(Boolean).slice(0, 2);
    return c.length ? `${t}.${c.join('.')}` : t;
  }
  const visivel = el => {
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    return cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity > 0.05 && r.width > 0 && r.height > 0;
  };

  /* V1 — rolagem horizontal */
  const de = document.documentElement;
  if (de.scrollWidth > innerWidth + 1) {
    // culpado: elemento que passa a direita, não fixed, e sem ancestral a cortar o overflow
    let culpado = null;
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.right <= innerWidth + 1 || getComputedStyle(el).position === 'fixed') continue;
      let p = el.parentElement, cortado = false;
      while (p && p !== document.body) {
        const ox = getComputedStyle(p).overflowX;
        if (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') { cortado = true; break; }
        p = p.parentElement;
      }
      if (!cortado) { culpado = el; break; }
    }
    add('V1', 'scroll-horizontal', 'FAIL',
      `scrollWidth ${de.scrollWidth}px > ${innerWidth}px (+${de.scrollWidth - innerWidth})`, culpado);
  }

  /* V4 — imagem quebrada. Foi assim que a secção StickyCards saiu vazia com o build a passar. */
  for (const img of document.images) {
    if (img.complete && img.naturalWidth === 0) {
      const src = img.getAttribute('src');
      add('V4', 'imagem-quebrada', 'FAIL',
        src ? `não carregou: ${src}` : 'sem atributo src (resolve para a própria página)', img);
    }
  }

  /* V5 — imagem servida por CDN de terceiro */
  const fontesImg = new Set();
  for (const img of document.images) { const s = img.currentSrc || img.src; if (s) fontesImg.add(s); }
  for (const el of document.querySelectorAll('*')) {
    const bi = getComputedStyle(el).backgroundImage;
    if (bi && bi !== 'none') for (const m of bi.matchAll(/url\(["']?([^"')]+)/g)) fontesImg.add(m[1]);
  }
  for (const u of fontesImg) {
    if (/^data:|^blob:/.test(u)) continue;
    let host; try { host = new URL(u, location.href).host; } catch { continue; }
    if (host === location.host) continue;
    if (FONTE_CDN.test(host)) continue;
    const nivel = ALHEIO.test(host) ? 'FAIL' : 'WARN';
    add('V5', 'imagem-de-terceiro', nivel, `${host} — some sem aviso e o site do cliente parte-se`, null, { url: u });
  }

  /* V6 — secção fantasma. O bug documentado que custou 3 iterações a culpar o design. */
  const seccoes = [...document.querySelectorAll('body > *, main > *, section')];
  /** Vazio-de-propósito: coisas que EXISTEM sem pintar e estão certas assim.
   *  Sem esta isenção o verificador reprova todo site feito em Next, porque o framework
   *  injeta um `next-route-announcer` (região live para leitor de ecrã, altura 0 por desenho).
   *  A mesma lógica cobre qualquer elemento de acessibilidade escondido ao olho e presente
   *  para quem ouve: reprová-los seria penalizar exatamente quem faz a coisa certa. */
  const invisivelDePropósito = el =>
    el.tagName.includes('-') ||                       // custom elements de framework
    el.hasAttribute('aria-live') ||
    el.getAttribute('role') === 'alert' ||
    el.getAttribute('aria-hidden') === 'true' ||
    /(^|\s)(sr-only|visually-hidden|screen-reader)(\s|$)/.test(
      typeof el.className === 'string' ? el.className : '');

  for (const s of seccoes) {
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'LINK'].includes(s.tagName)) continue;
    if (invisivelDePropósito(s)) continue;
    const cs = getComputedStyle(s);
    if (cs.position === 'fixed' || cs.display === 'none') continue;
    const r = s.getBoundingClientRect();
    if (r.height < 40) { add('V6', 'seccao-fantasma', 'FAIL', `altura ${Math.round(r.height)}px após o passe de scroll`, s); continue; }
    const temTexto = [...s.querySelectorAll('*')].some(e =>
      [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && visivel(e));
    const temImagem = [...s.querySelectorAll('img')].some(i => i.naturalWidth > 0);
    const temFundo = cs.backgroundImage !== 'none' ||
      (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent');
    const temCanvas = s.querySelector('canvas, svg, video');
    if (!temTexto && !temImagem && !temFundo && !temCanvas)
      add('V6', 'seccao-vazia', 'FAIL', `${Math.round(r.height)}px de altura sem pintar nada`, s);
  }

  /* V7 — marca alheia no DOM RENDERIZADO. O gate vê o source; isto vê o que o JS montou. */
  const alvos = [['texto visível', document.body.innerText], ['<title>', document.title],
    ['meta description', document.querySelector('meta[name="description"]')?.content || '']];
  for (const el of document.querySelectorAll('[alt],[title],[aria-label],[placeholder]'))
    for (const a of ['alt', 'title', 'aria-label', 'placeholder'])
      if (el.hasAttribute(a)) alvos.push([`${a}=`, el.getAttribute(a)]);
  // O CAMINHO DOS RECURSOS TAMBÉM CONTA, e foi preciso medir para perceber porquê.
  // No `sites/vst-motor` havia "advisora" 26 vezes no HTML, mas ZERO no texto renderizado:
  // estava todo nas URLs das imagens (`cloudfront.net/advisora/images/...`). Um verificador
  // que só olhasse para o texto visível daria verde a um site cujas fotos são servidas da
  // pasta de outra marca. É vazamento na mesma, e traz junto a dependência de um CDN alheio.
  for (const u of fontesImg) alvos.push(['URL de recurso', u]);
  for (const s of document.querySelectorAll('script[src], link[href]'))
    alvos.push(['URL de recurso', s.getAttribute('src') || s.getAttribute('href') || '']);

  const vistos = new Set();
  for (const [onde, texto] of alvos) {
    const m = String(texto || '').match(LEFT);
    if (m && !vistos.has(m[0].toLowerCase() + onde)) {
      vistos.add(m[0].toLowerCase() + onde);
      add('V7', 'marca-alheia', 'FAIL', `"${m[0]}" em ${onde} — sobra do template de origem`, null,
        onde === 'URL de recurso' ? { url: String(texto).slice(0, 120) } : {});
    }
  }

  /* V6b — lazy acima da dobra (medido no primeiro ecrã, antes de qualquer scroll do utilizador) */
  for (const img of document.querySelectorAll('img[loading="lazy"]')) {
    const r = img.getBoundingClientRect();
    if (r.top + scrollY < innerHeight)
      add('V6b', 'lazy-acima-da-dobra', 'FAIL', 'lazy no primeiro ecrã: aparece vazio no primeiro paint', img);
  }

  /* V9 — texto cortado sem reticências (reticências é truncagem intencional) */
  for (const el of document.querySelectorAll('body *')) {
    if (!visivel(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.overflow === 'visible' || cs.textOverflow === 'ellipsis' || cs.webkitLineClamp !== 'none') continue;
    const proprio = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    if (!proprio) continue;
    if (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2)
      add('V9', 'texto-cortado', 'FAIL', `conteúdo ${el.scrollWidth}×${el.scrollHeight} não cabe em ${el.clientWidth}×${el.clientHeight}`, el);
  }

  /* V10 — fonte do display não carregou. Foi o sintoma do token de fonte no escopo errado:
     o site inteiro em Times New Roman, e nada no build a avisar. */
  let maiorPx = 0, maiorEl = null;
  for (const el of document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,div')) {
    if (!visivel(el)) continue;
    if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue;
    const px = parseFloat(getComputedStyle(el).fontSize);
    if (px > maiorPx) { maiorPx = px; maiorEl = el; }
  }
  if (maiorEl) {
    const cs = getComputedStyle(maiorEl);
    const fam = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
    const generica = /^(Times New Roman|Times|serif|sans-serif|monospace|Arial|Helvetica)$/i.test(fam);
    if (generica)
      add('V10', 'fonte-nao-carregou', 'FAIL',
        `o maior texto da página (${Math.round(maiorPx)}px) está em "${fam}": a fonte da marca não resolveu`, maiorEl);
    else if (document.fonts && !document.fonts.check(`${cs.fontWeight} ${cs.fontSize} "${fam}"`))
      add('V10', 'fonte-nao-carregou', 'WARN', `"${fam}" declarada mas não disponível`, maiorEl);
  }

  /* V11 — lang, title, h1 */
  const lang = document.documentElement.lang;
  if (!lang) add('V11', 'lang-ausente', 'FAIL', '<html> sem lang: leitor de ecrã e Google leem a língua errada', null);
  if (!document.title?.trim() || /^(Create Next App|Document|Untitled)$/i.test(document.title))
    add('V11', 'title-por-preencher', 'FAIL', `<title> = "${document.title}"`, null);
  const h1s = document.querySelectorAll('h1');
  if (h1s.length === 0) add('V11', 'sem-h1', 'WARN', 'a página não tem h1', null);
  if (h1s.length > 1) add('V11', 'h1-repetido', 'WARN', `${h1s.length} elementos h1`, null);

  /* V12 — contacto por preencher */
  for (const a of document.querySelectorAll('a[href]')) {
    const h = a.getAttribute('href') || '';
    if (/^(tel:|mailto:)/.test(h)) {
      if (/example\.com|000000|123456|\+1 \(123\)|seu-?email|your-?email/i.test(h))
        add('V12', 'contacto-placeholder', 'FAIL', `${h} — contacto de exemplo em produção`, a);
    }
    if (/^(#|javascript:void)/.test(h) && a.closest('nav, header, footer, .cta') && a.innerText.trim())
      add('V12', 'link-morto', 'WARN', `"${a.innerText.trim().slice(0, 30)}" aponta para "${h}"`, a);
  }

  /* W4 — alvo de toque pequeno (só no viewport móvel; quem chama filtra) */
  for (const el of document.querySelectorAll('a, button')) {
    if (!visivel(el)) continue;
    const r = el.getBoundingClientRect();
    if ((r.width < 44 || r.height < 44) && el.innerText.trim())
      add('W4', 'alvo-de-toque', 'WARN', `${Math.round(r.width)}×${Math.round(r.height)}px (mínimo confortável 44)`, el);
  }

  /* W6 — imagem sem alt */
  for (const img of document.querySelectorAll('img:not([alt])'))
    add('W6', 'img-sem-alt', 'WARN', img.getAttribute('src') || '(sem src)', img);

  /* ============================================================================
   * IA1..IA5 — sinais mecânicos de "cara de IA".
   *
   * A régua do Mateus: tem de ser impossível a um especialista olhar e dizer com
   * 100% de certeza que foi feito por IA. Isso não se mede por completo, e dizer o
   * contrário seria mentira. Mas há TELLS que são mecânicos, e um gerador cai neles
   * quase sempre porque são exatamente as decisões que ninguém toma quando não há
   * ninguém a decidir. Todos entram como WARN: nenhum deles sozinho condena um site,
   * mas três juntos são um diagnóstico.
   * ============================================================================ */

  /* IA1 — display grande com letter-spacing por defeito.
     O tell mais fiável que existe. Tipo grande com tracking 0 lê-se sempre frouxo,
     e qualquer designer aperta por reflexo. Um gerador não toca no default. */
  const semTracking = [];
  for (const el of document.querySelectorAll('h1,h2,h3,h4,.display,.headline')) {
    if (!visivel(el)) continue;
    if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue;
    const cs = getComputedStyle(el);
    const px = parseFloat(cs.fontSize);
    if (px < 32) continue;
    const ls = cs.letterSpacing;
    if (ls === 'normal' || Math.abs(parseFloat(ls) || 0) < 0.3) semTracking.push({ el, px });
  }
  if (semTracking.length)
    add('IA1', 'display-sem-tracking', 'WARN',
      `${semTracking.length} título(s) com ${Math.round(semTracking[0].px)}px+ e letter-spacing por defeito: tipo grande sem aperto lê-se frouxo`,
      semTracking[0].el);

  /* IA2 — ritmo de secção monótono.
     Site desenhado tem secções de alturas deliberadamente diferentes. Gerador empilha
     blocos do mesmo tamanho, e o scroll fica com cadência de apresentação de slides. */
  const alturas = [...document.querySelectorAll('body > * > section, main > section, body > section')]
    .map(s => s.getBoundingClientRect().height).filter(h => h > 200);
  if (alturas.length >= 4) {
    const media = alturas.reduce((a, b) => a + b, 0) / alturas.length;
    const desvio = Math.sqrt(alturas.reduce((a, h) => a + (h - media) ** 2, 0) / alturas.length);
    if (desvio / media < 0.12)
      add('IA2', 'ritmo-monotono', 'WARN',
        `${alturas.length} secções quase da mesma altura (variação ${Math.round(desvio / media * 100)}%): o scroll fica com cadência de slides`, null);
  }

  /* IA3 — tudo centrado. Composição centrada em tudo é o default de quem não compõe. */
  const blocos = [...document.querySelectorAll('section p, section h1, section h2, section h3')]
    .filter(visivel);
  if (blocos.length >= 8) {
    const centrados = blocos.filter(e => getComputedStyle(e).textAlign === 'center').length;
    if (centrados / blocos.length > 0.8)
      add('IA3', 'tudo-centrado', 'WARN',
        `${centrados} de ${blocos.length} blocos de texto centrados: sem eixo, a página não tem composição`, null);
  }

  /* IA4 — raio de canto único em tudo.
     Hierarquia real distingue: cartão, botão e foto raramente pedem o mesmo raio. */
  const raios = new Map();
  for (const el of document.querySelectorAll('section *, main *')) {
    if (!visivel(el)) continue;
    const r = getComputedStyle(el).borderTopLeftRadius;
    const v = parseFloat(r);
    if (v > 0) raios.set(r, (raios.get(r) || 0) + 1);
  }
  const totalRaios = [...raios.values()].reduce((a, b) => a + b, 0);
  if (totalRaios >= 10 && raios.size === 1)
    add('IA4', 'raio-unico', 'WARN',
      `${totalRaios} elementos com o mesmo raio (${[...raios.keys()][0]}) e mais nenhum: sem hierarquia de forma`, null);

  /* IA5 — clichê de copy, em português.
     A lista existente do design-system-squad está em inglês e audita um DESIGN.md.
     Estas são as frases que aparecem em site PT gerado, e que nenhum dono de
     restaurante ou de clínica escreveria sobre o próprio negócio. */
  const CLICHES = [
    'excelência', 'excelencia', 'soluções inovadoras', 'solucoes inovadoras',
    'a sua satisfação é a nossa prioridade', 'tradição e inovação', 'tradicao e inovacao',
    'elevar a sua experiência', 'elevar a sua experiencia', 'momentos inesquecíveis',
    'momentos inesqueciveis', 'experiência única', 'experiencia unica',
    'o melhor dos dois mundos', 'atendimento personalizado e de qualidade',
    'transformar a sua', 'paixão pelo que fazemos', 'paixao pelo que fazemos',
    'compromisso com a qualidade', 'sonho em realidade',
  ];
  const corpo = (document.body.innerText || '').toLowerCase();
  const achadosCliche = CLICHES.filter(c => corpo.includes(c));
  if (achadosCliche.length)
    add('IA5', 'cliche-de-copy', 'WARN',
      `${achadosCliche.length} frase(s) que ninguém escreve sobre o próprio negócio: "${achadosCliche.slice(0, 3).join('", "')}"`, null);

  return achados;
};

/* ---------- corrida ---------- */

export async function verificar({ dir, rotas = ['/'], viewports = VIEWPORTS_PADRAO, screenshots = true, hotlinkEstrito = false }) {
  const alvo = resolve(ROOT, dir);
  const srv = await servir(alvo);
  const dirQa = join(alvo, '_qa');
  if (screenshots) mkdirSync(dirQa, { recursive: true });

  const achados = [];
  const metricas = {};

  for (const vp of viewports) {
    const ctx = await contexto(vp);
    const page = await ctx.newPage();
    const errosPagina = [], errosConsola = [], redeFalhou = [];
    page.on('pageerror', e => errosPagina.push(String(e.message)));
    page.on('console', m => { if (m.type() === 'error') errosConsola.push(m.text().slice(0, 160)); });
    page.on('response', r => { if (r.status() >= 400) redeFalhou.push({ url: r.url(), status: r.status() }); });
    page.on('requestfailed', r => redeFalhou.push({ url: r.url(), status: 'falhou' }));

    for (const rota of rotas) {
      const nome = rota === '/' ? 'index' : rota.replace(/^\//, '').replace(/\//g, '_');
      const marcar = f => achados.push({ ...f, viewport: vp.nome, rota });

      await page.goto(srv.url.replace(/\/$/, '') + rota, { waitUntil: 'domcontentloaded', timeout: 45000 });

      // V6b tem de ser medido ANTES do passe de scroll: depois de rolar, o lazy legítimo
      // já resolveu e o defeito real fica indistinguível do comportamento correto.
      const lazyCedo = await page.evaluate(() => [...document.querySelectorAll('img[loading="lazy"]')]
        .filter(i => i.getBoundingClientRect().top < innerHeight)
        .map(i => i.getAttribute('src') || '(sem src)'));

      if (screenshots) await page.screenshot({ path: join(dirQa, `${nome}-${vp.nome}-dobra.png`) });
      await estabilizar(page, vp.height);
      if (screenshots) await page.screenshot({ path: join(dirQa, `${nome}-${vp.nome}.png`), fullPage: true });

      const res = await page.evaluate(medir, {
        leftoverSrc: LEFTOVER.source, cdnAlheioSrc: CDN_ALHEIO.source, cdnFonteSrc: CDN_FONTE.source,
      });
      for (const f of res) {
        // alvo de toque só interessa em ecrã de toque
        if (f.regra === 'W4' && !vp.movel) continue;
        if (f.regra === 'V1' && vp.nome !== '375' && f.nivel === 'FAIL') f.nivel = 'WARN';
        if (f.regra === 'V5' && f.nivel === 'WARN' && hotlinkEstrito) f.nivel = 'FAIL';
        marcar(f);
      }
      for (const s of lazyCedo) marcar({ regra: 'V6b', nome: 'lazy-acima-da-dobra', nivel: 'FAIL', msg: `lazy no primeiro ecrã: ${s}`, seletor: null, rect: null });

      for (const e of errosPagina.splice(0)) marcar({ regra: 'V2', nome: 'erro-de-pagina', nivel: 'FAIL', msg: e.slice(0, 160), seletor: null, rect: null });
      for (const e of errosConsola.splice(0)) marcar({ regra: 'W1', nome: 'erro-de-consola', nivel: 'WARN', msg: e, seletor: null, rect: null });
      for (const r of redeFalhou.splice(0)) {
        let host = ''; try { host = new URL(r.url).host; } catch {}
        const nosso = host === new URL(srv.url).host;
        marcar({
          regra: nosso ? 'V3' : 'W2', nome: nosso ? 'recurso-nosso-em-falta' : 'rede-externa-falhou',
          nivel: nosso ? 'FAIL' : 'WARN', msg: `${r.status} ${r.url.slice(0, 110)}`, seletor: null, rect: null,
        });
      }

      if (vp.nome === '1440' && rota === rotas[0]) {
        metricas.lcp_ms = await page.evaluate(() => new Promise(ok => {
          let v = null;
          try { new PerformanceObserver(l => { const e = l.getEntries(); v = e[e.length - 1]?.startTime ?? null; }).observe({ type: 'largest-contentful-paint', buffered: true }); } catch {}
          setTimeout(() => ok(v == null ? null : Math.round(v)), 300);
        }));
        metricas.nota = 'LCP medido em localhost, sem rede: só comparável com corridas anteriores desta mesma máquina';
      }
    }
    await ctx.close();
  }

  await srv.fechar();

  const fails = achados.filter(a => a.nivel === 'FAIL');
  const warns = achados.filter(a => a.nivel === 'WARN');
  const relatorio = {
    versao: 1, alvo: dir, rotas, quando: new Date().toISOString(),
    browser: { versao: await versaoBrowser(), fonte: fonteBrowser() },
    viewports: viewports.map(v => v.nome),
    veredicto: fails.length ? 'FAIL' : 'OK', fails: fails.length, warns: warns.length,
    achados, metricas,
    nao_automatizado: [
      'se está bonito (hierarquia, ritmo, presença)',
      'se a foto é mesmo do negócio certo',
      'se a copy é verdadeira',
      'se a animação parece cara ou parece de 2009',
      'se funciona em Safari/iOS real',
    ],
  };
  if (screenshots) writeFileSync(join(dirQa, 'relatorio.json'), JSON.stringify(relatorio, null, 2), 'utf8');
  return relatorio;
}

/* ---------- CLI ---------- */

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
  const dir = process.argv[2];
  if (!dir || dir.startsWith('--')) {
    console.error('uso: node tools/verificar.mjs <pasta> [--rotas /,/about] [--json] [--sem-screenshot] [--hotlink-estrito]');
    process.exit(2);
  }
  try {
    const r = await verificar({
      dir,
      rotas: (arg('--rotas') || '/').split(',').map(s => s.trim()).filter(Boolean),
      screenshots: !process.argv.includes('--sem-screenshot'),
      hotlinkEstrito: process.argv.includes('--hotlink-estrito'),
    });
    await fecharBrowser();

    if (process.argv.includes('--json')) { console.log(JSON.stringify(r, null, 2)); process.exit(r.fails ? 1 : 0); }

    console.log(`\nPasse visual — ${r.alvo}  ·  chromium ${r.browser.versao} (${r.browser.fonte})  ·  ${r.viewports.join(' + ')}px\n`);
    const porRegra = new Map();
    for (const a of r.achados) {
      const k = `${a.regra} ${a.nome}`;
      if (!porRegra.has(k)) porRegra.set(k, []);
      porRegra.get(k).push(a);
    }
    const ordem = [...porRegra.entries()].sort((a, b) => (a[1][0].nivel === 'FAIL' ? 0 : 1) - (b[1][0].nivel === 'FAIL' ? 0 : 1));
    for (const [regra, lista] of ordem) {
      console.log(`  ${lista[0].nivel === 'FAIL' ? '🔴' : '🟡'} [${regra}] ×${lista.length}`);
      for (const a of lista.slice(0, 4))
        console.log(`      ${a.msg}${a.seletor ? `  — ${a.seletor}` : ''}  @${a.viewport}${a.rota !== '/' ? ' ' + a.rota : ''}`);
      if (lista.length > 4) console.log(`      … +${lista.length - 4} ocorrências`);
    }
    if (!r.achados.length) console.log('  (nenhum achado)');

    // Os sinais de "cara de IA" contam-se JUNTOS, e a razão é honesta: nenhum deles
    // isolado condena. Um site desenhado à mão pode ter display sem tracking apertado
    // (o próprio Kasablanca tem, medido: h1 a 172,8px com letter-spacing normal) e isso
    // não o torna parecido com gerador. O que denuncia é o conjunto: quando 3 ou mais
    // aparecem na mesma página, o que falta não é um ajuste, é alguém a decidir.
    const sinaisIA = new Set(r.achados.filter(a => a.regra.startsWith('IA')).map(a => a.regra));
    if (sinaisIA.size) {
      const grau = sinaisIA.size >= 3 ? '🔶 parece gerado' : '· isolado, não é diagnóstico';
      console.log(`\n  Sinais de "cara de IA": ${sinaisIA.size}/5 (${[...sinaisIA].join(', ')})  ${grau}`);
    }

    console.log(`\n${r.fails ? `❌ ${r.fails} FAIL` : '✅ 0 FAIL'} · ${r.warns} WARN`);
    console.log('Não automatizável: ' + r.nao_automatizado.join(' · '));
    console.log('Verde aqui significa "não está partido", nunca "está aprovado".\n');
    process.exit(r.fails ? 1 : 0);
  } catch (e) {
    console.error(`\n⚠ não foi possível verificar: ${e.message}`);
    // código 2 = "não consegui medir", distinto de 1 = "medi e reprovou".
    // Quem publica trata o 2 como bloqueio: publicar sem verificar viola a regra do projeto.
    process.exit(2);
  }
}
