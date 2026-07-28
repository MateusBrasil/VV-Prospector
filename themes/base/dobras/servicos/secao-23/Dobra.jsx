"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-23
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
  //   // vetic-faq — single-open accordion, ported from the inline <script> in
  //   // src/components/FaqSection.astro (plain JS, classic script — no exports).
  //   // The scroll reveals (data-reveal="view") run from the shared /vetic/scripts/scroll-reveal.js.
  //   
  //   function init() {
  //     var faqs = document.querySelectorAll('[data-faq]');
  //     faqs.forEach(function (faq) {
  //       var items = faq.querySelectorAll('.accordion');
  //       faq.querySelectorAll('[data-faq-toggle]').forEach(function (btn) {
  //         btn.addEventListener('click', function () {
  //           var item = btn.closest('.accordion');
  //           var isOpen = item ? item.hasAttribute('data-open') : false;
  //           items.forEach(function (i) {
  //             i.removeAttribute('data-open');
  //             var toggle = i.querySelector('[data-faq-toggle]');
  //             if (toggle) toggle.setAttribute('aria-expanded', 'false');
  //           });
  //           if (!isOpen && item) {
  //             item.setAttribute('data-open', '');
  //             btn.setAttribute('aria-expanded', 'true');
  //           }
  //         });
  //       });
  //     });
  //   }
  //   
  //   if (document.readyState !== 'loading') init();
  //   else document.addEventListener('DOMContentLoaded', init);
  //   
  //   /* =============================================================================
  //      vetic/scripts/scroll-reveal.js — SHARED reveal engine for all Vetic ports.
  //      Ported from the template's src/scripts/scroll-reveal.ts (TS + ESM -> plain
  //      classic script: NO top-level export, gsap/ScrollTrigger come from the CDN
  //      globals). Reveals [data-reveal] elements as they enter the viewport.
  //      Type per element via data-reveal="view|down|left|right|scale|fade|button|curtain".
  //      Honors prefers-reduced-motion (elements shown immediately, no motion).
  //      ============================================================================= */
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   // Reveal presets. `view` is the STANDARD entrance: opacity 0 + a 15% (of the
  //   // element's own height) translateY, eased outQuart over 0.7s. The other types
  //   // (down/left/right/scale/fade) reuse the same fade and are kept as generic
  //   // variants for the few non-standard reveals.
  //   var VETIC_REVEAL_FROM = {
  //     view: { yPercent: 15, opacity: 0 },
  //     down: { yPercent: -15, opacity: 0 },
  //     left: { x: -48, opacity: 0 },
  //     right: { x: 48, opacity: 0 },
  //     scale: { scale: 0.92, opacity: 0 },
  //     fade: { opacity: 0 },
  //     // Standard "hero button" entrance — rise 30% of own height + fade on an
  //     // outBack overshoot over 1s. Apply data-reveal="button" to the WRAPPER of a
  //     // hero-style button so the button's own transform stays free for its :hover.
  //     button: { yPercent: 30, opacity: 0 },
  //   };
  //   
  //   // Per-type easing / duration overrides (default: outQuart, 0.7s).
  //   // `button` matches the hero exactly: GSAP's default back.out constant
  //   // (1.70158) IS the hero's cubic-bezier(0.34, 1.56, 0.64, 1).
  //   var VETIC_REVEAL_EASE = { button: 'back.out' };
  //   var VETIC_REVEAL_DURATION = { button: 1 };
  //   
  //   function initVeticScrollReveal() {
  //     var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     var els = document.querySelectorAll('[data-reveal]');
  //   
  //     if (reduce) {
  //       els.forEach(function (el) { gsap.set(el, { clearProps: 'all', opacity: 1 }); });
  //       return;
  //     }
  //   
  //     els.forEach(function (el) {
  //       var dir = el.dataset.reveal || 'view';
  //       var delay = parseFloat(el.dataset.revealDelay || '0');
  //   
  //       // Curtain reveal: the framed image drops in behind its clip while the inner
  //       // photo zooms out from 1.5x and a blur sharpens. Animates the element's
  //       // nested .img-wrapper + .img, not the element. A slow 2s glide on outQuart.
  //       if (dir === 'curtain') {
  //         var wrap = el.querySelector('.img-wrapper');
  //         var img = el.querySelector('.img');
  //         if (wrap && img) {
  //           gsap.set(wrap, { yPercent: -110 });
  //           gsap.set(img, { yPercent: 100, scale: 1.5, filter: 'blur(10px)' });
  //           ScrollTrigger.create({
  //             trigger: el,
  //             start: 'top 85%',
  //             once: true,
  //             onEnter: function () {
  //               // clearProps on finish so the settled (natural) state takes over —
  //               // lets a later CSS :hover on the same .img win, which a leftover
  //               // GSAP inline transform would otherwise block.
  //               gsap.to(wrap, {
  //                 yPercent: 0, duration: 2, delay: delay, ease: 'power4.out',
  //                 onComplete: function () { gsap.set(wrap, { clearProps: 'transform' }); },
  //               });
  //               gsap.to(img, {
  //                 yPercent: 0, scale: 1, filter: 'blur(0px)', duration: 2, delay: delay, ease: 'power4.out',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'transform,filter' }); },
  //               });
  //             },
  //           });
  //           return;
  //         }
  //       }
  //   
  //       var from = VETIC_REVEAL_FROM[dir] || VETIC_REVEAL_FROM.view;
  //       gsap.set(el, from);
  //       ScrollTrigger.create({
  //         trigger: el,
  //         start: 'top 85%',
  //         once: true,
  //         onEnter: function () {
  //           gsap.to(el, {
  //             x: 0,
  //             y: 0,
  //             xPercent: 0,
  //             yPercent: 0,
  //             scale: 1,
  //             opacity: 1,
  //             duration: VETIC_REVEAL_DURATION[dir] || 0.7,
  //             delay: delay,
  //             ease: VETIC_REVEAL_EASE[dir] || 'power4.out', // default: outQuart
  //           });
  //         },
  //       });
  //     });
  //   
  //     ScrollTrigger.refresh();
  //     fireUnreachableReveals();
  //     // Image loads change layout; re-check after every refresh (load, resize).
  //     ScrollTrigger.addEventListener('refresh', fireUnreachableReveals);
  //   }
  //   
  //   // Standalone section pages are short: an element near the bottom can have its
  //   // trigger start BEYOND the page's max scroll, so it would stay hidden forever
  //   // (e.g. last services row: start 1054 > maxScroll 1016). Fire those instantly.
  //   function fireUnreachableReveals() {
  //     var maxS = ScrollTrigger.maxScroll(window);
  //     ScrollTrigger.getAll().forEach(function (t) {
  //       if (t.start > maxS && t.vars && t.vars.onEnter) {
  //         var fn = t.vars.onEnter;
  //         t.kill();
  //         fn();
  //       }
  //     });
  //   }
  //   
  //   if (document.readyState !== 'loading') initVeticScrollReveal();
  //   else document.addEventListener('DOMContentLoaded', initVeticScrollReveal);
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="servicos-secao-23" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_faq">
            <div className="padding-global padding-section-medium">
              <div className="container-large">
                <div className="discover_wrap">
                  <div className="discover_content">
                    <div className="header is-left is-secondary">
                      <div data-reveal="view">
                        <div className="tag">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg>
                          <div>Services our provide</div>
                        </div>
                      </div>
                      <div className="title">
                        <h2 className="heading-style-h2" data-reveal="view">Frequently <span className="line-h2">{s.rotulo}</span>questions</h2>
                      </div>
                    </div>
                    <div className="cta_box" data-reveal="view">
                      <div className="cta_box-content">
                        <div className="text-xl">Book Your Pet’s Check-Up Today!</div>
                        <div className="text-sm text-color-secondary">24/7 Emergency Services – We’re Here When You Need Us Most.</div>
                      </div>
                      <div><a href="/contact" className="button w-button">{s.acao}</a></div>
                    </div>
                  </div>
                  <div className="faq_content" data-faq="">
                    <div className="accordion" data-reveal="view">
                      <button className="accordion-toggle" type="button" aria-expanded="false" data-faq-toggle="" onClick={s.onClick}>
                        <div className="text-xl text-weight-medium">What is preventative care?</div>
                        <div className="accordion-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-horizontal icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-vertical icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor" transform="rotate(90 10 10)"></path></svg></div>
                      </button>
                      <div className="accordion-content" data-faq-panel="">
                        <div className="accordion_content-wrap">
                          <div className="text-color-secondary">Preventative care includes routine check-ups, vaccinations, and health screenings. These services help detect potential health issues early. Keeping your pet healthy is our top priority.</div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" data-reveal="view">
                      <button className="accordion-toggle" type="button" aria-expanded="false" data-faq-toggle="" onClick={s.onClick}>
                        <div className="text-xl text-weight-medium">Why are vaccinations important for my pet?</div>
                        <div className="accordion-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-horizontal icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-vertical icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor" transform="rotate(90 10 10)"></path></svg></div>
                      </button>
                      <div className="accordion-content" data-faq-panel="">
                        <div className="accordion_content-wrap">
                          <div className="text-color-secondary">Vaccinations protect your pet from harmful diseases and help prevent the spread of contagious illnesses. They are a key part of maintaining your pet’s overall health.</div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" data-reveal="view">
                      <button className="accordion-toggle" type="button" aria-expanded="false" data-faq-toggle="" onClick={s.onClick}>
                        <div className="text-xl text-weight-medium">What does a routine check-up involve?</div>
                        <div className="accordion-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-horizontal icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-vertical icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor" transform="rotate(90 10 10)"></path></svg></div>
                      </button>
                      <div className="accordion-content" data-faq-panel="">
                        <div className="accordion_content-wrap">
                          <div className="text-color-secondary">A routine check-up includes a thorough physical examination, weight and diet assessment, and discussions about your pet’s overall health. It’s an essential step in ensuring early detection of any potential health concerns.</div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" data-reveal="view">
                      <button className="accordion-toggle" type="button" aria-expanded="false" data-faq-toggle="" onClick={s.onClick}>
                        <div className="text-xl text-weight-medium">How often should my pet receive preventative care?</div>
                        <div className="accordion-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-horizontal icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-vertical icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor" transform="rotate(90 10 10)"></path></svg></div>
                      </button>
                      <div className="accordion-content" data-faq-panel="">
                        <div className="accordion_content-wrap">
                          <div className="text-color-secondary">Preventative care should be scheduled annually, though some pets may need more frequent visits depending on their age, breed, and health conditions. Your veterinarian will recommend the best schedule for your pet.</div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" data-reveal="view">
                      <button className="accordion-toggle" type="button" aria-expanded="false" data-faq-toggle="" onClick={s.onClick}>
                        <div className="text-xl text-weight-medium">Can preventative care help my senior pet?</div>
                        <div className="accordion-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-horizontal icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-vertical icon-1x1-base"><path d="M15.8332 10.8317H4.1665V9.16504H15.8332V10.8317Z" fill="currentColor" transform="rotate(90 10 10)"></path></svg></div>
                      </button>
                      <div className="accordion-content" data-faq-panel="">
                        <div className="accordion_content-wrap">
                          <div className="text-color-secondary">Absolutely! Preventative care for senior pets focuses on monitoring age-related conditions, maintaining mobility, and ensuring your pet’s quality of life as they age. Early intervention is especially beneficial for older pets.</div>
                        </div>
                      </div>
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