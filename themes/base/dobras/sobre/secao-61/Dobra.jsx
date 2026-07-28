"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-61
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
  //   // stayli-our-mission — no local logic. The scroll reveals ([data-reveal] → .is-in,
  //   // IntersectionObserver, fail-safe, no GSAP) are driven by the shared
  //   // /stayli/scripts/scroll-reveal.js. Stub kept for the 4-file convention.
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
    <section className="dobra" data-dobra="sobre-secao-61" ref={raiz}>
      <div className="page-wrapper">
          <div className="our-mission_section">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="our-mission_content">
                  <div className="our-mission_title-wrap">
                    <div className="text-subtitle" data-reveal>Our mission</div>
                    <h2 className="heading-style-h2" data-reveal>{s.titulo}</h2>
                  </div>
                  <div className="our-mission_content-wrap">
                    <div className="our-mission_main-img" data-reveal>
                      <img src={s.imagem} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/img-1_1img-1.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/img-1_1img-1.webp 800w, https://d173woph5zl366.cloudfront.net/stayli/images/img-1_1img-1.webp 1080w, https://d173woph5zl366.cloudfront.net/stayli/images/img-1_1img-1.webp 1152w" alt="" className="img" />
                    </div>
                    <div className="our-mission_column-right">
                      <div className="our-mission_images-grid">
                        <div className="our-mission_img" data-reveal>
                          <img src={s.imagem2} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/image-2_1image-2.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/image-2_1.webp 552w" alt="" className="img" />
                        </div>
                        <div className="our-mission_img" data-reveal>
                          <img src={s.imagem3} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/stayli/images/image-3_1image-3.webp 500w, https://d173woph5zl366.cloudfront.net/stayli/images/image-3_1.webp 552w" alt="" className="img" />
                        </div>
                        <div id="w-node-c2dd0251-66c1-c61f-ccbc-2924844af009-843a1d34" className="our-mission_p-wrap">
                          <p className="text-base text-color-grey" data-reveal>{s.texto}</p>
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