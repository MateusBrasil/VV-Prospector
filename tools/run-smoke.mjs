/** Contrato estrito da única fixture que pode percorrer o ciclo inteiro sem ser um lead. */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

export const SMOKE_SLUG = '_smoke-test-restaurante';
export const SMOKE_BRIEF = join('briefs', `${SMOKE_SLUG}.json`);

/** Não basta o slug: só o ficheiro canónico, com a marca explícita, ganha exceções de smoke. */
export function eSmokeRestaurante({ root, briefPath, brief }) {
  return resolve(root, briefPath) === resolve(root, SMOKE_BRIEF)
    && brief?._smoke_test === true
    && brief?.slug === SMOKE_SLUG;
}

/** Mantido puro para que a proibição de deploy seja testável sem chamar CRM ou Vercel. */
export function validarExecucaoSmoke({ smoke, deploy }) {
  if (smoke && deploy) return { ok: false, err: 'a fixture smoke não pode usar --deploy' };
  return { ok: true };
}

/**
 * `verificar.mjs` escreve este relatório quando o passe usa screenshots (o modo normal do ciclo).
 * No smoke, sucesso sem esse ficheiro não prova nada: browser/QA tem de ter realmente corrido.
 */
export function validarRelatorioSmokeQa(dir) {
  const caminho = join(dir, '_qa', 'relatorio.json');
  if (!existsSync(caminho)) return { ok: false, err: `QA smoke sem relatório: ${caminho}` };

  let relatorio;
  try { relatorio = JSON.parse(readFileSync(caminho, 'utf8')); }
  catch (e) { return { ok: false, err: `QA smoke com relatório ilegível: ${e.message}` }; }

  const viewports = new Set((relatorio.viewports || []).map(String));
  if (relatorio.veredicto !== 'OK' || relatorio.fails !== 0)
    return { ok: false, err: 'QA smoke não teve veredicto OK sem falhas' };
  if (!viewports.has('375') || !viewports.has('1440'))
    return { ok: false, err: 'QA smoke não mediu os breakpoints obrigatórios 375 e 1440' };
  return { ok: true, caminho, relatorio };
}
