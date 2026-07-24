#!/usr/bin/env node
/**
 * Regressão de tema — o teste que trava a refatoração.
 *
 * Uso:
 *   node tools/tema/regress.mjs --capturar <pasta-servivel> --saida baseline/kasablanca [--rotas /,/about]
 *   node tools/tema/regress.mjs --comparar --a baseline/kasablanca --b build/kasablanca
 *
 * POR QUE ISTO EXISTE
 * Vamos arrancar ~90 literais de dentro de 14 ficheiros JSX e pô-los num JSON. A pergunta que
 * ninguém consegue responder a olho é: "perdi alguma coisa no caminho?". Um espaço a mais, um
 * `undefined` que virou string, um acento que se partiu, uma imagem que ficou a apontar para o
 * sítio errado. A olho isso passa. Comparando o DOM nó a nó, não passa.
 *
 * O ARTEFACTO QUE IMPORTA É O DOM, NÃO O PIXEL.
 * Pixel é o sinal secundário e tolerante: o site é GSAP + ScrollTrigger + Lenis + Preloader, e
 * screenshot de página animada é ruído por natureza. Igualdade exigida no texto e nos estilos
 * computados; nos pixels, tolerância. Um teste que falha por antialiasing é um teste que ninguém
 * lê ao fim de duas semanas.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { contexto, fecharBrowser, fonteBrowser, versaoBrowser, VIEWPORTS } from '../lib/browser.mjs';
import { servir } from '../lib/servir.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
const tem = n => process.argv.includes(n);

/* Sondas de estilo: um conjunto FIXO e pequeno. Comparar getComputedStyle de todos os nós
 * gera megabytes e falha por diferenças irrelevantes. Estes seis provam que a escala
 * tipográfica, a cor e o ritmo sobreviveram à migração para tokens. */
const SONDAS = ['body', 'h1', 'h2', 'h3', 'p', '.mono'];
const PROPS = ['color', 'backgroundColor', 'fontFamily', 'fontSize', 'fontWeight',
  'lineHeight', 'letterSpacing', 'textTransform'];

/**
 * Estabiliza a página antes de medir.
 * O passe de scroll é OBRIGATÓRIO: quase tudo aqui começa em opacity:0 e só entra quando o
 * ScrollTrigger dispara. Medir sem rolar lê metade do site como invisível.
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
  await page.waitForTimeout(600);
  // fontes carregadas: sem isto o primeiro screenshot pode apanhar o fallback
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
}

/** DOM semântico normalizado: é este o artefacto que tem de bater exatamente.
 *
 * `script`/`style`/`noscript` são excluídos: o Next injeta os seus payloads de hidratação
 * (`self.__next_f.push(...)`) como nós de texto, e eles carregam o build ID, que muda a cada
 * build. Capturá-los faz TODA comparação falhar por ruído — e um teste que falha sempre é um
 * teste que se aprende a ignorar. */
const extrairDom = () => ({
  textos: [...document.querySelectorAll('body *')]
    .filter(el => !['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(el.tagName))
    .filter(el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()))
    .map(el => ({
      tag: el.tagName.toLowerCase(),
      classe: (typeof el.className === 'string' ? el.className : '').trim().replace(/\s+/g, ' '),
      // normalizar: colapsa whitespace e NFC. Sem isto, um \n a mais no JSX vira falso positivo.
      texto: el.textContent.replace(/\s+/g, ' ').trim().normalize('NFC'),
    }))
    .filter(x => x.texto),
  imagens: [...document.images].map(i => new URL(i.getAttribute('src') || '', location.href).pathname),
  links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
  titulo: document.title,
  lang: document.documentElement.lang,
  meta: [...document.querySelectorAll('meta[name="description"]')].map(m => m.content),
});

const extrairEstilos = (sondas, props) => {
  const out = {};
  for (const sel of sondas) {
    const el = document.querySelector(sel);
    if (!el) { out[sel] = null; continue; }
    const cs = getComputedStyle(el);
    out[sel] = Object.fromEntries(props.map(p => [p, cs[p]]));
  }
  return out;
};

async function capturar() {
  const alvo = arg('--capturar');
  const saida = resolve(ROOT, arg('--saida') || 'baseline/sem-nome');
  const rotas = (arg('--rotas') || '/').split(',').map(r => r.trim());
  if (!alvo) { console.error('falta --capturar <pasta ou url>'); process.exit(1); }

  const ehUrl = /^https?:\/\//.test(alvo);
  const srv = ehUrl ? null : await servir(resolve(ROOT, alvo));
  const base = ehUrl ? alvo.replace(/\/$/, '') + '/' : srv.url;

  mkdirSync(join(saida, 'dom'), { recursive: true });
  mkdirSync(join(saida, 'css'), { recursive: true });
  mkdirSync(join(saida, 'png'), { recursive: true });

  const meta = {
    versao: 1, alvo, base, rotas,
    browser: { versao: await versaoBrowser(), fonte: fonteBrowser() },
    viewports: VIEWPORTS.map(v => v.nome),
  };

  for (const rota of rotas) {
    const nome = rota === '/' ? 'index' : rota.replace(/^\//, '').replace(/\//g, '_');
    for (const vp of VIEWPORTS) {
      const ctx = await contexto(vp);
      const page = await ctx.newPage();
      const erros = [];
      page.on('pageerror', e => erros.push(String(e.message)));
      await page.goto(base.replace(/\/$/, '') + rota, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await estabilizar(page, vp.height);

      // DOM e estilos só do viewport largo: o DOM é o mesmo, e duplicar dobra o ruído
      if (vp.nome === '1440') {
        const dom = await page.evaluate(extrairDom);
        const css = await page.evaluate(({ s, p }) => {
          const out = {};
          for (const sel of s) {
            const el = document.querySelector(sel);
            if (!el) { out[sel] = null; continue; }
            const cs = getComputedStyle(el);
            out[sel] = Object.fromEntries(p.map(k => [k, cs[k]]));
          }
          return out;
        }, { s: SONDAS, p: PROPS });
        writeFileSync(join(saida, 'dom', `${nome}.json`), JSON.stringify({ ...dom, erros }, null, 2));
        writeFileSync(join(saida, 'css', `${nome}.json`), JSON.stringify(css, null, 2));
      }

      // Screenshots por degrau. `fullPage` com elementos fixed/pinned dá falso positivo garantido.
      const total = await page.evaluate(() => document.documentElement.scrollHeight);
      const degraus = Math.min(6, Math.max(1, Math.ceil(total / vp.height)));
      for (let i = 0; i < degraus; i++) {
        await page.evaluate(y => window.scrollTo(0, y), i * vp.height);
        await page.waitForTimeout(450);
        await page.screenshot({ path: join(saida, 'png', `${nome}-${vp.nome}-${i}.png`) });
      }
      await ctx.close();
      console.log(`  ✓ ${rota} @${vp.nome}  (${degraus} degraus${erros.length ? `, ${erros.length} erro de página` : ''})`);
    }
  }

  writeFileSync(join(saida, 'meta.json'), JSON.stringify(meta, null, 2));
  if (srv) await srv.fechar();
  await fecharBrowser();
  console.log(`\n✓ baseline em ${saida}`);
}

/* ---------- comparação ---------- */

function diffListas(a, b, chave) {
  const sa = a.map(chave), sb = b.map(chave);
  const faltam = sa.filter(x => !sb.includes(x));
  const sobram = sb.filter(x => !sa.includes(x));
  return { faltam, sobram };
}

function comparar() {
  const dirA = resolve(ROOT, arg('--a'));
  const dirB = resolve(ROOT, arg('--b'));
  let falhas = 0;

  const rotas = readdirSync(join(dirA, 'dom')).filter(f => f.endsWith('.json'));
  for (const f of rotas) {
    const nome = f.replace('.json', '');
    if (!existsSync(join(dirB, 'dom', f))) {
      console.log(`  🔴 rota ausente no B: ${nome}`); falhas++; continue;
    }
    const A = JSON.parse(readFileSync(join(dirA, 'dom', f), 'utf8'));
    const B = JSON.parse(readFileSync(join(dirB, 'dom', f), 'utf8'));

    // 1. TEXTO — igualdade exata. É o teste que prova que nenhum literal se perdeu.
    const tA = A.textos.map(t => t.texto), tB = B.textos.map(t => t.texto);
    const soA = tA.filter(t => !tB.includes(t));
    const soB = tB.filter(t => !tA.includes(t));
    if (soA.length || soB.length) {
      falhas++;
      console.log(`  🔴 [${nome}] texto divergente`);
      soA.slice(0, 6).forEach(t => console.log(`      − sumiu:  "${t.slice(0, 70)}"`));
      soB.slice(0, 6).forEach(t => console.log(`      + surgiu: "${t.slice(0, 70)}"`));
      if (soA.length + soB.length > 12) console.log(`      … +${soA.length + soB.length - 12} diferenças`);
    }

    // 2. IMAGENS e LINKS — slot mal mapeado num <img> puro é 404 silencioso
    for (const [rotulo, chave] of [['imagens', 'imagens'], ['links', 'links']]) {
      const d = diffListas(A[chave].map(x => ({ x })), B[chave].map(x => ({ x })), o => o.x);
      if (d.faltam.length || d.sobram.length) {
        falhas++;
        console.log(`  🔴 [${nome}] ${rotulo} divergentes`);
        d.faltam.slice(0, 5).forEach(x => console.log(`      − ${x}`));
        d.sobram.slice(0, 5).forEach(x => console.log(`      + ${x}`));
      }
    }

    // 3. <title>, lang, meta
    for (const k of ['titulo', 'lang']) {
      if (A[k] !== B[k]) { falhas++; console.log(`  🔴 [${nome}] ${k}: "${A[k]}" → "${B[k]}"`); }
    }

    // 4. ESTILOS COMPUTADOS — prova que tokens.generated.css reproduz o globals.css
    const cA = JSON.parse(readFileSync(join(dirA, 'css', f), 'utf8'));
    const cB = existsSync(join(dirB, 'css', f)) ? JSON.parse(readFileSync(join(dirB, 'css', f), 'utf8')) : {};
    for (const sel of Object.keys(cA)) {
      if (!cA[sel]) continue;
      if (!cB[sel]) { falhas++; console.log(`  🔴 [${nome}] sonda "${sel}" desapareceu`); continue; }
      for (const p of Object.keys(cA[sel])) {
        if (cA[sel][p] !== cB[sel][p]) {
          falhas++;
          console.log(`  🔴 [${nome}] ${sel} { ${p} }: "${cA[sel][p]}" → "${cB[sel][p]}"`);
        }
      }
    }
  }

  console.log(`\n${falhas ? `❌ ${falhas} divergência(s)` : '✅ DOM e estilos idênticos'}`);
  console.log('Nota: pixels não são comparados aqui. O DOM é o teste que importa; screenshot de');
  console.log('página com GSAP/Lenis é ruído, e um teste ruidoso deixa de ser lido.\n');
  process.exit(falhas ? 1 : 0);
}

if (tem('--capturar')) await capturar();
else if (tem('--comparar')) comparar();
else { console.error('uso: --capturar <pasta|url> --saida <dir> [--rotas /,/about]  |  --comparar --a <dir> --b <dir>'); process.exit(1); }
