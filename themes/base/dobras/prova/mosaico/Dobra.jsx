"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-185
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
  //   /* === Active-state sync between stat links and groups in view === */
  //   (() => {
  //     const section = document.querySelector('.success');
  //     if (!section) return;
  //   
  //     const stats = Array.from(section.querySelectorAll('.success__stat'));
  //     const groups = Array.from(section.querySelectorAll('.success-group'));
  //     if (!stats.length || !groups.length) return;
  //   
  //     /* "Active" zone = group whose top sits in the upper third of the viewport.
  //        rootMargin shrinks the IO root so only one group is intersecting at a time. */
  //     const io = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;
  //         const id = entry.target.id;
  //         stats.forEach((stat) => {
  //           stat.classList.toggle(
  //             'success__stat--active',
  //             stat.dataset.statTarget === id,
  //           );
  //         });
  //       });
  //     }, { rootMargin: '-25% 0px -55% 0px', threshold: 0 });
  //   
  //     groups.forEach((g) => io.observe(g));
  //   })();
  //   
  //   /* === Per-element fade-from-right entrance (per-element + cascade queue, MIN_GAP 100ms) === */
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (!gsap || !ScrollTrigger) return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.success');
  //     if (!section) return;
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (prefersReduced) return;
  //   
  //     /* Header + sidebar + per-group label + items — each with its own trigger
  //        so the cascade follows scroll position rather than batching everything. */
  //     const items = [
  //       section.querySelector('.section-label'),
  //       section.querySelector('.success__heading'),
  //       section.querySelector('.success__stats'),
  //       ...section.querySelectorAll('.success-group__label, .success-item'),
  //     ].filter(Boolean);
  //     if (!items.length) return;
  //   
  //     gsap.set(items, { autoAlpha: 0, x: 60 });
  //     const MIN_GAP = 0.1;
  //     let nextSlot = -Infinity;
  //   
  //     items.forEach((item) => {
  //       ScrollTrigger.create({
  //         trigger: item,
  //         start: 'top 90%',
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
    <section className="dobra" data-dobra="prova-mosaico" ref={raiz}>
      <section className="success">
            <div className="container container--padded">
              <div className="success__card">
                <header className="success__header">
                  <p className="section-label">{s.texto}</p>
                  <h2 className="success__heading">
                    Our success stories<br />real results, real Impact
                  </h2>
                </header>
      
                <div className="success__content">
                  <aside className="success__stats" aria-label="Project totals">
                    <ul>
                      <li className="success__stat success__stat--active" data-stat-target="success-technology">
                        <a className="success__stat-link" href="#success-technology">{s.acao}</a>
                      </li>
                      <li className="success__stat" data-stat-target="success-business">
                        <a className="success__stat-link" href="#success-business">{s.acao2}</a>
                      </li>
                    </ul>
                  </aside>
      
                  <div className="success__groups">
                    <div className="success-group" id="success-technology">
                      <p className="section-label success-group__label">{s.texto2}</p>
                      <ul className="success-group__list">
                        <li className="success-item">
                          <div className="success-item__icon" aria-hidden="true">
                            <img src={s.imagem} alt="" width="36" height="36" loading="lazy" />
                          </div>
                          <div className="success-item__text">
                            <h3 className="success-item__title">{s.subtitulo}</h3>
                            <p className="success-item__desc">{s.texto3}</p>
                          </div>
                        </li>
                        <li className="success-item">
                          <div className="success-item__icon" aria-hidden="true">
                            <img src={s.imagem2} alt="" width="36" height="36" loading="lazy" />
                          </div>
                          <div className="success-item__text">
                            <h3 className="success-item__title">{s.subtitulo2}</h3>
                            <p className="success-item__desc">{s.texto4}</p>
                          </div>
                        </li>
                        <li className="success-item">
                          <div className="success-item__icon" aria-hidden="true">
                            <img src={s.imagem3} alt="" width="36" height="36" loading="lazy" />
                          </div>
                          <div className="success-item__text">
                            <h3 className="success-item__title">{s.subtitulo3}</h3>
                            <p className="success-item__desc">{s.texto5}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
      
                    <div className="success-group" id="success-business">
                      <p className="section-label success-group__label">{s.texto6}</p>
                      <ul className="success-group__list">
                        <li className="success-item">
                          <div className="success-item__icon" aria-hidden="true">
                            <img src={s.imagem4} alt="" width="36" height="36" loading="lazy" />
                          </div>
                          <div className="success-item__text">
                            <h3 className="success-item__title">{s.subtitulo4}</h3>
                            <p className="success-item__desc">{s.texto7}</p>
                          </div>
                        </li>
                        <li className="success-item">
                          <div className="success-item__icon" aria-hidden="true">
                            <img src={s.imagem5} alt="" width="36" height="36" loading="lazy" />
                          </div>
                          <div className="success-item__text">
                            <h3 className="success-item__title">{s.subtitulo5}</h3>
                            <p className="success-item__desc">{s.texto8}</p>
                          </div>
                        </li>
                        <li className="success-item">
                          <div className="success-item__icon" aria-hidden="true">
                            <img src={s.imagem6} alt="" width="36" height="36" loading="lazy" />
                          </div>
                          <div className="success-item__text">
                            <h3 className="success-item__title">{s.subtitulo6}</h3>
                            <p className="success-item__desc">{s.texto9}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}