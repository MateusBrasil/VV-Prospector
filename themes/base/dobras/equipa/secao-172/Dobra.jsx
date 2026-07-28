"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-172
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
  //   // Team entrance — breakpoint-specific (ported from Acelia template).
  //   //
  //   // Desktop (≥992px) — "deck of cards" reveal:
  //   //   1. Hero card (idx 1, top-center) rises into place (y:60 → 0, fade in)
  //   //   2. The other 5 start invisible AND translated onto the hero's grid spot
  //   //      (FLIP delta) with a small fan rotation + 0.94 scale, so they read as
  //   //      a deck stacked behind the hero.
  //   //   3. They fade in behind the hero, then "deal out" to their natural grid
  //   //      positions as the timeline progresses.
  //   //   Curves + durations adjusted to Pipely DNA: power3.out, 1.0s phases.
  //   //
  //   // Tablet/mobile (≤991px) — per-card ScrollTrigger:
  //   //   Each card rises (y:40 → 0) and its inner image clears scale 1.1 → 1 +
  //   //   blur 12px → 0. Fires the moment each card enters the viewport.
  //   //
  //   // Header (eyebrow + heading) keeps the Pipely fade-from-right cascade so
  //   // they enter consistently with the rest of the site, regardless of viewport.
  //   (() => {
  //     const gsap = window.gsap;
  //     const ScrollTrigger = window.ScrollTrigger;
  //     if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  //     gsap.registerPlugin(ScrollTrigger);
  //     const section = document.querySelector('.team');
  //     if (!section) return;
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const eyebrow = section.querySelector('.team__eyebrow');
  //     const heading = section.querySelector('.team__heading');
  //     const cards = Array.from(section.querySelectorAll('.team__member'));
  //   
  //     if (reduce) {
  //       [eyebrow, heading, ...cards].forEach((el) => el && gsap.set(el, { autoAlpha: 1, x: 0, y: 0 }));
  //       return;
  //     }
  //   
  //     // ── Header cascade (eyebrow + heading) — fade-from-right Pipely DNA ──
  //     const headerItems = [eyebrow, heading].filter(Boolean);
  //     if (headerItems.length) {
  //       gsap.set(headerItems, { autoAlpha: 0, x: 60 });
  //       const MIN_GAP = 0.1;
  //       let nextSlot = -Infinity;
  //       headerItems.forEach((item) => {
  //         ScrollTrigger.create({
  //           trigger: item,
  //           start: 'top 88%',
  //           once: true,
  //           onEnter: () => {
  //             const now = performance.now() / 1000;
  //             const delay = Math.max(0, nextSlot - now);
  //             nextSlot = now + delay + MIN_GAP;
  //             gsap.to(item, {
  //               autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out', delay,
  //               onComplete: () => gsap.set(item, { clearProps: 'translate,rotate,scale,transform,x' }),
  //             });
  //           },
  //         });
  //       });
  //     }
  //   
  //     if (!cards.length) return;
  //   
  //     gsap.matchMedia()
  //       .add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
  //         // ── Desktop deck-of-cards reveal ────────────────────────────────
  //         const HERO_IDX = 1; // top-center of the 3×2 grid
  //         const hero = cards[HERO_IDX];
  //         if (!hero) return;
  //         const others = cards.filter((_, i) => i !== HERO_IDX);
  //   
  //         // FLIP delta — translate each non-hero card from its grid spot
  //         // onto the hero's spot. Computed once; matchMedia re-runs on
  //         // breakpoint crossings so the deltas re-measure on resize.
  //         const heroRect = hero.getBoundingClientRect();
  //         const deltas = others.map((c) => {
  //           const r = c.getBoundingClientRect();
  //           return { dx: heroRect.left - r.left, dy: heroRect.top - r.top };
  //         });
  //   
  //         // Subtle fan rotations so the stack reads as a deck.
  //         const rotations = [-8, 8, -11, 4, 11];
  //   
  //         gsap.set(hero, { zIndex: 10, autoAlpha: 0, y: 60 });
  //         others.forEach((c, i) => {
  //           gsap.set(c, {
  //             zIndex: i + 1,
  //             autoAlpha: 0,
  //             x: deltas[i].dx,
  //             y: deltas[i].dy,
  //             rotation: rotations[i] || 0,
  //             scale: 0.94,
  //             transformOrigin: 'center center',
  //           });
  //         });
  //   
  //         const tl = gsap.timeline({
  //           scrollTrigger: { trigger: section, start: 'top 75%', once: true },
  //         });
  //         // Phase 1: hero rises (Pipely DNA: power3.out 1.0s)
  //         tl.to(hero, { autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out' }, 0);
  //         // Phase 2: deck fades in behind hero
  //         tl.to(others, { autoAlpha: 1, duration: 0.6, ease: 'power3.out' }, 0.4);
  //         // Phase 3: deck spreads to grid positions
  //         tl.to(others, {
  //           x: 0, y: 0, rotation: 0, scale: 1,
  //           duration: 1.0, ease: 'power3.out',
  //           // Clear all transforms so the hover spotlight (CSS opacity)
  //           // is the only thing controlling card state from here on.
  //           onComplete: () => gsap.set(cards, { clearProps: 'translate,rotate,scale,transform,x,y,zIndex' }),
  //         }, 0.7);
  //       })
  //       .add('(max-width: 991px) and (prefers-reduced-motion: no-preference)', () => {
  //         // ── Tablet + landscape + portrait ────────────────────────────
  //         const images = cards.map((c) => c.querySelector('.team__photo img'));
  //   
  //         gsap.set(cards, { autoAlpha: 0, y: 40 });
  //         images.forEach((img) => {
  //           if (img) gsap.set(img, { scale: 1.1, filter: 'blur(12px)' });
  //         });
  //   
  //         cards.forEach((card, i) => {
  //           ScrollTrigger.create({
  //             trigger: card,
  //             start: 'top 95%',
  //             once: true,
  //             onEnter: () => {
  //               gsap.to(card, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' });
  //               if (images[i]) {
  //                 gsap.to(images[i], { scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' });
  //               }
  //             },
  //           });
  //         });
  //       });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-172" ref={raiz}>
      <section className="team" aria-labelledby="team-heading">
            <div className="container container--padded">
              <div className="team__card">
                <header className="team__header">
                  <p className="section-label team__eyebrow">{s.texto}</p>
                  <h2 id="team-heading" className="team__heading">{s.titulo}</h2>
                </header>
      
                <ul className="team__grid">
                  <li className="team__member">
                    <div className="team__photo">
                      <img src={s.imagem} alt="Portrait of Zaire Dorwart" width="640" height="640" style={{objectPosition: '50% 30%'}} loading="lazy" decoding="async" />
                    </div>
                    <div className="team__info">
                      <h3 className="section-label section-label--lg team__name">{s.subtitulo}</h3>
                      <p className="team__role">{s.texto2}</p>
                    </div>
                  </li>
      
                  <li className="team__member">
                    <div className="team__photo">
                      <img src={s.imagem2} alt="Portrait of Alfonso Lubin" width="640" height="640" style={{objectPosition: '50% 30%'}} loading="lazy" decoding="async" />
                    </div>
                    <div className="team__info">
                      <h3 className="section-label section-label--lg team__name">{s.subtitulo2}</h3>
                      <p className="team__role">{s.texto3}</p>
                    </div>
                  </li>
      
                  <li className="team__member">
                    <div className="team__photo">
                      <img src={s.imagem3} alt="Portrait of Hanna Siphron" width="640" height="640" style={{objectPosition: '50% 30%'}} loading="lazy" decoding="async" />
                    </div>
                    <div className="team__info">
                      <h3 className="section-label section-label--lg team__name">{s.subtitulo3}</h3>
                      <p className="team__role">{s.texto4}</p>
                    </div>
                  </li>
      
                  <li className="team__member">
                    <div className="team__photo">
                      <img src={s.imagem4} alt="Portrait of Ashlynn Curtis" width="640" height="640" style={{objectPosition: '50% 30%'}} loading="lazy" decoding="async" />
                    </div>
                    <div className="team__info">
                      <h3 className="section-label section-label--lg team__name">{s.subtitulo4}</h3>
                      <p className="team__role">{s.texto5}</p>
                    </div>
                  </li>
      
                  <li className="team__member">
                    <div className="team__photo">
                      <img src={s.imagem5} alt="Portrait of Martin Dorwart" width="640" height="640" style={{objectPosition: '50% 30%'}} loading="lazy" decoding="async" />
                    </div>
                    <div className="team__info">
                      <h3 className="section-label section-label--lg team__name">{s.subtitulo5}</h3>
                      <p className="team__role">{s.texto6}</p>
                    </div>
                  </li>
      
                  <li className="team__member">
                    <div className="team__photo">
                      <img src={s.imagem6} alt="Portrait of Nolan Bergson" width="640" height="640" style={{objectPosition: '50% 30%'}} loading="lazy" decoding="async" />
                    </div>
                    <div className="team__info">
                      <h3 className="section-label section-label--lg team__name">{s.subtitulo6}</h3>
                      <p className="team__role">{s.texto7}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    </section>
  );
}