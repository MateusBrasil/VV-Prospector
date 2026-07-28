"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/revolutionary-button
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
    <section className="dobra" data-dobra="botao-revolutionary-button" ref={raiz}>
      <button type="button" className="button" onClick={s.onClick}>
        
        <div className="points_wrapper">
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
        </div>
      
        <span className="inner">
          
          <svg
            className="icon"
            fill="none"
            stroke="var(--base-600)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063A2 2 0 0 0 14.063 15.5L12.481 21.635a.5.5 0 0 1-.962 0L9.937 15.5Z"></path>
            
            <path d="M20 7l-1.207 1.207a1 1 0 0 0 0 1.414L20 11l1.207-1.207a1 1 0 0 0 0-1.414L20 7Z"></path>
          </svg>
          
          
          <svg className="text-svg" viewBox="0 0 115 20">
            <text x="0" y="15" fill="var(--base-600)">Revolutionary</text>
          </svg>
        </span>
      </button>
    </section>
  );
}