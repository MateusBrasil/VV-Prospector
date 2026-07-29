/**
 * Gates de material por tema. A validação de schema garante que o site existe;
 * este módulo garante que a dobra premium escolhida tem o material que a torna
 * premium. Não há fallback silencioso de uma imagem de hero para uma narrativa.
 */

const caminho = (objeto, chave) => chave.split('.').reduce((valor, parte) => valor?.[parte], objeto);

const lista = (cliente, chave) => {
  const valor = caminho(cliente, chave);
  return Array.isArray(valor) ? valor.filter(Boolean) : [];
};

const exigir = (erros, condicao, mensagem) => { if (!condicao) erros.push(mensagem); };

function exigirImagensDistintas(erros, itens, chave, descricao, cliente) {
  const semImagem = itens.filter(item => typeof item?.[chave] !== 'string' || !item[chave].trim());
  exigir(erros, !semImagem.length, `${descricao} — cada item precisa de fotografia própria`);
  if (!cliente._smoke_test && !semImagem.length) {
    const imagens = itens.map(item => item[chave].trim());
    exigir(erros, new Set(imagens).size === imagens.length, `${descricao} — não reutilize a mesma fotografia em itens diferentes`);
  }
}

export function validarConteudoDoTema(cliente, tema) {
  const fatais = [];
  if (tema === 'restaurante-noir') {
    const imagensHero = lista(cliente, 'blocos.hero.imagens');
    exigir(fatais, imagensHero.length >= 5, 'blocos.hero.imagens — restaurante premium exige ao menos 5 fotografias reais para o hero Code Eagle');
    if (imagensHero.length) exigirImagensDistintas(fatais, imagensHero, 'src', 'blocos.hero.imagens[].src', cliente);
    const vitrine = lista(cliente, 'blocos.vitrine.itens');
    exigir(fatais, vitrine.length >= 5, 'blocos.vitrine.itens — restaurante premium exige ao menos 5 pratos ou cenas reais para a vitrine Code Eagle');
    if (vitrine.length) exigirImagensDistintas(fatais, vitrine, 'imagem', 'blocos.vitrine.itens[].imagem', cliente);
    if (!cliente._smoke_test && imagensHero.length && vitrine.length) {
      const imagensDaNarrativa = [
        ...imagensHero.map(item => item?.src).filter(valor => typeof valor === 'string' && valor.trim()),
        ...vitrine.map(item => item?.imagem).filter(valor => typeof valor === 'string' && valor.trim()),
      ];
      exigir(fatais, new Set(imagensDaNarrativa).size >= 8,
        'hero e vitrine — restaurante premium exige ao menos 8 fotografias distintas entre atmosfera, pratos e sala');
    }
  }
  if (tema === 'odontologia') {
    const tratamentos = lista(cliente, 'blocos.servicos.itens');
    exigir(fatais, tratamentos.length >= 3, 'blocos.servicos.itens — odontologia premium exige pelo menos 3 tratamentos reais');
    if (tratamentos.length) exigirImagensDistintas(fatais, tratamentos, 'imagem', 'blocos.servicos.itens[].imagem (scroll-29)', cliente);

    const equipa = lista(cliente, 'blocos.equipa.membros');
    exigir(fatais, equipa.length >= 2, 'blocos.equipa.membros — clínica dentária premium exige pelo menos 2 profissionais reais');
    if (equipa.length) exigirImagensDistintas(fatais, equipa, 'imagem', 'blocos.equipa.membros[].imagem', cliente);

    const faq = lista(cliente, 'blocos.faq.itens');
    exigir(fatais, faq.length >= 3, 'blocos.faq.itens — clínica dentária premium exige pelo menos 3 dúvidas reais de pacientes');
  }

  if (tema === 'clinica-estetica') {
    const casos = lista(cliente, 'blocos.vitrine.itens');
    exigir(fatais, casos.length >= 2, 'blocos.vitrine.itens — clínica estética premium exige ao menos 2 casos antes/depois autorizados');
    if (casos.length) exigirImagensDistintas(fatais, casos, 'antes', 'blocos.vitrine.itens[].antes', cliente);
    if (casos.length) exigirImagensDistintas(fatais, casos, 'depois', 'blocos.vitrine.itens[].depois', cliente);

    const prova = lista(cliente, 'blocos.prova.itens');
    exigir(fatais, prova.length >= 3, 'blocos.prova.itens — clínica estética premium exige pelo menos 3 testemunhos verificáveis');
  }
  return fatais;
}
