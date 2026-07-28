"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/cosmic-gallery
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
  //   		// ===== EventEmitter Polyfill (Browser Replacement for Node.js 'events') =====
  //   		class EventEmitter {
  //   			constructor() {
  //   				this.events = {};
  //   			}
  //   			on(evt, listener) {
  //   				(this.events[evt] || (this.events[evt] = [])).push(listener);
  //   				return this;
  //   			}
  //   			emit(evt, ...args) {
  //   				(this.events[evt] || []).forEach(lsn => lsn(...args));
  //   			}
  //   		}
  //   
  //   		// ===== UTILS (utils.js) =====
  //   		const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
  //   		const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   		const calcWinsize = () => ({ width: window.innerWidth, height: window.innerHeight });
  //   		const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  //   		const getMousePos = e => ({ x: e.clientX, y: e.clientY });
  //   
  //   		const preloadImages = (selector) => {
  //   			return new Promise((resolve) => {
  //   				imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  //   			});
  //   		};
  //   
  //   		const getTranslateValues = element => {
  //   			const style = window.getComputedStyle(element);
  //   			const matrix = style['transform'] || style.webkitTransform || style.mozTransform;
  //   
  //   			if (matrix === 'none' || typeof matrix === 'undefined') return { x: 0, y: 0, z: 0 };
  //   
  //   			const matrixType = matrix.includes('3d') ? '3d' : '2d';
  //   			const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
  //   
  //   			if (matrixType === '2d') return { x: parseFloat(matrixValues[4]), y: parseFloat(matrixValues[5]), z: 0 };
  //   			if (matrixType === '3d') return { x: parseFloat(matrixValues[12]), y: parseFloat(matrixValues[13]), z: parseFloat(matrixValues[14]) };
  //   		};
  //   
  //   		// Global state tracking based on utilities
  //   		let winsize = calcWinsize();
  //   		window.addEventListener('resize', () => winsize = calcWinsize());
  //   		
  //   		let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
  //   		window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
  //   
  //   
  //   		// ===== MAGNETIC FX (magneticFx.js) =====
  //   		class MagneticFx {
  //   			constructor(el) {
  //   				this.DOM = { el: el };
  //   				this.renderedStyles = {
  //   					tx: { previous: 0, current: 0, amt: 0.04 },
  //   					ty: { previous: 0, current: 0, amt: 0.04 }
  //   				};
  //   				this.calculateSizePosition();
  //   				this.initEvents();
  //   			}
  //   			calculateSizePosition() {
  //   				this.scrollVal = { x: window.scrollX, y: window.scrollY };
  //   				this.rect = this.DOM.el.getBoundingClientRect();
  //   			}
  //   			initEvents() {
  //   				window.addEventListener('resize', () => this.calculateSizePosition());
  //   				this.DOM.el.addEventListener('mouseenter', () => {
  //   					this.hoverTimeout = setTimeout(() => {
  //   						const { x, y } = getTranslateValues(this.DOM.el);
  //   						this.renderedStyles['tx'].previous = x;
  //   						this.renderedStyles['ty'].previous = y;
  //   						this.loopRender();
  //   					}, 10);
  //   				});
  //   				this.DOM.el.addEventListener('mouseleave', () => {
  //   					if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
  //   					this.stopRendering();
  //   				});
  //   			}
  //   			loopRender() {
  //   				if (!this.requestId) {
  //   					this.requestId = requestAnimationFrame(() => this.render());
  //   				}
  //   			}
  //   			stopRendering() {
  //   				if (this.requestId) {
  //   					window.cancelAnimationFrame(this.requestId);
  //   					this.requestId = undefined;
  //   				}
  //   			}
  //   			render() {
  //   				this.requestId = undefined;
  //   				const scrollDiff = {
  //   					x: this.scrollVal.x - window.scrollX,
  //   					y: this.scrollVal.y - window.scrollY
  //   				};
  //   				this.renderedStyles['tx'].current = (mousepos.x - (scrollDiff.x + this.rect.left + this.rect.width / 2)) * .3;
  //   				this.renderedStyles['ty'].current = (mousepos.y - (scrollDiff.y + this.rect.top + this.rect.height / 2)) * .3;
  //   				for (const key in this.renderedStyles) {
  //   					this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   				}
  //   				gsap.set(this.DOM.el, { x: this.renderedStyles['tx'].previous, y: this.renderedStyles['ty'].previous });
  //   				this.loopRender();
  //   			}
  //   		}
  //   
  //   		// ===== PREVIEW (preview.js) =====
  //   		class Preview {
  //   			constructor(el) {
  //   				this.DOM = { el: el };
  //   				this.DOM.backCtrl = this.DOM.el.querySelector('.preview__item-back');
  //   				this.DOM.imgWrap = this.DOM.el.querySelector('.preview__item-imgwrap');
  //   				this.DOM.image = this.DOM.imgWrap.querySelector('.preview__item-img');
  //   				this.DOM.title = this.DOM.el.querySelector('.preview__item-title');
  //   				this.DOM.titleChars = [...this.DOM.title.querySelectorAll('.char')];
  //   				this.DOM.content = this.DOM.el.querySelector('.preview__item-content');
  //   				this.init();
  //   			}
  //   			init() {
  //   				gsap.set(this.DOM.titleChars, { opacity: 0, y: '100%' });
  //   				gsap.set(this.DOM.imgWrap, { y: '100%', rotationX: -20 });
  //   				gsap.set(this.DOM.image, { y: '-100%' });
  //   				gsap.set(this.DOM.backCtrl, { opacity: 0 });
  //   				gsap.set(this.DOM.content, { opacity: 0 });
  //   			}
  //   		}
  //   
  //   
  //   		// ===== CURSOR (cursor.js) =====
  //   		class Cursor {
  //   			constructor(el) {
  //   				this.DOM = { el: el };
  //   				this.DOM.svg = this.DOM.el.querySelector('.cursor__svg');
  //   				this.DOM.circle = this.DOM.svg.querySelector('.cursor__svg-circle');
  //   				this.DOM.circle.style.transformOrigin = '50% 50%';
  //   				this.DOM.text = this.DOM.el.querySelector('.cursor__text');
  //   				this.DOM.el.style.opacity = 0;
  //   				this.bounds = this.DOM.svg.getBoundingClientRect();
  //   				this.renderedStyles = {
  //   					tx: { previous: 0, current: 0, amt: 0.2 },
  //   					ty: { previous: 0, current: 0, amt: 0.2 },
  //   					txText: { previous: 0, current: 0, amt: 0.1 },
  //   					tyText: { previous: 0, current: 0, amt: 0.1 },
  //   					scale: { previous: 1, current: 1, amt: 0.15 }
  //   				};
  //   
  //   				this.onMouseMoveEv = () => {
  //   					this.renderedStyles.tx.previous = this.renderedStyles.tx.current = this.renderedStyles.txText.previous = this.renderedStyles.txText.current = mousepos.x - this.bounds.width / 2;
  //   					this.renderedStyles.ty.previous = this.renderedStyles.ty.current = this.renderedStyles.tyText.previous = this.renderedStyles.tyText.current = mousepos.y - this.bounds.height / 2;
  //   					gsap.to(this.DOM.el, { duration: 0.9, ease: 'power3.out', opacity: 1 });
  //   					requestAnimationFrame(() => this.render());
  //   					window.removeEventListener('mousemove', this.onMouseMoveEv);
  //   				};
  //   				window.addEventListener('mousemove', this.onMouseMoveEv);
  //   			}
  //   			enter() { this.renderedStyles['scale'].current = 1.5; }
  //   			leave() { this.renderedStyles['scale'].current = 1; }
  //   			render() {
  //   				this.renderedStyles['tx'].current = this.renderedStyles['txText'].current = mousepos.x - this.bounds.width / 2;
  //   				this.renderedStyles['ty'].current = this.renderedStyles['tyText'].current = mousepos.y - this.bounds.height / 2;
  //   				for (const key in this.renderedStyles) {
  //   					this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   				}
  //   				this.DOM.svg.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px)`;
  //   				this.DOM.text.style.transform = `translateX(${this.renderedStyles['txText'].previous}px) translateY(${this.renderedStyles['tyText'].previous}px)`;
  //   				this.DOM.circle.style.transform = `scale(${this.renderedStyles['scale'].previous})`;
  //   				requestAnimationFrame(() => this.render());
  //   			}
  //   		}
  //   
  //   		// ===== GRID ITEM (gridItem.js) =====
  //   		class GridItem {
  //   			constructor(el) {
  //   				this.DOM = { el: el };
  //   				this.DOM.image = this.DOM.el.querySelector('.grid__item-img');
  //   				this.title = this.DOM.el.dataset.title;
  //   				this.translationVals = { x: 0, y: 0 };
  //   				this.rotationVals = { x: 0, y: 0 };
  //   				this.xstart = getRandomNumber(70, 100);
  //   				this.ystart = getRandomNumber(40, 65);
  //   				this.rxstart = 5;
  //   				this.rystart = 10;
  //   				this.magneticFx = new MagneticFx(this.DOM.image);
  //   				this.DOM.contentEl = document.querySelector(this.DOM.el.getAttribute('href').substring(this.DOM.el.getAttribute('href').lastIndexOf('#')));
  //   				this.preview = new Preview(this.DOM.contentEl);
  //   				this.layout();
  //   				this.loopTransformAnimation();
  //   			}
  //   			layout() {
  //   				const rect = this.DOM.el.getBoundingClientRect();
  //   				this.isLeft = rect.left + rect.width / 2 < winsize.width / 2;
  //   				this.isTop = rect.top + rect.height / 2 < winsize.height / 2;
  //   				this.rY = this.isLeft ? map(rect.left + rect.width / 2, 0, winsize.width / 2, this.rystart, 0) : map(rect.left + rect.width / 2, winsize.width / 2, winsize.width, 0, -this.rystart);
  //   				this.rX = this.isTop ? map(rect.top + rect.height / 2, 0, winsize.height / 2, -this.rxstart, 0) : map(rect.top + rect.height / 2, winsize.height / 2, winsize.height, 0, this.rxstart);
  //   				this.tZ = this.isLeft ? map(rect.left + rect.width / 2, 0, winsize.width / 2, -200, -600) : map(rect.left + rect.width / 2, winsize.width / 2, winsize.width, -600, -200);
  //   
  //   				gsap.set(this.DOM.el, { rotationX: this.rX, rotationY: this.rY, z: this.tZ });
  //   			}
  //   			onMouseEnter() {
  //   				this.hoverTimeout = setTimeout(() => {
  //   					if (this.timelineHoverOut) this.timelineHoverOut.kill();
  //   					this.timelineHoverIn = gsap.timeline()
  //   						.addLabel('start', 0)
  //   						.to(this.DOM.image, { duration: 0.8, ease: 'expo', scale: 1.1 }, 'start');
  //   				}, 10);
  //   			}
  //   			onMouseLeave() {
  //   				if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
  //   				if (this.timelineHoverIn) this.timelineHoverIn.kill();
  //   				this.timelineHoverOut = gsap.timeline()
  //   					.to(this.DOM.image, { duration: 1, ease: 'power4', x: 0, y: 0, scale: 1 });
  //   			}
  //   			loopTransformAnimation() {
  //   				if (!this.requestId) {
  //   					this.requestId = requestAnimationFrame(() => this.move());
  //   				}
  //   			}
  //   			stopTransformAnimation() {
  //   				if (this.requestId) {
  //   					window.cancelAnimationFrame(this.requestId);
  //   					this.requestId = undefined;
  //   				}
  //   			}
  //   			move() {
  //   				this.requestId = undefined;
  //   				this.translationVals.x = lerp(this.translationVals.x, map(mousepos.x, 0, winsize.width, -this.xstart, this.xstart), 0.04);
  //   				this.translationVals.y = lerp(this.translationVals.y, map(mousepos.y, 0, winsize.height, -this.ystart, this.ystart), 0.04);
  //   				this.rotationVals.x = this.isTop ? lerp(this.rotationVals.x, map(mousepos.y, 0, winsize.height / 2, this.rxstart, 0), 0.04) : lerp(this.rotationVals.x, map(mousepos.y, winsize.height / 2, winsize.height, 0, -this.rxstart), 0.04);
  //   				this.rotationVals.y = this.isLeft ? lerp(this.rotationVals.y, map(mousepos.x, 0, winsize.width / 2, -this.rystart, 0), 0.04) : lerp(this.rotationVals.y, map(mousepos.x, winsize.width / 2, winsize.width, 0, this.rystart), 0.04);
  //   
  //   				gsap.set(this.DOM.el, {
  //   					x: -this.translationVals.x,
  //   					y: -this.translationVals.y,
  //   					rotationX: -this.rX - this.rotationVals.x,
  //   					rotationY: -this.rY - this.rotationVals.y
  //   				});
  //   				this.loopTransformAnimation();
  //   			}
  //   		}
  //   
  //   		// ===== GRID (grid.js) =====
  //   		let splittingInit = false;
  //   		let titleChars = [];
  //   
  //   		class Grid extends EventEmitter {
  //   			constructor(el) {
  //   				super();
  //   				this.DOM = { el: el };
  //   				
  //   				// Initialize splitting here to ensure the elements are prepared
  //   				if (!splittingInit) {
  //   					Splitting();
  //   					splittingInit = true;
  //   					const title = document.querySelector('.content__title');
  //   					titleChars = [...title.querySelectorAll('.char')];
  //   				}
  //   
  //   				this.gridItems = [];
  //   				this.DOM.items = [...this.DOM.el.querySelectorAll('.grid__item')];
  //   				this.DOM.items.forEach(item => {
  //   					this.gridItems.push(new GridItem(item));
  //   				});
  //   				this.showItems();
  //   				this.initEvents();
  //   			}
  //   			showItems() {
  //   				gsap.timeline()
  //   					.addLabel('start', 0)
  //   					.set(this.DOM.items, { scale: 1.5, opacity: 0 }, 0)
  //   					.to(this.DOM.items, { duration: 1.2, ease: 'expo', scale: 1, stagger: { amount: 0.4, grid: 'auto', from: 'center' } }, 'start')
  //   					.to(this.DOM.items, { duration: 1.2, ease: 'power1', opacity: 1, stagger: { amount: 0.4, grid: 'auto', from: 'center' } }, 'start');
  //   			}
  //   			initEvents() {
  //   				for (const item of this.gridItems) {
  //   					item.DOM.image.addEventListener('mouseenter', () => {
  //   						item.onMouseEnter();
  //   						this.emit('mouseEnterItem', item.title);
  //   					});
  //   					item.DOM.image.addEventListener('mouseleave', () => {
  //   						item.onMouseLeave();
  //   						this.emit('mouseLeaveItem');
  //   					});
  //   					item.DOM.el.addEventListener('click', ev => {
  //   						ev.preventDefault();
  //   						this.showContent(item);
  //   					});
  //   					item.preview.DOM.backCtrl.addEventListener('click', () => {
  //   						this.hideContent(item);
  //   					});
  //   				}
  //   			}
  //   			showContent(item) {
  //   				if (this.isContentOpen) return false;
  //   				this.isContentOpen = true;
  //   				this.DOM.el.classList.add('grid--inactive');
  //   
  //   				for (const gridItem of this.gridItems) {
  //   					gridItem.stopTransformAnimation();
  //   				}
  //   
  //   				gsap.timeline()
  //   					.addLabel('start', 0)
  //   					.to(this.DOM.items, { duration: 2, ease: 'expo.inOut', opacity: 0, rotationX: 0, rotationY: 0, y: '-=' + getRandomNumber(1000, 1600), stagger: { amount: 0.2, grid: 'auto', from: 'top' } }, 'start')
  //   					.to(titleChars, { duration: 1.5, ease: 'expo.inOut', opacity: 0, y: '-=100%', stagger: 0.03 }, 'start+=0.1')
  //   					.add(() => { item.preview.DOM.el.classList.add('preview__item--open'); }, 'start+=0.1')
  //   					.to(item.preview.DOM.titleChars, { duration: 1.5, ease: 'expo.inOut', opacity: 1, y: '0%', stagger: 0.05 }, 'start+=0.6')
  //   					.to([item.preview.DOM.imgWrap, item.preview.DOM.image], { duration: 1.5, ease: 'expo.inOut', opacity: 1, y: '0%', rotationX: 0 }, 'start+=0.5')
  //   					.to(item.preview.DOM.imgWrap, { duration: 1.5, ease: 'expo.inOut', opacity: 1 }, 'start+=0.5')
  //   					.to(item.preview.DOM.backCtrl, { duration: 1.5, ease: 'expo', startAt: { x: '20%' }, x: '0%', opacity: 1 }, 'start+=1.5')
  //   					.to(item.preview.DOM.content, { duration: 1.5, ease: 'expo', startAt: { y: '20%' }, y: '0%', opacity: 1 }, 'start+=1.5');
  //   			}
  //   			hideContent(item) {
  //   				if (!this.isContentOpen) return false;
  //   				this.isContentOpen = false;
  //   
  //   				gsap.timeline({
  //   					onComplete: () => {
  //   						item.preview.DOM.el.classList.remove('preview__item--open');
  //   						this.DOM.el.classList.remove('grid--inactive');
  //   					}
  //   				})
  //   				.addLabel('start', 0)
  //   				.to(item.preview.DOM.titleChars, { duration: 1.5, ease: 'expo.inOut', opacity: 0, y: '100%', stagger: -0.04 }, 'start')
  //   				.to(item.preview.DOM.imgWrap, { duration: 1.5, ease: 'expo.inOut', y: '100%', rotationX: -20 }, 'start')
  //   				.to(item.preview.DOM.image, { duration: 1.5, ease: 'expo.inOut', y: '-100%' }, 'start')
  //   				.to(item.preview.DOM.backCtrl, { duration: 1.5, ease: 'expo.inOut', x: '20%', opacity: 0 }, 'start')
  //   				.to(item.preview.DOM.content, { duration: 1.5, ease: 'expo.inOut', y: '50%', opacity: 0 }, 'start')
  //   				.to(titleChars, { duration: 1, ease: 'expo.inOut', opacity: 1, y: '0%', stagger: -0.03 }, 'start+=0.4')
  //   				.add(() => {
  //   					for (const gridItem of this.gridItems) {
  //   						gridItem.translationVals.y = gridItem.rotationVals.y = gridItem.rotationVals.x = 0;
  //   						gridItem.loopTransformAnimation();
  //   					}
  //   				}, 'start+=0.3')
  //   				.to(this.DOM.items, { duration: 1, ease: 'expo', opacity: 1, startAt: { scale: 0.2 }, scale: 1, stagger: { amount: 0.2, grid: 'auto', from: 'center' } }, 'start+=1');
  //   			}
  //   		}
  //   
  //   		// ===== INITIALIZATION (index.js) =====
  //   		const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //   		preloadImages('.grid__item-img').then(() => {
  //   			document.body.classList.remove('loading');
  //   			const grid = new Grid(document.querySelector('.grid'));
  //   			grid.on('mouseEnterItem', itemTitle => cursor.DOM.text.innerHTML = itemTitle);
  //   			grid.on('mouseLeaveItem', () => cursor.DOM.text.innerHTML = '');
  //   		});
  //   
  //   		[...document.querySelectorAll('a, button, .grid__item')].forEach(link => {
  //   			link.addEventListener('mouseenter', () => cursor.enter());
  //   			link.addEventListener('mouseleave', () => cursor.leave());
  //   		});
  //   	
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-cosmic-gallery" ref={raiz}>
      <main>
      		<div className="message">Access via a desktop terminal for optimal holographic rendering.</div>
      		<div className="frame">
      			<div className="frame__title-wrap">
      				<h1 className="frame__title">{s.titulo}</h1>
      			</div>
      			
      		</div>
      		<div className="content">
      			<h2 className="content__title">
      				<span className="content__title-line content__title-line--1" data-splitting>{s.rotulo}</span>
      				<span className="content__title-line content__title-line--2" data-splitting>{s.rotulo2}</span>
      			</h2>
      			<div className="grid">
      				<a href="#preview-1" className="grid__item pos-1" data-title="Nebula"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem})`}}></div></a>
      				<a href="#preview-2" className="grid__item pos-2" data-title="Quasar"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem2})`}}></div></a>
      				<a href="#preview-3" className="grid__item pos-3" data-title="Pulsar"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem3})`}}></div></a>
      				<a href="#preview-4" className="grid__item pos-4" data-title="Supernova"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem4})`}}></div></a>
      				<a href="#preview-5" className="grid__item pos-5" data-title="Asteroid"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem5})`}}></div></a>
      				<a href="#preview-6" className="grid__item pos-6" data-title="Comet"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem6})`}}></div></a>
      				<a href="#preview-7" className="grid__item pos-7" data-title="Galaxy"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem7})`}}></div></a>
      				<a href="#preview-8" className="grid__item pos-8" data-title="Black Hole"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem8})`}}></div></a>
      				<a href="#preview-9" className="grid__item pos-9" data-title="Red Dwarf"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem9})`}}></div></a>
      				<a href="#preview-10" className="grid__item pos-10" data-title="White Dwarf"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem10})`}}></div></a>
      				<a href="#preview-11" className="grid__item pos-11" data-title="Neutron Star"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem11})`}}></div></a>
      				<a href="#preview-12" className="grid__item pos-12" data-title="Event Horizon"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem12})`}}></div></a>
      				<a href="#preview-13" className="grid__item pos-13" data-title="Dark Matter"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem13})`}}></div></a>
      				<a href="#preview-14" className="grid__item pos-14" data-title="Exoplanet"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem14})`}}></div></a>
      				<a href="#preview-15" className="grid__item pos-15" data-title="Stardust"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem15})`}}></div></a>
      				<a href="#preview-16" className="grid__item pos-16" data-title="Cosmic Void"><div className="grid__item-img" style={{backgroundImage: `url(${s.imagem16})`}}></div></a>
      			</div>
      			<div className="preview">
      				<div className="preview__item" id="preview-1">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo3}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem17})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo2}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo4}</span><span>{s.rotulo5}</span></div>
      						<p className="preview__item-description">{s.texto}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao2}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-2">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo6}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem18})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo3}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo7}</span><span>{s.rotulo8}</span></div>
      						<p className="preview__item-description">{s.texto2}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao3}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao4}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-3">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo9}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem19})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo4}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo10}</span><span>{s.rotulo11}</span></div>
      						<p className="preview__item-description">{s.texto3}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao5}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao6}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-4">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo12}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem20})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo5}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo13}</span><span>{s.rotulo14}</span></div>
      						<p className="preview__item-description">{s.texto4}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao7}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao8}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-5">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo15}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem21})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo6}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo16}</span><span>{s.rotulo17}</span></div>
      						<p className="preview__item-description">{s.texto5}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao9}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao10}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-6">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo18}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem22})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo7}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo19}</span><span>{s.rotulo20}</span></div>
      						<p className="preview__item-description">{s.texto6}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao11}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao12}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-7">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo21}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem23})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo8}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo22}</span><span>{s.rotulo23}</span></div>
      						<p className="preview__item-description">{s.texto7}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao13}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao14}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-8">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo24}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem24})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo9}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo25}</span><span>{s.rotulo26}</span></div>
      						<p className="preview__item-description">{s.texto8}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao15}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao16}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-9">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo27}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem25})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo10}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo28}</span><span>{s.rotulo29}</span></div>
      						<p className="preview__item-description">{s.texto9}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao17}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao18}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-10">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo30}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem26})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo11}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo31}</span><span>{s.rotulo32}</span></div>
      						<p className="preview__item-description">{s.texto10}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao19}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao20}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-11">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo33}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem27})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo12}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo34}</span><span>{s.rotulo35}</span></div>
      						<p className="preview__item-description">{s.texto11}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao21}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao22}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-12">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo36}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem28})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo13}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo37}</span><span>{s.rotulo38}</span></div>
      						<p className="preview__item-description">{s.texto12}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao23}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao24}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-13">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo39}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem29})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo14}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo40}</span><span>{s.rotulo41}</span></div>
      						<p className="preview__item-description">{s.texto13}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao25}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao26}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-14">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo42}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem30})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo15}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo43}</span><span>{s.rotulo44}</span></div>
      						<p className="preview__item-description">{s.texto14}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao27}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao28}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-15">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo45}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem31})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo16}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo46}</span><span>{s.rotulo47}</span></div>
      						<p className="preview__item-description">{s.texto15}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao29}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao30}</button>
      					</div>
      				</div>
      				<div className="preview__item" id="preview-16">
      					<button className="preview__item-back unbutton" onClick={s.onClick}><span>{s.rotulo48}</span></button>
      					<div className="preview__item-imgwrap">
      						<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem32})`}}></div>
      					</div>
      					<h2 data-splitting className="preview__item-title">{s.titulo17}</h2>
      					<div className="preview__item-content">
      						<div className="preview__item-meta"><span>{s.rotulo49}</span><span>{s.rotulo50}</span></div>
      						<p className="preview__item-description">{s.texto16}</p>
      						<button className="preview__item-info unbutton" onClick={s.onClick}>{s.acao31}</button>
      						<button className="preview__item-button" onClick={s.onClick}>{s.acao32}</button>
      					</div>
      				</div>
      			</div>
      		</div>
      	</main>
      	<div className="cursor">
      		<svg className="cursor__svg" width="80" height="80" viewBox="0 0 80 80">
      			<circle vectorEffect="non-scaling-stroke" className="cursor__svg-circle" cx="40" cy="40" r="20"/>
      		</svg>
      		<span className="cursor__text"></span>
      	</div>
    </section>
  );
}