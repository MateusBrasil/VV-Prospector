"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/checkbox/animated-checkbox-1
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
    <section className="dobra" data-dobra="destaque-animated-checkbox-1" ref={raiz}>
      <div className="checkbox-wrapper-46">
          <input type="checkbox" id="cbx-46" className="inp-cbx" />
          <label htmlFor="cbx-46" className="cbx">
            <span>
              <svg viewBox="0 0 12 10" height="10px" width="12px">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <span>{s.rotulo}</span>
          </label>
        </div>
    </section>
  );
}