"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-4
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
  //      DIMAAC — HORIZON PEEL INTRO
  //      script.js
  //   
  //      Completely new animation (no SplitText, no letter
  //      burst, no iris clip — everything that was buggy is
  //      removed). This version uses simple, solid motions:
  //   
  //      1. Title "DI · MAAC" fades in centre.
  //      2. Letter-spacing tightens (0.3em → 0.05em) — word
  //         snaps together with a confident beat.
  //      3. Horizontal shutter splits: 6 cream bars that
  //         together cover the viewport peel away — top 3
  //         slide UP, bottom 3 slide DOWN, with a stagger
  //         from the centre outward. The title rides the
  //         centre seam and fades during the split.
  //      4. The video (already loaded behind) stays there;
  //         the peel reveals it.  Video scale settles 1.15 → 1.
  //      5. Shell (header + hero) fades in on top.
  //      6. Hero title + sub split into words (own splitter),
  //         each word rises inside an overflow:hidden mask.
  //   
  //      ===================================================== */
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM ── */
  //      const loader    = document.getElementById('js-loader')
  //      const halfTop   = document.getElementById('js-half-top')
  //      const halfBot   = document.getElementById('js-half-bottom')
  //      const title     = document.getElementById('js-title')
  //      const video     = document.querySelector('.frame video')
  //      const shell     = document.getElementById('js-shell')
  //      const heroSplits= document.querySelectorAll('[data-hero]')
  //   
  //      /* ──────────────────────────────────────────────
  //         WORD SPLITTER for hero text — wraps every word in
  //           <span class="hero-word">…</span>
  //         separated by <span class="hero-space">.  We wrap
  //         the parent in overflow:hidden (already set in CSS)
  //         so the yPercent 100 → 0 lift works as a mask.
  //         ────────────────────────────────────────────── */
  //      function splitWords(el) {
  //         const raw = el.textContent.trim()
  //         el.textContent = ''
  //         const words = raw.split(/\s+/)
  //         const nodes = []
  //         words.forEach((w, i) => {
  //            const span = document.createElement('span')
  //            span.className = 'hero-word'
  //            span.textContent = w
  //            el.appendChild(span)
  //            nodes.push(span)
  //            if (i < words.length - 1) {
  //               const sp = document.createElement('span')
  //               sp.className = 'hero-space'
  //               el.appendChild(sp)
  //            }
  //         })
  //         return nodes
  //      }
  //   
  //      const heroWords = [...heroSplits].flatMap(splitWords)
  //   
  //      /* ──────────────────────────────────────────────
  //         INITIAL STATES — GSAP owns anything it animates.
  //         ────────────────────────────────────────────── */
  //      gsap.set(title,     { opacity: 0, letterSpacing: '0.3em' })
  //      gsap.set(video,     { scale: 1.15 })
  //      gsap.set(shell,     { opacity: 0 })
  //      gsap.set(heroWords, { yPercent: 100 })
  //      /* Bars stay at their natural grid position — GSAP
  //         will animate their yPercent away. */
  //   
  //      /* ──────────────────────────────────────────────
  //         MAIN TIMELINE
  //         ────────────────────────────────────────────── */
  //      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  //   
  //      /* 1. Title fade in */
  //      tl.to(title, {
  //         opacity: 1,
  //         duration: 0.6,
  //         delay: 0.3,
  //      })
  //   
  //      /* 2. Letter-spacing snap */
  //      tl.to(title, {
  //         letterSpacing: '0.05em',
  //         duration: 0.7,
  //         ease: 'power3.inOut',
  //      }, '+=0.3')
  //   
  //      /* 3. PEEL — top half slides up, bottom half slides down.
  //            Each moves by its own full height (yPercent -100 /
  //            +100) so neither leaves a sliver behind. Smooth
  //            power3.inOut keeps it feeling like one motion. */
  //      tl.to(halfTop, {
  //         yPercent: -100,
  //         duration: 1.3,
  //         ease: 'power3.inOut',
  //      }, '+=0.2')
  //   
  //      tl.to(halfBot, {
  //         yPercent: 100,
  //         duration: 1.3,
  //         ease: 'power3.inOut',
  //      }, '<')
  //   
  //      /* 4. Title fades + scales down as the peel pulls away */
  //      tl.to(title, {
  //         opacity: 0,
  //         scale: 0.96,
  //         duration: 0.5,
  //         ease: 'power2.in',
  //      }, '<0.15')
  //   
  //      /* 5. Video zoom settles 1.15 → 1 during the peel */
  //      tl.to(video, {
  //         scale: 1,
  //         duration: 1.4,
  //         ease: 'expo.out',
  //      }, '<')
  //   
  //      /* 6. Hide loader once bars are off-screen */
  //      tl.set(loader, { display: 'none' }, '+=0.05')
  //   
  //      /* 7. Shell (header + hero) fades in */
  //      tl.to(shell, {
  //         opacity: 1,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //      }, '<')
  //   
  //      /* 8. Hero words rise inside the parent's overflow:hidden */
  //      tl.to(heroWords, {
  //         yPercent: 0,
  //         duration: 0.7,
  //         stagger: 0.05,
  //         ease: 'power3.out',
  //      }, '<0.1')
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-4" ref={raiz}>
      <div className="loader" id="js-loader">
            <span className="half half--top" id="js-half-top"></span>
            <span className="half half--bottom" id="js-half-bottom"></span>
      
            <div className="loader__title" id="js-title">
               <span className="loader__word">{s.rotulo}</span>
               <span className="loader__dot"></span>
               <span className="loader__word">{s.rotulo2}</span>
            </div>
         </div>
      
         
         <div className="stage">
            <div className="frame" id="js-frame">
               <video poster="./img/poster.jpg" preload="auto" autoplay={true} muted={true} loop={true} playsinline={true} disablepictureinpicture
                  disableremoteplayback>
                  <source src={s.video} type="video/mp4" />
               </video>
            </div>
      
            <div className="shell" id="js-shell">
               <header className="head">
                  <a href="#" className="head__link head__contact">{s.acao}</a>
      
                  <a href="#" className="head__logo">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"
                        aria-hidden="true">
                        <path fill="currentColor"
                           d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z" />
                        <path fill="currentColor"
                           d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                     </svg>
                     <p className="head__wordmark">{s.texto}</p>
                     <span className="head__tag">{s.rotulo3}</span>
                  </a>
      
                  <span className="head__menu">
                     <span>{s.rotulo4}</span>
                     <span className="hamburger" aria-hidden="true">
                        <span className="hamburger__line hamburger__line--short"></span>
                        <span className="hamburger__line"></span>
                     </span>
                  </span>
               </header>
      
               <div className="hero">
                  <p className="hero__title" data-hero>{s.texto2}</p>
                  <span className="hero__sub" data-hero>{s.rotulo5}</span>
               </div>
            </div>
         </div>
    </section>
  );
}