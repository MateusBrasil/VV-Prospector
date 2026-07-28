"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/smart-button
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useEffect, useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useEffect(() => {
    
        const button = raiz.current.querySelector('#smartBtn');
        let timer = null;
    
        button.addEventListener('mouseenter', () => {
          // Inicia o timer de 5 segundos para trocar o texto
          timer = setTimeout(() => {
            button.classList.add('show-alt');
          }, 5000);
        });
    
        button.addEventListener('mouseleave', () => {
          // Reseta tudo ao tirar o mouse
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          button.classList.remove('show-alt');
        });
    
        button.addEventListener('click', () => {
          // Mantém o estado atual se clicado ou reseta se preferir
          if (timer) {
            clearTimeout(timer);
          }
        });
      
  }, []);
  return (
    <section className="dobra" data-dobra="botao-smart-button" ref={raiz}>
      <div className="flex items-center justify-center">
          <button id="smartBtn" className="animated-button" style={{padding: '12px 36px'}} onClick={s.onClick}>
            
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            
            
            <div className="text-container">
              <span className="main-text">{s.rotulo}</span>
              <span className="alt-text">{s.rotulo2}</span>
            </div>
            
            <span className="circle"></span>
            
            
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
    </section>
  );
}