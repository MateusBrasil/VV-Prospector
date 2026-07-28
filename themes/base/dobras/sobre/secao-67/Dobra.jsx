"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-67
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
  //   /* coverly-history — component boot logic.
  //    *
  //    * The shared scroll-reveal script (/coverly/scripts/scroll-reveal.js)
  //    * handles the slide-in and image reveal patterns for this section. The
  //    * Finsweet number-count pattern is the only one we own locally, because
  //    * the shared script resets `[fs-numbercount-end]` counters to "0" at
  //    * init and animates up only when the element scrolls into view. For an
  //    * above-the-fold section (and for static QA screenshots) that left the
  //    * stats reading "0" or empty in the captured frame.
  //    *
  //    * The fix:
  //    *   - The markup uses `data-counter-*` attributes instead of
  //    *     `fs-numbercount-*`, so the shared script's selector no longer
  //    *     matches and never resets these elements to "0".
  //    *   - The markup ships the END value as the visible default, so the
  //    *     section reads complete on first paint even before any animation.
  //    *   - This script drives the count-up animation locally via GSAP +
  //    *     ScrollTrigger when the counter scrolls into view, falling back to
  //    *     the static markup value when GSAP is unavailable or the user
  //    *     prefers reduced motion.
  //    */
  //   (function () {
  //     function syncCounterFinalValues() {
  //       document.querySelectorAll("[data-counter-end]").forEach(function (el) {
  //         var end = el.getAttribute("data-counter-end");
  //         if (end != null) el.textContent = end;
  //       });
  //     }
  //   
  //     function initCounters() {
  //       var counters = document.querySelectorAll("[data-counter-end]");
  //       if (!counters.length) return;
  //   
  //       var reduceMotion =
  //         window.matchMedia &&
  //         window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       var hasGsap = typeof window.gsap !== "undefined";
  //       var hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";
  //   
  //       if (reduceMotion || !hasGsap || !hasScrollTrigger) {
  //         syncCounterFinalValues();
  //         return;
  //       }
  //   
  //       window.gsap.registerPlugin(window.ScrollTrigger);
  //   
  //       counters.forEach(function (el) {
  //         var start = Number(el.getAttribute("data-counter-start") || 0);
  //         var end = Number(el.getAttribute("data-counter-end") || 0);
  //         var durMs = Number(el.getAttribute("data-counter-duration") || 2000);
  //   
  //         // Keep the final value visible until the animation actually starts.
  //         el.textContent = String(end);
  //   
  //         window.ScrollTrigger.create({
  //           trigger: el,
  //           start: "top 90%",
  //           once: true,
  //           onEnter: function () {
  //             var obj = { n: start };
  //             window.gsap.to(obj, {
  //               n: end,
  //               duration: durMs / 1000,
  //               ease: "power2.out",
  //               onUpdate: function () {
  //                 el.textContent = String(Math.round(obj.n));
  //               },
  //               onComplete: function () {
  //                 el.textContent = String(end);
  //               },
  //             });
  //           },
  //         });
  //       });
  //     }
  //   
  //     // Run immediately so the values are present even if the page is
  //     // snapshotted before any listeners fire.
  //     syncCounterFinalValues();
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", initCounters);
  //     } else {
  //       initCounters();
  //     }
  //   })();
  //   
  //   /**
  //    * scroll-reveal.js — IntersectionObserver-driven reveal system.
  //    *
  //    * Reveals fire on VIEWPORT VISIBILITY (not a scroll-position threshold). This
  //    * matters when a component is copied into another app/page (e.g. Lovable) where
  //    * the scroll container isn't the window: a ScrollTrigger watching the wrong
  //    * scroller never fires `onEnter`, so a hard-hidden first section stays invisible.
  //    * IntersectionObserver is scroller-agnostic and fires immediately for elements
  //    * already in view — so a first/top section reveals on load, and below-the-fold
  //    * elements reveal as they scroll in.
  //    *
  //    * Patterns (unchanged visually from the ScrollTrigger version):
  //    *   1. [data-reveal] — fade-up (opacity 0 + y 24 → 1 + 0). data-reveal-y overrides offset.
  //    *   2. [data-reveal-slide] / .scroll-slide-left — opacity 0 + x 100 → 1 + 0.
  //    *   3. [data-reveal-image] (+ .img-wrapper / .img) — clip/scale/blur image reveal.
  //    *   4. [fs-numbercount-end] — count-up on view.
  //    */
  //   
  //   // gsap loaded via CDN, attached to window
  //   
  //   function initScrollReveal() {
  //     // Respect reduced motion — show the final (revealed) state, no animation.
  //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //       document.querySelectorAll("[data-reveal], [data-reveal-slide], .scroll-slide-left").forEach((el) => {
  //         el.style.opacity = "1";
  //         el.style.transform = "none";
  //       });
  //       document.querySelectorAll("[data-reveal-image] .img-wrapper").forEach((el) => {
  //         el.style.transform = "translate3d(0,0,0)";
  //       });
  //       document.querySelectorAll("[data-reveal-image] .img").forEach((el) => {
  //         el.style.transform = "translate3d(0,0,0) scale3d(1,1,1)";
  //         el.style.filter = "none";
  //       });
  //       return;
  //     }
  //   
  //     // Observe `els`; when one enters the viewport, run `reveal(el)` once. Fires
  //     // immediately (next frame) for elements already in view at load. If
  //     // IntersectionObserver is unavailable, reveal everything (fail-safe — never
  //     // leave content hidden).
  //     function onVisible(els, reveal) {
  //       if (!els.length) return;
  //       if (typeof IntersectionObserver === "undefined") {
  //         els.forEach(reveal);
  //         return;
  //       }
  //       const io = new IntersectionObserver(
  //         (entries) => {
  //           entries.forEach((entry) => {
  //             if (!entry.isIntersecting) return;
  //             io.unobserve(entry.target);
  //             reveal(entry.target);
  //           });
  //         },
  //         { threshold: 0, rootMargin: "0px 0px -10% 0px" },
  //       );
  //       els.forEach((el) => io.observe(el));
  //     }
  //   
  //     // Pattern 1: [data-reveal] — fade-up (opacity + y)
  //     const els = gsap.utils.toArray("[data-reveal]");
  //     els.forEach((el) => {
  //       const y = Number(el.dataset.revealY ?? 24);
  //       gsap.set(el, { opacity: 0, y });
  //     });
  //     onVisible(els, (el) => {
  //       gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", overwrite: "auto" });
  //     });
  //   
  //     // Pattern 2: [data-reveal-slide] — slideInRight (opacity 0 + translateX(100) → 0)
  //     const slides = gsap.utils.toArray("[data-reveal-slide], .scroll-slide-left");
  //     slides.forEach((el) => {
  //       gsap.set(el, { opacity: 0, x: 100 });
  //     });
  //     onVisible(slides, (el) => {
  //       gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power4.out", overwrite: "auto" });
  //     });
  //   
  //     // Pattern 3: [data-reveal-image] — counter-translation image reveal.
  //     const imageWraps = gsap.utils.toArray("[data-reveal-image]");
  //     imageWraps.forEach((wrap) => {
  //       const innerWrapper = wrap.querySelector(".img-wrapper");
  //       const img = wrap.querySelector(".img");
  //       if (!innerWrapper || !img) return;
  //       // Clear inline transform shorthand so GSAP individual tracking is authoritative.
  //       gsap.set(innerWrapper, { clearProps: "transform" });
  //       gsap.set(img, { clearProps: "transform" });
  //       gsap.set(innerWrapper, { yPercent: -100 });
  //       gsap.set(img, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });
  //     });
  //     onVisible(imageWraps, (wrap) => {
  //       const innerWrapper = wrap.querySelector(".img-wrapper");
  //       const img = wrap.querySelector(".img");
  //       if (!innerWrapper || !img) return;
  //       // Same dur+ease across both sub-tweens to keep the counter-translation locked.
  //       gsap.to(innerWrapper, { yPercent: 0, duration: 1.2, ease: "power4.out" });
  //       gsap.to(img, { yPercent: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" });
  //     });
  //   
  //     // Pattern 4: number counter — counts to fs-numbercount-end on view.
  //     const counters = gsap.utils.toArray("[fs-numbercount-end]");
  //     counters.forEach((el) => {
  //       const start = Number(el.getAttribute("fs-numbercount-start") ?? 0);
  //       el.textContent = String(start); // avoid flash of the final number
  //     });
  //     onVisible(counters, (el) => {
  //       const start = Number(el.getAttribute("fs-numbercount-start") ?? 0);
  //       const end = Number(el.getAttribute("fs-numbercount-end") ?? 0);
  //       const durMs = Number(el.getAttribute("fs-numbercount-duration") ?? 2000);
  //       const obj = { n: start };
  //       gsap.to(obj, {
  //         n: end,
  //         duration: durMs / 1000,
  //         ease: "power2.out",
  //         onUpdate: () => {
  //           el.textContent = String(Math.round(obj.n));
  //         },
  //       });
  //     });
  //   }
  //   
  //   // Auto-initialize on DOM ready
  //   if (typeof window !== "undefined") {
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", initScrollReveal);
  //     } else {
  //       initScrollReveal();
  //     }
  //   }
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="sobre-secao-67" ref={raiz}>
      <section className="section_history">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="w-layout-grid header_grid">
                  <div className="tag scroll-slide-left">History</div>
                  <div id="w-node-_68406c48-925e-06e6-eb59-fa205c0f2319-029f7f71" className="history_layout">
                    <div>
                      <h2 className="scroll-slide-left">{s.titulo}</h2>
                      <div className="spacer-medium"></div>
                      <div className="text-color-secondary scroll-slide-left">
                        For nearly three decades, we’ve been committed to providing
                        reliable insurance solutions tailored to your needs. From our
                        humble beginnings to serving thousands of families and
                        businesses, our mission remains the same: to protect what
                        matters most—with integrity, expertise, and a personal touch
                      </div>
                    </div>
                    <div className="about_img" data-reveal-image="">
                      <div className="img-wrapper">
                        <img src={s.imagem} loading="lazy" sizes="(max-width: 1164px) 100vw, 1164px" srcSet="
                            /coverly/images/e2_1e2.webp  500w,
                            /coverly/images/e2_1e2.webp  800w,
                            /coverly/images/e2_1e2.webp 1080w,
                            /coverly/images/e2_1.webp   1164w
                          " alt="Coverly insurance team meeting" className="img" />
                      </div>
                    </div>
                    <div className="statistic_layout">
                      <div className="statistic_item is-center">
                        <div className="scroll-slide-left">Families protected</div>
                        <div className="statistic_group scroll-slide-left">
                          <div data-counter-duration="2000" data-counter-start="0" data-counter-end="23" className="text-number">
                            23
                          </div>
                          <div className="font-primary">
                            <div className="text-2xl text-color-50">k</div>
                          </div>
                        </div>
                      </div>
                      <div className="statistic_item is-center">
                        <div className="scroll-slide-left">Policy renewal rate</div>
                        <div className="statistic_group scroll-slide-left">
                          <div data-counter-duration="2000" data-counter-start="0" data-counter-end="95" className="text-number">
                            95
                          </div>
                          <div className="font-primary">
                            <div className="text-2xl text-color-50">%</div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-_25f8261e-ef26-6d58-0252-9f2ad75dea65-029f7f71" className="statistic_item is-center">
                        <div className="scroll-slide-left">Vehicles protected</div>
                        <div className="statistic_group scroll-slide-left">
                          <div data-counter-duration="2000" data-counter-start="0" data-counter-end="50" className="text-number">
                            50
                          </div>
                          <div className="font-primary">
                            <div className="text-2xl text-color-50">K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}