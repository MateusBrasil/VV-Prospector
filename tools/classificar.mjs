#!/usr/bin/env node
/**
 * Classificador de componentes — Prospector Premium (Camada 0 do motor)
 * Uso: node classificar.mjs           → classifica todos e grava no catálogo
 *      node classificar.mjs --amostra → só mostra a distribuição, não grava
 *
 * POR QUE ISTO EXISTE
 * A Fase A provou que os 613 componentes são de DOIS tipos, e o compositor tem de
 * os tratar de forma diferente:
 *   - FLUXO: empilham no documento (secções, texto, cards, botões, scroll-reveal).
 *     O normalizador (blockify) serve-os: viram blocos que se compõem em sequência.
 *   - CONTEXTO: cobrem o viewport / são overlay (hero fullscreen, intro, menu-overlay,
 *     cursor, loader, transição de página, background). Rodam no próprio contexto
 *     (position fixed a cobrir, ou iframe), NÃO empilhados no fluxo.
 * Sem esta etiqueta, o compositor não sabe como montar cada peça. Com ela, é automático.
 *
 * MÉTODO: categoria (heurística base) + análise do CSS/HTML (sinais fixed/100vh/overlay).
 * O código tem a última palavra quando contradiz a categoria.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK = join(HERE, '..', 'bank', '_componentes');
const CAT = join(BANK, '_catalogo.json');

// heurística por categoria: o palpite base antes de olhar o código
const TIPO_POR_CAT = {
  'Seções': 'fluxo', 'Textos': 'fluxo', 'Cards': 'fluxo', 'Botões': 'fluxo',
  'Scroll': 'fluxo', 'Carrossel': 'fluxo', 'Animações de Grid': 'fluxo',
  'Animações SVG': 'fluxo', 'Animações de Rolagem': 'fluxo', 'Animações': 'fluxo',
  'UI Effects': 'fluxo', 'Checkbox': 'fluxo',
  'Hero Section': 'contexto', 'Menu': 'contexto', 'Cursor': 'contexto',
  'Loaders': 'contexto', 'Transições de Página': 'contexto', 'Backgrounds': 'contexto',
  'Efeitos 3D': 'contexto', 'WebGL / ThreeJS': 'contexto', 'Parallax': 'contexto',
  'Physics': 'contexto',
};

// lê o CSS+HTML de um componente e conta sinais de "contexto próprio"
function analisarCodigo(dir) {
  if (!existsSync(dir)) return { fixed: 0, viewport: 0, cursor: 0, canvas: 0, achou: false };
  let fixed = 0, viewport = 0, cursor = 0, canvas = 0, achou = false;
  (function walk(d) {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      const s = statSync(p);
      if (s.isDirectory()) { if (!/node_modules|\.git/.test(f)) walk(p); }
      else if (/\.(css|html)$/i.test(f) && s.size < 500000) {
        achou = true;
        const t = readFileSync(p, 'utf8');
        fixed += (t.match(/position:\s*fixed/gi) || []).length;
        viewport += (t.match(/100vh|100svh|100dvh|height:\s*100%/gi) || []).length;
        cursor += (t.match(/cursor:\s*none|custom-?cursor|\.cursor\b/gi) || []).length;
        canvas += (t.match(/<canvas|new\s+THREE|WebGLRenderer/gi) || []).length;
      }
    }
  })(dir);
  return { fixed, viewport, cursor, canvas, achou };
}

function classificar(comp) {
  const base = TIPO_POR_CAT[comp.categoria] || 'fluxo';
  if (comp.temCodigo === false) return { tipo: base, confianca: 'categoria (sem código)', sinais: null };
  const sig = analisarCodigo(join(BANK, comp.pasta));
  if (!sig.achou) return { tipo: base, confianca: 'categoria (código ilegível)', sinais: sig };

  // regras do código (têm a última palavra):
  // muitos position:fixed + viewport cheio = cobre a tela = contexto
  const forteContexto = (sig.fixed >= 2 && sig.viewport >= 1) || sig.cursor >= 2 || sig.canvas >= 2;
  const forteFluxo = sig.fixed === 0 && sig.viewport <= 1;

  let tipo = base, confianca = 'categoria';
  if (forteContexto) { tipo = 'contexto'; confianca = 'código (fixed/vh/canvas)'; }
  else if (forteFluxo && base === 'contexto') {
    // categoria dizia contexto mas o código não cobre a tela: fica no meio, respeitar categoria mas anotar
    confianca = 'categoria (código sugere fluxo)';
  }
  return { tipo, confianca, sinais: sig };
}

/* ---------- correr ---------- */
const soAmostra = process.argv.includes('--amostra');
const catalogo = JSON.parse(readFileSync(CAT, 'utf8'));
const dist = { fluxo: 0, contexto: 0 };
const porCat = {};

for (const comp of catalogo.componentes) {
  const r = classificar(comp);
  comp.tipoLayout = r.tipo;            // 'fluxo' | 'contexto'
  comp.tipoConfianca = r.confianca;
  dist[r.tipo]++;
  (porCat[comp.categoria] ??= { fluxo: 0, contexto: 0 })[r.tipo]++;
}

console.log(`\nClassificação de ${catalogo.componentes.length} componentes:`);
console.log(`  FLUXO (empilham): ${dist.fluxo}`);
console.log(`  CONTEXTO (cobrem viewport/overlay): ${dist.contexto}\n`);
console.log('por categoria (fluxo/contexto):');
for (const [c, v] of Object.entries(porCat).sort((a, b) => (b[1].fluxo + b[1].contexto) - (a[1].fluxo + a[1].contexto))) {
  console.log(`  ${c.padEnd(24)} ${String(v.fluxo).padStart(3)} fluxo · ${String(v.contexto).padStart(3)} contexto`);
}

if (!soAmostra) {
  catalogo.resumo = { ...(catalogo.resumo || {}), tipoLayout: dist };
  writeFileSync(CAT, JSON.stringify(catalogo, null, 2), 'utf8');
  console.log(`\n✓ gravado no catálogo (campo tipoLayout em cada componente)`);
} else {
  console.log(`\n(--amostra: não gravei nada)`);
}
