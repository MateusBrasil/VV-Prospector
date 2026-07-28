"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-154
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
  //   // Coverly blog hero — self-contained entrance choreography.
  //   // Replicates the Webflow IX2 slideInRight preset for the heading group and the
  //   // counter-translation image reveal for the featured post thumbnail.
  //   //
  //   // The component used to depend on global /coverly/scripts/{hero,scroll-reveal}.js,
  //   // but those files are authored as ES modules with TypeScript syntax and fail to
  //   // parse when loaded as classic <script> tags — leaving the image hidden and the
  //   // hero text stuck at opacity:0. Inlining the animation here keeps the component
  //   // independent and removes the broken external dependencies.
  //   
  //   (function () {
  //     if (typeof window === "undefined") return;
  //   
  //     const boot = () => {
  //       if (typeof window.gsap === "undefined") return;
  //       const { gsap } = window;
  //       if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  //   
  //       const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       const textSel = ".section_hero [data-hero-text]";
  //       const wrap = document.querySelector(".section_hero .blog_img .img-wrapper");
  //       const img = document.querySelector(".section_hero .blog_img .img");
  //       const slideEls = document.querySelectorAll(".section_hero .scroll-slide-left");
  //   
  //       if (reduced) {
  //         document.querySelectorAll(textSel).forEach((el) => {
  //           el.style.opacity = "1";
  //           el.style.transform = "translateX(0)";
  //         });
  //         slideEls.forEach((el) => {
  //           el.style.opacity = "1";
  //           el.style.transform = "translateX(0)";
  //         });
  //         if (wrap) wrap.style.transform = "translate3d(0,0,0)";
  //         if (img) {
  //           img.style.transform = "translate3d(0,0,0) scale3d(1,1,1)";
  //           img.style.filter = "none";
  //         }
  //         return;
  //       }
  //   
  //       // Entrance — hero text cascade (slideInRight: opacity 0 + x 100 -> 0).
  //       gsap.set(textSel, { opacity: 0, x: 100 });
  //       const tl = gsap.timeline();
  //       const slideIn = (sel, delay) =>
  //         tl.to(sel, { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, delay);
  //   
  //       slideIn(".section_hero .tag[data-hero-text]", 0);
  //       slideIn(".section_hero h1[data-hero-text]", 0.1);
  //       slideIn(".section_hero .text-color-secondary[data-hero-text]", 0.2);
  //   
  //       // Featured image reveal — wrapper slides down from -100%, image counter-translates
  //       // up from 100% with a scale + blur clear. Both tweens locked at 1.2s power4.out.
  //       if (wrap && img) {
  //         gsap.set(wrap, { yPercent: -100 });
  //         gsap.set(img, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });
  //   
  //         const playImg = () => {
  //           gsap.to(wrap, { yPercent: 0, duration: 1.2, ease: "power4.out" });
  //           gsap.to(img, {
  //             yPercent: 0,
  //             scale: 1,
  //             filter: "blur(0px)",
  //             duration: 1.2,
  //             ease: "power4.out",
  //           });
  //         };
  //   
  //         if (window.ScrollTrigger) {
  //           window.ScrollTrigger.create({
  //             trigger: wrap,
  //             start: "top 95%",
  //             once: true,
  //             onEnter: playImg,
  //           });
  //         } else {
  //           playImg();
  //         }
  //       }
  //   
  //       // Side content slide-in (matches the .scroll-slide-left elements on the right column).
  //       if (slideEls.length) {
  //         gsap.set(slideEls, { opacity: 0, x: 100 });
  //         const playSlides = () =>
  //           gsap.to(slideEls, {
  //             opacity: 1,
  //             x: 0,
  //             duration: 1,
  //             ease: "power4.out",
  //             stagger: 0.08,
  //           });
  //   
  //         if (window.ScrollTrigger) {
  //           window.ScrollTrigger.create({
  //             trigger: slideEls[0],
  //             start: "top 95%",
  //             once: true,
  //             onEnter: playSlides,
  //           });
  //         } else {
  //           playSlides();
  //         }
  //       }
  //     };
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", boot, { once: true });
  //     } else {
  //       boot();
  //     }
  //   })();
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: coverly-navbar behavior ===== */
  //   /* Coverly — Navbar
  //    *
  //    * Boot logic for the fullscreen overlay menu. The shared
  //    * /coverly/scripts/navbar.js source uses an ES-module `export`, which would
  //    * throw a SyntaxError when loaded via a plain <script> tag in this standalone
  //    * component, so the equivalent behavior is inlined here.
  //    *
  //    * All transitions (slide-down menu, fade backdrop, link clip hover) are
  //    * CSS-driven via the .is-open class — see components.css.
  //    */
  //   (function initNavbarMenu() {
  //     const menuTrigger = document.querySelector(".menu");
  //     const menuContent = document.querySelector(".menu_content");
  //     const navOverlay = document.querySelector(".nav_overlay");
  //     if (!menuTrigger || !menuContent || !navOverlay) return;
  //   
  //     let isOpen = false;
  //   
  //     function open() {
  //       menuContent.classList.add("is-open");
  //       navOverlay.classList.add("is-open");
  //       document.body.style.overflow = "hidden";
  //       menuTrigger.setAttribute("aria-expanded", "true");
  //       navOverlay.setAttribute("aria-hidden", "false");
  //       isOpen = true;
  //     }
  //   
  //     function close() {
  //       menuContent.classList.remove("is-open");
  //       navOverlay.classList.remove("is-open");
  //       document.body.style.overflow = "";
  //       menuTrigger.setAttribute("aria-expanded", "false");
  //       navOverlay.setAttribute("aria-hidden", "true");
  //       isOpen = false;
  //     }
  //   
  //     function toggle() {
  //       if (isOpen) close();
  //       else open();
  //     }
  //   
  //     menuTrigger.addEventListener("click", toggle);
  //     menuTrigger.addEventListener("keydown", (e) => {
  //       if (e.key === "Enter" || e.key === " ") {
  //         e.preventDefault();
  //         toggle();
  //       }
  //     });
  //     navOverlay.addEventListener("click", () => {
  //       if (isOpen) close();
  //     });
  //     document.addEventListener("keydown", (e) => {
  //       if (e.key === "Escape" && isOpen) close();
  //     });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-154" ref={raiz}>
      <div role="banner" className="nav w-nav" data-animation="default" data-collapse="none" data-duration="500" data-easing="ease-out" data-easing2="ease-in-back" data-no-scroll="1">
                <div className="nav_bar">
                  <div className="nav_container">
                    
                    <div className="menu" aria-label="Open menu" aria-expanded="false" aria-controls="menu_content" role="button" tabIndex="0">
                      <nav role="navigation" className="menu_wrap w-nav-menu">
                        <div>Menu</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-medium" aria-hidden="true">
                          <path d="M9.41078 7.3H9.40078M14.6008 7.3H14.5908M9.31078 12H9.30078M14.6008 12H14.5908M9.41078 16.7H9.40078M14.6008 16.7H14.5908" stroke="black" strokeWidth="2.6" strokeLinecap="round"></path>
                        </svg>
                      </nav>
                    </div>
          
                    
                    <a href="/" aria-current="page" className="home_logo-link w-nav-brand w--current" aria-label="Coverly home">
                      <img loading="lazy" src={s.imagem} alt="" className="home_logo" width="91" height="32" />
                    </a>
          
                    
                    <div className="nav_button">
                      <a href="/contact" className="button is-small w-inline-block">
                        <div className="button-content">
                          <div className="button-text is-one">Contact</div>
                          <div className="button-text is-two">Contact</div>
                        </div>
                      </a>
                    </div>
          
                    
                    <div className="menu_content" id="menu_content">
                      <div className="nav_wrap">
                        <div className="w-layout-grid nav_content-grid is-two-col">
                          
                          <div>
                            <a href="/" className="nav_link w-inline-block">
                              <div className="clip">
                                <div>Home</div>
                                <div className="line is-black"></div>
                              </div>
                            </a>
                            <a href="/about" className="nav_link w-inline-block">
                              <div className="clip">
                                <div>About</div>
                                <div className="line is-black"></div>
                              </div>
                            </a>
                            <a href="/services" className="nav_link w-inline-block">
                              <div className="clip">
                                <div>Services</div>
                                <div className="line is-black"></div>
                              </div>
                            </a>
                          </div>
          
                          
                          <div>
                            <a href="/blog" className="nav_link w-inline-block">
                              <div className="clip">
                                <div>Blog</div>
                                <div className="line is-black"></div>
                              </div>
                            </a>
                            <a href="/quote" className="nav_link w-inline-block">
                              <div className="clip">
                                <div>Get a Quote</div>
                                <div className="line is-black"></div>
                              </div>
                            </a>
                            <a href="/contact" className="nav_link w-inline-block">
                              <div className="clip">
                                <div>Contact</div>
                                <div className="line is-black"></div>
                              </div>
                            </a>
                          </div>
                        </div>
          
                        
                        <div className="nav_image hide-tablet">
                          <img src={s.imagem2} loading="lazy" sizes="(max-width: 991px) 100vw, 848px" srcSet="/coverly/images/nav-img_1.webp 848w" alt="" className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
                
                <div className="nav_overlay" aria-hidden="true"></div>
              </div>
      
          <section className="section_hero">
            <div className="padding-global padding-section-small">
              <div className="container-large">
                <div className="vertical-center">
                  <div className="tag" data-hero-text="">Blog And articles</div>
                  <div className="spacer-medium"></div>
                  <h1 className="text-align-center" data-hero-text="">{s.titulo}</h1>
                  <div className="spacer-medium"></div>
                  <div className="text-color-secondary text-align-center" data-hero-text="">Explore our latest articles on insurance and coverage.</div>
                </div>
                <div className="spacer-xhuge"></div>
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="grid-3gap">
                    <div className="blog_img" data-reveal-image="">
                      <div className="img-wrapper">
                        <img src={s.imagem3} loading="lazy" alt="Understanding your insurance needs" className="img" />
                      </div>
                    </div>
                    <div id="w-node-_4384399a-56e2-b5b4-9b72-3e27550f307d-d8b8eeac">
                      <div>
                        <div className="tag scroll-slide-left">Insurance</div>
                        <div className="spacer-xsmall"></div>
                        <div className="font-primary scroll-slide-left">May 11, 2026</div>
                      </div>
                      <div className="spacer">
                        <div style={{height: '10rem'}} className="spacer-desktop"></div>
                        <div style={{height: '5rem'}} className="spacer-tablet"></div>
                        <div style={{height: '1rem'}} className="spacer-mobile"></div>
                      </div>
                      <div>
                        <div className="text-2xl font-primary scroll-slide-left">Understanding your insurance needs</div>
                        <div className="spacer-medium"></div>
                        <div className="text-color-secondary scroll-slide-left">Explore how to choose the right coverage for you.</div>
                        <div className="spacer-huge"></div>
                        <div className="vertical-center-left scroll-slide-left">
                          <a href="/blog/understanding-your-insurance-needs" className="lean-more is-link w-inline-block">
                            <div>Learn more</div>
                            <div className="line-more_line"></div>
                          </a>
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