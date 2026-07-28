"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/navegacao-menu/navegacao-menu-4
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    /* =====================================================
       OLIVIER NAV MENU — script.js
    
       Behaviour:
       - Click the toggle → drop-down nav opens with staggered
         character-by-character text reveal
       - Hover any link   → blur every OTHER link + swap the
         preview image on the right
       - Click toggle again → everything reverses
       ===================================================== */
    
    /* ── DOM references ─────────────────────────────────── */
    const toggle      = raiz.current.querySelector('#js-toggle')
    const burger      = raiz.current.querySelector('#js-burger')
    const labelMenu   = raiz.current.querySelector('#js-label-menu')
    const labelClose  = raiz.current.querySelector('#js-label-close')
    const shop        = raiz.current.querySelector('#js-shop')
    const nav         = raiz.current.querySelector('#js-nav')
    const navBody     = raiz.current.querySelector('#js-nav-body')
    const navLinks    = raiz.current.querySelectorAll('.nav__link')
    const navImage    = raiz.current.querySelector('#js-nav-image')
    const navImageEl  = raiz.current.querySelector('#js-nav-image-el')
    const footerItems = raiz.current.querySelectorAll('.nav__footer li')
    const background  = raiz.current.querySelector('#js-background')
    
    /* ── 1. Split every nav link into <span> per character ──
       This lets us stagger each character independently for
       the iconic "wave" text reveal. We build the spans once
       on load so they're ready when the timeline plays. */
    navLinks.forEach(link => {
       const text = link.textContent
       link.textContent = ''  // clear original text
       text.split('').forEach(char => {
          const span = document.createElement('span')
          // Preserve spaces; otherwise they collapse when inline-block
          span.textContent = char === ' ' ? '\u00A0' : char
          link.appendChild(span)
       })
    })
    
    /* Grab every char span for later animation */
    const allChars = raiz.current.querySelectorAll('.nav__link span')
    
    /* ── 2. Set initial (hidden) states ─────────────────────
       Characters start 100% below their line and transparent.
       Footer items start below their line too.
       Close label is already opacity 0 via CSS. */
    gsap.set(allChars,    { y: '100%', opacity: 0 })
    gsap.set(footerItems, { y: '100%', opacity: 0 })
    
    /* ── 3. Main timeline — paused until user clicks ────────
       The standard ease used throughout matches the original
       cubic-bezier(0.76, 0, 0.24, 1). */
    const ease = 'power3.inOut'
    
    const tl = gsap.timeline({ paused: true })
    
    tl
       /* Drop-down panel expands.
          We use height:"auto" — GSAP measures the natural
          height automatically, so the panel grows to fit
          whatever content is inside (responsive-friendly). */
       .to(nav, { height: 'auto', duration: 1, ease }, 0)
    
       /* Dark overlay slides down to cover the page */
       .to(background, { height: '100vh', duration: 1, ease }, 0)
    
       /* Cross-fade the toggle labels: "Menu" out, "Close" in */
       .to(labelMenu,  { opacity: 0, duration: 0.35 }, 0)
       .to(labelClose, { opacity: 1, duration: 0.35 }, 0)
    
       /* Fade out the shop block on the right */
       .to(shop, { opacity: 0, duration: 0.35 }, 0)
    
       /* Characters slide up from y:100% with a stagger.
          stagger: 0.02 → 20ms between each character — this
          creates the diagonal "wave" across the whole list. */
       .to(
          allChars,
          { y: '0%', opacity: 1, duration: 1, ease, stagger: 0.02 },
          0.2,
       )
    
       /* Footer items slide up right after */
       .to(
          footerItems,
          { y: '0%', opacity: 1, duration: 1, ease, stagger: 0.05 },
          0.4,
       )
    
    /* ── 4. Toggle button ──────────────────────────────────
       `tl.reversed()` is true when the timeline has been
       reversed to the start. `progress() === 0` handles the
       very first click (before any play/reverse has happened). */
    toggle.addEventListener('click', () => {
       if (tl.reversed() || tl.progress() === 0) {
          burger.classList.add('header__burger--active')
          tl.play()
       } else {
          burger.classList.remove('header__burger--active')
          tl.reverse()
       }
    })
    
    /* ── 5. Hover effects ──────────────────────────────────
       When a link is hovered:
       - fade + blur every OTHER link (highlights the active one)
       - swap and fade in the preview image on the right
    
       IMPORTANT: we listen on the PARENT (nav__body), not on each
       link. If we listened on every link, moving the cursor from
       one link to another would fire mouseleave on the old link
       AND mouseenter on the new one — the two tweens would queue
       up and cause visible flicker/lag. A single listener on the
       parent gives us one clean state change per hover. */
    navBody.addEventListener('mouseover', (e) => {
       const link = e.target.closest('.nav__link')
       if (!link) return
    
       const hoveredIndex = link.dataset.index
    
       // Blur/dim all non-hovered links; reset the hovered one.
       // `overwrite: true` kills any in-flight tween on the same
       // target so we never stack conflicting animations.
       navLinks.forEach(other => {
          const isHovered = other.dataset.index === hoveredIndex
          gsap.to(other, {
             filter: isHovered ? 'blur(0px)' : 'blur(4px)',
             opacity: isHovered ? 1 : 0.6,
             duration: 0.3,
             overwrite: true,
          })
       })
    
       // Swap preview image and fade it in
       navImageEl.src = 'img/' + link.dataset.src
       gsap.to(navImage, { opacity: 1, duration: 0.35, overwrite: true })
    })
    
    /* Single mouseleave on the whole body — fires only when the
       cursor actually leaves the list, not when moving between
       its children. */
    navBody.addEventListener('mouseleave', () => {
       gsap.to(navLinks, {
          filter: 'blur(0px)',
          opacity: 1,
          duration: 0.3,
          overwrite: true,
       })
       gsap.to(navImage, { opacity: 0, duration: 0.35, overwrite: true })
    })
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-4" ref={raiz}>
      <main className="page">
            <h1 className="page__title">{s.titulo}</h1>
         </main>
      
         
         <header className="header">
            <div className="header__bar">
      
               
               <a href="#" className="header__logo">{s.acao}</a>
      
               
               <div className="header__toggle" id="js-toggle">
                  <div className="header__burger" id="js-burger"></div>
                  <div className="header__label">
                     
                     <p className="header__label-text header__label-text--menu"  id="js-label-menu">{s.texto}</p>
                     <p className="header__label-text header__label-text--close" id="js-label-close">{s.texto2}</p>
                  </div>
               </div>
      
               
               <div className="header__shop" id="js-shop">
                  <p className="header__shop-label">{s.texto3}</p>
                  <div className="header__cart">
                     
                     <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                           stroke="var(--acento)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                     </svg>
                     <p>{s.texto4}</p>
                  </div>
               </div>
            </div>
      
            
            <div className="nav" id="js-nav">
               <div className="nav__wrapper">
      
                  
                  <div className="nav__container">
      
                     
                     <div className="nav__body" id="js-nav-body">
                        
                        <a href="#" className="nav__link" data-index="0" data-src="home.png">{s.acao2}</a>
                        <a href="#" className="nav__link" data-index="1" data-src="shop.png">{s.acao3}</a>
                        <a href="#" className="nav__link" data-index="2" data-src="about_us.png">{s.acao4}</a>
                        <a href="#" className="nav__link" data-index="3" data-src="lookbook.png">{s.acao5}</a>
                        <a href="#" className="nav__link" data-index="4" data-src="contact.png">{s.acao6}</a>
                     </div>
      
                     
                     <div className="nav__footer">
                        <ul><li><span>{s.rotulo}</span> EAGLE</li></ul>
                        <ul><li><span>{s.rotulo2}</span> Google Fonts</li></ul>
                        <ul><li><span>{s.rotulo3}</span> Freepik, Envato</li></ul>
                        <ul>
                           <li>{s.item}</li>
                           <li>{s.item2}</li>
                        </ul>
                     </div>
                  </div>
      
                  
                  <div className="nav__image" id="js-nav-image">
                     <img src={s.imagem} alt="preview" id="js-nav-image-el" />
                  </div>
               </div>
            </div>
      
            
            <div className="header__background" id="js-background"></div>
      
         </header>
    </section>
  );
}