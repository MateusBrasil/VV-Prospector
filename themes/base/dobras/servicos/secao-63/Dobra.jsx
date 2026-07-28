"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-63
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
  //   // hirely-commit — no local logic. The two-column heading/image layout reveals
  //   // via the shared /hirely/scripts/scroll-reveal.js (.scroll-animation growIn:
  //   // opacity 0 + scale .85 → 1). The inlined Button's hover icon-swap is pure CSS
  //   // from /hirely/styles.css. Stub kept for the 4-file convention.
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
    <section className="dobra" data-dobra="servicos-secao-63" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_commit">
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-large">
                  <div className="commit_grid">
                    <div className="commit_heading">
                      <div>
                        <h2 className="h3 scroll-animation">{s.titulo}</h2>
                        <div className="spacer-medium"></div>
                        <div className="scroll-animation">Founded with a passion for connecting talent and opportunity, we have dedicated ourselves to providing customized staffing solutions that meet the unique needs of every client. Our mission is to empower businesses to thrive by delivering the right people at the right time.</div>
                      </div>
                      <div className="scroll-animation">
                        
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
                    <div className="commit_img scroll-animation"><img src={s.imagem} loading="lazy" alt="A group of three professionals in a business meeting, illustrating teamwork and strategic hiring collaboration." className="img" /></div>
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