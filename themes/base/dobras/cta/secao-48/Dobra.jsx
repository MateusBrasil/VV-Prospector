"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-48
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   // === Per-element fade-from-right entrance (per-element + cascade queue, MIN_GAP 100ms) ===
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.cta');
  //     if (!section) return;
  //   
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     // Per-element: eyebrow + heading + sub + button. Composite: media (image as one unit).
  //     const items = [
  //       section.querySelector('.section-label'),
  //       section.querySelector('.cta__heading'),
  //       section.querySelector('.cta__sub'),
  //       section.querySelector('.cta__btn'),
  //       // .cta__media intentionally excluded — gets its own image-focus-in trigger below
  //     ].filter(Boolean);
  //   
  //     if (!items.length) return;
  //   
  //     gsap.set(items, { autoAlpha: 0, x: 60 });
  //   
  //     const MIN_GAP = 0.1;
  //     let nextSlot = -Infinity;
  //   
  //     items.forEach((item) => {
  //       ScrollTrigger.create({
  //         trigger: item,
  //         start: 'top 88%',
  //         once: true,
  //         onEnter: () => {
  //           const now = performance.now() / 1000;
  //           const delay = Math.max(0, nextSlot - now);
  //           nextSlot = now + delay + MIN_GAP;
  //           gsap.to(item, {
  //             autoAlpha: 1,
  //             x: 0,
  //             duration: 0.8,
  //             ease: 'power3.out',
  //             delay,
  //             // Clear GSAP-injected transform props so CSS hover (.btn) can transition cleanly.
  //             onComplete: () => gsap.set(item, { clearProps: 'translate,rotate,scale,transform,x' }),
  //           });
  //         },
  //       });
  //     });
  //   
  //     // === image-focus-in (scale 1.1 → 1 + blur 20px → 0, ease power2.out) ===
  //     const img = section.querySelector('.cta__media img');
  //     if (img) {
  //       gsap.set(img, { scale: 1.1, autoAlpha: 0 });
  //       ScrollTrigger.create({
  //         trigger: img,
  //         start: 'top 88%',
  //         once: true,
  //         onEnter: () => {
  //           gsap.to(img, { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' });
  //         },
  //       });
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cta-secao-48" ref={raiz}>
      <section className="cta" id="cta">
            <div className="container container--padded">
              <div className="cta__card">
                <div className="cta__text">
                  <div className="cta__text-group">
                    <p className="section-label">{s.texto}</p>
                    <h2 className="cta__heading">{s.titulo}</h2>
                    <p className="cta__sub">{s.texto2}</p>
                  </div>
                  <a href="/contact" className="btn btn--dark cta__btn">
                    <span className="btn__mask">
                      <span className="btn__text">{s.rotulo}</span>
                      <span className="btn__text" aria-hidden="true">{s.rotulo2}</span>
                    </span>
                  </a>
                </div>
                <div className="cta__media">
                  <img src={s.imagem} alt="Professional focused on a laptop" width="1122" height="629" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}