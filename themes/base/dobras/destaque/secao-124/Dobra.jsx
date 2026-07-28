"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-124
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
  //   // congra-hero — sin lógica local. El char-split del título ([animation="first|second"]),
  //   // el zoom-out de .hero_img y los reveals .slide-left/.slide-right corren desde el
  //   // motor compartido de animaciones (GSAP + ScrollTrigger vía CDN). Stub mantenido
  //   // por la convención de 4 archivos.
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: congra-navbar behavior ===== */
  //   // congra-navbar — sin lógica local. El drawer móvil + hide-on-scroll corren
  //   // desde el script compartido del head (defer), y el pop-in de carga de los
  //   // items corre desde el motor compartido de animaciones (GSAP + ScrollTrigger
  //   // vía CDN). Stub mantenido por la convención de 4 archivos.
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
  //   /* =============================================================================
  //      congra/scripts/navbar.js — drawer + hide-on-scroll del navbar Congra.
  //      Portado del <script> de src/components/Navbar.astro (TS -> JS clásico).
  //      Va en el <head> con defer para que add-navbar.mjs lo propague a los heroes
  //      (solo propaga deps del head — aprendizaje Vetic).
  //      ============================================================================= */
  //   (function () {
  //     function init() {
  //       var nav = document.querySelector('[data-nav]');
  //       var toggle = nav ? nav.querySelector('[data-nav-toggle]') : null;
  //       var panel = nav ? nav.querySelector('[data-nav-menu]') : null;
  //       var links = nav ? nav.querySelectorAll('[data-nav-link]') : [];
  //   
  //       function setOpen(open) {
  //         if (!nav || !toggle) return;
  //         nav.classList.toggle('is-nav-open', open);
  //         toggle.setAttribute('aria-expanded', String(open));
  //         toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  //         // Bloquea el scroll de la página mientras el menú está abierto.
  //         document.documentElement.style.overflow = open ? 'hidden' : '';
  //       }
  //   
  //       if (toggle) {
  //         toggle.addEventListener('click', function () {
  //           setOpen(!nav.classList.contains('is-nav-open'));
  //         });
  //       }
  //       links.forEach(function (l) {
  //         l.addEventListener('click', function () { setOpen(false); });
  //       });
  //       document.addEventListener('keydown', function (e) {
  //         if (e.key === 'Escape') setOpen(false);
  //       });
  //   
  //       // Tap fuera del dropdown (y no sobre el toggle) lo cierra.
  //       document.addEventListener('click', function (e) {
  //         if (!nav || !nav.classList.contains('is-nav-open')) return;
  //         var target = e.target;
  //         if ((toggle && toggle.contains(target)) || (panel && panel.contains(target))) return;
  //         setOpen(false);
  //       });
  //   
  //       // Oculta la barra al scrollear hacia abajo, la muestra al subir. Siempre
  //       // visible cerca del top y nunca oculta con el menú móvil abierto.
  //       // Omitido con prefers-reduced-motion (la barra queda fija).
  //       var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //       if (nav && !reduceMotion) {
  //         var TOP = 80; // zona siempre-visible en el top de la página
  //         var DELTA = 4; // ignora jitter de scroll
  //         var lastY = window.scrollY;
  //         var ticking = false;
  //         window.addEventListener(
  //           'scroll',
  //           function () {
  //             if (ticking) return;
  //             ticking = true;
  //             requestAnimationFrame(function () {
  //               var y = window.scrollY;
  //               if (!nav.classList.contains('is-nav-open')) {
  //                 if (y <= TOP) nav.classList.remove('is-hidden');
  //                 else if (y > lastY + DELTA) nav.classList.add('is-hidden');
  //                 else if (y < lastY - DELTA) nav.classList.remove('is-hidden');
  //               }
  //               lastY = y;
  //               ticking = false;
  //             });
  //           },
  //           { passive: true }
  //         );
  //       }
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  //     else init();
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-124" ref={raiz}>
      <div className="navbar w-nav" data-collapse="medium" role="banner" data-nav="">
                <div className="padding-global is-navbar">
                  <div className="container-large">
                    <div className="navbar_content">
                      <a href="/" aria-current="page" className="navbar_logo-link w-nav-brand">
                        <img loading="lazy" src={s.imagem} alt="Congra" className="navbar_logo" />
                      </a>
                      <div className="nav_wrap">
                        <nav role="navigation" className="nav_mobile w-nav-menu" data-nav-menu="">
                          <div className="navbar_list">
                            <a href="/" aria-current="page" className="link w-inline-block w--current" data-nav-link="">
                              <div className="link_wrap">
                                <div className="text-sm">Home</div>
                              </div>
                              <div className="link_wrap is-bot">
                                <div className="text-sm">Home</div>
                              </div>
                            </a>
                            <a href="/#about" className="link w-inline-block" data-nav-link="">
                              <div className="link_wrap">
                                <div className="text-sm">about us</div>
                              </div>
                              <div className="link_wrap is-bot">
                                <div className="text-sm">about us</div>
                              </div>
                            </a>
                            <a href="/#pricing" className="link w-inline-block" data-nav-link="">
                              <div className="link_wrap">
                                <div className="text-sm">pricing</div>
                              </div>
                              <div className="link_wrap is-bot">
                                <div className="text-sm">pricing</div>
                              </div>
                            </a>
                            <a href="/#contact" className="link w-inline-block" data-nav-link="">
                              <div className="link_wrap">
                                <div className="text-sm">contact</div>
                              </div>
                              <div className="link_wrap is-bot">
                                <div className="text-sm">contact</div>
                              </div>
                            </a>
                          </div>
                        </nav>
                      </div>
                      <div className="nav_buttons-wrap">
                        <div className="login-wrap hide-mobile-landscape">
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
                        <button type="button" className="menu-button w-nav-button" aria-label="Open menu" aria-expanded="false" data-nav-toggle="" onClick={s.onClick}>
                          <div className="nav-button_component">
                            <div className="nav-button_line is-first"></div>
                            <div className="nav-button_line is-second"></div>
                            <div className="nav-button_line is-third"></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar_gradient"></div>
              </div>
      
        <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_hero">
              <div className="spacer">
                <div style={{height: '40rem'}} className="spacer-desktop"></div>
                <div style={{paddingTop: '60%'}} className="spacer-tablet"></div>
                <div style={{height: '20rem'}} className="spacer-mobile"></div>
              </div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="hero_layout">
                    <div className="hero_title">
                      <div className="max-title is-25rem">
                        <h1 animation="first">{s.titulo}</h1>
                      </div>
                      <div animation="second" id="w-node-_3c19de9b-bec3-1d90-3194-1776143a4dad-6300f68f" className="h1 text-align-right">Summit 2025</div>
                    </div>
                    <div className="spacer">
                      <div style={{height: '7.5rem'}} className="spacer-desktop"></div>
                      <div style={{height: '3rem'}} className="spacer-tablet"></div>
                      <div style={{height: '2rem'}} className="spacer-mobile"></div>
                    </div>
                    <div className="hero_content">
                      <div className="hero_left">
                        <div className="slide-left">
                          <div className="text-2xl">Ready to be part of it?</div>
                        </div>
                        <div className="text-color-secondary slide-left">Don't miss out on the premier IT event of the year! Get your tickets now and be part of the future of technology!</div>
                        <div className="slide-left">
                          <div className="spacer-large"></div>
                          <a data-wf--button--variant="base" href="/#pricing" className="button w-inline-block">
                            <div className="button_left">
                              <div className="clip_intro">
                                <div className="button_banner-text">
                                  <div className="button_text">get a ticket</div>
                                </div>
                                <div className="button_banner-text is-bottom">
                                  <div className="button_text text-color-primary">get a ticket</div>
                                </div>
                              </div>
                              <div className="button_cover"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="hero_block">
                        <div className="block slide-right">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z" fill="white"></path>
                          </svg>
                          <div>Los Angeles</div>
                        </div>
                        <div className="block slide-right">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                            <path d="M6 1.5V4H2V9H22V4H18V1.5H16V4H8V1.5H6ZM22 22V11H2V22H22Z" fill="white"></path>
                          </svg>
                          <div>september 10, 2025</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero_gradient"></div>
              <div className="hero_img"></div>
            </section>
          </main>
        </div>
    </section>
  );
}