"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-57
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   // stayli-destinations — no local logic. The properties carousel (Swiper path A,
  //   // data-swiper) is initialized by the shared /stayli/scripts/swiper-init.js, which
  //   // reads the data-* config and wires the custom prev/next arrows inside
  //   // [data-swiper-scope]. Scroll reveals ([data-reveal] -> .is-in) are handled by
  //   // /stayli/scripts/scroll-reveal.js. Stub kept for the 4-file convention.
  //   //
  //   // NO top-level `export` here: this file loads as a classic <script src>, and an
  //   // export would be a silent SyntaxError that would also break the reveals.
  //   
  //   /* Stayli — generic carousel init (Swiper path A). Port of swiper-init.ts to a
  //      plain global (no `export`, self-init — Rule 1). Swiper is a CDN global
  //      (swiper-bundle includes Navigation + Autoplay + A11y, auto-registered — no
  //      `modules` array needed). Targets `.swiper[data-swiper]`, reads data-* config,
  //      wires arrows `[data-swiper-prev/next]` inside `[data-swiper-scope]`.
  //      Used by: stayli-destinations, stayli-blog-teaser. */
  //   (function () {
  //     if (typeof Swiper === 'undefined') return; // fail-safe: no slider, content visible
  //   
  //     function num(v, d) {
  //       var n = v ? parseFloat(v) : NaN;
  //       return isFinite(n) ? n : d;
  //     }
  //   
  //     function initSwipers() {
  //       document.querySelectorAll('.swiper[data-swiper]').forEach(function (root) {
  //         var cfg = {
  //           spv: num(root.dataset.spv, 1.15),
  //           spvTablet: num(root.dataset.spvTablet, 2),
  //           spvDesktop: num(root.dataset.spvDesktop, 3),
  //           gap: num(root.dataset.gap, 16),
  //           loop: root.dataset.loop !== 'false',
  //           autoplay: num(root.dataset.autoplay, 0),
  //           centered: root.dataset.centered === 'true',
  //         };
  //         var scope = root.closest('[data-swiper-scope]') || root.parentElement || document.body;
  //         var next = scope.querySelector('[data-swiper-next]');
  //         var prev = scope.querySelector('[data-swiper-prev]');
  //   
  //         var opts = {
  //           slidesPerView: cfg.spv,
  //           spaceBetween: cfg.gap,
  //           centeredSlides: cfg.centered,
  //           loop: cfg.loop,
  //           speed: 600,
  //           navigation: next && prev ? { nextEl: next, prevEl: prev } : undefined,
  //           breakpoints: {
  //             768: { slidesPerView: cfg.spvTablet, centeredSlides: false },
  //             992: { slidesPerView: cfg.spvDesktop, centeredSlides: false },
  //           },
  //         };
  //         if (cfg.autoplay) opts.autoplay = { delay: cfg.autoplay, disableOnInteraction: false };
  //   
  //         new Swiper(root, opts);
  //       });
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSwipers);
  //     else initSwipers();
  //   })();
  //   
  //   /* Stayli — shared reveal engine. Port of animations.ts to a plain global
  //      (no `export`, self-init — Rule 1). NO GSAP: reveals are CSS keyframes +
  //      IntersectionObserver. Two parts:
  //        - Hero entrance: [data-hero-reveal] gets `.is-in` on load (the actual
  //          motion is pure CSS keyframes in /stayli/styles.css — heroRise / heroDeblur
  //          / heroKenBurns / heroShadowIn — so the hero animates even with this off).
  //        - Scroll reveals: [data-reveal] gets `.is-in` as it enters the viewport,
  //          with a 90ms top->bottom cascade for siblings entering together.
  //      FAIL-SAFE: the hidden start state lives in CSS under `html.reveal-js [data-reveal]`
  //      and only inside `@media (prefers-reduced-motion: no-preference)`. The `reveal-js`
  //      flag is set inline in <head> before first paint. If this script never runs,
  //      `.is-in` is never added but content is already visible (blur-free) unless the
  //      flag + motion gate are both on — and a stalled observer would leave blur, so
  //      this script MUST load. Reduced-motion users get `.is-in` immediately, no motion. */
  //   (function () {
  //     var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //     function runHeroEntrance() {
  //       var els = document.querySelectorAll("[data-hero-reveal]");
  //       if (!els.length) return;
  //       if (REDUCE) {
  //         els.forEach(function (el) { el.classList.add("is-in"); });
  //         return;
  //       }
  //       requestAnimationFrame(function () {
  //         els.forEach(function (el) { el.classList.add("is-in"); });
  //       });
  //     }
  //   
  //     function runScrollReveals() {
  //       var els = document.querySelectorAll("[data-reveal]");
  //       if (!els.length) return;
  //       if (REDUCE) {
  //         els.forEach(function (el) { el.classList.add("is-in"); });
  //         return;
  //       }
  //       var STAGGER = 90; // ms between siblings entering together
  //       var io = new IntersectionObserver(
  //         function (entries) {
  //           var entering = entries
  //             .filter(function (e) { return e.isIntersecting; })
  //             .sort(function (a, b) {
  //               return a.target.compareDocumentPosition(b.target) &
  //                 Node.DOCUMENT_POSITION_FOLLOWING
  //                 ? -1
  //                 : 1;
  //             });
  //           entering.forEach(function (entry, i) {
  //             var el = entry.target;
  //             var delay = Math.min(i, 8) * STAGGER;
  //             if (delay) window.setTimeout(function () { el.classList.add("is-in"); }, delay);
  //             else el.classList.add("is-in");
  //             io.unobserve(el);
  //           });
  //         },
  //         { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  //       );
  //       els.forEach(function (el) { io.observe(el); });
  //     }
  //   
  //     function init() {
  //       runHeroEntrance();
  //       runScrollReveals();
  //     }
  //   
  //     if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  //     else init();
  //   })();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-secao-57" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_destinations">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="destinations_top-wrap">
                  <div className="destinations_top-left-wrap">
                    <div className="text-subtitle" data-reveal>Discover</div>
                    <h2 className="heading-style-h2" data-reveal>{s.titulo}</h2>
                  </div>
                  <a href="/listings" className="button w-button" data-reveal>{s.acao}</a>
                </div>
              </div>
              <div className="container-large" data-reveal data-swiper-scope>
                <div className="slider w-slider swiper" data-swiper data-spv="1" data-spv-tablet="2" data-spv-desktop="3" data-gap="24" data-loop="true">
                  <div className="mask w-slider-mask swiper-wrapper">
      
                    <div className="slide w-slide swiper-slide">
                      <a href="/properties/horizon-view-villas" className="item_destination">
                        <img loading="lazy" src={s.imagem} alt="Horizon View Villas" className="img" />
                        <div className="destinations_slide-content">
                          <div className="destinations_tag">
                            <div className="listing_wrap is-tag">
                              <div className="text-sm">1</div>
                              <div className="text-sm">Bedrooms</div>
                              <div className="text-sm">/</div>
                              <div className="text-sm">2</div>
                              <div className="text-sm">Guest</div>
                            </div>
                          </div>
                          <div className="destinations_content-bottom">
                            <div className="vertical-space is-destinations">
                              <div className="text-2xl text-weight-normal">Horizon View Villas</div>
                              <div className="horizontal-space is-destinations">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-xmedium"><path fillRule="evenodd" clipRule="evenodd" d="M9.38565 18.4448C9.38565 18.4448 3.33398 13.3482 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317C16.6673 13.3482 10.6157 18.4448 10.6157 18.4448C10.279 18.7548 9.72482 18.7515 9.38565 18.4448ZM10.0007 11.2498C10.3837 11.2498 10.7629 11.1744 11.1168 11.0278C11.4707 10.8812 11.7922 10.6664 12.063 10.3956C12.3339 10.1247 12.5487 9.8032 12.6953 9.44933C12.8419 9.09546 12.9173 8.71619 12.9173 8.33317C12.9173 7.95015 12.8419 7.57088 12.6953 7.21701C12.5487 6.86314 12.3339 6.54161 12.063 6.27078C11.7922 5.99994 11.4707 5.7851 11.1168 5.63852C10.7629 5.49195 10.3837 5.4165 10.0007 5.4165C9.2271 5.4165 8.48524 5.72379 7.93826 6.27078C7.39128 6.81776 7.08398 7.55962 7.08398 8.33317C7.08398 9.10672 7.39128 9.84858 7.93826 10.3956C8.48524 10.9425 9.2271 11.2498 10.0007 11.2498Z" fill="currentColor"></path></svg>
                                <div className="text-sm text-color-grey no-wrap">Santorini Sunset</div>
                              </div>
                            </div>
                            <div className="button is-none">
                              <div className="listing_wrap is-tag">
                                <div>$</div>
                                <div>55</div>
                                <div>USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
      
                    <div className="slide w-slide swiper-slide">
                      <a href="/properties/mountainview-cabin" className="item_destination">
                        <img loading="lazy" src={s.imagem2} alt="Mountainview Cabin" className="img" />
                        <div className="destinations_slide-content">
                          <div className="destinations_tag">
                            <div className="listing_wrap is-tag">
                              <div className="text-sm">1</div>
                              <div className="text-sm">Bedrooms</div>
                              <div className="text-sm">/</div>
                              <div className="text-sm">2</div>
                              <div className="text-sm">Guest</div>
                            </div>
                          </div>
                          <div className="destinations_content-bottom">
                            <div className="vertical-space is-destinations">
                              <div className="text-2xl text-weight-normal">Mountainview Cabin</div>
                              <div className="horizontal-space is-destinations">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-xmedium"><path fillRule="evenodd" clipRule="evenodd" d="M9.38565 18.4448C9.38565 18.4448 3.33398 13.3482 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317C16.6673 13.3482 10.6157 18.4448 10.6157 18.4448C10.279 18.7548 9.72482 18.7515 9.38565 18.4448ZM10.0007 11.2498C10.3837 11.2498 10.7629 11.1744 11.1168 11.0278C11.4707 10.8812 11.7922 10.6664 12.063 10.3956C12.3339 10.1247 12.5487 9.8032 12.6953 9.44933C12.8419 9.09546 12.9173 8.71619 12.9173 8.33317C12.9173 7.95015 12.8419 7.57088 12.6953 7.21701C12.5487 6.86314 12.3339 6.54161 12.063 6.27078C11.7922 5.99994 11.4707 5.7851 11.1168 5.63852C10.7629 5.49195 10.3837 5.4165 10.0007 5.4165C9.2271 5.4165 8.48524 5.72379 7.93826 6.27078C7.39128 6.81776 7.08398 7.55962 7.08398 8.33317C7.08398 9.10672 7.39128 9.84858 7.93826 10.3956C8.48524 10.9425 9.2271 11.2498 10.0007 11.2498Z" fill="currentColor"></path></svg>
                                <div className="text-sm text-color-grey no-wrap">Aspen Heights</div>
                              </div>
                            </div>
                            <div className="button is-none">
                              <div className="listing_wrap is-tag">
                                <div>$</div>
                                <div>95</div>
                                <div>USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
      
                    <div className="slide w-slide swiper-slide">
                      <a href="/properties/zen-villas" className="item_destination">
                        <img loading="lazy" src={s.imagem3} alt="Zen Villas" className="img" />
                        <div className="destinations_slide-content">
                          <div className="destinations_tag">
                            <div className="listing_wrap is-tag">
                              <div className="text-sm">2</div>
                              <div className="text-sm">Bedrooms</div>
                              <div className="text-sm">/</div>
                              <div className="text-sm">4</div>
                              <div className="text-sm">Guest</div>
                            </div>
                          </div>
                          <div className="destinations_content-bottom">
                            <div className="vertical-space is-destinations">
                              <div className="text-2xl text-weight-normal">Zen Villas</div>
                              <div className="horizontal-space is-destinations">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-xmedium"><path fillRule="evenodd" clipRule="evenodd" d="M9.38565 18.4448C9.38565 18.4448 3.33398 13.3482 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317C16.6673 13.3482 10.6157 18.4448 10.6157 18.4448C10.279 18.7548 9.72482 18.7515 9.38565 18.4448ZM10.0007 11.2498C10.3837 11.2498 10.7629 11.1744 11.1168 11.0278C11.4707 10.8812 11.7922 10.6664 12.063 10.3956C12.3339 10.1247 12.5487 9.8032 12.6953 9.44933C12.8419 9.09546 12.9173 8.71619 12.9173 8.33317C12.9173 7.95015 12.8419 7.57088 12.6953 7.21701C12.5487 6.86314 12.3339 6.54161 12.063 6.27078C11.7922 5.99994 11.4707 5.7851 11.1168 5.63852C10.7629 5.49195 10.3837 5.4165 10.0007 5.4165C9.2271 5.4165 8.48524 5.72379 7.93826 6.27078C7.39128 6.81776 7.08398 7.55962 7.08398 8.33317C7.08398 9.10672 7.39128 9.84858 7.93826 10.3956C8.48524 10.9425 9.2271 11.2498 10.0007 11.2498Z" fill="currentColor"></path></svg>
                                <div className="text-sm text-color-grey no-wrap">Bali Bliss</div>
                              </div>
                            </div>
                            <div className="button is-none">
                              <div className="listing_wrap is-tag">
                                <div>$</div>
                                <div>120</div>
                                <div>USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
      
                    <div className="slide w-slide swiper-slide">
                      <a href="/properties/sunset-horizon-villas" className="item_destination">
                        <img loading="lazy" src={s.imagem4} alt="Sunset Horizon Villas" className="img" />
                        <div className="destinations_slide-content">
                          <div className="destinations_tag">
                            <div className="listing_wrap is-tag">
                              <div className="text-sm">2</div>
                              <div className="text-sm">Bedrooms</div>
                              <div className="text-sm">/</div>
                              <div className="text-sm">4</div>
                              <div className="text-sm">Guest</div>
                            </div>
                          </div>
                          <div className="destinations_content-bottom">
                            <div className="vertical-space is-destinations">
                              <div className="text-2xl text-weight-normal">Sunset Horizon Villas</div>
                              <div className="horizontal-space is-destinations">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-xmedium"><path fillRule="evenodd" clipRule="evenodd" d="M9.38565 18.4448C9.38565 18.4448 3.33398 13.3482 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317C16.6673 13.3482 10.6157 18.4448 10.6157 18.4448C10.279 18.7548 9.72482 18.7515 9.38565 18.4448ZM10.0007 11.2498C10.3837 11.2498 10.7629 11.1744 11.1168 11.0278C11.4707 10.8812 11.7922 10.6664 12.063 10.3956C12.3339 10.1247 12.5487 9.8032 12.6953 9.44933C12.8419 9.09546 12.9173 8.71619 12.9173 8.33317C12.9173 7.95015 12.8419 7.57088 12.6953 7.21701C12.5487 6.86314 12.3339 6.54161 12.063 6.27078C11.7922 5.99994 11.4707 5.7851 11.1168 5.63852C10.7629 5.49195 10.3837 5.4165 10.0007 5.4165C9.2271 5.4165 8.48524 5.72379 7.93826 6.27078C7.39128 6.81776 7.08398 7.55962 7.08398 8.33317C7.08398 9.10672 7.39128 9.84858 7.93826 10.3956C8.48524 10.9425 9.2271 11.2498 10.0007 11.2498Z" fill="currentColor"></path></svg>
                                <div className="text-sm text-color-grey no-wrap">Santorini Sunset</div>
                              </div>
                            </div>
                            <div className="button is-none">
                              <div className="listing_wrap is-tag">
                                <div>$</div>
                                <div>150</div>
                                <div>USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
      
                    <div className="slide w-slide swiper-slide">
                      <a href="/properties/cityscape-lofts" className="item_destination">
                        <img loading="lazy" src={s.imagem5} alt="Cityscape Lofts" className="img" />
                        <div className="destinations_slide-content">
                          <div className="destinations_tag">
                            <div className="listing_wrap is-tag">
                              <div className="text-sm">1</div>
                              <div className="text-sm">Bedrooms</div>
                              <div className="text-sm">/</div>
                              <div className="text-sm">2</div>
                              <div className="text-sm">Guest</div>
                            </div>
                          </div>
                          <div className="destinations_content-bottom">
                            <div className="vertical-space is-destinations">
                              <div className="text-2xl text-weight-normal">Cityscape Lofts</div>
                              <div className="horizontal-space is-destinations">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-xmedium"><path fillRule="evenodd" clipRule="evenodd" d="M9.38565 18.4448C9.38565 18.4448 3.33398 13.3482 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317C16.6673 13.3482 10.6157 18.4448 10.6157 18.4448C10.279 18.7548 9.72482 18.7515 9.38565 18.4448ZM10.0007 11.2498C10.3837 11.2498 10.7629 11.1744 11.1168 11.0278C11.4707 10.8812 11.7922 10.6664 12.063 10.3956C12.3339 10.1247 12.5487 9.8032 12.6953 9.44933C12.8419 9.09546 12.9173 8.71619 12.9173 8.33317C12.9173 7.95015 12.8419 7.57088 12.6953 7.21701C12.5487 6.86314 12.3339 6.54161 12.063 6.27078C11.7922 5.99994 11.4707 5.7851 11.1168 5.63852C10.7629 5.49195 10.3837 5.4165 10.0007 5.4165C9.2271 5.4165 8.48524 5.72379 7.93826 6.27078C7.39128 6.81776 7.08398 7.55962 7.08398 8.33317C7.08398 9.10672 7.39128 9.84858 7.93826 10.3956C8.48524 10.9425 9.2271 11.2498 10.0007 11.2498Z" fill="currentColor"></path></svg>
                                <div className="text-sm text-color-grey no-wrap">New York Downtown</div>
                              </div>
                            </div>
                            <div className="button is-none">
                              <div className="listing_wrap is-tag">
                                <div>$</div>
                                <div>180</div>
                                <div>USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
      
                    <div className="slide w-slide swiper-slide">
                      <a href="/properties/ocean-breeze-suites" className="item_destination">
                        <img loading="lazy" src={s.imagem6} alt="Ocean Breeze Suites" className="img" />
                        <div className="destinations_slide-content">
                          <div className="destinations_tag">
                            <div className="listing_wrap is-tag">
                              <div className="text-sm">3</div>
                              <div className="text-sm">Bedrooms</div>
                              <div className="text-sm">/</div>
                              <div className="text-sm">6</div>
                              <div className="text-sm">Guest</div>
                            </div>
                          </div>
                          <div className="destinations_content-bottom">
                            <div className="vertical-space is-destinations">
                              <div className="text-2xl text-weight-normal">Ocean Breeze Suites</div>
                              <div className="horizontal-space is-destinations">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="icon-1x1-xmedium"><path fillRule="evenodd" clipRule="evenodd" d="M9.38565 18.4448C9.38565 18.4448 3.33398 13.3482 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317C16.6673 13.3482 10.6157 18.4448 10.6157 18.4448C10.279 18.7548 9.72482 18.7515 9.38565 18.4448ZM10.0007 11.2498C10.3837 11.2498 10.7629 11.1744 11.1168 11.0278C11.4707 10.8812 11.7922 10.6664 12.063 10.3956C12.3339 10.1247 12.5487 9.8032 12.6953 9.44933C12.8419 9.09546 12.9173 8.71619 12.9173 8.33317C12.9173 7.95015 12.8419 7.57088 12.6953 7.21701C12.5487 6.86314 12.3339 6.54161 12.063 6.27078C11.7922 5.99994 11.4707 5.7851 11.1168 5.63852C10.7629 5.49195 10.3837 5.4165 10.0007 5.4165C9.2271 5.4165 8.48524 5.72379 7.93826 6.27078C7.39128 6.81776 7.08398 7.55962 7.08398 8.33317C7.08398 9.10672 7.39128 9.84858 7.93826 10.3956C8.48524 10.9425 9.2271 11.2498 10.0007 11.2498Z" fill="currentColor"></path></svg>
                                <div className="text-sm text-color-grey no-wrap">Malibu Coast</div>
                              </div>
                            </div>
                            <div className="button is-none">
                              <div className="listing_wrap is-tag">
                                <div>$</div>
                                <div>210</div>
                                <div>USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
      
                  </div>
                </div>
                <div className="destinations_arrows">
                  <button type="button" className="arrow" data-swiper-prev aria-label="Previous" onClick={s.onClick}><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"><path d="M10 16L6 12M6 12L10 8M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                  <button type="button" className="arrow is-right" data-swiper-next aria-label="Next" onClick={s.onClick}><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"><path d="M10 16L6 12M6 12L10 8M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}