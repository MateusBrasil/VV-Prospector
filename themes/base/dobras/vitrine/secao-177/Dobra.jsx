"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-177
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
  //   /* Classic <script> boot stub — no import/export.
  //      The shared scripts do all the work:
  //      - /upmind/scripts/scroll-reveal.js  reveals the .scroll-into-view heading + cards.
  //      - /upmind/scripts/grid-slider.js    turns the desktop CSS grid into a Swiper
  //        slider with arrows below 992px (Swiper bundle is loaded in the head).
  //      Both self-initialize on DOM ready, so this file is intentionally empty. */
  //   
  //   // Reusable responsive grid -> slider mechanism (reviewer enhancement).
  //   //
  //   // In the source Webflow template several card grids had NO real slider: on
  //   // tablet/mobile they just collapse to `display:flex; overflow:auto`, becoming a
  //   // mouse-drag/scroll strip with no arrows (a time-saving hack). This converts
  //   // those grids into PROPER Swiper sliders WITH arrows below 992px, while leaving
  //   // the desktop CSS grid completely untouched (>=992px -> plain grid, no Swiper).
  //   //
  //   // Each target opts in with `data-grid-slider` and tunes its peek/gap via
  //   // `data-spv` (slidesPerView) and `data-gap` (spaceBetween, px). The arrow group
  //   // inside it (`.arrow-group` with `.swiper-button-prev[data-prev]` /
  //   // `.swiper-button-next[data-next]`) matches the testimonial slider arrow style.
  //   //
  //   // Mechanism: a single matchMedia('(max-width: 991px)') listener inits Swiper on
  //   // every `[data-grid-slider]` below 992px and destroys it at/above 992px so the
  //   // desktop grid layout is never driven by Swiper. No autoplay -- manual/drag only
  //   // (also respects prefers-reduced-motion implicitly: nothing animates on its own).
  //   (function () {
  //     function init() {
  //       // Each target slides only below its own max-width breakpoint -- the exact
  //       // viewport where the SOURCE grid degraded to an overflow strip. Most grids
  //       // degrade at <=991 (services, team); expertise + blog degrade at <=767. Per-target
  //       // override via `data-slider-mq` (max-width px). The CSS gate in grid-slider.css
  //       // keys off the same `data-slider-mq` value via attribute selectors.
  //       const instances = new WeakMap();
  //   
  //       function maxFor(el) {
  //         return parseInt(el.dataset.sliderMq ?? '991', 10);
  //       }
  //   
  //       function initOne(el) {
  //         if (instances.has(el)) return;
  //   
  //         // Reviewer change: every grid-slider shows EXACTLY ONE full card at 100% of
  //         // the slider's content width (inside the global padding) at ALL active
  //         // breakpoints -- NO peek of the next card, since the arrows already signal
  //         // it's a slider. slidesPerView is forced to 1; spaceBetween (the gap) only
  //         // appears during the swipe transition because only one card is visible at
  //         // rest. `data-spv` is ignored on purpose.
  //         const gap = parseFloat(el.dataset.gap ?? '16');
  //   
  //         const opts = {
  //           slidesPerView: 1,
  //           spaceBetween: gap,
  //           grabCursor: true,
  //           speed: 500,
  //           navigation: {
  //             nextEl: el.querySelector('[data-next]'),
  //             prevEl: el.querySelector('[data-prev]'),
  //           },
  //         };
  //   
  //         instances.set(el, new Swiper(el, opts));
  //       }
  //   
  //       function destroyOne(el) {
  //         const sw = instances.get(el);
  //         if (sw) {
  //           sw.destroy(true, true); // also reset inline styles so the grid CSS takes over
  //           instances.delete(el);
  //         }
  //       }
  //   
  //       // One matchMedia per distinct breakpoint, evaluating only the targets that opt
  //       // into that breakpoint. Below the breakpoint -> init Swiper; at/above -> destroy
  //       // so the desktop grid CSS regains control.
  //       function wire(targets, max) {
  //         const mql = window.matchMedia(`(max-width: ${max}px)`);
  //         const apply = (matches) =>
  //           targets.forEach((el) => (matches ? initOne(el) : destroyOne(el)));
  //         apply(mql.matches);
  //         mql.addEventListener('change', (e) => apply(e.matches));
  //       }
  //   
  //       const all = [...document.querySelectorAll('[data-grid-slider]')];
  //       const byBreakpoint = new Map();
  //       all.forEach((el) => {
  //         const max = maxFor(el);
  //         (byBreakpoint.get(max) ?? byBreakpoint.set(max, []).get(max)).push(el);
  //       });
  //       byBreakpoint.forEach((targets, max) => wire(targets, max));
  //     }
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // Global scroll-reveal engine -- decorative layer (Phase 5B animations pass).
  //   //
  //   // Source: every Webflow IX2 SCROLL_INTO_VIEW action on the surviving pages collapses
  //   // to one preset. The opt-in hook `.scroll-into-view` is preserved verbatim in the
  //   // markup, so the engine consumes it directly (1:1 with source -- no guessing which
  //   // elements reveal). `[data-reveal*]` attributes are manual hooks for the two
  //   // non-class presets whose `data-w-id` was stripped in S3.
  //   //
  //   //   .scroll-into-view / [data-reveal]  -> slideInUp  (opacity 0->1, y 15px->0, 700ms outQuart)
  //   //   [data-reveal-img]                  -> scaleIn    (scale 1.5->1, 1s outQuart)        a-61
  //   //   [data-reveal-rotate]               -> rotateIn   (opacity 0->1, rotate -5deg->0, 600ms) a-35
  //   //
  //   // Trigger = IntersectionObserver (NOT ScrollTrigger). The browser computes
  //   // intersection live, so reveals fire reliably regardless of scroll speed, instant
  //   // jumps (anchor links), or layout shifts from late fonts / the hero SplitText. With
  //   // ScrollTrigger.batch those shifts left cached trigger positions stale, so far-down
  //   // elements (e.g. the FAQ) could stay hidden-but-interactive -- clicking an accordion
  //   // "did nothing" because the whole item was still opacity:0. IO eliminates that.
  //   //
  //   // Initial (hidden) state lives in reveal.css, gated on `html.reveal-on` + the SAME
  //   // media query used here, so JS-off / reduced-motion / mobile users never see a
  //   // hidden element. Mobile (<=991px) is intentionally excluded: there the card grids
  //   // become Swiper sliders (grid-slider) and a hidden initial state would blank the
  //   // off-screen slides.
  //   (function () {
  //     // Reveal ~10% into the viewport (matches the old ScrollTrigger "top 90%").
  //     const ROOT_MARGIN = '0px 0px -10% 0px';
  //   
  //     // Observe a set, run `reveal` on each batch of entering elements (once), unobserve.
  //     function observe(selector, reveal, rootMargin = ROOT_MARGIN) {
  //       const io = new IntersectionObserver(
  //         (entries) => {
  //           const entering = entries
  //             .filter((e) => e.isIntersecting)
  //             .map((e) => e.target);
  //           if (entering.length) {
  //             reveal(entering);
  //             entering.forEach((el) => io.unobserve(el));
  //           }
  //         },
  //         { rootMargin, threshold: 0 }
  //       );
  //       document.querySelectorAll(selector).forEach((el) => io.observe(el));
  //       return io;
  //     }
  //   
  //     function initReveals() {
  //       const mm = gsap.matchMedia();
  //   
  //       // Desktop + motion allowed -- the only context where reveal.css hides elements.
  //       mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
  //         // slideInUp -- a cluster entering in the same observer callback staggers as a group.
  //         const ioText = observe('.scroll-into-view, [data-reveal]', (els) =>
  //           gsap.to(els, {
  //             opacity: 1,
  //             y: 0,
  //             duration: 0.7,
  //             ease: 'power4.out',
  //             stagger: 0.08,
  //             overwrite: 'auto',
  //           })
  //         );
  //   
  //         // scaleIn -- image zoom-out (a-61).
  //         const ioImg = observe('[data-reveal-img]', (els) =>
  //           els.forEach((el) => gsap.to(el, { scale: 1, duration: 1, ease: 'power4.out' }))
  //         );
  //   
  //         // rotateIn -- join/CTA card (a-35), fires slightly later (off 20%).
  //         const ioRot = observe(
  //           '[data-reveal-rotate]',
  //           (els) =>
  //             els.forEach((el) =>
  //               gsap.to(el, { opacity: 1, rotation: 0, duration: 0.6, ease: 'sine.out' })
  //             ),
  //           '0px 0px -20% 0px'
  //         );
  //   
  //         // join social-proof avatars -- slide in from the right in a staircase (the source
  //         // `animation="join-user-list"` / `join-user-img` hooks; exact IX2 values weren't in
  //         // the export, reconstructed per Edgar). Observe the list, stagger its avatars.
  //         const ioUsers = observe('[animation="join-user-list"]', (els) =>
  //           els.forEach((el) => {
  //             // avatars (x3) + the "+20k customers" label, in DOM order -> the label lands
  //             // last in the staircase.
  //             const items = el.querySelectorAll('.user-image, .users-count');
  //             gsap.to(items, {
  //               x: 0,
  //               opacity: 1,
  //               duration: 0.7,
  //               ease: 'power4.out',
  //               stagger: 0.12,
  //               overwrite: 'auto',
  //             });
  //           })
  //         );
  //   
  //         // matchMedia cleanup (e.g. resize down to mobile): stop observing.
  //         return () => {
  //           ioText.disconnect();
  //           ioImg.disconnect();
  //           ioRot.disconnect();
  //           ioUsers.disconnect();
  //         };
  //       });
  //     }
  //   
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', initReveals);
  //     } else {
  //       initReveals();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-secao-177" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_team bg-soft-beige">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
              <div className="container-large">
                <div className="team_heading">
                  <div className="scroll-into-view">
                    <div animation="" data-wf--section-title--variant="black" className="section_title w-variant-dbb4a0a6-0c21-a050-cfd8-50437556227c">
                      <div className="title-dot bg-neon w-variant-dbb4a0a6-0c21-a050-cfd8-50437556227c"></div>
                      <div>Our Teams</div>
                    </div>
                  </div>
                  <h2 className="scroll-into-view">{s.titulo}</h2>
                  <div className="scroll-into-view">Our team consists of skilled professionals with expertise in strategy, operations, analytics, and digital transformation.</div>
                </div>
                <div className="spacer">
                  <div style={{height: '4rem'}} className="spacer-desktop"></div>
                  <div style={{height: '3rem'}} className="spacer-tablet"></div>
                  <div style={{height: '2rem'}} className="spacer-mobile"></div>
                </div>
                
                <div className="team_grid swiper" data-grid-slider="" data-spv="1" data-gap="16">
                  <div role="list" className="swiper-wrapper">
                    <div role="listitem" className="team_grid-item swiper-slide scroll-into-view">
                      <a href="/team/ashlynn-curtis" className="team_card w-inline-block">
                        <div className="team_card-top">
                          <div className="team_position">
                            <div>CEO</div>
                          </div>
                          <div className="team_arrow-icon">
                            <img src={s.imagem} alt="" loading="lazy" className="team_arrow is-one" />
                            <img src={s.imagem2} alt="" loading="lazy" className="team_arrow is-two" />
                          </div>
                        </div>
                        <div className="max-heading is-18rem">
                          <h3>{s.subtitulo}</h3>
                        </div>
                        <div className="team_card-img">
                          <img src={s.imagem3} loading="lazy" alt="Ashlynn Curtis" className="img" />
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="team_grid-item swiper-slide scroll-into-view">
                      <a href="/team/maria-vanessa" className="team_card w-inline-block">
                        <div className="team_card-top">
                          <div className="team_position">
                            <div>CEO</div>
                          </div>
                          <div className="team_arrow-icon">
                            <img src={s.imagem4} alt="" loading="lazy" className="team_arrow is-one" />
                            <img src={s.imagem5} alt="" loading="lazy" className="team_arrow is-two" />
                          </div>
                        </div>
                        <div className="max-heading is-18rem">
                          <h3>{s.subtitulo2}</h3>
                        </div>
                        <div className="team_card-img">
                          <img src={s.imagem6} loading="lazy" alt="Maria Vanessa" className="img" />
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="team_grid-item swiper-slide scroll-into-view">
                      <a href="/team/martin-lipshutz" className="team_card w-inline-block">
                        <div className="team_card-top">
                          <div className="team_position">
                            <div>CEO</div>
                          </div>
                          <div className="team_arrow-icon">
                            <img src={s.imagem7} alt="" loading="lazy" className="team_arrow is-one" />
                            <img src={s.imagem8} alt="" loading="lazy" className="team_arrow is-two" />
                          </div>
                        </div>
                        <div className="max-heading is-18rem">
                          <h3>{s.subtitulo3}</h3>
                        </div>
                        <div className="team_card-img">
                          <img src={s.imagem9} loading="lazy" alt="Martin Lipshutz" className="img" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="arrow-group">
                    <div className="swiper-button-prev" data-prev=""><img loading="lazy" src={s.imagem10} alt="Previous team members" className="icon-1x1-main" /></div>
                    <div className="swiper-button-next" data-next=""><img loading="lazy" src={s.imagem11} alt="Next team members" className="icon-1x1-main" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-section-medium"></div>
          </section>
        </div>
    </section>
  );
}