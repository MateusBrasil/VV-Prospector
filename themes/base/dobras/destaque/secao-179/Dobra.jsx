"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-179
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
  //   // Aurae — Testimonial Slider boot (classic script — no import/export).
  //   // Swiper is a CDN global (swiper-bundle includes Navigation + Autoplay). Config is
  //   // replicated verbatim from the source .astro's own embed: 1 / 3 / 5 slides per view
  //   // across the 320 / 768 / 992 breakpoints, looping, 600ms, arrow navigation.
  //   (function () {
  //     if (typeof Swiper === "undefined") return;
  //   
  //     function init() {
  //       document
  //         .querySelectorAll(".section_testimonial-slider .swiper")
  //         .forEach(function (el) {
  //           new Swiper(el, {
  //             slidesPerView: 1,
  //             spaceBetween: 16,
  //             loop: true,
  //             speed: 600,
  //             navigation: {
  //               nextEl: ".section_testimonial-slider .swiper_arrow.slide_next",
  //               prevEl: ".section_testimonial-slider .swiper_arrow.slide_prev",
  //             },
  //             breakpoints: {
  //               320: { slidesPerView: 1, spaceBetween: 16 },
  //               768: { slidesPerView: 3, spaceBetween: 16 },
  //               992: { slidesPerView: 5, spaceBetween: 16 },
  //             },
  //           });
  //         });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // reveal.js — decorative scroll reveals (S3 + S4), GSAP ScrollTrigger + SplitText.
  //   // Decoded from webflow.js (IX3/GSAP system):
  //   //   [animation="section-heading"]: SplitText CHARS, y 50% + opacity, stagger amount .3,
  //   //       scroll start "top 70%", play once.
  //   //   [animation="section-description"]: SplitText LINES, y 50% + opacity, stagger amount
  //   //       .3, same trigger.
  //   //   .scroll-into-view: plain block fade + slide-up.
  //   //   .stats_images-grid imgs: scale 1.5→1 + blur 5px→0 on enter.
  //   //   .img_parallax (CTA): continuous parallax (scrub y).
  //   // prefers-reduced-motion neutralises everything. Elements inside the custom-animated
  //   // sections (statement / steps / testimonial) are excluded — handled in scroll-sections.js.
  //   (function () {
  //     function init() {
  //       gsap.registerPlugin(ScrollTrigger, SplitText);
  //   
  //       const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //       const EXCLUDE = ".features-scroll_wrapper, .steps_scroll-wrapper, .testimonial_layout";
  //   
  //       // SplitText reveal: pieces (chars|lines) rise from y 50% + fade, staggered on scroll.
  //       function splitReveal(selector, type, stagger) {
  //         const els = gsap.utils
  //           .toArray(selector)
  //           .filter((el) => !el.closest(EXCLUDE) && (el.textContent ?? "").trim().length > 0);
  //         els.forEach((el) => {
  //           el.setAttribute("aria-label", el.textContent ?? "");
  //           // For char reveals, ALSO split words ("words,chars") so each word stays an
  //           // unbreakable inline-block unit. The stagger still targets every char.
  //           const splitType = type === "chars" ? "words,chars" : type;
  //           const split = new SplitText(el, { type: splitType, aria: "hidden", linesClass: "split-line" });
  //           const pieces = type === "chars" ? split.chars : split.lines;
  //           gsap.from(pieces, {
  //             yPercent: 50,
  //             opacity: 0,
  //             duration: 0.8,
  //             ease: "power3.out",
  //             stagger: { amount: stagger },
  //             scrollTrigger: { trigger: el, start: "top 75%", once: true },
  //           });
  //         });
  //       }
  //   
  //       function run() {
  //         // --- Section headings (chars) + descriptions (lines) — faithful split reveals ---
  //         if (reduce) {
  //           gsap.set(
  //             gsap.utils.toArray(
  //               '[animation="section-heading"], [animation="section-description"], .scroll-into-view'
  //             ),
  //             { clearProps: "all" }
  //           );
  //         } else {
  //           splitReveal('[animation="section-heading"]', "chars", 0.3);
  //           splitReveal('[animation="section-description"]', "lines", 0.3);
  //   
  //           // --- .scroll-into-view: plain block fade + slide-up (not split) ---
  //           const blocks = gsap.utils
  //             .toArray(".scroll-into-view")
  //             .filter((el) => !el.closest(EXCLUDE));
  //           blocks.forEach((el) => {
  //             gsap.fromTo(
  //               el,
  //               { opacity: 0, y: "1.5rem" },
  //               {
  //                 opacity: 1,
  //                 y: 0,
  //                 duration: 0.8,
  //                 ease: "power3.out",
  //                 scrollTrigger: { trigger: el, start: "top 85%", once: true },
  //               }
  //             );
  //           });
  //         }
  //   
  //         // --- Stats images: scale + blur reveal ---
  //         const statsImgs = gsap.utils.toArray(".stats_images-grid .img");
  //         if (statsImgs.length && !reduce) {
  //           const grid = document.querySelector(".stats_images-grid");
  //           gsap.fromTo(
  //             statsImgs,
  //             { scale: 1.5, filter: "blur(5px)" },
  //             {
  //               scale: 1,
  //               filter: "blur(0px)",
  //               duration: 1.2,
  //               ease: "power2.out",
  //               stagger: 0.1,
  //               scrollTrigger: { trigger: grid, start: "top 85%", once: true },
  //             }
  //           );
  //         }
  //   
  //         // --- Parallax images (scrub). SECTION images only: hero parallaxes are removed and
  //         // the contact background is excluded (it gets a load zoom instead). ---
  //         if (!reduce) {
  //           const parallaxImgs = gsap.utils
  //             .toArray(".img_parallax")
  //             .filter((el) => !el.classList.contains("is-hero") && !el.closest(".contact_bg"));
  //           parallaxImgs.forEach((p) => {
  //             gsap.fromTo(
  //               p,
  //               { yPercent: -14 },
  //               {
  //                 yPercent: 14,
  //                 ease: "none",
  //                 scrollTrigger: {
  //                   trigger: p.closest(".section_cta") || p,
  //                   start: "top bottom",
  //                   end: "bottom top",
  //                   scrub: 1,
  //                 },
  //               }
  //             );
  //           });
  //         }
  //   
  //         ScrollTrigger.refresh();
  //       }
  //   
  //       // Wait for fonts before splitting (line breaks depend on the rendered font), with a
  //       // timeout fallback so a slow font never blocks the reveals.
  //       function start() {
  //         if (document.fonts?.ready) {
  //           let done = false;
  //           const go = () => { if (!done) { done = true; run(); } };
  //           document.fonts.ready.then(go);
  //           setTimeout(go, 600);
  //         } else {
  //           run();
  //         }
  //       }
  //   
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
    <section className="dobra" data-dobra="destaque-secao-179" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_testimonial-slider">
            <div className="padding-section-small"></div>
            <div className="padding-global">
              <div className="container-large">
                <div className="testimonial-slider_layout">
                  <div className="heading_testimonial">
                    <div className="max-heading is-38rem">
                      <h2 animation="section-heading" className="h4">Growing <em className="italic-heading">together</em>, one <em className="italic-heading">routine </em>at a time</h2>
                    </div>
                    <div className="arrow_group">
                      <div className="swiper_arrow slide_prev"><img src={s.imagem} loading="lazy" alt="Previous" className="icon-1x1-medium" /></div>
                      <div className="swiper_arrow slide_next"><img src={s.imagem2} loading="lazy" alt="Next" className="icon-1x1-medium" /></div>
                    </div>
                  </div>
                  <div className="swiper">
                    <div className="swiper-wrapper scroll-into-view">
                      <div className="swiper-slide">
                        <a href={s.destino || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem3} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino2 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem4} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino3 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem5} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino4 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem6} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino5 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem7} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino6 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem8} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino7 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem9} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href={s.destino8 || '#'} target="_blank" rel="noopener" className="testimonial_image w-inline-block">
                          <img loading="lazy" src={s.imagem10} alt="Aurae skincare in use" className="img" />
                          <div className="testimonial_user">@janiemos</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="arrow_group is-hide">
                    <div className="swiper_arrow slide_prev"><img src={s.imagem11} loading="lazy" alt="Previous" className="icon-1x1-medium" /></div>
                    <div className="swiper_arrow slide_next"><img src={s.imagem12} loading="lazy" alt="Next" className="icon-1x1-medium" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-section-small"></div>
          </section>
        </div>
    </section>
  );
}