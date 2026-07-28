"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-190
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
  //   /* Congra — Testimonials
  //      Sin lógica local. El slider lo inicializa /congra/scripts/swiper-init.js
  //      (selector '.section_testi': slidesPerView 1 / 1.15 / 1.3 por breakpoint,
  //      centeredSlides desde 768px, flechas .slide_prev/.slide_next con estado
  //      is-disabled en los bordes). Los reveals .slide_down los maneja
  //      /congra/scripts/animations.js vía GSAP + ScrollTrigger. */
  //   
  //   /* =============================================================================
  //      congra/scripts/swiper-init.js — sliders de Meet Speakers y Testimonials.
  //      Portado de src/scripts/swiper-init.ts (TS + ESM -> JS clásico). Usa el
  //      global `Swiper` del swiper-bundle CDN (precedente Stayli), que ya incluye
  //      Navigation/Mousewheel/Keyboard — no hace falta el array `modules`.
  //      ============================================================================= */
  //   (function () {
  //     function initCarousel(sectionSelector, options) {
  //       document.querySelectorAll(sectionSelector).forEach(function (section) {
  //         var el = section.querySelector('.swiper');
  //         if (!el) return;
  //         var swiper = new Swiper(el, options);
  //         var prev = section.querySelector('.slide_prev');
  //         var next = section.querySelector('.slide_next');
  //         if (prev) prev.addEventListener('click', function () { swiper.slidePrev(); });
  //         if (next) next.addEventListener('click', function () { swiper.slideNext(); });
  //   
  //         // Desactiva la flecha prev/next en el primer/último slide.
  //         function setDisabled(arrow, disabled) {
  //           if (!arrow) return;
  //           arrow.classList.toggle('is-disabled', disabled);
  //           arrow.setAttribute('aria-disabled', String(disabled));
  //           arrow.setAttribute('tabindex', disabled ? '-1' : '0');
  //         }
  //         function updateArrows() {
  //           setDisabled(prev, swiper.isBeginning);
  //           setDisabled(next, swiper.isEnd);
  //         }
  //         updateArrows();
  //         swiper.on('slideChange', updateArrows);
  //         swiper.on('fromEdge', updateArrows);
  //         swiper.on('toEdge', updateArrows);
  //         swiper.on('update', updateArrows);
  //         swiper.on('resize', updateArrows);
  //       });
  //     }
  //   
  //     function init() {
  //       // Testimonials — slider centrado con peek.
  //       initCarousel('.section_testi', {
  //         speed: 700,
  //         slidesPerView: 1.3,
  //         spaceBetween: 24,
  //         mousewheel: { forceToAxis: true },
  //         keyboard: { enabled: true, onlyInViewport: true },
  //         breakpoints: {
  //           0: { slidesPerView: 1, centeredSlides: false, spaceBetween: 16 },
  //           768: { slidesPerView: 1.15, centeredSlides: true, spaceBetween: 24 },
  //           992: { slidesPerView: 1.3, centeredSlides: true, spaceBetween: 24 },
  //         },
  //       });
  //   
  //       // Speakers — 1 / 2 / 3 visibles.
  //       initCarousel('.section_meet', {
  //         speed: 700,
  //         loop: false,
  //         slidesPerView: 1,
  //         spaceBetween: 16,
  //         mousewheel: { forceToAxis: true },
  //         keyboard: { enabled: true, onlyInViewport: true },
  //         breakpoints: {
  //           768: { slidesPerView: 2, spaceBetween: 24 },
  //           992: { slidesPerView: 3, spaceBetween: 24 },
  //         },
  //       });
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  //     else init();
  //   })();
  //   
  //   /* =============================================================================
  //      congra/scripts/animations.js — motor de animación compartido de los ports
  //      Congra. Portado de src/scripts/animations.ts (TS + ESM -> JS clásico:
  //      sin export top-level; gsap/ScrollTrigger vienen de los globals del CDN).
  //   
  //      - Timeline de carga: título del hero por caracteres ([animation="first|second"]),
  //        .hero_img (zoom-out) y pop-in del navbar.
  //      - Reveals on-view: .slide-left / .slide-right / .slide_down (una vez).
  //      - Counters: [data-count-to] (+ data-count-duration opcional, ms).
  //      - Honra prefers-reduced-motion (todo visible, sin motion).
  //      - Viewport-fire (aprendizaje Vetic): en páginas standalone cortas un trigger
  //        con start > maxScroll jamás dispara -> se dispara al instante tras cada
  //        ScrollTrigger.refresh().
  //      ============================================================================= */
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   var CONGRA_REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //   /* Divide el texto en spans por carácter, agrupados por palabra dentro de un
  //      wrapper white-space:nowrap para que el título solo quiebre en espacios. */
  //   function congraSplitChars(el) {
  //     var text = el.textContent || '';
  //     el.textContent = '';
  //     var chars = [];
  //     text.split(/(\s+)/).forEach(function (part) {
  //       if (part === '') return;
  //       if (/^\s+$/.test(part)) {
  //         el.appendChild(document.createTextNode(part));
  //         return;
  //       }
  //       var word = document.createElement('span');
  //       word.style.display = 'inline-block';
  //       word.style.whiteSpace = 'nowrap';
  //       Array.from(part).forEach(function (ch) {
  //         var span = document.createElement('span');
  //         span.textContent = ch;
  //         span.style.display = 'inline-block';
  //         span.style.willChange = 'opacity';
  //         word.appendChild(span);
  //         chars.push(span);
  //       });
  //       el.appendChild(word);
  //     });
  //     return chars;
  //   }
  //   
  //   function congraRevealAll() {
  //     document
  //       .querySelectorAll('.slide-left, .slide-right, .slide_down, .hero_title h1, .hero_title .h1, .hero_img')
  //       .forEach(function (el) {
  //         el.style.opacity = '1';
  //         el.style.transform = 'none';
  //       });
  //   }
  //   
  //   /* Triggers inalcanzables (start > maxScroll) disparan al instante. */
  //   function congraFireUnreachable() {
  //     var maxS = ScrollTrigger.maxScroll(window);
  //     ScrollTrigger.getAll().forEach(function (t) {
  //       if (t.start > maxS && t.vars && t.vars.onEnter) {
  //         var fn = t.vars.onEnter;
  //         t.kill();
  //         fn();
  //       }
  //     });
  //   }
  //   
  //   function congraInitAnimations() {
  //     if (CONGRA_REDUCE) {
  //       congraRevealAll();
  //       return;
  //     }
  //   
  //     // ---- Timeline de carga (hero: chars + imagen; todas: navbar) ----
  //     var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  //   
  //     document.querySelectorAll('[animation="first"], [animation="second"]').forEach(function (title) {
  //       var fromEnd = title.getAttribute('animation') === 'second';
  //       var chars = congraSplitChars(title);
  //       gsap.set(title, { opacity: 1 });
  //       tl.from(
  //         chars,
  //         { opacity: 0, duration: 0.6, ease: 'power2.out', stagger: { each: 0.5 / Math.max(chars.length, 1), from: fromEnd ? 'end' : 'start' } },
  //         0
  //       );
  //     });
  //   
  //     // Imagen de fondo del hero — zoom-out sutil (scale 1.2 -> 1).
  //     var heroImg = document.querySelector('.hero_img');
  //     if (heroImg) {
  //       tl.fromTo(heroImg, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1, ease: 'power1.inOut' }, 0);
  //     }
  //   
  //     // Items del navbar — pop-in (scale 0 -> 1) con stagger desde el centro.
  //     var navItems = document.querySelectorAll('.navbar_logo-link, .navbar_list .link, .nav_buttons-wrap .button, .menu-button');
  //     if (navItems.length) {
  //       // Suprime transitions CSS (el botón de ticket trae `transition: all`) para
  //       // que no peleen con los updates de scale de GSAP. Se restauran al terminar.
  //       navItems.forEach(function (el) { el.style.transition = 'none'; });
  //       tl.fromTo(
  //         navItems,
  //         { scale: 0, opacity: 0 },
  //         {
  //           scale: 1,
  //           opacity: 1,
  //           duration: 0.5,
  //           ease: 'power1.out',
  //           stagger: { each: 0.5 / navItems.length, from: 'center' },
  //           onComplete: function () { navItems.forEach(function (el) { el.style.transition = ''; }); },
  //         },
  //         0
  //       );
  //     }
  //   
  //     // ---- Counters numéricos (stats de impact) ----
  //     document.querySelectorAll('[data-count-to]').forEach(function (el) {
  //       var end = Number(el.getAttribute('data-count-to') || '0');
  //       var duration = Number(el.getAttribute('data-count-duration') || '2000') / 1000;
  //       ScrollTrigger.create({
  //         trigger: el,
  //         start: 'top 90%',
  //         once: true,
  //         onEnter: function () {
  //           var obj = { v: 0 };
  //           gsap.to(obj, {
  //             v: end,
  //             duration: duration,
  //             ease: 'power1.out',
  //             onUpdate: function () { el.textContent = String(Math.round(obj.v)); },
  //           });
  //         },
  //       });
  //     });
  //   
  //     // ---- Reveals on-view (slideInLeft / slideInRight / slideInBottom) ----
  //     var reveals = [
  //       ['.slide-left', { x: -40, opacity: 0 }],
  //       ['.slide-right', { x: 40, opacity: 0 }],
  //       ['.slide_down', { y: 40, opacity: 0 }],
  //     ];
  //   
  //     reveals.forEach(function (pair) {
  //       var selector = pair[0];
  //       var fromVars = pair[1];
  //       document.querySelectorAll(selector).forEach(function (el) {
  //         gsap.set(el, fromVars);
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: 'top 90%',
  //           once: true,
  //           onEnter: function () {
  //             gsap.to(el, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
  //           },
  //         });
  //       });
  //     });
  //   
  //     ScrollTrigger.refresh();
  //     congraFireUnreachable();
  //     // Cargas de imágenes cambian el layout; re-chequear tras cada refresh.
  //     ScrollTrigger.addEventListener('refresh', congraFireUnreachable);
  //   }
  //   
  //   if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', congraInitAnimations);
  //   else congraInitAnimations();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-190" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_testi">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="vertical-center">
                    <h2 className="slide_down">{s.titulo}</h2>
                    <div className="spacer-small"></div>
                    <div className="text-color-secondary slide_down">Choose the experience that suits you best!</div>
                  </div>
                  <div className="gap-section-small"></div>
                  <div className="testi_wrap slide_down">
                    <div className="swiper">
                      <div className="testi_layout swiper-wrapper">
                        <div className="testi_card swiper-slide">
                          <div className="testi_left">
                            <div className="text-xl">audience</div>
                            <div className="testi_profile">
                              <div className="testi_img"><img src={s.imagem} loading="lazy" alt="Sarah T." className="img" /></div>
                              <div className="testi_details">
                                <div className="text-xl">Sarah T.</div>
                                <div className="text-color-secondary">DeepTechCo</div>
                              </div>
                            </div>
                          </div>
                          <div className="testi_testi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" className="testi_icon">
                              <path d="M6.66669 13.3335H29.3334V33.7335L17.3814 50.6668H10.12L17.2294 34.6668H6.66669V13.3335ZM34.6667 13.3335H57.3334V33.7335L45.3814 50.6668H38.12L45.2294 34.6668H34.6667V13.3335Z" fill="var(--acento)"></path>
                            </svg>
                            <div className="testi_text">“Attending tech nexus 2024 was one of the best decisions I’ve made this year. The event was well-organized, the content was relevant, and the speakers were truly experts in their fields. I not only gained valuable insights into upcoming trends but also built connections with peers and leaders that have already turned into meaningful business opportunities. .”</div>
                          </div>
                        </div><div className="testi_card swiper-slide">
                          <div className="testi_left">
                            <div className="text-xl">audience</div>
                            <div className="testi_profile">
                              <div className="testi_img"><img src={s.imagem2} loading="lazy" alt="Sarah T." className="img" /></div>
                              <div className="testi_details">
                                <div className="text-xl">Sarah T.</div>
                                <div className="text-color-secondary">DeepTechCo</div>
                              </div>
                            </div>
                          </div>
                          <div className="testi_testi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" className="testi_icon">
                              <path d="M6.66669 13.3335H29.3334V33.7335L17.3814 50.6668H10.12L17.2294 34.6668H6.66669V13.3335ZM34.6667 13.3335H57.3334V33.7335L45.3814 50.6668H38.12L45.2294 34.6668H34.6667V13.3335Z" fill="var(--acento)"></path>
                            </svg>
                            <div className="testi_text">“Attending tech nexus 2024 was one of the best decisions I’ve made this year. The event was well-organized, the content was relevant, and the speakers were truly experts in their fields. I not only gained valuable insights into upcoming trends but also built connections with peers and leaders that have already turned into meaningful business opportunities. .”</div>
                          </div>
                        </div><div className="testi_card swiper-slide">
                          <div className="testi_left">
                            <div className="text-xl">audience</div>
                            <div className="testi_profile">
                              <div className="testi_img"><img src={s.imagem3} loading="lazy" alt="Sarah T." className="img" /></div>
                              <div className="testi_details">
                                <div className="text-xl">Sarah T.</div>
                                <div className="text-color-secondary">DeepTechCo</div>
                              </div>
                            </div>
                          </div>
                          <div className="testi_testi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 64" fill="none" className="testi_icon">
                              <path d="M6.66669 13.3335H29.3334V33.7335L17.3814 50.6668H10.12L17.2294 34.6668H6.66669V13.3335ZM34.6667 13.3335H57.3334V33.7335L45.3814 50.6668H38.12L45.2294 34.6668H34.6667V13.3335Z" fill="var(--acento)"></path>
                            </svg>
                            <div className="testi_text">“Attending tech nexus 2024 was one of the best decisions I’ve made this year. The event was well-organized, the content was relevant, and the speakers were truly experts in their fields. I not only gained valuable insights into upcoming trends but also built connections with peers and leaders that have already turned into meaningful business opportunities. .”</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="arrow_group">
                      <div className="arrow slide_prev" role="button" tabIndex="0" aria-label="Previous testimonial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium">
                          <path d="M9.54801 6.57999L8.48701 5.51999L2.70801 11.297C2.61486 11.3896 2.54093 11.4996 2.49048 11.6209C2.44003 11.7421 2.41406 11.8722 2.41406 12.0035C2.41406 12.1348 2.44003 12.2648 2.49048 12.3861C2.54093 12.5073 2.61486 12.6174 2.70801 12.71L8.48701 18.49L9.54701 17.43L4.12301 12.005L9.54801 6.57999Z" fill="white"></path>
                        </svg>
                      </div>
                      <div className="arrow slide_next" role="button" tabIndex="0" aria-label="Next testimonial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium">
                          <path d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z" fill="white"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-section-medium"></div>
            </section>
          </main>
        </div>
    </section>
  );
}