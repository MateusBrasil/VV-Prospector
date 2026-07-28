#!/usr/bin/env node
/**
 * VERIFICAR-DIRECOES — três testes que uma direção de arte de nicho tem de passar.
 *
 * PORQUE ISTO EXISTE
 * Paleta é a coisa mais fácil de avaliar a olho e a mais fácil de errar a olho. Três erros
 * reais foram apanhados por medição nesta fase e nenhum era visível na inspeção casual:
 *
 *  1. CONTRASTE. Com os papéis de texto padrão, os TRÊS nichos falhavam WCAG AA no
 *     `textoTenue` (2.58, 2.85 e 2.81 contra o mínimo de 4.5). A correção foi reconhecer
 *     que base300 é cor de linha e borda, nunca de texto.
 *  2. CARA DE IA. O acento da odontologia estava a 4 graus de matiz do teal-500 do
 *     Tailwind, que é assinatura cromática de site gerado por IA.
 *  3. LEGIBILIDADE DE NICHO. Ao corrigir o ponto 2, o acento foi parar a sálvia H150, que
 *     lê como wellness ou farmácia e não como clínica dentária. Fugir do cliché é
 *     obrigatório; fugir do CÓDIGO do nicho é o erro oposto e igualmente caro.
 *
 * Os três testes puxam em direções diferentes e é por isso que têm de correr juntos:
 * afastar da IA pode empurrar para fora do nicho, e ficar no nicho pode aproximar do
 * cliché. O ponto de equilíbrio é ficar na FAMÍLIA DE MATIZ do nicho com saturação e
 * luminosidade que não são o default de ninguém.
 */
import { readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

export const luminancia = hex => {
  const s = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => parseInt(s.slice(i, i + 2), 16) / 255);
  const f = v => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

export const contraste = (a, b) => {
  const [x, y] = [luminancia(a), luminancia(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

export const paraHsl = hex => {
  const s = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => parseInt(s.slice(i, i + 2), 16) / 255);
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn, l = (mx + mn) / 2;
  let h = 0;
  if (d) { h = mx === r ? ((g - b) / d + (g < b ? 6 : 0)) : mx === g ? ((b - r) / d + 2) : ((r - g) / d + 4); h *= 60; }
  return { h: Math.round(h), s: d === 0 ? 0 : Math.round((d / (1 - Math.abs(2 * l - 1))) * 100), l: Math.round(l * 100) };
};

/** Defaults que quase todo gerador cospe. Proximidade a estes é "cara de IA". */
const ASSINATURA_IA = {
  'indigo-500': '#6366f1', 'violet-500': '#8b5cf6', 'purple-600': '#9333ea',
  'blue-600': '#2563eb', 'cyan-500': '#06b6d4', 'teal-500': '#14b8a6',
  'emerald-500': '#10b981', 'fuchsia-500': '#d946ef',
};

/** Um acento é "cara de IA" quando está perto em matiz E é tão saturado quanto o default. */
export function pareceIA(hex) {
  const a = paraHsl(hex);
  for (const [nome, ref] of Object.entries(ASSINATURA_IA)) {
    const b = paraHsl(ref);
    let dh = Math.abs(a.h - b.h);
    if (dh > 180) dh = 360 - dh;
    // O matiz sozinho não condena: o que condena é matiz vizinho COM saturação de default.
    if (dh <= 12 && a.s >= b.s - 20) return { risco: true, proximo: nome, deltaMatiz: dh, deltaSat: b.s - a.s };
  }
  return { risco: false };
}

export function verificar(direcoes) {
  const faixas = direcoes._faixas_de_codigo_por_nicho || {};
  const problemas = [];
  const linhas = [];

  for (const [nicho, d] of Object.entries(direcoes)) {
    if (nicho.startsWith('_')) continue;
    const c = d.design.cores;
    const papeis = d.design.papeis;
    linhas.push(`\n=== ${nicho} ===`);

    // 1. escada de luminância
    const escada = ['base100', 'base200', 'base300', 'base400', 'base500', 'base600'].map(k => luminancia(c[k]));
    const monotona = escada.every((x, i) => i === 0 || x < escada[i - 1]);
    linhas.push(`  escada de luminância: ${monotona ? 'OK' : 'QUEBRADA'}`);
    if (!monotona) problemas.push(`${nicho}: escada de luminância quebrada`);

    // 2. contraste WCAG AA dos papéis de texto
    for (const [papel, token] of Object.entries(papeis)) {
      const r = contraste(c[token], c.fundo);
      const ok = r >= 4.5;
      linhas.push(`  ${papel.padEnd(11)} ${token} ${c[token]} ${r.toFixed(2)}:1 ${ok ? 'AA ok' : 'FALHA AA'}`);
      if (!ok) problemas.push(`${nicho}: ${papel} a ${r.toFixed(2)}:1, abaixo de 4.5`);
    }
    const rAcento = contraste(c.acento, c.fundo);
    linhas.push(`  acento      ${c.acento} ${rAcento.toFixed(2)}:1 ${rAcento >= 4.5 ? 'AA ok' : rAcento >= 3 ? 'só elemento grande' : 'FALHA'}`);
    if (rAcento < 3) problemas.push(`${nicho}: acento a ${rAcento.toFixed(2)}:1, invisível`);

    // 3. base300 e base200 nunca podem carregar texto
    for (const [papel, token] of Object.entries(papeis)) {
      if (token === 'base300' || token === 'base200') problemas.push(`${nicho}: ${papel} aponta para ${token}, que é cor de linha e borda, nunca de texto`);
    }

    // 4. cara de IA
    const ia = pareceIA(c.acento);
    linhas.push(`  cara de IA: ${ia.risco ? `RISCO, ${ia.deltaMatiz}° do ${ia.proximo} com saturação parecida` : 'não'}`);
    if (ia.risco) problemas.push(`${nicho}: acento a ${ia.deltaMatiz}° de matiz do ${ia.proximo} com saturação de default`);

    // 5. legibilidade de nicho: o acento tem de ficar na família de matiz que codifica o nicho
    const faixa = faixas[nicho];
    const m = faixa && faixa.match(/H(\d+)-(\d+)/);
    if (m) {
      const [, lo, hi] = m.map(Number);
      const h = paraHsl(c.acento).h;
      const dentro = h >= lo && h <= hi;
      linhas.push(`  código do nicho: acento H${h}, faixa esperada H${lo}-${hi} ${dentro ? 'OK' : 'FORA'}`);
      if (!dentro) problemas.push(`${nicho}: acento em H${h}, fora da faixa H${lo}-${hi} que codifica o nicho, o visitante não vai sentir onde está`);
    }
  }
  return { ok: problemas.length === 0, problemas, relatorio: linhas.join('\n') };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const direcoes = JSON.parse(readFileSync(join(ROOT, 'themes', 'base', 'direcoes.json'), 'utf8'));
  const r = verificar(direcoes);
  console.log(r.relatorio);
  console.log('');
  if (r.ok) console.log('as 3 direções passam: contraste AA, sem cara de IA, dentro do código do nicho\n');
  else { for (const p of r.problemas) console.error(`✗ ${p}`); console.log(''); }
  process.exit(r.ok ? 0 : 1);
}
