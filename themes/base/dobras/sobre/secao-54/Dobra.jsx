"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-54
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
  //   // Firmo — Overview: sección estática. No requiere JS propio.
  //   // El parallax de .overview_image y los reveals de .scroll-into-view los maneja
  //   // la hoja compartida /firmo/scripts/scroll-reveal.js (global, self-init, sin export).
  //   // Si GSAP no carga, el contenido queda visible (fail-safe, sin opacity:0 inline).
  //   
  //   /* Firmo — shared reveal engine. Port of the template's reveal.ts to a plain global
  //      (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger from CDN.
  //      Generic reveals only (parallax images, scroll-into-view slide-in, reveal-up, fade,
  //      logos scrub); page heroes carry their own on-load script. Timings/easings verbatim
  //      from the source (outQuart = power3.out). Honors prefers-reduced-motion. */
  //   (function () {
  //     if (typeof gsap === 'undefined') return; // fail-safe: no JS → content stays visible
  //     if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //     if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  //   
  //     var EASE = 'power3.out';
  //     var SLIDE = 0.7;
  //     var PARALLAX = 1.7;
  //     var SLIDE_X = 100;
  //     var SLIDE_Y = 100;
  //   
  //     var PARALLAX_PARENTS = [
  //       '.business_image',
  //       '.support_image',
  //       '.overview_image',
  //       '.contact_image',
  //       '.about-three_image',
  //       '.services-hero_image',
  //       '.experience_image',
  //       '.blog_image',
  //       '.blogs-hero_image',
  //       '.location_image',
  //       '.blogs-three_card-image',
  //       '.team_card-image',
  //     ].join(',');
  //   
  //     function initReveal() {
  //       if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //         document.documentElement.classList.remove('anim');
  //         return;
  //       }
  //   
  //       // 1) Parallax images — wrapper y -110%→0; img y 110%→0, scale 1.5→1, blur 10→0; 1.7s.
  //       document.querySelectorAll(PARALLAX_PARENTS).forEach(function (parent) {
  //         var wrap = parent.querySelector('.img-wrapper');
  //         var img = wrap && wrap.querySelector('.img');
  //         if (!wrap || !img) return;
  //         gsap.set(wrap, { yPercent: -110, opacity: 1 });
  //         gsap.set(img, { yPercent: 110, scale: 1.5, filter: 'blur(10px)' });
  //         gsap
  //           .timeline({
  //             scrollTrigger: { trigger: parent, start: 'top 85%', once: true },
  //             onComplete: function () { gsap.set([wrap, img], { clearProps: 'transform,filter' }); },
  //           })
  //           .to(wrap, { yPercent: 0, duration: PARALLAX, ease: EASE }, 0)
  //           .to(img, { yPercent: 0, scale: 1, filter: 'blur(0px)', duration: PARALLAX, ease: EASE }, 0);
  //       });
  //   
  //       // 2) [reveal-x] .scroll-into-view → horizontal slide-in: x +100 → 0 + opacity, 0.7s.
  //       gsap.utils.toArray('.scroll-into-view').forEach(function (el) {
  //         if (el.closest('.section_hero')) return;
  //         if (el.closest('.section_logos')) return;
  //         gsap.set(el, { x: SLIDE_X, opacity: 0 });
  //         gsap.to(el, {
  //           x: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2c) [reveal-y] .reveal-up cards enter from below: y +100 → 0 + opacity.
  //       gsap.utils.toArray('.reveal-up').forEach(function (el) {
  //         if (el.closest('.footer')) return;
  //         gsap.set(el, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(el, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2d) Footer entrance — .reveal-up blocks slide up, staggered, off the .footer container.
  //       var footer = document.querySelector('.footer');
  //       if (footer) {
  //         var items = footer.querySelectorAll('.reveal-up');
  //         gsap.set(items, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(items, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.08,
  //           scrollTrigger: { trigger: footer, start: 'top 80%', once: true },
  //         });
  //       }
  //   
  //       // 2e) [reveal-fade] .reveal-fade — opacity 0 → 1, no transform.
  //       gsap.utils.toArray('.reveal-fade').forEach(function (el) {
  //         gsap.set(el, { opacity: 0 });
  //         gsap.to(el, {
  //           opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 3) Logos strip — one-shot slide-in ON VIEW (adapted from the source scroll-scrub
  //       // for the standalone catalog: a scroll-scrub and a clean thumbnail are mutually
  //       // exclusive — the scrub's settled state IS scroll-0, so to SEE motion the strip must
  //       // start off-position, which the thumbnail would then capture. Firing the same
  //       // 30vw→0 slide ONCE when the strip enters view gives both: motion in the opened
  //       // live preview (injectRevealFix runs it on-view in prod) + settled/clean thumbnail.
  //       // Lines fade in. ≤991: fade only.
  //       var logos = document.querySelector('.section_logos');
  //       if (logos) {
  //         var lines = logos.querySelectorAll('.horizontal-line');
  //         var mm = gsap.matchMedia();
  //         mm.add('(min-width: 992px)', function () {
  //           gsap.set(logos, { x: function () { return 0.3 * window.innerWidth; } });
  //           gsap.to(logos, {
  //             x: 0, duration: PARALLAX, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 90%', once: true },
  //           });
  //           lines.forEach(function (line) {
  //             gsap.set(line, { opacity: 0 });
  //             gsap.to(line, {
  //               opacity: 1, duration: SLIDE, ease: EASE,
  //               scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //             });
  //           });
  //         });
  //         mm.add('(max-width: 991px)', function () {
  //           gsap.set(logos, { x: 0 });
  //           gsap.set(lines, { opacity: 1 });
  //           gsap.fromTo(logos, { opacity: 0 }, {
  //             opacity: 1, duration: SLIDE, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //           });
  //         });
  //       }
  //   
  //       if (typeof ScrollTrigger !== 'undefined') {
  //         ScrollTrigger.refresh();
  //         window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  //       }
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  //     else initReveal();
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="sobre-secao-54" ref={raiz}>
      <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_overview">
              <div className="padding-global padding-section-large">
                <div className="w-layout-grid overview_grid">
                  <div id="w-node-_9c1d8435-9f97-365c-2336-d8d9043f6083-043f607f" className="overview_content-left">
                    <div>
                      <div className="header">
                        <div data-wf--label--variant="base" className="label">
                          <div className="text-style-allcaps scroll-into-view">Firmo</div>
                        </div>
                        <h2 className="scroll-into-view">{s.titulo}</h2>
                        <div className="text-color-secondary scroll-into-view">To simplify the complexities of law. To provide our clients with peace of mind. To foster growth and success by alleviating legal pressures.</div>
                      </div>
                    </div>
                    <div id="w-node-_9c1d8435-9f97-365c-2336-d8d9043f6087-043f607f" className="overview_description-wrapper">
                      <div className="scroll-into-view">
                        <a data-wf--button-primary--variant="base" href="/contact" className="button w-inline-block">
                          <div className="button-content">
                            <div className="button-text is-one">Free consultation</div>
                            <div className="button-text is-two">Free consultation</div>
                          </div>
                          <div className="button-slide-one"></div>
                          <div className="button-slide-two"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="overview_content">
                    <div className="overview_image">
                      <div className="img-wrapper"><img src={s.imagem} loading="lazy" sizes="(max-width: 1552px) 100vw, 1552px" srcSet="https://d173woph5zl366.cloudfront.net/firmo/images/Overview-image_1Overview-image.webp 500w, https://d173woph5zl366.cloudfront.net/firmo/images/Overview-image_1Overview-image.webp 800w, https://d173woph5zl366.cloudfront.net/firmo/images/Overview-image_1Overview-image.webp 1080w, https://d173woph5zl366.cloudfront.net/firmo/images/Overview-image_1.webp 1552w" alt="" className="img is-top-center" /></div>
                    </div>
                    <div className="overview_info-wrapper hide-mobile-landscape">
                      <div id="w-node-_9c1d8435-9f97-365c-2336-d8d9043f6095-043f607f" className="overview_info scroll-into-view">
                        <div className="text-4xl">10k</div>
                        <div className="text-color-secondary">Clients worldwide</div>
                      </div>
                      <div id="w-node-_9c1d8435-9f97-365c-2336-d8d9043f609a-043f607f" className="overview_info scroll-into-view">
                        <div className="text-4xl">20+</div>
                        <div className="text-color-secondary">Team experts</div>
                      </div>
                      <div id="w-node-_9c1d8435-9f97-365c-2336-d8d9043f609f-043f607f" className="overview_info scroll-into-view">
                        <div className="text-4xl">50+</div>
                        <div className="text-color-secondary">Awards &amp; honors</div>
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