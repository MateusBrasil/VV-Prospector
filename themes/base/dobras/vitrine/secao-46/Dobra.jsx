"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-46
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
  //   // vetic-cta — no local logic. The curtain reveals on the side images plus the
  //   // heading/button reveals run from the shared /vetic/scripts/scroll-reveal.js
  //   // (GSAP + ScrollTrigger via CDN). Stub kept for the 4-file convention.
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
    <section className="dobra" data-dobra="vitrine-secao-46" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_cta">
            <div className="cta_wrap">
              <div className="cta_images hide-mobile-landscape">
                <div className="cta_img" data-reveal="curtain" data-reveal-delay="0"><div className="img-wrapper"><img src={s.imagem} alt="" className="img" loading="lazy" /></div></div>
                <div className="cta_img" data-reveal="curtain" data-reveal-delay="0.1"><div className="img-wrapper"><img src={s.imagem2} alt="" className="img" loading="lazy" /></div></div>
              </div>
              <div className="cta_content">
                <h2 className="heading-style-h2" data-reveal="view">Because your pets deserve the best, <span className="line">{s.rotulo}</span></h2>
                <div data-reveal="button">
                  <a data-wf--button--variant="base" href="/contact" className="button-primary w-inline-block">
                    <div className="button-left">
                      <div>Contact us</div>
                    </div>
                    <div className="button-right">
                      <div className="button-right_center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="button_icon"><path d="M9.75569 11.3981C9.75569 9.83007 8.48393 8.55859 6.91565 8.55859C5.34737 8.55859 4.07617 9.83007 4.07617 11.3981C4.07617 12.9672 5.34709 14.2381 6.91565 14.2381C8.48421 14.2381 9.75569 12.9672 9.75569 11.3981ZM21.0803 9.11327C19.5123 9.11327 18.2408 10.3848 18.2408 11.9528C18.2408 13.5219 19.5123 14.7922 21.0803 14.7922C22.6486 14.7922 23.9201 13.5219 23.9201 11.9528C23.9201 10.3848 22.6489 9.11327 21.0803 9.11327ZM18.5012 15.1137C18.3038 14.8704 18.0244 14.5887 17.7035 14.2933C16.8473 13.1836 15.508 12.4657 13.9983 12.4657C12.6545 12.4657 11.4466 13.0347 10.5929 13.9413C10.1079 14.3633 9.67673 14.7752 9.40233 15.114L9.21865 15.3382C8.36185 16.3829 7.29533 17.6827 7.30317 19.8882C7.31073 21.9364 8.97869 23.6038 11.021 23.6038C11.5878 23.6051 12.1472 23.4753 12.6555 23.2248C13.1639 22.9742 13.6075 22.6096 13.9518 22.1593C14.2961 22.6097 14.7398 22.9744 15.2484 23.2249C15.7569 23.4755 16.3165 23.6052 16.8834 23.6038C18.9249 23.6038 20.5925 21.9367 20.6004 19.8882C20.6082 17.6827 19.5414 16.3829 18.6849 15.3382L18.5012 15.1137Z" fill="currentColor"></path><path d="M14.1974 10.6545C15.9255 10.6545 17.3264 9.25358 17.3264 7.52548C17.3264 5.79739 15.9255 4.39648 14.1974 4.39648C12.4693 4.39648 11.0684 5.79739 11.0684 7.52548C11.0684 9.25358 12.4693 10.6545 14.1974 10.6545Z" fill="currentColor"></path></svg></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="cta_images hide-mobile-landscape">
                <div className="cta_img" data-reveal="curtain" data-reveal-delay="0.05"><div className="img-wrapper"><img src={s.imagem3} alt="" className="img" loading="lazy" /></div></div>
                <div className="cta_img" data-reveal="curtain" data-reveal-delay="0.15"><div className="img-wrapper"><img src={s.imagem4} alt="" className="img" loading="lazy" /></div></div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}