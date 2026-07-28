"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-96
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
  //   // hirely-blog-detail — no local logic. El cuerpo del artículo (.scroll-animation
  //   // que envuelve el .text-rich-text) revela vía /hirely/scripts/scroll-reveal.js
  //   // (GSAP + ScrollTrigger). El header del post (título + descripción + imagen) es
  //   // markup estático del template; sus atributos `bounce-enter` son hooks del motor de
  //   // hero (hero-enter.js), que esta sección NO carga por ser tipo Plain/reveal, así que
  //   // el header renderiza visible de inmediato (fail-safe, sin opacity:0 inline). Stub
  //   // mantenido para la convención de 4 archivos. Global, sin `export`.
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
    <section className="dobra" data-dobra="equipa-secao-96" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_internal-blog">
              <div className="padding-global">
                <div className="container-large">
                  <div className="internal_blog-heading">
                    <div>
                      <h1 bounce-enter="h1" className="h3">{s.titulo}</h1>
                      <div className="spacer-medium"></div>
                      <div bounce-enter="description" className="text-color-on-dark">Startups grow fast—but without a repeatable hiring framework, it can be chaotic and risky.</div>
                    </div>
                    <div bounce-enter="hero-img" className="internal-blog_img">
                      <img src={s.imagem} loading="lazy" alt="How to Build a Scalable Hiring Process for Startups" className="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-section-medium"></div>
            </section>
            <section>
              <div className="padding-section-medium"></div>
              <div className="padding-global">
                <div className="container-small">
                  <div className="scroll-animation">
                    <div className="text-rich-text w-richtext">
                      <p>{s.texto}</p>
                      <h3>{s.subtitulo}</h3>
                      <p>Before you post any job, define exactly what success looks like in that role. Write a job description that includes responsibilities, required={true} skills, preferred qualifications, and cultural traits.</p>
                      <p>{s.texto2}</p>
                      <h3>{s.subtitulo2}</h3>
                      <p>{s.texto3}</p>
                      <p>{s.texto4}</p>
                      <p>{s.texto5}</p>
                      <h3>{s.subtitulo3}</h3>
                      <p>{s.texto6}</p>
                      <p>{s.texto7}</p>
                      <h3>{s.subtitulo4}</h3>
                      <p>{s.texto8}</p>
                      <h3>{s.subtitulo5}</h3>
                      <p>{s.texto9}</p>
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