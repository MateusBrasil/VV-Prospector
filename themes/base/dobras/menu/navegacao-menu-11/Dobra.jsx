"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-11
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
  //      PRISM — COLOURFUL MENU
  //      script.js
  //   
  //      Effect flow:
  //      1. Click MENU → 6 vertical coloured panels drop down from
  //         the top with a stagger, forming a striped backdrop.
  //      2. Each nav link is split into one <span> per character.
  //         All characters across ALL links slide up + fade in
  //         with a tight global stagger — cinematic reveal.
  //      3. Hover a link → its letters pick up colours from the
  //         accent palette, each letter getting a different tint.
  //      4. Close reverses everything via timeline.reverse().
  //   
  //      Extras:
  //      • Live clock in the hero footer.
  //      • Same toggle button opens/closes (no extra close icon).
  //      ===================================================== */
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM ── */
  //      const toggle  = document.getElementById('js-toggle')
  //      const menu    = document.getElementById('js-menu')
  //      const panels  = document.querySelectorAll('.panels__col')
  //      const links   = document.querySelectorAll('.nav__link')
  //      const foot    = document.querySelector('.menu__foot')
  //   
  //      /* ──────────────────────────────────────────────
  //         CHAR SPLIT — wrap each char of every link in <span>.
  //         We keep a flat array of every span so GSAP can stagger
  //         across ALL links at once.
  //         ────────────────────────────────────────────── */
  //      const allChars = []
  //   
  //      links.forEach(link => {
  //         const text = link.textContent
  //         link.textContent = ''                // clear original
  //         ;[...text].forEach(ch => {
  //            const span = document.createElement('span')
  //            span.textContent = ch === ' ' ? '\u00A0' : ch
  //            link.appendChild(span)
  //            allChars.push(span)
  //         })
  //      })
  //   
  //      /* Hidden initial state: each letter 100% below + invisible */
  //      gsap.set(allChars, { yPercent: 100, opacity: 0 })
  //      gsap.set(foot,     { opacity: 0, y: 16 })
  //   
  //      /* ──────────────────────────────────────────────
  //         MAIN TIMELINE
  //         ────────────────────────────────────────────── */
  //      const tl = gsap.timeline({
  //         paused: true,
  //         defaults: { ease: 'power3.inOut' },
  //      })
  //   
  //      tl
  //         /* Panels drop from above — left to right */
  //         .to(panels, {
  //            y: 0,
  //            duration: 1.0,
  //            stagger: 0.06,
  //            ease: 'power4.out',
  //         }, 0)
  //   
  //         /* All chars across all links rise with tight stagger. */
  //         .to(allChars, {
  //            yPercent: 0,
  //            opacity: 1,
  //            duration: 0.8,
  //            stagger: { each: 0.012, from: 'start' },
  //            ease: 'power3.out',
  //         }, 0.45)
  //   
  //         /* Meta footer fades in last */
  //         .to(foot, {
  //            opacity: 1,
  //            y: 0,
  //            duration: 0.4,
  //            ease: 'power2.out',
  //         }, 0.9)
  //   
  //      /* ──────────────────────────────────────────────
  //         OPEN / CLOSE
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
    <section className="dobra" data-dobra="menu-navegacao-menu-11" ref={raiz}>
      <header className="topbar">
            <a href="#" className="logo">
               <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
                  
                  <polygon points="20,4 38,34 2,34" fill="currentColor" />
               </svg>
               <span>{s.rotulo}</span>
            </a>
      
            <span className="topbar__meta"></span>
      
            <button className="btn" id="js-toggle" type="button" aria-label="Open menu" onClick={s.onClick}>
               <span className="btn__label">{s.rotulo2}</span>
            </button>
         </header>
      
         
         <main className="hero">
            <h1 className="hero__word">{s.titulo}</h1>
         </main>
      
         
         <div className="menu" id="js-menu" aria-hidden="true">
      
            <div className="panels" id="js-panels">
               <span className="panels__col" style={{'-Bg': 'var(--base-200)'}}></span>
               <span className="panels__col" style={{'-Bg': 'var(--base-200)'}}></span>
               <span className="panels__col" style={{'-Bg': 'var(--base-200)'}}></span>
               <span className="panels__col" style={{'-Bg': 'var(--base-100)'}}></span>
               <span className="panels__col" style={{'-Bg': 'var(--acento)'}}></span>
               <span className="panels__col" style={{'-Bg': 'var(--base-600)'}}></span>
            </div>
      
            <div className="menu__content">
               <nav className="nav">
                  <ul className="nav__list">
                     <li className="nav__item">
                        <a href="#" className="nav__link" data-split>{s.acao}</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link" data-split>{s.acao2}</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link" data-split>{s.acao3}</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link" data-split>{s.acao4}</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
    </section>
  );
}