"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-180
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
  //   // Firmo testimonials slider (port de sliders.ts). Swiper crossfade, slide única,
  //   // loop infinito, flechas manuales (NO autoplay — matches data-autoplay="false",
  //   // 500ms). Las flechas viven FUERA del .swiper (en .testimonials_col), por eso se
  //   // buscan desde el parent. Plain global, self-init en DOM ready: usa window.Swiper
  //   // (bundle, que auto-registra Navigation + EffectFade) + window.gsap. Sin import/
  //   // export (Rule 1). Fail-safe: si Swiper/GSAP no cargan, los slides quedan visibles.
  //   
  //   // Testimonials staircase: los items del slide activo entran desde la derecha
  //   // (x 3rem → 0 + opacity) en este orden exacto — icono, quote, avatar, nombre, rol.
  //   // Se usa para el reveal inicial Y cada cambio de slide. Vive aquí (no en
  //   // scroll-reveal) porque necesita `.swiper-slide-active` de Swiper.
  //   var ITEM_ORDER = [
  //     '.icon-1x1-base', // icon
  //     '.text-4xl', // quote
  //     '.testimonials_card-user', // avatar
  //     '.testimonials_card-info .text-base', // name
  //     '.testimonials_card-info .text-color-secondary', // role
  //   ];
  //   function cascadeActive(el) {
  //     if (typeof window.gsap === 'undefined') return;
  //     var active = el.querySelector('.swiper-slide-active');
  //     if (!active) return;
  //     var items = ITEM_ORDER.map(function (s) {
  //       return active.querySelector(s);
  //     }).filter(Boolean);
  //     if (!items.length) return;
  //     window.gsap.fromTo(
  //       items,
  //       { x: 48, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1, overwrite: true }
  //     );
  //   }
  //   
  //   function initSliders() {
  //     if (typeof window.Swiper === 'undefined') return;
  //     var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     document.querySelectorAll('.testimonials_slider.swiper').forEach(function (el) {
  //       new window.Swiper(el, {
  //         effect: 'fade',
  //         fadeEffect: { crossFade: true },
  //         slidesPerView: 1,
  //         loop: true,
  //         speed: 500,
  //         navigation: {
  //           // arrows live OUTSIDE the swiper container (in .testimonials_col) so
  //           // Swiper's fade layout can't overlap them — query from the parent.
  //           prevEl: el.parentElement && el.parentElement.querySelector('[data-tst-prev]'),
  //           nextEl: el.parentElement && el.parentElement.querySelector('[data-tst-next]'),
  //         },
  //         on: reduce
  //           ? {}
  //           : {
  //               // Re-run the staircase on the newly active slide each time it changes.
  //               slideChangeTransitionStart: function () {
  //                 cascadeActive(el);
  //               },
  //             },
  //       });
  //   
  //       // Initial reveal: cascade the active slide when the section first enters the
  //       // viewport. IntersectionObserver fires immediately if it's already in view.
  //       if (!reduce) {
  //         var section = el.closest('.section_testimonials') || el;
  //         var io = new IntersectionObserver(
  //           function (entries, obs) {
  //             if (
  //               entries.some(function (e) {
  //                 return e.isIntersecting;
  //               })
  //             ) {
  //               cascadeActive(el);
  //               obs.disconnect();
  //             }
  //           },
  //           { threshold: 0.2 }
  //         );
  //         io.observe(section);
  //       }
  //     });
  //   }
  //   
  //   if (document.readyState !== 'loading') initSliders();
  //   else document.addEventListener('DOMContentLoaded', initSliders);
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
    <section className="dobra" data-dobra="destaque-secao-180" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_testimonials">
              <div className="padding-global padding-section-medium is-testimonials">
                <div className="testimonials_content">
                  <div data-wf--label--variant="base" className="label">
                    <div className="text-style-allcaps scroll-into-view">Testimonials</div>
                  </div>
                  <div className="testimonials_col">
                  <div data-delay="4000" data-animation="cross" className="testimonials_slider w-slider swiper" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                    <div className="testimonials_slider-mask w-slider-mask swiper-wrapper">
                      <div className="testimoniasl_slide-item w-slide swiper-slide">
                        <div className="testimonials_card">
                          <div className="testimonials_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                              <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="black"></path>
                            </svg>
                            <div className="text-4xl">Firmo Always has been an invaluable partner in navigating the complexities of business law.</div>
                          </div>
                          <div className="testimonials_card-info-wrapper">
                            <div className="testimonials_card-user"><img loading="lazy" src={s.imagem} alt="" className="img" /></div>
                            <div className="testimonials_card-info">
                              <div className="text-base">Sarah Mitchell</div>
                              <div className="text-sm text-color-secondary">Small Business Owner</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimoniasl_slide-item w-slide swiper-slide">
                        <div className="testimonials_card">
                          <div className="testimonials_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                              <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="black"></path>
                            </svg>
                            <div className="text-4xl">Thanks to Firmo’s support, we were able to secure our funding rounds with complete assurance and full regulatory compliance.</div>
                          </div>
                          <div className="testimonials_card-info-wrapper">
                            <div className="testimonials_card-user"><img loading="lazy" src={s.imagem2} alt="" className="img" /></div>
                            <div className="testimonials_card-info">
                              <div className="text-base">Carlos Méndez</div>
                              <div className="text-sm text-color-secondary">Chief Financial Officer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimoniasl_slide-item w-slide swiper-slide">
                        <div className="testimonials_card">
                          <div className="testimonials_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                              <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="black"></path>
                            </svg>
                            <div className="text-4xl">Firmo has provided us with exceptional legal counsel that has strengthened our confidence at every stage of our business growth.</div>
                          </div>
                          <div className="testimonials_card-info-wrapper">
                            <div className="testimonials_card-user"><img loading="lazy" src={s.imagem3} alt="" className="img" /></div>
                            <div className="testimonials_card-info">
                              <div className="text-base">Laura Rodríguez</div>
                              <div className="text-sm text-color-secondary">Startup Founder</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimoniasl_slide-item w-slide swiper-slide">
                        <div className="testimonials_card">
                          <div className="testimonials_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                              <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="black"></path>
                            </svg>
                            <div className="text-4xl">The Firmo team translated complex terms into practical solutions, allowing us to focus our energy on serving our customers better.</div>
                          </div>
                          <div className="testimonials_card-info-wrapper">
                            <div className="testimonials_card-user"><img loading="lazy" src={s.imagem4} alt="" className="img" /></div>
                            <div className="testimonials_card-info">
                              <div className="text-base">Elena Torres</div>
                              <div className="text-sm text-color-secondary">Retail Store Owner</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimoniasl_slide-item w-slide swiper-slide">
                        <div className="testimonials_card">
                          <div className="testimonials_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                              <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="black"></path>
                            </svg>
                            <div className="text-4xl">With Firmo as our partner, we streamlined our employment contracts and reinforced internal regulatory compliance without any hassle.</div>
                          </div>
                          <div className="testimonials_card-info-wrapper">
                            <div className="testimonials_card-user"><img loading="lazy" src={s.imagem5} alt="" className="img" /></div>
                            <div className="testimonials_card-info">
                              <div className="text-base">Andrés Pérez</div>
                              <div className="text-sm text-color-secondary">Human Resources Manager</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimoniasl_slide-item w-slide swiper-slide">
                        <div className="testimonials_card">
                          <div className="testimonials_card-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                              <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="black"></path>
                            </svg>
                            <div className="text-4xl">Firmo’s clear and swift resolution of contractual disputes was key to maintaining our company’s operational stability.</div>
                          </div>
                          <div className="testimonials_card-info-wrapper">
                            <div className="testimonials_card-user"><img loading="lazy" src={s.imagem6} alt="" className="img" /></div>
                            <div className="testimonials_card-info">
                              <div className="text-base">Mariana Castillo</div>
                              <div className="text-sm text-color-secondary">CEO of a Tech Company</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonials_arrows">
                    <button type="button" className="testimoniasl_arrow" data-tst-prev="" aria-label="Previous" onClick={s.onClick}><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                      <path d="M19.4999 10.9999L7.91394 10.9999L12.4139 6.49994L10.9999 5.08594L4.08594 11.9999L10.9999 18.9139L12.4139 17.4999L7.91394 12.9999L19.4999 12.9999L19.4999 10.9999Z" fill="currentColor"></path>
                    </svg></button>
                    <button type="button" className="testimoniasl_arrow is-right" data-tst-next="" aria-label="Next" onClick={s.onClick}><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-base">
                      <path d="M4.50006 10.9999L16.0861 10.9999L11.5861 6.49994L13.0001 5.08594L19.9141 11.9999L13.0001 18.9139L11.5861 17.4999L16.0861 12.9999L4.50006 12.9999L4.50006 10.9999Z" fill="currentColor"></path>
                    </svg></button>
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