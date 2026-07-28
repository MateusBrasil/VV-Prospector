"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-22
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
  //   // hirely-contact-faq — no local logic. The accordion single-open behaviour
  //   // (height animation + arrow rotate + ARIA/keyboard) is driven by
  //   // /hirely/scripts/accordion.js; the `.scroll-animation` reveals by
  //   // /hirely/scripts/scroll-reveal.js (GSAP). Stub kept for the 4-file convention.
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
  //   /* Hirely — accordion (FAQ + solutions). Port of accordion.ts to a plain global
  //      (no `export`, self-init — Rule 1). No GSAP — CSS height transition. Single-open
  //      per `[data-accordion-group]`: opening one collapses its siblings. Animates the
  //      `.accordion_bottom` height and rotates `.accordion_arrow`. Keyboard + ARIA. */
  //   (function () {
  //     function initAccordions() {
  //       var groups = document.querySelectorAll('[data-accordion-group]');
  //       groups.forEach(function (group) {
  //         var items = Array.prototype.slice.call(group.querySelectorAll('.accordion'));
  //         items.forEach(function (item) {
  //           var top = item.querySelector('.accordion_top');
  //           var bottom = item.querySelector('.accordion_bottom');
  //           var arrow = item.querySelector('.accordion_arrow');
  //           if (!top || !bottom) return;
  //   
  //           bottom.style.height = '0px';
  //           bottom.style.overflow = 'hidden';
  //           bottom.style.transition = 'height 0.4s ease';
  //   
  //           var setOpen = function (open) {
  //             bottom.style.height = open ? bottom.scrollHeight + 'px' : '0px';
  //             item.classList.toggle('is-open', open);
  //             if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
  //             top.setAttribute('aria-expanded', String(open));
  //           };
  //   
  //           top.setAttribute('role', 'button');
  //           top.setAttribute('tabindex', '0');
  //           top.setAttribute('aria-expanded', 'false');
  //   
  //           var toggle = function () {
  //             var willOpen = !item.classList.contains('is-open');
  //             items.forEach(function (other) {
  //               if (other !== item) {
  //                 var ob = other.querySelector('.accordion_bottom');
  //                 var oa = other.querySelector('.accordion_arrow');
  //                 var ot = other.querySelector('.accordion_top');
  //                 if (ob) ob.style.height = '0px';
  //                 if (oa) oa.style.transform = 'rotate(0deg)';
  //                 if (ot) ot.setAttribute('aria-expanded', 'false');
  //                 other.classList.remove('is-open');
  //               }
  //             });
  //             setOpen(willOpen);
  //           };
  //   
  //           top.addEventListener('click', toggle);
  //           top.addEventListener('keydown', function (e) {
  //             if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  //           });
  //         });
  //       });
  //   
  //       // Keep open items sized correctly on resize.
  //       window.addEventListener('resize', function () {
  //         document.querySelectorAll('.accordion.is-open .accordion_bottom').forEach(function (b) {
  //           b.style.height = b.scrollHeight + 'px';
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState !== 'loading') initAccordions();
  //     else document.addEventListener('DOMContentLoaded', initAccordions);
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-22" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section data-wf--section-faq--variant="light" className="section_faq w-variant-20fbf543-8cb9-2ba1-664d-c7fd16d2b80d">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="faq_grid w-variant-20fbf543-8cb9-2ba1-664d-c7fd16d2b80d">
                    <div>
                      <h2 className="scroll-animation">{s.titulo}</h2>
                      <div className="spacer-medium"></div>
                      <div className="scroll-animation">Find answers to common questions about our staffing services and how we can help you.</div>
                    </div>
                    <div data-accordion-group="" className="faq_questions">
                      <div data-wf--accordion--variant="base" className="accordion accordion_wrap scroll-animation">
                        <div className="accordion_top">
                          <div className="text-3xl">What services do you offer?</div>
                          <div className="accordion_icon"><img src={s.imagem} loading="lazy" alt="" className="accordion_arrow" /></div>
                        </div>
                        <div className="accordion_bottom">
                          <div className="spacer-medium"></div>
                          <div>We provide permanent recruitment, temporary staffing, and executive search services. Our solutions are tailored to meet the unique needs of each client. Whether you need full-time hires or project-based staff, we have you covered.</div>
                          <div className="accordion_button">
                            <div className="button-wrap">
                              <a href="/about" className="button w-button">{s.acao}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-wf--accordion--variant="base" className="accordion accordion_wrap scroll-animation">
                        <div className="accordion_top">
                          <div className="text-3xl">How does the process work?</div>
                          <div className="accordion_icon"><img src={s.imagem2} loading="lazy" alt="" className="accordion_arrow" /></div>
                        </div>
                        <div className="accordion_bottom">
                          <div className="spacer-medium"></div>
                          <div>We provide permanent recruitment, temporary staffing, and executive search services. Our solutions are tailored to meet the unique needs of each client. Whether you need full-time hires or project-based staff, we have you covered.</div>
                        </div>
                      </div>
                      <div data-wf--accordion--variant="base" className="accordion accordion_wrap scroll-animation">
                        <div className="accordion_top">
                          <div className="text-3xl">What industries do you serve?</div>
                          <div className="accordion_icon"><img src={s.imagem3} loading="lazy" alt="" className="accordion_arrow" /></div>
                        </div>
                        <div className="accordion_bottom">
                          <div className="spacer-medium"></div>
                          <div>We provide permanent recruitment, temporary staffing, and executive search services. Our solutions are tailored to meet the unique needs of each client. Whether you need full-time hires or project-based staff, we have you covered.</div>
                        </div>
                      </div>
                      <div data-wf--accordion--variant="base" className="accordion accordion_wrap scroll-animation">
                        <div className="accordion_top">
                          <div className="text-3xl">How quickly can I hire?</div>
                          <div className="accordion_icon"><img src={s.imagem4} loading="lazy" alt="" className="accordion_arrow" /></div>
                        </div>
                        <div className="accordion_bottom">
                          <div className="spacer-medium"></div>
                          <div>We provide permanent recruitment, temporary staffing, and executive search services. Our solutions are tailored to meet the unique needs of each client. Whether you need full-time hires or project-based staff, we have you covered.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                    <div style={{height: '6.25rem'}} className="spacer-desktop"></div>
                    <div style={{height: '4.25rem'}} className="spacer-tablet"></div>
                    <div style={{height: '2.25rem'}} className="spacer-mobile"></div>
                  </div>
                  <div className="faq_cta scroll-animation">
                    <div>
                      <h3 className="text-4xl">{s.subtitulo}</h3>
                      <div className="spacer-medium"></div>
                      <div>Reach out to us anytime for assistance.</div>
                    </div>
                    <a data-wf--button--variant="base" href="/contact" className="button_wrap w-inline-block">
                      <div className="button_main">
                        <div className="button_icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium is-2">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1569 12.711L4.49994 18.368L3.08594 16.954L8.03594 12.004L3.08594 7.05401L4.49994 5.64001L10.1569 11.297C10.3444 11.4845 10.4497 11.7389 10.4497 12.004C10.4497 12.2692 10.3444 12.5235 10.1569 12.711Z" fill="currentColor"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 24" fill="none" className="icon-1x1-medium is-1">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1569 12.711L4.49994 18.368L3.08594 16.954L8.03594 12.004L3.08594 7.05401L4.49994 5.64001L10.1569 11.297C10.3444 11.4845 10.4497 11.7389 10.4497 12.004C10.4497 12.2692 10.3444 12.5235 10.1569 12.711Z" fill="currentColor"></path>
                          </svg>
                        </div>
                        <div>Contact Us</div>
                      </div>
                      <div className="button_shadow"></div>
                    </a>
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