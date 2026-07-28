"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-111
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
  //   // AboutHero entrance — above-the-fold master timeline (no ScrollTrigger).
  //   // Card entrance branches by how many cards are PAINTED at the current
  //   // viewport (3 / 2 / 1) — the responsive CSS hides 1 or 2 cards via
  //   // `display: none` at the ≤767 / ≤479 breakpoints, so the entrance must
  //   // adapt to whichever cards are actually visible.
  //   //
  //   //   3 cards (≥768): "deck deal" — center rises from below, then side cards
  //   //     slide out from BEHIND the center at the same final y. They never
  //   //     start above; they emerge level with the center and fan outward with
  //   //     a slight rotation that untilts.
  //   //   2 cards (480–767): both start stacked at the midpoint between their
  //   //     final positions, lifted from below with rotation. They rise + fade
  //   //     in still overlapped, then separate horizontally while the rotation
  //   //     untilts.
  //   //   1 card (<480): no displacement — just a rise + small rotate from -6
  //   //     back to 0 with a fade.
  //   //
  //   // Curves + durations: Pipely DNA — power3.out, 0.8–1.2s phases.
  //   (() => {
  //     const gsap = window.gsap;
  //     if (typeof gsap === 'undefined') return;
  //     const section = document.querySelector('.about-hero');
  //     if (!section) return;
  //   
  //     const heading = section.querySelector('.about-hero__heading');
  //     const sub = section.querySelector('.about-hero__sub');
  //     const allCards = Array.from(section.querySelectorAll('.about-hero__gallery-item'));
  //     // Only animate cards actually painted at this viewport.
  //     const cards = allCards.filter((c) => getComputedStyle(c).display !== 'none');
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (reduce) {
  //       gsap.set([heading, sub, ...allCards], { autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0 });
  //       return;
  //     }
  //   
  //     // ── Prime heading + sub (fade-from-right) ───────────────────────────
  //     gsap.set([heading, sub], { autoAlpha: 0, x: 60 });
  //   
  //     // ── Prime cards by visible count ────────────────────────────────────
  //     if (cards.length === 3) {
  //       const [leftCard, centerCard, rightCard] = cards;
  //       const lRect = leftCard.getBoundingClientRect();
  //       const cRect = centerCard.getBoundingClientRect();
  //       const rRect = rightCard.getBoundingClientRect();
  //       const leftFromCenter = cRect.left - lRect.left;
  //       const rightFromCenter = cRect.left - rRect.left;
  //   
  //       // Side cards begin stacked behind the center at the SAME y as center's
  //       // final position — no upward offset. The "deal" reads as a horizontal
  //       // fan, not a fall from above.
  //       gsap.set([leftCard, rightCard], {
  //         autoAlpha: 0, scale: 0.9, y: 0, zIndex: 1, transformOrigin: '50% 50%',
  //       });
  //       gsap.set(leftCard,  { x: leftFromCenter,  rotation: -8 });
  //       gsap.set(rightCard, { x: rightFromCenter, rotation:  8 });
  //   
  //       gsap.set(centerCard, {
  //         autoAlpha: 0, y: 80, scale: 0.94, zIndex: 2, transformOrigin: '50% 100%',
  //       });
  //     } else if (cards.length === 2) {
  //       const [backCard, frontCard] = cards;
  //       const fRect = backCard.getBoundingClientRect();
  //       const sRect = frontCard.getBoundingClientRect();
  //       // Each card travels toward the midpoint (half the edge-to-edge stride)
  //       // in the opposite direction so they overlap before splitting.
  //       const halfStride = (sRect.left - fRect.left) / 2;
  //   
  //       gsap.set([backCard, frontCard], {
  //         autoAlpha: 0, y: 60, transformOrigin: '50% 50%',
  //       });
  //       gsap.set(backCard,  { x:  halfStride, rotation: -8 });
  //       gsap.set(frontCard, { x: -halfStride, rotation:  8 });
  //     } else if (cards.length === 1) {
  //       gsap.set(cards[0], {
  //         autoAlpha: 0, y: 40, rotation: -6, transformOrigin: '50% 50%',
  //       });
  //     }
  //   
  //     // ── Timeline ────────────────────────────────────────────────────────
  //     const tl = gsap.timeline({ delay: 0.15 });
  //   
  //     // Heading + sub fade-from-right (Pipely DNA cascade)
  //     tl.to(heading, { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0)
  //       .to(sub,     { autoAlpha: 1, x: 0, duration: 0.85, ease: 'power3.out' }, 0.08);
  //   
  //     // Cards start the moment the heading starts (time = 0). The user wants
  //     // the gallery to begin animating as soon as the heading fade-in begins
  //     // — not held until the heading settles.
  //     if (cards.length === 3) {
  //       const [leftCard, centerCard, rightCard] = cards;
  //   
  //       // 1) Center rises from below.
  //       tl.to(centerCard, {
  //         y: 0, scale: 1, autoAlpha: 1, duration: 1.0, ease: 'power3.out',
  //       }, 0);
  //   
  //       // 2) Side cards deal outward FROM behind the center, at the same y.
  //       //    No vertical drop — just slide x → 0 and rotation → 0. Tiny stagger
  //       //    so left-then-right reads as deliberate.
  //       tl.to(leftCard, {
  //         x: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power3.out',
  //       }, 0.3);
  //       tl.to(rightCard, {
  //         x: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power3.out',
  //       }, 0.38);
  //   
  //       tl.set(cards, { clearProps: 'zIndex,willChange' });
  //     } else if (cards.length === 2) {
  //       const [backCard, frontCard] = cards;
  //   
  //       // Phase 1 — both rise from below; only FRONT card fades in. Snappy rise
  //       // + early hand-off into phase 2 so the entrance never feels paused.
  //       tl.to([backCard, frontCard], { y: 0, duration: 0.55, ease: 'power3.out' }, 0);
  //       tl.to(frontCard, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0);
  //   
  //       // Phase 2 — separate + untilt. Starts slightly before rise settles so
  //       // motion stays continuous; back card fades in over the spread to
  //       // complete the "one card splits into two" reveal.
  //       tl.to([backCard, frontCard], {
  //         x: 0, rotation: 0, duration: 0.6, ease: 'power3.out',
  //       }, 0.35);
  //       tl.to(backCard, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0.4);
  //   
  //       tl.set(cards, { clearProps: 'willChange' });
  //     } else if (cards.length === 1) {
  //       // Portrait: rise from below + rotate + fade.
  //       tl.to(cards[0], {
  //         y: 0, rotation: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out',
  //       }, 0);
  //       tl.set(cards, { clearProps: 'willChange' });
  //     }
  //   })();
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: pipely-navbar behavior ===== */
  //   (() => {
  //     const nav = document.querySelector('.navbar');
  //     if (!nav) return;
  //     const toggle = nav.querySelector('.navbar__toggle');
  //     const panel = nav.querySelector('.navbar__panel');
  //     if (!toggle || !panel) return;
  //   
  //     const setOpen = (open) => {
  //       nav.dataset.open = String(open);
  //       toggle.setAttribute('aria-expanded', String(open));
  //       toggle.setAttribute('aria-label', open ? 'Close menu' : 'Toggle menu');
  //       // `inert` makes the panel non-interactive + invisible to assistive tech when
  //       // closed, but keeps it rendered so we can animate height/opacity.
  //       panel.toggleAttribute('inert', !open);
  //     };
  //   
  //     toggle.addEventListener('click', (e) => {
  //       e.stopPropagation();
  //       const open = nav.dataset.open !== 'true';
  //       setOpen(open);
  //     });
  //   
  //     // Close panel when clicking a nav link or CTA inside it
  //     panel.querySelectorAll('.navbar__panel-link, .navbar__panel-cta').forEach((el) => {
  //       el.addEventListener('click', () => setOpen(false));
  //     });
  //   
  //     // Close when clicking outside the nav (or on the backdrop)
  //     document.addEventListener('click', (e) => {
  //       if (nav.dataset.open !== 'true') return;
  //       if (!nav.contains(e.target)) return setOpen(false);
  //       // clicks INSIDE nav: only close on backdrop
  //       if (e.target.classList.contains('navbar__backdrop')) setOpen(false);
  //     });
  //   
  //     // Esc closes
  //     document.addEventListener('keydown', (e) => {
  //       if (e.key === 'Escape' && nav.dataset.open === 'true') setOpen(false);
  //     });
  //   
  //     // Close panel when viewport grows past tablet breakpoint
  //     const mq = window.matchMedia('(min-width: 992px)');
  //     const onChange = () => {
  //       if (mq.matches) setOpen(false);
  //     };
  //     mq.addEventListener('change', onChange);
  //   })();
  //   
  //   // === Entrance: nav cluster falls in from top with stagger, runs in parallel
  //   // with the Hero master timeline so the page reveal feels coordinated. ===
  //   (() => {
  //     const gsap = window.gsap;
  //     if (typeof gsap === 'undefined') return;
  //     const nav = document.querySelector('.navbar');
  //     if (!nav) return;
  //     const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     // Select visible entrance candidates only — links are display:none on tablet+,
  //     // toggle is display:none on desktop, cta hides on portrait, etc.
  //     const candidates = nav.querySelectorAll(
  //       '.navbar__brand, .navbar__link, .navbar__cta, .navbar__toggle'
  //     );
  //     const items = Array.from(candidates).filter(
  //       (el) => getComputedStyle(el).display !== 'none'
  //     );
  //     if (!items.length) return;
  //   
  //     if (prefersReduced) {
  //       gsap.set(items, { autoAlpha: 1, y: 0 });
  //       return;
  //     }
  //   
  //     gsap.set(items, { autoAlpha: 0, y: -12 });
  //     gsap.to(items, {
  //       autoAlpha: 1,
  //       y: 0,
  //       duration: 0.6,
  //       ease: 'power3.out',
  //       stagger: 0.07,
  //       delay: 0.05,
  //       onComplete: () => {
  //         // Strip the inline transform props GSAP leaves behind so the CSS hover
  //         // `scale` rule can transition smoothly (CSS can't animate from `none`).
  //         gsap.set(items, { clearProps: 'translate,rotate,scale,transform,y' });
  //       },
  //     });
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-111" ref={raiz}>
      <header className="navbar-wrap">
                <div className="container container--padded">
                  <nav className="navbar" aria-label="Primary" data-open="false">
                    <div className="navbar__bar">
                      <a href="/" className="navbar__brand" aria-label="Pipely home">
                        <img className="navbar__logo" src={s.imagem} alt="Pipely" width="114" height="40" />
                      </a>
          
                      <ul className="navbar__menu">
                        <li>
                          <a className="navbar__link" href="/services">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo2}</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="navbar__link" href="/case-studies">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo3}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo4}</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="navbar__link" href="/about">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo5}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo6}</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="navbar__link" href="/blog">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo7}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo8}</span>
                            </span>
                          </a>
                        </li>
                      </ul>
          
                      <div className="navbar__actions">
                        <a href="/contact" className="btn btn--primary navbar__cta">
                          <span className="btn__mask">
                            <span className="btn__text">{s.rotulo9}</span>
                            <span className="btn__text" aria-hidden="true">{s.rotulo10}</span>
                          </span>
                        </a>
                        <button type="button" className="navbar__toggle" aria-label="Toggle menu" aria-controls="navbar-panel" aria-expanded="false" onClick={s.onClick}>
                          <span className="navbar__toggle-burger" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span className="navbar__toggle-close" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="5" y1="5" x2="19" y2="19"></line>
                              <line x1="19" y1="5" x2="5" y2="19"></line>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
          
                    <div className="navbar__panel" id="navbar-panel" inert="">
                      <div className="navbar__panel-inner">
                        <ul className="navbar__panel-menu">
                          <li>
                            <a className="navbar__panel-link" href="/services">{s.acao}</a>
                          </li>
                          <li>
                            <a className="navbar__panel-link" href="/case-studies">{s.acao2}</a>
                          </li>
                          <li>
                            <a className="navbar__panel-link" href="/about">{s.acao3}</a>
                          </li>
                          <li>
                            <a className="navbar__panel-link" href="/blog">{s.acao4}</a>
                          </li>
                        </ul>
                        <a href="/contact" className="btn btn--primary navbar__panel-cta">
                          <span className="btn__mask">
                            <span className="btn__text">{s.rotulo11}</span>
                            <span className="btn__text" aria-hidden="true">{s.rotulo12}</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="navbar__backdrop" aria-hidden="true"></div>
                  </nav>
                </div>
              </header>
      
          <section className="about-hero" aria-labelledby="about-hero-heading">
            <div className="container container--padded">
              <div className="about-hero__card">
                <div className="about-hero__top">
                  <h1 id="about-hero-heading" className="about-hero__heading">{s.titulo}</h1>
                  <p className="about-hero__sub">{s.texto}</p>
                </div>
      
                <div className="about-hero__gallery" role="list">
                  <div className="about-hero__gallery-item" role="listitem">
                    <div className="about-hero__media">
                      <img src={s.imagem2} alt="Team member in a confident stance" width="1232" height="928" style={{objectPosition: '70% center'}} loading="eager" decoding="async" />
                    </div>
                  </div>
                  <div className="about-hero__gallery-item" role="listitem">
                    <div className="about-hero__media">
                      <img src={s.imagem3} alt="Team member smiling" width="2048" height="2048" style={{objectPosition: '50% 60%'}} loading="eager" decoding="async" />
                    </div>
                  </div>
                  <div className="about-hero__gallery-item" role="listitem">
                    <div className="about-hero__media">
                      <img src={s.imagem4} alt="Team member with hard hat" width="2048" height="2048" style={{objectPosition: '50% center'}} loading="eager" decoding="async" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}