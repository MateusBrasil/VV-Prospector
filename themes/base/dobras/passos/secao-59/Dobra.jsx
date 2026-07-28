"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-59
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
  //   /* Congra — Itinerary
  //      Sin lógica local. Los reveals de los elementos .slide-left del header
  //      corren desde el motor compartido /congra/scripts/animations.js
  //      (GSAP + ScrollTrigger, gateado por la clase .anim en <html>). */
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
    <section className="dobra" data-dobra="passos-secao-59" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section id="itinerary" className="section_time">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="time_layout">
                    <div className="time_header">
                      <h2 className="slide-left">{s.titulo}</h2>
                      <div className="max-description is-30rem">
                        <div className="text-color-secondary slide-left">Gain insights from world-class leaders, innovators, and experts who are shaping the future of AI. Each speaker brings unique perspectives, real-world experience, and actionable knowledge you can apply right away.</div>
                      </div>
                      <div className="slide-left">
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
                    <div className="timeline">
                      <div className="timeline_item">
                        <div className="bar">
                          <div className="bar_number">
                            <div>1</div>
                          </div>
                          <div className="line"></div>
                        </div>
                        <div className="timeline_content">
                          <div className="text-2xl">6:00 PM</div>
                          <div>
                            <div className="text-xl">Doors Open</div>
                            <div className="spacer-small"></div>
                            <div className="text-color-secondary">Neuroscientist decoding decision-making in AI-driven markets</div>
                          </div>
                        </div>
                      </div><div className="timeline_item">
                        <div className="bar">
                          <div className="bar_number">
                            <div>2</div>
                          </div>
                          <div className="line"></div>
                        </div>
                        <div className="timeline_content">
                          <div className="text-2xl">7:00 PM</div>
                          <div>
                            <div className="text-xl">Main Talk</div>
                            <div className="spacer-small"></div>
                            <div className="text-color-secondary">Experience transformative insights from our hosts — expect bold ideas, breakthrough tech, and a mindset shift that’ll fuel your next big move.</div>
                          </div>
                        </div>
                      </div><div className="timeline_item">
                        <div className="bar">
                          <div className="bar_number">
                            <div>3</div>
                          </div>
                          <div className="line"></div>
                        </div>
                        <div className="timeline_content">
                          <div className="text-2xl">8:30 PM</div>
                          <div>
                            <div className="text-xl">Q&amp;A Session</div>
                            <div className="spacer-small"></div>
                            <div className="text-color-secondary">Engage directly with Alex and Jamie. Bring your questions!</div>
                          </div>
                        </div>
                      </div><div className="timeline_item">
                        <div className="bar">
                          <div className="bar_number">
                            <div>4</div>
                          </div>
                        </div>
                        <div className="timeline_content is-last">
                          <div className="text-2xl">9:15 PM</div>
                          <div>
                            <div className="text-xl">Meet-and-Greet</div>
                            <div className="spacer-small"></div>
                            <div className="text-color-secondary">Wrap up the night with personal interactions. Get your books signed!</div>
                          </div>
                        </div>
                      </div>
                      <div className="gradient"></div>
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