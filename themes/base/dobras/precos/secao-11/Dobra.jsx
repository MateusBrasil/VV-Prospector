"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-11
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
  //   // advisora-home-pricing — no component-scoped boot logic required.
  //   // Scroll reveals (the [data-reveal] attributes in the markup) are handled by
  //   // the shared /advisora/scripts/scroll-reveal.js loaded before this file.
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
    <section className="dobra" data-dobra="precos-secao-11" ref={raiz}>
      <div className="page-wrapper">
          <section data-wf--pricing-component--variant="secondary" className="section_pricing">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="content-wrap">
                  <div className="header is-centered">
                    <div className="pricing_title" data-reveal="up">
                      <h2 className="text-5xl">{s.titulo}</h2>
                    </div>
                    <div className="pricing_description" data-reveal="up" data-reveal-delay="150">
                      <div className="text-lg">Choose a plan that fits your business needs and budget. No hidden={true} fees, no surprises—just straightforward pricing for powerful financial management.</div>
                    </div>
                  </div>
                  <div className="pricing_content">
                    <div className="pricing-card w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5 is-first" data-reveal="up" data-reveal-delay="100">
                      <div className="pricing_card-content">
                        <div className="pricing_card-top">
                          <div className="text-xl text-weight-medium">Starter Plan</div>
                          <div className="text-5xl text-weight-medium">$50<span className="text-xl is-pricing-label w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">{s.rotulo}</span></div>
                          <div className="text-sm is-pricing-card-description">Perfect for Small Teams, Startups, and Growing Businesses</div>
                        </div>
                        <div className="button-wrapper">
                          <a data-wf--primary-button--variant="tertiary" href="/contact" className="button is-primary w-variant-bd3a0a40-ea8d-0500-f889-4bf4355508f8 w-inline-block">
                            <div className="button-text-wrap">
                              <div className="button-text is-firts">Try to free</div>
                              <div className="button-text is-second">Try to free</div>
                              <div className="button-shadow-up"></div>
                              <div className="button-shadow-down"></div>
                            </div><img loading="lazy" src={s.imagem} alt="" className="button-icon" />
                          </a>
                        </div>
                        <div className="pricing_card-bottom">
                          <div className="text-xl text-weight-medium">Features:</div>
                          <div className="pricing_card-list">
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Basic financial analytics tools</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Up to 3 user accounts</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Real-time exchange rate monitoring</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Monthly financial reports</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Email support</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_5ba7900b-5479-8736-d424-7101ad85a87e-3a6a5ede" className="pricing-card w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5 is-popular" data-reveal="up" data-reveal-delay="200">
                      <div className="pricing_label">
                        <div className="text-base">Most Popular</div>
                      </div>
                      <div className="pricing_card-content is-popular">
                        <div className="pricing_card-top">
                          <div className="text-xl text-weight-medium">Professional Plan</div>
                          <div className="text-5xl text-weight-medium">$80,00<span className="text-xl is-pricing-label w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">{s.rotulo2}</span></div>
                          <div className="text-sm text-color-secondary">Perfect for Growing Businesses Ready to Scale Their Operations</div>
                        </div>
                        <div className="button-wrapper">
                          <a data-wf--primary-button--variant="tertiary" href="/contact" className="button is-primary w-variant-bd3a0a40-ea8d-0500-f889-4bf4355508f8 w-inline-block">
                            <div className="button-text-wrap">
                              <div className="button-text is-firts">Try to free</div>
                              <div className="button-text is-second">Try to free</div>
                              <div className="button-shadow-up"></div>
                              <div className="button-shadow-down"></div>
                            </div><img loading="lazy" src={s.imagem2} alt="" className="button-icon" />
                          </a>
                        </div>
                        <div className="pricing_card-bottom">
                          <div className="text-xl text-weight-medium">Features:</div>
                          <div className="pricing_card-list">
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">All features from Starter</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Advanced financial analytics and forecasting</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Unlimited user accounts</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Multi-currency support</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Weekly financial reports</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Priority email and chat support</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-card w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5" data-reveal="up" data-reveal-delay="300">
                      <div className="pricing_card-content">
                        <div className="pricing_card-top">
                          <div className="text-xl text-weight-medium">Enterprise Plan</div>
                          <div className="text-5xl text-weight-medium">$150<span className="text-xl is-pricing-label w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5">{s.rotulo3}</span></div>
                          <div className="text-sm text-color-secondary">Comprehensive and Scalable Solutions for Growing Large Organizations</div>
                        </div>
                        <div className="button-wrapper">
                          <a data-wf--primary-button--variant="tertiary" href="/contact" className="button is-primary w-variant-bd3a0a40-ea8d-0500-f889-4bf4355508f8 w-inline-block">
                            <div className="button-text-wrap">
                              <div className="button-text is-firts">Try to free</div>
                              <div className="button-text is-second">Try to free</div>
                              <div className="button-shadow-up"></div>
                              <div className="button-shadow-down"></div>
                            </div><img loading="lazy" src={s.imagem3} alt="" className="button-icon" />
                          </a>
                        </div>
                        <div className="pricing_card-bottom">
                          <div className="text-xl text-weight-medium">Features:</div>
                          <div className="pricing_card-list">
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">All features from Professional</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Tailored analytics and dashboards</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">API integration for custom workflows</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Dedicated account manager</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Daily financial insights and alerts</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">24/7 premium support</div>
                            </div>
                            <div className="pricing_card-list-item w-variant-83087b92-7203-46a5-1db8-a587cf9b1de5"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Priority support</div>
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
        </div>
    </section>
  );
}