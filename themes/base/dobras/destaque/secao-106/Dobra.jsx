"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-106
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   // Coverly hero — entrance choreography.
  //   // Animates from a visible-by-default state: if JS fails, content is still
  //   // rendered. GSAP runs the slide-in cascade and image reveal on DOM ready.
  //   document.addEventListener("DOMContentLoaded", () => {
  //     if (typeof window.gsap === "undefined") return;
  //   
  //     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //     if (reduced) return;
  //   
  //     const textSelector =
  //       ".section_hero .tag, .section_hero h1, .section_hero .text-color-secondary, .section_hero .button-wrapper";
  //   
  //     requestAnimationFrame(() => {
  //       // Set initial off-screen state via GSAP (no inline styles in markup, so
  //       // failed JS leaves content visible).
  //       gsap.set(textSelector, { opacity: 0, x: 100 });
  //       gsap.set(".section_hero .hero_img .img-wrapper", { yPercent: -100 });
  //       gsap.set(".section_hero .hero_img .img", {
  //         yPercent: 100,
  //         scale: 1.5,
  //         filter: "blur(10px)",
  //       });
  //   
  //       const tl = gsap.timeline();
  //       const slideIn = (sel, delay) =>
  //         tl.to(
  //           sel,
  //           { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" },
  //           delay
  //         );
  //   
  //       slideIn(".section_hero .tag", 0);
  //       slideIn(".section_hero h1", 0.1);
  //       slideIn(".section_hero .text-color-secondary", 0.2);
  //       slideIn(".section_hero .button-wrapper", 0.3);
  //   
  //       const imgStart = 0.1;
  //       const imgDur = 1.2;
  //       const imgEase = "power4.out";
  //       tl.to(
  //         ".section_hero .hero_img .img-wrapper",
  //         { yPercent: 0, duration: imgDur, ease: imgEase },
  //         imgStart
  //       ).to(
  //         ".section_hero .hero_img .img",
  //         {
  //           yPercent: 0,
  //           scale: 1,
  //           filter: "blur(0px)",
  //           duration: imgDur,
  //           ease: imgEase,
  //         },
  //         imgStart
  //       );
  //     });
  //   });
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
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-106" ref={raiz}>
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
                <div className="hero_layout">
                  <div className="max-width-medium">
                    <div className="tag">Coverly insurance</div>
                    <div className="spacer-medium"></div>
                    <h1>{s.titulo}</h1>
                  </div>
                  <div className="max-content is-26rem">
                    <div className="text-color-secondary">Get a free quote in under 2 minutes. Experience peace of mind with our reliable insurance options.</div>
                    <div className="spacer-xxlarge"></div>
                    <div className="button-wrapper">
                      <a href="/quote" className="button w-inline-block">
                        <div className="button-content">
                          <div className="button-text is-one">Get your free quote</div>
                          <div className="button-text is-two">Get your free quote</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero_img">
              <div className="img-wrapper">
                <img src={s.imagem3} loading="eager" fetchpriority="high" sizes="(max-width: 1920px) 100vw, 1920px" srcSet="/coverly/images/hero_igm_1.webp 1920w" alt="Two professionals reviewing insurance options at a desk" className="img" />
              </div>
            </div>
          </section>
    </section>
  );
}