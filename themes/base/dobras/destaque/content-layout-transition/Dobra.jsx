"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/content-layout-transition
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
  //           document.addEventListener("DOMContentLoaded", () => {
  //               // --- utils.js ---
  //               const preloadImages = (selector = 'img') => {
  //                   return new Promise((resolve) => {
  //                       if (window.imagesLoaded) {
  //                           imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  //                       } else {
  //                           resolve();
  //                       }
  //                   });
  //               };
  //   
  //               // --- contentItem.js ---
  //               class ContentItem {
  //                   constructor(DOM_el) {
  //                       this.DOM = {
  //                           el: null,
  //                           title: null,
  //                           description: null,
  //                           texts: null
  //                       };
  //                       this.DOM.el = DOM_el;
  //                       this.DOM.title = this.DOM.el.querySelector('.content__item-title');
  //                       this.DOM.description = this.DOM.el.querySelector('.content__item-description');
  //                       this.DOM.texts = [...this.DOM.el.querySelectorAll('.oh > .oh__inner')];
  //                   }
  //               }
  //   
  //               // --- slideshow.js ---
  //               gsap.registerPlugin(Flip);
  //               gsap.registerPlugin(Observer);
  //   
  //               const body = document.body;
  //               let winsize = {width: window.innerWidth, height: window.innerHeight};
  //               
  //               window.addEventListener('resize', () => {
  //                   winsize = {width: window.innerWidth, height: window.innerHeight};
  //               });
  //   
  //               class Slideshow {
  //                   constructor(DOM_el) {
  //                       this.DOM = {
  //                           el: null,
  //                           items: null,
  //                           stackWrap: document.querySelector('.stack-wrap'),
  //                           slides: document.querySelector('.slides'),
  //                           content: document.querySelector('.content'),
  //                           contentItems: [...document.querySelectorAll('.content__item')],
  //                           mainTitleTexts: [...document.querySelectorAll('.title > .oh > .oh__inner')],
  //                           backCtrl: document.querySelector('.content__back'),
  //                           nav: document.querySelector('.content__nav-wrap'),
  //                           navArrows: {
  //                               prev: document.querySelector('.content__nav--prev'),
  //                               next: document.querySelector('.content__nav--next'),
  //                           }
  //                       };
  //                       
  //                       this.contentItems = [];
  //                       this.isOpen = false;
  //                       this.current = -1;
  //                       this.totalItems = 0;
  //                       this.gap = getComputedStyle(document.documentElement).getPropertyValue('--slide-gap');
  //   
  //                       this.DOM.el = DOM_el;
  //                       this.DOM.items = [...this.DOM.el.querySelectorAll('.stack__item:not(.stack__item--empty)')];
  //                       this.totalItems = this.DOM.items.length;
  //                       
  //                       this.DOM.contentItems.forEach(item => this.contentItems.push(new ContentItem(item)));
  //   
  //                       this.initEvents();
  //                   }
  //   
  //                   initEvents() {
  //                       this.DOM.items.forEach((item, position) => {
  //                           item.addEventListener('click', () => {
  //                               this.open(item);
  //                           });
  //                       });
  //   
  //                       this.DOM.backCtrl.addEventListener('click', () => {
  //                           this.close();
  //                       });
  //   
  //                       this.DOM.navArrows.next.addEventListener('click', () => {
  //                           this.navigate('next');
  //                       });
  //   
  //                       this.DOM.navArrows.prev.addEventListener('click', () => {
  //                           this.navigate('prev');
  //                       });
  //   
  //                       const scrollFn = () => {
  //                           if ( this.isOpen && !this.isAnimating ) {
  //                               this.close();
  //                               this.scrollObserver.disable();
  //                           }
  //                       }
  //                       
  //                       this.scrollObserver = Observer.create({
  //                           type: 'wheel,touch,pointer',
  //                           wheelSpeed: -1,
  //                           onDown: scrollFn,
  //                           onUp: scrollFn,
  //                           tolerance: 10,
  //                           preventDefault: true,
  //                       });
  //                       this.scrollObserver.disable();
  //                   }
  //   
  //                   open(stackItem) {
  //                       if ( this.isAnimating || this.isOpen ) {
  //                           return;
  //                       }
  //                       this.isAnimating = true;
  //                       this.current = this.DOM.items.indexOf(stackItem);
  //                       this.scrollObserver.enable();
  //   
  //                       const scrollY = window.scrollY;
  //                       body.classList.add('oh');
  //                       this.DOM.content.classList.add('content--open');
  //                       
  //                       this.contentItems[this.current].DOM.el.classList.add('content__item--current');
  //                       this.DOM.items[this.current].classList.add('stack__item--current');
  //   
  //                       const state = Flip.getState(this.DOM.items, {props: 'opacity'});
  //                       this.DOM.slides.appendChild(this.DOM.el);
  //   
  //                       const itemCenter = stackItem.offsetTop + stackItem.offsetHeight/2;
  //                       
  //                       document.documentElement.scrollTop = document.body.scrollTop = 0;
  //                       gsap.set(this.DOM.el, {
  //                           y: winsize.height/2 - itemCenter + scrollY
  //                       });		
  //                       document.documentElement.scrollTop = document.body.scrollTop = 0;
  //   
  //                       Flip.from(state, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           onComplete: () => {
  //                               this.isOpen = true;
  //                               this.isAnimating = false;
  //                           },
  //                           onStart: () => document.documentElement.scrollTop = document.body.scrollTop = scrollY,
  //                           absoluteOnLeave: true,
  //                       })
  //                       .to(this.DOM.mainTitleTexts, {
  //                           duration: .9,
  //                           ease: 'expo',
  //                           yPercent: -101
  //                       }, 0)
  //                       .to(this.contentItems[this.current].DOM.texts, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           startAt: {yPercent: 101},
  //                           yPercent: 0
  //                       }, 0)
  //                       .to(this.DOM.backCtrl, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           startAt: {opacity: 0},
  //                           opacity: 1
  //                       }, 0)
  //                       .to([this.DOM.navArrows.prev, this.DOM.navArrows.next], {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           startAt: {
  //                               opacity: 0,
  //                               y: pos => pos ? -150 : 150
  //                           },
  //                           y: 0,
  //                           opacity: pos => this.current === 0 && !pos || this.current === this.totalItems-1 && pos ? 0 : 1
  //                       }, 0);
  //                   }
  //   
  //                   close() {
  //                       if ( this.isAnimating || !this.isOpen ) {
  //                           return;
  //                       }
  //                       this.isAnimating = true;
  //                       this.scrollObserver.disable();
  //                       this.DOM.items[this.current].classList.remove('stack__item--current');
  //                       body.classList.remove('oh');
  //                       
  //                       const state = Flip.getState(this.DOM.items, {props: 'opacity'});
  //                       this.DOM.stackWrap.appendChild(this.DOM.el);
  //   
  //                       gsap.set(this.DOM.el, { y: 0 });
  //   
  //                       Flip.from(state, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           onComplete: () => {
  //                               this.DOM.content.classList.remove('content--open');
  //                               this.contentItems[this.current].DOM.el.classList.remove('content__item--current');
  //                               this.current = -1;
  //                               this.isOpen = false;
  //                               this.isAnimating = false;
  //                           },
  //                           absoluteOnLeave: true
  //                       })
  //                       .to(this.DOM.mainTitleTexts, {
  //                           duration: .9,
  //                           ease: 'expo',
  //                           startAt: {yPercent: 101},
  //                           yPercent: 0
  //                       }, 0)
  //                       .to(this.contentItems[this.current].DOM.texts, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           yPercent: -101
  //                       }, 0)
  //                       .to(this.DOM.backCtrl, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           opacity: 0
  //                       }, 0)
  //                       .to([this.DOM.navArrows.prev, this.DOM.navArrows.next], {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           y: pos => pos ? 100 : -100,
  //                           opacity: 0
  //                       }, 0);
  //                   }
  //   
  //                   navigate(direction) {
  //                       if ( this.isAnimating || (direction === 'next' && this.current === this.totalItems-1) || (direction === 'prev' && this.current === 0) ) return;
  //                       this.isAnimating = true;
  //   
  //                       const previousCurrent = this.current;
  //                       const currentItem = this.DOM.items[previousCurrent];
  //                       this.current = direction === 'next' ? this.current+1 : this.current-1
  //                       const upcomingItem = this.DOM.items[this.current];
  //                       
  //                       currentItem.classList.remove('stack__item--current');
  //                       upcomingItem.classList.add('stack__item--current');
  //   
  //                       gsap.set(this.DOM.navArrows.prev, {opacity: this.current > 0 ? 1 : 0});
  //                       gsap.set(this.DOM.navArrows.next, {opacity: this.current < this.totalItems-1 ? 1 : 0});
  //                       
  //                       gsap.timeline()
  //                       .to(this.DOM.el, {
  //                           duration: 1,
  //                           ease: 'expo',
  //                           y: direction === 'next' ? `-=${winsize.height/2 + winsize.height*.02}` : `+=${winsize.height/2 + winsize.height*.02}`,
  //                           onComplete: () => {
  //                               this.isAnimating = false;
  //                           }
  //                       })
  //                       .to(this.contentItems[previousCurrent].DOM.texts, {
  //                           duration: .2,
  //                           ease: 'power1',
  //                           yPercent: direction === 'next' ? 101 : -101,
  //                           onComplete: () => this.contentItems[previousCurrent].DOM.el.classList.remove('content__item--current')
  //                       }, 0)
  //                       .to(this.contentItems[this.current].DOM.texts, {
  //                           duration: .9,
  //                           ease: 'expo',
  //                           startAt: {yPercent: direction === 'next' ? -101 : 101},
  //                           onStart: () => this.contentItems[this.current].DOM.el.classList.add('content__item--current'),
  //                           yPercent: 0
  //                       }, .2);
  //                   }
  //               }
  //   
  //               // --- index.js ---
  //               const slideshow = new Slideshow(document.querySelector('.stack'));
  //               preloadImages('.stack__item').then(() => document.body.classList.remove('loading'));
  //           });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-content-layout-transition" ref={raiz}>
      <main>
              <div className="frame">
                  <div className="frame__title">
                      <h1 className="frame__title-main">{s.titulo}</h1>
                      <a aria-label="Back to the article" className="frame__title-back" href="#">
                          <span className="oh__inner">{s.rotulo}</span>
                          <svg width="18px" height="18px" viewBox="0 0 24 24"><path fillRule="evenodd" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"/></svg>
                      </a>
                      <br />
                      <a className="frame__title-prev" href="#">{s.acao}</a>
                  </div>
                  <div className="frame__logo">
                      <h2 className="frame__logo-title">{s.titulo2}</h2>
                      <span className="frame__logo-subtitle">{s.rotulo2}</span>
                  </div>
              </div>
              <div className="content">
                  <div className="content__item">
                      <h2 className="content__item-title">
                          <span className="oh"><span className="oh__inner">{s.rotulo3}</span></span><span className="oh"><span className="oh__inner">{s.rotulo4}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Osaka, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo5}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo6}</span></span><span className="oh"><span className="oh__inner">{s.rotulo7}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Kyoto, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo8}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo9}</span></span><span className="oh"><span className="oh__inner">{s.rotulo10}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Nagoya, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo11}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo12}</span></span><span className="oh"><span className="oh__inner">{s.rotulo13}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Tokyo, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo14}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo15}</span></span><span className="oh"><span className="oh__inner">{s.rotulo16}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Sapporo, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo17}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo18}</span></span><span className="oh"><span className="oh__inner">{s.rotulo19}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Sendai, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo20}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo21}</span></span><span className="oh"><span className="oh__inner">{s.rotulo22}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Kyoto, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo23}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo24}</span></span><span className="oh"><span className="oh__inner">{s.rotulo25}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Kobe, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo26}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo27}</span></span><span className="oh"><span className="oh__inner">{s.rotulo28}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Hiroshima, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo29}</span></p>
                      </div>
                  </div>
                  <div className="content__item">
                      <h2 className="content__item-title"><span className="oh"><span className="oh__inner">{s.rotulo30}</span></span><span className="oh"><span className="oh__inner">{s.rotulo31}</span></span></h2>
                      <div className="content__item-description">
                          <p className="oh"><strong className="oh__inner">Kumamoto, 1986</strong></p>
                          <p className="oh"><span className="oh__inner">{s.rotulo32}</span></p>
                      </div>
                  </div>
                  <button className="content__back unbutton" onClick={s.onClick}>
                      <svg aria-hidden="true" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.4939 20.5644C11.1821 20.8372 10.7083 20.8056 10.4356 20.4939L3.43557 12.4939C3.18814 12.2111 3.18814 11.7889 3.43557 11.5061L10.4356 3.50613C10.7083 3.1944 11.1822 3.16281 11.4939 3.43557C11.8056 3.70834 11.8372 4.18216 11.5644 4.49388L5.65283 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L5.65283 12.75L11.5644 19.5061C11.8372 19.8179 11.8056 20.2917 11.4939 20.5644Z"/>
                      </svg>
                      <span className="oh__inner">{s.rotulo33}</span>
                  </button>
                  <nav className="content__nav-wrap">
                      <button className="content__nav content__nav--prev unbutton" onClick={s.onClick}>
                          <svg width="100" height="267" viewBox="0 0 100 267"><path d="M49.894 2.766v262.979" strokeLinecap="square"/><path fill="none" d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"/></svg>
                      </button>
                      <button className="content__nav content__nav--next unbutton" onClick={s.onClick}>
                          <svg width="100" height="267" viewBox="0 0 100 267"><path d="M49.894 2.766v262.979" strokeLinecap="square"/><path fill="none" d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"/></svg>
                      </button>
                  </nav>
              </div>
              <div className="slides"></div>
              <div className="stack-wrap">
                  <div className="stack">
                      <div className="stack__item stack__item--empty"></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem2})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem3})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem4})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem5})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem6})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem7})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem8})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem9})`}}></div>
                      <div className="stack__item" style={{backgroundImage: `url(${s.imagem10})`}}></div>
                      <div className="stack__item stack__item--empty"></div>
                  </div>
              </div>
              <div className="title">
                  <h2 className="title__main oh"><span className="oh__inner">{s.rotulo34}</span></h2>
                  <span className="title__sub oh"><span className="oh__inner">{s.rotulo35}</span></span>
              </div>
          </main>
    </section>
  );
}