"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/efeitos-mouse/efeitos-mouse-6
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
  //     const canvas = document.getElementById('paint-canvas');
  //     const fallback = document.getElementById('fallback');
  //     const textLines = document.querySelectorAll('#text p');
  //     const ctx = canvas.getContext('2d');
  //     let width = 0;
  //     let height = 0;
  //     let previousPosition = null;
  //   
  //     function resizeCanvas() {
  //       width = window.innerWidth;
  //       height = window.innerHeight;
  //       canvas.width = width;
  //       canvas.height = height;
  //   
  //       ctx.fillStyle = '#000000';
  //       ctx.fillRect(0, 0, width, height);
  //       ctx.globalCompositeOperation = 'destination-out';
  //     }
  //   
  //     function lerp(x, y, a) {
  //       return x * (1 - a) + y * a;
  //     }
  //   
  //     function draw(x, y, radius) {
  //       ctx.beginPath();
  //       ctx.arc(x, y, radius, 0, Math.PI * 2);
  //       ctx.fill();
  //     }
  //   
  //     function handlePointerMove(event) {
  //       const clientX = event.clientX;
  //       const clientY = event.clientY;
  //       const movementX = event.movementX || 0;
  //       const movementY = event.movementY || 0;
  //   
  //       const numberOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;
  //   
  //       if (previousPosition && numberOfCircles > 0) {
  //         const x = previousPosition.x;
  //         const y = previousPosition.y;
  //   
  //         for (let i = 0; i < numberOfCircles; i += 1) {
  //           const targetX = lerp(x, clientX, (1 / numberOfCircles) * i);
  //           const targetY = lerp(y, clientY, (1 / numberOfCircles) * i);
  //           draw(targetX, targetY, 50);
  //         }
  //       } else {
  //         draw(clientX, clientY, 50);
  //       }
  //   
  //       previousPosition = { x: clientX, y: clientY };
  //     }
  //   
  //     resizeCanvas();
  //     fallback.style.display = 'none';
  //   
  //     window.addEventListener('resize', resizeCanvas);
  //     canvas.addEventListener('mousemove', handlePointerMove);
  //     canvas.addEventListener('touchmove', (event) => {
  //       const touch = event.touches[0];
  //       if (!touch) return;
  //       handlePointerMove({
  //         clientX: touch.clientX,
  //         clientY: touch.clientY,
  //         movementX: 24,
  //         movementY: 24
  //       });
  //     }, { passive: true });
  //   
  //     gsap.fromTo(textLines, {
  //       y: 24,
  //       opacity: 0
  //     }, {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.9,
  //       stagger: 0.08,
  //       ease: 'power3.out'
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-mouse-trail" ref={raiz}>
      <main className="main">
          <div className="text" id="text">
            <p>{s.texto}</p>
            <p className="align-right">{s.texto2}</p>
            <p className="align-right">{s.texto3}</p>
          </div>
      
          <section className="scene">
            <div className="scene__fallback" id="fallback"></div>
            <canvas id="paint-canvas"></canvas>
          </section>
        </main>
    </section>
  );
}