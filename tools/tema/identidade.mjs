#!/usr/bin/env node
/**
 * IDENTIDADE — colhe a identidade visual REAL da marca e transforma-a num sistema de cor.
 *
 * Uso:
 *   node tools/tema/identidade.mjs --site https://... [--logo caminho-ou-url] [--json]
 *   node tools/tema/identidade.mjs --logo clientes/x/assets/logo.png
 *
 * PORQUE ISTO EXISTE
 * A paleta do `cliente.json` era escrita à mão, ou seja, inventada. Um site com a cor errada
 * é um site que o dono não reconhece como dele, por muito bem feito que esteja. A cor tem de
 * vir de PROVA: o logótipo, o site que ele já tem, a página do Instagram, a montra.
 *
 * DUAS ETAPAS, E A SEGUNDA É QUE FAZ O TRABALHO
 *   1. COLHER      as cores que a marca de facto usa, com a área que cada uma pinta e a
 *                  origem de onde veio. Cor de borda de 1px não vale o mesmo que o fundo.
 *   2. SISTEMATIZAR transformar isso num conjunto de tokens legível. É aqui que está o valor:
 *                  cores colhidas em bruto NÃO são um sistema. Um logótipo tem 2 cores e o
 *                  tema precisa de uma escala de 6 degraus com contraste garantido. Extrair
 *                  e despejar produziria exatamente o site ilegível que ninguém compra.
 *
 * A REGRA QUE NÃO SE QUEBRA: nenhuma paleta sai daqui sem passar no contraste. A marca manda
 * no MATIZ; a legibilidade manda na LUMINÂNCIA. Quando as duas colidem, ganha a legibilidade,
 * e o relatório diz que a cor foi ajustada e porquê.
 */
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { contexto, fecharBrowser } from '../lib/browser.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

/* ================================================================== *
 * Cor: sRGB ↔ OKLCH
 * OKLCH e não HSL de propósito: em HSL, dois tons com a mesma "lightness" podem ter
 * luminância percebida muito diferente (o amarelo a 50% é claríssimo, o azul a 50% é escuro).
 * Construir uma escala em HSL dá degraus que saltam. OKLCH é perceptualmente uniforme.
 * ================================================================== */

const srgbLinear = c => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const linearSrgb = c => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);

export function hexParaOklch(hex) {
  const { r, g, b } = hexParaRgb(hex);
  const [lr, lg, lb] = [r, g, b].map(v => srgbLinear(v / 255));
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  const L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s;
  return { L, C: Math.hypot(A, B), H: (Math.atan2(B, A) * 180 / Math.PI + 360) % 360 };
}

export function oklchParaHex({ L, C, H }) {
  const a = C * Math.cos(H * Math.PI / 180), b = C * Math.sin(H * Math.PI / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3;
  const rgb = [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
  ].map(v => Math.round(Math.min(255, Math.max(0, linearSrgb(v) * 255))));
  return '#' + rgb.map(v => v.toString(16).padStart(2, '0')).join('');
}

function hexParaRgb(hex) {
  let h = String(hex).replace('#', '').trim();
  if (h.length === 3) h = [...h].map(c => c + c).join('');
  if (h.length === 8) h = h.slice(0, 6);
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}

const luminancia = hex => {
  const { r, g, b } = hexParaRgb(hex);
  const [R, G, B] = [r, g, b].map(v => srgbLinear(v / 255));
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

/** Contraste WCAG. AA pede 4.5 para texto normal, 3.0 para texto grande. */
export const contraste = (a, b) => {
  const [x, y] = [luminancia(a), luminancia(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

/* ================================================================== *
 * 1. COLHER
 * ================================================================== */

/** Cores do site que a marca já tem, PESADAS PELA ÁREA QUE PINTAM.
 *  Contar ocorrências mentiria: uma borda de 1px repetida 200 vezes ganharia ao fundo
 *  da página. O que faz uma cor ser "a cor da marca" é quanto ecrã ela ocupa. */
const colherDoSite = () => {
  const area = new Map();
  const registar = (cor, px, papel) => {
    if (!cor || cor === 'transparent' || /rgba\(0, 0, 0, 0\)/.test(cor)) return;
    const m = cor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    if (!m) return;
    if (m[4] !== undefined && parseFloat(m[4]) < 0.5) return;   // quase transparente não pinta
    const hex = '#' + [m[1], m[2], m[3]].map(v => (+v).toString(16).padStart(2, '0')).join('');
    const a = area.get(hex) || { px: 0, papeis: new Set() };
    a.px += px; a.papeis.add(papel);
    area.set(hex, a);
  };

  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.1) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    const px = Math.min(r.width * r.height, 2_000_000);   // um herói gigante não domina tudo

    registar(cs.backgroundColor, px, 'fundo');
    const temTexto = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    if (temTexto) registar(cs.color, Math.min(px, parseFloat(cs.fontSize) * 200), 'texto');
    if (parseFloat(cs.borderTopWidth) > 0) registar(cs.borderTopColor, r.width * parseFloat(cs.borderTopWidth), 'borda');
  }
  registar(getComputedStyle(document.body).backgroundColor, innerWidth * innerHeight, 'fundo');

  return [...area.entries()]
    .map(([hex, a]) => ({ hex, area: Math.round(a.px), papeis: [...a.papeis] }))
    .sort((x, y) => y.area - x.area).slice(0, 24);
};

/** Cores dominantes de uma imagem (logótipo), por quantização.
 *  Corre dentro do browser porque assim não é preciso biblioteca de imagem nenhuma:
 *  o canvas já sabe descodificar png/jpg/webp/svg. */
const colherDaImagem = async (url) => {
  const img = new Image();
  // `crossOrigin` só para URL remota. Num ficheiro local passado como data: URL não há origem
  // nenhuma a cruzar, e pedir crossOrigin contamina o canvas: o `getImageData` passa a atirar
  // SecurityError e a ferramenta reportava "não colhi nada" sobre um ficheiro perfeitamente bom.
  if (/^https?:/.test(url)) img.crossOrigin = 'anonymous';
  await new Promise((ok, erro) => { img.onload = ok; img.onerror = () => erro(new Error('não carregou: ' + url)); img.src = url; });
  const N = 160;
  const c = document.createElement('canvas');
  const escala = Math.min(1, N / Math.max(img.width, img.height));
  c.width = Math.max(1, Math.round(img.width * escala));
  c.height = Math.max(1, Math.round(img.height * escala));
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, c.width, c.height);
  const d = ctx.getImageData(0, 0, c.width, c.height).data;

  /* Um logótipo PRETO é uma decisão de marca, não ausência de cor: descartá-lo devolvia
   * zero provas e a ferramenta dizia "não colhi nada" sobre um ficheiro perfeitamente legível.
   * Por isso só o branco é filtrado à partida (esse sim é quase sempre fundo), e mesmo esse
   * volta a entrar se mais nada sobreviver, que é o caso do logótipo branco sobre transparente. */
  const contar = (ignorarBranco) => {
    const baldes = new Map();
    for (let i = 0; i < d.length; i += 4) {
      const [r, g, b, a] = [d[i], d[i + 1], d[i + 2], d[i + 3]];
      if (a < 128) continue;                                   // transparente não pinta
      if (ignorarBranco && Math.min(r, g, b) > 245) continue;   // branco de fundo
      const k = `${r >> 4},${g >> 4},${b >> 4}`;               // quantiza a 16 níveis por canal
      const v = baldes.get(k) || { n: 0, r: 0, g: 0, b: 0 };
      v.n++; v.r += r; v.g += g; v.b += b;
      baldes.set(k, v);
    }
    return baldes;
  };

  let baldes = contar(true);
  if (!baldes.size) baldes = contar(false);

  const total = [...baldes.values()].reduce((s, v) => s + v.n, 0) || 1;
  return [...baldes.values()]
    .sort((a, b) => b.n - a.n).slice(0, 10)
    .map(v => ({
      hex: '#' + [v.r / v.n, v.g / v.n, v.b / v.n].map(x => Math.round(x).toString(16).padStart(2, '0')).join(''),
      peso: +(v.n / total).toFixed(3),
    }));
};

/**
 * ⚠ NÃO COLHER DA MINIATURA DE REDE SOCIAL. Aprendido num lead real (loja de roupa, 2026-07-23):
 * a foto de perfil do Instagram só existe a 150×150 e vem com o ANEL DE STORIES à volta, que é
 * um gradiente rosa-laranja da interface, não da marca. A amostragem devolveu dois vermelhos
 * como se fossem cor de marca e quase não apanhou o dourado real do logótipo, por causa do
 * tamanho. Se a única fonte for uma miniatura de rede social, PEDIR o ficheiro do logótipo:
 * a alternativa é construir a identidade do cliente a partir da decoração do Instagram.
 */
export async function colher({ site, logo }) {
  const provas = [];
  const ctx = await contexto({ width: 1440, height: 900, dpr: 1, movel: false });
  const page = await ctx.newPage();

  if (site) {
    try {
      await page.goto(site, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(1200);
      const cores = await page.evaluate(colherDoSite);
      const areaTotal = cores.reduce((s, c) => s + c.area, 0) || 1;
      for (const c of cores) provas.push({ hex: c.hex, peso: +(c.area / areaTotal).toFixed(3), origem: `site (${c.papeis.join('/')})` });
    } catch (e) {
      provas.push({ _erro: `não foi possível ler o site: ${e.message.split('\n')[0]}` });
    }
  }

  if (logo) {
    // Ficheiro local vai como data: URL, não como file://. Assim o browser não tem sequer
    // de aceder ao disco, e desaparece toda a classe de problemas de origem e de permissão.
    let url = logo;
    if (!/^https?:\/\//.test(logo)) {
      const f = resolve(ROOT, logo);
      if (!existsSync(f)) throw new Error(`logótipo não existe: ${logo}`);
      const tipo = { '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif' }[f.slice(f.lastIndexOf('.')).toLowerCase()] || 'image/png';
      url = `data:${tipo};base64,${readFileSync(f).toString('base64')}`;
    }
    try {
      if (!site) await page.goto('about:blank');
      const cores = await page.evaluate(colherDaImagem, url);
      for (const c of cores) provas.push({ hex: c.hex, peso: c.peso, origem: 'logótipo' });
    } catch (e) {
      provas.push({ _erro: `não foi possível ler o logótipo: ${e.message.split('\n')[0]}` });
    }
  }

  await ctx.close();
  return provas;
}

/* ================================================================== *
 * 2. SISTEMATIZAR
 * ================================================================== */

/* Abaixo disto a cor é cinzento de verdade e não carrega intenção nenhuma.
 * Calibrado contra caso real: o creme `#f7f2e7` tem croma ~0.017, e a 0.03 era lido como
 * cinzento, o que deitava fora exatamente o CALOR que caracteriza a marca. O `#e0ded1` do
 * Kasablanca é da mesma família. Cremes e off-whites quentes são decisão de marca, não ruído. */
const NEUTRO_C_MAX = 0.010;

/**
 * Escolhe a cor de marca entre as provas e constrói a escala.
 *
 * A cor de marca NÃO é a mais frequente: num site, a mais frequente é quase sempre o branco
 * do fundo ou o cinzento do texto. É a mais frequente COM MATIZ, porque é essa que alguém
 * escolheu de propósito. Um logótipo pesa mais que o site: o site pode ser de um template
 * qualquer, o logótipo é a marca.
 */
export function sistematizar(provas, { fundoEscuro = true } = {}) {
  const validas = provas.filter(p => p.hex);
  if (!validas.length) throw Object.assign(new Error('nenhuma prova de cor foi colhida'), { code: 'SEM_PROVA' });

  /* BUG REAL, encontrado com um logótipo a sério (selo dourado sobre preto, Vaninha Fashion):
   * `forca` pesava só pela ÁREA, e um selo assim tem muito mais preto de fundo que traço
   * dourado. Um quase-preto de ruído de compressão (`#18130a`, croma 0,019) e o dourado real
   * (`#b58737`, croma 0,111, quase 6× mais) tinham ÁREA parecida (~1% cada), e o preto ganhava
   * por empate de arredondamento. Croma alto é justamente o sinal de "alguém escolheu esta cor
   * de propósito"; ignorá-lo na escolha, depois de já ter sido o critério de ENTRADA (o filtro
   * `C > NEUTRO_C_MAX`), desperdiçava a informação mais forte que havia. Multiplicar por `C`
   * corrige isto: 1% de área a 0,111 de croma pesa 6× mais que 1% a 0,019. */
  const comMatiz = validas
    .map(p => ({ ...p, ...hexParaOklch(p.hex) }))
    .filter(p => p.C > NEUTRO_C_MAX)
    .map(p => ({ ...p, forca: p.peso * p.C * (p.origem === 'logótipo' ? 3 : 1) }))
    .sort((a, b) => b.forca - a.forca);

  const notas = [];
  let marca = comMatiz[0];
  if (!marca) {
    // marca acromática (logótipo preto e branco) é uma decisão legítima, não uma falha
    notas.push('nenhuma cor com matiz nas provas: a marca é acromática, e a paleta sai neutra. É uma decisão da marca, não uma lacuna.');
    marca = { L: 0.55, C: 0, H: 0, hex: '#808080', origem: 'derivado (marca acromática)' };
  }

  // Croma da marca, contido. Um logótipo em néon extraído em bruto daria um site que ninguém
  // consegue ler durante 10 segundos. A Lei de Estética limita saturação, e é aqui que entra.
  const Cbase = Math.min(marca.C, 0.16);
  if (marca.C > 0.16) notas.push(`croma da marca reduzido de ${marca.C.toFixed(3)} para 0.160: saturação acima disto não se lê num ecrã inteiro`);

  /* A escala é um NEUTRO TINGIDO com o matiz da marca, não a marca repetida em 6 tons.
     É o que o Kasablanca faz (base-100 #e0ded1 é um bege quente, não um laranja claro) e é
     o que separa um sistema de uma paleta de PowerPoint: a marca aparece no acento, e o
     resto do ecrã carrega o matiz de forma quase subliminar. */
  const tinta = Math.min(Cbase * 0.22, 0.03);
  const degraus = fundoEscuro
    ? [0.90, 0.68, 0.46, 0.32, 0.22, 0.16]   // 100 claro (texto) → 600 escuro (fundo)
    : [0.22, 0.38, 0.52, 0.68, 0.86, 0.97];  // 100 escuro (texto) → 600 claro (fundo)

  const cores = {};
  degraus.forEach((L, i) => { cores[`base${(i + 1) * 100}`] = oklchParaHex({ L, C: tinta, H: marca.H }); });
  cores.fundo = fundoEscuro ? oklchParaHex({ L: 0.11, C: tinta * 0.6, H: marca.H }) : '#ffffff';
  cores.acento = oklchParaHex({ L: marca.L < 0.35 || marca.L > 0.82 ? 0.62 : marca.L, C: Cbase, H: marca.H });
  if (marca.L < 0.35 || marca.L > 0.82)
    notas.push(`luminância do acento ajustada para 0.62: a original (${marca.L.toFixed(2)}) não se distinguiria do fundo`);

  /* CONTRASTE — a parte que não se negoceia. */
  const texto = cores.base100, fundo = cores.fundo;
  let r = contraste(texto, fundo);
  let tentativas = 0;
  while (r < 4.5 && tentativas < 20) {
    const o = hexParaOklch(cores.base100);
    cores.base100 = oklchParaHex({ ...o, L: Math.min(0.98, o.L + 0.02 * (fundoEscuro ? 1 : -1)) });
    r = contraste(cores.base100, fundo);
    tentativas++;
  }
  if (tentativas) notas.push(`base100 clareada ${tentativas}× para chegar a contraste ${r.toFixed(1)}:1 sobre o fundo (mínimo AA 4.5)`);

  const acentoSobreFundo = contraste(cores.acento, fundo);
  const avisos = [];
  if (acentoSobreFundo < 3)
    avisos.push(`o acento tem ${acentoSobreFundo.toFixed(1)}:1 sobre o fundo: só serve para superfície, nunca para texto pequeno`);

  return {
    cores,
    marca: { hex: marca.hex, origem: marca.origem, oklch: { L: +marca.L.toFixed(3), C: +marca.C.toFixed(3), H: Math.round(marca.H) } },
    contraste: {
      textoSobreFundo: +contraste(cores.base100, cores.fundo).toFixed(2),
      suaveSobreFundo: +contraste(cores.base200, cores.fundo).toFixed(2),
      acentoSobreFundo: +acentoSobreFundo.toFixed(2),
    },
    notas, avisos,
  };
}

/* ================================================================== *
 * CLI
 * ================================================================== */

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = (n, d = null) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
  const site = arg('--site'), logo = arg('--logo');
  const claro = process.argv.includes('--fundo-claro');
  if (!site && !logo) {
    console.error('uso: node tools/tema/identidade.mjs [--site <url>] [--logo <ficheiro|url>] [--fundo-claro] [--json]');
    process.exit(1);
  }
  try {
    const provas = await colher({ site, logo });
    const r = sistematizar(provas, { fundoEscuro: !claro });
    await fecharBrowser();

    if (process.argv.includes('--json')) {
      console.log(JSON.stringify({ provas, ...r }, null, 2));
      process.exit(0);
    }

    console.log(`\nIdentidade visual colhida\n`);
    const erros = provas.filter(p => p._erro);
    for (const e of erros) console.log(`  ⚠ ${e._erro}`);
    console.log(`  ${provas.filter(p => p.hex).length} cor(es) com prova:`);
    for (const p of provas.filter(p => p.hex).slice(0, 8))
      console.log(`    ${p.hex}  ${String(Math.round(p.peso * 100)).padStart(3)}%  ${p.origem}`);

    console.log(`\n  cor de marca escolhida: ${r.marca.hex}  (${r.marca.origem})`);
    console.log(`    a mais forte COM MATIZ, não a mais frequente: num site, a mais frequente`);
    console.log(`    é quase sempre o branco do fundo ou o cinzento do texto.`);

    console.log(`\n  design.cores para o cliente.json:`);
    for (const [k, v] of Object.entries(r.cores)) console.log(`    ${k.padEnd(9)} ${v}`);

    console.log(`\n  contraste medido (WCAG):`);
    console.log(`    texto sobre fundo    ${r.contraste.textoSobreFundo}:1  ${r.contraste.textoSobreFundo >= 4.5 ? '✓ AA' : '✗ abaixo de AA'}`);
    console.log(`    suave sobre fundo    ${r.contraste.suaveSobreFundo}:1  ${r.contraste.suaveSobreFundo >= 4.5 ? '✓ AA' : '· só para texto grande'}`);
    console.log(`    acento sobre fundo   ${r.contraste.acentoSobreFundo}:1`);

    for (const n of r.notas) console.log(`\n  · ${n}`);
    for (const a of r.avisos) console.log(`\n  ⚠ ${a}`);
    console.log(`\n  A marca manda no MATIZ; a legibilidade manda na LUMINÂNCIA.`);
    console.log(`  Quando colidem, ganha a legibilidade, e fica escrito acima o que foi ajustado.\n`);
  } catch (e) {
    console.error(`\n✗ ${e.message}\n`);
    process.exit(1);
  }
}
