"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-164
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
  //   (function () {
  //     // Team entrance — heading Stagger + breakpoint-specific card reveal.
  //     //
  //     // Desktop (≥992px) — scroll-triggered "deck of cards" reveal:
  //     //   1. Livia Saris (idx 1, top-center) is the hero. She fades up from
  //     //      below (autoAlpha 0 → 1, y 60 → 0).
  //     //   2. The other five cards start invisible AND translated onto Livia's
  //     //      grid spot (FLIP delta) with a small fan rotation + 0.94 scale,
  //     //      so they read as a deck stacked behind her.
  //     //   3. They fade in just behind Livia, then "deal out" to their natural
  //     //      grid positions as the user keeps scrolling.
  //     //
  //     // Tablet/mobile — soft staircase entrance (placeholder until the
  //     // breakpoint-specific design lands).
  //     function initTeamReveals() {
  //       var gsap = window.gsap;
  //       var ScrollTrigger = window.ScrollTrigger;
  //       var SplitText = window.SplitText;
  //   
  //       if (!gsap) return;
  //       if (ScrollTrigger && gsap.registerPlugin) gsap.registerPlugin(ScrollTrigger);
  //       if (SplitText && gsap.registerPlugin) gsap.registerPlugin(SplitText);
  //   
  //       var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //       var inner = document.querySelector('.team__inner');
  //       if (!inner) return;
  //   
  //       var heading = inner.querySelector('.team__heading');
  //       var cards = Array.prototype.slice.call(inner.querySelectorAll('.team__card'));
  //   
  //       if (reduce) {
  //         if (heading) gsap.set(heading, { autoAlpha: 1 });
  //         cards.forEach(function (c) { gsap.set(c, { autoAlpha: 1, y: 0 }); });
  //         return;
  //       }
  //   
  //       // Heading Stagger pattern (ANIMATIONS.md).
  //       if (heading && typeof SplitText !== 'undefined' && SplitText) {
  //         var split = SplitText.create(heading, { type: 'words' });
  //         gsap.set(split.words, { yPercent: 50, autoAlpha: 0 });
  //         gsap.to(split.words, {
  //           yPercent: 0,
  //           autoAlpha: 1,
  //           duration: 0.8,
  //           ease: 'power3.out',
  //           stagger: 0.06,
  //           scrollTrigger: { trigger: inner, start: 'top 80%', once: true },
  //         });
  //       }
  //   
  //       if (!cards.length) return;
  //   
  //       gsap.matchMedia()
  //         .add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', function () {
  //           // ── Desktop deck-of-cards reveal ──────────────────────────────
  //           // Time-based, fires once when the section enters viewport. Plays
  //           // through to completion regardless of scroll velocity so the user
  //           // always lands on the full 6-card grid. Ease-out throughout —
  //           // power3.out is the project's house decel curve.
  //           var HERO_IDX = 1; // Livia Saris — top-center of the 3×2 grid
  //           var hero = cards[HERO_IDX];
  //           if (!hero) return;
  //           var others = cards.filter(function (_, i) { return i !== HERO_IDX; });
  //   
  //           // FLIP-style delta — the translate that moves each non-hero card
  //           // from its grid spot onto Livia's spot. Computed once during
  //           // setup; matchMedia re-runs this block on breakpoint crossings.
  //           var heroRect = hero.getBoundingClientRect();
  //           var deltas = others.map(function (c) {
  //             var r = c.getBoundingClientRect();
  //             return { dx: heroRect.left - r.left, dy: heroRect.top - r.top };
  //           });
  //   
  //           // Subtle fan rotations so the stack reads as a deck rather than
  //           // perfectly aligned clones. Indexed against `others` in DOM order:
  //           // [Dorwart TL, Workman TR, Bator BL, Vaccaro BC, Schleifer BR].
  //           var rotations = [-8, 8, -11, 4, 11];
  //   
  //           // Livia rides on top of the stack while she rises into place.
  //           // The other cards keep DOM stacking order via z-index 1..5.
  //           gsap.set(hero, { zIndex: 10, autoAlpha: 0, y: 60 });
  //           others.forEach(function (c, i) {
  //             gsap.set(c, {
  //               zIndex: i + 1,
  //               autoAlpha: 0,
  //               x: deltas[i].dx,
  //               y: deltas[i].dy,
  //               rotation: rotations[i] || 0,
  //               scale: 0.94,
  //               transformOrigin: 'center center',
  //             });
  //           });
  //   
  //           var tl = gsap.timeline({
  //             scrollTrigger: {
  //               trigger: inner,
  //               start: 'top 75%',
  //               once: true,
  //             },
  //           });
  //           // Tone — power4.out throughout the heavy moves so each tween has a
  //           // long, graceful tail. Cards never "snap" to their final state;
  //           // they coast into place.
  //           //
  //           // Phase 1 (0.00s → 1.20s) — Livia rises + fades in
  //           tl.to(hero, {
  //             autoAlpha: 1,
  //             y: 0,
  //             duration: 1.20,
  //             ease: 'power4.out',
  //           }, 0);
  //           // Phase 2 (0.50s → 1.25s) — deck fades in as a single block behind Livia
  //           tl.to(others, {
  //             autoAlpha: 1,
  //             duration: 0.75,
  //             ease: 'power3.out',
  //           }, 0.50);
  //           // Phase 3 (0.90s → 2.45s) — deck spreads to grid positions in unison
  //           tl.to(others, {
  //             x: 0,
  //             y: 0,
  //             rotation: 0,
  //             scale: 1,
  //             duration: 1.55,
  //             ease: 'power4.out',
  //           }, 0.90);
  //         })
  //         .add('(max-width: 991px) and (prefers-reduced-motion: no-preference)', function () {
  //           // ── Tablet + landscape + portrait entrance ────────────────────
  //           // Per-card ScrollTrigger at `top 95%` so each card animates the
  //           // moment it enters the viewport — never the whole grid as a group.
  //           var images = cards.map(function (c) { return c.querySelector('.team__image'); });
  //   
  //           gsap.set(cards, { autoAlpha: 0, y: 40 });
  //           images.forEach(function (img) {
  //             if (img) gsap.set(img, { scale: 1.1, filter: 'blur(12px)' });
  //           });
  //   
  //           cards.forEach(function (card, i) {
  //             if (!ScrollTrigger) return;
  //             ScrollTrigger.create({
  //               trigger: card,
  //               start: 'top 95%',
  //               once: true,
  //               onEnter: function () {
  //                 gsap.to(card, {
  //                   autoAlpha: 1, y: 0,
  //                   duration: 1.1, ease: 'power4.out',
  //                 });
  //                 if (images[i]) {
  //                   gsap.to(images[i], {
  //                     scale: 1, filter: 'blur(0px)',
  //                     duration: 1.4, ease: 'power4.out',
  //                   });
  //                 }
  //               },
  //             });
  //           });
  //         });
  //     }
  //   
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', function () {
  //         setTimeout(initTeamReveals, 0);
  //       });
  //     } else {
  //       setTimeout(initTeamReveals, 0);
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-164" ref={raiz}>
      <section className="team" aria-label="Our team">
          <div className="team__inner">
            <header className="team__header">
              <div className="team__label">
                <span className="team__labelDot" aria-hidden="true"></span>
                <span className="team__labelText">{s.rotulo}</span>
              </div>
              <h2 className="team__heading">{s.titulo}</h2>
            </header>
      
            <div className="team__grid">
              <article className="team__card">
                <div className="team__imageWrap">
                  <img src={s.imagem} alt="Zaire Dorwart, Chief Financial Officer" width="752" height="790" className="team__image" loading="lazy" />
                </div>
                <div className="team__overlay" aria-hidden="true"></div>
                <div className="team__caption">
                  <p className="team__name">{s.texto}</p>
                  <p className="team__role">{s.texto2}</p>
                </div>
              </article>
      
              <article className="team__card">
                <div className="team__imageWrap">
                  <img src={s.imagem2} alt="Livia Saris, Head of Technology" width="752" height="790" className="team__image" loading="lazy" />
                </div>
                <div className="team__overlay" aria-hidden="true"></div>
                <div className="team__caption">
                  <p className="team__name">{s.texto3}</p>
                  <p className="team__role">{s.texto4}</p>
                </div>
              </article>
      
              <article className="team__card">
                <div className="team__imageWrap">
                  <img src={s.imagem3} alt="Zaire Workman, Marketing Director" width="752" height="790" className="team__image" loading="lazy" />
                </div>
                <div className="team__overlay" aria-hidden="true"></div>
                <div className="team__caption">
                  <p className="team__name">{s.texto5}</p>
                  <p className="team__role">{s.texto6}</p>
                </div>
              </article>
      
              <article className="team__card">
                <div className="team__imageWrap">
                  <img src={s.imagem4} alt="Alfonso Bator, Head of Technology" width="752" height="790" className="team__image" loading="lazy" />
                </div>
                <div className="team__overlay" aria-hidden="true"></div>
                <div className="team__caption">
                  <p className="team__name">{s.texto7}</p>
                  <p className="team__role">{s.texto8}</p>
                </div>
              </article>
      
              <article className="team__card">
                <div className="team__imageWrap">
                  <img src={s.imagem5} alt="Rayna Vaccaro, Head of Technology" width="752" height="790" className="team__image" loading="lazy" />
                </div>
                <div className="team__overlay" aria-hidden="true"></div>
                <div className="team__caption">
                  <p className="team__name">{s.texto9}</p>
                  <p className="team__role">{s.texto10}</p>
                </div>
              </article>
      
              <article className="team__card">
                <div className="team__imageWrap">
                  <img src={s.imagem6} alt="Marcus Schleifer, Head of Technology" width="752" height="790" className="team__image" loading="lazy" />
                </div>
                <div className="team__overlay" aria-hidden="true"></div>
                <div className="team__caption">
                  <p className="team__name">{s.texto11}</p>
                  <p className="team__role">{s.texto12}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
    </section>
  );
}