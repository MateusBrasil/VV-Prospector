"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-85
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
  //   /* Coverly — Contact Hero
  //    * Component-scoped logic. The scroll-slide-left entrance animations are handled by
  //    * the shared /coverly/scripts/scroll-reveal.js (it auto-initializes on
  //    * DOMContentLoaded and picks up every .scroll-slide-left element).
  //    *
  //    * Only the form submit handler lives here — it POSTs FormData to /api/contact and
  //    * toggles the Webflow-style .w-form-done / .w-form-fail divs based on the response.
  //    * Falls back to the error state on network failure or non-OK status. */
  //   
  //   (function () {
  //     const form = document.querySelector(".section_hero .form_form");
  //     const successDiv = document.querySelector(".section_hero .form_message-success");
  //     const errorDiv = document.querySelector(".section_hero .form_message-error");
  //   
  //     if (!form) return;
  //   
  //     form.addEventListener("submit", async (e) => {
  //       e.preventDefault();
  //       const formData = new FormData(form);
  //       try {
  //         const res = await fetch("/api/contact", { method: "POST", body: formData });
  //         if (res.ok) {
  //           form.style.display = "none";
  //           successDiv && successDiv.removeAttribute("hidden");
  //         } else {
  //           errorDiv && errorDiv.removeAttribute("hidden");
  //         }
  //       } catch {
  //         errorDiv && errorDiv.removeAttribute("hidden");
  //       }
  //     });
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
    <section className="dobra" data-dobra="contacto-secao-85" ref={raiz}>
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
              <div className="container-small">
                <div className="vertical-center">
                  <div className="tag scroll-slide-left">Contact us</div>
                  <div className="spacer-medium"></div>
                  <h1 className="text-align-center scroll-slide-left">{s.titulo}</h1>
                  <div className="spacer-medium"></div>
                  <div className="text-color-secondary text-align-center scroll-slide-left">
                    Reach out to our dedicated support team for any assistance you may need.
                  </div>
                </div>
                <div className="spacer">
                  <div style={{Height: '3.75rem'}} className="spacer-desktop"></div>
                  <div style={{Height: '3rem'}} className="spacer-tablet"></div>
                  <div style={{Height: '2rem'}} className="spacer-mobile"></div>
                </div>
                <div className="form_component w-form">
                  <form id="wf-form-Form" name="wf-form-Form" method="post" action="/api/contact" className="form_form">
                    <div className="form_field-group">
                      <div className="form_field-wrapper scroll-slide-left">
                        <label htmlFor="First-Name-3" className="form_label">First name</label>
                        <input className="form_input w-input" maxLength="256" name="First-Name" placeholder="First Name" type="text" id="First-Name-3" required="" />
                      </div>
                      <div className="form_field-wrapper scroll-slide-left">
                        <label htmlFor="Last-name" className="form_label">Last name</label>
                        <input className="form_input w-input" maxLength="256" name="Last-name" placeholder="Last name" type="text" id="Last-name" />
                      </div>
                    </div>
                    <div className="form_field-group">
                      <div className="form_field-wrapper scroll-slide-left">
                        <label htmlFor="Phone-Number" className="form_label">Phone Number</label>
                        <input className="form_input w-input" maxLength="256" name="Phone-Number" placeholder="Phone Number" type="tel" id="Phone-Number" />
                      </div>
                      <div className="form_field-wrapper scroll-slide-left">
                        <label htmlFor="Email-address-required" className="form_label">Email address (required)</label>
                        <input className="form_input w-input" maxLength="256" name="Email-address-required" placeholder="Email address (required)" type="email" id="Email-address-required" required="" />
                      </div>
                    </div>
                    <div className="form_field-wrapper scroll-slide-left">
                      <label htmlFor="Enter-your-messages" className="form_label">Enter your messages</label>
                      <textarea id="Enter-your-messages" name="Enter-your-messages" maxLength="5000" placeholder="Message" className="form_input is-text-area w-input" required=""></textarea>
                    </div>
                    <input type="submit" data-wait="Please wait..." className="button scroll-into-view scroll-slide-left w-button" value="Contact Us" />
                  </form>
                  <div className="form_message-success w-form-done" hidden="">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="form_message-error w-form-fail" hidden="">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}