"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/menu-to-full-grid-layout
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
  //           // Utilities
  //           const lerp = (a, b, n) => (1 - n) * a + n * b;
  //           
  //           const getMousePos = e => {
  //               let posx = 0, posy = 0;
  //               if (!e) e = window.event;
  //               if (e.pageX || e.pageY) {
  //                   posx = e.pageX;
  //                   posy = e.pageY;
  //               } else if (e.clientX || e.clientY) {
  //                   posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  //                   posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  //               }
  //               return { x: posx, y: posy };
  //           };
  //   
  //           const calcWinsize = () => ({ width: window.innerWidth, height: window.innerHeight });
  //   
  //           const preloadImages = (selector = 'img') => {
  //               return new Promise((resolve) => {
  //                   imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  //               });
  //           };
  //   
  //           let winsize = calcWinsize();
  //           window.addEventListener('resize', () => winsize = calcWinsize());
  //   
  //           let mouse = { x: 0, y: 0 };
  //           window.addEventListener('mousemove', ev => mouse = getMousePos(ev));
  //   
  //           // Cursor Tracker
  //           class Cursor {
  //               constructor(el) {
  //                   this.DOM = { el: el };
  //                   this.DOM.el.style.opacity = 0;
  //                   this.bounds = this.DOM.el.getBoundingClientRect();
  //                   this.renderedStyles = {
  //                       tx: { previous: 0, current: 0, amt: 0.2 },
  //                       ty: { previous: 0, current: 0, amt: 0.2 },
  //                       scale: { previous: 1, current: 1, amt: 0.15 }
  //                   };
  //   
  //                   this.onMouseMoveEv = () => {
  //                       this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
  //                       this.renderedStyles.ty.previous = this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2;
  //                       gsap.to(this.DOM.el, { duration: 0.9, ease: 'power3.out', opacity: 1 });
  //                       requestAnimationFrame(() => this.render());
  //                       window.removeEventListener('mousemove', this.onMouseMoveEv);
  //                   };
  //                   window.addEventListener('mousemove', this.onMouseMoveEv);
  //               }
  //               enter() {
  //                   this.renderedStyles['scale'].current = 2.5;
  //               }
  //               leave() {
  //                   this.renderedStyles['scale'].current = 1;
  //               }
  //               render() {
  //                   this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
  //                   this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;
  //   
  //                   for (const key in this.renderedStyles) {
  //                       this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //                   }
  //   
  //                   this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
  //                   requestAnimationFrame(() => this.render());
  //               }
  //           }
  //   
  //           // Content Page Reference Class
  //           class ContentPage {
  //               constructor(el) {
  //                   this.DOM = { el: el };
  //                   this.DOM.backCtrl = this.DOM.el.querySelector('.content__back');
  //                   this.DOM.title = this.DOM.el.querySelector('.content__title');
  //                   this.DOM.titleInner = this.DOM.title.querySelector('span');
  //                   this.DOM.intro = this.DOM.el.querySelector('.content__intro');
  //                   this.DOM.introInner = this.DOM.intro.querySelector('span');
  //                   this.DOM.date = this.DOM.el.querySelector('.content__date');
  //                   this.DOM.dateInner = this.DOM.date.querySelector('span');
  //                   this.DOM.gallery = this.DOM.el.querySelector('.gallery');
  //                   this.DOM.galleryItems = this.DOM.gallery.querySelectorAll('.gallery__figure');
  //                   this.bgcolor = this.DOM.el.dataset.bgcolor;
  //               }
  //           }
  //   
  //           // Menu Item Logic
  //           class MenuItem {
  //               constructor(el, galleryEl, contentEl) {
  //                   this.DOM = { el: el, gallery: galleryEl, content: contentEl };
  //                   this.DOM.title = this.DOM.el.querySelector('.menu__item-title');
  //                   this.DOM.deco = this.DOM.el.querySelector('.menu__item-deco');
  //                   this.DOM.cta = this.DOM.el.querySelector('.menu__item-cta');
  //                   this.DOM.ctaInner = this.DOM.cta.querySelector('span');
  //                   this.DOM.galleryItems = [...this.DOM.gallery.querySelectorAll('.bg-gallery__item')];
  //                   this.contentPage = new ContentPage(this.DOM.content);
  //                   this.isCurrent = false;
  //               }
  //               highlight() {
  //                   this.toggleCurrent();
  //                   gsap.set([this.DOM.deco, this.DOM.cta], { opacity: 1 });
  //                   gsap.to(this.DOM.galleryItems, {
  //                       duration: 1,
  //                       ease: 'expo.out',
  //                       startAt: { scale: 0.01, rotation: () => gsap.utils.random(-20, 20) },
  //                       scale: 1,
  //                       opacity: +this.isCurrent,
  //                       rotation: 0,
  //                       stagger: 0.05
  //                   });
  //               }
  //               toggleCurrent() {
  //                   this.DOM.el.classList[this.isCurrent ? 'remove' : 'add']('menu__item--selected');
  //                   this.isCurrent = !this.isCurrent;
  //               }
  //           }
  //   
  //           // Main Controller
  //           class MenuController {
  //               constructor(el) {
  //                   this.DOM = { el: el };
  //                   this.DOM.galleries = [...document.querySelectorAll('.bg-gallery-wrap > .bg-gallery')];
  //                   this.DOM.pagePreview = document.querySelector('.page--preview');
  //                   this.DOM.content = [...this.DOM.pagePreview.querySelectorAll('.content')];
  //                   this.DOM.headline = {
  //                       deco: this.DOM.el.querySelector('.menu__headline > .menu__headline-deco'),
  //                       text: this.DOM.el.querySelector('.menu__headline > .menu__headline-text > span')
  //                   };
  //                   this.menuItems = [];
  //                   [...this.DOM.el.querySelectorAll('.menu__item')].forEach((item, pos) => {
  //                       this.menuItems.push(new MenuItem(item, this.DOM.galleries[pos], this.DOM.content[pos]));
  //                   });
  //                   this.init();
  //               }
  //               init() {
  //                   this.current = 0;
  //                   this.menuItems[this.current].highlight();
  //                   this.initEvents();
  //               }
  //               initEvents() {
  //                   for (const [pos, item] of this.menuItems.entries()) {
  //                       item.DOM.el.addEventListener('click', ev => {
  //                           ev.preventDefault();
  //                           if (pos === this.current || this.isAnimating) return;
  //                           const direction = this.current < pos ? 'up' : 'down';
  //                           this.toggleMenuItems(item, direction);
  //                           this.current = pos;
  //                       });
  //                       item.DOM.cta.addEventListener('click', ev => {
  //                           if (this.isAnimating) return;
  //                           this.showContent(item);
  //                       });
  //                       item.contentPage.DOM.backCtrl.addEventListener('click', ev => {
  //                           ev.preventDefault();
  //                           this.showMenu(item);
  //                       });
  //                   }
  //               }
  //               toggleMenuItems(upcomingItem, direction = 'up') {
  //                   const currentItem = this.menuItems[this.current];
  //                   const dir = direction === 'up' ? 1 : -1;
  //                   currentItem.toggleCurrent();
  //                   upcomingItem.toggleCurrent();
  //   
  //                   gsap.timeline({
  //                       defaults: { duration: 1, ease: 'expo.inOut' },
  //                       onStart: () => this.isAnimating = true,
  //                       onComplete: () => this.isAnimating = false
  //                   })
  //                   .to(upcomingItem.DOM.title, { ease: 'expo.in', duration: 0.5, y: dir * -100 + '%' }, 0)
  //                   .to(upcomingItem.DOM.title, { ease: 'expo.out', duration: 0.8, startAt: { y: dir * 100 + '%' }, y: '0%' }, 0.5)
  //                   .to(currentItem.DOM.deco, { scaleY: 0, opacity: 0 }, 0)
  //                   .to(currentItem.DOM.cta, { y: '100%', opacity: 0 }, 0)
  //                   .to(currentItem.DOM.galleryItems, { y: dir * -winsize.height * 1.2, stagger: dir * 0.05, rotation: () => gsap.utils.random(-30, 30) }, 0)
  //                   .addLabel('upcomingImages', 0.1)
  //                   .to(upcomingItem.DOM.deco, { startAt: { scaleY: 0 }, scaleY: 1, opacity: 1 }, 'upcomingImages')
  //                   .to(upcomingItem.DOM.cta, { startAt: { y: dir * 100 + '%' }, y: '0%', opacity: 1 }, 'upcomingImages')
  //                   .to(upcomingItem.DOM.galleryItems, { startAt: { y: dir * winsize.height * 1.2, rotation: () => gsap.utils.random(-30, 30) }, y: 0, opacity: 1, rotation: 0, stagger: dir * 0.05 }, 'upcomingImages');
  //               }
  //               showContent(menuItem) {
  //                   const timelineDefaults = { duration: 0.8, ease: 'expo.inOut' };
  //                   gsap.timeline({
  //                       defaults: timelineDefaults,
  //                       onStart: () => this.isAnimating = true,
  //                       onComplete: () => this.isAnimating = false
  //                   })
  //                   .to(menuItem.DOM.deco, { scaleY: 0 })
  //                   .to(menuItem.DOM.ctaInner, { y: '100%' }, 0)
  //                   .to(menuItem.DOM.galleryItems, { y: -winsize.height * 1.2, opacity: 0, stagger: 0.05, rotation: () => gsap.utils.random(-30, 30) }, 0)
  //                   .to(this.menuItems.map(item => item.DOM.title), { y: '100%', stagger: { each: 0.03, from: 'end' } }, 0)
  //                   .to(this.DOM.headline.deco, { scaleX: 0 }, 0)
  //                   .to(this.DOM.headline.text, { y: '100%' }, 0)
  //                   .addLabel('showPageContent', timelineDefaults.duration * .1)
  //                   .to(menuItem.contentPage.DOM.backCtrl, { startAt: { x: '50%' }, x: '0%', opacity: 1 }, 'showPageContent')
  //                   .to([menuItem.contentPage.DOM.titleInner, menuItem.contentPage.DOM.introInner, menuItem.contentPage.DOM.dateInner], {
  //                       startAt: { y: '-100%' },
  //                       onStart: () => {
  //                           gsap.set([menuItem.contentPage.DOM.title, menuItem.contentPage.DOM.intro, menuItem.contentPage.DOM.date], { opacity: 1 });
  //                       },
  //                       y: '0%', stagger: -0.06
  //                   }, 'showPageContent')
  //                   .to(menuItem.contentPage.DOM.galleryItems, {
  //                       startAt: { y: '100%', rotation: () => gsap.utils.random(-20, 20) },
  //                       y: '0%', rotation: 0, opacity: 1, stagger: 0.08
  //                   }, 'showPageContent')
  //                   .to(document.body, { backgroundColor: menuItem.contentPage.bgcolor }, 0);
  //   
  //                   this.DOM.pagePreview.classList.remove('page--preview');
  //                   menuItem.DOM.content.classList.add('content--current');
  //               }
  //               showMenu(menuItem) {
  //                   const timelineDefaults = { duration: 0.8, ease: 'expo.inOut' };
  //                   // Scroll page back to top smoothly
  //                   window.scrollTo({ top: 0, behavior: 'smooth' });
  //                   
  //                   setTimeout(() => {
  //                       gsap.timeline({
  //                           defaults: timelineDefaults,
  //                           onStart: () => this.isAnimating = true,
  //                           onComplete: () => {
  //                               this.DOM.pagePreview.classList.add('page--preview');
  //                               menuItem.DOM.content.classList.remove('content--current');
  //                               this.isAnimating = false;
  //                           }
  //                       })
  //                       .to(document.body, { backgroundColor: '#EAE4DE' }, 0)
  //                       .to(menuItem.contentPage.DOM.galleryItems, { y: '100%', rotation: () => gsap.utils.random(-20, 20), opacity: 0, stagger: 0.08 }, 0)
  //                       .to([menuItem.contentPage.DOM.titleInner, menuItem.contentPage.DOM.introInner, menuItem.contentPage.DOM.dateInner], {
  //                           onComplete: () => {
  //                               gsap.set([menuItem.contentPage.DOM.title, menuItem.contentPage.DOM.intro, menuItem.contentPage.DOM.date], { opacity: 0 });
  //                           },
  //                           y: '-100%', stagger: 0.06
  //                       }, 0)
  //                       .to(menuItem.contentPage.DOM.backCtrl, { x: '50%', opacity: 0 }, 0)
  //                       .addLabel('showMenuItems', timelineDefaults.duration * .1)
  //                       .to(this.DOM.headline.text, { y: '0%' }, 'showMenuItems')
  //                       .to(this.DOM.headline.deco, { scaleX: 1 }, 'showMenuItems')
  //                       .to(this.menuItems.map(item => item.DOM.title), { y: '0%', stagger: { each: 0.03, from: 'start' } }, 'showMenuItems')
  //                       .to(menuItem.DOM.galleryItems, { startAt: { rotation: () => gsap.utils.random(-30, 30) }, y: 0, stagger: -0.05, rotation: 0, opacity: 1 }, 'showMenuItems')
  //                       .to(menuItem.DOM.ctaInner, { y: '0%' }, 'showMenuItems')
  //                       .to(menuItem.DOM.deco, { scaleY: 1 }, 'showMenuItems');
  //                   }, 300);
  //               }
  //           }
  //   
  //           // Initialize App
  //           // Added a race timeout to ensure the app doesn't hang if an image takes too long to load
  //           Promise.race([
  //               Promise.all([
  //                   preloadImages('.bg-gallery__item'),
  //                   preloadImages('.gallery__figure-img')
  //               ]),
  //               new Promise(resolve => setTimeout(resolve, 3000))
  //           ]).then(() => {
  //               document.body.classList.remove('loading');
  //               
  //               const cursor = new Cursor(document.querySelector('.cursor'));
  //               new MenuController(document.querySelector('.menu'));
  //               
  //               [...document.querySelectorAll('a')].forEach(link => {
  //                   link.addEventListener('mouseenter', () => cursor.enter());
  //                   link.addEventListener('mouseleave', () => cursor.leave());
  //               });
  //           });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-menu-to-full-grid-layout" ref={raiz}>
      <svg className="hidden">
              <symbol id="icon-arrow" viewBox="0 0 511.996 511.996">
                  <title>Arrow left</title>
                  <path d="M462.51 220.392H172.707l67.017-68.342a7.133 7.133 0 00.014-9.956l-39.544-40.612a7.13 7.13 0 00-10.204 0L44.383 251.028a7.128 7.128 0 000 9.941L189.99 410.514c1.338 1.375 3.176 2.15 5.099 2.15s3.76-.775 5.105-2.15l39.544-40.612a7.126 7.126 0 00-.014-9.956l-67.017-68.342H462.51c3.93 0 7.12-3.19 7.12-7.12v-56.97a7.124 7.124 0 00-7.12-7.122z"></path>
              </symbol>
          </svg>
          <main>
              <div className="frame">
                  <h1 className="frame__title">{s.titulo}</h1>
              </div>
              <div className="bg-gallery-wrap">
                  <div className="bg-gallery bg-gallery--1">
                      <img className="bg-gallery__item" src={s.imagem} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem2} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem3} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem4} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem5} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem6} alt="Some image" />
                  </div>
                  <div className="bg-gallery bg-gallery--2">
                      <img className="bg-gallery__item" src={s.imagem7} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem8} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem9} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem10} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem11} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem12} alt="Some image" />
                  </div>
                  <div className="bg-gallery bg-gallery--3">
                      <img className="bg-gallery__item" src={s.imagem13} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem14} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem15} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem16} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem17} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem18} alt="Some image" />
                  </div>
                  <div className="bg-gallery bg-gallery--4">
                      <img className="bg-gallery__item" src={s.imagem19} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem20} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem21} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem22} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem23} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem24} alt="Some image" />
                  </div>
                  <div className="bg-gallery bg-gallery--5">
                      <img className="bg-gallery__item" src={s.imagem25} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem26} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem27} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem28} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem29} alt="Some image" />
                      <img className="bg-gallery__item" src={s.imagem30} alt="Some image" />
                  </div>
              </div>
              <nav className="menu" id="menu">
                  <div className="menu__headline">
                      <span className="menu__headline-deco"></span>
                      <span className="menu__headline-text"><span>{s.rotulo}</span></span>
                  </div>
                  <a className="menu__item menu__item--selected" href="#content-1">
                      <span className="menu__item-title">{s.rotulo2}</span>
                      <span className="menu__item-deco">|</span>
                      <span className="menu__item-cta"><span>{s.rotulo3}</span></span>
                  </a>
                  <a className="menu__item" href="#content-2">
                      <span className="menu__item-title">{s.rotulo4}</span>
                      <span className="menu__item-deco">|</span>
                      <span className="menu__item-cta"><span>{s.rotulo5}</span></span>
                  </a>
                  <a className="menu__item" href="#content-3">
                      <span className="menu__item-title">{s.rotulo6}</span>
                      <span className="menu__item-deco">|</span>
                      <span className="menu__item-cta"><span>{s.rotulo7}</span></span>
                  </a>
                  <a className="menu__item" href="#content-4">
                      <span className="menu__item-title">{s.rotulo8}</span>
                      <span className="menu__item-deco">|</span>
                      <span className="menu__item-cta"><span>{s.rotulo9}</span></span>
                  </a>
                  <a className="menu__item" href="#content-5">
                      <span className="menu__item-title">{s.rotulo10}</span>
                      <span className="menu__item-deco">|</span>
                      <span className="menu__item-cta"><span>{s.rotulo11}</span></span>
                  </a>
              </nav>
              <section className="page page--preview">
                  <div className="content" id="content-1" data-bgcolor="var(--base-200)">
                      <a className="content__back" href="#menu" aria-label="Back to menu">
                          <svg className="icon icon--arrow"><use xlinkHref="#icon-arrow"></use></svg>
                      </a>
                      <h2 className="content__title"><span>{s.rotulo12}</span></h2>
                      <p className="content__intro"><span>{s.rotulo13}</span></p>
                      <span className="content__date"><span>{s.rotulo14}</span></span>
                      <div className="gallery">
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem31} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Launch Pad</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem32} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Lunar Module</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem33} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Earth Rise</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem34} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Sea of Tranquility</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem35} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Spacewalk</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem36} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Command Module</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem37} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Splashdown</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem38} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Astronauts</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem39} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Mission Control</figcaption>
                          </figure>
                      </div>
                  </div>
                  <div className="content" id="content-2" data-bgcolor="var(--base-300)">
                      <a className="content__back" href="#menu" aria-label="Back to menu">
                          <svg className="icon icon--arrow"><use xlinkHref="#icon-arrow"></use></svg>
                      </a>
                      <h2 className="content__title"><span>{s.rotulo15}</span></h2>
                      <p className="content__intro"><span>{s.rotulo16}</span></p>
                      <span className="content__date"><span>{s.rotulo17}</span></span>
                      <div className="gallery">
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem40} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Orion Spacecraft</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem41} alt="Some image" />
                              <figcaption className="gallery__figure-caption">SLS Rocket</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem42} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Lunar Gateway</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem43} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Deep Space</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem44} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Lunar South Pole</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem45} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Next Gen Suits</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem46} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Artemis Base Camp</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem47} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Lunar Rover</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem48} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Deep Space Network</figcaption>
                          </figure>
                      </div>
                  </div>
                  <div className="content" id="content-3" data-bgcolor="var(--base-200)">
                      <a className="content__back" href="#menu" aria-label="Back to menu">
                          <svg className="icon icon--arrow"><use xlinkHref="#icon-arrow"></use></svg>
                      </a>
                      <h2 className="content__title"><span>{s.rotulo18}</span></h2>
                      <p className="content__intro"><span>{s.rotulo19}</span></p>
                      <span className="content__date"><span>{s.rotulo20}</span></span>
                      <div className="gallery">
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem49} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Jupiter Flyby</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem50} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Saturn Rings</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem51} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Pale Blue Dot</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem52} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Uranus Moons</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem53} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Neptune Approach</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem54} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Heliosphere</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem55} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Golden Record</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem56} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Deep Space Anomaly</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem57} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Interstellar Boundary</figcaption>
                          </figure>
                      </div>
                  </div>
                  <div className="content" id="content-4" data-bgcolor="var(--base-100)">
                      <a className="content__back" href="#menu" aria-label="Back to menu">
                          <svg className="icon icon--arrow"><use xlinkHref="#icon-arrow"></use></svg>
                      </a>
                      <h2 className="content__title"><span>{s.rotulo21}</span></h2>
                      <p className="content__intro"><span>{s.rotulo22}</span></p>
                      <span className="content__date"><span>{s.rotulo23}</span></span>
                      <div className="gallery">
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem58} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Asteroid Belt</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem59} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Jupiter Storms</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem60} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Io Transit</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem61} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Europa Flare</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem62} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Ganymede Ice</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem63} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Callisto Crater</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem64} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Solar Wind</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem65} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Pioneer Plaque</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem66} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Deep Space Silence</figcaption>
                          </figure>
                      </div>
                  </div>
                  <div className="content" id="content-5" data-bgcolor="var(--acento)">
                      <a className="content__back" href="#menu" aria-label="Back to menu">
                          <svg className="icon icon--arrow"><use xlinkHref="#icon-arrow"></use></svg>
                      </a>
                      <h2 className="content__title"><span>{s.rotulo24}</span></h2>
                      <p className="content__intro"><span>{s.rotulo25}</span></p>
                      <span className="content__date"><span>{s.rotulo26}</span></span>
                      <div className="gallery">
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem67} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Titan Atmosphere</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem68} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Enceladus Lakes</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem69} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Ring Shadows</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem70} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Hexagon Storm</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem71} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Iapetus Dust</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem72} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Mimas Ridge</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem73} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Cassini Division</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem74} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Saturn Eclipse</figcaption>
                          </figure>
                          <figure className="gallery__figure">
                              <img className="gallery__figure-img" src={s.imagem75} alt="Some image" />
                              <figcaption className="gallery__figure-caption">Grand Finale</figcaption>
                          </figure>
                      </div>
                  </div>
              </section>
          </main>
          <svg className="cursor" width="30" height="30" viewBox="0 0 30 30">
              <circle className="cursor__inner" cx="15" cy="15" r="7.5"></circle>
          </svg>
    </section>
  );
}