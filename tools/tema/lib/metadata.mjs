/** Metadados puros derivados de slots já extraídos. */
export function sugerirPrecondicoes(slots) {
  const imagens = slots.filter(s => s.tipo === 'imagem').length;
  const textos = slots.filter(s => s.tipo === 'texto');
  const maisLongo = Math.max(0, ...textos.map(t => (t.exemplo || '').length));
  const precondicoes = {};
  if (imagens) precondicoes.imagensMin = imagens;
  if (maisLongo > 220) precondicoes.copiaMinChars = Math.round(maisLongo * 0.6);
  if (textos.some(t => /^h1$/i.test(t.tag)) && maisLongo < 25) precondicoes.nomeMaxPalavras = 3;
  return precondicoes;
}

export function acharImagensPresasAoCss(css) {
  return [...css.matchAll(/:nth-child\((\d+)\)[^{]*\{[^}]*background-image\s*:\s*url\(['"]?([^'")]+)/gi)]
    .map(m => ({ posicao: +m[1], url: m[2] }));
}
