"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/all-in-button
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
    <section className="dobra" data-dobra="botao-all-in-button" ref={raiz}>
      <style>
          /* Reset e Configurações Base do Botão */
          .all-in-btn-wrapper {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
              background: transparent;
          }
      
          .all-in-button {
              all: unset; /* Reseta estilos padrão do navegador */
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              position: relative;
              padding: 20px 40px 20px 48px;
              background-color: var(--base-100);
              border-radius: 9999px;
              cursor: pointer;
              overflow: hidden;
              transition: all 0.3s ease;
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
              font-family: sans-serif;
              text-transform: uppercase;
              font-weight: 600;
              font-size: 1.125rem;
              letter-spacing: 0.025em;
              color: var(--base-600);
              
              /* Fix para bordas arredondadas em animação */
              transform: translateZ(0);
              -webkit-mask-image: -webkit-radial-gradient(white, black);
              isolation: isolate;
              backface-visibility: hidden;
          }
      
          .all-in-button:hover {
              transform: translateY(-1px);
              box-shadow: 0 8px 30px rgba(255, 255, 255, 0.1);
          }
      
          .all-in-button:active {
              transform: scale(0.98);
          }
      
          /* O Círculo Azul que cresce */
          .btn-circle {
              position: absolute;
              left: 20px;
              z-index: 0;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              background-color: var(--base-600);
              transition: all 1300ms cubic-bezier(0.86, 0, 0.07, 1);
          }
      
          .all-in-button:hover .btn-circle {
              transform: scale(80);
              background-color: var(--acento);
          }
      
          /* Efeito de Shimmer (Brilho) */
          .btn-shimmer {
              position: absolute;
              top: -50%;
              left: -20%;
              width: 120px;
              height: 200%;
              background: linear-gradient(10deg, var(--base-100) 12.81%, rgba(209, 210, 234, 0) 66.66%);
              mix-blend-mode: overlay;
              transform: translateX(-50%) skew(-25deg);
              pointer-events: none;
              opacity: 0;
              z-index: 5;
          }
      
          .all-in-button:hover .btn-shimmer {
              animation: shinery-pure 4s infinite ease-in-out;
          }
      
          /* Texto */
          .btn-text {
              position: relative;
              z-index: 10;
              transition: color 0.3s ease;
          }
      
          .all-in-button:hover .btn-text {
              color: var(--base-100);
          }
      
          /* Seta e Ícone */
          .btn-icon-wrapper {
              position: relative;
              z-index: 10;
              display: flex;
              align-items: center;
              width: 0;
              opacity: 0;
              transform: translateX(16px);
              transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
              overflow: hidden;
          }
      
          .all-in-button:hover .btn-icon-wrapper {
              width: 28px;
              opacity: 1;
              transform: translateX(0);
          }
      
          .btn-arrow-svg {
              width: 28px;
              height: 28px;
          }
      
          .all-in-button:hover .btn-arrow-svg {
              animation: bounce-right-pure 1s ease-in-out infinite;
          }
      
          /* Keyframes */
          @keyframes shinery-pure {
              0%, 100% { left: -20%; opacity: 0; }
              20% { opacity: 1; }
              48% { left: 140%; opacity: 1; }
              51% { opacity: 0; }
          }
      
          @keyframes bounce-right-pure {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(5px); }
          }
      </style>
      
      <div className="all-in-btn-wrapper">
          <button className="all-in-button" onClick={s.onClick}>
              
              <div className="btn-circle"></div>
              
              
              <div className="btn-shimmer"></div>
      
              
              <span className="btn-text">{s.rotulo}</span>
      
              
              <div className="btn-icon-wrapper">
                  <svg viewBox="0 0 24 24" className="btn-arrow-svg" fill="none" stroke="currentColor" strokeWidth="2">
                      <g stroke="var(--base-100)" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" opacity="0.5"></circle>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3"></path>
                      </g>
                  </svg>
              </div>
          </button>
      </div>
    </section>
  );
}