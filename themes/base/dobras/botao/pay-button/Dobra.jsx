"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/pay-button
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
    <section className="dobra" data-dobra="botao-pay-button" ref={raiz}>
      <button
            className="group relative inline-flex items-center justify-center gap-2 w-[130px] h-[40px] rounded-xl cursor-pointer overflow-hidden transition-transform duration-300 active:translate-x-[5px] active:translate-y-[5px] outline outline-0 hover:outline hover:outline-1 hover:outline-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30 text-white"
            style={{backgroundColor: 'rgb(15, 15, 15)', boxShadow: '5px 5px 10px rgba(0,0,0,0.103)'}}
            aria-label="Pay"
           onClick={s.onClick}>
            <span className="text-sm font-semibold tracking-tight select-none">{s.rotulo}</span>
      
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="pointer-events-none"
              aria-hidden="true"
            >
              <rect x="2" y="5" width="20" height="14" rx="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
      
            
            <span
              aria-hidden="true"
              className="absolute top-0 -left-[100%] h-[130px] w-[130px] rounded-full transform transition-transform duration-300 ease-linear group-hover:-translate-y-1/2 group-hover:translate-x-full group-hover:rounded-none"
              style={{backgroundColor: 'white', mixBlendMode: 'difference'}}
            ></span>
          </button>
    </section>
  );
}