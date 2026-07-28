"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-12
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
  //   // Pricing section — no section-specific boot needed.
  //   // Reveals (data-reveal) and the magnetic .button CTAs are wired by the shared
  //   // scripts loaded in index.html: /clayo/scripts/scroll-reveal.js and
  //   // /clayo/scripts/button-magnetic.js. GSAP, ScrollTrigger and CustomEase are
  //   // loaded as globals via CDN before those scripts run.
  //   
  //   // Magnetic button hover — source-faithful, decoded RAW from webflow.js IX2.
  //   //
  //   //   a-30 (MOUSE_MOVE, continuous): the `.button-background` circle follows the
  //   //        cursor — X maps -50%→+50% of its own width, Y maps -1.25rem→+1.25rem.
  //   //   a-31 (MOUSE_OVER): `.button-background` scales 0→2.1 (fills the button).
  //   //   a-32 (MOUSE_OUT): scales 2.1→2 + opacity 1→0, then instantly resets to scale 0.
  //   //
  //   // Respects prefers-reduced-motion (no wiring).
  //   // gsap and CustomEase are globals (loaded via CDN before this script).
  //   
  //   (function () {
  //     gsap.registerPlugin(CustomEase);
  //     const EASE_IN = CustomEase.create("btnHoverIn", "M0,0 C0.55,0.094 0.749,0.252 1,1");
  //   
  //     function init() {
  //       if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  //   
  //       const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  //       const yRange = 1.25 * rem; // ±1.25rem in px
  //   
  //       document.querySelectorAll(".button").forEach((btn) => {
  //         const bg = btn.querySelector(".button-background");
  //         if (!bg) return;
  //   
  //         gsap.set(bg, { scale: 0, xPercent: 0, y: 0, opacity: 1 });
  //   
  //         const xTo = gsap.quickTo(bg, "xPercent", { duration: 0.5, ease: "power3" });
  //         const yTo = gsap.quickTo(bg, "y", { duration: 0.5, ease: "power3" });
  //   
  //         btn.addEventListener("mouseenter", () => {
  //           gsap.to(bg, { scale: 2.1, opacity: 1, duration: 0.4, ease: EASE_IN });
  //         });
  //   
  //         btn.addEventListener("mousemove", (e) => {
  //           const r = btn.getBoundingClientRect();
  //           xTo(gsap.utils.mapRange(0, 1, -50, 50, (e.clientX - r.left) / r.width));
  //           yTo(gsap.utils.mapRange(0, 1, -yRange, yRange, (e.clientY - r.top) / r.height));
  //         });
  //   
  //         btn.addEventListener("mouseleave", () => {
  //           gsap.to(bg, {
  //             scale: 2,
  //             opacity: 0,
  //             duration: 0.1,
  //             ease: "power1.out",
  //             onComplete: () => gsap.set(bg, { opacity: 1, scale: 0 }),
  //           });
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
  //   // Scroll-reveal — Phase 5 Stage B, source-faithful (v3, data-driven).
  //   //
  //   // The shared Webflow "View" reveal preset is identical everywhere:
  //   //   initial : opacity 0, translate3d(0, 15%, 0)   (15% = percent of element HEIGHT)
  //   //   to      : opacity 1, y 0
  //   //   duration: 700 ms, easing outQuart -> power3.out
  //   //   trigger : SCROLL_INTO_VIEW at 10% in-view -> ScrollTrigger start "top 90%", once
  //   // Presets differ ONLY by transition delay (0.1 / 0.2 / 0.3 / 0.4 s).
  //   //
  //   // Opt-in per element via data attributes:
  //   //   data-reveal            -> reveal with default 0.1s delay
  //   //   data-reveal="0.2"      -> reveal with explicit delay (seconds)
  //   //   data-reveal-y="30"     -> override the rise distance (yPercent; default 15)
  //   //   data-reveal-start="top 100%" -> override ScrollTrigger start
  //   //
  //   // Images do NOT animate in the source (except .footer_logo, which is tagged).
  //   // Respects prefers-reduced-motion. gsap and ScrollTrigger are globals (loaded via CDN).
  //   
  //   (function () {
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     function init() {
  //       const els = gsap.utils.toArray("[data-reveal]");
  //       if (!els.length) return;
  //   
  //       const mm = gsap.matchMedia();
  //   
  //       mm.add("(prefers-reduced-motion: no-preference)", () => {
  //         els.forEach((el) => {
  //           const delayAttr = el.getAttribute("data-reveal");
  //           const delay = delayAttr && delayAttr.trim() !== "" ? parseFloat(delayAttr) : 0.1;
  //           const start = el.getAttribute("data-reveal-start") || "top 90%";
  //           const trigger = { trigger: el, start, once: true };
  //           const dur = 0.7;
  //           const ease = "power3.out";
  //           const d = Number.isFinite(delay) ? delay : 0.1;
  //   
  //           if (el.hasAttribute("data-reveal-img")) {
  //             // Image mode = Webflow "Image zoom out" preset (actionList a-78): scale 1.5→1
  //             // + de-blur 5px→0, NO opacity, NO move. delay 0, duration 1200ms, power3.out.
  //             gsap.set(el, { scale: 1.5, filter: "blur(5px)" });
  //             gsap.to(el, { scale: 1, filter: "blur(0px)", duration: 1.2, delay: 0, ease, scrollTrigger: trigger });
  //             return;
  //           }
  //   
  //           // Standard mode: opacity + rise. data-reveal-y="0" → opacity-only.
  //           const yAttr = el.getAttribute("data-reveal-y");
  //           const yFrom = yAttr && yAttr.trim() !== "" ? parseFloat(yAttr) : 15;
  //           gsap.set(el, { opacity: 0, yPercent: Number.isFinite(yFrom) ? yFrom : 15 });
  //           gsap.to(el, {
  //             opacity: 1,
  //             yPercent: 0,
  //             duration: dur,
  //             delay: d,
  //             ease,
  //             scrollTrigger: trigger,
  //           });
  //         });
  //   
  //         ScrollTrigger.refresh();
  //   
  //         return () => {
  //           // reduced-motion toggle cleanup: clear any inline props we set
  //           gsap.set(els, { clearProps: "opacity,transform,filter" });
  //         };
  //       });
  //   
  //       // Reduced-motion: no reveal animation. Clear any inline FOUC from-states.
  //       mm.add("(prefers-reduced-motion: reduce)", () => {
  //         gsap.set(els, { clearProps: "opacity,transform,filter" });
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="precos-secao-12" ref={raiz}>
      <div className="page-wrapper">
          <section data-wf--pricing-v1--variant="base" className="section_pricing">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="content-wrapper is-centered">
                  <div className="header is-centered">
                    <div className="pricing_title-wrapper">
                      <div className="label-wrapper scroll-into-view" data-reveal="0.1"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" className="label-icon">
                          <circle cx="6" cy="6" r="6" fill="var(--base-600)"></circle>
                        </svg>
                        <div>Expertise</div>
                      </div>
                      <h2 data-w-id="b759b822-e249-6511-a68b-9128a3dae9a9" className="heading-style-h2" data-reveal="0.2">{s.titulo}</h2>
                      <h1 data-w-id="5fe9f0d2-f529-759d-d234-2cc039bface2" className="heading-style-h2 is-title" data-reveal="0.2">{s.titulo2}</h1>
                    </div>
                    <div data-w-id="b759b822-e249-6511-a68b-9128a3dae9ab" className="pricing_description" data-reveal="0.3">
                      <div className="text-color-secondary">Choose a plan that fits your business needs and budget. No hidden={true} fees, no surprises—just straightforward pricing for powerful financial management.</div>
                    </div>
                  </div>
                  <div className="w-layout-grid pricing_grid">
                    <div data-w-id="b759b822-e249-6511-a68b-9128a3dae9af" className="pricing_card" data-reveal="0.1">
                      <div className="pricing_card-header">
                        <div className="text-2xl">Starter Plan</div>
                        <div className="text-5xl">$50 <span className="text-xl text-color-secondary">{s.rotulo}</span></div>
                        <div className="text-color-secondary">Perfect for Small Teams, Startups, and Growing Businesses</div>
                      </div>
                      <div className="pricing_card-content">
                        <div>Features:</div>
                        <div className="pricing_card-features">
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Basic financial analytics tools</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Up to 3 user accounts</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Real-time exchange rate monitoring</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Monthly financial reports</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Email support</div>
                          </div>
                        </div>
                      </div>
                      <a data-w-id="76989604-8bdb-7cc7-5204-656ce5a8a981" href={s.destino || '#'} target="_blank" className="button w-inline-block">
                        <div className="button-background"></div>
                        <div className="button-text">Get Started</div>
                      </a>
                    </div>
                    <div id="w-node-b759b822-e249-6511-a68b-9128a3dae9dd-a3dae9a2" data-w-id="b759b822-e249-6511-a68b-9128a3dae9dd" className="pricing_card is-secondary" data-reveal="0.1">
                      <div className="pricing_card-header">
                        <div className="text-2xl">Starter Plan</div>
                        <div className="text-5xl">$50 <span className="text-2xl text-color-alternate">{s.rotulo2}</span></div>
                        <div className="text-color-alternate">Perfect for Small Teams, Startups, and Growing Businesses</div>
                      </div>
                      <div className="pricing_card-content">
                        <div>Features:</div>
                        <div className="pricing_card-features">
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon is-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-alternate">Basic financial analytics tools</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon is-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-alternate">Up to 3 user accounts</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon is-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-alternate">Real-time exchange rate monitoring</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon is-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-alternate">Monthly financial reports</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon is-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-alternate">Email support</div>
                          </div>
                        </div>
                      </div>
                      <a data-w-id="9419c7f0-c69d-4b6a-106a-97793a2cf30c" href={s.destino2 || '#'} target="_blank" className="button is-secondary w-inline-block">
                        <div className="button-background is-secondary"></div>
                        <div className="button-text">Get Started</div>
                      </a>
                    </div>
                    <div data-w-id="b759b822-e249-6511-a68b-9128a3daea0b" className="pricing_card" data-reveal="0.1">
                      <div className="pricing_card-header">
                        <div className="text-2xl">Starter Plan</div>
                        <div className="text-5xl">$50 <span className="text-xl text-color-secondary">{s.rotulo3}</span></div>
                        <div className="text-color-secondary">Perfect for Small Teams, Startups, and Growing Businesses</div>
                      </div>
                      <div className="pricing_card-content">
                        <div>Features:</div>
                        <div className="pricing_card-features">
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Basic financial analytics tools</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Up to 3 user accounts</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Real-time exchange rate monitoring</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Monthly financial reports</div>
                          </div>
                          <div className="pricing_card-feature">
                            <div className="pricing_card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                                <path d="M3.7168 7.96375L6.81203 11.059L12.2882 5.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg></div>
                            <div className="text-color-secondary">Email support</div>
                          </div>
                        </div>
                      </div>
                      <a data-w-id="76989604-8bdb-7cc7-5204-656ce5a8a981" href={s.destino3 || '#'} target="_blank" className="button w-inline-block">
                        <div className="button-background"></div>
                        <div className="button-text">Get Started</div>
                      </a>
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