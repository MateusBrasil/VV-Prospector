"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-120
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
  //   /* Luzen — About Hero
  //      Sin lógica local. Toda la entrada on-load corre desde /luzen/scripts/animations.js:
  //      - [hero="heading"] entra con SplitText (word-stagger) — requiere el plugin SplitText por CDN
  //      - [hero="button"] entra con stagger de entrada
  //      - .img-appear (la imagen del hero) hace su máscara de aparición + .img-parallax al scroll
  //      El marquee de partners se anima por CSS (ver style.css), no por GSAP. */
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: luzen-navbar behavior ===== */
  //   // El toggle del hamburger mobile (data-navigation-status en <html>), el cierre
  //   // por backdrop/Escape/click-en-link y el sticky hide-on-scroll-down sobre
  //   // [data-navbar] los cablea el script compartido /luzen/scripts/navbar.js, que
  //   // se auto-inicializa en DOM ready. Este stub existe para respetar la convención
  //   // de archivos de las secciones del catálogo.
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
  //   /* navbar.js — Luzen OSMO scaling-hamburger toggle (standalone, plain JS).
  //    * =============================================================================
  //    * Portado fiel de Luzen src/scripts/navbar.ts a JS plano para secciones
  //    * standalone del catálogo. SIN imports, SIN TypeScript, SIN GSAP — puras
  //    * transiciones CSS keyed off un atributo de estado.
  //    *
  //    * Estado del menú: <html data-navigation-status="active"|"not-active">.
  //    * El pill (.hamburger-nav__bg / __group / __toggle) y el dim backdrop
  //    * (.navigation__dark-bg) reaccionan vía CSS a ese atributo (ver hamburger-nav.css).
  //    *
  //    * Comportamiento:
  //    *   - click en [data-navigation-toggle="toggle"]  → alterna abierto/cerrado
  //    *   - click en [data-navigation-toggle="close"]   → cierra (el backdrop)
  //    *   - click en un link del menú (.hamburger-nav__a) → cierra (navega + cierra)
  //    *   - Escape                                       → cierra si está abierto
  //    *   - sticky hide-on-scroll-down / show-on-scroll-up sobre [data-navbar]
  //    *     (scroll bloqueado mientras el menú está abierto, así no pelean)
  //    *
  //    * Todo con guards null-safe: si falta un elemento, no tira error.
  //    * ============================================================================= */
  //   (function () {
  //     'use strict';
  //   
  //     function initNavbar() {
  //       var html = document.documentElement;
  //       if (!html) return;
  //   
  //       var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       var menuLinks = document.querySelectorAll('.hamburger-nav__a');
  //   
  //       var setStatus = function (active) {
  //         html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
  //         // Bloquea el scroll del documento mientras el menú está abierto.
  //         html.style.overflow = active ? 'hidden' : '';
  //         for (var i = 0; i < toggleEls.length; i++) {
  //           toggleEls[i].setAttribute('aria-expanded', String(active));
  //         }
  //       };
  //   
  //       // Estado inicial: cerrado.
  //       setStatus(false);
  //   
  //       // Toggle: alterna según el estado actual.
  //       for (var t = 0; t < toggleEls.length; t++) {
  //         toggleEls[t].addEventListener('click', function (e) {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute('data-navigation-status') !== 'active');
  //         });
  //       }
  //   
  //       // Backdrop / botón close: cierra.
  //       for (var c = 0; c < closeEls.length; c++) {
  //         closeEls[c].addEventListener('click', function () {
  //           setStatus(false);
  //         });
  //       }
  //   
  //       // Links del menú: cierra al navegar.
  //       for (var m = 0; m < menuLinks.length; m++) {
  //         menuLinks[m].addEventListener('click', function () {
  //           setStatus(false);
  //         });
  //       }
  //   
  //       // Escape: cierra si está abierto.
  //       document.addEventListener('keydown', function (e) {
  //         if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
  //           setStatus(false);
  //         }
  //       });
  //   
  //       // Sticky hide-on-scroll-down / show-on-scroll-up sobre [data-navbar].
  //       // (Equivalente al IX2 PAGE_SCROLL de Webflow.) El scroll está bloqueado
  //       // mientras el menú está abierto, así nunca pelean.
  //       var navbar = document.querySelector('[data-navbar]');
  //       if (navbar) {
  //         var lastY = window.scrollY;
  //         window.addEventListener(
  //           'scroll',
  //           function () {
  //             var y = window.scrollY;
  //             if (y > lastY && y > 200) {
  //               navbar.classList.add('is-hidden');
  //             } else {
  //               navbar.classList.remove('is-hidden');
  //             }
  //             lastY = y;
  //           },
  //           { passive: true }
  //         );
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') {
  //       initNavbar();
  //     } else {
  //       document.addEventListener('DOMContentLoaded', initNavbar);
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="sobre-secao-120" ref={raiz}>
      <div data-navbar="" data-animation="default" className="navbar w-nav" data-collapse="medium" role="banner">
          <div className="padding-global is-nav">
            <div className="nav_container">
              <div className="navbar_content">
                <a href="/" aria-current="page" className="navbar_logo-link w-nav-brand w--current" aria-label="Luzen home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 16" fill="none" className="nav_svg">
                    <path d="M32.0001 11.633L32.0001 15.5229C26.0111 15.5229 22.0185 12.1468 20.7708 10.4587L20.7708 15.5229L16.8809 15.5229L16.8809 0.477069L20.7708 0.477069C21.2405 9.6367 28.4527 11.7309 32.0001 11.633Z" fill="currentColor"></path>
                    <path d="M-0.000125545 11.633L-0.000125885 15.5229C5.98886 15.5229 9.98153 12.1468 11.2292 10.4587L11.2292 15.5229L15.1191 15.5229L15.1191 0.477069L11.2292 0.477069C10.7595 9.6367 3.54727 11.7309 -0.000125545 11.633Z" fill="currentColor"></path>
                  </svg>
                </a>
      
                
                <div className="nav_wrap">
                  <nav role="navigation" className="nav_mobile w-nav-menu">
                    <div className="navbar_list">
                      <a href="/about" aria-current="page" className="nav_links w-nav-link w--current">{s.acao}</a>
                      <a href="/services" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/projects" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao4}</a>
                      <a href="/location" className="nav_links w-nav-link">{s.acao5}</a>
                    </div>
                  </nav>
                </div>
      
                
                <div className="login-wrap hide-tablet">
                  <a href="/contact" className="button w-variant-6cfcba72-296a-e46f-65d6-adbf5fec6199 w-inline-block">
                    <div className="button_content">
                      <div className="button-text">Contact</div>
                      <div className="button-text is-two">Contact</div>
                    </div>
                  </a>
                </div>
      
                
                <div className="hamburger-anchor">
                  <div className="hamburger-nav">
                    <div className="hamburger-nav__bg" aria-hidden="true"></div>
                    <div className="hamburger-nav__group">
                      <p className="hamburger-nav__menu-p">{s.texto}</p>
                      <ul className="hamburger-nav__ul">
                        <li className="hamburger-nav__li"><a href="/about" aria-current="page" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto2}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/services" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto3}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/projects" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto4}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/blog" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto5}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/location" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto6}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/contact" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto7}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                      </ul>
                    </div>
                    <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}>
                      <div className="hamburger-nav__toggle-bar"></div>
                      <div className="hamburger-nav__toggle-bar"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
      
        <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_about-hero">
              <div className="padding-global">
                <div className="container-large">
                  <div className="about_hero">
                    <div className="about_hero-left">
                      <div className="about_hero_content">
                        <div className="about_hero-title">
                          <h1 hero="heading" className="text-6xl">{s.titulo}</h1>
                          <div hero="heading">
                            We are passionate about creating inspiring, captivating and long-lasting spaces that
                            adapt.
                          </div>
                        </div>
                        <div hero="button" className="buttons-wrapper">
                          <a href="/contact" className="button w-variant-9b956ad1-29f0-1dd9-1d2c-2f0e6a9b956a w-inline-block">
                            <div className="button_content">
                              <div className="button-text">Book a Consultation</div>
                              <div className="button-text is-two">Book a Consultation</div>
                            </div>
                          </a>
                          <a href="/blog" className="button is-tertiary w-inline-block">
                            <div className="button_content">
                              <div className="button-text">Learn more</div>
                              <div className="button-text is-two">Learn more</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>Our partners</div>
                        <div className="spacer-medium"></div>
                        <div className="loop logo-marquee" data-astro-cid-h2jlyvcc="">
                          <div className="loop_gradient" data-astro-cid-h2jlyvcc=""></div>
                          <div className="loop_gradient is-right" data-astro-cid-h2jlyvcc=""></div>
                          <div className="logo-marquee_track" data-astro-cid-h2jlyvcc="">
                            <div className="loop_logo" data-astro-cid-h2jlyvcc="">
                              <img loading="lazy" src={s.imagem} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" /><img loading="lazy" src={s.imagem2} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" /><img loading="lazy" src={s.imagem3} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" /><img loading="lazy" src={s.imagem4} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" />
                            </div>
                            <div className="loop_logo" aria-hidden="true" data-astro-cid-h2jlyvcc="">
                              <img loading="lazy" src={s.imagem5} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" /><img loading="lazy" src={s.imagem6} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" /><img loading="lazy" src={s.imagem7} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" /><img loading="lazy" src={s.imagem8} alt="" className="logos_img" data-astro-cid-h2jlyvcc="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about_hero-img img-reveal img-appear">
                      <img src={s.imagem9} loading="lazy" alt="A modern kitchen designed in beige and cream tones with abundant natural light, emphasizing a warm, sophisticated atmosphere and high-quality architectural finishes." className="img-parallax" />
                      <div className="img-wrap is-dark"></div>
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