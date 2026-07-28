"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-167
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
  //   // Firmo — Team Grid: sección estática. No requiere JS propio.
  //   // El eyebrow/heading (.scroll-into-view) y las tarjetas (.reveal-up) se animan
  //   // desde la hoja compartida /firmo/scripts/scroll-reveal.js (self-init en DOM ready).
  //   // El arrow de cada tarjeta (.button-svg) rota −45° en hover por CSS (components.css).
  //   // Stub intencional, sin `export` (Rule 1).
  //   
  //   /* Firmo — shared reveal engine. Port of the template's reveal.ts to a plain global
  //      (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger from CDN.
  //      Generic reveals only (parallax images, scroll-into-view slide-in, reveal-up, fade,
  //      logos scrub); page heroes carry their own on-load script. Timings/easings verbatim
  //      from the source (outQuart = power3.out). Honors prefers-reduced-motion. */
  //   (function () {
  //     if (typeof gsap === 'undefined') return; // fail-safe: no JS → content stays visible
  //     if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //     if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  //   
  //     var EASE = 'power3.out';
  //     var SLIDE = 0.7;
  //     var PARALLAX = 1.7;
  //     var SLIDE_X = 100;
  //     var SLIDE_Y = 100;
  //   
  //     var PARALLAX_PARENTS = [
  //       '.business_image',
  //       '.support_image',
  //       '.overview_image',
  //       '.contact_image',
  //       '.about-three_image',
  //       '.services-hero_image',
  //       '.experience_image',
  //       '.blog_image',
  //       '.blogs-hero_image',
  //       '.location_image',
  //       '.blogs-three_card-image',
  //       '.team_card-image',
  //     ].join(',');
  //   
  //     function initReveal() {
  //       if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //         document.documentElement.classList.remove('anim');
  //         return;
  //       }
  //   
  //       // 1) Parallax images — wrapper y -110%→0; img y 110%→0, scale 1.5→1, blur 10→0; 1.7s.
  //       document.querySelectorAll(PARALLAX_PARENTS).forEach(function (parent) {
  //         var wrap = parent.querySelector('.img-wrapper');
  //         var img = wrap && wrap.querySelector('.img');
  //         if (!wrap || !img) return;
  //         gsap.set(wrap, { yPercent: -110, opacity: 1 });
  //         gsap.set(img, { yPercent: 110, scale: 1.5, filter: 'blur(10px)' });
  //         gsap
  //           .timeline({
  //             scrollTrigger: { trigger: parent, start: 'top 85%', once: true },
  //             onComplete: function () { gsap.set([wrap, img], { clearProps: 'transform,filter' }); },
  //           })
  //           .to(wrap, { yPercent: 0, duration: PARALLAX, ease: EASE }, 0)
  //           .to(img, { yPercent: 0, scale: 1, filter: 'blur(0px)', duration: PARALLAX, ease: EASE }, 0);
  //       });
  //   
  //       // 2) [reveal-x] .scroll-into-view → horizontal slide-in: x +100 → 0 + opacity, 0.7s.
  //       gsap.utils.toArray('.scroll-into-view').forEach(function (el) {
  //         if (el.closest('.section_hero')) return;
  //         if (el.closest('.section_logos')) return;
  //         gsap.set(el, { x: SLIDE_X, opacity: 0 });
  //         gsap.to(el, {
  //           x: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2c) [reveal-y] .reveal-up cards enter from below: y +100 → 0 + opacity.
  //       gsap.utils.toArray('.reveal-up').forEach(function (el) {
  //         if (el.closest('.footer')) return;
  //         gsap.set(el, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(el, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2d) Footer entrance — .reveal-up blocks slide up, staggered, off the .footer container.
  //       var footer = document.querySelector('.footer');
  //       if (footer) {
  //         var items = footer.querySelectorAll('.reveal-up');
  //         gsap.set(items, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(items, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.08,
  //           scrollTrigger: { trigger: footer, start: 'top 80%', once: true },
  //         });
  //       }
  //   
  //       // 2e) [reveal-fade] .reveal-fade — opacity 0 → 1, no transform.
  //       gsap.utils.toArray('.reveal-fade').forEach(function (el) {
  //         gsap.set(el, { opacity: 0 });
  //         gsap.to(el, {
  //           opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 3) Logos strip — one-shot slide-in ON VIEW (adapted from the source scroll-scrub
  //       // for the standalone catalog: a scroll-scrub and a clean thumbnail are mutually
  //       // exclusive — the scrub's settled state IS scroll-0, so to SEE motion the strip must
  //       // start off-position, which the thumbnail would then capture. Firing the same
  //       // 30vw→0 slide ONCE when the strip enters view gives both: motion in the opened
  //       // live preview (injectRevealFix runs it on-view in prod) + settled/clean thumbnail.
  //       // Lines fade in. ≤991: fade only.
  //       var logos = document.querySelector('.section_logos');
  //       if (logos) {
  //         var lines = logos.querySelectorAll('.horizontal-line');
  //         var mm = gsap.matchMedia();
  //         mm.add('(min-width: 992px)', function () {
  //           gsap.set(logos, { x: function () { return 0.3 * window.innerWidth; } });
  //           gsap.to(logos, {
  //             x: 0, duration: PARALLAX, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 90%', once: true },
  //           });
  //           lines.forEach(function (line) {
  //             gsap.set(line, { opacity: 0 });
  //             gsap.to(line, {
  //               opacity: 1, duration: SLIDE, ease: EASE,
  //               scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //             });
  //           });
  //         });
  //         mm.add('(max-width: 991px)', function () {
  //           gsap.set(logos, { x: 0 });
  //           gsap.set(lines, { opacity: 1 });
  //           gsap.fromTo(logos, { opacity: 0 }, {
  //             opacity: 1, duration: SLIDE, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //           });
  //         });
  //       }
  //   
  //       if (typeof ScrollTrigger !== 'undefined') {
  //         ScrollTrigger.refresh();
  //         window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  //       }
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  //     else initReveal();
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-167" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_team">
              <div className="padding-global padding-section-small">
                <div className="content-wrapper">
                  <div className="header">
                    <div className="label">
                      <div className="text-style-allcaps scroll-into-view">Our team</div>
                    </div>
                    <div className="team_title">
                      <h2 className="scroll-into-view">{s.titulo}</h2>
                    </div>
                  </div>
      
                  <div className="w-dyn-list">
                    <div role="list" className="team_grid w-dyn-items">
                      <div role="listitem" className="team_item w-dyn-item">
                        <a href="/lawyers/michael-thompson-johnson" className="team_card reveal-up w-inline-block">
                          <div className="team_card-image">
                            <div className="img-wrapper">
                              <img src={s.imagem} loading="lazy" alt="Michael Thompson Johnson" className="img is-team-card" />
                            </div>
                          </div>
                          <div className="team-three_card-content">
                            <div className="team_card-title">
                              <h3 className="text-xl text-font-lora">{s.subtitulo}</h3>
                              <div className="text-color-secondary">Senior Litigation Attorney</div>
                            </div>
                            <div className="team_card-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-svg"><path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item w-dyn-item">
                        <a href="/lawyers/adison-dorwart" className="team_card reveal-up w-inline-block">
                          <div className="team_card-image">
                            <div className="img-wrapper">
                              <img src={s.imagem2} loading="lazy" alt="Adison Dorwart" className="img is-team-card" />
                            </div>
                          </div>
                          <div className="team-three_card-content">
                            <div className="team_card-title">
                              <h3 className="text-xl text-font-lora">{s.subtitulo2}</h3>
                              <div className="text-color-secondary">Senior Litigation Attorney</div>
                            </div>
                            <div className="team_card-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-svg"><path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item w-dyn-item">
                        <a href="/lawyers/cristofer-gouse" className="team_card reveal-up w-inline-block">
                          <div className="team_card-image">
                            <div className="img-wrapper">
                              <img src={s.imagem3} loading="lazy" alt="Cristofer Gouse" className="img is-team-card" />
                            </div>
                          </div>
                          <div className="team-three_card-content">
                            <div className="team_card-title">
                              <h3 className="text-xl text-font-lora">{s.subtitulo3}</h3>
                              <div className="text-color-secondary">Senior Litigation Attorney</div>
                            </div>
                            <div className="team_card-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-svg"><path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item w-dyn-item">
                        <a href="/lawyers/haylie-curtis" className="team_card reveal-up w-inline-block">
                          <div className="team_card-image">
                            <div className="img-wrapper">
                              <img src={s.imagem4} loading="lazy" alt="Haylie Curtis" className="img is-team-card" />
                            </div>
                          </div>
                          <div className="team-three_card-content">
                            <div className="team_card-title">
                              <h3 className="text-xl text-font-lora">{s.subtitulo4}</h3>
                              <div className="text-color-secondary">Senior Litigation Attorney</div>
                            </div>
                            <div className="team_card-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-svg"><path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item w-dyn-item">
                        <a href="/lawyers/alfonso-gouse" className="team_card reveal-up w-inline-block">
                          <div className="team_card-image">
                            <div className="img-wrapper">
                              <img src={s.imagem5} loading="lazy" alt="Alfonso Gouse" className="img is-team-card" />
                            </div>
                          </div>
                          <div className="team-three_card-content">
                            <div className="team_card-title">
                              <h3 className="text-xl text-font-lora">{s.subtitulo5}</h3>
                              <div className="text-color-secondary">Senior Litigation Attorney</div>
                            </div>
                            <div className="team_card-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-svg"><path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item w-dyn-item">
                        <a href="/lawyers/james-stanton" className="team_card reveal-up w-inline-block">
                          <div className="team_card-image">
                            <div className="img-wrapper">
                              <img src={s.imagem6} loading="lazy" alt="James Stanton" className="img is-team-card" />
                            </div>
                          </div>
                          <div className="team-three_card-content">
                            <div className="team_card-title">
                              <h3 className="text-xl text-font-lora">{s.subtitulo6}</h3>
                              <div className="text-color-secondary">Senior Litigation Attorney</div>
                            </div>
                            <div className="team_card-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-svg"><path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}