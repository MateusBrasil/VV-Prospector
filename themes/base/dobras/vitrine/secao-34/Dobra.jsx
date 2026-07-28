"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-34
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
  //   // upmind-join-section — no component-specific boot needed.
  //   //
  //   // All behavior is supplied by the shared classic scripts loaded in index.html:
  //   //   /upmind/scripts/scroll-reveal.js  — reveals the .scroll-into-view blocks,
  //   //     the [data-reveal-rotate] join card, and the [animation="join-user-list"]
  //   //     social-proof avatars + count (self-initializes on DOM ready).
  //   //   /upmind/scripts/button-hover.js   — per-letter slide + press on the
  //   //     "Book a Call" .button_component (self-initializes on DOM ready).
  //   //
  //   // Hidden start-states live in /upmind/styles.css, gated on `html.reveal-on`,
  //   // so if JS fails the content stays fully visible.
  //   
  //   // Button hover -- per-letter slide + button press (Phase 5B).
  //   //
  //   // Source effect (driven by the GSAP-attribute custom code that wasn't exported;
  //   // reconstructed to the remembered spec): the label is split into letters; on hover
  //   // each letter slides up 1.5rem (staggered) while the button scales down to 0.95.
  //   // `.button_text` carries `text-shadow: 0 1.5rem 0 <text colour>` (webflow.css) -- a
  //   // clone of each letter 1.5rem below, clipped by `.button_mask` (overflow:hidden) --
  //   // so as a letter slides up, its shadow lands exactly where it was: a per-letter
  //   // self-swap. Letters move UP (negative) so the +1.5rem shadow takes their place.
  //   //
  //   // GSAP-only (no CSS :hover) -- a CSS transform-transition would fight the per-frame
  //   // writes (same class of bug as the navbar intro). prefers-reduced-motion -> static.
  //   (function () {
  //     gsap.registerPlugin(SplitText);
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const MOVE = '-1.5rem';
  //     // Nav links use em (not rem): the clone offset is `1.5em` in CSS (relative to the
  //     // link's own font-size), so the GSAP travel must match in the same unit.
  //     const NAV_MOVE = '-1.5em';
  //     const TEXT = { duration: 0.635, ease: 'power4.inOut', stagger: { amount: 0.1 } };
  //     const SCALE = { duration: 0.5, ease: 'sine.inOut' };
  //   
  //     function initButtonHovers() {
  //       if (reduce) return;
  //   
  //       document.querySelectorAll('.button_component').forEach((btn) => {
  //         const textEl = btn.querySelector('.button_text');
  //         if (!textEl) return;
  //   
  //         const chars = new SplitText(textEl, { type: 'chars' }).chars;
  //   
  //         btn.addEventListener('mouseenter', () => {
  //           gsap.to(chars, { y: MOVE, ...TEXT, overwrite: 'auto' });
  //           gsap.to(btn, { scale: 0.95, ...SCALE, overwrite: 'auto' });
  //         });
  //         btn.addEventListener('mouseleave', () => {
  //           gsap.to(chars, { y: 0, ...TEXT, overwrite: 'auto' });
  //           gsap.to(btn, { scale: 1, ...SCALE, overwrite: 'auto' });
  //         });
  //       });
  //     }
  //   
  //     // Nav links -- same per-letter swap as the buttons (no button scale). The clone is
  //     // `.nav_link-text`'s `text-shadow: ...currentColor` (components.css), masked by its
  //     // overflow:hidden. Hover is bound on the whole `<a>` so the full link is the target.
  //     function initNavLinkHovers() {
  //       if (reduce) return;
  //   
  //       document.querySelectorAll('.nav_links').forEach((link) => {
  //         const textEl = link.querySelector('.nav_link-text');
  //         if (!textEl) return;
  //   
  //         const chars = new SplitText(textEl, { type: 'chars' }).chars;
  //   
  //         link.addEventListener('mouseenter', () => {
  //           gsap.to(chars, { y: NAV_MOVE, ...TEXT, overwrite: 'auto' });
  //         });
  //         link.addEventListener('mouseleave', () => {
  //           gsap.to(chars, { y: 0, ...TEXT, overwrite: 'auto' });
  //         });
  //       });
  //     }
  //   
  //     function init() {
  //       initButtonHovers();
  //       initNavLinkHovers();
  //     }
  //   
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
    <section className="dobra" data-dobra="vitrine-secao-34" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_join bg-mint">
            <div className="join_grid">
              <div className="join_grid-left">
                <div className="join_content">
                  <div className="scroll-into-view">
                    <div animation="" data-wf--section-title--variant="black" className="section_title w-variant-dbb4a0a6-0c21-a050-cfd8-50437556227c">
                      <div className="title-dot bg-neon w-variant-dbb4a0a6-0c21-a050-cfd8-50437556227c"></div>
                      <div>Join us</div>
                    </div>
                  </div>
                  <div className="scroll-into-view">
                    <div className="max-title is-22rem">
                      <h2 className="h3 text-color-black">{s.titulo}</h2>
                    </div>
                    <div className="spacer-medium"></div>
                    <div className="text-color-secondary">Partner with us to take your digital presence to the next level.</div>
                  </div>
                  <div className="button-wrap">
                    <div className="scroll-into-view">
                      <a button="" data-wf--button--variant="base" href="/contact" className="button_component w-inline-block">
                        <div className="button_mask">
                          <div button-text="" className="button_text">Book a Call</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div animation="join-user-list" className="users-list">
                  <div className="user-visuals"><img src={s.imagem} loading="lazy" animation="join-user-img" alt="Portrait of a young man with short light brown hair wearing a blue blazer and light blue shirt, smiling slightly against an outdoor blurred background." className="user-image" /><img src={s.imagem2} loading="lazy" animation="join-user-img" alt="Close-up portrait of a young man with dark skin and short hair wearing a black shirt." className="user-image negative-margin" /><img src={s.imagem3} loading="lazy" animation="join-user-img" alt="Young man with curly brown hair and a slight smile wearing a dark jacket against a rustic background." className="user-image negative-margin" /></div>
                  <div className="users-count">+20k customers</div>
                </div>
              </div>
              <div id="w-node-bef957b9-427a-376a-30dc-4c5bb652f6bd-b652f6a8" className="join_grid-right"><img src={s.imagem4} loading="lazy" sizes="100vw" srcSet="https://d173woph5zl366.cloudfront.net/upmind/images/join-img-p-500.avif 500w, https://d173woph5zl366.cloudfront.net/upmind/images/join-img-p-800.avif 800w, https://d173woph5zl366.cloudfront.net/upmind/images/join-img.avif 1280w" alt="Rolling green sand dunes fading into a misty, pale green sky." className="img" />
                <div className="join_gradient"></div>
                <div className="join_card" data-reveal-rotate="">
                  <div className="join-text text-color-on-primary">Expertise</div>
                  <div className="join_icon-wrap"><img src={s.imagem5} loading="lazy" alt="" className="join_icon" /></div>
                  <div className="join-text">that</div>
                  <div className="join-text">Combines</div>
                  <div className="join-text">Strategy,</div>
                  <div className="join-text text-color-on-primary">Data,</div>
                  <div className="join-text">and</div>
                  <div className="join-text">Artificial</div>
                  <div className="join-text text-color-on-primary">Intelligence</div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}