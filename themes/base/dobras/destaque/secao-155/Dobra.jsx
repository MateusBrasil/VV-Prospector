"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-155
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
  //   /**
  //    * Coverly — About Hero animations.
  //    *
  //    * Text reveal (tag / h1 / description) — Webflow slideInRight preset port:
  //    *   opacity 0 + translateX(100px) → opacity 1 + translateX(0)
  //    *   duration 1s, ease power4.out, stagger 100ms.
  //    *   Fires immediately on load (hero is above-the-fold).
  //    *
  //    * Image reveal — counter-translation wipe (Webflow custom IX2):
  //    *   .img-wrapper yPercent -100 → 0
  //    *   .img        yPercent 100 → 0, scale 1.5 → 1, filter blur(10px) → blur(0)
  //    *   duration 1.2s, ease power4.out, all sub-tweens in lockstep.
  //    *
  //    * Respects prefers-reduced-motion: jumps straight to the final state.
  //    */
  //   (function () {
  //     if (typeof window === "undefined" || typeof window.gsap === "undefined") return;
  //   
  //     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //     const textSelector =
  //       ".section_hero .tag, .section_hero h1, .section_hero .text-color-secondary";
  //     const imageWraps = document.querySelectorAll(".section_hero [data-reveal-image]");
  //   
  //     if (reduced) {
  //       document.querySelectorAll(textSelector).forEach((el) => {
  //         el.style.opacity = "1";
  //         el.style.transform = "translateX(0)";
  //       });
  //       imageWraps.forEach((wrap) => {
  //         const innerWrapper = wrap.querySelector(".img-wrapper");
  //         const img = wrap.querySelector(".img");
  //         if (innerWrapper) innerWrapper.style.transform = "translate3d(0, 0, 0)";
  //         if (img) {
  //           img.style.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
  //           img.style.filter = "none";
  //         }
  //       });
  //       return;
  //     }
  //   
  //     const start = () => {
  //       // Text reveal: clear inline shorthand transforms so GSAP's tracked x can drive.
  //       gsap.set(textSelector, { clearProps: "transform" });
  //       gsap.set(textSelector, { x: 100, opacity: 0 });
  //   
  //       const tl = gsap.timeline();
  //       const slideIn = (sel, delay) =>
  //         tl.to(sel, { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, delay);
  //   
  //       slideIn(".section_hero .tag", 0);
  //       slideIn(".section_hero h1", 0.1);
  //       slideIn(".section_hero .text-color-secondary", 0.2);
  //   
  //       // Image reveal — counter-translation. Fire each image independently as soon
  //       // as it scrolls in (or immediately if already in view, which the hero is).
  //       imageWraps.forEach((wrap) => {
  //         const innerWrapper = wrap.querySelector(".img-wrapper");
  //         const img = wrap.querySelector(".img");
  //         if (!innerWrapper || !img) return;
  //   
  //         gsap.set(innerWrapper, { clearProps: "transform" });
  //         gsap.set(img, { clearProps: "transform" });
  //         gsap.set(innerWrapper, { yPercent: -100 });
  //         gsap.set(img, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });
  //   
  //         const play = () => {
  //           gsap.to(innerWrapper, { yPercent: 0, duration: 1.2, ease: "power4.out" });
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
  //           ScrollTrigger.create({ trigger: wrap, start: "top 95%", once: true, onEnter: play });
  //         } else {
  //           play();
  //         }
  //       });
  //     };
  //   
  //     // rAF so the browser has parsed the inline SSR no-flash styles first.
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(start));
  //     } else {
  //       requestAnimationFrame(start);
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
    <section className="dobra" data-dobra="destaque-secao-155" ref={raiz}>
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
                <div>
                  <div className="tag">Coverly insurance</div>
                  <div className="spacer-medium"></div>
                  <h1>Your long term insurance partner, <br />every step of the way</h1>
                  <div className="spacer-medium"></div>
                  <div className="max-description-medium">
                    <div className="text-color-secondary">Since 1995, we have been dedicated to providing reliable insurance solutions tailored to your needs. Trust us to protect what matters most to you.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid about_viisual">
              <div className="about_img" data-reveal-image="">
                <div className="img-wrapper">
                  <img src={s.imagem3} loading="lazy" sizes="(max-width: 951px) 100vw, 951px" srcSet="/coverly/images/image_2image.webp 500w, /coverly/images/image_2image.webp 800w, /coverly/images/image_2.webp 951w" alt="Coverly team meeting with a client" className="img" />
                </div>
              </div>
              <div className="about_img hide-mobile-landscape" data-reveal-image="">
                <div className="img-wrapper">
                  <img src={s.imagem4} loading="lazy" sizes="(max-width: 951px) 100vw, 951px" srcSet="/coverly/images/image-1_1image-1.webp 500w, /coverly/images/image-1_1image-1.webp 800w, /coverly/images/image-1_1.webp 951w" alt="Coverly advisor reviewing policy documents" className="img" />
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}