"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-47
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
  //   // Aurae — Cta Section
  //   // No section-specific JS. All motion is driven by the shared
  //   // /aurae/scripts/reveal.js (loaded as a classic <script>):
  //   //   - animation="section-heading"  → SplitText char reveal on the two headings,
  //   //   - animation="section-description" → SplitText line reveal on the paragraph,
  //   //   - .scroll-into-view (button-wrap) → fade + slide-up on enter,
  //   //   - .img_parallax (cta-img) → continuous scrub parallax tied to .section_cta.
  //   // prefers-reduced-motion neutralises everything and the content stays visible.
  //   
  //   // reveal.js — decorative scroll reveals (S3 + S4), GSAP ScrollTrigger + SplitText.
  //   // Decoded from webflow.js (IX3/GSAP system):
  //   //   [animation="section-heading"]: SplitText CHARS, y 50% + opacity, stagger amount .3,
  //   //       scroll start "top 70%", play once.
  //   //   [animation="section-description"]: SplitText LINES, y 50% + opacity, stagger amount
  //   //       .3, same trigger.
  //   //   .scroll-into-view: plain block fade + slide-up.
  //   //   .stats_images-grid imgs: scale 1.5→1 + blur 5px→0 on enter.
  //   //   .img_parallax (CTA): continuous parallax (scrub y).
  //   // prefers-reduced-motion neutralises everything. Elements inside the custom-animated
  //   // sections (statement / steps / testimonial) are excluded — handled in scroll-sections.js.
  //   (function () {
  //     function init() {
  //       gsap.registerPlugin(ScrollTrigger, SplitText);
  //   
  //       const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //       const EXCLUDE = ".features-scroll_wrapper, .steps_scroll-wrapper, .testimonial_layout";
  //   
  //       // SplitText reveal: pieces (chars|lines) rise from y 50% + fade, staggered on scroll.
  //       function splitReveal(selector, type, stagger) {
  //         const els = gsap.utils
  //           .toArray(selector)
  //           .filter((el) => !el.closest(EXCLUDE) && (el.textContent ?? "").trim().length > 0);
  //         els.forEach((el) => {
  //           el.setAttribute("aria-label", el.textContent ?? "");
  //           // For char reveals, ALSO split words ("words,chars") so each word stays an
  //           // unbreakable inline-block unit. The stagger still targets every char.
  //           const splitType = type === "chars" ? "words,chars" : type;
  //           const split = new SplitText(el, { type: splitType, aria: "hidden", linesClass: "split-line" });
  //           const pieces = type === "chars" ? split.chars : split.lines;
  //           gsap.from(pieces, {
  //             yPercent: 50,
  //             opacity: 0,
  //             duration: 0.8,
  //             ease: "power3.out",
  //             stagger: { amount: stagger },
  //             scrollTrigger: { trigger: el, start: "top 75%", once: true },
  //           });
  //         });
  //       }
  //   
  //       function run() {
  //         // --- Section headings (chars) + descriptions (lines) — faithful split reveals ---
  //         if (reduce) {
  //           gsap.set(
  //             gsap.utils.toArray(
  //               '[animation="section-heading"], [animation="section-description"], .scroll-into-view'
  //             ),
  //             { clearProps: "all" }
  //           );
  //         } else {
  //           splitReveal('[animation="section-heading"]', "chars", 0.3);
  //           splitReveal('[animation="section-description"]', "lines", 0.3);
  //   
  //           // --- .scroll-into-view: plain block fade + slide-up (not split) ---
  //           const blocks = gsap.utils
  //             .toArray(".scroll-into-view")
  //             .filter((el) => !el.closest(EXCLUDE));
  //           blocks.forEach((el) => {
  //             gsap.fromTo(
  //               el,
  //               { opacity: 0, y: "1.5rem" },
  //               {
  //                 opacity: 1,
  //                 y: 0,
  //                 duration: 0.8,
  //                 ease: "power3.out",
  //                 scrollTrigger: { trigger: el, start: "top 85%", once: true },
  //               }
  //             );
  //           });
  //         }
  //   
  //         // --- Stats images: scale + blur reveal ---
  //         const statsImgs = gsap.utils.toArray(".stats_images-grid .img");
  //         if (statsImgs.length && !reduce) {
  //           const grid = document.querySelector(".stats_images-grid");
  //           gsap.fromTo(
  //             statsImgs,
  //             { scale: 1.5, filter: "blur(5px)" },
  //             {
  //               scale: 1,
  //               filter: "blur(0px)",
  //               duration: 1.2,
  //               ease: "power2.out",
  //               stagger: 0.1,
  //               scrollTrigger: { trigger: grid, start: "top 85%", once: true },
  //             }
  //           );
  //         }
  //   
  //         // --- Parallax images (scrub). SECTION images only: hero parallaxes are removed and
  //         // the contact background is excluded (it gets a load zoom instead). ---
  //         if (!reduce) {
  //           const parallaxImgs = gsap.utils
  //             .toArray(".img_parallax")
  //             .filter((el) => !el.classList.contains("is-hero") && !el.closest(".contact_bg"));
  //           parallaxImgs.forEach((p) => {
  //             gsap.fromTo(
  //               p,
  //               { yPercent: -14 },
  //               {
  //                 yPercent: 14,
  //                 ease: "none",
  //                 scrollTrigger: {
  //                   trigger: p.closest(".section_cta") || p,
  //                   start: "top bottom",
  //                   end: "bottom top",
  //                   scrub: 1,
  //                 },
  //               }
  //             );
  //           });
  //         }
  //   
  //         ScrollTrigger.refresh();
  //       }
  //   
  //       // Wait for fonts before splitting (line breaks depend on the rendered font), with a
  //       // timeout fallback so a slow font never blocks the reveals.
  //       function start() {
  //         if (document.fonts?.ready) {
  //           let done = false;
  //           const go = () => { if (!done) { done = true; run(); } };
  //           document.fonts.ready.then(go);
  //           setTimeout(go, 600);
  //         } else {
  //           run();
  //         }
  //       }
  //   
  //       start();
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-47" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_cta">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
              <div className="container-large">
                <div className="cta_layout">
                  <div className="cta_top">
                    <div className="max-heading is-38rem">
                      <div animation="section-heading" className="h1 text-color-subtle">Ready to <em className="italic-heading">elevate</em> your</div>
                    </div>
                    <div className="cta_img"><img src={s.imagem} loading="lazy" data-w-id="616fb238-8f3d-54bb-c704-ab701613095b" alt="Close-up of a serene person's face with closed eyes, partially obscured by translucent reflections." className="img_parallax" /></div>
                  </div>
                  <div className="align-center">
                    <div className="max-heading is-26rem">
                      <div animation="section-heading" className="h1"><span className="italic-heading">{s.rotulo}</span> routine?</div>
                    </div>
                  </div>
                  <div className="cta_bottom">
                    <div className="max-description is-22rem">
                      <div animation="section-description" className="text-color-secondary">Experience clean, science-led skincare designed to support healthy skin—day after day.</div>
                    </div>
                    <div className="button-wrap scroll-into-view">
                      <a href="/shop" className="button-component w-inline-block">
                        <div className="button_text">Shop Now</div>
                        <div className="button_background"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-section-medium"></div>
          </section>
        </div>
    </section>
  );
}