"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-12
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   /* =====================================================
  //      CROSSHATCH — CROSSING MARQUEE MENU
  //      script.js
  //   
  //      Each marquee lane is a GSAP timeline that animates the
  //      track's xPercent (or yPercent) from 0 to -50% on
  //      infinite repeat. Because each track contains TWO
  //      identical copies of its content placed side-by-side,
  //      translating by -50% lands the track exactly at the
  //      start of the second copy — the next frame restarts at
  //      0, which visually is the same position. Result: zero
  //      jumps, perfectly seamless loop regardless of the
  //      content's width.
  //   
  //      Hover does NOT pause the animation (that caused the
  //      decorative elements to "pop" in/out). Instead we tween
  //      timeScale from 1 to 0.08 with a smooth ease — the
  //      ticker slows to a near-stop without any visible jerk.
  //   
  //      Open choreography:
  //      1. .menu fades in (background).
  //      2. Each lane slides in from its OWN edge.
  //      3. Centre logo scales in.
  //      4. Toggle label "Open" → "Close".
  //      ===================================================== */
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM ── */
  //      const toggle      = document.getElementById('js-toggle')
  //      const menu        = document.getElementById('js-menu')
  //      const core        = document.getElementById('js-core')
  //      const coreMark    = document.getElementById('js-core-mark')
  //      const brandMark   = document.getElementById('js-brand-mark')
  //      const labels      = toggle.querySelectorAll('[data-label]')
  //   
  //      const lanes = {
  //         row1: document.querySelector('.lane--row-1'),
  //         row2: document.querySelector('.lane--row-2'),
  //         col1: document.querySelector('.lane--col-1'),
  //         col2: document.querySelector('.lane--col-2'),
  //      }
  //   
  //      const tracks = {
  //         row1: document.getElementById('js-track-1'),
  //         row2: document.getElementById('js-track-2'),
  //         col1: document.getElementById('js-track-3'),
  //         col2: document.getElementById('js-track-4'),
  //      }
  //   
  //      /* ──────────────────────────────────────────────
  //         SEAMLESS MARQUEES
  //         Each is its own infinite tween. We run them from
  //         the start so, even before the menu opens, they
  //         already have a position (ensuring no first-frame
  //         jump when the menu is revealed).
  //   
  //         Direction explanation:
  //         • row1 moves RIGHT → LEFT → xPercent 0 → -50
  //         • row2 moves LEFT → RIGHT → xPercent -50 → 0
  //         • col1 moves DOWN → UP → yPercent 0 → -50
  //         • col2 moves UP → DOWN → yPercent -50 → 0
  //         ────────────────────────────────────────────── */
  //      const marquees = []
  //   
  //      function makeMarquee(track, prop, from, to, duration) {
  //         /* Set starting position so the track is already positioned
  //            before the tween kicks in (avoids any first-frame pop). */
  //         gsap.set(track, { [prop]: from })
  //         const tw = gsap.to(track, {
  //            [prop]: to,
  //            duration,
  //            ease: 'none',
  //            repeat: -1,
  //         })
  //         marquees.push({ track, tween: tw })
  //         return tw
  //      }
  //   
  //      makeMarquee(tracks.row1, 'xPercent',   0, -50, 30)
  //      makeMarquee(tracks.row2, 'xPercent', -50,   0, 36)
  //      makeMarquee(tracks.col1, 'yPercent',   0, -50, 28)
  //      makeMarquee(tracks.col2, 'yPercent', -50,   0, 32)
  //   
  //      /* ──────────────────────────────────────────────
  //         SMOOTH HOVER SLOWDOWN
  //         Instead of pausing (which causes visible mid-frame
  //         stop), we tween timeScale toward near-zero so the
  //         marquee glides to a rest. Re-entering speeds back
  //         up the same way. This also keeps ALL decorative
  //         children (stars, offsets) frame-locked to the
  //         parent transform — no independent sub-animations
  //         to jump around.
  //         ────────────────────────────────────────────── */
  //      Object.entries(lanes).forEach(([key, lane]) => {
  //         const tween = marquees[Object.keys(lanes).indexOf(key)].tween
  //   
  //         lane.addEventListener('mouseenter', () => {
  //            gsap.to(tween, {
  //               timeScale: 0.08,
  //               duration: 0.8,
  //               ease: 'power2.out',
  //               overwrite: 'auto',
  //            })
  //         })
  //   
  //         lane.addEventListener('mouseleave', () => {
  //            gsap.to(tween, {
  //               timeScale: 1,
  //               duration: 0.8,
  //               ease: 'power2.out',
  //               overwrite: 'auto',
  //            })
  //         })
  //      })
  //   
  //      /* ──────────────────────────────────────────────
  //         BRAND + CORE LOGO SPIN
  //         Both asterisk marks rotate constantly. Using GSAP
  //         (not CSS @keyframes) lets us share one timeline
  //         approach across the board.
  //         ────────────────────────────────────────────── */
  //      gsap.to(brandMark, {
  //         rotate: 360, duration: 8, ease: 'none', repeat: -1,
  //         transformOrigin: '50% 50%',
  //      })
  //      gsap.to(coreMark, {
  //         rotate: -360, duration: 12, ease: 'none', repeat: -1,
  //         transformOrigin: '50% 50%',
  //      })
  //   
  //      /* ──────────────────────────────────────────────
  //         OPEN / CLOSE TIMELINE
  //         ────────────────────────────────────────────── */
  //      gsap.set(lanes.row1, { xPercent:  100, opacity: 0 })   // slides in from right
  //      gsap.set(lanes.row2, { xPercent: -100, opacity: 0 })   // from left
  //      gsap.set(lanes.col1, { yPercent:  100, opacity: 0 })   // from bottom
  //      gsap.set(lanes.col2, { yPercent: -100, opacity: 0 })   // from top
  //      gsap.set(core,       { scale: 0, opacity: 0 })
  //      gsap.set(labels[1],  { yPercent: 100, opacity: 0 })
  //   
  //      const tl = gsap.timeline({
  //         paused: true,
  //         defaults: { ease: 'power4.out' },
  //      })
  //   
  //      tl
  //         .to(menu, { opacity: 1, duration: 0.25, ease: 'power2.out' }, 0)
  //   
  //         .to(lanes.row1, { xPercent: 0, opacity: 1, duration: 0.9 }, 0.1)
  //         .to(lanes.row2, { xPercent: 0, opacity: 1, duration: 0.9 }, 0.2)
  //         .to(lanes.col1, { yPercent: 0, opacity: 1, duration: 0.9 }, 0.3)
  //         .to(lanes.col2, { yPercent: 0, opacity: 1, duration: 0.9 }, 0.4)
  //   
  //         .to(core, {
  //            scale: 1, opacity: 1,
  //            duration: 0.6, ease: 'back.out(2)',
  //         }, 0.55)
  //   
  //         .to(labels[0], {
  //            yPercent: -100, opacity: 0,
  //            duration: 0.35, ease: 'power2.out',
  //         }, 0)
  //         .to(labels[1], {
  //            yPercent: 0, opacity: 1,
  //            duration: 0.35, ease: 'power2.out',
  //         }, 0.15)
  //   
  //      /* ──────────────────────────────────────────────
  //         TOGGLE
  //         ────────────────────────────────────────────── */
  //      toggle.addEventListener('click', () => {
  //         const isOpen = !tl.reversed() && tl.progress() > 0
  //   
  //         if (isOpen) {
  //            menu.classList.remove('is-open')
  //            menu.setAttribute('aria-hidden', 'true')
  //            document.body.classList.remove('is-open')
  //            toggle.setAttribute('aria-label', 'Open menu')
  //            tl.timeScale(1.4).reverse()
  //         } else {
  //            menu.classList.add('is-open')
  //            menu.setAttribute('aria-hidden', 'false')
  //            document.body.classList.add('is-open')
  //            toggle.setAttribute('aria-label', 'Close menu')
  //            tl.timeScale(1).play()
  //         }
  //      })
  //   
  //      document.addEventListener('keydown', (e) => {
  //         if (e.key === 'Escape' && !tl.reversed() && tl.progress() > 0) {
  //            toggle.click()
  //         }
  //      })
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-12" ref={raiz}>
      <div className="grid" aria-hidden="true"></div>
      
         <header className="header">
            <a href="#" className="brand" aria-label="xhatch home">
               <svg className="brand__svg" viewBox="0 0 40 40" aria-hidden="true">
                  <g id="js-brand-mark">
                     <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" />
                     <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" transform="rotate(45 20 20)" />
                     <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" transform="rotate(90 20 20)" />
                     <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" transform="rotate(135 20 20)" />
                  </g>
               </svg>
               <span className="brand__name">{s.rotulo}</span>
            </a>
      
            <button className="toggle" id="js-toggle" type="button" aria-label="Open menu" onClick={s.onClick}>
               <span className="toggle__icon" aria-hidden="true">
                  <span></span>
                  <span></span>
               </span>
               <span className="toggle__label">
                  <span data-label="open">{s.rotulo2}</span>
                  <span data-label="close">{s.rotulo3}</span>
               </span>
            </button>
         </header>
      
         <main className="hero">
            <h1 className="hero__title">{s.titulo}</h1>
         </main>
      
         <div className="menu" id="js-menu" aria-hidden="true">
            <a href="#" className="lane lane--h lane--row-1" data-dir="left">
               <div className="lane__track" id="js-track-1">
                  <span className="lane__group">
                     <span className="lane__word">WORK<span className="lane__star">✦</span></span>
                     <span className="lane__word">WORK<span className="lane__star">✦</span></span>
                     <span className="lane__word">WORK<span className="lane__star">✦</span></span>
                  </span>
                  <span className="lane__group">
                     <span className="lane__word">WORK<span className="lane__star">✦</span></span>
                     <span className="lane__word">WORK<span className="lane__star">✦</span></span>
                     <span className="lane__word">WORK<span className="lane__star">✦</span></span>
                  </span>
               </div>
            </a>
      
            <a href="#" className="lane lane--h lane--row-2" data-dir="right">
               <div className="lane__track" id="js-track-2">
                  <span className="lane__group">
                     <span className="lane__word">STUDIO<span className="lane__star">✦</span></span>
                     <span className="lane__word">STUDIO<span className="lane__star">✦</span></span>
                     <span className="lane__word">STUDIO<span className="lane__star">✦</span></span>
                  </span>
                  <span className="lane__group">
                     <span className="lane__word">STUDIO<span className="lane__star">✦</span></span>
                     <span className="lane__word">STUDIO<span className="lane__star">✦</span></span>
                     <span className="lane__word">STUDIO<span className="lane__star">✦</span></span>
                  </span>
               </div>
            </a>
      
            <a href="#" className="lane lane--v lane--col-1" data-dir="up">
               <div className="lane__track lane__track--v" id="js-track-3">
                  <span className="lane__group lane__group--v">
                     <span className="lane__word lane__word--v">{s.rotulo4}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo5}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo6}</span>
                     <span className="lane__star lane__star--v">✦</span>
                  </span>
                  <span className="lane__group lane__group--v">
                     <span className="lane__word lane__word--v">{s.rotulo7}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo8}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo9}</span>
                     <span className="lane__star lane__star--v">✦</span>
                  </span>
               </div>
            </a>
      
            <a href="#" className="lane lane--v lane--col-2" data-dir="down">
               <div className="lane__track lane__track--v" id="js-track-4">
                  <span className="lane__group lane__group--v">
                     <span className="lane__word lane__word--v">{s.rotulo10}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo11}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo12}</span>
                     <span className="lane__star lane__star--v">✦</span>
                  </span>
                  <span className="lane__group lane__group--v">
                     <span className="lane__word lane__word--v">{s.rotulo13}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo14}</span>
                     <span className="lane__star lane__star--v">✦</span>
                     <span className="lane__word lane__word--v">{s.rotulo15}</span>
                     <span className="lane__star lane__star--v">✦</span>
                  </span>
               </div>
            </a>
      
            <div className="menu__core" id="js-core" aria-hidden="true">
               <span className="menu__core-badge">
                  <svg className="menu__core-svg" viewBox="0 0 40 40">
                     <g id="js-core-mark">
                        <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" />
                        <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" transform="rotate(45 20 20)" />
                        <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" transform="rotate(90 20 20)" />
                        <rect x="18" y="0" width="4" height="40" rx="1" fill="currentColor" transform="rotate(135 20 20)" />
                     </g>
                  </svg>
                  <span>{s.rotulo16}</span>
               </span>
            </div>
         </div>
    </section>
  );
}