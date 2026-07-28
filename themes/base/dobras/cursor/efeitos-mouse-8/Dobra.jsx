"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-8
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const grid = document.getElementById('grid');
  //     const columnCount = 20;
  //     let cellSize = 0;
  //     let rowCount = 0;
  //   
  //     const colorize = (cell) => {
  //       if (!cell) return;
  //       gsap.killTweensOf(cell);
  //       gsap.set(cell, { backgroundColor: '#000000', opacity: 1 });
  //       gsap.to(cell, {
  //         opacity: 0,
  //         duration: 0.3,
  //         ease: 'none',
  //         onComplete: () => {
  //           gsap.set(cell, { backgroundColor: 'transparent', opacity: 1 });
  //         }
  //       });
  //     };
  //   
  //     const buildGrid = () => {
  //       grid.innerHTML = '';
  //       cellSize = window.innerWidth * 0.05;
  //       if (window.innerWidth <= 900) cellSize = window.innerWidth * 0.08;
  //       rowCount = Math.ceil(window.innerHeight / cellSize);
  //   
  //       for (let col = 0; col < columnCount; col += 1) {
  //         const column = document.createElement('div');
  //         column.className = 'column';
  //         for (let row = 0; row < rowCount; row += 1) {
  //           const pixel = document.createElement('div');
  //           pixel.className = 'pixel';
  //           pixel.addEventListener('mouseenter', () => colorize(pixel));
  //           column.appendChild(pixel);
  //         }
  //         grid.appendChild(column);
  //       }
  //     };
  //   
  //     let resizeTimer;
  //     window.addEventListener('resize', () => {
  //       clearTimeout(resizeTimer);
  //       resizeTimer = setTimeout(buildGrid, 100);
  //     });
  //   
  //     buildGrid();
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-8" ref={raiz}>
      <main className="container">
          <div className="body">
            <p>{s.texto}</p>
          </div>
          <div className="grid" id="grid"></div>
        </main>
    </section>
  );
}