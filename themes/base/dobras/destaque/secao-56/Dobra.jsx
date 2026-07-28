"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-56
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
  //   /* Congra — Event
  //      Sin lógica local. Los reveals de esta sección (.slide-left en el h2,
  //      .slide-right en la descripción y el botón, .slide_down en cada .event_item)
  //      corren desde /congra/scripts/animations.js (GSAP + ScrollTrigger, globals del CDN). */
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
    <section className="dobra" data-dobra="destaque-secao-56" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_event">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="header">
                    <h2 className="slide-left">{s.titulo}</h2>
                    <div className="event_top">
                      <div className="max-description is-30rem">
                        <div className="text-color-secondary slide-right">Tech's brightest minds merge AI, quantum, and neuroscience to future-proof your strategy</div>
                      </div>
                      <div className="slide-right">
                        <a data-wf--button--variant="secondary" href="/#pricing" className="button w-variant-16339642-0577-1bb6-ab84-e46e09c4ed4d w-inline-block">
                          <div className="button_left w-variant-16339642-0577-1bb6-ab84-e46e09c4ed4d">
                            <div className="clip_intro">
                              <div className="button_banner-text">
                                <div className="button_text">get a ticket</div>
                              </div>
                              <div className="button_banner-text is-bottom">
                                <div className="button_text text-color-primary w-variant-16339642-0577-1bb6-ab84-e46e09c4ed4d">get a ticket</div>
                              </div>
                            </div>
                            <div className="button_cover w-variant-16339642-0577-1bb6-ab84-e46e09c4ed4d"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="gap-section-small"></div>
                  <div className="event_grid">
                    <div className="event_item slide_down">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                        <path d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM12.0258 12.143L7.52578 15.9164C7.40391 16.0195 7.21875 15.9328 7.21875 15.7734V14.3039C7.21875 14.25 7.24453 14.1961 7.28672 14.1609L9.86016 12L7.28672 9.83906C7.26518 9.82205 7.24784 9.8003 7.23605 9.77551C7.22427 9.75072 7.21835 9.72354 7.21875 9.69609V8.22656C7.21875 8.06719 7.40391 7.98047 7.52578 8.08359L12.0258 11.8547C12.1172 11.9297 12.1172 12.068 12.0258 12.143ZM16.7812 15.7734C16.7812 15.8766 16.7016 15.9609 16.6055 15.9609H12.2695C12.1734 15.9609 12.0938 15.8766 12.0938 15.7734V14.6484C12.0938 14.5453 12.1734 14.4609 12.2695 14.4609H16.6055C16.7016 14.4609 16.7812 14.5453 16.7812 14.6484V15.7734Z" fill="white"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Live code overhauls</div>
                        <div className="spacer-small"></div>
                        <div className="text-color-secondary">AI-powered system transformations in real-time</div>
                      </div>
                    </div><div className="event_item slide_down">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                        <path d="M1 3H23V18H1V3ZM0 19H24V21H0V19Z" fill="white"></path>
                      </svg>
                      <div>
                        <div className="text-xl">VC-Validated tech</div>
                        <div className="spacer-small"></div>
                        <div className="text-color-secondary">Investor-approved frameworks ready for deployment</div>
                      </div>
                    </div><div className="event_item slide_down">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                        <path d="M15 8.99998L11 7.49998L15 5.99848L16.5 2L18.0014 5.99848L22 7.49998L18.0014 8.99998L16.5 13L15 8.99998ZM6.99997 17L2 15L6.99997 13L8.99998 8L11 13L16 15L11 17L8.99998 22L6.99997 17Z" fill="white"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Bias Debugging</div>
                        <div className="spacer-small"></div>
                        <div className="text-color-secondary">Fix flawed AI systems live</div>
                      </div>
                    </div><div className="event_item slide_down">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                        <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="white"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Co-Founder Speedruns</div>
                        <div className="spacer-small"></div>
                        <div className="text-color-secondary">Find your perfect tech partner in 30 mins</div>
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