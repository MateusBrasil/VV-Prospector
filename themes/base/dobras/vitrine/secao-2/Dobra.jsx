"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-2
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
  //   (() => {
  //     const items = [...document.querySelectorAll('.portfolio__item')];
  //     if (!items.length) return;
  //     items.forEach((item) => {
  //       const btn = item.querySelector('.portfolio__row');
  //       btn.addEventListener('click', () => {
  //         const wasOpen = item.classList.contains('portfolio__item--open');
  //         items.forEach((other) => {
  //           other.classList.remove('portfolio__item--open');
  //           other.querySelector('.portfolio__row').setAttribute('aria-expanded', 'false');
  //         });
  //         if (!wasOpen) {
  //           item.classList.add('portfolio__item--open');
  //           btn.setAttribute('aria-expanded', 'true');
  //         }
  //       });
  //     });
  //   })();
  //   
  //   // === Per-element fade-from-right entrance (per-element + cascade queue, MIN_GAP 100ms) ===
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.portfolio');
  //     if (!section) return;
  //   
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     // Per-element: eyebrow + lead. Composite: list (accordion as one unit), media (image as one unit).
  //     const items = [
  //       section.querySelector('.section-label'),
  //       section.querySelector('.portfolio__lead'),
  //       section.querySelector('.portfolio__list'),
  //       // .portfolio__media intentionally excluded — gets its own image-focus-in trigger below
  //     ].filter(Boolean);
  //   
  //     if (items.length) {
  //       gsap.set(items, { autoAlpha: 0, x: 60 });
  //       // Single trigger + tight stagger so the cascade reads as continuous flow,
  //       // not a visibly paused sequence.
  //       ScrollTrigger.create({
  //         trigger: section,
  //         start: 'top 88%',
  //         once: true,
  //         onEnter: () => {
  //           gsap.to(items, {
  //             autoAlpha: 1,
  //             x: 0,
  //             duration: 0.8,
  //             ease: 'power3.out',
  //             stagger: 0.06,
  //           });
  //         },
  //       });
  //     }
  //   
  //     // === image-focus-in (scale 1.1 → 1 + blur 20px → 0, ease power2.out) ===
  //     const img = section.querySelector('.portfolio__media img');
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
    <section className="dobra" data-dobra="vitrine-secao-2" ref={raiz}>
      <section className="portfolio">
            <div className="container container--padded">
              <div className="portfolio__card">
                <header className="portfolio__header">
                  <p className="section-label">{s.texto}</p>
                  <h2 className="portfolio__lead">{s.titulo}</h2>
                </header>
      
                <div className="portfolio__content">
                  <ul className="portfolio__list">
                    <li className="portfolio__item portfolio__item--open">
                      <button type="button" className="portfolio__row" aria-expanded="true" aria-controls="portfolio-panel-0" onClick={s.onClick}>
                        <span className="portfolio__row-title">{s.rotulo}</span>
                        <span className="portfolio__row-icon" aria-hidden="true">
                          <img className="portfolio__row-icon-plus" src={s.imagem} alt="" width="24" height="24" />
                          <img className="portfolio__row-icon-close" src={s.imagem2} alt="" width="24" height="24" />
                        </span>
                      </button>
                      <div className="portfolio__row-panel" id="portfolio-panel-0" role="region">
                        <div className="portfolio__row-panel-inner">
                          <p className="portfolio__row-desc">{s.texto2}</p>
                        </div>
                      </div>
                    </li>
      
                    <li className="portfolio__item">
                      <button type="button" className="portfolio__row" aria-expanded="false" aria-controls="portfolio-panel-1" onClick={s.onClick}>
                        <span className="portfolio__row-title">{s.rotulo2}</span>
                        <span className="portfolio__row-icon" aria-hidden="true">
                          <img className="portfolio__row-icon-plus" src={s.imagem3} alt="" width="24" height="24" />
                          <img className="portfolio__row-icon-close" src={s.imagem4} alt="" width="24" height="24" />
                        </span>
                      </button>
                      <div className="portfolio__row-panel" id="portfolio-panel-1" role="region">
                        <div className="portfolio__row-panel-inner">
                          <p className="portfolio__row-desc">{s.texto3}</p>
                        </div>
                      </div>
                    </li>
      
                    <li className="portfolio__item">
                      <button type="button" className="portfolio__row" aria-expanded="false" aria-controls="portfolio-panel-2" onClick={s.onClick}>
                        <span className="portfolio__row-title">{s.rotulo3}</span>
                        <span className="portfolio__row-icon" aria-hidden="true">
                          <img className="portfolio__row-icon-plus" src={s.imagem5} alt="" width="24" height="24" />
                          <img className="portfolio__row-icon-close" src={s.imagem6} alt="" width="24" height="24" />
                        </span>
                      </button>
                      <div className="portfolio__row-panel" id="portfolio-panel-2" role="region">
                        <div className="portfolio__row-panel-inner">
                          <p className="portfolio__row-desc">{s.texto4}</p>
                        </div>
                      </div>
                    </li>
      
                    <li className="portfolio__item">
                      <button type="button" className="portfolio__row" aria-expanded="false" aria-controls="portfolio-panel-3" onClick={s.onClick}>
                        <span className="portfolio__row-title">{s.rotulo4}</span>
                        <span className="portfolio__row-icon" aria-hidden="true">
                          <img className="portfolio__row-icon-plus" src={s.imagem7} alt="" width="24" height="24" />
                          <img className="portfolio__row-icon-close" src={s.imagem8} alt="" width="24" height="24" />
                        </span>
                      </button>
                      <div className="portfolio__row-panel" id="portfolio-panel-3" role="region">
                        <div className="portfolio__row-panel-inner">
                          <p className="portfolio__row-desc">{s.texto5}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
      
                  <div className="portfolio__media">
                    <img src={s.imagem9} alt="Smiling professional in a white shirt" width="486" height="486" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}