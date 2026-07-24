"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cards/card-grid-hover-effect,
 * com um acabamento manual (ver Dobra.css): a origem prendia a foto de cada cartão a
 * `:nth-child(N)` no CSS, sem nenhum atributo no HTML para a trocar. Isso foi convertido
 * para 4 slots de imagem de verdade, um por cartão, via custom property `--img`.
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de hover, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';

const PRODUTOS = [
  { imagem: 'imagem', titulo: 'titulo2', texto: 'texto2', acao: 'acao' },
  { imagem: 'imagem2', titulo: 'titulo3', texto: 'texto3', acao: 'acao2' },
  { imagem: 'imagem3', titulo: 'titulo4', texto: 'texto4', acao: 'acao3' },
  { imagem: 'imagem4', titulo: 'titulo5', texto: 'texto5', acao: 'acao4' },
];

export default function Dobra({ slots: s = {}, id, quantidade = PRODUTOS.length }) {
  const raiz = useRef(null);
  return (
    <section className="dobra" data-dobra="vitrine-grelha-hover" id={id} ref={raiz}>
      <div className="container">
        {(s.titulo || s.texto) && (
          <header className="header">
            {s.titulo && <h2>{s.titulo}</h2>}
            {s.texto && <p>{s.texto}</p>}
          </header>
        )}

        <main className="page-content">
          {PRODUTOS.slice(0, quantidade).map((p, i) => (
            <div
              className="card"
              tabIndex="0"
              key={i}
              style={{ '--img': s[p.imagem] ? `url(${s[p.imagem]})` : 'none' }}
            >
              <div className="content">
                <h2 className="title">{s[p.titulo]}</h2>
                <p className="copy">{s[p.texto]}</p>
                {s[p.acao] && <button className="btn">{s[p.acao]}</button>}
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}
