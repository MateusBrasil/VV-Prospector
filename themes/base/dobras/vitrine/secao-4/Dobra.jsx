"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-4
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
  //   // === Per-card fade-from-right entrance ===
  //   // The card is the unit. We don't animate inner elements — the whole card
  //   // slides in from the right when it enters viewport.
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.case-studies-list');
  //     if (!section) return;
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     // Eyebrow first (cascades with first card if both enter together).
  //     const eyebrow = section.querySelector('.case-studies-list__eyebrow');
  //     const cards = Array.from(section.querySelectorAll('.case-study-item'));
  //     const items = [eyebrow, ...cards].filter(Boolean);
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
  //             onComplete: () => gsap.set(item, { clearProps: 'translate,rotate,scale,transform,x' }),
  //           });
  //         },
  //       });
  //     });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-4" ref={raiz}>
      <section className="case-studies-list">
            <div className="container container--padded">
              <div className="case-studies-list__card">
                <p className="section-label case-studies-list__eyebrow">{s.texto}</p>
                <ul className="case-studies-list__rows">
                  <li className="case-study-item">
                    <div className="case-study-item__media">
                      <img src={s.imagem} alt="Industrial pipeline construction site at sunrise" width="476" height="400" loading="eager" />
                    </div>
                    <div className="case-study-item__body">
                      <div className="case-study-item__text">
                        <h2 className="case-study-item__title">{s.titulo}</h2>
                        <p className="case-study-item__desc">{s.texto2}</p>
                        <ul className="case-study-item__tags">
                          <li className="case-study-item__tag">{s.item}</li>
                          <li className="case-study-item__tag">{s.item2}</li>
                          <li className="case-study-item__tag">{s.item3}</li>
                        </ul>
                      </div>
                      <a href="#case-study-1" className="btn btn--ghost case-study-item__cta">
                        <span className="btn__mask">
                          <span className="btn__text">{s.rotulo}</span>
                          <span className="btn__text" aria-hidden="true">{s.rotulo2}</span>
                        </span>
                      </a>
                    </div>
                  </li>
      
                  <li className="case-study-item">
                    <div className="case-study-item__media">
                      <img src={s.imagem2} alt="Engineer reviewing schematics in an operations control room" width="476" height="400" loading="eager" />
                    </div>
                    <div className="case-study-item__body">
                      <div className="case-study-item__text">
                        <h2 className="case-study-item__title">{s.titulo2}</h2>
                        <p className="case-study-item__desc">{s.texto3}</p>
                        <ul className="case-study-item__tags">
                          <li className="case-study-item__tag">{s.item4}</li>
                          <li className="case-study-item__tag">{s.item5}</li>
                          <li className="case-study-item__tag">{s.item6}</li>
                        </ul>
                      </div>
                      <a href="#case-study-2" className="btn btn--ghost case-study-item__cta">
                        <span className="btn__mask">
                          <span className="btn__text">{s.rotulo3}</span>
                          <span className="btn__text" aria-hidden="true">{s.rotulo4}</span>
                        </span>
                      </a>
                    </div>
                  </li>
      
                  <li className="case-study-item">
                    <div className="case-study-item__media">
                      <img src={s.imagem3} alt="Aerial view of a refinery and storage terminals" width="476" height="400" loading="lazy" />
                    </div>
                    <div className="case-study-item__body">
                      <div className="case-study-item__text">
                        <h2 className="case-study-item__title">{s.titulo3}</h2>
                        <p className="case-study-item__desc">{s.texto4}</p>
                        <ul className="case-study-item__tags">
                          <li className="case-study-item__tag">{s.item7}</li>
                          <li className="case-study-item__tag">{s.item8}</li>
                          <li className="case-study-item__tag">{s.item9}</li>
                        </ul>
                      </div>
                      <a href="#case-study-3" className="btn btn--ghost case-study-item__cta">
                        <span className="btn__mask">
                          <span className="btn__text">{s.rotulo5}</span>
                          <span className="btn__text" aria-hidden="true">{s.rotulo6}</span>
                        </span>
                      </a>
                    </div>
                  </li>
      
                  <li className="case-study-item">
                    <div className="case-study-item__media">
                      <img src={s.imagem4} alt="Field technician inspecting valves on a midstream asset" width="476" height="400" loading="lazy" />
                    </div>
                    <div className="case-study-item__body">
                      <div className="case-study-item__text">
                        <h2 className="case-study-item__title">{s.titulo4}</h2>
                        <p className="case-study-item__desc">{s.texto5}</p>
                        <ul className="case-study-item__tags">
                          <li className="case-study-item__tag">{s.item10}</li>
                          <li className="case-study-item__tag">{s.item11}</li>
                          <li className="case-study-item__tag">{s.item12}</li>
                        </ul>
                      </div>
                      <a href="#case-study-4" className="btn btn--ghost case-study-item__cta">
                        <span className="btn__mask">
                          <span className="btn__text">{s.rotulo7}</span>
                          <span className="btn__text" aria-hidden="true">{s.rotulo8}</span>
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    </section>
  );
}