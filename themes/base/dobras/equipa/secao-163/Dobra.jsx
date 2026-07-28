"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-163
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
  //   /* Coverly — Team
  //      No per-component logic: the shared `/coverly/scripts/scroll-reveal.js`
  //      handles `[data-reveal]` for the header (fade-up) and `.scroll-slide-left`
  //      for each `.team_card` (staggered slide-in) automatically on DOMContentLoaded. */
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
    <section className="dobra" data-dobra="equipa-secao-163" ref={raiz}>
      <section className="section_team">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="vertical-center">
                  <div data-reveal="" className="tag scroll-into-view">Teams</div>
                  <div className="spacer-medium"></div>
                  <h2 data-reveal="" className="scroll-into-view">{s.titulo}</h2>
                  <div className="spacer-medium"></div>
                  <div data-reveal="" className="text-color-secondary scroll-into-view">Meet the professionals behind our exceptional service.</div>
                </div>
                <div className="spacer">
                  <div style={{height: '4rem'}} className="spacer-desktop"></div>
                  <div style={{height: '3rem'}} className="spacer-tablet"></div>
                  <div style={{height: '2rem'}} className="spacer-mobile"></div>
                </div>
                <div className="w-layout-grid team_grid">
                  <div className="team_card scroll-slide-left">
                    <div className="team_space"></div>
                    <div className="team_content">
                      <div>
                        <div className="text-xl">John Doe</div>
                        <div className="spacer-xxsmall"></div>
                        <div className="text-color-secondary">CEO</div>
                      </div>
                      <div className="social_list">
                        <a href={s.destino || '#'} className="social_link w-inline-block" aria-label="John Doe on LinkedIn"><img src={s.imagem} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino2 || '#'} className="social_link w-inline-block" aria-label="John Doe on X"><img src={s.imagem2} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino3 || '#'} className="social_link w-inline-block" aria-label="John Doe on Dribbble"><img src={s.imagem3} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                      </div>
                    </div>
                    <div className="team_img">
                      <img src={s.imagem4} loading="lazy" alt="John Doe, CEO" sizes="(max-width: 767px) 100vw, 768px" srcSet="/coverly/images/img-p-500.webp 500w, /coverly/images/img.webp 768w" className="img" />
                    </div>
                  </div>
                  <div className="team_card scroll-slide-left">
                    <div className="team_space"></div>
                    <div className="team_content">
                      <div>
                        <div className="text-xl">Alex Reed</div>
                        <div className="spacer-xxsmall"></div>
                        <div className="text-color-secondary">COO</div>
                      </div>
                      <div className="social_list">
                        <a href={s.destino4 || '#'} className="social_link w-inline-block" aria-label="Alex Reed on LinkedIn"><img src={s.imagem5} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino5 || '#'} className="social_link w-inline-block" aria-label="Alex Reed on X"><img src={s.imagem6} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino6 || '#'} className="social_link w-inline-block" aria-label="Alex Reed on Dribbble"><img src={s.imagem7} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                      </div>
                    </div>
                    <div className="team_img">
                      <img src={s.imagem8} loading="lazy" alt="Alex Reed, COO" sizes="(max-width: 767px) 100vw, 768px" srcSet="/coverly/images/img-1-p-500.webp 500w, /coverly/images/img-1.webp 768w" className="img" />
                    </div>
                  </div>
                  <div className="team_card scroll-slide-left">
                    <div className="team_space"></div>
                    <div className="team_content">
                      <div>
                        <div className="text-xl">Mia Park</div>
                        <div className="spacer-xxsmall"></div>
                        <div className="text-color-secondary">Head of Strategy</div>
                      </div>
                      <div className="social_list">
                        <a href={s.destino7 || '#'} className="social_link w-inline-block" aria-label="Mia Park on LinkedIn"><img src={s.imagem9} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino8 || '#'} className="social_link w-inline-block" aria-label="Mia Park on X"><img src={s.imagem10} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino9 || '#'} className="social_link w-inline-block" aria-label="Mia Park on Dribbble"><img src={s.imagem11} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                      </div>
                    </div>
                    <div className="team_img">
                      <img src={s.imagem12} loading="lazy" alt="Mia Park, Head of Strategy" sizes="(max-width: 767px) 100vw, 768px" srcSet="/coverly/images/img-2-p-500.webp 500w, /coverly/images/img-2.webp 768w" className="img" />
                    </div>
                  </div>
                  <div className="team_card scroll-slide-left">
                    <div className="team_space"></div>
                    <div className="team_content">
                      <div>
                        <div className="text-xl">Emily Chen</div>
                        <div className="spacer-xxsmall"></div>
                        <div className="text-color-secondary">Product Designer</div>
                      </div>
                      <div className="social_list">
                        <a href={s.destino10 || '#'} className="social_link w-inline-block" aria-label="Emily Chen on LinkedIn"><img src={s.imagem13} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino11 || '#'} className="social_link w-inline-block" aria-label="Emily Chen on X"><img src={s.imagem14} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino12 || '#'} className="social_link w-inline-block" aria-label="Emily Chen on Dribbble"><img src={s.imagem15} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                      </div>
                    </div>
                    <div className="team_img">
                      <img src={s.imagem16} loading="lazy" alt="Emily Chen, Product Designer" sizes="(max-width: 767px) 100vw, 768px" srcSet="/coverly/images/img-3-p-500.webp 500w, /coverly/images/img-3.webp 768w" className="img" />
                    </div>
                  </div>
                  <div className="team_card scroll-slide-left">
                    <div className="team_space"></div>
                    <div className="team_content">
                      <div>
                        <div className="text-xl">Sofia Diaz</div>
                        <div className="spacer-xxsmall"></div>
                        <div className="text-color-secondary">Marketing Lead</div>
                      </div>
                      <div className="social_list">
                        <a href={s.destino13 || '#'} className="social_link w-inline-block" aria-label="Sofia Diaz on LinkedIn"><img src={s.imagem17} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino14 || '#'} className="social_link w-inline-block" aria-label="Sofia Diaz on X"><img src={s.imagem18} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino15 || '#'} className="social_link w-inline-block" aria-label="Sofia Diaz on Dribbble"><img src={s.imagem19} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                      </div>
                    </div>
                    <div className="team_img">
                      <img src={s.imagem20} loading="lazy" alt="Sofia Diaz, Marketing Lead" sizes="(max-width: 767px) 100vw, 768px" srcSet="/coverly/images/img-5-p-500.webp 500w, /coverly/images/img-5.webp 768w" className="img" />
                    </div>
                  </div>
                  <div className="team_card scroll-slide-left">
                    <div className="team_space"></div>
                    <div className="team_content">
                      <div>
                        <div className="text-xl">Mark Evans</div>
                        <div className="spacer-xxsmall"></div>
                        <div className="text-color-secondary">Tech Advisor</div>
                      </div>
                      <div className="social_list">
                        <a href={s.destino16 || '#'} className="social_link w-inline-block" aria-label="Mark Evans on LinkedIn"><img src={s.imagem21} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino17 || '#'} className="social_link w-inline-block" aria-label="Mark Evans on X"><img src={s.imagem22} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                        <a href={s.destino18 || '#'} className="social_link w-inline-block" aria-label="Mark Evans on Dribbble"><img src={s.imagem23} loading="lazy" alt="" className="icon-1x1-medium" /></a>
                      </div>
                    </div>
                    <div className="team_img">
                      <img src={s.imagem24} loading="lazy" alt="Mark Evans, Tech Advisor" sizes="(max-width: 767px) 100vw, 768px" srcSet="/coverly/images/img-4-p-500.webp 500w, /coverly/images/img-4.webp 768w" className="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}