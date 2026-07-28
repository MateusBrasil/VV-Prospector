"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-18
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
  //   // Advisora — Pricing Hero
  //   // No component-scoped boot logic required.
  //   // Scroll reveals ([data-reveal]) and the navbar hamburger toggle are handled
  //   // by the shared scripts loaded before this file:
  //   //   /advisora/scripts/scroll-reveal.js
  //   //   /advisora/scripts/navbar.js
  //   
  //   // Advisora OSMO-style scaling-hamburger navigation (tablet + mobile only).
  //   // CDN-friendly global, self-initializes on DOM ready. Ported from src/scripts/navbar.ts.
  //   // State tracked via `data-navigation-status` on <html>.
  //   (function () {
  //     function init() {
  //       var html = document.documentElement;
  //       var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       var menuLinks = document.querySelectorAll(".hamburger-nav__a");
  //   
  //       function setStatus(active) {
  //         html.setAttribute("data-navigation-status", active ? "active" : "not-active");
  //         html.style.overflow = active ? "hidden" : "";
  //         toggleEls.forEach(function (el) { el.setAttribute("aria-expanded", String(active)); });
  //       }
  //   
  //       setStatus(false);
  //   
  //       toggleEls.forEach(function (btn) {
  //         btn.addEventListener("click", function (e) {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute("data-navigation-status") !== "active");
  //         });
  //       });
  //   
  //       closeEls.forEach(function (el) {
  //         el.addEventListener("click", function () { setStatus(false); });
  //       });
  //   
  //       menuLinks.forEach(function (link) {
  //         link.addEventListener("click", function () { setStatus(false); });
  //       });
  //   
  //       document.addEventListener("keydown", function (e) {
  //         if (e.key === "Escape" && html.getAttribute("data-navigation-status") === "active") {
  //           setStatus(false);
  //         }
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
    <section className="dobra" data-dobra="precos-secao-18" ref={raiz}>
      <div className="page-wrapper">
          <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="padding-global is-navbar">
              <div className="navbar_content">
                <a href="/" aria-label="Advisora — Home" className="navbar_logo-link w-nav-brand">
                  <img loading="eager" decoding="async" width="128" height="32" src={s.imagem} alt="Advisora" className="navbar_logo" />
                </a>
                <div className="nav_wrap is-desktop-only">
                  <nav role="navigation" className="nav_mobile w-nav-menu">
                    <div className="navbar_list">
                      <a href="/about" className="nav_links w-nav-link">{s.acao}</a>
                      <a href="/features" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/pricing" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao4}</a>
                    </div>
                  </nav>
                </div>
                <div className="nav_buttons-wrap is-desktop-only">
                  <div className="login-wrap">
                    <a href="/contact" className="button is-primary w-inline-block">
                      <div className="button-text-wrap">
                        <div className="button-text is-firts">Contact</div>
                        <div className="button-text is-second">Contact</div>
                        <div className="button-shadow-up"></div>
                        <div className="button-shadow-down"></div>
                      </div>
                      <img loading="lazy" src={s.imagem2} alt="" className="button-icon" />
                    </a>
                  </div>
                </div>
                <div className="hamburger-anchor is-mobile-only">
                  <div className="hamburger-nav">
                    <div className="hamburger-nav__bg" aria-hidden="true"></div>
                    <div className="hamburger-nav__group">
                      <p className="hamburger-nav__menu-p">{s.texto}</p>
                      <ul className="hamburger-nav__ul">
                        <li className="hamburger-nav__li"><a href="/about" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto2}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/features" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto3}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/pricing" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto4}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/blog" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto5}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                        <li className="hamburger-nav__li"><a href="/contact" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto6}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                      </ul>
                    </div>
                    <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}>
                      <div className="hamburger-nav__toggle-bar"></div>
                      <div className="hamburger-nav__toggle-bar"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-navigation-toggle="close" className="navigation__dark-bg is-mobile-only" aria-hidden="true"></div>
      
          <section className="section_pricing">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="content-wrap">
                  <div className="header is-centered">
                    <div className="pricing_title" data-reveal="up">
                      <h1 className="text-5xl">{s.titulo}</h1>
                    </div>
                    <div className="pricing_description" data-reveal="up" data-reveal-delay="150">
                      <div className="text-lg text-color-secondary">Choose a plan that fits your business needs and budget. No hidden={true} fees, no surprises—just straightforward pricing for powerful financial management.</div>
                    </div>
                  </div>
                  <div className="pricing_content">
                    <div className="pricing-card is-first" data-reveal="up" data-reveal-delay="100">
                      <div className="pricing_card-content">
                        <div className="pricing_card-top">
                          <div className="text-xl text-weight-medium">Starter Plan</div>
                          <div className="text-5xl text-weight-medium">$50<span className="text-xl is-pricing-label">{s.rotulo}</span></div>
                          <div className="text-sm is-pricing-card-description">Perfect for Small Teams, Startups, and Growing Businesses</div>
                        </div>
                        <div className="button-wrapper">
                          <a href="/contact" className="button is-primary w-inline-block">
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
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Basic financial analytics tools</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Up to 3 user accounts</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Real-time exchange rate monitoring</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Monthly financial reports</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon-secondary">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Email support</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-card is-popular" data-reveal="up" data-reveal-delay="200">
                      <div className="pricing_label">
                        <div className="text-base">Most Popular</div>
                      </div>
                      <div className="pricing_card-content is-popular">
                        <div className="pricing_card-top">
                          <div className="text-xl text-weight-medium">Professional Plan</div>
                          <div className="text-5xl text-weight-medium">$80,00<span className="text-xl is-pricing-label">{s.rotulo2}</span></div>
                          <div className="text-sm text-color-secondary">Perfect for Growing Businesses Ready to Scale Their Operations</div>
                        </div>
                        <div className="button-wrapper">
                          <a href="/contact" className="button is-primary w-inline-block">
                            <div className="button-text-wrap">
                              <div className="button-text is-firts">Try to free</div>
                              <div className="button-text is-second">Try to free</div>
                              <div className="button-shadow-up"></div>
                              <div className="button-shadow-down"></div>
                            </div><img loading="lazy" src={s.imagem4} alt="" className="button-icon" />
                          </a>
                        </div>
                        <div className="pricing_card-bottom">
                          <div className="text-xl text-weight-medium">Features:</div>
                          <div className="pricing_card-list">
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">All features from Starter</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Advanced financial analytics and forecasting</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Unlimited user accounts</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Multi-currency support</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Weekly financial reports</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Priority email and chat support</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-card" data-reveal="up" data-reveal-delay="300">
                      <div className="pricing_card-content">
                        <div className="pricing_card-top">
                          <div className="text-xl text-weight-medium">Enterprise Plan</div>
                          <div className="text-5xl text-weight-medium">$150<span className="text-xl is-pricing-label">{s.rotulo3}</span></div>
                          <div className="text-sm text-color-secondary">Comprehensive and Scalable Solutions for Growing Large Organizations</div>
                        </div>
                        <div className="button-wrapper">
                          <a href="/contact" className="button is-primary w-inline-block">
                            <div className="button-text-wrap">
                              <div className="button-text is-firts">Try to free</div>
                              <div className="button-text is-second">Try to free</div>
                              <div className="button-shadow-up"></div>
                              <div className="button-shadow-down"></div>
                            </div><img loading="lazy" src={s.imagem5} alt="" className="button-icon" />
                          </a>
                        </div>
                        <div className="pricing_card-bottom">
                          <div className="text-xl text-weight-medium">Features:</div>
                          <div className="pricing_card-list">
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">All features from Professional</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Tailored analytics and dashboards</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">API integration for custom workflows</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Dedicated account manager</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">Daily financial insights and alerts</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
                                <rect x="0.5" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <path d="M6.2168 9.96375L9.31203 13.059L14.7882 7.14062" stroke="currentColor" strokeWidth="1.32653" strokeLinecap="round" strokeLinejoin="round" className="pricing_icon-path"></path>
                              </svg>
                              <div className="text-base">24/7 premium support</div>
                            </div>
                            <div className="pricing_card-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none" className="icon-1x1-base is-pricing-list-icon">
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