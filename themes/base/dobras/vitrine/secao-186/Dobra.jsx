"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-186
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
  //   // Aurae — Testimonials Section
  //   // No section-specific JS. The display heading ("What they are saying") reveals
  //   // character by character via [animation="section-heading"], driven by the shared
  //   // /aurae/scripts/reveal.js (GSAP SplitText). The three testimonial cards sit in their
  //   // scattered editorial positions through pure CSS (.testimonial_layout, excluded from the
  //   // reveal system); /aurae/scripts/scroll-sections.js owns that layout and renders the cards
  //   // "dry" with no entrance animation. The data-w-id attributes are kept as structural hooks.
  //   
  //   // scroll-sections.js — STRUCTURAL scroll interactions (S2, not decorative reveals).
  //   // These sections are visually broken/incomplete without their scroll behaviour:
  //   //   - .steps_scroll-wrapper (300vh): pinned card DECK that swaps cards as you scroll.
  //   //   - .testimonial_layout (100vh): the 3 absolute cards drift/reveal into their
  //   //     scattered editorial positions on scroll.
  //   // prefers-reduced-motion → no pinning/scrub; sections fall back to their static state.
  //   (function () {
  //     function init() {
  //       gsap.registerPlugin(ScrollTrigger);
  //   
  //       const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       function initStepsDeck() {
  //         const wrapper = document.querySelector(".steps_scroll-wrapper");
  //         const layout = wrapper?.querySelector(".steps_layout");
  //         const cards = wrapper ? gsap.utils.toArray(".step_card-wrapper") : [];
  //         if (!wrapper || !layout || cards.length < 2) return;
  //   
  //         const c1 = wrapper.querySelector(".step_card-wrapper.is-one");
  //         const c2 = wrapper.querySelector(".step_card-wrapper.is-two");
  //         const c3 = wrapper.querySelector(".step_card-wrapper.is-three");
  //   
  //         if (reduce) {
  //           cards.forEach((c) => gsap.set(c, { opacity: 1, clearProps: "transform" }));
  //           return;
  //         }
  //   
  //         // Pinned card DECK — DESKTOP ONLY (≥992). On ≤991 the cards become a Swiper slider,
  //         // so here we only build the deck on desktop and tear it down when the viewport drops
  //         // to tablet/mobile. Re-evaluated on every breakpoint change.
  //         const desktop = window.matchMedia("(min-width: 992px)");
  //         let tl = null;
  //   
  //         const build = () => {
  //           // Choreography decoded verbatim from webflow.js IX2 (each action duration 0.2):
  //           //   c1: y -200% @0.1, opacity 0 @0.14   (front card slides up & out)
  //           //   c2: scale 1 + x 0 @0.14             (next card scales to front)
  //           //   c2: y -200% @0.4, opacity 0 @0.44   (exits)
  //           //   c3: scale 1 + x 0 @0.44             (to front, holds)
  //           tl = gsap.timeline({
  //             scrollTrigger: {
  //               trigger: wrapper,
  //               start: "top top",
  //               end: "bottom bottom",
  //               scrub: 1,
  //               pin: layout,
  //               pinSpacing: false,
  //             },
  //           });
  //           if (c1) tl.to(c1, { yPercent: -200, ease: "none", duration: 0.2 }, 0.1)
  //                     .to(c1, { opacity: 0, ease: "none", duration: 0.2 }, 0.14);
  //           if (c2) tl.to(c2, { scale: 1, x: 0, ease: "none", duration: 0.2 }, 0.14)
  //                     .to(c2, { yPercent: -200, ease: "none", duration: 0.2 }, 0.4)
  //                     .to(c2, { opacity: 0, ease: "none", duration: 0.2 }, 0.44);
  //           if (c3) tl.to(c3, { scale: 1, x: 0, ease: "none", duration: 0.2 }, 0.44);
  //           tl.to({}, { duration: 0.16 }, 0.84); // hold c3 at front to the end of the pin
  //         };
  //   
  //         const teardown = () => {
  //           if (tl) {
  //             tl.scrollTrigger?.kill();
  //             tl.kill();
  //             tl = null;
  //           }
  //           // Clear the inline transforms/opacity GSAP left so the slider sees clean cards.
  //           cards.forEach((c) => gsap.set(c, { clearProps: "transform,opacity" }));
  //         };
  //   
  //         const apply = () => {
  //           if (desktop.matches) {
  //             if (!tl) build();
  //           } else {
  //             teardown();
  //           }
  //         };
  //         apply();
  //         desktop.addEventListener("change", apply);
  //       }
  //   
  //       // NOTE: the testimonial cards intentionally have NO entrance animation — they render
  //       // "dry" in their scattered CSS positions.
  //   
  //       function initStatementScroll() {
  //         // Decoded from webflow.js IX2:
  //         //   [heading]      → yPercent -200% (scrolls up & out), completes early (~0.11)
  //         //   .statement-img → xPercent -100% (product slides left),   completes ~0.5
  //         const wrapper = document.querySelector(".features-scroll_wrapper");
  //         const heading = wrapper?.querySelector("[heading]");
  //         const img = wrapper?.querySelector(".statement-img");
  //         if (!wrapper || (!heading && !img)) return;
  //   
  //         const desktop = window.matchMedia("(min-width: 992px)").matches;
  //         if (reduce || !desktop) return;
  //   
  //         const section = document.querySelector(".section_statement");
  //         const tl = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: wrapper,
  //             start: "top top",
  //             end: "+=100%",
  //             scrub: 1,
  //             invalidateOnRefresh: true, // recompute the centring offset on resize/refresh
  //           },
  //         });
  //         // The heading RISES + FADES with an accelerating ease, and the bottle DRIFTS left
  //         // while gently receding (scale 0.9) and RISES to the vertical centre of the viewport.
  //         if (heading) tl.to(heading, { yPercent: -175, autoAlpha: 0, ease: "power2.in", duration: 0.4 }, 0);
  //         if (img) {
  //           tl.to(
  //             img,
  //             {
  //               xPercent: -115,
  //               scale: 0.9,
  //               y: () => {
  //                 if (!section) return 0;
  //                 const s = section.getBoundingClientRect();
  //                 const i = img.getBoundingClientRect();
  //                 const centreInViewport = i.top - s.top + i.height / 2; // section pinned at top:0
  //                 return window.innerHeight / 2 - centreInViewport;
  //               },
  //               ease: "power2.inOut",
  //               duration: 0.5,
  //             },
  //             0.04
  //           );
  //         }
  //         tl.to({}, { duration: 0.5 }); // pad so the timeline spans the full +=100% range
  //       }
  //   
  //       function initFeaturesSnap() {
  //         // Desktop-only gentle scroll-snap so the statement + each feature pin settles into
  //         // place when the user stops scrolling.
  //         const desktop = window.matchMedia("(min-width: 992px)").matches;
  //         if (reduce || !desktop) return;
  //         const wrapper = document.querySelector(".features-scroll_wrapper");
  //         if (!wrapper) return;
  //         const items = gsap.utils.toArray(".feature_item-wrapper", wrapper);
  //         if (!items.length) return;
  //   
  //         const phasePoints = () => {
  //           const total = wrapper.offsetHeight - window.innerHeight;
  //           if (total <= 0) return [0, 1];
  //           const wTop = wrapper.getBoundingClientRect().top + window.scrollY;
  //           const pts = [0];
  //           items.forEach((it) => {
  //             const y = it.getBoundingClientRect().top + window.scrollY;
  //             const p = (y - wTop) / total;
  //             if (p > 0.04 && p < 0.96) pts.push(p);
  //           });
  //           pts.push(1);
  //           return pts;
  //         };
  //   
  //         ScrollTrigger.create({
  //           trigger: wrapper,
  //           start: "top top",
  //           end: "bottom bottom",
  //           snap: {
  //             snapTo: (value) =>
  //               phasePoints().reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a)),
  //             duration: { min: 0.2, max: 0.5 }, // gentle, not a hard full-page snap
  //             delay: 0.12, // only after the user stops scrolling
  //             ease: "power1.inOut",
  //           },
  //         });
  //       }
  //   
  //       initStatementScroll();
  //       initStepsDeck();
  //       initFeaturesSnap();
  //       ScrollTrigger.refresh();
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
    <section className="dobra" data-dobra="vitrine-secao-186" ref={raiz}>
      <div className="page-wrapper">
          <div>
            <section className="section_testimonial-heading">
              <div className="padding-global">
                <div className="container-large">
                  <div className="testimonial_heading-wrapper">
                    <div className="text-background">
                      <div className="testimonial_display-text is-one"><div animation="section-heading">What they</div></div>
                      <div className="testimonial_display-text is-two"><div animation="section-heading">are <span className="italic-heading">{s.rotulo}</span></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section_testimonial">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="testimonial_layout">
                    <div data-w-id="5ed627b6-c1a6-6c84-87a8-cfcb3b7293a1" className="testimonial_card-wrapper is-one">
                      <div className="testimonial_card">
                        <div className="testimonial_card-image"><img loading="lazy" src={s.imagem} alt="Close-up of a woman with light brown skin, freckles, and natural makeup resting her face on her hand under warm lighting." sizes="(max-width: 576px) 100vw, 576px" srcSet="https://d173woph5zl366.cloudfront.net/aurae/images/test-card-01-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aurae/images/test-card-01.avif 576w" className="img" /></div>
                        <div className="testimonial_card-content">
                          <div className="testimonial_star-wrapper">
                            <img loading="lazy" src={s.imagem2} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem3} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem4} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem5} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem6} alt="" className="testimonial-star" />
                          </div>
                          <div>"I stopped looking for the next miracle product and started seeing actual change in my skin. That's the difference AURAE made."</div>
                          <div className="testimonial_user-wrapper">
                            <img loading="lazy" src={s.imagem7} alt="Elena Rodriguez" className="image" />
                            <div>
                              <div>Elena Rodriguez</div>
                              <div className="text-sm text-color-secondary">Creative director, Los Angeles</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="5ed627b6-c1a6-6c84-87a8-cfcb3b7293a3" className="testimonial_card-wrapper is-two">
                      <div className="testimonial_card">
                        <div className="testimonial_card-image"><img loading="lazy" src={s.imagem8} alt="Close-up of two faces with freckles and blue eyes, highlighting natural skin texture and makeup." sizes="(max-width: 576px) 100vw, 576px" srcSet="https://d173woph5zl366.cloudfront.net/aurae/images/test-card-02-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aurae/images/test-card-02.avif 576w" className="img" /></div>
                        <div className="testimonial_card-content">
                          <div className="testimonial_star-wrapper">
                            <img loading="lazy" src={s.imagem9} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem10} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem11} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem12} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem13} alt="" className="testimonial-star" />
                          </div>
                          <div>"My routine went from ten steps down to three, and my skin has never looked calmer. AURAE simplified everything without cutting a single corner."</div>
                          <div className="testimonial_user-wrapper">
                            <img loading="lazy" src={s.imagem14} alt="Maya Okonkwo" className="image" />
                            <div>
                              <div>Maya Okonkwo</div>
                              <div className="text-sm text-color-secondary">Magazine editor, New York</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="5ed627b6-c1a6-6c84-87a8-cfcb3b7293a5" className="testimonial_card-wrapper is-three">
                      <div className="testimonial_card">
                        <div className="testimonial_card-image"><img loading="lazy" src={s.imagem15} alt="Close-up of a woman's lower face, neck, and shoulder with smooth skin in warm lighting." sizes="(max-width: 576px) 100vw, 576px" srcSet="https://d173woph5zl366.cloudfront.net/aurae/images/test-card-03-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aurae/images/test-card-03.avif 576w" className="img" /></div>
                        <div className="testimonial_card-content">
                          <div className="testimonial_star-wrapper">
                            <img loading="lazy" src={s.imagem16} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem17} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem18} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem19} alt="" className="testimonial-star" />
                            <img loading="lazy" src={s.imagem20} alt="" className="testimonial-star" />
                          </div>
                          <div>"Three weeks in, the redness I'd fought for years finally settled. It's the first time a brand actually delivered what it promised."</div>
                          <div className="testimonial_user-wrapper">
                            <img loading="lazy" src={s.imagem21} alt="Priya Nair" className="image" />
                            <div>
                              <div>Priya Nair</div>
                              <div className="text-sm text-color-secondary">Photographer, London</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_spacer"></div>
                </div>
              </div>
              <div className="padding-section-medium"></div>
            </section>
          </div>
        </div>
    </section>
  );
}