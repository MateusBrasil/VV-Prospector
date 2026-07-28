"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/why-not-button
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
    <section className="dobra" data-dobra="botao-why-not-button" ref={raiz}>
      <button className="group relative inline-flex min-w-[160px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(16,185,129,0.2),_0_6.7px_5.3px_rgba(16,185,129,0.25),_0_12.5px_10px_rgba(16,185,129,0.3)] overflow-hidden font-semibold text-emerald-100 tracking-tight bg-emerald-700 border-emerald-500 border rounded-full pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-center justify-center" onClick={s.onClick}>
        
        
        <span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">{s.rotulo}</span>
        
        
        <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">{s.rotulo2}</span>
      
        
        <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-emerald-200 to-transparent rounded-full blur-[2px]"></span>
        
        
        <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/5 to-transparent rounded-full"></span>
      </button>
    </section>
  );
}