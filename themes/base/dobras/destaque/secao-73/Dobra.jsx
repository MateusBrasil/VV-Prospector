"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-73
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
  //   // vetic-about-marquee — no local logic. The double tag marquee is pure CSS
  //   // (keyframes marquee-x / marquee-x-reverse in the shared /vetic/styles.css);
  //   // the header reveals run from /vetic/scripts/scroll-reveal.js (GSAP + ScrollTrigger via CDN).
  //   // Stub kept for the 4-file convention.
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
    <section className="dobra" data-dobra="destaque-secao-73" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_about"> <div className="about_padding"> <div className="about_container"> <div className="header_horizontal"> <div className="header is-about"> <div data-reveal="view"> <div className="tag"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>About Vertic</div> </div> </div> <div className="title"> <h2 className="heading-style-h2" data-reveal="view">Your pet’s health, our <span className="line">{s.rotulo}</span></h2> </div> </div> <div className="text-color-secondary" data-reveal="view">With years of experience, state-of-the-art facilities, and a commitment to compassionate service, we ensure your pets receive the personalized attention they deserve. From routine check-ups to advanced medical treatments, we’re here to support your pet’s health and happiness every step of the way.</div> </div> </div> </div> <div className="about_loop" aria-hidden="true"> <div className="section_tags-wrap"> <div className="tag_wrap-group"> <div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>In house laboratory</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Parasite prevention</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Vaccinations</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div> </div><div className="tag_wrap-group"> <div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>In house laboratory</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Parasite prevention</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Vaccinations</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div> </div> </div> <div className="section_tags-wrap is-invert"> <div className="tag_wrap-group is-invert"> <div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>In house laboratory</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Parasite prevention</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Vaccinations</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div> </div><div className="tag_wrap-group is-invert"> <div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>In house laboratory</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Parasite prevention</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Vaccinations</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Wellness care</div> </div> </div> </div> </div> </div> </section>
        </div>
    </section>
  );
}