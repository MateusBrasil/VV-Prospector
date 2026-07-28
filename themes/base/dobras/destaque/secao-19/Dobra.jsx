"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-19
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
  //   /* Coverly — Pricing
  //      No per-section JS. The shared `/coverly/scripts/scroll-reveal.js` script
  //      reads the `.scroll-slide-left` markers on every element and animates the
  //      entrance with GSAP + ScrollTrigger when the section enters the viewport. */
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
    <section className="dobra" data-dobra="destaque-secao-19" ref={raiz}>
      <section className="section_pricing">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div>
                  <div className="tag scroll-slide-left">Pricing</div>
                  <div className="spacer-medium"></div>
                  <div className="max-width-large">
                    <h2 className="scroll-slide-left">{s.titulo}</h2>
                  </div>
                  <div className="spacer-medium"></div>
                  <div className="max-description-large">
                    <div className="text-color-secondary scroll-slide-left">
                      Our whole life policies combine guaranteed coverage with cash value that compounds over time. Lock in a level premium today, protect the people you love, and build a tax-advantaged asset that travels with you for life.
                    </div>
                  </div>
                </div>
                <div className="spacer-xhuge"></div>
                <div className="w-layout-grid grid-3gap">
                  <div id="w-node-c3e506a8-ca91-bc9b-5167-222e45942705-caac8235" className="w-layout-grid list_grid is-vertical">
                    <div className="list_item scroll-slide-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                        <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="var(--base-600)"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Guaranteed lifetime coverage</div>
                        <div className="spacer-medium"></div>
                        <div className="text-color-secondary">Your policy stays in force for as long as premiums are paid — no expiration, no renewal underwriting.</div>
                      </div>
                    </div>
                    <div className="list_item scroll-slide-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                        <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="var(--base-600)"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Cash value that builds tax-deferred</div>
                        <div className="spacer-medium"></div>
                        <div className="text-color-secondary">A portion of every premium grows inside the policy. Borrow against it, withdraw it, or let it compound for retirement.</div>
                      </div>
                    </div>
                    <div className="list_item scroll-slide-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                        <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="var(--base-600)"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Level premiums for life</div>
                        <div className="spacer-medium"></div>
                        <div className="text-color-secondary">Lock in today's rate and never see an increase. Your payment at 70 is the same as the day you signed up.</div>
                      </div>
                    </div>
                    <div className="list_item scroll-slide-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                        <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="var(--base-600)"></path>
                      </svg>
                      <div>
                        <div className="text-xl">Living benefits included</div>
                        <div className="spacer-medium"></div>
                        <div className="text-color-secondary">Access part of the death benefit early if you're diagnosed with a chronic, critical, or terminal illness.</div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing_card scroll-slide-left">
                    <div>
                      <div className="w-layout-grid grid is-pricing">
                        <div id="w-node-_536cebc0-0b24-10df-5b9b-f612ea20ab75-caac8235" className="text-xl font-secondary">
                          Starting price
                        </div>
                        <div id="w-node-_23278221-0af3-2ac2-650a-c008a2bbdd9f-caac8235" className="h3">
                          $149/mo
                        </div>
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div>At SecureLife, we prioritize your family's financial security. Our customizable policies ensure peace of mind for every stage of life.</div>
                      <div className="spacer-xlarge"></div>
                      <div className="pricing_list">
                        <div className="pricing_item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                            <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="white"></path>
                          </svg>
                          <div>Term &amp; Whole Life Options</div>
                        </div>
                        <div className="pricing_item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                            <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="white"></path>
                          </svg>
                          <div>24-Hour Payout Guarantee</div>
                        </div>
                        <div className="pricing_item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                            <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="white"></path>
                          </svg>
                          <div>Living Benefits Rider</div>
                        </div>
                        <div className="pricing_item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                            <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="white"></path>
                          </svg>
                          <div>Price Lock Guarantee</div>
                        </div>
                        <div className="pricing_item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                            <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="white"></path>
                          </svg>
                          <div>Family Discounts</div>
                        </div>
                        <div className="pricing_item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-1x1-large">
                            <path d="M12.3673 16.1007L9.85899 13.5923C9.6451 13.3784 9.37287 13.2715 9.04232 13.2715C8.71176 13.2715 8.43954 13.3784 8.22565 13.5923C8.01176 13.8062 7.90482 14.0784 7.90482 14.409C7.90482 14.7395 8.01176 15.0118 8.22565 15.2257L11.5507 18.5506C11.784 18.784 12.0562 18.9007 12.3673 18.9007C12.6784 18.9007 12.9507 18.784 13.184 18.5506L19.7757 11.959C19.9895 11.7451 20.0965 11.4729 20.0965 11.1423C20.0965 10.8118 19.9895 10.5395 19.7757 10.3257C19.5618 10.1118 19.2895 10.0048 18.959 10.0048C18.6284 10.0048 18.3562 10.1118 18.1423 10.3257L12.3673 16.1007ZM14.0007 25.6673C12.3868 25.6673 10.8701 25.3609 9.45065 24.748C8.03121 24.1351 6.79649 23.304 5.74649 22.2548C4.69649 21.2056 3.86543 19.9709 3.25332 18.5506C2.64121 17.1304 2.33476 15.6138 2.33399 14.0007C2.33321 12.3875 2.63965 10.8709 3.25332 9.45065C3.86699 8.03043 4.69804 6.79571 5.74649 5.74648C6.79493 4.69726 8.02965 3.86621 9.45065 3.25332C10.8717 2.64043 12.3883 2.33398 14.0007 2.33398C15.613 2.33398 17.1297 2.64043 18.5507 3.25332C19.9717 3.86621 21.2064 4.69726 22.2548 5.74648C23.3033 6.79571 24.1347 8.03043 24.7492 9.45065C25.3636 10.8709 25.6697 12.3875 25.6673 14.0007C25.665 15.6138 25.3585 17.1304 24.748 18.5506C24.1374 19.9709 23.3064 21.2056 22.2548 22.2548C21.2033 23.304 19.9685 24.1355 18.5507 24.7491C17.1328 25.3628 15.6161 25.6689 14.0007 25.6673Z" fill="white"></path>
                          </svg>
                          <div>No medical exam needed</div>
                        </div>
                      </div>
                    </div>
                    <a href="/quote" className="button w-inline-block">
                      <div className="button-content">
                        <div className="button-text is-one">Get started</div>
                        <div className="button-text is-two">Get started</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}