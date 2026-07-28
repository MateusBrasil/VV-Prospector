"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-10
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
  //      ORBIT — INK-BLOT REVEAL MENU
  //      script.js
  //   
  //      The signature effect: a dark circular "ink blot" spreads
  //      from the toggle button outwards, filling the screen.
  //      It's actually TWO synced layers:
  //   
  //      1. An SVG <circle> inside a <clipPath> — clips a dark
  //         <rect> element. As we tween the circle's `r` attribute,
  //         the dark fill grows from a dot to the full viewport.
  //   
  //      2. A CSS `clip-path: circle()` on the menu content — kept
  //         identical (same center + radius) so the interactive
  //         HTML is revealed in perfect sync with the visual.
  //   
  //      Both driven by ONE paused GSAP timeline. Click toggle →
  //      play. Click again → reverse.
  //      ===================================================== */
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM ── */
  //      const toggle    = document.getElementById('js-toggle')
  //      const menu      = document.getElementById('js-menu')
  //      const content   = document.getElementById('js-content')
  //      const circleEl  = document.getElementById('js-clip-circle')
  //      const links     = menu.querySelectorAll('.nav__link')
  //   
  //      /* ── Compute the reveal origin + final radius ──
  //         The ink blot originates from the CENTER of the toggle
  //         button (in viewport coords). It needs to grow large
  //         enough to cover the farthest corner of the viewport —
  //         Pythagoras gives us that distance. */
  //      function computeCircle() {
  //         const rect = toggle.getBoundingClientRect()
  //         const cx = rect.left + rect.width  / 2
  //         const cy = rect.top  + rect.height / 2
  //         const vw = window.innerWidth
  //         const vh = window.innerHeight
  //   
  //         /* Farthest corner distance from (cx, cy) */
  //         const dx = Math.max(cx, vw - cx)
  //         const dy = Math.max(cy, vh - cy)
  //         const maxR = Math.sqrt(dx * dx + dy * dy) + 20  // small safety pad
  //   
  //         return { cx, cy, maxR }
  //      }
  //   
  //      /* Initial clip state — a dot at toggle's location */
  //      function applyCircle(cx, cy, r) {
  //         /* SVG circle: set attributes directly */
  //         circleEl.setAttribute('cx', cx)
  //         circleEl.setAttribute('cy', cy)
  //         circleEl.setAttribute('r',  r)
  //         /* CSS clip-path on the content layer — synced via vars */
  //         content.style.setProperty('--cx', cx + 'px')
  //         content.style.setProperty('--cy', cy + 'px')
  //         content.style.setProperty('--cr', r  + 'px')
  //      }
  //   
  //      /* Run once on load so both layers start with a dot at 0 radius */
  //      let { cx, cy, maxR } = computeCircle()
  //      applyCircle(cx, cy, 0)
  //   
  //      /* Recompute on resize so the open radius always reaches the corners */
  //      window.addEventListener('resize', () => {
  //         ({ cx, cy, maxR } = computeCircle())
  //         if (menu.classList.contains('is-open')) {
  //            applyCircle(cx, cy, maxR)
  //         }
  //      })
  //   
  //      /* Initial states for the staggered link reveal */
  //      gsap.set(links, { y: 40, opacity: 0 })
  //   
  //      /* ──────────────────────────────────────────────
  //         MAIN TIMELINE — paused, play/reverse on click.
  //         GSAP tweens a plain JS proxy { r } and on every
  //         update we push the value to BOTH the SVG circle
  //         and the CSS clip-path. ONE driver, TWO layers.
  //         ────────────────────────────────────────────── */
  //      const clipState = { r: 0 }
  //   
  //      const tl = gsap.timeline({
  //         paused: true,
  //         defaults: { ease: 'power3.inOut' },
  //         onUpdate: () => applyCircle(cx, cy, clipState.r),
  //      })
  //   
  //      tl
  //         /* 1. Grow the circle from 0 → maxR */
  //         .to(clipState, {
  //            r: () => maxR,   // function → re-read on reverse (safe)
  //            duration: 1.0,
  //         }, 0)
  //   
  //         /* 2. Nav links slide up + fade once blot has mostly filled */
  //         .to(links, {
  //            y: 0,
  //            opacity: 1,
  //            duration: 0.6,
  //            stagger: 0.06,
  //            ease: 'power3.out',
  //         }, 0.55)
  //   
  //      /* ──────────────────────────────────────────────
  //         TOGGLE — play forward or reverse
  //         ────────────────────────────────────────────── */
  //      toggle.addEventListener('click', () => {
  //         const isOpen = !tl.reversed() && tl.progress() > 0
  //   
  //         if (isOpen) {
  //            menu.classList.remove('is-open')
  //            menu.setAttribute('aria-hidden', 'true')
  //            document.body.classList.remove('is-open')
  //            tl.reverse()
  //         } else {
  //            /* Refresh origin so menu opens from the button's CURRENT
  //               position (handles resize between toggles). */
  //            ({ cx, cy, maxR } = computeCircle())
  //            menu.classList.add('is-open')
  //            menu.setAttribute('aria-hidden', 'false')
  //            document.body.classList.add('is-open')
  //            tl.play()
  //         }
  //      })
  //   
  //      /* Escape closes */
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
    <section className="dobra" data-dobra="menu-navegacao-menu-10" ref={raiz}>
      <header className="header">
            <a href="#" className="brand">Orbit<span>*</span></a>
      
            
            <button className="toggle" id="js-toggle" type="button" aria-label="Open menu" onClick={s.onClick}>
               <span className="toggle__inner" aria-hidden="true">
                  <span className="toggle__line"></span>
                  <span className="toggle__line"></span>
                  <span className="toggle__line"></span>
               </span>
            </button>
         </header>
      
         
         <main className="hero">
            <img src={s.imagem} alt="" className="hero__bg" />
            <h1 className="hero__title">
               Ideas<br />in <em>motion.</em>
            </h1>
         </main>
      
         
         <div className="menu" id="js-menu" aria-hidden="true">
      
            
            <svg className="menu__svg" aria-hidden="true">
               <defs>
                  <clipPath id="orbitClip" clipPathUnits="userSpaceOnUse">
                     <circle id="js-clip-circle" cx="50" cy="50" r="0" />
                  </clipPath>
               </defs>
               
               <rect className="menu__fill" width="100%" height="100%"
                     clipPath="url(#orbitClip)" />
            </svg>
      
            
            <div className="menu__content" id="js-content">
      
               <nav className="nav">
                  <ul className="nav__list">
                     <li className="nav__item">
                        <a href="#" className="nav__link">
                           <span className="nav__num">01</span>
                           <span className="nav__text">
                              <span className="nav__text__main">{s.rotulo}</span>
                              <span className="nav__text__alt">{s.rotulo2}</span>
                           </span>
                        </a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">
                           <span className="nav__num">02</span>
                           <span className="nav__text">
                              <span className="nav__text__main">{s.rotulo3}</span>
                              <span className="nav__text__alt">{s.rotulo4}</span>
                           </span>
                        </a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">
                           <span className="nav__num">03</span>
                           <span className="nav__text">
                              <span className="nav__text__main">{s.rotulo5}</span>
                              <span className="nav__text__alt">{s.rotulo6}</span>
                           </span>
                        </a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">
                           <span className="nav__num">04</span>
                           <span className="nav__text">
                              <span className="nav__text__main">{s.rotulo7}</span>
                              <span className="nav__text__alt">{s.rotulo8}</span>
                           </span>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
    </section>
  );
}