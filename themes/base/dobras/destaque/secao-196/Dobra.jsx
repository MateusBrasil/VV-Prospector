"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-196
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
  //   // Firmo — Testimonials Two: grid estático de 2 columnas. No requiere JS propio.
  //   // Los elementos .scroll-into-view (label + cada .testimonials-two_card) se animan
  //   // con slide-in horizontal desde la hoja compartida /firmo/scripts/scroll-reveal.js
  //   // (self-init en DOM ready). Stub intencional, sin `export` (Rule 1).
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
    <section className="dobra" data-dobra="destaque-secao-196" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section data-wf--testimonials-v2--variant="background-dark" className="section_testimonials-two w-variant-f0b4ec4a-2cea-4606-44e6-be2f5058b611">
              <div className="padding-global padding-section-large">
                <div className="testimonials-two_content">
                  <div className="label">
                    <div className="text-style-allcaps scroll-into-view">Testimonials</div>
                  </div>
                  <div className="testimonials-two_grid">
                    <div className="testimonials-two_card scroll-into-view">
                      <div className="testimonials-two_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base"><path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.322 3.16992 10.841 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41692 6.679" fill="black"></path></svg>
                        <div className="text-2xl">Firmo Always has been an invaluable partner in navigating the complexities of business law.</div>
                      </div>
                      <div className="testimonials-two_card-info-wrapper">
                        <div className="testimonials_card-user"><img loading="lazy" src={s.imagem} alt="Sarah Mitchell" className="img" /></div>
                        <div className="testimonials-two_card-info">
                          <div className="text-base">Sarah Mitchell</div>
                          <div className="text-sm text-color-secondary">Small Business Owner</div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials-two_card scroll-into-view">
                      <div className="testimonials-two_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base"><path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.322 3.16992 10.841 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41692 6.679" fill="black"></path></svg>
                        <div className="text-2xl">Thanks to Firmo’s support, we were able to secure our funding rounds with complete assurance and full regulatory compliance.</div>
                      </div>
                      <div className="testimonials-two_card-info-wrapper">
                        <div className="testimonials_card-user"><img loading="lazy" src={s.imagem2} alt="Carlos Méndez" className="img" /></div>
                        <div className="testimonials-two_card-info">
                          <div className="text-base">Carlos Méndez</div>
                          <div className="text-sm text-color-secondary">Chief Financial Officer</div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials-two_card scroll-into-view">
                      <div className="testimonials-two_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base"><path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.322 3.16992 10.841 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41692 6.679" fill="black"></path></svg>
                        <div className="text-2xl">Firmo has provided us with exceptional legal counsel that has strengthened our confidence at every stage of our business growth.</div>
                      </div>
                      <div className="testimonials-two_card-info-wrapper">
                        <div className="testimonials_card-user"><img loading="lazy" src={s.imagem3} alt="Laura Rodríguez" className="img" /></div>
                        <div className="testimonials-two_card-info">
                          <div className="text-base">Laura Rodríguez</div>
                          <div className="text-sm text-color-secondary">Startup Founder</div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials-two_card scroll-into-view">
                      <div className="testimonials-two_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base"><path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.322 3.16992 10.841 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41692 6.679" fill="black"></path></svg>
                        <div className="text-2xl">The Firmo team translated complex terms into practical solutions, allowing us to focus our energy on serving our customers better.</div>
                      </div>
                      <div className="testimonials-two_card-info-wrapper">
                        <div className="testimonials_card-user"><img loading="lazy" src={s.imagem4} alt="Elena Torres" className="img" /></div>
                        <div className="testimonials-two_card-info">
                          <div className="text-base">Elena Torres</div>
                          <div className="text-sm text-color-secondary">Retail Store Owner</div>
                        </div>
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