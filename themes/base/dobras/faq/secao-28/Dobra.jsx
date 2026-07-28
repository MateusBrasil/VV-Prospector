"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-28
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
  //   // aurae-faq-section — boot stub.
  //   // All behavior is provided by the shared classic scripts loaded in index.html:
  //   //   /aurae/scripts/reveal.js    — section-heading SplitText + .scroll-into-view fade/slide
  //   //   /aurae/scripts/accordion.js — [data-accordion] open/close toggle
  //   // They self-initialize on DOM ready, so nothing is needed here.
  //   
  //   // accordion.js — structural toggle for [data-accordion] (product Shipping/Return + FAQ).
  //   // Animates by measuring the panel's real height and driving max-height to that exact
  //   // value, so the easing spans the visible range in BOTH directions.
  //   (function () {
  //     function init() {
  //       document.querySelectorAll("[data-accordion]").forEach((acc) => {
  //         const head = acc.querySelector("[data-accordion-toggle]");
  //         const text = acc.querySelector(".accordion_text");
  //         if (!head) return;
  //   
  //         head.setAttribute("role", "button");
  //         head.setAttribute("tabindex", "0");
  //   
  //         const startOpen = acc.classList.contains("is-open");
  //         head.setAttribute("aria-expanded", String(startOpen));
  //         // A panel that ships open needs no entrance animation: pin it to its full height.
  //         if (startOpen && text) text.style.maxHeight = "none";
  //   
  //         const open = () => {
  //           head.setAttribute("aria-expanded", "true");
  //           if (!text) {
  //             acc.classList.add("is-open");
  //             return;
  //           }
  //           // Measure the full height while still collapsed (scrollHeight ignores the
  //           // max-height clamp), set it as the target, THEN flip the class.
  //           const target = text.scrollHeight;
  //           text.style.maxHeight = target + "px"; // animates from the current 0
  //           acc.classList.add("is-open"); // icon flip; inline max-height overrides CSS `none`
  //           const done = (e) => {
  //             if (e.propertyName !== "max-height") return;
  //             text.style.maxHeight = "none"; // release so it can reflow freely once expanded
  //             text.removeEventListener("transitionend", done);
  //           };
  //           text.addEventListener("transitionend", done);
  //         };
  //   
  //         const close = () => {
  //           head.setAttribute("aria-expanded", "false");
  //           if (text) {
  //             // Give the transition a concrete start value (none → px) before going to 0.
  //             text.style.maxHeight = text.scrollHeight + "px";
  //             void text.offsetHeight; // force reflow so the next change animates
  //             text.style.maxHeight = "0px";
  //           }
  //           acc.classList.remove("is-open");
  //         };
  //   
  //         const toggle = () => (acc.classList.contains("is-open") ? close() : open());
  //   
  //         head.addEventListener("click", toggle);
  //         head.addEventListener("keydown", (e) => {
  //           if (e.key === "Enter" || e.key === " ") {
  //             e.preventDefault();
  //             toggle();
  //           }
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
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
    <section className="dobra" data-dobra="faq-secao-28" ref={raiz}>
      <div className="page-wrapper">
          <section data-wf--faq-section--variant="base" className="section_faq bg-secondary">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
              <div className="container-small">
                <div className="faq_layout">
                  <div className="max-heading is-38rem">
                    <h2 animation="section-heading" className="text-align-center">Frequently asked <em className="italic-heading">questions</em></h2>
                  </div>
                  <div className="accordion_list-wrapper">
                    <div className="accordion_list">
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae formulas are designed to be gentle and balanced, making them suitable for all skin types—including sensitive skin.</div>
                        </div>
                      </div>
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo2}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Most people begin to notice visible improvements in their skin within 2–4 weeks of consistent use. However, results can vary depending on your skin type and the specific concerns you are targeting.</div>
                        </div>
                      </div>
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo3}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae products are formulated to integrate easily into your daily skincare routine. For best results, follow the recommended usage instructions and apply consistently as part of your morning and evening regimen.</div>
                        </div>
                      </div>
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo4}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae is committed to ethical skincare. Our products are cruelty-free and are never tested on animals.</div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_list is-hide">
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo5}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae formulas are designed to be gentle and balanced, making them suitable for all skin types—including sensitive skin.</div>
                        </div>
                      </div>
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo6}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae formulas are designed to be gentle and balanced, making them suitable for all skin types—including sensitive skin.</div>
                        </div>
                      </div>
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo7}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae formulas are designed to be gentle and balanced, making them suitable for all skin types—including sensitive skin.</div>
                        </div>
                      </div>
                      <div className="accordion_item scroll-into-view" data-accordion="">
                        <div className="accordion_heading" data-accordion-toggle="">
                          <h3 className="text-2xl">{s.subtitulo8}</h3>
                          <div className="accordion_icon-wrapper">
                            <div className="line-horizontal"></div>
                            <div className="line_vertical"></div>
                          </div>
                        </div>
                        <div className="accordion_text">
                          <div className="spacer-medium"></div>
                          <div className="text-color-secondary">Yes. Aurae formulas are designed to be gentle and balanced, making them suitable for all skin types—including sensitive skin.</div>
                        </div>
                      </div>
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