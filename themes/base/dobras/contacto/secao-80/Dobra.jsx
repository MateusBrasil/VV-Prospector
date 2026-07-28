"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-80
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
  //   /* Genovas — Contact Form Section
  //    *
  //    * No component-specific JS. All motion is driven by the shared
  //    * /genovas/scripts/scroll-reveal.js classic script, which auto-reveals
  //    * (fade + blur 30 -> 0, expo.out) the heading (.text-2xl), the description
  //    * (.text-base) and the submit button wrapper (.button-wrap). It self-
  //    * initializes on DOM ready and sets the hidden start state itself, so the
  //    * form and copy stay visible if GSAP fails to load.
  //    *
  //    * The data-w-id attributes are kept as inert reveal hooks from the original
  //    * Webflow IX2 markup.
  //    *
  //    * BACKEND NOTE: the form posts to /api/contact (relative). No endpoint ships
  //    * with the template — wire your own handler and have it return 2xx on success
  //    * / non-2xx on error to toggle .w-form-done / .w-form-fail.
  //    */
  //   
  //   /**
  //    * Scroll-reveal system for Genovas
  //    *
  //    * Implements ANIMATION_MAP recipe `a` (the master scroll-reveal used by 86%
  //    * of in-build IX2 triggers): fade + blur 30px → 0px, expo.out, 1s, delay 100ms.
  //    *
  //    * Usage on any element:
  //    *   <div data-reveal>...</div>
  //    *   <div data-reveal="up">...</div>      → fade + blur + translateY 30 → 0
  //    *   <div data-reveal="left">...</div>    → fade + blur + translateX -30 → 0
  //    *   <div data-reveal="right">...</div>   → fade + blur + translateX 30 → 0
  //    *
  //    * GSAP + ScrollTrigger loaded as globals via CDN.
  //    */
  //   (function () {
  //     function init() {
  //       gsap.registerPlugin(ScrollTrigger);
  //   
  //       var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //       // Auto-tag elements that should reveal on scroll.
  //       var AUTO_REVEAL_SELECTORS = [
  //         // Section headings + descriptions
  //         "main h2",
  //         "main .heading-style-h1",
  //         "main .heading-style-h2",
  //         "main .text-base",
  //         "main .text-2xl",
  //         "main .text-xl",
  //         "main .text-wrap",
  //         // Card variants
  //         "main .card_wrap > div",
  //         "main .differentiators_card",
  //         "main .values_card",
  //         "main .vision_card",
  //         "main .mission_card",
  //         "main .stats_card",
  //         "main .stats", // .stats.is-two (home-2 layout) + .stats.is-three (home-3)
  //         "main .blog_card",
  //         "main .expertise_card",
  //         "main .testimonials_card",
  //         "main .testimonials_slider",
  //         "main .why_card",
  //         "main .author_name", // testimonial slide author block (a-4 stagger)
  //         "main .author_content", // testimonial author wrapper
  //         "main .cases-text", // yellow case card text
  //         // Icon blocks
  //         "main .icon-box", // .icon-box.is-small in cards
  //         // Section visuals (images)
  //         "main .cases_visual",
  //         "main .diferentiators_visual",
  //         "main .about-introduction_visual",
  //         "main .values_visual",
  //         "main .how_visual",
  //         "main .hero_visual",
  //         "main .partners_wrap", // about hero partners cluster
  //         "main .cta_img", // CTA decorative SVG (default variant — no rotation, just fade)
  //         "main .cta_content", // CTA content wrap (default variant)
  //         "main .cta_visual", // CTA visual photo (default variant)
  //         // CTA blocks
  //         "main .button-wrap",
  //       ];
  //   
  //       function autoTagReveals() {
  //         // Skip elements inside the hero (handled by hero-home.js on LOAD trigger)
  //         var hero = document.querySelector(".section_hero");
  //         AUTO_REVEAL_SELECTORS.forEach(function (sel) {
  //           document.querySelectorAll(sel).forEach(function (el) {
  //             if (hero && hero.contains(el)) return;
  //             if (!el.hasAttribute("data-reveal")) {
  //               el.setAttribute("data-reveal", "fade");
  //             }
  //           });
  //         });
  //       }
  //   
  //       autoTagReveals();
  //   
  //       // ============================================
  //       // a-25 "Image reveal" — scale 1.5→1 + blur 10→0 on `.img` children when
  //       // their parent enters viewport. Duration 1000ms outQuart.
  //       // ============================================
  //       function initImageReveal() {
  //         if (REDUCED_MOTION) return;
  //         var heroEl = document.querySelector(".section_hero");
  //   
  //         // Containers that should trigger the .img scale+blur reveal when entering viewport
  //         var containers = document.querySelectorAll(
  //           ".img-wrapper, .hero_visual, .cases_visual, .diferentiators_visual, .values_visual, .how_visual, .about-introduction_visual, .blog_visual, .testimonials_visual",
  //         );
  //   
  //         containers.forEach(function (container) {
  //           if (heroEl && heroEl.contains(container)) return; // skip hero
  //           var imgs = container.querySelectorAll(".img");
  //           if (!imgs.length) return;
  //   
  //           // Initial state (a-25 Group 0)
  //           gsap.set(imgs, { scale: 1.5, filter: "blur(10px)" });
  //   
  //           ScrollTrigger.create({
  //             trigger: container,
  //             start: "top 85%",
  //             once: true,
  //             onEnter: function () {
  //               return gsap.to(imgs, {
  //                 scale: 1,
  //                 filter: "blur(0px)",
  //                 duration: 1.0,
  //                 ease: "power4.out", // outQuart
  //               });
  //             },
  //           });
  //         });
  //       }
  //   
  //       initImageReveal();
  //   
  //       // ============================================
  //       // a-62 "Rotate Img two" — decorative SVG rotates 0° → 120° on scroll-in.
  //       // Duration 1500ms outQuad.
  //       // ============================================
  //       function initRotateOnScroll() {
  //         if (REDUCED_MOTION) return;
  //         var rotators = document.querySelectorAll(
  //           // home cases (a-62) + home stacked CTA (a-62) + about/blog default CTA (a-62 also)
  //           ".cases_img.is-three, .cta_img.is-three, .cta_img-wrap.is-two .cta_img",
  //         );
  //         rotators.forEach(function (el) {
  //           gsap.set(el, { rotate: 0 });
  //           ScrollTrigger.create({
  //             trigger: el,
  //             start: "top 85%",
  //             once: true,
  //             onEnter: function () {
  //               return gsap.to(el, {
  //                 rotate: 120,
  //                 duration: 1.5,
  //                 ease: "power2.out", // outQuad
  //               });
  //             },
  //           });
  //         });
  //       }
  //   
  //       initRotateOnScroll();
  //   
  //       // ============================================
  //       // a-67 "Cta Img Reveal" — 4 cta_visual photos fly in from off-screen,
  //       // then rotate slightly for "scattered" final look.
  //       // ============================================
  //       function initCtaVisualReveal() {
  //         if (REDUCED_MOTION) return;
  //         document.querySelectorAll(".section_cta").forEach(function (section) {
  //           var v1 = section.querySelector(".cta_visual-one");
  //           var v2 = section.querySelector(".cta_visual-two");
  //           var v3 = section.querySelector(".cta_visual-three");
  //           var v4 = section.querySelector(".cta_visual-four");
  //           if (!v1 && !v2 && !v3 && !v4) return; // not the stacked variant
  //   
  //           // Initial state — far off-screen diagonal positions + invisible
  //           if (v1) gsap.set(v1, { opacity: 0, xPercent: 220, yPercent: 170, rotate: 0 });
  //           if (v2) gsap.set(v2, { opacity: 0, xPercent: -190, yPercent: 100, rotate: 0 });
  //           if (v3) gsap.set(v3, { opacity: 0, xPercent: 255, yPercent: -70, rotate: 0 });
  //           if (v4) gsap.set(v4, { opacity: 0, xPercent: -310, yPercent: -170, rotate: 0 });
  //   
  //           ScrollTrigger.create({
  //             trigger: section,
  //             start: "top 85%",
  //             once: true,
  //             onEnter: function () {
  //               // Stage 1: all visuals fly to center + fade in (1s outQuad)
  //               var tl = gsap.timeline();
  //               [v1, v2, v3, v4].forEach(function (v) {
  //                 if (v) {
  //                   tl.to(
  //                     v,
  //                     {
  //                       opacity: 1,
  //                       xPercent: 0,
  //                       yPercent: 0,
  //                       duration: 1.0,
  //                       ease: "power2.out", // outQuad
  //                     },
  //                     0,
  //                   );
  //                 }
  //               });
  //               // Stage 2: delay 900ms, slight rotation for scattered look (1s outQuad)
  //               if (v1) tl.to(v1, { rotate: -4, duration: 1.0, ease: "power2.out" }, 0.9);
  //               if (v2) tl.to(v2, { rotate: -4, duration: 1.0, ease: "power2.out" }, 0.9);
  //               if (v3) tl.to(v3, { rotate: 8, duration: 1.0, ease: "power2.out" }, 0.9);
  //               if (v4) tl.to(v4, { rotate: 4, duration: 1.0, ease: "power2.out" }, 0.9);
  //             },
  //           });
  //         });
  //       }
  //   
  //       initCtaVisualReveal();
  //   
  //       if (!REDUCED_MOTION) {
  //         var elements = document.querySelectorAll("[data-reveal]");
  //   
  //         elements.forEach(function (el) {
  //           var dir = el.dataset.reveal || "fade";
  //           var initial = { opacity: 0, filter: "blur(30px)" };
  //           var target = {
  //             opacity: 1,
  //             filter: "blur(0px)",
  //             duration: 1,
  //             ease: "expo.out",
  //             delay: 0.1,
  //           };
  //   
  //           switch (dir) {
  //             case "up":
  //               initial.y = 30;
  //               target.y = 0;
  //               break;
  //             case "down":
  //               initial.y = -30;
  //               target.y = 0;
  //               break;
  //             case "left":
  //               initial.x = -30;
  //               target.x = 0;
  //               break;
  //             case "right":
  //               initial.x = 30;
  //               target.x = 0;
  //               break;
  //             // case "fade" → opacity+blur only
  //           }
  //   
  //           gsap.set(el, initial);
  //           ScrollTrigger.create({
  //             trigger: el,
  //             start: "top 85%",
  //             once: true,
  //             onEnter: function () {
  //               return gsap.to(el, target);
  //             },
  //           });
  //         });
  //       } else {
  //         // Reduced motion — reveal everything instantly
  //         document.querySelectorAll("[data-reveal]").forEach(function (el) {
  //           el.style.opacity = "1";
  //           el.style.filter = "none";
  //           el.style.transform = "none";
  //         });
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-80" ref={raiz}>
      <div className="page-wrapper">
          <main>
            <section className="section_contact">
              <div className="padding-global">
                <div className="container-box is-same">
                  <div className="content-wrap is-contact">
                    <div className="contact_wrap">
                      <div className="contact_content">
                        <h2 data-w-id="97c571ba-33ff-7987-03a8-718a97cf30b4" className="text-2xl">{s.titulo}</h2>
                        <div data-w-id="97c571ba-33ff-7987-03a8-718a97cf30ba" className="text-base text-color-secondary">
                          Have questions? Looking for expert guidance? We're here to help!
                        </div>
                      </div>
      
                      <div data-w-id="43804d93-4b45-fe47-2084-317722424be3" className="contact_form-block w-form">
                        <form id="wf-form-Form" name="wf-form-Form" data-name="Form" method="POST" action="/api/contact" className="form_form">
                          <div data-w-id="43804d93-4b45-fe47-2084-317722424be5" className="form_field-wrapper">
                            <label htmlFor="Name" className="form_label">Your name</label>
                            <input className="form_input w-input" maxLength="256" name="Name" data-name="Name" placeholder="Your full name" type="text" id="Name" required="" />
                          </div>
      
                          <div data-w-id="43804d93-4b45-fe47-2084-317722424be9" className="form_field-wrapper">
                            <label htmlFor="Email-3" className="form_label">Email address</label>
                            <input className="form_input w-input" maxLength="256" name="Email-3" data-name="Email 3" placeholder="Your email address" type="email" id="Email-3" required="" />
                          </div>
      
                          <div id="w-node-_43804d93-4b45-fe47-2084-317722424bed-b2631d4c" data-w-id="43804d93-4b45-fe47-2084-317722424bed" className="form_field-wrapper">
                            <label htmlFor="Message" className="form_label">Your messages</label>
                            <textarea id="Message" name="Message" maxLength="5000" data-name="Message" placeholder="Type something here..." required="" className="form_input is-text-area w-input"></textarea>
                          </div>
      
                          <div id="w-node-_43804d93-4b45-fe47-2084-317722424bf1-b2631d4c" data-w-id="43804d93-4b45-fe47-2084-317722424bf1" className="button-wrap">
                            <input type="submit" data-wait="Please wait..." className="button w-button" value="Submit" />
                          </div>
                        </form>
      
                        <div className="form_message-success w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="form_message-error w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
      
                    <h1 data-w-id="b0fb03ac-d264-d751-3434-7e692beb0807" className="contact_title">{s.titulo2}</h1>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}