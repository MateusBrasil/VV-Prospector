"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-3
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
  //     const mask = document.getElementById('mask');
  //     const target = document.getElementById('mask-target');
  //   
  //     let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  //     let size = 40;
  //   
  //     const renderMask = () => {
  //       gsap.set(mask, {
  //         webkitMaskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         maskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         webkitMaskSize: `${size}px`,
  //         maskSize: `${size}px`
  //       });
  //     };
  //   
  //     renderMask();
  //   
  //     window.addEventListener('mousemove', (event) => {
  //       mouse.x = event.clientX;
  //       mouse.y = event.clientY;
  //   
  //       gsap.to(mask, {
  //         webkitMaskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         maskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         duration: 0.18,
  //         ease: 'power2.out',
  //         overwrite: true
  //       });
  //     });
  //   
  //     target.addEventListener('mouseenter', () => {
  //       size = 400;
  //   
  //       gsap.to(mask, {
  //         webkitMaskSize: `${size}px`,
  //         maskSize: `${size}px`,
  //         webkitMaskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         maskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         duration: 0.5,
  //         ease: 'back.out(1.7)'
  //       });
  //     });
  //   
  //     target.addEventListener('mouseleave', () => {
  //       size = 40;
  //   
  //       gsap.to(mask, {
  //         webkitMaskSize: `${size}px`,
  //         maskSize: `${size}px`,
  //         webkitMaskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         maskPosition: `${mouse.x - size / 2}px ${mouse.y - size / 2}px`,
  //         duration: 0.4,
  //         ease: 'power3.out'
  //       });
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-3" ref={raiz}>
      <main className="main">
          <div className="mask" id="mask">
            <p id="mask-target">{s.texto}</p>
          </div>
      
          <div className="body">
            <p>
              I’m a <span>{s.rotulo}</span> product designer with a strong focus on producing high quality and impactful digital experiences.
            </p>
          </div>
        </main>
    </section>
  );
}