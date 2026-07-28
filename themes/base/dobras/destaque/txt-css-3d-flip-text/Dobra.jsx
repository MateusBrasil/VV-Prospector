"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/css-3d-flip-text
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="destaque-txt-css-3d-flip-text" ref={raiz}>
      <div className="selector">
              <h2 className="elementor-heading-title">{s.titulo}</h2>
          </div>
    </section>
  );
}