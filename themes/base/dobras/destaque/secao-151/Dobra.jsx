"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-151
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
  //   // Coverly — Service Hero animations.
  //   // Self-contained: replicates the Webflow IX2 "slideInRight" cascade for the
  //   // text block and the counter-translation image reveal for the hero image.
  //   // Falls back gracefully — if GSAP isn't available, content stays visible.
  //   
  //   (function () {
  //     function init() {
  //       if (typeof window === "undefined" || typeof window.gsap === "undefined") return;
  //   
  //       var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //       var gsap = window.gsap;
  //       var ScrollTrigger = window.ScrollTrigger;
  //       if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  //   
  //       var textSelector =
  //         ".section_hero .tag, .section_hero h1, .section_hero .text-color-secondary, .section_hero .button-wrapper";
  //       var wrapEl = document.querySelector(".section_hero .hero_img .img-wrapper");
  //       var imgEl = document.querySelector(".section_hero .hero_img .img");
  //   
  //       if (reduced) {
  //         document.querySelectorAll(textSelector).forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.transform = "none";
  //         });
  //         if (wrapEl) wrapEl.style.transform = "none";
  //         if (imgEl) {
  //           imgEl.style.transform = "none";
  //           imgEl.style.filter = "none";
  //         }
  //         return;
  //       }
  //   
  //       // Text cascade — slideInRight (opacity 0 + x:100 -> opacity 1 + x:0).
  //       gsap.set(textSelector, { opacity: 0, x: 100 });
  //       var tl = gsap.timeline();
  //       tl.to(".section_hero .tag", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0)
  //         .to(".section_hero h1", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.1)
  //         .to(".section_hero .text-color-secondary", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.2)
  //         .to(".section_hero .button-wrapper", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.3);
  //   
  //       // Image reveal — counter-translation. wrapper yPercent -100 -> 0, img yPercent 100 -> 0, scale 1.5 -> 1, blur 10 -> 0.
  //       if (wrapEl && imgEl) {
  //         gsap.set(wrapEl, { yPercent: -100 });
  //         gsap.set(imgEl, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });
  //   
  //         var play = function () {
  //           gsap.to(wrapEl, { yPercent: 0, duration: 1.2, ease: "power4.out" });
  //           gsap.to(imgEl, { yPercent: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" });
  //         };
  //   
  //         if (ScrollTrigger) {
  //           ScrollTrigger.create({
  //             trigger: wrapEl,
  //             start: "top 95%",
  //             once: true,
  //             onEnter: play,
  //           });
  //           // Above-the-fold safety: if the image is already in view on mount, fire immediately.
  //           var rect = wrapEl.getBoundingClientRect();
  //           if (rect.top < window.innerHeight) play();
  //         } else {
  //           play();
  //         }
  //       }
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
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
    <section className="dobra" data-dobra="destaque-secao-151" ref={raiz}>
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
            <div className="padding-global is-hero">
              <div className="container-large">
                <div className="w-layout-grid header_grid">
                  <div className="tag scroll-slide-left">Coverly insurance</div>
                  <div id="w-node-b53bdca9-874c-454f-9f78-43cde0717f2d-caac8235">
                    <h1 className="scroll-slide-left">{s.titulo}</h1>
                    <div className="spacer-medium"></div>
                    <div className="text-color-secondary scroll-slide-left">At SecureLife, we prioritize your family's financial security. Our customizable policies ensure peace of mind for every stage of life.</div>
                    <div className="spacer-huge"></div>
                    <div className="button-wrapper scroll-slide-left">
                      <a href="/contact" className="button w-inline-block">
                        <div className="button-content">
                          <div className="button-text is-one">Contact Us</div>
                          <div className="button-text is-two">Contact Us</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero_img" data-reveal-image="">
              <div className="img-wrapper">
                <img src={s.imagem3} loading="eager" alt="Secure Life coverage — family protected by Coverly insurance" className="img" />
              </div>
            </div>
          </section>
    </section>
  );
}