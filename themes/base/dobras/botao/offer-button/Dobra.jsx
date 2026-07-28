"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/offer-button
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
    <section className="dobra" data-dobra="botao-offer-button" ref={raiz}>
      <div className="btn-container">
          <div className="btn-drawer transition-top">expires in...</div>
          <div className="btn-drawer transition-bottom">...8 hours</div>
      
          <button className="btn" onClick={s.onClick}>
            <span className="btn-text">{s.rotulo}</span>
          </button>
      
          <svg
            className="btn-corner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 1 32 32"
          >
            <path
              d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"
            ></path>
          </svg>
          <svg
            className="btn-corner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 1 32 32"
          >
            <path
              d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"
            ></path>
          </svg>
          <svg
            className="btn-corner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 1 32 32"
          >
            <path
              d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"
            ></path>
          </svg>
          <svg
            className="btn-corner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 1 32 32"
          >
            <path
              d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"
            ></path>
          </svg>
        </div>
    </section>
  );
}