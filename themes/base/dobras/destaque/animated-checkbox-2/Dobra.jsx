"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/checkbox/animated-checkbox-2
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
    <section className="dobra" data-dobra="destaque-animated-checkbox-2" ref={raiz}>
      <div className="checkbox-wrapper">
          
          <input type="checkbox" className="check" id="check1-61" />
          <label htmlFor="check1-61" className="label">
            <svg width="45" height="45" viewBox="0 0 95 95">
              <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
              <g transform="translate(0,-952.36222)">
                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
              </g>
            </svg>
            <span>{s.rotulo}</span>
          </label>
        </div>
    </section>
  );
}