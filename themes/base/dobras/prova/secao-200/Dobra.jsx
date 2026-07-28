"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-200
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
  //   // stayli-testimonials — Swiper path C (inline fade carousel). NOT a shared
  //   // engine script: the testimonials slider is its own Swiper instance with the
  //   // crossFade transition, so it inits here (mirrors the template's inline
  //   // <script> in TestimonialsSection.astro). The scroll reveal (.is-in on
  //   // [data-reveal]) is handled by the shared /stayli/scripts/scroll-reveal.js.
  //   //
  //   // Wrapped in an IIFE — NO top-level `export` (a classic <script src> parse-error
  //   // would silently kill the file). Guarded on Swiper so a CDN miss never throws.
  //   (function () {
  //     if (typeof Swiper === "undefined") return;
  //   
  //     document.querySelectorAll(".testimonials_slider[data-testi-swiper]").forEach(function (root) {
  //       var scope = root.closest(".testimonials_content");
  //       var swiper = new Swiper(root, {
  //         slidesPerView: 1,
  //         spaceBetween: 0,
  //         speed: 600,
  //         rewind: true,
  //         effect: "fade",
  //         fadeEffect: { crossFade: true },
  //         keyboard: { enabled: true },
  //       });
  //   
  //       var prev = scope && scope.querySelector("[data-testi-prev]");
  //       var next = scope && scope.querySelector("[data-testi-next]");
  //       if (prev) prev.addEventListener("click", function () { swiper.slidePrev(); });
  //       if (next) next.addEventListener("click", function () { swiper.slideNext(); });
  //     });
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
    <section className="dobra" data-dobra="prova-secao-200" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_testimonials">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="testimonials_content" data-reveal>
                  <div className="testimonials_slider swiper" data-testi-swiper>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonials_item">
                          <div className="testimonials_item-content">
                            <h3 className="heading-style-h3">{s.subtitulo}</h3>
                            <div className="testimonials_item-author_wrap">
                              <div className="author_wrap">
                                <img src={s.imagem} loading="lazy" alt="Emily Johnson" />
                              </div>
                              <div className="vertical-space is-testimonials">
                                <div className="text-2xl">Emily Johnson</div>
                                <div className="text-base text-color-grey">Travel Blogger</div>
                              </div>
                            </div>
                          </div>
                          <div className="testimonials_item-img_wrap">
                            <div className="testimonials_item-img_inner-wrap">
                              <img src={s.imagem2} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/testimonial-img_1testimonial-img.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/testimonial-img_1testimonial-img.webp 752w" sizes="(max-width: 752px) 100vw, 752px" alt="" className="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonials_item">
                          <div className="testimonials_item-content">
                            <h3 className="heading-style-h3">{s.subtitulo2}</h3>
                            <div className="testimonials_item-author_wrap">
                              <div className="author_wrap">
                                <img src={s.imagem3} loading="lazy" alt="Michael Chen" />
                              </div>
                              <div className="vertical-space is-testimonials">
                                <div className="text-2xl">Michael Chen</div>
                                <div className="text-base text-color-grey">Frequent Traveler</div>
                              </div>
                            </div>
                          </div>
                          <div className="testimonials_item-img_wrap">
                            <div className="testimonials_item-img_inner-wrap">
                              <img src={s.imagem4} loading="lazy" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/contact-3_1contact-3.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/contact-3_1contact-3.webp 800w, https://d173woph5zl366.cloudfront.net/stayli/images/contact-3_1contact-3.webp 1080w, https://d173woph5zl366.cloudfront.net/stayli/images/contact-3_1.webp 1152w" sizes="(max-width: 752px) 100vw, 752px" alt="" className="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonials_nav">
                    <button type="button" className="arrow is-testimonial" data-testi-prev aria-label="Previous testimonial" onClick={s.onClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium"><path d="M10 16L6 12M6 12L10 8M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                    <button type="button" className="arrow is-testimonial" data-testi-next aria-label="Next testimonial" onClick={s.onClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium is-reverse"><path d="M10 16L6 12M6 12L10 8M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}