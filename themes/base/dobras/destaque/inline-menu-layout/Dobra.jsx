"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/inline-menu-layout
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
  //   		// ==========================================
  //   		// UTILS
  //   		// ==========================================
  //   		const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
  //   		const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
  //   		const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   
  //   		const getMousePos = e => {
  //   			return { x: e.clientX, y: e.clientY };
  //   		};
  //   
  //   		const preloadImages = (selector = 'img') => {
  //   			return new Promise((resolve) => {
  //   				imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  //   			});
  //   		};
  //   
  //   		const preloadFonts = (id) => {
  //   			return new Promise((resolve) => {
  //   				WebFont.load({
  //   					typekit: { id: id },
  //   					active: resolve,
  //   					inactive: resolve // Resolve even if fonts fail to load
  //   				});
  //   			});
  //   		};
  //   
  //   		// ==========================================
  //   		// PRELOADER
  //   		// ==========================================
  //   		const preloader = selector => {
  //   			return new Promise(resolve => {
  //   				const body = document.body;
  //   				const imgwrap = document.createElement('div');
  //   				imgwrap.style.visibility = 'hidden';
  //   				body.appendChild(imgwrap);
  //   				
  //   				[...document.querySelectorAll(selector)].forEach(el => {
  //   					const imgEl = document.createElement('img');
  //   					imgEl.style.width = 0;
  //   					imgEl.src = el.dataset.img;
  //   					imgEl.className = 'preload';
  //   					imgwrap.appendChild(imgEl);
  //   				});
  //   
  //   				imagesLoaded(document.querySelectorAll('.preload'), () => {
  //   					body.classList.remove('loading');
  //   					resolve();
  //   				});
  //   			});
  //   		};
  //   
  //   		// ==========================================
  //   		// GLOBAL MOUSE STATE
  //   		// ==========================================
  //   		let mousepos = {x: 0, y: 0};
  //   		let mousePosCache = {x: 0, y: 0};
  //   		let direction = {x: 0, y: 0};
  //   		window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
  //   
  //   		// ==========================================
  //   		// CURSOR
  //   		// ==========================================
  //   		class Cursor {
  //   			constructor(el) {
  //   				this.DOM = {el: el};
  //   				this.DOM.el.style.opacity = 0;
  //   				
  //   				this.bounds = this.DOM.el.getBoundingClientRect();
  //   				
  //   				this.renderedStyles = {
  //   					tx: {previous: 0, current: 0, amt: 0.2},
  //   					ty: {previous: 0, current: 0, amt: 0.2},
  //   					scale: {previous: 1, current: 1, amt: 0.2},
  //   					opacity: {previous: 1, current: 1, amt: 0.2}
  //   				};
  //   
  //   				this.onMouseMoveEv = () => {
  //   					this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mousepos.x - this.bounds.width/2;
  //   					this.renderedStyles.ty.previous = this.renderedStyles.ty.current = mousepos.y - this.bounds.height/2;
  //   					gsap.to(this.DOM.el, {duration: 0.9, ease: 'power3.out', opacity: 1});
  //   					requestAnimationFrame(() => this.render());
  //   					window.removeEventListener('mousemove', this.onMouseMoveEv);
  //   				};
  //   				window.addEventListener('mousemove', this.onMouseMoveEv);
  //   			}
  //   			enter() {
  //   				this.renderedStyles['scale'].current = 2;
  //   				this.renderedStyles['opacity'].current = 0.3;
  //   			}
  //   			leave() {
  //   				this.renderedStyles['scale'].current = 1;
  //   				this.renderedStyles['opacity'].current = 1;
  //   			}
  //   			render() {
  //   				this.renderedStyles['tx'].current = mousepos.x - this.bounds.width/2;
  //   				this.renderedStyles['ty'].current = mousepos.y - this.bounds.height/2;
  //   
  //   				for (const key in this.renderedStyles ) {
  //   					this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   				}
  //   									
  //   				this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
  //   				this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;
  //   
  //   				requestAnimationFrame(() => this.render());
  //   			}
  //   		}
  //   
  //   		// ==========================================
  //   		// CONTENT ITEM
  //   		// ==========================================
  //   		class ContentItem {
  //   			constructor(el) {
  //   				this.DOM = {el: el};
  //   
  //   				Splitting({ target: el.querySelectorAll('[data-splitting]') });
  //   
  //   				this.DOM.title = this.DOM.el.querySelector('.content__title-inner');
  //   				this.DOM.number = this.DOM.el.querySelector('.content__title-number');
  //   				this.DOM.imgs = [...this.DOM.el.querySelectorAll('.gallery__item-imginner')];
  //   				this.DOM.caption = {
  //   					title: this.DOM.el.querySelectorAll('.gallery__item-caption > .gallery__item-title'),
  //   					meta: this.DOM.el.querySelectorAll('.gallery__item-caption > .gallery__item-meta'),
  //   					more: this.DOM.el.querySelectorAll('.gallery__item-caption > .gallery__item-more')
  //   				};
  //   
  //   				this.initEvents();
  //   			}
  //   			
  //   			initEvents() {
  //   				this.DOM.caption.more.forEach((more, pos) => {
  //   					const img = this.DOM.imgs[pos];
  //   					const chars = this.DOM.caption.title[pos].querySelectorAll('.char');
  //   
  //   					more.addEventListener('mouseenter', () => {
  //   						gsap.killTweensOf([img, chars]);
  //   						gsap.timeline({
  //   							defaults: {
  //   								duration: 1, 
  //   								ease: 'expo',
  //   							}
  //   						})
  //   						.to(img, {scale: 0.95})
  //   						.to(chars, {x: pos => pos*2}, 0);
  //   					});
  //   					more.addEventListener('mouseleave', () => {
  //   						gsap.killTweensOf([img, chars]);
  //   						gsap.timeline({
  //   							defaults: {
  //   								duration: 0.5, 
  //   								ease: 'expo',
  //   							}
  //   						})
  //   						.to(img, {scale: 1})
  //   						.to(chars, {x: 0}, 0);
  //   					});
  //   				});
  //   			}
  //   		}
  //   
  //   		// ==========================================
  //   		// MENU ITEM
  //   		// ==========================================
  //   		class MenuItem {
  //   			constructor(el, animatableProperties) {
  //   				this.DOM = {el: el};
  //   				this.DOM.inner = this.DOM.el.querySelector('.menu__item-inner');
  //   				this.DOM.number = this.DOM.el.querySelector('.menu__item-number');
  //   				this.animatableProperties = animatableProperties;
  //   				this.layout();
  //   				this.initEvents();
  //   			}
  //   			
  //   			layout() {
  //   				this.DOM.reveal = document.createElement('div');
  //   				this.DOM.reveal.className = 'hover-reveal';
  //   				this.DOM.reveal.style.transformOrigin = '0% 0%';
  //   				
  //   				this.DOM.revealInner = document.createElement('div');
  //   				this.DOM.revealInner.className = 'hover-reveal__inner';
  //   				
  //   				this.DOM.revealImage = document.createElement('div');
  //   				this.DOM.revealImage.className = 'hover-reveal__img';
  //   				
  //   				// Apply the image URL embedded in the data-img attribute
  //   				this.DOM.revealImage.style.backgroundImage = `url(${this.DOM.el.dataset.img})`;
  //   				
  //   				this.DOM.revealInner.appendChild(this.DOM.revealImage);
  //   				this.DOM.reveal.appendChild(this.DOM.revealInner);
  //   				this.DOM.el.appendChild(this.DOM.reveal);
  //   			}
  //   			
  //   			initEvents() {
  //   				this.mouseenterFn = () => {
  //   					this.showImage();
  //   					this.firstRAFCycle = true;
  //   					this.loopRender();
  //   				};
  //   
  //   				this.mouseleaveFn = () => {
  //   					this.stopRendering();
  //   					this.hideImage();
  //   				};
  //   				
  //   				this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
  //   				this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  //   			}
  //   			
  //   			calcBounds() {
  //   				this.bounds = {
  //   					el: this.DOM.el.getBoundingClientRect(),
  //   					reveal: this.DOM.reveal.getBoundingClientRect()
  //   				};
  //   			}
  //   			
  //   			showImage() {
  //   				gsap.killTweensOf(this.DOM.revealInner);
  //   				gsap.killTweensOf(this.DOM.revealImage);
  //   				gsap.timeline({
  //   					defaults: {duration: 0.8, ease: 'power4.out'},
  //   					onStart: () => {
  //   						this.DOM.reveal.style.opacity = this.DOM.revealInner.style.opacity = 1;
  //   						gsap.set(this.DOM.el, {zIndex: 100});
  //   					}
  //   				})
  //   				.to(this.DOM.revealInner, {
  //   					startAt: {x: '-50%', y: '150%', rotation: 10},
  //   					x: '0%',
  //   					y: '0%',
  //   				}, 0)
  //   				.to(this.DOM.revealInner, {
  //   					duration: 1, 
  //   					ease: 'expo',
  //   					startAt: {scale: 0.2},
  //   					scale: 1
  //   				}, 0)
  //   				.to(this.DOM.revealImage, {
  //   					duration: 1, 
  //   					ease: 'expo',
  //   					startAt: {scale: 1.8},
  //   					scale: 1
  //   				}, 0);
  //   			}
  //   			
  //   			hideImage() {
  //   				return new Promise(resolve => {
  //   					gsap.killTweensOf(this.DOM.revealInner);
  //   					gsap.killTweensOf(this.DOM.revealImage);
  //   					gsap.timeline({
  //   						defaults: {duration: 0.8, ease: 'power4.out'},
  //   						onStart: () => {
  //   							gsap.set(this.DOM.el, {zIndex: 1});
  //   						},
  //   						onComplete: () => {
  //   							gsap.set(this.DOM.reveal, {opacity: 0});
  //   							resolve();
  //   						}
  //   					})
  //   					.to(this.DOM.revealInner, {
  //   						scale: 0.8,
  //   						x: '50%',
  //   						y: '-150%',
  //   						opacity: 0,
  //   					})
  //   					.to(this.DOM.revealImage, {
  //   						scale: 1.8
  //   					}, 0);
  //   				});
  //   			}
  //   			
  //   			loopRender() {
  //   				if ( !this.requestId ) {
  //   					this.requestId = requestAnimationFrame(() => this.render());
  //   				}
  //   			}
  //   			
  //   			stopRendering() {
  //   				if ( this.requestId ) {
  //   					window.cancelAnimationFrame(this.requestId);
  //   					this.requestId = undefined;
  //   				}
  //   			}
  //   			
  //   			render() {
  //   				this.requestId = undefined;
  //   
  //   				if ( this.firstRAFCycle ) {
  //   					this.calcBounds();
  //   				}
  //   				
  //   				const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
  //   				direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};
  //   				mousePosCache = {x: mousepos.x, y: mousepos.y};
  //   
  //   				this.animatableProperties.tx.current = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width/2;
  //   				this.animatableProperties.ty.current = Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height/2;
  //   				this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX,0,200,0,direction.x < 0 ? -100 : 100);
  //   				
  //   				this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : lerp(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt);
  //   				this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : lerp(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt);
  //   				this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : lerp(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);
  //   				
  //   				gsap.set(this.DOM.reveal, {
  //   					x: this.animatableProperties.tx.previous,
  //   					y: this.animatableProperties.ty.previous,
  //   					rotation: this.animatableProperties.rotation.previous
  //   				});
  //   
  //   				this.firstRAFCycle = false;
  //   				this.loopRender();
  //   			}
  //   		}
  //   
  //   		// ==========================================
  //   		// MENU CONTROLLER
  //   		// ==========================================
  //   		class MenuController {
  //   			constructor(menuEl) {
  //   				this.DOM = {menu: menuEl};
  //   				this.DOM.menuItems = [...this.DOM.menu.querySelectorAll('.menu__item')];
  //   				this.animatableProperties = {
  //   					tx: {previous: 0, current: 0, amt: 0.08},
  //   					ty: {previous: 0, current: 0, amt: 0.08},
  //   					rotation: {previous: 0, current: 0, amt: 0.05}
  //   				};
  //   				
  //   				this.menuItems = [];
  //   				this.DOM.menuItems.forEach(menuItemEl => this.menuItems.push(new MenuItem(menuItemEl, this.animatableProperties)));
  //   				
  //   				this.contentItems = [];
  //   				[...document.querySelectorAll('.content-wrap .content')].forEach(contentItemEl => this.contentItems.push(new ContentItem(contentItemEl)));
  //   
  //   				this.DOM.backCtrl = document.querySelector('.back');
  //   				this.initEvents();
  //   			}
  //   			
  //   			initEvents() {
  //   				this.DOM.menuItems.forEach((menuItemEl, position) => {
  //   					menuItemEl.addEventListener('click', () => this.onMenuItemClick(position));
  //   				});
  //   				this.DOM.backCtrl.addEventListener('click', () => this.onBackCtrlClick());
  //   			}
  //   			
  //   			getCurrentData(position) {
  //   				return {
  //   					menuItem: this.menuItems[position],
  //   					texts: this.menuItems.map(t => t.DOM.inner),
  //   					numbers: this.menuItems.map(t => t.DOM.number),
  //   					contentItem: this.contentItems[position]
  //   				};
  //   			}
  //   			
  //   			onMenuItemClick(position) {
  //   				this.currentItemIndex = position;
  //   				const {menuItem, texts, numbers, contentItem} = this.getCurrentData(position);
  //   				
  //   				this.DOM.menu.style.pointerEvents = 'none';
  //   				menuItem.DOM.el.style.pointerEvents = 'auto';
  //   				menuItem.hideImage().then(() => menuItem.DOM.el.style.pointerEvents = 'none');
  //   
  //   				gsap.timeline({
  //   					defaults: {duration: 1, ease: 'expo'}
  //   				})
  //   				.addLabel('hideMenu', 0)
  //   				.set([texts, contentItem.DOM.title], {transformOrigin: '50% 100%'}, 'hideMenu')
  //   				.set(contentItem.DOM.title, {
  //   					opacity: 0,
  //   					y: '101%'
  //   				}, 'hideMenu')
  //   				.set(contentItem.DOM.number, {
  //   					scale: 0
  //   				}, 'hideMenu')
  //   				.set(contentItem.DOM.imgs, {
  //   					y: '101%'
  //   				}, 'hideMenu')
  //   				.set([contentItem.DOM.caption.title, contentItem.DOM.caption.meta, contentItem.DOM.caption.more], {
  //   					opacity: 0
  //   				}, 'hideMenu')
  //   				.to(numbers, {
  //   					duration: 0.3,
  //   					ease: 'sine',
  //   					scale: 0,
  //   					opacity: 0,
  //   					stagger: {from: position, each: 0.01}
  //   				}, 'hideMenu')
  //   				.to(texts, {
  //   					duration: 0.1,
  //   					ease: 'power2.in',
  //   					scaleY: 1.5,
  //   					stagger: {from: position, each: 0.01}
  //   				}, 'hideMenu')
  //   				.to(texts, {
  //   					duration: 0.8,
  //   					ease: 'expo',
  //   					scaleY: 1,
  //   					y: '-100%',
  //   					opacity: 0,
  //   					stagger: {from: position, each: 0.01}
  //   				}, 'hideMenu+=0.1')
  //   				.addLabel('showContent', 0.3)
  //   				.add(() => {
  //   					contentItem.DOM.el.classList.add('content--current');
  //   				}, 'showContent')
  //   				.set(this.DOM.backCtrl, {pointerEvents: 'auto'}, 'showContent')
  //   				.to(this.DOM.backCtrl, {
  //   					startAt: {x: '-100%'},
  //   					opacity: 1,
  //   					x: '0%'
  //   				}, 'showContent')
  //   				.to(contentItem.DOM.title, {
  //   					duration: 0.1,
  //   					ease: 'power2.in',
  //   					scaleY: 1.5,
  //   					opacity: 1
  //   				}, 'showContent')
  //   				.to(contentItem.DOM.title, {
  //   					duration: 0.8,
  //   					ease: 'expo',
  //   					scaleY: 1,
  //   					startAt: {y: '100%'},
  //   					y: '0%'
  //   				}, 'showContent+=0.1')
  //   				.to(contentItem.DOM.number, {
  //   					scale: 1
  //   				}, 'showContent')
  //   				.to(contentItem.DOM.imgs, {
  //   					y: '0%',
  //   					stagger: 0.02
  //   				}, 'showContent+=0.1')
  //   				.to([contentItem.DOM.caption.title, contentItem.DOM.caption.meta], {
  //   					startAt: {y: '100%'},
  //   					y: '0%',
  //   					opacity: 1,
  //   					stagger: 0.02
  //   				}, 'showContent+=0.2')
  //   				.to(contentItem.DOM.caption.more, {
  //   					startAt: {scale: 0},
  //   					scale: 1,
  //   					opacity: 1,
  //   					stagger: 0.02
  //   				}, 'showContent+=0.2');
  //   			}
  //   			
  //   			onBackCtrlClick() {
  //   				const {menuItem, texts, numbers, contentItem} = this.getCurrentData(this.currentItemIndex);
  //   				
  //   				gsap.timeline({
  //   					defaults: {duration: 0.4, ease: 'power3.in'}
  //   				})
  //   				.addLabel('hideContent', 0)
  //   				.set([texts, contentItem.DOM.title], {transformOrigin: '50% 0%'}, 'hideContent')
  //   				.set(this.DOM.backCtrl, {pointerEvents: 'none'}, 'hideContent')
  //   				.to(this.DOM.backCtrl, {
  //   					opacity: 0,
  //   					x: '-100%'
  //   				}, 'hideContent')
  //   				.to([contentItem.DOM.caption.meta, contentItem.DOM.caption.title], {
  //   					y: '100%',
  //   					opacity: 0,
  //   					stagger: 0.02
  //   				}, 'hideContent')
  //   				.to(contentItem.DOM.caption.more, {
  //   					scale: 0,
  //   					opacity: 0,
  //   					stagger: 0.02
  //   				}, 'hideContent')
  //   				.to(contentItem.DOM.imgs, {
  //   					y: '101%',
  //   					stagger: 0.02
  //   				}, 'hideContent+=0.1')
  //   				.to(contentItem.DOM.number, {
  //   					scale: 0
  //   				}, 'hideContent+=0.1')
  //   				.to(contentItem.DOM.title, {
  //   					y: '100%',
  //   					opacity: 1
  //   				}, 'hideContent+=0.1')
  //   				.addLabel('showMenu', 0.6)
  //   				.add(() => {
  //   					contentItem.DOM.el.classList.remove('content--current');
  //   				}, 'showMenu')
  //   				.add(() => {
  //   					this.DOM.menu.style.pointerEvents = '';
  //   					menuItem.DOM.el.style.pointerEvents = '';
  //   				}, 'showMenu')
  //   				.to(numbers, {
  //   					duration: 0.3,
  //   					ease: 'sine',
  //   					scale: 1,
  //   					opacity: 1,
  //   					stagger: {from: this.currentItemIndex, each: 0.01}
  //   				}, 'showMenu')
  //   				.to(texts, {
  //   					duration: 0.1,
  //   					ease: 'power2.in',
  //   					scaleY: 1.5,
  //   					opacity: 1,
  //   					stagger: {from: this.currentItemIndex, each: 0.01}
  //   				}, 'showMenu')
  //   				.to(texts, {
  //   					duration: 0.8,
  //   					ease: 'expo',
  //   					scaleY: 1,
  //   					y: '0%',
  //   					stagger: {from: this.currentItemIndex, each: 0.01}
  //   				}, 'showMenu+=0.1')
  //   			}
  //   		}
  //   
  //   		// ==========================================
  //   		// INITIALIZATION
  //   		// ==========================================
  //   		Promise.all([
  //   			preloader('.menu__item'), 
  //   			preloadImages('.gallery__item-imginner'), 
  //   			preloadFonts('zkq2mjw')
  //   		]).then(() => {
  //   			document.body.classList.remove('loading');
  //   
  //   			const cursor = new Cursor(document.querySelector('.cursor'));
  //   			new MenuController(document.querySelector('.menu'));
  //   
  //   			[...document.querySelectorAll('a, .gallery__item-more, .back')].forEach(link => {
  //   				link.addEventListener('mouseenter', () => cursor.enter());
  //   				link.addEventListener('mouseleave', () => cursor.leave());
  //   			});
  //   		});
  //   	
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-inline-menu-layout" ref={raiz}>
      <main>
      		<div className="frame frame--header">
      			<h1 className="frame__title">{s.titulo}</h1>
      		</div>
      		
      		<nav className="menu">
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=1"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo}</span></span><sup className="menu__item-number">(5)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=6"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo2}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=10"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo3}</span></span><sup className="menu__item-number">(3)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=13"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo4}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=17"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo5}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=21"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo6}</span></span><sup className="menu__item-number">(5)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=26"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo7}</span></span><sup className="menu__item-number">(6)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=32"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo8}</span></span><sup className="menu__item-number">(3)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=35"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo9}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=39"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo10}</span></span><sup className="menu__item-number">(5)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=4"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo11}</span></span><sup className="menu__item-number">(3)</sup></a>
      			<a className="menu__item" data-img="https://picsum.photos/400/600?random=7"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo12}</span></span><sup className="menu__item-number">(4)</sup></a>
      		</nav>
      		
      		<section className="content-wrap">
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo13}</span></span>
      					<sup className="content__title-number">(5)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo}</h3>
      							<p className="gallery__item-meta">{s.texto}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo2}</h3>
      							<p className="gallery__item-meta">{s.texto2}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo3}</h3>
      							<p className="gallery__item-meta">{s.texto3}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo4}</h3>
      							<p className="gallery__item-meta">{s.texto4}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo5}</h3>
      							<p className="gallery__item-meta">{s.texto5}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo14}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo6}</h3>
      							<p className="gallery__item-meta">{s.texto6}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo7}</h3>
      							<p className="gallery__item-meta">{s.texto7}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo8}</h3>
      							<p className="gallery__item-meta">{s.texto8}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem9})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo9}</h3>
      							<p className="gallery__item-meta">{s.texto9}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo15}</span></span>
      					<sup className="content__title-number">(3)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem10})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo10}</h3>
      							<p className="gallery__item-meta">{s.texto10}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem11})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo11}</h3>
      							<p className="gallery__item-meta">{s.texto11}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem12})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo12}</h3>
      							<p className="gallery__item-meta">{s.texto12}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo16}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem13})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo13}</h3>
      							<p className="gallery__item-meta">{s.texto13}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem14})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo14}</h3>
      							<p className="gallery__item-meta">{s.texto14}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem15})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo15}</h3>
      							<p className="gallery__item-meta">{s.texto15}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem16})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo16}</h3>
      							<p className="gallery__item-meta">{s.texto16}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo17}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem17})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo17}</h3>
      							<p className="gallery__item-meta">{s.texto17}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem18})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo18}</h3>
      							<p className="gallery__item-meta">{s.texto18}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem19})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo19}</h3>
      							<p className="gallery__item-meta">{s.texto19}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem20})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo20}</h3>
      							<p className="gallery__item-meta">{s.texto20}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo18}</span></span>
      					<sup className="content__title-number">(5)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem21})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo21}</h3>
      							<p className="gallery__item-meta">{s.texto21}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem22})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo22}</h3>
      							<p className="gallery__item-meta">{s.texto22}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem23})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo23}</h3>
      							<p className="gallery__item-meta">{s.texto23}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem24})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo24}</h3>
      							<p className="gallery__item-meta">{s.texto24}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem25})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo25}</h3>
      							<p className="gallery__item-meta">{s.texto25}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo19}</span></span>
      					<sup className="content__title-number">(6)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem26})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo26}</h3>
      							<p className="gallery__item-meta">{s.texto26}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem27})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo27}</h3>
      							<p className="gallery__item-meta">{s.texto27}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem28})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo28}</h3>
      							<p className="gallery__item-meta">{s.texto28}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem29})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo29}</h3>
      							<p className="gallery__item-meta">{s.texto29}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem30})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo30}</h3>
      							<p className="gallery__item-meta">{s.texto30}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem31})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo31}</h3>
      							<p className="gallery__item-meta">{s.texto31}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo20}</span></span>
      					<sup className="content__title-number">(3)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem32})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo32}</h3>
      							<p className="gallery__item-meta">{s.texto32}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem33})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo33}</h3>
      							<p className="gallery__item-meta">{s.texto33}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem34})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo34}</h3>
      							<p className="gallery__item-meta">{s.texto34}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo21}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem35})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo35}</h3>
      							<p className="gallery__item-meta">{s.texto35}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem36})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo36}</h3>
      							<p className="gallery__item-meta">{s.texto36}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem37})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo37}</h3>
      							<p className="gallery__item-meta">{s.texto37}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem38})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo38}</h3>
      							<p className="gallery__item-meta">{s.texto38}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo22}</span></span>
      					<sup className="content__title-number">(5)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem39})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo39}</h3>
      							<p className="gallery__item-meta">{s.texto39}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem40})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo40}</h3>
      							<p className="gallery__item-meta">{s.texto40}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem41})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo41}</h3>
      							<p className="gallery__item-meta">{s.texto41}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem42})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo42}</h3>
      							<p className="gallery__item-meta">{s.texto42}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem43})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo43}</h3>
      							<p className="gallery__item-meta">{s.texto43}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo23}</span></span>
      					<sup className="content__title-number">(3)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem44})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo44}</h3>
      							<p className="gallery__item-meta">{s.texto44}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem45})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo45}</h3>
      							<p className="gallery__item-meta">{s.texto45}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem46})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo46}</h3>
      							<p className="gallery__item-meta">{s.texto46}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo24}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem47})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo47}</h3>
      							<p className="gallery__item-meta">{s.texto47}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem48})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo48}</h3>
      							<p className="gallery__item-meta">{s.texto48}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem49})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo49}</h3>
      							<p className="gallery__item-meta">{s.texto49}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem50})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo50}</h3>
      							<p className="gallery__item-meta">{s.texto50}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			
      			<button className="back" onClick={s.onClick}><svg viewBox="0 0 60 34" width="30" height="17"><path d="M60 15.066H7.235L19.128 3.173 16.456.5 0 16.956 16.456 33.41l2.672-2.672L7.235 18.846H60z"/></svg></button>
      		</section>
      		
      		<div className="frame frame--footer">
      			<p className="frame__credits">{s.texto51}</p>
      		</div>
      	</main>
      	
      	<svg className="cursor" width="30" height="30" viewBox="0 0 30 30">
      		<circle className="cursor__inner" cx="15" cy="15" r="7.5" />
      	</svg>
    </section>
  );
}