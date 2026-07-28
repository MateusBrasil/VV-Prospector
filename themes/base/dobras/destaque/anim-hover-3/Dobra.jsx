"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-3
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
  //   document.addEventListener('DOMContentLoaded', function () {
  //     const animationStepDuration = 0.3;
  //     const gridSize = 7;
  //     const pixelSize = 100 / gridSize;
  //     const cards = document.querySelectorAll('[data-pixelated-image-reveal]');
  //     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
  //   
  //     cards.forEach((card) => {
  //       const pixelGrid = card.querySelector('[data-pixelated-image-reveal-grid]');
  //       const activeCard = card.querySelector('[data-pixelated-image-reveal-active]');
  //       const existingPixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
  //   
  //       existingPixels.forEach(pixel => pixel.remove());
  //   
  //       for (let row = 0; row < gridSize; row++) {
  //         for (let col = 0; col < gridSize; col++) {
  //           const pixel = document.createElement('div');
  //           pixel.classList.add('pixelated-image-card__pixel');
  //           pixel.style.width = `${pixelSize}%`;
  //           pixel.style.height = `${pixelSize}%`;
  //           pixel.style.left = `${col * pixelSize}%`;
  //           pixel.style.top = `${row * pixelSize}%`;
  //           pixelGrid.appendChild(pixel);
  //         }
  //       }
  //   
  //       const pixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
  //       const totalPixels = pixels.length;
  //       const staggerDuration = animationStepDuration / totalPixels;
  //       let isActive = false;
  //       let delayedCall;
  //   
  //       const animatePixels = (activate) => {
  //         isActive = activate;
  //         gsap.killTweensOf(pixels);
  //         if (delayedCall) delayedCall.kill();
  //   
  //         gsap.set(pixels, { display: 'none' });
  //   
  //         gsap.to(pixels, {
  //           display: 'block',
  //           duration: 0,
  //           stagger: {
  //             each: staggerDuration,
  //             from: 'random'
  //           }
  //         });
  //   
  //         delayedCall = gsap.delayedCall(animationStepDuration, () => {
  //           if (activate) {
  //             activeCard.style.display = 'block';
  //             activeCard.style.pointerEvents = 'none';
  //           } else {
  //             activeCard.style.display = 'none';
  //           }
  //         });
  //   
  //         gsap.to(pixels, {
  //           display: 'none',
  //           duration: 0,
  //           delay: animationStepDuration,
  //           stagger: {
  //             each: staggerDuration,
  //             from: 'random'
  //           }
  //         });
  //       };
  //   
  //       if (isTouchDevice) {
  //         card.addEventListener('click', () => {
  //           animatePixels(!isActive);
  //         });
  //       } else {
  //         card.addEventListener('mouseenter', () => {
  //           if (!isActive) animatePixels(true);
  //         });
  //   
  //         card.addEventListener('mouseleave', () => {
  //           if (isActive) animatePixels(false);
  //         });
  //       }
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-3" ref={raiz}>
      <section className="cloneable">
          <div data-hover data-pixelated-image-reveal className="pixelated-image-card">
            <div className="before__100"></div>
      
            <div className="pixelated-image-card__default">
              <img src={s.imagem} width="400" alt="" className="pixelated-image-card__img" />
            </div>
      
            <div data-pixelated-image-reveal-active className="pixelated-image-card__active">
              <img src={s.imagem2} width="400" alt="" className="pixelated-image-card__img" />
            </div>
      
            <div data-pixelated-image-reveal-grid className="pixelated-image-card__pixels">
              <div className="pixelated-image-card__pixel"></div>
            </div>
          </div>
        </section>
    </section>
  );
}