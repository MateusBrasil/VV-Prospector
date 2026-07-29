/**
 * Decide o motor de montagem sem executar efeitos colaterais.
 *
 * Um tema só vence quando foi escolhido explicitamente no brief, ou quando o
 * cliente já possui uma ficha de tema e não há um plano de curadoria. Assim,
 * um plano Code Eagle para um nicho novo nunca é capturado por engano por um
 * tema existente (por exemplo, restaurante-noir).
 */
export function escolherModoMontagem({ brief = {}, temFichaTema = false, forcarRemix = false } = {}) {
  const temaDeclarado = brief.tema === true || typeof brief.tema === 'string';
  const temTema = temaDeclarado || (temFichaTema && !brief.plano);

  if (temTema) return 'tema';
  if (brief.plano) return 'compor';
  if (brief.blocos?.length && !forcarRemix) return 'assemble';
  return 'remix';
}
