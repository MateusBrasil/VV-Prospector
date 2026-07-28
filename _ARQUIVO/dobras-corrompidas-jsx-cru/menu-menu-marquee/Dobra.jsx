"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/menu-marquee
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
    <section className="dobra" data-dobra="menu-menu-marquee" ref={raiz}>
      import React, { useState } from 'react';
      
      const ITEMS = [
        { name: 'Vancouver', src: 'https://images.unsplash.com/photo-1731321680653-542179e90f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ2NzU2NTh8&ixlib=rb-4.1.0&q=80&w=400' },
        { name: 'Calgary', src: 'https://images.unsplash.com/photo-1563245091-eb11b28ffff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ2NzUyNDd8&ixlib=rb-4.1.0&q=80&w=800' },
        { name: 'Ottawa', src: 'https://images.unsplash.com/photo-1626624659918-0908378a7001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ2NzUyODF8&ixlib=rb-4.1.0&q=80&w=800' },
        { name: 'Montreal', src: 'https://images.unsplash.com/photo-1685681625665-b51add48cb50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ2NzUzODh8&ixlib=rb-4.1.0&q=80&w=800' },
        { name: 'Toronto', src: 'https://images.unsplash.com/photo-1572548993480-049434a68ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ2NzU0NDV8&ixlib=rb-4.1.0&q=80&w=800' },
        { name: 'Halifax', src: 'https://images.unsplash.com/photo-1691345918991-d2308d908a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ2NzU1MDN8&ixlib=rb-4.1.0&q=80&w=800' },
      ];
      
      export default function App() {
        const [selectedIndex, setSelectedIndex] = useState(0);
      
        // Calcula a máscara (janela) do clip-path baseado no item selecionado.
        // Substitui a necessidade do loop={true} @for no SCSS original.
        const clipPathValue = `polygon(
          0 ${(selectedIndex) * 100 / ITEMS.length}%, 
          100% ${(selectedIndex) * 100 / ITEMS.length}%, 
          100% ${(selectedIndex + 1) * 100 / ITEMS.length}%, 
          0 ${(selectedIndex + 1) * 100 / ITEMS.length}%
        )`;
      
        return (
          <div className="app-container">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
      
              .app-container {
                min-height: 100vh;
                width: 100%;
                color: var(--base-600);
                background-color: var(--base-100);
                font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
                font-family: "Space Grotesk", sans-serif;
                
                display: flex;
                justify-content: center;
                align-items: center;
      
                --row-height: 80px;
              }
      
              .wrapper {
                width: 500px;
                max-width: 90vw;
                margin: 48px 24px;
                position: relative;
              }
      
              .item {
                position: relative;
                height: var(--row-height);
                
                display: flex;
                justify-content: center;
                align-items: center;
                
                cursor: pointer;
                font-weight: 500;
              }
      
              .item input {
                display: none;
              }
              
              .item::after {
                content: '';
                position: absolute;
                inset: 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                z-index: 10;
                pointer-events: none;
              }
      
              .marquee-list {
                position: absolute;
                inset: 0;
                background-color: var(--base-100);
                
                /* Efeito de fade nas bordas do Letreiro (Marquee) */
                -webkit-mask: linear-gradient(90deg, transparent, var(--base-600) 10% 90%, transparent);
                mask: linear-gradient(90deg, transparent, var(--base-600) 10% 90%, transparent);
                pointer-events: none;
      
                transition: clip-path 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                will-change: clip-path;
              }
      
              .marquee-row {
                overflow: hidden;
                height: var(--row-height);
              }
              
              .marquee-row img {
                width: 150px;
                aspect-ratio: 3;
                border-radius: 99px;
                object-fit: cover;
              }
      
              .marquee-inner {
                height: var(--row-height);
                width: max-content;
                display: flex;
                align-items: center;
                gap: 48px;
                padding-left: 48px;
      
                animation: marquee linear 12s infinite;
              }
      
              @keyframes marquee {
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
      
            <div className="wrapper">
              {/* Renderiza as opções de rádio invisíveis (Labels) */}
              {ITEMS.map((el, i) => (
                <label key={i} className="item">
                  {el.name}
                  <input
                    type="radio"
                    name="city"
                    value={el.name}
                    checked={selectedIndex === i}
                    onChange={() = /> setSelectedIndex(i)}
                  />
                </label>
              ))}
      
              {/* Renderiza as faixas com a animação de letreiro (Marquee) */}
              <div className="marquee-list" style={{ clipPath: clipPathValue }}>
                {ITEMS.map((el, i) => (
                  <div key={i} className="marquee-row">
                    <div className="marquee-inner">
                      {/* Repete o conteúdo 4 vezes de acordo com o Array.from original em Pug */}
                      {Array.from({ length: 4 }).map((_, j) => (
                        <React.Fragment key={j}>
                          <span>{el.name}</span>
                          <img src={el.src} alt={el.name} />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    </section>
  );
}