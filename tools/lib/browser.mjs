/**
 * Resolução de browser para os tools que medem no navegador — fonte única.
 *
 * POR QUE NÃO É `require('playwright-core')` COM CAMINHO FIXO
 * O `ce-dna.mjs` fazia `createRequire('C:/Users/mateu/.../kasablanca-site/node_modules/')`
 * e apontava para `C:/Program Files/Google/Chrome/.../chrome.exe`. Duas bombas:
 *   1. Depende do node_modules de OUTRO projeto. Se aquele projeto for movido ou limpo, isto morre.
 *   2. O Chrome do sistema AUTO-ATUALIZA. Um Chrome novo muda rendering e a medição muda de
 *      veredicto sem ninguém tocar em código — e nós usamos isto para decidir se um site vai
 *      para o cliente. Chromium com versão fixada é o que torna a medição comparável no tempo.
 *
 * A cadeia devolve sempre DE ONDE veio, e o relatório imprime isso: se um dia dois computadores
 * discordarem sobre um site, a primeira pergunta é "mediram com o quê".
 */
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
let _globalRoot;

function raizGlobal() {
  if (_globalRoot !== undefined) return _globalRoot;
  // `execSync` com string literal, não `execFileSync` com args + shell:true — este último
  // emite DEP0190 no Node 22 (args concatenados sem escape). Aqui não há input externo.
  try {
    _globalRoot = execSync('npm root -g', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch { _globalRoot = null; }
  return _globalRoot;
}

/**
 * Devolve { chromium, fonte }. Ordem: raiz do projeto (reprodutível) → env → global (oportunista).
 * Lança com code 'SEM_BROWSER' se não achar — quem chama decide se isso é fatal.
 */
export function resolverPlaywright() {
  const candidatos = [
    ['raiz', join(ROOT, 'node_modules', '/')],
    ['env', process.env.PP_PLAYWRIGHT_ROOT && join(process.env.PP_PLAYWRIGHT_ROOT, '/')],
    ['global', () => { const g = raizGlobal(); return g && join(g, '/'); }],
  ];
  for (const [fonte, alvo] of candidatos) {
    const base = typeof alvo === 'function' ? alvo() : alvo;
    if (!base || !existsSync(base)) continue;
    for (const pkg of ['playwright', 'playwright-core']) {
      try {
        const mod = createRequire(base)(pkg);
        if (mod?.chromium) return { chromium: mod.chromium, fonte: `${fonte}:${pkg}`, base };
      } catch { /* tenta o próximo */ }
    }
  }
  const e = new Error(
    'Playwright não encontrado — o passe visual não pode correr, e sem passe visual nada conta como pronto.\n' +
    `  npm i                            (na raiz: ${ROOT})\n` +
    '  npx playwright install chromium'
  );
  e.code = 'SEM_BROWSER';
  throw e;
}

let _browser = null;
let _fonte = null;

/**
 * Um browser por PROCESSO, não por página nem por site.
 * `chromium.launch()` custa 1,3-1,8 s no Windows; num lote de 10 leads, lançar um por lead
 * é ~15 s deitados fora. É por isto que o `verificar.mjs` exporta função além do CLI.
 */
export async function browser() {
  if (_browser) return _browser;
  const { chromium, fonte } = resolverPlaywright();
  _fonte = fonte;
  _browser = await chromium.launch({
    args: [
      // Sem estes três, o mesmo site screenshotado em duas máquinas dá PNG diferente e a
      // comparação de regressão vira ruído. Subpixel AA depende do driver de vídeo;
      // o perfil de cor depende do monitor; o hinting depende da fonte do SO.
      '--disable-lcd-text',
      '--force-color-profile=srgb',
      '--font-render-hinting=none',
    ],
  });
  return _browser;
}

/** De onde veio o browser desta corrida (para o relatório). Só válido depois de `browser()`. */
export function fonteBrowser() { return _fonte; }

/** Versão do Chromium em uso, para o relatório. */
export async function versaoBrowser() {
  const b = await browser();
  return b.version();
}

export async function fecharBrowser() {
  if (_browser) { await _browser.close(); _browser = null; _fonte = null; }
}

/**
 * Contexto com viewport de dispositivo. `isMobile`/`hasTouch` importam: sem eles as media
 * queries de hover mentem e um layout que está partido no telemóvel passa no teste.
 */
export async function contexto({ width, height, dpr = 1, movel = false }) {
  const b = await browser();
  return b.newContext({
    viewport: { width, height },
    deviceScaleFactor: dpr,
    isMobile: movel,
    hasTouch: movel,
    locale: 'pt-PT',
    timezoneId: 'Europe/Lisbon',
    reducedMotion: 'no-preference',
  });
}

/** Os dois viewports canónicos do projeto. A regra do Mateus é "375px e 1440px". */
export const VIEWPORTS = [
  { nome: '375', width: 375, height: 812, dpr: 2, movel: true },
  { nome: '1440', width: 1440, height: 900, dpr: 1, movel: false },
];
