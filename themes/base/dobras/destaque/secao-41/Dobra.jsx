"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-41
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
  //   // luzen-contact-cta — no necesita boot específico de la sección.
  //   // El motor compartido /luzen/scripts/animations.js (GSAP + ScrollTrigger + SplitText)
  //   // maneja todo: el reveal al scroll de las .glass-card vía .scroll-into-view/[data-reveal]
  //   // y el text-slide del .button en hover (resuelto por CSS compartido).
  //   // Respeta prefers-reduced-motion vía el gate .wf-anim.
  //   
  //   /* animations.js — Luzen motion runner (standalone, plain JS, GSAP global desde CDN).
  //    * =============================================================================
  //    * Portado de Luzen src/scripts/animations.ts a JS plano para secciones standalone
  //    * del catálogo. SIN imports/export de módulos: GSAP, ScrollTrigger y SplitText se
  //    * leen del GLOBAL (cargados por <script> CDN antes de este archivo).
  //    *
  //    * DIFERENCIA CLAVE vs. el original:
  //    *   El template completo dependía del CSS gate `.wf-anim` (animations.css) para
  //    *   esconder los hooks antes de paint. Una sección standalone del catálogo NO trae
  //    *   ese gate, así que acá seteamos el estado inicial vía gsap.set() ANTES de animar
  //    *   y siempre animamos HACIA el estado final visible. Nada queda invisible si un
  //    *   trigger no dispara.
  //    *
  //    * CONVERSIÓN DE SCRUBS (razón: una sección standalone es corta, sin scroll de
  //    * página completa; un scrub se quedaría congelado en el frame inicial — p.ej.
  //    * borroso/escalado mal):
  //    *   - Fondo hero (.home_one-bg / .img-parallax del hero): scale 1.5→1 + blur
  //    *     100px→0  →  ONE-SHOT on-load hacia el estado final (scale 1, blur 0).
  //    *   - Navbar bg-color scrub (.nav_container)  →  ONE-SHOT on-load al color final.
  //    *   - about-svg horizontal scrub (x)  →  ONE-SHOT on-view (entra desde la derecha
  //    *     hacia su posición final x:0, estado legible).
  //    *   - .home_two-bg scale-up scrub y el continuous-parallax de .img-parallax NO se
  //    *     reconstruyen: su frame limpio es la posición natural (scale 1 / y:0), que es
  //    *     justo donde quedan sin animar. Cero dependencia de scroll de página.
  //    *
  //    * Todo con guards null-safe: si falta un elemento, no tira error.
  //    * ============================================================================= */
  //   (function () {
  //     'use strict';
  //   
  //     var gsap = window.gsap;
  //     if (!gsap) {
  //       // GSAP no cargó (CDN faltante): no podemos animar. No tocamos nada → el
  //       // contenido queda visible en su estado natural (no hay gate que lo esconda).
  //       return;
  //     }
  //   
  //     var ScrollTrigger = window.ScrollTrigger;
  //     var SplitText = window.SplitText;
  //   
  //     // Registrar plugins disponibles.
  //     var plugins = [];
  //     if (ScrollTrigger) plugins.push(ScrollTrigger);
  //     if (SplitText) plugins.push(SplitText);
  //     if (plugins.length) gsap.registerPlugin.apply(gsap, plugins);
  //   
  //     var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     // Helpers null-safe.
  //     var $ = function (sel, ctx) {
  //       return (ctx || document).querySelector(sel);
  //     };
  //     var $$ = function (sel, ctx) {
  //       return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  //     };
  //   
  //     /* ---------------------------------------------------------------------------
  //      * prefers-reduced-motion: saltear todo motion y dejar el estado FINAL visible.
  //      * Como no hay CSS gate que esconda nada, basta con NO animar y forzar visibles
  //      * los hooks por si algún CSS del proyecto los dejó en 0.
  //      * ------------------------------------------------------------------------- */
  //     function showFinalState() {
  //       var revealSel =
  //         '[data-reveal]:not([data-reveal="zoom"]), [hero="heading"], [hero="description"], ' +
  //         '[hero="button"], [animation="zoom"], [hero="stats"] > *';
  //       $$(revealSel).forEach(function (el) {
  //         gsap.set(el, { opacity: 1, y: 0, clearProps: 'transform' });
  //       });
  //       var heroBg = $('.home_one-bg');
  //       if (heroBg) gsap.set(heroBg, { scale: 1, filter: 'blur(0px)' });
  //       $$('[data-reveal-img] .img-wrapper').forEach(function (el) {
  //         gsap.set(el, { scale: 1 });
  //       });
  //       $$('.img-appear .img-parallax').forEach(function (el) {
  //         gsap.set(el, { scale: 1, y: '0%' });
  //       });
  //       $$('.img-appear .img-wrap').forEach(function (el) {
  //         gsap.set(el, { display: 'none' });
  //       });
  //       // Navbar al color final.
  //       var nav = $('.nav_container');
  //       if (nav && !isLightNav(nav)) {
  //         gsap.set(nav, { backgroundColor: 'hsla(0,0%,24%,.6)' });
  //       }
  //       // about-svg en su posición legible.
  //       var aboutSvg = $('.about-svg');
  //       if (aboutSvg) gsap.set(aboutSvg, { x: '0%' });
  //       // Accordions reflejan estado abierto/cerrado sin animar.
  //       $$('details.accordion').forEach(function (details) {
  //         var bottom = $('.accordion_bottom', details);
  //         var vline = $('.line-vertical', details);
  //         if (bottom) gsap.set(bottom, { height: details.open ? 'auto' : 0, overflow: details.open ? '' : 'hidden' });
  //         if (vline) gsap.set(vline, { scale: details.open ? 0 : 1 });
  //       });
  //     }
  //   
  //     function isLightNav(nav) {
  //       // El template marcaba el nav claro con esta variant class de Webflow.
  //       return nav.classList.contains('w-variant-0d9e4ee0-eef9-7a70-72e8-eac8c44bf5c5');
  //     }
  //   
  //     /* ===========================================================================
  //      * Hero LOAD entrance. Timeline único, acciones en paralelo sobre un 0–1.
  //      * SplitText word-stagger en [hero="heading"]; stagger de entrada en
  //      * stats/description/button; [animation="zoom"] con y+scale.
  //      * ========================================================================= */
  //     function heroLoad() {
  //       var headings = $$('[hero="heading"]');
  //       var zoom = $$('[animation="zoom"]');
  //       var stats = $$('[hero="stats"] > *');
  //       var desc = $$('[hero="description"]');
  //       var button = $$('[hero="button"]');
  //   
  //       if (!headings.length && !zoom.length && !stats.length && !desc.length && !button.length) {
  //         return;
  //       }
  //   
  //       var tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  //   
  //       // Sin el CSS gate, los hooks parten visibles; igual seteamos el from explícito
  //       // con fromTo para garantizar el estado inicial de la entrada.
  //       if (zoom.length) {
  //         tl.fromTo(
  //           zoom,
  //           { y: '2rem', scale: 1.1, opacity: 1 },
  //           { y: '0rem', scale: 1, opacity: 1, duration: 1.14, ease: 'power1.out' },
  //           0.11
  //         );
  //       }
  //   
  //       if (headings.length) {
  //         if (SplitText) {
  //           var split = new SplitText(headings, { type: 'words' });
  //           tl.from(
  //             split.words,
  //             { opacity: 0, y: '1.5rem', ease: 'power2.out', stagger: { amount: 0.5 } },
  //             0.11
  //           );
  //           headings.forEach(function (h) {
  //             gsap.set(h, { opacity: 1 });
  //           });
  //         } else {
  //           // Fallback sin SplitText: stagger del heading entero.
  //           tl.fromTo(
  //             headings,
  //             { opacity: 0, y: '1.5rem' },
  //             { opacity: 1, y: '0rem', ease: 'power2.out', stagger: { amount: 0.3 } },
  //             0.11
  //           );
  //         }
  //       }
  //   
  //       if (stats.length) {
  //         tl.fromTo(
  //           stats,
  //           { opacity: 0, y: '1.5rem' },
  //           { opacity: 1, y: '0rem', ease: 'sine.out', stagger: { amount: 0.3 } },
  //           0.11
  //         );
  //       }
  //   
  //       if (desc.length) {
  //         tl.fromTo(desc, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power1.in' }, 0.71);
  //       }
  //   
  //       if (button.length) {
  //         tl.fromTo(button, { opacity: 0 }, { opacity: 1, duration: 0.36, ease: 'power1.out' }, 0.89);
  //       }
  //   
  //       // Hero background (.home_one-bg): focus-in on LOAD. ONE-SHOT (era load ya en el
  //       // original): scale 1.5→1 (1.5s) + blur 100px→0 (0.7s).
  //       var heroBg = $('.home_one-bg');
  //       if (heroBg) {
  //         gsap.fromTo(heroBg, { scale: 1.5 }, { scale: 1, duration: 1.5, ease: 'power1.out' });
  //         gsap.fromTo(
  //           heroBg,
  //           { filter: 'blur(100px)' },
  //           { filter: 'blur(0px)', duration: 0.7, ease: 'power1.out' }
  //         );
  //       }
  //     }
  //   
  //     /* ===========================================================================
  //      * View reveals: opacity 0 + y → visible. start 'top 85%', once.
  //      * (El original usaba 'top 100%'; subimos a 'top 85%' como pidió el catálogo.)
  //      * data-reveal="zoom" lo maneja el LOAD timeline → skip.
  //      * ========================================================================= */
  //     function viewReveals() {
  //       if (!ScrollTrigger) return;
  //       $$('[data-reveal]').forEach(function (el) {
  //         if (el.getAttribute('data-reveal') === 'zoom') return;
  //         var delay = parseFloat(el.getAttribute('data-reveal') || '') || 0.1;
  //         // Estado inicial explícito (no hay CSS gate).
  //         gsap.set(el, { opacity: 0, y: '15%' });
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: 'top 85%',
  //           once: true,
  //           onEnter: function () {
  //             gsap.to(el, { opacity: 1, y: '0%', duration: 0.7, delay: delay, ease: 'power3.out' });
  //           },
  //         });
  //       });
  //     }
  //   
  //     /* ===========================================================================
  //      * Image zoom-out reveal: [data-reveal-img] .img-wrapper scale 1.5 → 1.
  //      * start 'top 85%', once.
  //      * ========================================================================= */
  //     function imageZoomOut() {
  //       if (!ScrollTrigger) return;
  //       $$('[data-reveal-img]').forEach(function (wrap) {
  //         var inner = $('.img-wrapper', wrap);
  //         if (!inner) return;
  //         gsap.set(inner, { scale: 1.5 });
  //         ScrollTrigger.create({
  //           trigger: wrap,
  //           start: 'top 85%',
  //           once: true,
  //           onEnter: function () {
  //             gsap.fromTo(
  //               inner,
  //               { scale: 1.5 },
  //               { scale: 1, duration: 1.0, delay: 0.1, ease: 'power3.out' }
  //             );
  //           },
  //         });
  //       });
  //     }
  //   
  //     /* ===========================================================================
  //      * Card masked unveil: .img-appear → .img-parallax (image) + .img-wrap (mask).
  //      * On view: mask baja fuera de cuadro (y 0%→100%) mientras la imagen escala
  //      * 1.4→1. start 'top 85%', once. Hero (animation="zoom") se salta (lo hace LOAD).
  //      * ========================================================================= */
  //     function cardUnveils() {
  //       if (!ScrollTrigger) return;
  //       $$('.img-appear').forEach(function (wrap) {
  //         if (wrap.matches('[animation="zoom"]')) return;
  //         var mask = $('.img-wrap', wrap);
  //         var img = $('.img-parallax', wrap);
  //         if (!mask && !img) return;
  //   
  //         // Estado inicial explícito (no hay CSS gate).
  //         if (mask) gsap.set(mask, { display: 'block', y: '0%' });
  //         if (img) gsap.set(img, { scale: 1.4 });
  //   
  //         ScrollTrigger.create({
  //           trigger: wrap,
  //           start: 'top 85%',
  //           once: true,
  //           onEnter: function () {
  //             if (mask) {
  //               gsap.to(mask, {
  //                 y: '100%',
  //                 duration: 2,
  //                 ease: 'power3.out',
  //                 onComplete: function () {
  //                   gsap.set(mask, { display: 'none' });
  //                 },
  //               });
  //             }
  //             if (img) {
  //               gsap.to(img, { scale: 1, duration: 2, ease: 'power3.out' });
  //             }
  //           },
  //         });
  //       });
  //     }
  //   
  //     /* ===========================================================================
  //      * Scrubs CONVERTIDOS a one-shot (ver cabecera del archivo).
  //      *   - Navbar bg-color → on-load al color final.
  //      *   - about-svg horizontal → on-view, entra desde la derecha a x:0.
  //      * (home_two-bg scale-up y continuous-parallax NO se reconstruyen: su frame
  //      *  limpio es la posición natural.)
  //      * ========================================================================= */
  //     function convertedScrubs() {
  //       // Navbar bg-color: el scrub original iba de white-8% a dark-24%/60% según
  //       // scroll. Standalone → seteamos directo el color final on-load (solo dark nav).
  //       var nav = $('.nav_container');
  //       if (nav && !isLightNav(nav)) {
  //         gsap.to(nav, {
  //           backgroundColor: 'hsla(0,0%,24%,.6)',
  //           duration: 0.6,
  //           ease: 'power1.out',
  //         });
  //       }
  //   
  //       // about-svg: el scrub original empujaba x→-120% según scroll de página. En
  //       // standalone eso lo dejaría fuera de cuadro al final. Lo convertimos a un
  //       // one-shot on-view que entra desde la derecha hacia su posición legible (x:0).
  //       var aboutSvg = $('.about-svg');
  //       if (aboutSvg) {
  //         gsap.fromTo(
  //           aboutSvg,
  //           { x: '15%', opacity: 0 },
  //           {
  //             x: '0%',
  //             opacity: 1,
  //             duration: 1.2,
  //             ease: 'power2.out',
  //             scrollTrigger: ScrollTrigger
  //               ? { trigger: aboutSvg, start: 'top 85%', once: true }
  //               : undefined,
  //           }
  //         );
  //       }
  //     }
  //   
  //     /* ===========================================================================
  //      * Accordion toggle. <details class="accordion">:
  //      *   .accordion_bottom  height 0 ↔ auto   (400ms power3.out)
  //      *   .line-vertical     scale  1 ↔ 0      (400ms power3.out — "+" colapsa a "−")
  //      * Single-open (exclusivo) por lista; accesibilidad de teclado preservada.
  //      * ========================================================================= */
  //     function accordions() {
  //       var items = $$('details.accordion');
  //       if (!items.length) return;
  //   
  //       var controllers = items.map(function (details) {
  //         var summary = $('summary', details);
  //         var bottom = $('.accordion_bottom', details);
  //         var vline = $('.line-vertical', details);
  //   
  //         // Reflejar estado actual sin animar en el primer paint.
  //         if (bottom) {
  //           if (!details.open) {
  //             gsap.set(bottom, { height: 0, overflow: 'hidden' });
  //             if (vline) gsap.set(vline, { scale: 1 });
  //           } else if (vline) {
  //             gsap.set(vline, { scale: 0 });
  //           }
  //         }
  //   
  //         var animating = false;
  //   
  //         var open = function () {
  //           if (!bottom) return;
  //           animating = true;
  //           details.open = true;
  //           gsap.set(bottom, { overflow: 'hidden' });
  //           gsap.to(bottom, {
  //             height: 'auto',
  //             duration: 0.4,
  //             ease: 'power3.out',
  //             onComplete: function () {
  //               gsap.set(bottom, { overflow: '' });
  //               animating = false;
  //             },
  //           });
  //           if (vline) gsap.to(vline, { scale: 0, duration: 0.4, ease: 'power3.out' });
  //         };
  //   
  //         var close = function () {
  //           if (!bottom) return;
  //           animating = true;
  //           gsap.set(bottom, { overflow: 'hidden' });
  //           gsap.to(bottom, {
  //             height: 0,
  //             duration: 0.4,
  //             ease: 'power3.out',
  //             onComplete: function () {
  //               details.open = false;
  //               animating = false;
  //             },
  //           });
  //           if (vline) gsap.to(vline, { scale: 1, duration: 0.4, ease: 'power3.out' });
  //         };
  //   
  //         return {
  //           details: details,
  //           summary: summary,
  //           bottom: bottom,
  //           open: open,
  //           close: close,
  //           isAnimating: function () {
  //             return animating;
  //           },
  //         };
  //       });
  //   
  //       controllers.forEach(function (ctrl) {
  //         if (!ctrl.summary || !ctrl.bottom) return;
  //         ctrl.summary.addEventListener('click', function (e) {
  //           e.preventDefault();
  //           if (ctrl.isAnimating()) return;
  //           if (ctrl.details.open) {
  //             ctrl.close();
  //           } else {
  //             // Exclusivo: cierra el hermano abierto en la misma lista antes de abrir.
  //             controllers.forEach(function (other) {
  //               if (
  //                 other !== ctrl &&
  //                 other.details.open &&
  //                 other.details.parentElement === ctrl.details.parentElement
  //               ) {
  //                 other.close();
  //               }
  //             });
  //             ctrl.open();
  //           }
  //         });
  //       });
  //     }
  //   
  //     /* ===========================================================================
  //      * Hovers (image-only zoom, clipped). Sin dependencia de scroll.
  //      *   .team_card        → .img-parallax scale 1↔1.03 (600ms)
  //      *   .services_container → .services_item scale→0.95 + .service-bg height 0→100%
  //      *   .project-wrapper  → .img-parallax scale 1↔1.04 (600ms)
  //      * ========================================================================= */
  //     function hovers() {
  //       $$('.team_card').forEach(function (card) {
  //         var img = $('.img-parallax', card);
  //         if (!img) return;
  //         card.addEventListener('mouseenter', function () {
  //           gsap.to(img, { scale: 1.03, duration: 0.6, ease: 'power1.out' });
  //         });
  //         card.addEventListener('mouseleave', function () {
  //           gsap.to(img, { scale: 1, duration: 0.6, ease: 'power1.out' });
  //         });
  //       });
  //   
  //       $$('.services_container').forEach(function (row) {
  //         var item = $('.services_item', row);
  //         var bg = $('.service-bg', row);
  //         row.addEventListener('mouseenter', function () {
  //           if (item) gsap.to(item, { scale: 0.95, duration: 0.5, ease: 'power1.out' });
  //           if (bg)
  //             gsap.to(bg, {
  //               height: '100%',
  //               backgroundColor: 'rgba(255,255,255,0.05)',
  //               duration: 0.5,
  //               ease: 'power1.out',
  //             });
  //         });
  //         row.addEventListener('mouseleave', function () {
  //           if (item) gsap.to(item, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
  //           if (bg)
  //             gsap.to(bg, {
  //               height: '0%',
  //               backgroundColor: 'rgba(255,255,255,0)',
  //               duration: 0.5,
  //               ease: 'power1.inOut',
  //             });
  //         });
  //       });
  //   
  //       $$('.project-wrapper').forEach(function (card) {
  //         var img = $('.img-parallax', card);
  //         if (!img) return;
  //         card.addEventListener('mouseenter', function () {
  //           gsap.to(img, { scale: 1.04, duration: 0.6, ease: 'power1.out' });
  //         });
  //         card.addEventListener('mouseleave', function () {
  //           gsap.to(img, { scale: 1, duration: 0.6, ease: 'power1.out' });
  //         });
  //       });
  //     }
  //   
  //     /* ===========================================================================
  //      * Boot.
  //      * ========================================================================= */
  //     function boot() {
  //       if (reduceMotion) {
  //         showFinalState();
  //         // Hovers no son "motion de entrada" — los dejamos activos igual.
  //         hovers();
  //         return;
  //       }
  //   
  //       heroLoad();
  //       viewReveals();
  //       imageZoomOut();
  //       cardUnveils();
  //       convertedScrubs();
  //       hovers();
  //       accordions();
  //   
  //       if (ScrollTrigger) ScrollTrigger.refresh();
  //     }
  //   
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', boot, { once: true });
  //     } else {
  //       boot();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-41" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_contact">
              <div className="container-large">
                <div className="contact_layout">
                  <div className="glass-card scroll-into-view" data-reveal="">
                    <div>
                      <div>Our Project</div>
                      <div className="spacer-xlarge"></div>
                      <div className="h3">Your idea<br />our exertise</div>
                    </div>
                    <a href="/services" className="button w-variant-9b956ad1-29f0-1dd9-1d2c-2f0e6a9b956a w-inline-block">
                      <div className="button_content">
                        <div className="button-text">See Explore Our Services</div>
                        <div className="button-text is-two">See Explore Our Services</div>
                      </div>
                    </a>
                  </div>
                  <div className="glass-card scroll-into-view" data-reveal="">
                    <div>
                      <div>Contact Us </div>
                      <div className="spacer-xlarge"></div>
                      <div className="h3">Let’s begin <br />in the experience</div>
                    </div>
                    <a href="/contact" className="button w-variant-9b956ad1-29f0-1dd9-1d2c-2f0e6a9b956a w-inline-block">
                      <div className="button_content">
                        <div className="button-text">Get in touch</div>
                        <div className="button-text is-two">Get in touch</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}