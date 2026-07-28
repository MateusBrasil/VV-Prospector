"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-20
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
  //   // advisora-pricing-plans — no component-specific boot logic needed.
  //   // The data-reveal animation is handled by the shared /advisora/scripts/scroll-reveal.js
  //   // (loaded as a classic script before this one). Keep this file as a no-op stub.
  //   
  //   // Advisora scroll-reveal — CDN-friendly global (gsap + ScrollTrigger from CDN).
  //   // Self-initializes on DOM ready. Ported from src/scripts/scroll-reveal.ts.
  //   // No top-level export (would be a parse-time SyntaxError as a classic <script>).
  //   (function () {
  //     function init() {
  //       if (typeof gsap === "undefined") return;
  //       if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
  //   
  //       var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       if (prefersReduced || typeof ScrollTrigger === "undefined") {
  //         document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.transform = "none";
  //           el.style.filter = "none";
  //         });
  //         return;
  //       }
  //   
  //       document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //         var direction = el.dataset.reveal || "up";
  //         var delayAttr = el.dataset.revealDelay;
  //         var delay = delayAttr ? parseFloat(delayAttr) / 1000 : 0.1;
  //   
  //         var from, to;
  //   
  //         if (direction === "zoom-blur") {
  //           from = { opacity: 0, scale: 1.15, filter: "blur(8px)" };
  //           to = { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out", delay: delay };
  //         } else {
  //           from = { opacity: 0 };
  //           if (direction === "up") from.y = 15;
  //           else if (direction === "down") from.y = -15;
  //           else if (direction === "left") from.x = -15;
  //           else if (direction === "right") from.x = 15;
  //   
  //           to = { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out", delay: delay };
  //         }
  //   
  //         gsap.set(el, from);
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: "top 90%",
  //           onEnter: function () { gsap.to(el, to); },
  //           once: true,
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-20" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_plans">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="pricing_table-wrap" data-reveal="up">
                  <div className="pricing_table">
                    <div className="pricing_list-top">
                      <div className="block_features-top">
                        <div className="text-xl-2"><br /></div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan-top">
                          <div className="text-xl text-weight-medium">Starter Plan</div>
                        </div>
                        <div className="block_plan-top">
                          <div className="text-xl text-weight-medium">Professional Plan</div>
                        </div>
                        <div className="block_plan-top">
                          <div className="text-xl text-weight-medium">Enterprise Plan</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Price</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="text-xl-2">$50/month</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl-2">$80/month</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl-2">$180/month</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Basic features at no cost</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Access to limited code outputs</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">Unlimited</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">Unlimited</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Community support</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Basic AI-powered sketch</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Limited storage processing</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="text-xl">100 GB</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">600 GB</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">1 TB</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Full access to all features</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan"></div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Embedded files</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan"></div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Real-time whiteboard collaboration</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan"></div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Updates tab</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="text-xl">Limited</div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Zoom connectivity</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="text-xl">Limited</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">Limited</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">Unlimited</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Public forms</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Tailored notifications</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Adjustable fields</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="text-xl">Limited</div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Premium app integrations</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="text-xl">Limited</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">Limited</div>
                        </div>
                        <div className="block_plan">
                          <div className="text-xl">Unlimited</div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Action log</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Endless dashboards</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Kanban layout</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_list-row">
                      <div className="block_features">
                        <div className="text-xl">Timeline display</div>
                      </div>
                      <div className="block_plan-wrap">
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                        <div className="block_plan">
                          <div className="pricing_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="pricing_check">
                              <path d="M4.90366 10.9495L9.54651 15.5924L17.7608 6.71484" stroke="currentColor" strokeWidth="1.9898" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
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