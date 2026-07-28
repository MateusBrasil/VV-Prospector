"use client";
/* DOBRA da esteira a partir de bank/_componentes/secoes/secao-162, PORTADA À MÃO
 * em 2026-07-28 para o tema `odontologia` (registo sóbrio).
 *
 * O QUE FICOU: o leque de fichas em arco sobre o painel, com o nome e a função a
 * aparecerem quando se aponta para a ficha. É a peça mais bem encaixada no nicho que
 * o acervo tem — a origem é literalmente um painel de especialistas clínicos.
 *
 * O QUE FOI ARRANCADO
 *   1. Os oito `alt` de demonstração ("Dr. Sarah Jenkins, Cardiologist", "Dr. David
 *      Chen, Neurologist", ...). Eram literais de negócio de OUTRA clínica dentro do
 *      componente, exatamente a classe de defeito que entregou "Zaire Dorwart, CEO" a
 *      um restaurante em Guimarães. Agora o `alt` é derivado do nome e função do slot.
 *   2. Os oito cartões escritos à mão, e o segundo baralho de quatro só para telemóvel
 *      com as MESMAS pessoas repetidas noutros slots de imagem (12 slots de imagem para
 *      8 pessoas). Passou a um `map` sobre `s.membros`, e o corte no telemóvel é CSS.
 *   3. O `gsap.context` de hover, que fazia scale/box-shadow/height por JS e ficava
 *      pendurado num `beforeunload` que nunca dispara numa SPA. O mesmo efeito é hover
 *      em CSS, que o `prefers-reduced-motion` do sistema já sabe travar, e a dobra
 *      deixou de depender de gsap (ver `libs` no variant.json).
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

/* Rotações e recuos do leque. São 8 posições porque é o que o arco comporta sem os
 * cartões se taparem; com menos membros o leque simplesmente fica mais curto. */
const MAX_FICHAS = 8;

export default function Dobra({ slots: s = {}, id }) {
  const membros = (Array.isArray(s.membros) ? s.membros : [])
    .filter(m => m && m.imagem)
    .slice(0, MAX_FICHAS);

  if (!membros.length) return null;

  return (
    <section className="dobra" data-dobra="equipa-secao-162" id={id}>
      <div className="specialists">
        <div className="specialists__panel">
          <div className="specialists__cards">
            <ul className="specialists__deck">
              {membros.map((m, i) => (
                <li className="specialists__card" key={i}>
                  <figure className="specialists__card-inner">
                    <img
                      className="specialists__card-img"
                      src={m.imagem}
                      alt={[m.nome, m.funcao].filter(Boolean).join(', ')}
                      loading="eager"
                      decoding="async"
                    />
                    <figcaption className="specialists__card-info">
                      {m.nome && <h3 className="specialists__card-name">{m.nome}</h3>}
                      {m.funcao && <p className="specialists__card-role">{m.funcao}</p>}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <header className="specialists__header">
            {s.titulo && <h2 className="specialists__title">{s.titulo}</h2>}
            {s.texto && <p className="specialists__subtitle">{s.texto}</p>}
          </header>
        </div>
      </div>
    </section>
  );
}
