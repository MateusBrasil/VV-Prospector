"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/aura-black-button
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
    <section className="dobra" data-dobra="botao-aura-black-button" ref={raiz}>
      <a href="#"
             className="group isolate inline-flex items-center min-w-[260px] h-[64px] cursor-pointer overflow-hidden overflow-fix transition-all duration-300 hover:scale(105) rounded-full relative"
             style={{'-Spread': '90deg', '-ShimmerColor': 'rgba(255,255,255,0.6)', '-Speed': '4s'}}>
              
              
              <div className="absolute inset-0 z-0">
                  <div className="absolute inset-[-200%] w-[400%] h-[400%] animate-rotate-gradient">
                      <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
                      </div>
                  </div>
              </div>
      
              
              <div className="shimmer-onda"></div>
      
              
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                  <div style={{position: 'absolute', width: '150%', height: '150%', background: 'linear-gradient(90deg, transparent, var(--base-100), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
              </div>
      
              
              <div className="absolute inset-[1.5px] bg-[var(--acento)] rounded-full z-1"></div>
      
              
              <div className="fundo-revelador"></div>
      
              
              <div className="z-10 flex w-full h-full px-5 items-center relative" style={{borderRadius: '9999px'}}>
                  
                  
                  <div className="wrapper-avatar flex items-center gap-2 relative">
                      <div className="ring-2 ring-white/10 w-9 h-9 rounded-full relative bg-gradient-to-br from-neutral-700 via-neutral-900 to-black shadow-inner group-hover:ring-neutral-200 transition-all">
                          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]"></div>
                      </div>
                      
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -right-8">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900">
                              <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
                              <path d="m14 7 3 3"></path>
                              <path d="M5 6v4"></path>
                              <path d="M19 14v4"></path>
                          </svg>
                      </div>
                  </div>
      
                  
                  <div className="flex-1 flex justify-center items-center">
                      <span className="texto-principal text-white whitespace-nowrap font-medium tracking-wide">{s.rotulo}</span>
      
                      <span className="texto-hover">{s.rotulo2}</span>
                  </div>
              </div>
          </a>
    </section>
  );
}