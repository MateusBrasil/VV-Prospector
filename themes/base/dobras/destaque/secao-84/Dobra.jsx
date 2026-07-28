"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-84
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
  //   /* Aurae — Contact Section.
  //      Animation + behavior live in the shared classic script loaded before this file:
  //        /aurae/scripts/contact-hero-intro.js → page-load entrance:
  //          background reverse-zoom (scale 1.1 → 1), SplitText per-character heading,
  //          eyebrow / description / info-item / form-card stagger, fonts.ready gating,
  //          a finally{} that always reveals the layout, and a prefers-reduced-motion guard.
  //      The animation="..." attributes are inert reveal hooks the shared script reads.
  //   
  //      FORM: the contact form is a VISUAL STUB. action="#" so it never submits or
  //      leaves the page; the buyer wires a real handler (e.g. Resend) during
  //      customization. Have that handler return 2xx on success / non-2xx on error to
  //      toggle .w-form-done / .w-form-fail. Nothing to boot here. */
  //   
  //   // contact-hero-intro.js — page-load entrance for the Contact hero. Same patterns as the
  //   // other hero intros (SplitText per-character heading, fonts.ready gating, finally{}
  //   // always reveals, prefers-reduced-motion → no motion). The background image gets a
  //   // reverse zoom (scale 1.1 → 1, a gentle pull-back).
  //   //
  //   //   [.contact_bg img]        scale 1.1 → 1 (reverse zoom) + opacity   dur 1.4  pos 0
  //   //   [hero-heading] eyebrow   y + opacity                                       pos .2
  //   //   [hero-heading] h1 chars  y 50% + opacity, stagger amount .5                pos .3
  //   //   description              y + opacity                                       pos .5
  //   //   info items (×3)          y + opacity, stagger                              pos .6
  //   //   form card                y + opacity                              dur .7   pos .7
  //   (function () {
  //     function run() {
  //       const section = document.querySelector(".section_contact");
  //       if (!section) return;
  //       const layout = section.querySelector(".contact_layout");
  //       const bgWrap = section.querySelector(".contact_bg");
  //   
  //       try {
  //         const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //         if (reduce) return; // finally reveals; no motion
  //   
  //         const ease = "power3.out";
  //         const bg = bgWrap?.querySelector(".img_parallax");
  //         const eyebrow = section.querySelector('.text-style-allcaps[animation="hero-heading"]');
  //         const h1 = section.querySelector('h1[animation="hero-heading"]');
  //         const description = section.querySelector('.max-description [animation="hero-heading"]');
  //         const infoItems = gsap.utils.toArray('.contact_info-list [animation="hero-description"]');
  //         const form = section.querySelector(".contact_form-wrapper");
  //   
  //         let chars = [];
  //         if (h1) {
  //           h1.setAttribute("aria-label", h1.textContent ?? "");
  //           chars = new SplitText(h1, { type: "chars", aria: "hidden" }).chars;
  //         }
  //   
  //         const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
  //         // Reverse zoom on the background — starts slightly enlarged and pulls back to rest.
  //         if (bg) tl.from(bg, { scale: 1.1, transformOrigin: "50% 50%", opacity: 0, duration: 1.4 }, 0);
  //         if (eyebrow) tl.from(eyebrow, { yPercent: 50, opacity: 0, duration: 0.6 }, 0.2);
  //         if (chars.length) {
  //           tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0.3);
  //         }
  //         if (description) tl.from(description, { yPercent: 50, opacity: 0 }, 0.5);
  //         if (infoItems.length) tl.from(infoItems, { yPercent: 50, opacity: 0, stagger: 0.1 }, 0.6);
  //         if (form) tl.from(form, { y: 24, opacity: 0, duration: 0.7 }, 0.7);
  //       } finally {
  //         if (layout) layout.style.visibility = "visible";
  //         if (bgWrap) bgWrap.style.visibility = "visible";
  //       }
  //     }
  //   
  //     // Wait for fonts so SplitText measures glyphs correctly; fall back if it stalls.
  //     function start() {
  //       if (document.fonts?.ready) {
  //         let done = false;
  //         const go = () => { if (!done) { done = true; run(); } };
  //         document.fonts.ready.then(go);
  //         setTimeout(go, 600);
  //       } else {
  //         run();
  //       }
  //     }
  //   
  //     function init() {
  //       gsap.registerPlugin(SplitText);
  //       start();
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
    <section className="dobra" data-dobra="destaque-secao-84" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_contact">
            <div className="container-large">
              <div className="contact_layout">
                <div className="contact_info-wrapper">
                  <div animation="zoom">
                    <div animation="hero-heading" className="text-style-allcaps text-color-on-primary">[Contact us]</div>
                    <div className="spacer-xlarge"></div>
                    <h1 animation="hero-heading" className="h6 text-color-on-primary">Get in <em className="italic-heading">touch</em></h1>
                    <div className="spacer-xlarge"></div>
                    <div className="max-description is-25rem">
                      <div animation="hero-heading" className="text-color-on-primary">Receive expert guidance to maximize your next purchase, sale, or investment.</div>
                    </div>
                  </div>
                  <div animation="zoom" className="contact_info-list">
                    <div animation="hero-description" className="contact_info-item">
                      <div className="contact_icon"><img src={s.imagem} loading="lazy" alt="" className="icon-1x1-main" /></div>
                      <div className="text-color-on-primary">123 Example Road, New York, NY 12345</div>
                    </div>
                    <div animation="hero-description" className="contact_info-item">
                      <div className="contact_icon"><img src={s.imagem2} loading="lazy" alt="" className="icon-1x1-main" /></div>
                      <div className="text-color-on-primary">email@example.com</div>
                    </div>
                    <div animation="hero-description" className="contact_info-item">
                      <div className="contact_icon"><img src={s.imagem3} loading="lazy" alt="" className="icon-1x1-main" /></div>
                      <div className="text-color-on-primary">(555) 555-5555</div>
                    </div>
                  </div>
                </div>
                <div animation="fade-in-up" className="contact_form-wrapper">
                  <div className="form_component w-form">
                    <form id="wf-form-Form" name="wf-form-Form" data-name="Form" method="get" action="#" className="form_form">
                      <div className="form_field-wrapper"><label htmlFor="Name" className="form_label">Your name</label><input className="form_input w-input" maxLength="256" name="Name" data-name="Name" placeholder="Your name" type="text" id="Name" /></div>
                      <div className="form_field-wrapper"><label htmlFor="Email" className="form_label">Email address</label><input className="form_input w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email address" type="email" id="Email" /></div>
                      <div className="form_field-wrapper"><label htmlFor="Phone" className="form_label">Phone number</label><input className="form_input w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Phone number" type="tel" id="Phone" /></div>
                      <div className="form_field-wrapper"><label htmlFor="Message-3" className="form_label">Message</label><textarea id="Message-3" name="Message" maxLength="5000" data-name="Message" placeholder="Type something here" className="form_input is-text-area w-input"></textarea></div><button type="submit" className="button-component" onClick={s.onClick}>
                        <div>Submit</div>
                      </button>
                    </form>
                    <div className="form_message-success w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="form_message-error w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_bg"><img src={s.imagem4} loading="lazy" sizes="(max-width: 767px) 100vw, 768px" srcSet="https://d173woph5zl366.cloudfront.net/aurae/images/contact-bg-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/aurae/images/contact-bg-p-800.avif 800w, https://d173woph5zl366.cloudfront.net/aurae/images/contact-bg-p-1080.avif 1080w, https://d173woph5zl366.cloudfront.net/aurae/images/contact-bg.avif 2560w" alt="Hand gently resting on tanned leg with a smear of white cream on the skin." className="img_parallax" />
              <div className="contact_gradient"></div>
            </div>
          </section>
        </div>
    </section>
  );
}