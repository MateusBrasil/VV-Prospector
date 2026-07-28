"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-166
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
  //   // vetic-team-about — no local logic. TeamSection.astro has no inline <script>;
  //   // all the data-reveal="view" entrances run from the shared
  //   // /vetic/scripts/scroll-reveal.js (GSAP + ScrollTrigger via CDN).
  //   // Stub kept for the 4-file convention.
  //   
  //   /* =============================================================================
  //      vetic/scripts/scroll-reveal.js — SHARED reveal engine for all Vetic ports.
  //      Ported from the template's src/scripts/scroll-reveal.ts (TS + ESM -> plain
  //      classic script: NO top-level export, gsap/ScrollTrigger come from the CDN
  //      globals). Reveals [data-reveal] elements as they enter the viewport.
  //      Type per element via data-reveal="view|down|left|right|scale|fade|button|curtain".
  //      Honors prefers-reduced-motion (elements shown immediately, no motion).
  //      ============================================================================= */
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   // Reveal presets. `view` is the STANDARD entrance: opacity 0 + a 15% (of the
  //   // element's own height) translateY, eased outQuart over 0.7s. The other types
  //   // (down/left/right/scale/fade) reuse the same fade and are kept as generic
  //   // variants for the few non-standard reveals.
  //   var VETIC_REVEAL_FROM = {
  //     view: { yPercent: 15, opacity: 0 },
  //     down: { yPercent: -15, opacity: 0 },
  //     left: { x: -48, opacity: 0 },
  //     right: { x: 48, opacity: 0 },
  //     scale: { scale: 0.92, opacity: 0 },
  //     fade: { opacity: 0 },
  //     // Standard "hero button" entrance — rise 30% of own height + fade on an
  //     // outBack overshoot over 1s. Apply data-reveal="button" to the WRAPPER of a
  //     // hero-style button so the button's own transform stays free for its :hover.
  //     button: { yPercent: 30, opacity: 0 },
  //   };
  //   
  //   // Per-type easing / duration overrides (default: outQuart, 0.7s).
  //   // `button` matches the hero exactly: GSAP's default back.out constant
  //   // (1.70158) IS the hero's cubic-bezier(0.34, 1.56, 0.64, 1).
  //   var VETIC_REVEAL_EASE = { button: 'back.out' };
  //   var VETIC_REVEAL_DURATION = { button: 1 };
  //   
  //   function initVeticScrollReveal() {
  //     var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     var els = document.querySelectorAll('[data-reveal]');
  //   
  //     if (reduce) {
  //       els.forEach(function (el) { gsap.set(el, { clearProps: 'all', opacity: 1 }); });
  //       return;
  //     }
  //   
  //     els.forEach(function (el) {
  //       var dir = el.dataset.reveal || 'view';
  //       var delay = parseFloat(el.dataset.revealDelay || '0');
  //   
  //       // Curtain reveal: the framed image drops in behind its clip while the inner
  //       // photo zooms out from 1.5x and a blur sharpens. Animates the element's
  //       // nested .img-wrapper + .img, not the element. A slow 2s glide on outQuart.
  //       if (dir === 'curtain') {
  //         var wrap = el.querySelector('.img-wrapper');
  //         var img = el.querySelector('.img');
  //         if (wrap && img) {
  //           gsap.set(wrap, { yPercent: -110 });
  //           gsap.set(img, { yPercent: 100, scale: 1.5, filter: 'blur(10px)' });
  //           ScrollTrigger.create({
  //             trigger: el,
  //             start: 'top 85%',
  //             once: true,
  //             onEnter: function () {
  //               // clearProps on finish so the settled (natural) state takes over —
  //               // lets a later CSS :hover on the same .img win, which a leftover
  //               // GSAP inline transform would otherwise block.
  //               gsap.to(wrap, {
  //                 yPercent: 0, duration: 2, delay: delay, ease: 'power4.out',
  //                 onComplete: function () { gsap.set(wrap, { clearProps: 'transform' }); },
  //               });
  //               gsap.to(img, {
  //                 yPercent: 0, scale: 1, filter: 'blur(0px)', duration: 2, delay: delay, ease: 'power4.out',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'transform,filter' }); },
  //               });
  //             },
  //           });
  //           return;
  //         }
  //       }
  //   
  //       var from = VETIC_REVEAL_FROM[dir] || VETIC_REVEAL_FROM.view;
  //       gsap.set(el, from);
  //       ScrollTrigger.create({
  //         trigger: el,
  //         start: 'top 85%',
  //         once: true,
  //         onEnter: function () {
  //           gsap.to(el, {
  //             x: 0,
  //             y: 0,
  //             xPercent: 0,
  //             yPercent: 0,
  //             scale: 1,
  //             opacity: 1,
  //             duration: VETIC_REVEAL_DURATION[dir] || 0.7,
  //             delay: delay,
  //             ease: VETIC_REVEAL_EASE[dir] || 'power4.out', // default: outQuart
  //           });
  //         },
  //       });
  //     });
  //   
  //     ScrollTrigger.refresh();
  //     fireUnreachableReveals();
  //     // Image loads change layout; re-check after every refresh (load, resize).
  //     ScrollTrigger.addEventListener('refresh', fireUnreachableReveals);
  //   }
  //   
  //   // Standalone section pages are short: an element near the bottom can have its
  //   // trigger start BEYOND the page's max scroll, so it would stay hidden forever
  //   // (e.g. last services row: start 1054 > maxScroll 1016). Fire those instantly.
  //   function fireUnreachableReveals() {
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
  //   if (document.readyState !== 'loading') initVeticScrollReveal();
  //   else document.addEventListener('DOMContentLoaded', initVeticScrollReveal);
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-166" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_team">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="wrap-primary">
                  <div className="header">
                    <div data-reveal="view">
                      <div className="tag">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point">
                          <circle cx="6" cy="6" r="6" fill="var(--acento)">
                          </circle>
                        </svg>
                        <div>Our Team</div>
                      </div>
                    </div>
                    <div className="title">
                      <h2 className="heading-style-h2" data-reveal="view">Our amazing <span className="line-h2">{s.rotulo}</span>
                      </h2>
                    </div>
                    <div className="description" data-reveal="view">
                      <div className="text-color-secondary">Committed professionals focused on your pet’s health.</div>
                    </div>
                  </div>
                  <div className="team_collection w-dyn-list">
                    <div role="list" className="team_grid is-about w-dyn-items">
                      <div role="listitem" className="team_item-wrap w-dyn-item" data-reveal="view">
                        <a href="/doctors/dr-sandra" className="team_item w-inline-block">
                          <img src={s.imagem} alt="Dr. Sandra, Veterinarian" className="img" loading="lazy" />
                          <div className="team_box">
                            <div className="team_box-content">
                              <div className="text-xl">Dr. Sandra</div>
                              <div className="text-sm text-color-secondary">Veterinarian</div>
                            </div>
                            <div className="team_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small">
                                <path d="M11.2256 7.10765C11.1641 7.05043 11.1149 6.98143 11.0807 6.90476C11.0466 6.8281 11.0282 6.74534 11.0267 6.66142C11.0252 6.5775 11.0407 6.49414 11.0721 6.41632C11.1035 6.33849 11.1503 6.2678 11.2097 6.20845C11.269 6.1491 11.3397 6.10231 11.4176 6.07088C11.4954 6.03944 11.5787 6.02401 11.6627 6.02549C11.7466 6.02697 11.8293 6.04534 11.906 6.0795C11.9827 6.11366 12.0517 6.16291 12.1089 6.22431L15.4422 9.55765C15.5593 9.67484 15.625 9.83369 15.625 9.99931C15.625 10.1649 15.5593 10.3238 15.4422 10.441L12.1089 13.7743C12.0517 13.8357 11.9827 13.885 11.906 13.9191C11.8293 13.9533 11.7466 13.9717 11.6627 13.9731C11.5787 13.9746 11.4954 13.9592 11.4176 13.9277C11.3397 13.8963 11.269 13.8495 11.2097 13.7902C11.1503 13.7308 11.1035 13.6601 11.0721 13.5823C11.0407 13.5045 11.0252 13.4211 11.0267 13.3372C11.0282 13.2533 11.0466 13.1705 11.0807 13.0939C11.1149 13.0172 11.1641 12.9482 11.2255 12.891L13.4922 10.6243L5.41722 10.6243C5.25146 10.6243 5.09248 10.5585 4.97527 10.4413C4.85806 10.324 4.79222 10.1651 4.79222 9.99931C4.79222 9.83355 4.85806 9.67458 4.97527 9.55737C5.09248 9.44016 5.25146 9.37431 5.41722 9.37431L13.4922 9.37431L11.2256 7.10765Z" fill="currentColor">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item-wrap w-dyn-item" data-reveal="view">
                        <a href="/doctors/dr-frank" className="team_item w-inline-block">
                          <img src={s.imagem2} alt="Dr. Luisa, Veterinarian" className="img" loading="lazy" />
                          <div className="team_box">
                            <div className="team_box-content">
                              <div className="text-xl">Dr. Luisa</div>
                              <div className="text-sm text-color-secondary">Veterinarian</div>
                            </div>
                            <div className="team_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small">
                                <path d="M11.2256 7.10765C11.1641 7.05043 11.1149 6.98143 11.0807 6.90476C11.0466 6.8281 11.0282 6.74534 11.0267 6.66142C11.0252 6.5775 11.0407 6.49414 11.0721 6.41632C11.1035 6.33849 11.1503 6.2678 11.2097 6.20845C11.269 6.1491 11.3397 6.10231 11.4176 6.07088C11.4954 6.03944 11.5787 6.02401 11.6627 6.02549C11.7466 6.02697 11.8293 6.04534 11.906 6.0795C11.9827 6.11366 12.0517 6.16291 12.1089 6.22431L15.4422 9.55765C15.5593 9.67484 15.625 9.83369 15.625 9.99931C15.625 10.1649 15.5593 10.3238 15.4422 10.441L12.1089 13.7743C12.0517 13.8357 11.9827 13.885 11.906 13.9191C11.8293 13.9533 11.7466 13.9717 11.6627 13.9731C11.5787 13.9746 11.4954 13.9592 11.4176 13.9277C11.3397 13.8963 11.269 13.8495 11.2097 13.7902C11.1503 13.7308 11.1035 13.6601 11.0721 13.5823C11.0407 13.5045 11.0252 13.4211 11.0267 13.3372C11.0282 13.2533 11.0466 13.1705 11.0807 13.0939C11.1149 13.0172 11.1641 12.9482 11.2255 12.891L13.4922 10.6243L5.41722 10.6243C5.25146 10.6243 5.09248 10.5585 4.97527 10.4413C4.85806 10.324 4.79222 10.1651 4.79222 9.99931C4.79222 9.83355 4.85806 9.67458 4.97527 9.55737C5.09248 9.44016 5.25146 9.37431 5.41722 9.37431L13.4922 9.37431L11.2256 7.10765Z" fill="currentColor">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item-wrap w-dyn-item" data-reveal="view">
                        <a href="/doctors/dr-emily" className="team_item w-inline-block">
                          <img src={s.imagem3} alt="Dr. Emily, Veterinarian" className="img" loading="lazy" />
                          <div className="team_box">
                            <div className="team_box-content">
                              <div className="text-xl">Dr. Emily</div>
                              <div className="text-sm text-color-secondary">Veterinarian</div>
                            </div>
                            <div className="team_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small">
                                <path d="M11.2256 7.10765C11.1641 7.05043 11.1149 6.98143 11.0807 6.90476C11.0466 6.8281 11.0282 6.74534 11.0267 6.66142C11.0252 6.5775 11.0407 6.49414 11.0721 6.41632C11.1035 6.33849 11.1503 6.2678 11.2097 6.20845C11.269 6.1491 11.3397 6.10231 11.4176 6.07088C11.4954 6.03944 11.5787 6.02401 11.6627 6.02549C11.7466 6.02697 11.8293 6.04534 11.906 6.0795C11.9827 6.11366 12.0517 6.16291 12.1089 6.22431L15.4422 9.55765C15.5593 9.67484 15.625 9.83369 15.625 9.99931C15.625 10.1649 15.5593 10.3238 15.4422 10.441L12.1089 13.7743C12.0517 13.8357 11.9827 13.885 11.906 13.9191C11.8293 13.9533 11.7466 13.9717 11.6627 13.9731C11.5787 13.9746 11.4954 13.9592 11.4176 13.9277C11.3397 13.8963 11.269 13.8495 11.2097 13.7902C11.1503 13.7308 11.1035 13.6601 11.0721 13.5823C11.0407 13.5045 11.0252 13.4211 11.0267 13.3372C11.0282 13.2533 11.0466 13.1705 11.0807 13.0939C11.1149 13.0172 11.1641 12.9482 11.2255 12.891L13.4922 10.6243L5.41722 10.6243C5.25146 10.6243 5.09248 10.5585 4.97527 10.4413C4.85806 10.324 4.79222 10.1651 4.79222 9.99931C4.79222 9.83355 4.85806 9.67458 4.97527 9.55737C5.09248 9.44016 5.25146 9.37431 5.41722 9.37431L13.4922 9.37431L11.2256 7.10765Z" fill="currentColor">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item-wrap w-dyn-item" data-reveal="view">
                        <a href="/doctors/dr-smith" className="team_item w-inline-block">
                          <img src={s.imagem4} alt="Dr. Smith, Veterinarian" className="img" loading="lazy" />
                          <div className="team_box">
                            <div className="team_box-content">
                              <div className="text-xl">Dr. Smith</div>
                              <div className="text-sm text-color-secondary">Veterinarian</div>
                            </div>
                            <div className="team_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small">
                                <path d="M11.2256 7.10765C11.1641 7.05043 11.1149 6.98143 11.0807 6.90476C11.0466 6.8281 11.0282 6.74534 11.0267 6.66142C11.0252 6.5775 11.0407 6.49414 11.0721 6.41632C11.1035 6.33849 11.1503 6.2678 11.2097 6.20845C11.269 6.1491 11.3397 6.10231 11.4176 6.07088C11.4954 6.03944 11.5787 6.02401 11.6627 6.02549C11.7466 6.02697 11.8293 6.04534 11.906 6.0795C11.9827 6.11366 12.0517 6.16291 12.1089 6.22431L15.4422 9.55765C15.5593 9.67484 15.625 9.83369 15.625 9.99931C15.625 10.1649 15.5593 10.3238 15.4422 10.441L12.1089 13.7743C12.0517 13.8357 11.9827 13.885 11.906 13.9191C11.8293 13.9533 11.7466 13.9717 11.6627 13.9731C11.5787 13.9746 11.4954 13.9592 11.4176 13.9277C11.3397 13.8963 11.269 13.8495 11.2097 13.7902C11.1503 13.7308 11.1035 13.6601 11.0721 13.5823C11.0407 13.5045 11.0252 13.4211 11.0267 13.3372C11.0282 13.2533 11.0466 13.1705 11.0807 13.0939C11.1149 13.0172 11.1641 12.9482 11.2255 12.891L13.4922 10.6243L5.41722 10.6243C5.25146 10.6243 5.09248 10.5585 4.97527 10.4413C4.85806 10.324 4.79222 10.1651 4.79222 9.99931C4.79222 9.83355 4.85806 9.67458 4.97527 9.55737C5.09248 9.44016 5.25146 9.37431 5.41722 9.37431L13.4922 9.37431L11.2256 7.10765Z" fill="currentColor">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item-wrap w-dyn-item" data-reveal="view">
                        <a href="/doctors/dr-laura" className="team_item w-inline-block">
                          <img src={s.imagem5} alt="Dr. Laura, Veterinarian" className="img" loading="lazy" />
                          <div className="team_box">
                            <div className="team_box-content">
                              <div className="text-xl">Dr. Laura</div>
                              <div className="text-sm text-color-secondary">Veterinarian</div>
                            </div>
                            <div className="team_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small">
                                <path d="M11.2256 7.10765C11.1641 7.05043 11.1149 6.98143 11.0807 6.90476C11.0466 6.8281 11.0282 6.74534 11.0267 6.66142C11.0252 6.5775 11.0407 6.49414 11.0721 6.41632C11.1035 6.33849 11.1503 6.2678 11.2097 6.20845C11.269 6.1491 11.3397 6.10231 11.4176 6.07088C11.4954 6.03944 11.5787 6.02401 11.6627 6.02549C11.7466 6.02697 11.8293 6.04534 11.906 6.0795C11.9827 6.11366 12.0517 6.16291 12.1089 6.22431L15.4422 9.55765C15.5593 9.67484 15.625 9.83369 15.625 9.99931C15.625 10.1649 15.5593 10.3238 15.4422 10.441L12.1089 13.7743C12.0517 13.8357 11.9827 13.885 11.906 13.9191C11.8293 13.9533 11.7466 13.9717 11.6627 13.9731C11.5787 13.9746 11.4954 13.9592 11.4176 13.9277C11.3397 13.8963 11.269 13.8495 11.2097 13.7902C11.1503 13.7308 11.1035 13.6601 11.0721 13.5823C11.0407 13.5045 11.0252 13.4211 11.0267 13.3372C11.0282 13.2533 11.0466 13.1705 11.0807 13.0939C11.1149 13.0172 11.1641 12.9482 11.2255 12.891L13.4922 10.6243L5.41722 10.6243C5.25146 10.6243 5.09248 10.5585 4.97527 10.4413C4.85806 10.324 4.79222 10.1651 4.79222 9.99931C4.79222 9.83355 4.85806 9.67458 4.97527 9.55737C5.09248 9.44016 5.25146 9.37431 5.41722 9.37431L13.4922 9.37431L11.2256 7.10765Z" fill="currentColor">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="team_item-wrap w-dyn-item" data-reveal="view">
                        <a href="/doctors/dr-erick" className="team_item w-inline-block">
                          <img src={s.imagem6} alt="Dr. Erick, Veterinarian" className="img" loading="lazy" />
                          <div className="team_box">
                            <div className="team_box-content">
                              <div className="text-xl">Dr. Erick</div>
                              <div className="text-sm text-color-secondary">Veterinarian</div>
                            </div>
                            <div className="team_icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small">
                                <path d="M11.2256 7.10765C11.1641 7.05043 11.1149 6.98143 11.0807 6.90476C11.0466 6.8281 11.0282 6.74534 11.0267 6.66142C11.0252 6.5775 11.0407 6.49414 11.0721 6.41632C11.1035 6.33849 11.1503 6.2678 11.2097 6.20845C11.269 6.1491 11.3397 6.10231 11.4176 6.07088C11.4954 6.03944 11.5787 6.02401 11.6627 6.02549C11.7466 6.02697 11.8293 6.04534 11.906 6.0795C11.9827 6.11366 12.0517 6.16291 12.1089 6.22431L15.4422 9.55765C15.5593 9.67484 15.625 9.83369 15.625 9.99931C15.625 10.1649 15.5593 10.3238 15.4422 10.441L12.1089 13.7743C12.0517 13.8357 11.9827 13.885 11.906 13.9191C11.8293 13.9533 11.7466 13.9717 11.6627 13.9731C11.5787 13.9746 11.4954 13.9592 11.4176 13.9277C11.3397 13.8963 11.269 13.8495 11.2097 13.7902C11.1503 13.7308 11.1035 13.6601 11.0721 13.5823C11.0407 13.5045 11.0252 13.4211 11.0267 13.3372C11.0282 13.2533 11.0466 13.1705 11.0807 13.0939C11.1149 13.0172 11.1641 12.9482 11.2255 12.891L13.4922 10.6243L5.41722 10.6243C5.25146 10.6243 5.09248 10.5585 4.97527 10.4413C4.85806 10.324 4.79222 10.1651 4.79222 9.99931C4.79222 9.83355 4.85806 9.67458 4.97527 9.55737C5.09248 9.44016 5.25146 9.37431 5.41722 9.37431L13.4922 9.37431L11.2256 7.10765Z" fill="currentColor">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}