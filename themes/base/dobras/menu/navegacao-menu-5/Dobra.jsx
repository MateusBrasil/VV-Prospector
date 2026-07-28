"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-5
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
       SLIDING STAIRS MENU — script.js
    
       Sequence on open:
       1. Five black "stair" bars grow from 0 → 100% height
          with a staggered delay (bars enter from the RIGHT,
          i.e. the rightmost bar first).
       2. Solid black backdrop fades in to 0.5 opacity.
       3. Menu content fades in on top: close button slides
          in from the right, links flip down from rotateX(90),
          and the footer fades in.
    
       On close the whole thing plays in reverse, with the
       stairs leaving in the OPPOSITE order (left bars first).
    
       On link hover, a yellow overlay with a marquee of images
       slides in from above or below depending on where the
       cursor entered the element (cool detail from the original).
       ===================================================== */
    
    /* ── DOM references ─────────────────────────────────── */
    const burger     = raiz.current.querySelector('#js-burger')
    const close      = raiz.current.querySelector('#js-close')
    const stairs     = raiz.current.querySelector('#js-stairs')
    const stairsBars = raiz.current.querySelectorAll('.stairs__bar')
    const stairsBg   = raiz.current.querySelector('#js-stairs-bg')
    const menu       = raiz.current.querySelector('#js-menu')
    const menuItems  = raiz.current.querySelectorAll('.menu__item')
    const menuLinks  = raiz.current.querySelectorAll('.menu__link')
    const footer     = raiz.current.querySelector('.menu__footer')
    
    /* Easing used throughout — matches the original cubic-bezier(0.33, 1, 0.68, 1) */
    const ease = 'power2.out'
    
    /* ── OPEN MENU ─────────────────────────────────────────
       Built with GSAP Timeline. We rebuild it each click
       (instead of a paused shared timeline) because the open
       and close sequences have different stagger directions
       and durations — easier to read this way. */
    function openMenu() {
       const tl = gsap.timeline()
    
       /* 1. Stair bars grow. Stagger.from: "end" makes the RIGHTMOST
             bar animate first — matches the original `custom={4 - index}` */
       tl.fromTo(stairsBars,
          { height: '0%' },
          {
             height: '100%',
             duration: 0.5,
             stagger: { each: 0.05, from: 'end' },
             ease,
          },
          0,
       )
    
       /* 2. Backdrop fades in (slightly delayed so the bars lead) */
       tl.to(stairsBg, { opacity: 0.5, duration: 0.5, ease }, 0.2)
    
       /* 3. Menu container fades in */
       tl.to(menu, { opacity: 1, duration: 0.5, ease }, 0.4)
    
       /* 4. Close button slides in from x: 150 */
       tl.fromTo(close,
          { x: 150 },
          { x: 0, duration: 0.5, ease },
          0.4,
       )
    
       /* 5. Each link flips down from rotateX(90), staggered */
       tl.fromTo(menuLinks,
          { rotateX: 90, opacity: 0 },
          {
             rotateX: 0,
             opacity: 1,
             duration: 0.5,
             stagger: 0.05,
             ease,
          },
          0.6,
       )
    
       /* 6. Footer fades in last */
       tl.fromTo(footer,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease },
          0.9,
       )
    
       /* Enable pointer events once the menu is fully open */
       tl.call(() => { menu.style.pointerEvents = 'all' })
    }
    
    /* ── CLOSE MENU ────────────────────────────────────────
       Reverses the open sequence. Note the stair bars leave
       from the LEFT side first (stagger.from: "start") —
       feels more natural than the open direction. */
    function closeMenu() {
       menu.style.pointerEvents = 'none'
    
       const tl = gsap.timeline()
    
       /* 1. Fade menu content out */
       tl.to(menu,   { opacity: 0, duration: 0.5, ease }, 0)
       tl.to(footer, { opacity: 0, duration: 0.5, ease }, 0)
    
       /* 2. Backdrop fades out */
       tl.to(stairsBg, { opacity: 0, duration: 0.5, ease }, 0.1)
    
       /* 3. Stair bars collapse (leftmost first this time) */
       tl.to(stairsBars,
          {
             height: '0%',
             duration: 0.3,
             stagger: { each: 0.05, from: 'start' },
             ease,
          },
          0.2,
       )
    }
    
    /* ── Toggle listeners ──────────────────────────────── */
    burger.addEventListener('click', openMenu)
    close.addEventListener('click', closeMenu)
    
    /* ── LINK HOVER — sliding overlay from the correct side ─
       When the cursor enters a link, we compare its Y position
       to the item's vertical midpoint:
       - Entered from ABOVE → overlay slides DOWN from the top
       - Entered from BELOW → overlay slides UP from the bottom
       Same logic on leave, so the overlay exits in the
       direction the cursor actually leaves. */
    menuItems.forEach(item => {
       const outer = item.querySelector('.menu__outer')
       const inner = item.querySelector('.menu__inner')
    
       item.addEventListener('mouseenter', (e) => {
          const bounds = item.getBoundingClientRect()
          const enteredFromAbove = e.clientY < bounds.top + bounds.height / 2
    
          /* Position the layers OUTSIDE the item, on the side we entered from */
          if (enteredFromAbove) {
             gsap.set(outer, { top: '-100%' })
             gsap.set(inner, { top:  '100%' })
          } else {
             gsap.set(outer, { top:  '100%' })
             gsap.set(inner, { top: '-100%' })
          }
    
          /* Slide both layers into place — they meet in the middle */
          gsap.to(outer, { top: '0%', duration: 0.3, overwrite: true })
          gsap.to(inner, { top: '0%', duration: 0.3, overwrite: true })
       })
    
       item.addEventListener('mouseleave', (e) => {
          const bounds = item.getBoundingClientRect()
          const leavingFromAbove = e.clientY < bounds.top + bounds.height / 2
    
          /* Slide OUT in the direction the cursor leaves */
          if (leavingFromAbove) {
             gsap.to(outer, { top: '-100%', duration: 0.3, overwrite: true })
             gsap.to(inner, { top:  '100%', duration: 0.3, overwrite: true })
          } else {
             gsap.to(outer, { top:  '100%', duration: 0.3, overwrite: true })
             gsap.to(inner, { top: '-100%', duration: 0.3, overwrite: true })
          }
       })
    })
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-5" ref={raiz}>
      <main className="page">
            <h1 className="page__title">{s.titulo}</h1>
         </main>
      
         
         <div className="burger" id="js-burger">
            
            <div className="burger__bg"></div>
      
            
            <svg className="burger__icon" width="56" height="7" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="56" y1="0.5" x2="4.37114e-08" y2="0.500005" stroke="white" />
               <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
            </svg>
      
            <p className="burger__label">{s.texto}</p>
         </div>
      
         
         <div className="stairs" id="js-stairs">
            <div className="stairs__bar"></div>
            <div className="stairs__bar"></div>
            <div className="stairs__bar"></div>
            <div className="stairs__bar"></div>
            <div className="stairs__bar"></div>
      
            
            <div className="stairs__bg" id="js-stairs-bg"></div>
         </div>
      
         
         <div className="menu" id="js-menu">
      
            
            <div className="menu__header">
               <svg className="menu__close" id="js-close" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L67 67" stroke="white" />
                  <path d="M66.5 1L0.999997 66.5" stroke="white" />
               </svg>
            </div>
      
            
            <div className="menu__body">
      
               
               <div className="menu__item" data-images="projects1.jpg,projects2.jpg" data-desc="To See Everything">
                  <a href="#" className="menu__link">{s.acao}</a>
                  
                  <div className="menu__outer">
                     <div className="menu__inner">
                        
                        <div className="menu__container">
                           <div className="menu__img-container"><img src={s.imagem} alt="" /></div>
                           <p>{s.texto2}</p>
                           <div className="menu__img-container"><img src={s.imagem2} alt="" /></div>
                           <p>{s.texto3}</p>
                        </div>
                        <div className="menu__container">
                           <div className="menu__img-container"><img src={s.imagem3} alt="" /></div>
                           <p>{s.texto4}</p>
                           <div className="menu__img-container"><img src={s.imagem4} alt="" /></div>
                           <p>{s.texto5}</p>
                        </div>
                     </div>
                  </div>
               </div>
      
               
               <div className="menu__item" data-images="agence1.jpg,agence2.jpg" data-desc="To Learn Everything">
                  <a href="#" className="menu__link">{s.acao2}</a>
                  <div className="menu__outer">
                     <div className="menu__inner">
                        <div className="menu__container">
                           <div className="menu__img-container"><img src={s.imagem5} alt="" /></div>
                           <p>{s.texto6}</p>
                           <div className="menu__img-container"><img src={s.imagem6} alt="" /></div>
                           <p>{s.texto7}</p>
                        </div>
                        <div className="menu__container">
                           <div className="menu__img-container"><img src={s.imagem7} alt="" /></div>
                           <p>{s.texto8}</p>
                           <div className="menu__img-container"><img src={s.imagem8} alt="" /></div>
                           <p>{s.texto9}</p>
                        </div>
                     </div>
                  </div>
               </div>
      
               
               <div className="menu__item" data-images="contact1.jpg,contact2.jpg" data-desc="To Send a FAX">
                  <a href="#" className="menu__link">{s.acao3}</a>
                  <div className="menu__outer">
                     <div className="menu__inner">
                        <div className="menu__container">
                           <div className="menu__img-container"><img src={s.imagem9} alt="" /></div>
                           <p>{s.texto10}</p>
                           <div className="menu__img-container"><img src={s.imagem10} alt="" /></div>
                           <p>{s.texto11}</p>
                        </div>
                        <div className="menu__container">
                           <div className="menu__img-container"><img src={s.imagem11} alt="" /></div>
                           <p>{s.texto12}</p>
                           <div className="menu__img-container"><img src={s.imagem12} alt="" /></div>
                           <p>{s.texto13}</p>
                        </div>
                     </div>
                  </div>
               </div>
      
            </div>
      
            
            <div className="menu__footer">
               <a>{s.acao4}</a>
               <a>{s.acao5}</a>
               <a>{s.acao6}</a>
               <a>{s.acao7}</a>
            </div>
      
         </div>
    </section>
  );
}