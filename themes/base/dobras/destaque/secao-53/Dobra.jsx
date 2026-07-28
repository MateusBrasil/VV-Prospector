"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-53
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
  //   // Aurae — Statement Section
  //   // No section-specific JS. This section lives inside .features-scroll_wrapper, whose
  //   // structural scroll choreography is driven by the shared /aurae/scripts/scroll-sections.js:
  //   //   - the [heading] block rises + fades out as you scroll past it,
  //   //   - the .statement-img bottle drifts left, scales down and re-centres vertically.
  //   // On ≤991px (or with prefers-reduced-motion) the scroll timeline is skipped and the
  //   // section renders in its static, fully-visible state.
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-53" ref={raiz}>
      <div className="page-wrapper">
          <div className="features-scroll_wrapper">
            <section className="section_statement">
              <div className="padding-global">
                <div className="container-large">
                  <div className="statement_layout">
                    <div heading="" className="max-heading is-49rem">
                      <h2 animation="section-heading" className="h3"><span className="text-color-subtle">{s.rotulo}</span> <span className="italic-heading text-color-subtle">{s.rotulo2}</span> to <span className="italic-heading">{s.rotulo3}</span> and <span className="italic-heading">{s.rotulo4}</span> your natural glow</h2>
                    </div>
                    <div className="statement-img">
                      <div className="statement-img-h"><img src={s.imagem} loading="lazy" alt="Amber glass bottle with olive green dropper cap and label reading Aurae Skin Face Oil." className="img" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="statement_animation"><img src={s.imagem2} loading="lazy" alt="" className="logo_visual" /></div>
            </section>
          </div>
        </div>
    </section>
  );
}