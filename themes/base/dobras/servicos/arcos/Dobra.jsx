"use client";
/* DOBRA da esteira a partir de bank/_componentes/scroll/scroll-29, PORTADA À MÃO
 * em 2026-07-28 e MOVIDA do slot `destaque` para `servicos`, que é o slot certo.
 *
 * PORQUÊ A MUDANÇA DE SLOT
 * A peça é, na origem, uma lista de blocos "título + descrição + link" ao lado de uma
 * fotografia que fica quieta. Isso é uma secção de serviços, não um destaque. O
 * `receitas.json` já tinha registado que o classificador de slot erra (7 de 11 dobras
 * foram parar a `servicos` por conterem a palavra "Services" numa lista de links de
 * rodapé); este é o erro simétrico, uma secção de serviços a viver em `destaque`.
 * Corrigido, não contornado.
 *
 * O QUE FICOU: a relação entre a coluna de blocos e a fotografia ao lado, e a pílula
 * de ligação em cada bloco.
 *
 * O QUE FOI ARRANCADO
 *   1. Os quatro blocos escritos à mão com ids de cor (`#green-arch`, `#blue-arch`,
 *      `#pink-arch`, `#orange-arch`) viraram um `map` sobre `s.itens`. Fixos em quatro,
 *      nenhum cliente com 3 ou 6 tratamentos podia usar a dobra.
 *   2. `style={{backgroundColor: 'var(--acento)'}}` inline em cada link, com o primeiro
 *      acentuado e os outros três em `--base-200`. Realçar sempre o primeiro item não é
 *      informação nenhuma: a ordem dos tratamentos é do cliente. Passou tudo para CSS.
 *   3. O ícone de três círculos da origem, que é decoração de outra marca. Trocado por
 *      uma seta em SVG de linha, como a regra do motor pede.
 *   4. As quatro fotografias de demonstração de host externo (imagekit.io): a dobra passa
 *      a ter UMA imagem, que vem do cliente. Nenhum URL externo sobrevive ao build.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

export default function Dobra({ slots: s = {}, id }) {
  const itens = Array.isArray(s.itens) ? s.itens.filter(Boolean) : [];
  if (!itens.length) return null;

  return (
    <section className="dobra" data-dobra="servicos-arcos" id={id}>
      <div className="arch-container">
        {(s.rotulo || s.titulo) && (
          <header className="arch__header">
            {s.rotulo && <p className="arch__kicker sm">{s.rotulo}</p>}
            {s.titulo && <h2>{s.titulo}</h2>}
          </header>
        )}

        <div className="arch">
          <div className="arch__left">
            {itens.map((item, i) => (
              <article className="arch__info" key={i}>
                <div className="content">
                  <h3 className="header">{item.titulo}</h3>
                  {item.texto && <p className="desc">{item.texto}</p>}
                  {item.acao && item.destino && (
                    <a className="link" href={item.destino}>
                      <span>{item.acao}</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {s.imagem && (
            <div className="arch__right">
              <div className="img-wrapper">
                <img src={s.imagem} alt={s.imagemAlt || ''} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
