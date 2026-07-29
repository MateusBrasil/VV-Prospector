"use client";
/* DOBRA da esteira a partir de bank/_componentes/cards/css-card-effect-reproduction-and-explanation,
 * PORTADA À MÃO em 2026-07-28 para o tema `clinica-estetica` (registo editorial).
 *
 * MUDOU DE SLOT: estava em `diferenciais`, passou para `servicos`. A classificação
 * automática viu três cartões com título e descrição e chamou-lhes diferenciais; o que
 * a peça é, estruturalmente, é uma lista de ofertas lado a lado, que é o slot `servicos`.
 * É o mesmo tipo de correção que o tema `odontologia` fez em destaque/scroll-29 → servicos/arcos.
 *
 * O QUE FICOU DA ORIGEM (é o material que vale)
 *   a fila de cartões que se sobrepõem em repouso e se separam quando um deles recebe o
 *   ponteiro. É um gesto de folhear, e é o que distingue esta secção de uma grelha banal.
 *
 * O QUE FOI ARRANCADO, E PORQUÊ
 *   1. Os três cartões fixos deram lugar a `s.itens`. Uma clínica com cinco tratamentos
 *      mostra cinco; a estrutura fixa obrigava a inventar ou a cortar.
 *   2. `rotate(-5deg) translateY(-50px)` no hover. O `direcoes.json` deste nicho nega
 *      explicitamente "animação de espetáculo": o cartão passa a separar-se e a subir 8px,
 *      sem rodar. O gesto continua legível, deixa de ser um truque.
 *   3. Não havia ligação nenhuma. Cada cartão passa a poder ter `acao` + `destino`, com
 *      destino real; sem destino não sai link nenhum, nunca um `href="#"`.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

export default function Dobra({ slots: s = {}, id }) {
  const itens = Array.isArray(s.itens) ? s.itens.filter(Boolean) : [];
  if (!itens.length) return null;

  return (
    <section className="dobra" data-dobra="servicos-cartoes" id={id}>
      <div className="cartoes">
        {(s.rotulo || s.titulo) && (
          <header className="cartoes__header">
            {s.rotulo && <p className="cartoes__kicker sm">{s.rotulo}</p>}
            {s.titulo && <h2>{s.titulo}</h2>}
          </header>
        )}

        <div className="cartoes__fila">
          {itens.map((item, i) => (
            <article className="cartao" data-tem-imagem={item.imagem ? "true" : "false"} key={i}>
              {item.imagem && (
                <figure className="cartao__media">
                  <img src={item.imagem} alt={item.imagemAlt || ""} />
                </figure>
              )}
              <div className="cartao__conteudo">
                <h3>{item.titulo}</h3>
                {item.texto && <p className="sm">{item.texto}</p>}
                {item.acao && item.destino && (
                  <a className="cartao__link" href={item.destino}>
                    <span>{item.acao}</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
