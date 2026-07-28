"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-70
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
  //   // stayli-home-about — no local logic. The scroll reveals (tag, lead, benefit
  //   // items, Explore button and the about image cluster) are driven by the shared
  //   // /stayli/scripts/scroll-reveal.js (IntersectionObserver → `.is-in`, fail-safe,
  //   // no GSAP). Stub kept for the 4-file convention.
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
    <section className="dobra" data-dobra="vitrine-secao-70" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_about">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="about_columns">
                  <div className="about_left-column">
                    <div data-reveal>
                      <div className="main_tag">
                        <div className="text-base text-color-grey">Find the ideal spot for your next adventure.</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-width-xlarge">
                    <div className="main-wrap is-about">
                      <div className="text-wrap" data-reveal>
                        <div className="text-4xl">
                          Discover the world’s most extraordinary stays with Stayli. Whether you’re planning a
                          romantic getaway, a family vacation, or a business trip, we have the perfect space
                          waiting for you.
                        </div>
                      </div>
                      <div className="about_list">
                        <div className="about_item" data-reveal>
                          <div className="custom_icon">
                            <img src={s.imagem} loading="lazy" alt="" className="icon-1x1-medium" />
                          </div>
                          <div className="spacer-small"></div>
                          <div className="text-2xl">Remote Work Destinations</div>
                          <div className="spacer-xsmall"></div>
                          <p className="text-base text-color-grey">{s.texto}</p>
                        </div>
                        <div className="about_item" data-reveal>
                          <div className="custom_icon">
                            <img src={s.imagem2} loading="lazy" alt="" className="icon-1x1-medium" />
                          </div>
                          <div className="spacer-small"></div>
                          <div className="text-2xl">Family getaways</div>
                          <div className="spacer-xsmall"></div>
                          <p className="text-base text-color-grey">{s.texto2}</p>
                        </div>
                      </div>
                      <a href="/listings" className="button w-button" data-reveal>{s.acao}</a>
                    </div>
                  </div>
                </div>
                <div className="spacer-large"></div>
                <div className="about_images-wrap">
                  <div className="about_image-1" data-reveal>
                    <div className="about_image-1_internal-div">
                      <img src={s.imagem3} loading="lazy" sizes="(max-width: 991px) 100vw, 800px" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/about-1_1about-1.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/about-1_1about-1.webp 800w, https://d173woph5zl366.cloudfront.net/stayli/images/about-1_1about-1.webp 1080w, https://d173woph5zl366.cloudfront.net/stayli/images/about-1_1about-1.webp 1552w" alt="" className="img" />
                    </div>
                  </div>
                  <div className="about_image-2" data-reveal>
                    <div className="about_image-2_internal-div">
                      <img src={s.imagem4} loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/about-2_1about-2.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/about-2_1about-2.webp 752w" alt="" className="img" />
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