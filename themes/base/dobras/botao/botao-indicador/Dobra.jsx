"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/botao-indicador
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
    <section className="dobra" data-dobra="botao-botao-indicador" ref={raiz}>
      <div
        className="group flex flex-1 gap-2 text-[13px] hover:text-white transition font-medium text-neutral-300 pt-5 pr-6 pb-5 pl-6 items-center justify-center">
        <style>
          .bookmarkBtn {
            width: auto;
            min-width: 120px;
            height: 40px;
            border-radius: 40px;
            /* Azul mais vivo e saturado */
            border: 1px solid rgba(14, 165, 233, 0.4);
            background-color: rgb(12, 12, 12);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            transition-duration: 0.3s;
            overflow: hidden;
            padding: 0;
            position: relative;
          }
      
          /* Efeito de Shimmer na Borda (Stroke) - Sincronizado */
          .bookmarkBtn::before {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(14, 165, 233, 0.2) 25%, 
              rgba(255, 255, 255, 0.9) 50%, 
              rgba(14, 165, 233, 0.2) 75%, 
              transparent 100%);
            background-size: 200% 100%;
            -webkit-mask: linear-gradient(var(--base-100) 0 0) content-box, linear-gradient(var(--base-100) 0 0);
            mask: linear-gradient(var(--base-100) 0 0) content-box, linear-gradient(var(--base-100) 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0;
            z-index: 5;
            transition: opacity 0.3s;
          }
      
          .bookmarkBtn:hover::before {
            opacity: 1;
            animation: shinerySync 2s infinite ease-in-out;
          }
      
          /* Shimmer Interno - Sincronizado */
          .IconContainer {
            width: 30px;
            height: 30px;
            /* Gradiente de azul mais "elétrico" */
            background: linear-gradient(to bottom, var(--base-200), var(--acento));
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            z-index: 2;
            transition-duration: 0.3s;
            flex-shrink: 0;
            margin-left: 5px;
            position: relative;
          }
      
          .IconContainer::after {
            content: '';
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0) 20%, 
              rgba(255, 255, 255, 0.5) 50%, 
              rgba(255, 255, 255, 0) 80%, 
              transparent 100%);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: -110%;
            transform: skewX(-25deg);
            user-select: none;
            pointer-events: none;
          }
      
          .bookmarkBtn:hover .IconContainer::after {
            animation: internalShinerySync 2s infinite ease-in-out;
          }
      
          @keyframes shinerySync {
            0% { background-position: 150% 0; }
            100% { background-position: -150% 0; }
          }
      
          @keyframes internalShinerySync {
            0% { left: -110%; }
            100% { left: 110%; }
          }
      
          .icon {
            border-radius: 1px;
            transition-duration: 0.3s;
            z-index: 3;
          }
      
          .bookmarkBtn:hover .icon {
            animation: arrowNudge 1s infinite ease-in-out;
          }
      
          @keyframes arrowNudge {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(4px); }
          }
      
          .text {
            height: 100%;
            width: auto;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            z-index: 1;
            transition-duration: 0.3s;
            font-size: 0.9em;
            margin: 0;
            margin-left: 8px;
            margin-right: 8px;
            opacity: 1;
            transform: translateX(0);
          }
      
          .bookmarkBtn:hover .IconContainer {
            width: calc(100% - 10px);
            border-radius: 35px;
            margin-left: 5px;
            transition-duration: 0.3s;
          }
      
          .bookmarkBtn:hover .text {
            opacity: 0;
            transform: translateX(30px);
            transition-duration: 0.3s;
          }
      
          .bookmarkBtn:active {
            transform: scale(0.95);
            transition-duration: 0.3s;
          }
        </style>
        <button className="bookmarkBtn" onClick={s.onClick}>
          <span className="IconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}}><path d="M5 12h14" className=""></path><path d="m12 5 7 7-7 7" className=""></path></svg>
          </span>
          <p className="text">{s.texto}</p>
        </button>
      </div>
    </section>
  );
}