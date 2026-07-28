"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-30
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
  //   // Upmind — Faq Section
  //   // No component-specific boot needed. The shared classic scripts handle everything:
  //   //   /upmind/scripts/accordion.js     — single-open accordion wired via [data-accordion*]
  //   //   /upmind/scripts/scroll-reveal.js — GSAP IntersectionObserver reveal for .scroll-into-view
  //   // Both self-initialize on DOM ready, so this file is intentionally a no-op stub.
  //   
  //   // Reusable accordion behavior (COMPONENTS_MAP #2).
  //   // Source: Webflow IX2 accordion -- collapsed by default, single-open within a group,
  //   // height-animated via max-height on the content, icon morphs +/- on open.
  //   //
  //   // DOM contract (wired by FaqSection.astro):
  //   //   [data-accordion]            group wrapper (single-open scope; .faq_list)
  //   //     [data-accordion-item]     one item (.accordion). Gets .is-open when expanded.
  //   //       [data-accordion-trigger]  clickable heading button (.accordion_heading)
  //   //       [data-accordion-content]  collapsible answer (.accordion_answer, overflow:hidden)
  //   //
  //   // Open state: .is-open on the item + max-height set to measured scrollHeight (px),
  //   // aria-expanded on the trigger. Closed: max-height 0. prefers-reduced-motion -> no
  //   // transition (instant snap). No GSAP -- vanilla only.
  //   (function () {
  //     const reduceMotion =
  //       typeof window !== 'undefined' &&
  //       window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     function setOpen(item, open) {
  //       const content = item.querySelector('[data-accordion-content]');
  //       const trigger = item.querySelector('[data-accordion-trigger]');
  //       if (!content) return;
  //   
  //       if (open) {
  //         item.classList.add('is-open');
  //         // Safety net: the item is also a `.scroll-into-view` (scroll-reveal layer). If
  //         // that reveal hasn't run yet (slow scroll, late layout shift, anchor jump), the
  //         // item is still opacity:0 -- so the panel would expand INVISIBLY and read as
  //         // "first click did nothing, second worked". Force it shown on open.
  //         item.style.opacity = '1';
  //         item.style.visibility = 'visible';
  //         item.style.transform = 'none';
  //         content.style.maxHeight = reduceMotion ? 'none' : `${content.scrollHeight}px`;
  //       } else {
  //         item.classList.remove('is-open');
  //         // Snap from auto/none -> current px so the transition has a start value.
  //         if (!reduceMotion && content.style.maxHeight === 'none') {
  //           content.style.maxHeight = `${content.scrollHeight}px`;
  //           // Force reflow so the next assignment animates.
  //           void content.offsetHeight;
  //         }
  //         content.style.maxHeight = '0px';
  //       }
  //   
  //       if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  //     }
  //   
  //     function initGroup(group) {
  //       const items = Array.from(group.querySelectorAll('[data-accordion-item]'));
  //   
  //       items.forEach((item) => {
  //         const trigger = item.querySelector('[data-accordion-trigger]');
  //         const content = item.querySelector('[data-accordion-content]');
  //         if (!trigger || !content) return;
  //   
  //         // Collapsed baseline.
  //         content.style.maxHeight = '0px';
  //         trigger.setAttribute('aria-expanded', 'false');
  //   
  //         // Whole `.accordion` card is the click target (it carries cursor:pointer), not
  //         // just the heading -- clicking the padding or the open answer toggles too.
  //         item.addEventListener('click', () => {
  //           const willOpen = !item.classList.contains('is-open');
  //           // Single-open: close siblings first.
  //           if (willOpen) {
  //             items.forEach((sib) => {
  //               if (sib !== item && sib.classList.contains('is-open')) setOpen(sib, false);
  //             });
  //           }
  //           setOpen(item, willOpen);
  //         });
  //   
  //         // Keep an open panel sized correctly on resize.
  //         window.addEventListener('resize', () => {
  //           if (item.classList.contains('is-open') && !reduceMotion) {
  //             content.style.maxHeight = `${content.scrollHeight}px`;
  //           }
  //         });
  //       });
  //     }
  //   
  //     function init() {
  //       document
  //         .querySelectorAll('[data-accordion]')
  //         .forEach((group) => initGroup(group));
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
    <section className="dobra" data-dobra="faq-secao-30" ref={raiz}>
      <div className="page-wrapper">
          <section className="section_faq">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
              <div className="container-large">
                <div className="work_heading is-simple">
                  <div className="scroll-into-view">
                    <div animation="" data-wf--section-title--variant="black" className="section_title w-variant-dbb4a0a6-0c21-a050-cfd8-50437556227c">
                      <div className="title-dot bg-neon w-variant-dbb4a0a6-0c21-a050-cfd8-50437556227c"></div>
                      <div>How we work</div>
                    </div>
                  </div>
                  <h2 className="scroll-into-view">{s.titulo}</h2>
                  <div className="scroll-into-view">
                    <div className="text-color-secondary">We follow a structured yet flexible approach designed to deliver clarity and lasting results.</div>
                  </div>
                </div>
                <div className="spacer">
                  <div style={{height: '4rem'}} className="spacer-desktop"></div>
                  <div style={{height: '3rem'}} className="spacer-tablet"></div>
                  <div style={{height: '2rem'}} className="spacer-mobile"></div>
                </div>
                <div className="faq_list" data-accordion="">
                  <div data-wf--accordion-item--variant="base" className="accordion scroll-into-view" data-accordion-item="">
                    <div className="accordion_heading" data-accordion-trigger="" role="button" tabIndex="0" aria-expanded="false">
                      <div id="w-node-f4fe351f-44f4-faf1-938e-6fa803de271f-03de271d" className="font-mono">001</div>
                      <h3 id="w-node-f4fe351f-44f4-faf1-938e-6fa803de2721-03de271d" className="h6">{s.subtitulo}</h3>
                      <div className="accordion_icon">
                        <div className="line-vertical"></div>
                        <div className="line-horizontal"></div>
                      </div>
                    </div>
                    <div className="accordion_answer" data-accordion-content="">
                      <div className="spacer-medium"></div>
                      <div className="text-color-subtle">We help businesses with strategy, operations, and growth — combining hands-on consulting with AI-powered tooling so the insights translate into measurable results, not just slide decks.</div>
                    </div>
                  </div>
                  <div data-wf--accordion-item--variant="base" className="accordion scroll-into-view" data-accordion-item="">
                    <div className="accordion_heading" data-accordion-trigger="" role="button" tabIndex="0" aria-expanded="false">
                      <div id="w-node-f4fe351f-44f4-faf1-938e-6fa803de271f-03de271d" className="font-mono">002</div>
                      <h3 id="w-node-f4fe351f-44f4-faf1-938e-6fa803de2721-03de271d" className="h6">{s.subtitulo2}</h3>
                      <div className="accordion_icon">
                        <div className="line-vertical"></div>
                        <div className="line-horizontal"></div>
                      </div>
                    </div>
                    <div className="accordion_answer" data-accordion-content="">
                      <div className="spacer-medium"></div>
                      <div className="text-color-subtle">Every engagement starts with a discovery phase. We map your goals, constraints, and current workflows, then design a plan that fits your team rather than forcing a generic template onto it.</div>
                    </div>
                  </div>
                  <div data-wf--accordion-item--variant="base" className="accordion scroll-into-view" data-accordion-item="">
                    <div className="accordion_heading" data-accordion-trigger="" role="button" tabIndex="0" aria-expanded="false">
                      <div id="w-node-f4fe351f-44f4-faf1-938e-6fa803de271f-03de271d" className="font-mono">003</div>
                      <h3 id="w-node-f4fe351f-44f4-faf1-938e-6fa803de2721-03de271d" className="h6">{s.subtitulo3}</h3>
                      <div className="accordion_icon">
                        <div className="line-vertical"></div>
                        <div className="line-horizontal"></div>
                      </div>
                    </div>
                    <div className="accordion_answer" data-accordion-content="">
                      <div className="spacer-medium"></div>
                      <div className="text-color-subtle">Timelines depend on scope, but most engagements run between four and twelve weeks. We work in short, focused sprints so you see tangible progress and value early instead of waiting until the very end.</div>
                    </div>
                  </div>
                  <div data-wf--accordion-item--variant="base" className="accordion scroll-into-view" data-accordion-item="">
                    <div className="accordion_heading" data-accordion-trigger="" role="button" tabIndex="0" aria-expanded="false">
                      <div id="w-node-f4fe351f-44f4-faf1-938e-6fa803de271f-03de271d" className="font-mono">004</div>
                      <h3 id="w-node-f4fe351f-44f4-faf1-938e-6fa803de2721-03de271d" className="h6">{s.subtitulo4}</h3>
                      <div className="accordion_icon">
                        <div className="line-vertical"></div>
                        <div className="line-horizontal"></div>
                      </div>
                    </div>
                    <div className="accordion_answer" data-accordion-content="">
                      <div className="spacer-medium"></div>
                      <div className="text-color-subtle">Yes. We offer retainer and advisory plans so your team stays supported as you scale. We monitor outcomes, refine the strategy, and stay available whenever new challenges come up.</div>
                    </div>
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