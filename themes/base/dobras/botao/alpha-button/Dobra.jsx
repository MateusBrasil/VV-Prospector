"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/alpha-button
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
    <section className="dobra" data-dobra="botao-alpha-button" ref={raiz}>
      <button className="group animated-gradient relative overflow-hidden font-medium text-green-950 pt-4 pr-8 pb-4 pl-8 shadow-lg transition-all duration-300 hover:shadow-green-500/50" 
                  style={{boxShadow: '0 15px 33px -12px rgba(16,185,129,0.9), inset 0 4px 6.3px rgba(209,250,229,1), inset 0 -5px 6.3px rgba(5,150,105,1)', borderRadius: '9999px'}} onClick={s.onClick}>
              
              
              <div className="shimmer-effect"></div>
      
              
              <div className="group-hover:translate-y-0 transition-transform duration-1000 ease-out bg-white/40 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
              
              <span className="relative flex items-center gap-2">
                  Alpha's Botton
                  
                  
                  <div className="animate-click-icon flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click w-5 h-5">
                          <path d="m9 9 5 12 1.774-5.226L21 14Z"/>
                          <path d="m16.071 16.071 4.243 4.243"/>
                          <path d="m7.188 2.239.777 2.897"/>
                          <path d="m2.239 7.188 2.897.777"/>
                          <path d="M5.226 5.226 8.05 8.05"/>
                          <path d="m11 1V4"/>
                          <path d="M1 11h3"/>
                      </svg>
                  </div>
              </span>
          </button>
    </section>
  );
}