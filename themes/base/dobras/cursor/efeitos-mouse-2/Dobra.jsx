"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-2
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
  //      SPLIT VIGNETTE — vanilla port
  //      script.js
  //   
  //      Port of the Next.js + framer-motion + Lenis demo to
  //      plain HTML/CSS/JS + GSAP + Lenis.
  //   
  //      What's preserved 1:1:
  //      • Lenis smooth scroll.
  //      • All vignettes share the SAME (x, y) target — the
  //        mouse position offset by the vignette's half-size
  //        (target = mouseX − 25vw/2 = mouseX − vw*0.125, etc).
  //        Each vignette is `position: fixed`, so they all sit
  //        on the same spring-driven coords; the section's
  //        clip-path is what determines which one is visible.
  //      • Spring physics replicated via `gsap.quickTo` with
  //        a duration tuned to feel like the original
  //        framer-motion useSpring({stiffness: 150, damping: 15,
  //        mass: 0.1}) — heavy lag on big movements, snappy on
  //        small ones.
  //      • Description swaps the active about.jpg via class
  //        toggle (no src change → no flash).
  //      ===================================================== */
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM ── */
  //      const vignettes  = document.querySelectorAll('[data-vignette]')
  //      const descRows   = document.querySelectorAll('.description__list p')
  //      const descImgs   = document.querySelectorAll('.description .vignette img')
  //   
  //      /* ──────────────────────────────────────────────
  //         LENIS smooth scroll
  //         ────────────────────────────────────────────── */
  //      const lenis = new Lenis()
  //      function raf(t) { lenis.raf(t); requestAnimationFrame(raf) }
  //      requestAnimationFrame(raf)
  //   
  //      /* ──────────────────────────────────────────────
  //         QUICK SETTERS — one per vignette element.
  //         Building one quickTo per axis per element so each
  //         vignette is animated individually (lets GSAP cache
  //         its transform writes per element).
  //         ────────────────────────────────────────────── */
  //      const setters = [...vignettes].map(el => ({
  //         x: gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' }),
  //         y: gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' }),
  //      }))
  //   
  //      /* Initial position — centre of viewport, just so the
  //         vignettes don't show up in the corner before the
  //         first mouse move. */
  //      const offsetX = () => window.innerWidth  * 0.125   // 25vw / 2
  //      const offsetY = () => window.innerWidth  * 0.150   // 30vw / 2 (height defined as vw)
  //      /* (the original code uses `window.innerWidth / 2 * 0.30`
  //         which simplifies to vw * 0.15 — same thing) */
  //   
  //      /* ──────────────────────────────────────────────
  //         MOUSEMOVE — fan target out to all vignettes
  //         ────────────────────────────────────────────── */
  //      window.addEventListener('mousemove', (e) => {
  //         const tx = e.clientX - offsetX()
  //         const ty = e.clientY - offsetY()
  //   
  //         setters.forEach(s => { s.x(tx); s.y(ty) })
  //      })
  //   
  //      /* ──────────────────────────────────────────────
  //         DESCRIPTION HOVER — swap active about image
  //         ────────────────────────────────────────────── */
  //      descRows.forEach(row => {
  //         row.addEventListener('mouseenter', () => {
  //            const i = row.dataset.i
  //            descImgs.forEach(img => img.classList.remove('is-active'))
  //            const target = [...descImgs].find(img => img.dataset.i === i)
  //            if (target) target.classList.add('is-active')
  //         })
  //      })
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-2" ref={raiz}>
      <section className="gallery">
            <div className="gallery__bg">
               <img src={s.imagem} alt="" />
            </div>
            <div className="vignette" data-vignette>
               <img src={s.imagem2} alt="" />
            </div>
         </section>
      
         <section className="gallery">
            <div className="gallery__bg">
               <img src={s.imagem3} alt="" />
            </div>
            <div className="vignette" data-vignette>
               <img src={s.imagem4} alt="" />
            </div>
         </section>
      
         <section className="gallery">
            <div className="gallery__bg">
               <img src={s.imagem5} alt="" />
            </div>
            <div className="vignette" data-vignette>
               <img src={s.imagem6} alt="" />
            </div>
         </section>
      
         <section className="gallery">
            <div className="gallery__bg">
               <img src={s.imagem7} alt="" />
            </div>
            <div className="vignette" data-vignette>
               <img src={s.imagem8} alt="" />
            </div>
         </section>
      
         
         <section className="description">
            <div className="description__list" id="js-desc-list">
               <p data-handle="dyal_thak"          data-i="0">{s.texto}</p>
               <p data-handle="leidinger_matthias" data-i="1">{s.texto2}</p>
               <p data-handle="mark_rammers"       data-i="2">{s.texto3}</p>
               <p data-handle="landon_speers"      data-i="3">{s.texto4}</p>
            </div>
      
            <div className="vignette" data-vignette>
               
               <img src={s.imagem9}          data-i="0" className="is-active" alt="" />
               <img src={s.imagem10} data-i="1"                   alt="" />
               <img src={s.imagem11}       data-i="2"                   alt="" />
               <img src={s.imagem12}      data-i="3"                   alt="" />
            </div>
         </section>
    </section>
  );
}