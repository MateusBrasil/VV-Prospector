"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-189
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
  //   /* hirely-testimonials — intentional empty stub.
  //      All animation for this section is the generic .scroll-animation reveal,
  //      handled by the shared engine /hirely/scripts/scroll-reveal.js (GSAP +
  //      ScrollTrigger). This is a static testimonial wall with no section-specific
  //      behavior. No top-level export (loaded as a classic <script src>). */
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
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-189" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_testimonial">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="vertical-center">
                    <div>
                      <div className="max-heading is-42rem">
                        <h2 className="scroll-animation">{s.titulo}</h2>
                      </div>
                      <div className="spacer-medium"></div>
                      <div className="scroll-animation">The Latam talent partner top performers choose</div>
                    </div>
                    <div className="spacer">
                      <div style={{height: '7.5rem'}} className="spacer-desktop"></div>
                      <div style={{height: '5.5rem'}} className="spacer-tablet"></div>
                      <div style={{height: '3.5rem'}} className="spacer-mobile"></div>
                    </div>
                    <div className="testimonials_wrap">
                      <div className="testimonial_card-wrap">
                        <div testimonial="name-one" className="testimonial_name-wrap">
                          <div className="testimonial_arrow"><img src={s.imagem} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonial_name">Mark Tressler</div>
                        </div>
                        <div className="testimonial_card is-one">
                          <div className="testimonial_card-text">"In 2024, we onboarded 12 pre-vetted Latam specialists through Hirely – from paralegals to senior developers. Not only did we cut payroll costs by 72%, but the talent outperformed our local hires in productivity. Their end-to-end compliance support eliminated our legal headaches."</div>
                          <div className="testimonial_card-name">Mark Tressler</div>
                          <div className="testimonial_img"><img src={s.imagem2} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/hirely/images/testimonial-img-3_1testimonial-img-3.avif 500w, https://d173woph5zl366.cloudfront.net/hirely/images/testimonial-img-3_1testimonial-img-3.avif 698w" alt="A casually dressed man smiling, reflecting an approachable candidate and a positive hiring experience." className="img" /></div>
                        </div>
                      </div>
                      <div className="testimonial_card-wrap">
                        <div className="testimonial_card is-two">
                          <div className="testimonial_card-text">"We scaled our engineering team 3X faster using Hirely’s 14-day hiring guarantee. Their AI matching delivered candidates who coded in our tech stack from day one – something our internal recruiters couldn’t achieve in months."</div>
                          <div className="testimonial_card-name">Priya Nair</div>
                          <div className="testimonial_img"><img src={s.imagem3} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/hirely/images/testimonial-img-2_1testimonial-img-2.avif 500w, https://d173woph5zl366.cloudfront.net/hirely/images/testimonial-img-2_1testimonial-img-2.avif 699w" alt="A formally dressed woman smiling confidently, conveying professionalism and trust in recruitment services." className="img" /></div>
                        </div>
                        <div className="testimonial_name-wrap is-two">
                          <div className="testimonial_arrow is-two"><img src={s.imagem4} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonial_name is-two">Priya Nair</div>
                        </div>
                      </div>
                      <div className="testimonial_card-wrap">
                        <div className="testimonial_card is-three">
                          <div className="testimonial_card-text">"We launched our Mexico City operations in 30 days – no local entity needed. Their payroll and benefits infrastructure saved us $280K in setup costs, and their talent retention rate is 40% higher than industry average."</div>
                          <div className="testimonial_card-name">Mark Tressler</div>
                          <div className="testimonial_img"><img src={s.imagem5} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/hirely/images/testimonial-img-1_1testimonial-img-1.avif 500w, https://d173woph5zl366.cloudfront.net/hirely/images/testimonial-img-1_1testimonial-img-1.avif 699w" alt="A casually dressed woman smiling, representing approachable talent and a friendly recruitment experience." className="img" /></div>
                        </div>
                        <div className="testimonial_name-wrap is-three">
                          <div className="testimonial_arrow"><img src={s.imagem6} loading="lazy" alt="" className="img" /></div>
                          <div className="testimonial_name">Mark Tressler</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}