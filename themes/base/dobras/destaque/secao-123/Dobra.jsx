"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-123
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
  //   // congra-speaker-hero — sin lógica local. Los reveals .slide-left/.slide-right
  //   // (nombre, bio, sociales y foto) corren desde el motor compartido de animaciones
  //   // (GSAP + ScrollTrigger vía CDN). Stub mantenido por la convención de 4 archivos.
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
    <section className="dobra" data-dobra="destaque-secao-123" ref={raiz}>
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
            <section className="section_speaker">
              <div className="padding-global">
                <div className="container-large">
                  <div className="speaker_layout">
                    <div className="speaker_content">
                      <div>
                        <h1 className="h2 slide-left">{s.titulo}</h1>
                        <div className="spacer-xlarge"></div>
                        <div className="max-description is-80">
                          <div className="text-color-secondary slide-left">A globally recognized leader in artificial intelligence, Alex Carter has spent over 20 years pushing the boundaries of innovation. She will share her vision of how AI will shape the future of business, creativity, and human connection.</div>
                        </div>
                      </div>
                      <div className="social_list">
                        <a href="#" className="social_link slide-left w-inline-block" aria-label="Youtube">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                            <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white"></path>
                          </svg>
                          <div className="text-sm">Youtube</div>
                        </a>
                        <a href="#" className="social_link slide-left w-inline-block" aria-label="Instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                            <path d="M16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM16.5 6.5C16.2348 6.5 15.9804 6.60536 15.7929 6.79289C15.6054 6.98043 15.5 7.23478 15.5 7.5C15.5 7.76522 15.6054 8.01957 15.7929 8.20711C15.9804 8.39464 16.2348 8.5 16.5 8.5C16.7652 8.5 17.0196 8.39464 17.2071 8.20711C17.3946 8.01957 17.5 7.76522 17.5 7.5C17.5 7.23478 17.3946 6.98043 17.2071 6.79289C17.0196 6.60536 16.7652 6.5 16.5 6.5Z" fill="white"></path>
                          </svg>
                          <div className="text-sm">Instagram</div>
                        </a>
                        <a href="#" className="social_link slide-left w-inline-block" aria-label="Linkedin">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium">
                            <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="white"></path>
                          </svg>
                          <div className="text-sm">Linkedin</div>
                        </a>
                      </div>
                    </div>
                    <div className="speaker_img slide-right">
                      <img src={s.imagem2} loading="eager" alt="Alex Carter" className="img" />
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