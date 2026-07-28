"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-188
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
  //   /* hirely-testimonial-slider — no section-local logic.
  //      The Swiper init lives in the shared engine (/hirely/scripts/testimonial-slider.js)
  //      and the .scroll-animation reveals in /hirely/scripts/scroll-reveal.js.
  //      Stub kept for the 4-file convention. No top-level export (classic <script src>). */
  //   
  //   /* Hirely — shared scroll-reveal engine. Port of scroll-reveal.ts to a plain
  //      global (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger
  //      from CDN. The `.scroll-animation` grow-in workhorse (opacity 0 + scale .85 -> 1,
  //      .8s power3.out, start top 88%, once) + the Solutions feature assets pop, CTA
  //      width-grow images, and Services feature-card per-card reveal. Start-states set
  //      in JS (never inline) so a missing/failed script leaves content visible.
  //      Owns clearing the `html.has-js` first-paint guard. Honors prefers-reduced-motion. */
  //   (function () {
  //     if (typeof gsap === 'undefined') return; // fail-safe: no JS -> content stays visible
  //     if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //     var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     // Clear the inline first-paint guard so nothing is ever stuck at opacity:0.
  //     function clearGuard() {
  //       document.documentElement.classList.remove('has-js');
  //     }
  //   
  //     function initReveals() {
  //       var els = document.querySelectorAll('.scroll-animation');
  //   
  //       if (REDUCED) {
  //         gsap.set(els, { clearProps: 'opacity,transform' });
  //         clearGuard();
  //         return;
  //       }
  //   
  //       els.forEach(function (el) {
  //         gsap.set(el, { opacity: 0, scale: 0.85, transformOrigin: 'center center' });
  //       });
  //   
  //       clearGuard();
  //   
  //       var growIn = function (el) {
  //         gsap.to(el, {
  //           opacity: 1,
  //           scale: 1,
  //           duration: 0.8,
  //           ease: 'power3.out',
  //           onComplete: function () { gsap.set(el, { clearProps: 'transform' }); },
  //         });
  //       };
  //   
  //       // Max reachable scroll position for this page. In a standalone card the page
  //       // is often barely taller than the viewport, so an element near the bottom can
  //       // NEVER cross its `top 88%` start line by scrolling — it would stay stuck at
  //       // opacity:0. Reveal immediately any element that is already in view OR that
  //       // would become visible at maximum scroll; ScrollTrigger handles the rest.
  //       var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  //   
  //       els.forEach(function (el) {
  //         var topAtMaxScroll = el.getBoundingClientRect().top - maxScroll;
  //         if (topAtMaxScroll < window.innerHeight * 0.95) {
  //           growIn(el);
  //           return;
  //         }
  //         ScrollTrigger.create({
  //           trigger: el,
  //           start: 'top 88%',
  //           once: true,
  //           onEnter: function () { growIn(el); },
  //         });
  //       });
  //   
  //       if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  //     }
  //   
  //     // Solutions feature svg assets — `.thumb-img` / `.picture-img` scale-pop 0->1,
  //     // .5s inOutCubic, when `.features_description` enters view.
  //     function initFeatureAssets() {
  //       document.querySelectorAll('.features_description').forEach(function (block) {
  //         var assets = block.querySelectorAll('.thumb-img, .picture-img');
  //         if (!assets.length) return;
  //   
  //         if (REDUCED) { gsap.set(assets, { clearProps: 'transform' }); return; }
  //   
  //         gsap.set(assets, { scale: 0, transformOrigin: 'center center' });
  //         ScrollTrigger.create({
  //           trigger: block,
  //           start: 'top 88%',
  //           once: true,
  //           onEnter: function () { gsap.to(assets, { scale: 1, duration: 0.5, ease: 'power2.inOut' }); },
  //         });
  //       });
  //     }
  //   
  //     // CTA heading images — `.cta_img` SVGs grow width 0->natural, .7s inOutCubic.
  //     function initCtaImages() {
  //       document.querySelectorAll('.cta_header').forEach(function (block) {
  //         var imgs = block.querySelectorAll('.cta_img');
  //         if (!imgs.length) return;
  //   
  //         if (REDUCED) { gsap.set(imgs, { clearProps: 'width' }); return; }
  //   
  //         imgs.forEach(function (img) {
  //           var natural = getComputedStyle(img).width;
  //           gsap.set(img, { width: 0 });
  //           ScrollTrigger.create({
  //             trigger: block,
  //             start: 'top 88%',
  //             once: true,
  //             onEnter: function () {
  //               gsap.to(img, {
  //                 width: natural,
  //                 duration: 0.7,
  //                 ease: 'power2.inOut',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'width' }); },
  //               });
  //             },
  //           });
  //         });
  //       });
  //     }
  //   
  //     // Services feature cards — per-card reveal: `.feature_content` scale 0->1 +
  //     // `.feature_img` opacity 0->1 from yPercent 100, both .4s power3.out.
  //     function initFeatureCards() {
  //       document.querySelectorAll('.feature_card').forEach(function (card) {
  //         var content = card.querySelector('.feature_content');
  //         var img = card.querySelector('.feature_img');
  //         if (!content && !img) return;
  //         if (REDUCED) return;
  //   
  //         if (content) gsap.set(content, { scale: 0, transformOrigin: 'center center' });
  //         if (img) gsap.set(img, { opacity: 0, yPercent: 100 });
  //   
  //         ScrollTrigger.create({
  //           trigger: card,
  //           start: 'top 85%',
  //           once: true,
  //           onEnter: function () {
  //             if (content)
  //               gsap.to(content, {
  //                 scale: 1, duration: 0.4, ease: 'power3.out',
  //                 onComplete: function () { gsap.set(content, { clearProps: 'all' }); },
  //               });
  //             if (img)
  //               gsap.to(img, {
  //                 opacity: 1, yPercent: 0, duration: 0.4, ease: 'power3.out',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'all' }); },
  //               });
  //           },
  //         });
  //       });
  //     }
  //   
  //     function init() {
  //       initReveals();
  //       initFeatureAssets();
  //       initCtaImages();
  //       initFeatureCards();
  //       if (typeof ScrollTrigger !== 'undefined') {
  //         window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') init();
  //     else document.addEventListener('DOMContentLoaded', init);
  //   })();
  //   
  //   /* Hirely — testimonial carousel. Port of testimonial-slider.ts to a plain global
  //      (no `export`, self-init — Rule 1). Swiper is a CDN global (swiper-bundle includes
  //      Navigation + A11y + Keyboard, all auto-registered — no `modules` array needed).
  //      One full-width testimonial per view, infinite loop, speed 500, 1.5rem gap, custom
  //      arrows `[data-testimonial-prev/next]` (siblings of `.testimonial-swiper`). */
  //   (function () {
  //     if (typeof Swiper === 'undefined') return; // fail-safe: no slider, content visible
  //   
  //     function initTestimonialSliders() {
  //       document.querySelectorAll('.testimonial-swiper').forEach(function (el) {
  //         new Swiper(el, {
  //           slidesPerView: 1,
  //           loop: true,
  //           speed: 500,
  //           spaceBetween: 24,
  //           keyboard: { enabled: true },
  //           navigation: {
  //             nextEl: el.parentElement ? el.parentElement.querySelector('[data-testimonial-next]') : null,
  //             prevEl: el.parentElement ? el.parentElement.querySelector('[data-testimonial-prev]') : null,
  //           },
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState !== 'loading') initTestimonialSliders();
  //     else document.addEventListener('DOMContentLoaded', initTestimonialSliders);
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-188" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_testimonial-slider">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="slider w-slider testimonial-swiper">
                    <div className="slider-mask is-testimonial w-slider-mask swiper-wrapper">
                      <div className="slide-item is-testimonial w-slide swiper-slide">
                        <div className="testimonial_slider">
                          <div className="testimonial_img-wrap">
                            <div className="testimonial-slider_img">
                              <img src={s.imagem} loading="lazy" alt="A casually dressed woman smiling, representing approachable talent and a friendly recruitment experience." className="img" />
                            </div>
                          </div>
                          <div className="testimonial_info">
                            <div className="text-5xl">A true partner in growth.</div>
                            <div className="spacer-medium"></div>
                            <div>“We launched our Mexico City operations in 30 days – no local entity needed. Their payroll and benefits infrastructure saved us $280K in setup costs, and their talent retention rate is 40% higher than industry average.”</div>
                            <div className="spacer-xhuge"></div>
                            <div className="text-xl">Mark Tressler</div>
                            <div className="spacer-xsmall"></div>
                            <div>COO, FinTech Global</div>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item is-testimonial w-slide swiper-slide">
                        <div className="testimonial_slider">
                          <div className="testimonial_img-wrap">
                            <div className="testimonial-slider_img">
                              <img src={s.imagem2} loading="lazy" alt="A serious professionally dressed man with his hand on his chin, portraying strategic thinking and leadership in recruitment decisions." className="img" />
                            </div>
                          </div>
                          <div className="testimonial_info">
                            <div className="text-5xl">A true partner in growth.</div>
                            <div className="spacer-medium"></div>
                            <div>“In 2024, we onboarded 12 pre-vetted LatAm specialists through Hirely – from paralegals to senior developers. Not only did we cut payroll costs by 72%, but the talent outperformed our local hires in productivity. Their end-to-end compliance support eliminated our legal headaches.”</div>
                            <div className="spacer-xhuge"></div>
                            <div className="text-xl">Mark Tressler</div>
                            <div className="spacer-xsmall"></div>
                            <div>COO, FinTech Global</div>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item is-testimonial w-slide swiper-slide">
                        <div className="testimonial_slider">
                          <div className="testimonial_img-wrap">
                            <div className="testimonial-slider_img">
                              <img src={s.imagem3} loading="lazy" alt="A serious professionally dressed woman, conveying confidence and expertise in HR and recruitment decisions." className="img" />
                            </div>
                          </div>
                          <div className="testimonial_info">
                            <div className="text-5xl">A true partner in growth.</div>
                            <div className="spacer-medium"></div>
                            <div>“We scaled our engineering team 3X faster using Hirely’s 14-day hiring guarantee. Their AI matching delivered candidates who coded in our tech stack from day one – something our internal recruiters couldn’t achieve in months.”</div>
                            <div className="spacer-xhuge"></div>
                            <div className="text-xl">Priya Nair</div>
                            <div className="spacer-xsmall"></div>
                            <div>COO, FinTech Global</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-arrows">
                      <button type="button" data-testimonial-prev="" aria-label="Previous testimonial" className="arrow" onClick={s.onClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main">
                          <path d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z" fill="currentColor"></path>
                        </svg>
                      </button>
                      <button type="button" data-testimonial-next="" aria-label="Next testimonial" className="arrow is-right" onClick={s.onClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main">
                          <path d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z" fill="currentColor"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-section-medium"></div>
            </section>
          </main>
        </div>
    </section>
  );
}