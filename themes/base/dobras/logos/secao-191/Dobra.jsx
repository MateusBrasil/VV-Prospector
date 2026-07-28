"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-191
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
  //   // stayli-property-testimonials — no local logic. This is a static reveal GRID of
  //   // three testimonial cards (section_testimonials-two), NOT a slider — so no Swiper
  //   // is loaded here (unlike the home/listings testimonials fade carousel). The only
  //   // motion is the [data-reveal] cascade handled by the shared
  //   // /stayli/scripts/scroll-reveal.js (IntersectionObserver, fail-safe, no GSAP).
  //   // Stub kept for the 4-file convention.
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
    <section className="dobra" data-dobra="logos-secao-191" ref={raiz}>
      <div className="page-wrapper">
          <div className="section_testimonials-two">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="testimonials_content-2">
                  <div className="testimonials_title-wrap">
                    <div className="text-subtitle" data-reveal>testimonials</div>
                    <h2 className="heading-style-h2" data-reveal>{s.titulo}</h2>
                  </div>
                  <div className="testimonials_grid">
                    <div className="testimonials_item-sec" data-reveal>
                      <div className="custom_icon">
                        <img src={s.imagem} loading="lazy" alt="" className="icon-1x1-medium" />
                      </div>
                      <div className="text-2xl">&quot;We booked this for our honeymoon and it exceeded every expectation. Waking up to those views with a coffee on the terrace is something we'll never forget.&quot;</div>
                      <div className="testimonials_item-author_wrap is-third">
                        <div className="author_wrap is-sec">
                          <img src={s.imagem2} loading="lazy" alt="Olivia Bennett" />
                        </div>
                        <div className="vertical-space is-testimonials-sec">
                          <div className="text-base">Olivia Bennett</div>
                          <div className="text-xs text-color-grey">Honeymooner</div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials_item-sec" data-reveal>
                      <div className="custom_icon">
                        <img src={s.imagem3} loading="lazy" alt="" className="icon-1x1-medium" />
                      </div>
                      <div className="text-2xl">&quot;Fast wifi, a proper desk, and spotless rooms — I got more done here than at any hotel. Quiet, comfortable, and effortless from check-in to checkout.&quot;</div>
                      <div className="testimonials_item-author_wrap is-third">
                        <div className="author_wrap is-sec">
                          <img src={s.imagem4} loading="lazy" alt="James Carter" />
                        </div>
                        <div className="vertical-space is-testimonials-sec">
                          <div className="text-base">James Carter</div>
                          <div className="text-xs text-color-grey">Remote Worker</div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials_item-sec" data-reveal>
                      <div className="custom_icon">
                        <img src={s.imagem5} loading="lazy" alt="" className="icon-1x1-medium" />
                      </div>
                      <div className="text-2xl">&quot;Plenty of room for the kids and a kitchen that made cooking together easy. Stylish yet genuinely family-friendly — honestly, we didn't want to leave.&quot;</div>
                      <div className="testimonials_item-author_wrap is-third">
                        <div className="author_wrap is-sec">
                          <img src={s.imagem6} loading="lazy" alt="Priya Sharma" />
                        </div>
                        <div className="vertical-space is-testimonials-sec">
                          <div className="text-base">Priya Sharma</div>
                          <div className="text-xs text-color-grey">Family Vacationer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}