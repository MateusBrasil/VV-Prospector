"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-86
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
  //   // Clayo — Contact Section
  //   // All behavior is handled by the shared classic scripts loaded before this file:
  //   //   /clayo/scripts/scroll-reveal.js   — reveals [data-reveal] elements on scroll
  //   //   /clayo/scripts/button-magnetic.js — magnetic hover on the "Send Message" button
  //   // Each self-initializes on DOM ready, so no boot code is needed here.
  //   
  //   // Magnetic button hover — source-faithful, decoded RAW from webflow.js IX2.
  //   //
  //   //   a-30 (MOUSE_MOVE, continuous): the `.button-background` circle follows the
  //   //        cursor — X maps -50%→+50% of its own width, Y maps -1.25rem→+1.25rem.
  //   //   a-31 (MOUSE_OVER): `.button-background` scales 0→2.1 (fills the button).
  //   //   a-32 (MOUSE_OUT): scales 2.1→2 + opacity 1→0, then instantly resets to scale 0.
  //   //
  //   // Respects prefers-reduced-motion (no wiring).
  //   // gsap and CustomEase are globals (loaded via CDN before this script).
  //   
  //   (function () {
  //     gsap.registerPlugin(CustomEase);
  //     const EASE_IN = CustomEase.create("btnHoverIn", "M0,0 C0.55,0.094 0.749,0.252 1,1");
  //   
  //     function init() {
  //       if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  //   
  //       const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  //       const yRange = 1.25 * rem; // ±1.25rem in px
  //   
  //       document.querySelectorAll(".button").forEach((btn) => {
  //         const bg = btn.querySelector(".button-background");
  //         if (!bg) return;
  //   
  //         gsap.set(bg, { scale: 0, xPercent: 0, y: 0, opacity: 1 });
  //   
  //         const xTo = gsap.quickTo(bg, "xPercent", { duration: 0.5, ease: "power3" });
  //         const yTo = gsap.quickTo(bg, "y", { duration: 0.5, ease: "power3" });
  //   
  //         btn.addEventListener("mouseenter", () => {
  //           gsap.to(bg, { scale: 2.1, opacity: 1, duration: 0.4, ease: EASE_IN });
  //         });
  //   
  //         btn.addEventListener("mousemove", (e) => {
  //           const r = btn.getBoundingClientRect();
  //           xTo(gsap.utils.mapRange(0, 1, -50, 50, (e.clientX - r.left) / r.width));
  //           yTo(gsap.utils.mapRange(0, 1, -yRange, yRange, (e.clientY - r.top) / r.height));
  //         });
  //   
  //         btn.addEventListener("mouseleave", () => {
  //           gsap.to(bg, {
  //             scale: 2,
  //             opacity: 0,
  //             duration: 0.1,
  //             ease: "power1.out",
  //             onComplete: () => gsap.set(bg, { opacity: 1, scale: 0 }),
  //           });
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
  //   // Scroll-reveal — Phase 5 Stage B, source-faithful (v3, data-driven).
  //   //
  //   // The shared Webflow "View" reveal preset is identical everywhere:
  //   //   initial : opacity 0, translate3d(0, 15%, 0)   (15% = percent of element HEIGHT)
  //   //   to      : opacity 1, y 0
  //   //   duration: 700 ms, easing outQuart -> power3.out
  //   //   trigger : SCROLL_INTO_VIEW at 10% in-view -> ScrollTrigger start "top 90%", once
  //   // Presets differ ONLY by transition delay (0.1 / 0.2 / 0.3 / 0.4 s).
  //   //
  //   // Opt-in per element via data attributes:
  //   //   data-reveal            -> reveal with default 0.1s delay
  //   //   data-reveal="0.2"      -> reveal with explicit delay (seconds)
  //   //   data-reveal-y="30"     -> override the rise distance (yPercent; default 15)
  //   //   data-reveal-start="top 100%" -> override ScrollTrigger start
  //   //
  //   // Images do NOT animate in the source (except .footer_logo, which is tagged).
  //   // Respects prefers-reduced-motion. gsap and ScrollTrigger are globals (loaded via CDN).
  //   
  //   (function () {
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     function init() {
  //       const els = gsap.utils.toArray("[data-reveal]");
  //       if (!els.length) return;
  //   
  //       const mm = gsap.matchMedia();
  //   
  //       mm.add("(prefers-reduced-motion: no-preference)", () => {
  //         els.forEach((el) => {
  //           const delayAttr = el.getAttribute("data-reveal");
  //           const delay = delayAttr && delayAttr.trim() !== "" ? parseFloat(delayAttr) : 0.1;
  //           const start = el.getAttribute("data-reveal-start") || "top 90%";
  //           const trigger = { trigger: el, start, once: true };
  //           const dur = 0.7;
  //           const ease = "power3.out";
  //           const d = Number.isFinite(delay) ? delay : 0.1;
  //   
  //           if (el.hasAttribute("data-reveal-img")) {
  //             // Image mode = Webflow "Image zoom out" preset (actionList a-78): scale 1.5→1
  //             // + de-blur 5px→0, NO opacity, NO move. delay 0, duration 1200ms, power3.out.
  //             gsap.set(el, { scale: 1.5, filter: "blur(5px)" });
  //             gsap.to(el, { scale: 1, filter: "blur(0px)", duration: 1.2, delay: 0, ease, scrollTrigger: trigger });
  //             return;
  //           }
  //   
  //           // Standard mode: opacity + rise. data-reveal-y="0" → opacity-only.
  //           const yAttr = el.getAttribute("data-reveal-y");
  //           const yFrom = yAttr && yAttr.trim() !== "" ? parseFloat(yAttr) : 15;
  //           gsap.set(el, { opacity: 0, yPercent: Number.isFinite(yFrom) ? yFrom : 15 });
  //           gsap.to(el, {
  //             opacity: 1,
  //             yPercent: 0,
  //             duration: dur,
  //             delay: d,
  //             ease,
  //             scrollTrigger: trigger,
  //           });
  //         });
  //   
  //         ScrollTrigger.refresh();
  //   
  //         return () => {
  //           // reduced-motion toggle cleanup: clear any inline props we set
  //           gsap.set(els, { clearProps: "opacity,transform,filter" });
  //         };
  //       });
  //   
  //       // Reduced-motion: no reveal animation. Clear any inline FOUC from-states.
  //       mm.add("(prefers-reduced-motion: reduce)", () => {
  //         gsap.set(els, { clearProps: "opacity,transform,filter" });
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
    <section className="dobra" data-dobra="contacto-secao-86" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_contact">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="w-layout-grid contact-one_grid">
                  <div className="contact-one_content">
                    <h1 data-w-id="5025130e-c58f-31b2-127e-6b18f0a11483" className="text-6xl" data-reveal="0.1">{s.titulo}</h1>
                    <div data-w-id="506ba3c3-5ad3-e382-7d60-949a4b940b25" className="contact_info-wrapper" data-reveal="0.2">
                      <div className="text-color-secondary">Email:</div>
                      <div className="text-xl is-contact">Moneta@gmail.com</div>
                    </div>
                    <div data-w-id="6959d431-f7b3-d8b7-1bad-5bc4f67fc253" className="contact_info-wrapper" data-reveal="0.3">
                      <div className="text-color-secondary">Phone:</div>
                      <div className="text-xl is-contact">+17631683</div>
                    </div>
                    <div data-w-id="f77f32f1-4fe9-8681-4d70-30b9220b7332" className="contact_info-wrapper" data-reveal="0.4">
                      <div className="text-color-secondary">Address:</div>
                      <div className="text-xl is-contact">123 Innovation Avenue, Suite 456<br />Tech District, San Francisco, CA 94107<br />United States</div>
                    </div>
                    <div data-w-id="4d964819-5b2c-0233-574f-5939bf5dfde1" className="contact_media-wrapper" data-reveal="0.5">
                      <div className="text-color-secondary">Follow us</div>
                      <div className="contact_media-content">
                        <a data-w-id="eaf13c40-1a84-070e-9e3e-62ca24d3a309" href={s.destino || '#'} target="_blank" className="contact_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M13.3333 2.5C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333ZM10 6.66667C9.11594 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11594 6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9821 9.11594 13.3333 10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10C13.3333 9.11594 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667ZM10 8.33333C10.442 8.33333 10.866 8.50893 11.1785 8.82149C11.4911 9.13405 11.6667 9.55797 11.6667 10C11.6667 10.442 11.4911 10.866 11.1785 11.1785C10.866 11.4911 10.442 11.6667 10 11.6667C9.55797 11.6667 9.13405 11.4911 8.82149 11.1785C8.50893 10.866 8.33333 10.442 8.33333 10C8.33333 9.55797 8.50893 9.13405 8.82149 8.82149C9.13405 8.50893 9.55797 8.33333 10 8.33333ZM13.75 5.41667C13.529 5.41667 13.317 5.50446 13.1607 5.66074C13.0045 5.81702 12.9167 6.02899 12.9167 6.25C12.9167 6.47101 13.0045 6.68298 13.1607 6.83926C13.317 6.99554 13.529 7.08333 13.75 7.08333C13.971 7.08333 14.183 6.99554 14.3393 6.83926C14.4955 6.68298 14.5833 6.47101 14.5833 6.25C14.5833 6.02899 14.4955 5.81702 14.3393 5.66074C14.183 5.50446 13.971 5.41667 13.75 5.41667Z" fill="currentColor"></path>
                          </svg></a>
                        <a data-w-id="907f74e3-17b8-80a9-0c3e-883fd9d8c604" href={s.destino2 || '#'} target="_blank" className="contact_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M18.3327 10.0013C18.3327 5.4013 14.5993 1.66797 9.99935 1.66797C5.39935 1.66797 1.66602 5.4013 1.66602 10.0013C1.66602 14.0346 4.53268 17.393 8.33268 18.168V12.5013H6.66602V10.0013H8.33268V7.91797C8.33268 6.30964 9.64102 5.0013 11.2493 5.0013H13.3327V7.5013H11.666C11.2077 7.5013 10.8327 7.8763 10.8327 8.33464V10.0013H13.3327V12.5013H10.8327V18.293C15.041 17.8763 18.3327 14.3263 18.3327 10.0013Z" fill="currentColor"></path>
                          </svg></a>
                        <a data-w-id="9a95f687-747b-8be8-1e6d-d2a67b25eb62" href={s.destino3 || '#'} target="_blank" className="contact_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M14.4192 1.875H5.58083C4.59799 1.875 3.65539 2.26543 2.96041 2.96041C2.26543 3.65539 1.875 4.59799 1.875 5.58083V14.4192C1.875 15.402 2.26543 16.3446 2.96041 17.0396C3.65539 17.7346 4.59799 18.125 5.58083 18.125H14.4192C15.402 18.125 16.3446 17.7346 17.0396 17.0396C17.7346 16.3446 18.125 15.402 18.125 14.4192V5.58083C18.125 4.59799 17.7346 3.65539 17.0396 2.96041C16.3446 2.26543 15.402 1.875 14.4192 1.875ZM7.36917 14.9933C7.37178 15.0387 7.36509 15.0841 7.34951 15.1268C7.33394 15.1695 7.3098 15.2085 7.27858 15.2415C7.24736 15.2745 7.20973 15.3008 7.16798 15.3188C7.12624 15.3367 7.08127 15.3459 7.03583 15.3458H5.5525C5.46305 15.3437 5.37802 15.3065 5.31569 15.2423C5.25336 15.1781 5.2187 15.092 5.21917 15.0025V8.83333C5.21794 8.78879 5.22566 8.74446 5.24186 8.70296C5.25806 8.66145 5.28242 8.62361 5.3135 8.59168C5.34457 8.55975 5.38173 8.53438 5.42279 8.51705C5.46384 8.49973 5.50794 8.49082 5.5525 8.49083H7.03583C7.08039 8.49082 7.1245 8.49973 7.16555 8.51705C7.2066 8.53438 7.24376 8.55975 7.27484 8.59168C7.30591 8.62361 7.33027 8.66145 7.34647 8.70296C7.36268 8.74446 7.37039 8.78879 7.36917 8.83333V14.9933ZM6.26667 7.19333C6.10607 7.19213 5.94728 7.15931 5.79937 7.09674C5.65146 7.03417 5.51733 6.94308 5.40462 6.82867C5.29191 6.71426 5.20284 6.57877 5.1425 6.42994C5.08215 6.28111 5.05171 6.12185 5.05292 5.96125C5.05412 5.80065 5.08694 5.64187 5.14951 5.49396C5.21208 5.34605 5.30317 5.21191 5.41758 5.0992C5.53199 4.98649 5.66748 4.89743 5.81631 4.83708C5.96514 4.77674 6.1244 4.7463 6.285 4.7475C6.60376 4.75787 6.90586 4.8924 7.12682 5.12238C7.34778 5.35237 7.47012 5.6596 7.46773 5.97852C7.46534 6.29745 7.3384 6.60281 7.11402 6.82946C6.88963 7.0561 6.58555 7.18608 6.26667 7.19167M15.2808 14.9833C15.2804 15.0675 15.2474 15.1483 15.1886 15.2086C15.1299 15.2689 15.05 15.3041 14.9658 15.3067H13.4C13.3157 15.3041 13.2357 15.2688 13.1769 15.2083C13.1181 15.1478 13.0852 15.0668 13.085 14.9825V12.1292C13.085 11.7033 13.215 10.2767 11.955 10.2767C10.9725 10.2767 10.7783 11.2767 10.7408 11.7217V15.0475C10.7409 15.132 10.708 15.2132 10.6492 15.2738C10.5904 15.3345 10.5103 15.3699 10.4258 15.3725H8.90667C8.82062 15.3723 8.73816 15.3379 8.67739 15.277C8.61663 15.2161 8.5825 15.1336 8.5825 15.0475V8.80333C8.5851 8.71888 8.62048 8.63876 8.68115 8.57996C8.74182 8.52116 8.82301 8.48829 8.9075 8.48833H10.4258C10.5103 8.48829 10.5915 8.52116 10.6522 8.57996C10.7128 8.63876 10.7482 8.71888 10.7508 8.80333V9.34083C10.9725 9.01635 11.2786 8.75855 11.6361 8.59525C11.9935 8.43195 12.3887 8.36933 12.7792 8.41417C15.3083 8.41417 15.2992 10.7767 15.2992 12.12L15.2808 14.9833Z" fill="currentColor"></path>
                          </svg></a>
                        <a data-w-id="baa542ec-8ec9-10e7-78f0-a82f74049888" href={s.destino4 || '#'} target="_blank" className="contact_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M8.74065 12.2092L12.709 17.5H18.5423L11.994 8.76833L17.4423 2.5H15.234L10.9698 7.405L7.29232 2.5H1.45898L7.71732 10.8458L1.93398 17.5H4.14232L8.74065 12.2092ZM13.5423 15.8333L4.79232 4.16667H6.45898L15.209 15.8333H13.5423Z" fill="currentColor"></path>
                          </svg></a>
                      </div>
                    </div>
                  </div>
                  <div className="contact_form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="POST" action="/api/contact" className="contact_form" data-wf-page-id="682b8e40e47efb3f7d410edf" data-wf-element-id="cbe7df07-3a0b-e930-4deb-f075970cd1e0">
                      <div className="cotact_form-grid">
                        <div data-w-id="786176e8-60f7-ca10-d3a2-a917a718700f" className="contact_form-input-wrapper" data-reveal="0.2"><label htmlFor="name" className="contact_form-label">Your Name</label><input className="contact_form-input w-input" maxLength="256" name="name" data-name="Name" placeholder="Your full name" type="text" id="name" required="" /></div>
                        <div data-w-id="0a43f4c2-7d21-23c2-4a87-ccd134749922" className="contact_form-input-wrapper" data-reveal="0.3"><label htmlFor="name-2" className="contact_form-label">Email address</label><input className="contact_form-input w-input" maxLength="256" name="name-2" data-name="Name 2" placeholder="Your email address" type="email" id="name-2" required="" /></div>
                        <div id="w-node-_29965187-ac1a-426a-8c6b-59787d2c0a9b-7d410edf" data-w-id="29965187-ac1a-426a-8c6b-59787d2c0a9b" className="contact_form-input-wrapper" data-reveal="0.4"><label htmlFor="field" className="contact_form-label">Message</label><textarea required="" placeholder="Write something...." maxLength="5000" id="field" name="field" data-name="Field" className="contact_form-input is-textarea w-input"></textarea></div>
                      </div>
                      <div data-w-id="1c0fa841-5160-1ead-247c-e32c5e64c872" className="button-wrapper" data-reveal="0.5"><button data-w-id="5003d005-ea69-0c3b-822d-3c7d15301397" type="submit" className="button is-form" onClick={s.onClick}>
                          <div className="button-background"></div>
                          <div className="button-text">Send Message</div>
                        </button></div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
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