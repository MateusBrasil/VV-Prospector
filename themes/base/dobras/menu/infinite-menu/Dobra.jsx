"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/infinite-menu
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
  //   
  //       // Remove loading class when the window finishes loading
  //       window.addEventListener('load', () => {
  //         document.body.classList.remove('loading');
  //       });
  //   
  //       document.addEventListener('DOMContentLoaded', () => {
  //         // DOM Elements
  //         const frame = document.querySelector('.frame');
  //         const overlayPath = document.querySelector('.overlay__path');
  //         const menuWrap = document.querySelector('.menu-wrap');
  //         const menuItems = menuWrap.querySelectorAll('.menu__item');
  //         const btnMenu = document.querySelector('button.button-menu');
  //         const btnClose = menuWrap.querySelector('.button-close');
  //         const titleMain = document.querySelector('.content__title-main');
  //         const titleSub = document.querySelector('.content__title-sub');
  //   
  //         let isAnimating = false;
  //   
  //         // Open Menu Event
  //         btnMenu.addEventListener('click', () => {
  //           if (isAnimating) return;
  //           isAnimating = true;
  //   
  //           gsap.timeline({ onComplete: () => isAnimating = false })
  //             // Set initial overlay path
  //             .set(overlayPath, { attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' } })
  //             
  //             // Animate overlay up
  //             .to(overlayPath, { duration: 0.8, ease: 'power4.in', attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' } }, 0)
  //             
  //             // Flatten overlay at the top
  //             .to(overlayPath, { duration: 0.3, ease: 'power2', attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }, onComplete: () => {
  //                 // Add classes to show menu wrapper
  //                 frame.classList.add('frame--menu-open');
  //                 menuWrap.classList.add('menu-wrap--open');
  //             }})
  //             
  //             // Animate out the main title
  //             .to([titleMain, titleSub], { duration: 0.8, ease: 'power3.in', y: -200, stagger: 0.05 }, 0.2)
  //             
  //             // Prepare menu items
  //             .set(menuItems, { opacity: 0 })
  //             
  //             // Reset overlay path to slide down and reveal menu
  //             .set(overlayPath, { attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' } })
  //             
  //             // Animate overlay moving down
  //             .to(overlayPath, { duration: 0.3, ease: 'power2.in', attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' } })
  //             
  //             // Flatten overlay at the bottom
  //             .to(overlayPath, { duration: 0.8, ease: 'power4', attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' } })
  //             
  //             // Animate in the menu items
  //             .to(menuItems, { duration: 1.1, ease: 'power4', startAt: { y: 150 }, y: 0, opacity: 1, stagger: 0.05 }, '>-=1.1');
  //         });
  //   
  //         // Close Menu Event
  //         btnClose.addEventListener('click', () => {
  //           if (isAnimating) return;
  //           isAnimating = true;
  //   
  //           gsap.timeline({ onComplete: () => isAnimating = false })
  //             // Set initial overlay path
  //             .set(overlayPath, { attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' } })
  //             
  //             // Animate overlay up to cover screen
  //             .to(overlayPath, { duration: 0.8, ease: 'power4.in', attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' } }, 0)
  //             
  //             // Flatten overlay at the top
  //             .to(overlayPath, { duration: 0.3, ease: 'power2', attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }, onComplete: () => {
  //                 // Remove classes to hide menu wrapper
  //                 frame.classList.remove('frame--menu-open');
  //                 menuWrap.classList.remove('menu-wrap--open');
  //             }})
  //             
  //             // Reset overlay path to slide down and reveal main content
  //             .set(overlayPath, { attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' } })
  //             
  //             // Animate overlay moving down
  //             .to(overlayPath, { duration: 0.3, ease: 'power2.in', attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' } })
  //             
  //             // Flatten overlay at the bottom
  //             .to(overlayPath, { duration: 0.8, ease: 'power4', attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' } })
  //             
  //             // Animate in the main title
  //             .to([titleMain, titleSub], { duration: 1.1, ease: 'power4', y: 0, stagger: -0.05 }, '>-=1.1')
  //             
  //             // Animate out the menu items
  //             .to(menuItems, { duration: 0.8, ease: 'power2.in', y: 100, opacity: 0, stagger: -0.05 }, 0);
  //         });
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-infinite-menu" ref={raiz}>
      <main>
          <div className="frame">
            <div className="frame__button">
              <button className="button-menu unbutton" aria-label="Open menu" onClick={s.onClick}>
                <svg width="19" height="12" viewBox="0 0 19 12">
                  <path d="m.742 3.26.485.874c.043-.024.13-.07.26-.136.22-.11.476-.233.765-.361A22.92 22.92 0 0 1 4.997 2.62c4.476-1.34 8.75-1.219 12.241 1.1.18.12.357.245.531.376l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008.375 9.443.246 4.71 1.663c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z"></path>
                  <path d="m.742 6.748.485.874c.043-.023.13-.07.26-.135.22-.111.476-.233.765-.362A22.92 22.92 0 0 1 4.997 6.11c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.245.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 3.864 9.443 3.735 4.71 5.152c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z"></path>
                  <path d="m.742 10.237.485.874c.043-.024.13-.07.26-.136.22-.11.476-.232.765-.36a22.92 22.92 0 0 1 2.745-1.016c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.244.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 7.353 9.443 7.224 4.71 8.64c-1.037.31-2 .674-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z"></path>
                </svg>
              </button>
            </div>
            <h1 className="frame__title">{s.titulo}</h1>
            <div className="frame__heading">
              <span className="frame__heading-main">{s.rotulo}</span>
              <span className="frame__heading-sub">{s.rotulo2}</span>
            </div>
          </div>
      
          <div className="content">
            <h2 className="content__title">
              <span className="content__title-main">{s.rotulo3}</span>
              <span className="content__title-sub">{s.rotulo4}</span>
            </h2>
            <button className="button-enter unbutton" disabled={true} aria-label="Enter the site" onClick={s.onClick}>
              <svg width="64" height="51" xmlns="http://www.w3.org/2000/svg">
                <g stroke="var(--base-600)" fill="none" fillRule="evenodd">
                  <path strokeLinecap="square" d="m55.766 32.528-5.125-1.865M52.677 36.938l3.1-4.618"></path>
                  <path d="M8.773 10.587S-.693 49.485 56.13 32.3"></path>
                </g>
              </svg>
            </button>
          </div>
      
          <div className="menu-wrap">
            <div className="tiles">
              
              <div className="tiles__line">
                <div className="tiles__line-img tiles__line-img--large" style={{backgroundImage: `url(${s.imagem})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem2})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem3})`}}></div>
                <div className="tiles__line-img tiles__line-img--large" style={{backgroundImage: `url(${s.imagem4})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem5})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem6})`}}></div>
              </div>
              <div className="tiles__line">
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem8})`}}></div>
                <div className="tiles__line-img tiles__line-img--large" style={{backgroundImage: `url(${s.imagem9})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem10})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem11})`}}></div>
                <div className="tiles__line-img tiles__line-img--large" style={{backgroundImage: `url(${s.imagem12})`}}></div>
              </div>
              <div className="tiles__line">
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem13})`}}></div>
                <div className="tiles__line-img tiles__line-img--large" style={{backgroundImage: `url(${s.imagem14})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem15})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem16})`}}></div>
                <div className="tiles__line-img tiles__line-img--large" style={{backgroundImage: `url(${s.imagem17})`}}></div>
                <div className="tiles__line-img" style={{backgroundImage: `url(${s.imagem18})`}}></div>
              </div>
            </div>
      
            <nav className="menu">
              <a className="menu__item">
                <span className="menu__item-tiny">{s.rotulo5}</span>
                <span className="menu__item-text">{s.rotulo6}</span>
              </a>
              <a className="menu__item">
                <span className="menu__item-text">{s.rotulo7}</span>
                <span className="menu__item-tiny">{s.rotulo8}</span>
              </a>
              <a className="menu__item">
                <span className="menu__item-tiny">{s.rotulo9}</span>
                <span className="menu__item-text">{s.rotulo10}</span>
              </a>
              <a className="menu__item">
                <span className="menu__item-text">{s.rotulo11}</span>
                <span className="menu__item-tiny">{s.rotulo12}</span>
              </a>
            </nav>
      
            <button className="button-close unbutton" onClick={s.onClick}>
              <svg width="25" height="16" viewBox="0 0 25 16">
                <path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7"></path>
                <path d="M23.753 5.403s-1.87 16.88-22.03 1.785"></path>
              </svg>
            </button>
          </div>
      
          <svg className="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="overlay__path" vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z"></path>
          </svg>
        </main>
    </section>
  );
}