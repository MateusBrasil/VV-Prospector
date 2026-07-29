/**
 * Gates de material por tema. A validação de schema garante que o site existe;
 * este módulo garante que a dobra premium escolhida tem o material que a torna
 * premium. Não há fallback silencioso de uma imagem de hero para uma narrativa.
 */

const caminho = (objeto, chave) => chave.split('.').reduce((valor, parte) => valor?.[parte], objeto);

export function validarConteudoDoTema(cliente, tema) {
  const fatais = [];
  if (tema !== 'odontologia') return fatais;

  const itens = caminho(cliente, 'blocos.servicos.itens');
  if (!Array.isArray(itens) || !itens.length) return fatais;

  const semImagem = itens
    .map((item, indice) => ({ titulo: item?.titulo || `tratamento ${indice + 1}`, imagem: item?.imagem }))
    .filter(item => typeof item.imagem !== 'string' || !item.imagem.trim())
    .map(item => item.titulo);
  if (semImagem.length) {
    fatais.push(`blocos.servicos.itens[].imagem — scroll-29 exige uma fotografia real por tratamento; faltam: ${semImagem.join(', ')}`);
  }

  // A fixture é técnica e usa um SVG repetido. Em cliente real, repetir o hero
  // seria exatamente o empobrecimento que este gate existe para impedir.
  if (!cliente._smoke_test && !semImagem.length) {
    const imagens = itens.map(item => item.imagem.trim());
    if (new Set(imagens).size !== imagens.length) {
      fatais.push('blocos.servicos.itens[].imagem — cada tratamento precisa de uma fotografia diferente; imagem repetida transforma o componente premium em lista genérica');
    }
  }
  return fatais;
}
