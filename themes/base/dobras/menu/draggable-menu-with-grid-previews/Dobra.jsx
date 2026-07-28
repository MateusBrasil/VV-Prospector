"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/draggable-menu-with-grid-previews
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
  //   			{
  //   				// Modern Math Utilities
  //   				const MathUtils = {
  //   					lineEq: (y2, y1, x2, x1, currentVal) => {
  //   						const m = (y2 - y1) / (x2 - x1);
  //   						const b = y1 - m * x1;
  //   						return m * currentVal + b;
  //   					},
  //   					lerp: (a, b, n) => (1 - n) * a + n * b,
  //   					getRandomFloat: (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2))
  //   				};
  //   
  //   				// Precise Mouse Tracking
  //   				const getMousePos = (e) => {
  //   					let posx = 0;
  //   					let posy = 0;
  //   					if (!e) e = window.event;
  //   					if (e.pageX || e.pageY) {
  //   						posx = e.pageX;
  //   						posy = e.pageY;
  //   					} else if (e.clientX || e.clientY) {
  //   						posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  //   						posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  //   					}
  //   					return { x : posx, y : posy }
  //   				};
  //   
  //   				// Custom Smooth Scrolling Engine
  //   				function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  //   					const easings = {
  //   						linear(t) { return t; },
  //   						easeOutQuad(t) { return t * (2 - t); },
  //   					};
  //   					
  //   					const start = window.pageYOffset;
  //   					const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  //   
  //   					const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  //   					const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  //   					const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  //   					const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  //   					
  //   					if ('requestAnimationFrame' in window === false) {
  //   						window.scroll(0, destinationOffsetToScroll);
  //   						if (callback) callback();
  //   						return;
  //   					}
  //   					
  //   					function scroll() {
  //   						const now = 'now' in window.performance ? performance.now() : new Date().getTime();
  //   						const time = Math.min(1, ((now - startTime) / duration));
  //   						const timeFunction = easings[easing](time);
  //   						window.scroll(0, Math.abs(Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start)));
  //   						if (window.pageYOffset === destinationOffsetToScroll) {
  //   							if (callback) callback();
  //   							return;
  //   						}
  //   						requestAnimationFrame(scroll);
  //   					}
  //   					
  //   					scroll();
  //   				}
  //   
  //   				// Global Viewport Size & Resizing State Trackers
  //   				let winsize;
  //   				const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
  //   				calcWinsize();
  //   				window.addEventListener('resize', calcWinsize);
  //   
  //   				let mousepos = {x: winsize.width/2, y: winsize.height/2};
  //   				window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
  //   
  //   				// In-house Charming Alternative (Character Spanning) to eliminate heavy library dependencies
  //   				function charming(element) {
  //   					const text = element.textContent.trim();
  //   					element.innerHTML = '';
  //   					for (let char of text) {
  //   						const span = document.createElement('span');
  //   						span.textContent = char === ' ' ? '\u00A0' : char;
  //   						element.appendChild(span);
  //   					}
  //   				}
  //   
  //   				// Custom Interactions Cursor
  //   				class Cursor {
  //   					constructor(el) {
  //   						this.DOM = {el: el};
  //   						this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
  //   						this.DOM.arrows = {
  //   							right: this.DOM.el.querySelector('.cursor__side--right'),
  //   							left: this.DOM.el.querySelector('.cursor__side--left')
  //   						};
  //   						this.bounds = this.DOM.circle.getBoundingClientRect();
  //   
  //   						this.renderedStyles = {
  //   							tx: {previous: 0, current: 0, amt: 0.2},
  //   							ty: {previous: 0, current: 0, amt: 0.2},
  //   							scale: {previous: 1, current: 1, amt: 0.2}
  //   						};
  //   						requestAnimationFrame(() => this.render());
  //   					}
  //   					render() {
  //   						this.renderedStyles['tx'].current = mousepos.x - this.bounds.width/2;
  //   						this.renderedStyles['ty'].current = mousepos.y - this.bounds.height/2;
  //   
  //   						for (const key in this.renderedStyles ) {
  //   							this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   						}
  //   									
  //   						this.DOM.circle.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
  //   						requestAnimationFrame(() => this.render());
  //   					}
  //   					enter() {
  //   						this.renderedStyles['scale'].current = 1.9;
  //   					}
  //   					leave() {
  //   						this.renderedStyles['scale'].current = 1;
  //   					}
  //   					click() {
  //   						this.renderedStyles['scale'].previous = 0.4;
  //   					}
  //   					showArrows() {
  //   						gsap.to(Object.values(this.DOM.arrows), {
  //   							duration: ANIMATION_SETTINGS.cursor.duration,
  //   							ease: ANIMATION_SETTINGS.cursor.ease,
  //   							startAt: {x: i => i ? 10 : -10 },
  //   							opacity: 1,
  //   							x: 0
  //   						});
  //   					}
  //   					hideArrows() {
  //   						gsap.to(Object.values(this.DOM.arrows), {
  //   							duration: ANIMATION_SETTINGS.cursor.duration,
  //   							ease: ANIMATION_SETTINGS.cursor.ease,
  //   							x: i => i ? 10 : -10,
  //   							opacity: 0
  //   						});
  //   					}
  //   				}
  //   
  //   				// Scatter Preview Image Grid
  //   				class ImageGrid {
  //   					constructor(el) {
  //   						this.DOM = {el: el};
  //   						this.DOM.imageWrap = [...this.DOM.el.querySelectorAll('.grid__item-wrap')];
  //   						this.itemsTotal = this.DOM.imageWrap.length;
  //   						this.DOM.images = [...this.DOM.el.querySelectorAll('.grid__item')];
  //   						this.spread();
  //   					}
  //   					spread(animate = false) {
  //   						return new Promise((resolve) => {
  //   							let animateCount = 0;
  //   							const gridHeight = this.DOM.el.scrollHeight;
  //   							const gridTop = this.DOM.el.offsetTop;
  //   							this.DOM.imageWrap.forEach((item) => {
  //   								const rect = item.getBoundingClientRect();
  //   								const center = {x: rect.left+rect.width/2, y: rect.top+rect.height/2};
  //   								const quadrant = center.x >= winsize.width/2 ?
  //   												center.y <= gridHeight/2 + gridTop ? 1 : 4 :
  //   												center.y <= gridHeight/2 + gridTop ? 2 : 3;
  //   								
  //   								const margins = {x: winsize.width*.02, y: winsize.height*.04}
  //   								const tx = quadrant === 1 || quadrant === 4 ? 
  //   										MathUtils.getRandomFloat(-1*center.x + winsize.width/2 + margins.x*4, winsize.width - center.x - margins.x) :
  //   										MathUtils.getRandomFloat(-1*center.x + margins.x, winsize.width/2 - center.x - margins.x*4);
  //   								const ty = quadrant === 1 || quadrant === 2 ?
  //   										MathUtils.getRandomFloat(-1*center.y + margins.y, winsize.height/2 - center.y - margins.y*4) :
  //   										MathUtils.getRandomFloat(-1*center.y + winsize.height/2 + margins.y*4, winsize.height - center.y - margins.y);
  //   
  //   								item.dataset.ctx = tx;
  //   								item.dataset.cty = ty;
  //   
  //   								if ( animate ) {
  //   									gsap.to(item, {
  //   										duration: ANIMATION_SETTINGS.grid.duration,
  //   										ease: ANIMATION_SETTINGS.grid.ease,
  //   										x: tx,
  //   										y: ty,
  //   										scale: 0.35,
  //   										onComplete: () => {
  //   											++animateCount;
  //   											if ( animateCount === this.itemsTotal ) {
  //   												resolve();
  //   											}
  //   										}
  //   									});
  //   								} else {
  //   									gsap.set(item, {
  //   										x: tx,
  //   										y: ty,
  //   										scale: 0.35
  //   									});
  //   									resolve();
  //   								}
  //   							});
  //   						});
  //   					}
  //   					collapse() {
  //   						return new Promise((resolve) => {
  //   							gsap.to(this.DOM.imageWrap, {
  //   								duration: ANIMATION_SETTINGS.grid.duration,
  //   								ease: ANIMATION_SETTINGS.grid.ease,
  //   								x: 0,
  //   								y: 0,
  //   								scale: 1.01,
  //   								onComplete: resolve
  //   							});
  //   						});
  //   					}
  //   					showImages() {
  //   						gsap.set(this.DOM.images, {opacity: 1});
  //   					}
  //   				}
  //   
  //   				// Menu Items Manager
  //   				class MenuItem {
  //   					constructor(el, imageGrid) {
  //   						this.DOM = {el: el};
  //   						this.DOM.link = this.DOM.el.querySelector('.menu__item-link');
  //   						this.DOM.explore = this.DOM.el.querySelector('.menu__item-explore');
  //   						this.rect = this.DOM.el.getBoundingClientRect();
  //   						this.imageGrid = imageGrid;
  //   						
  //   						charming(this.DOM.link);
  //   						const linkInner = [...this.DOM.link.querySelectorAll('span')];
  //   						linkInner.forEach((span) => {
  //   							const stroke = span.cloneNode(true);
  //   							span.classList.add('letter__inner','letter__inner--filled');
  //   							stroke.classList.add('letter__inner','letter__inner--stroke');
  //   							this.DOM.link.insertBefore(stroke, span.nextSibling);
  //   							const letter = document.createElement('span');
  //   							letter.classList = 'letter';
  //   							letter.appendChild(span);
  //   							letter.appendChild(stroke);
  //   							this.DOM.link.appendChild(letter);
  //   						});
  //   						this.letters = [...this.DOM.link.querySelectorAll('.letter__inner')];
  //   						window.addEventListener('resize', () => this.rect = this.DOM.el.getBoundingClientRect());
  //   					}
  //   					setCurrent() {
  //   						this.DOM.el.classList.add('menu__item--current');
  //   						return this;
  //   					}
  //   					unsetCurrent() {
  //   						this.DOM.el.classList.remove('menu__item--current');
  //   					}
  //   					isCurrent() {
  //   						return this.DOM.el.classList.contains('menu__item--current');
  //   					}
  //   					showExplore() {
  //   						return this.toggleExplorer('show');
  //   					}
  //   					hideExplore() {
  //   						return this.toggleExplorer('hide');
  //   					}
  //   					toggleExplorer(action = 'show') {
  //   						return new Promise((resolve) => {
  //   							gsap.to(this.DOM.explore, {
  //   								duration: ANIMATION_SETTINGS.explore.duration,
  //   								ease: ANIMATION_SETTINGS.explore.ease,
  //   								startAt: action === 'hide' ? null : {scale: 0.5},
  //   								opacity: action === 'hide' ? 0 : 1,
  //   								scale: action === 'hide' ? 0.8 : 1,
  //   								onComplete: resolve
  //   							});
  //   						});
  //   					}
  //   					show() {
  //   						return this.toggle('show');
  //   					}
  //   					hide() {
  //   						return this.toggle('hide');
  //   					}
  //   					toggle(action = 'show') {
  //   						return new Promise((resolve) => {
  //   							const tx = action === 'hide' ? this.isCurrent() ? '-200%' : '100%' : this.isCurrent() ? '-100%' : '0%';
  //   							gsap.to(this.letters, {
  //   								duration: ANIMATION_SETTINGS.allMenuLettersToggle.duration,
  //   								ease: ANIMATION_SETTINGS.allMenuLettersToggle.ease,
  //   								x: tx,
  //   								onComplete: resolve
  //   							});
  //   						});
  //   					}
  //   				}
  //   
  //   				// The Master Menu Controller
  //   				class Menu {
  //   					constructor(el) {
  //   						this.DOM = {el: el};
  //   						this.DOM.menu = this.DOM.el.querySelector('.menu');
  //   						this.DOM.draggable = this.DOM.el.querySelector('.menu-draggable');
  //   						this.DOM.pagePreview = document.querySelector('.page--preview');
  //   						this.DOM.backToMenuCtrl = this.DOM.pagePreview.querySelector('.gridback');
  //   						
  //   						this.imageGrids = [];
  //   						[...this.DOM.pagePreview.querySelectorAll('.grid')].forEach(item => this.imageGrids.push(new ImageGrid(item)));
  //   						this.menuItems = [];
  //   						[...this.DOM.menu.querySelectorAll('.menu__item')].forEach((item, position) => this.menuItems.push(new MenuItem(item, this.imageGrids[position])));
  //   						this.menuItemsTotal = this.menuItems.length;
  //   						
  //   						this.current = 0;
  //   						this.menuItems[this.current].setCurrent().showExplore();
  //   						this.menuItems[this.current].imageGrid.showImages();
  //   						
  //   						this.draggie = new Draggabilly(this.DOM.draggable, { axis: 'x' });
  //   						this.dragPosition = 0;
  //   						this.minDrag = winsize.width*.04;
  //   						this.layout();
  //   						
  //   						this.renderedStyles = {
  //   							menuTranslation: {previous: this.dragPosition + this.initTx, current: this.dragPosition + this.initTx, amt: 0.1},
  //   							letterTranslation: {previous: 0, current: 0, amt: 0.1},
  //   							imgOpacity: {previous: 1, current: 1, amt: 0.1},
  //   							imgScaleX: {previous: 1, current: 1, amt: 0.06},
  //   							imgScaleY: {previous: 1, current: 1, amt: 0.06},
  //   							imgTranslation: {previous: 0, current: 0, amt: 0.1}
  //   						};
  //   						
  //   						this.renderId = requestAnimationFrame(() => this.render());
  //   						this.initEvents();
  //   					}
  //   					layout() {
  //   						this.initTx = this.currentPosition = winsize.width/2 - this.menuItems[this.current].rect.width/2;
  //   						gsap.set(this.DOM.menu, {x: this.initTx});
  //   					}
  //   					resize() {
  //   						this.minDrag = winsize.width*.04;
  //   						this.currentPosition = winsize.width/2 - this.menuItems[this.current].DOM.el.offsetLeft - this.menuItems[this.current].rect.width/2;
  //   						this.renderedStyles.menuTranslation.current = this.renderedStyles.menuTranslation.previous = this.currentPosition;
  //   					}
  //   					isDragging() {
  //   						return this.dragDirection != undefined && this.dragDirection != '';
  //   					}
  //   					render() {
  //   						this.renderId = undefined;
  //   
  //   						for (const key in this.renderedStyles ) {
  //   							this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   						}
  //   						
  //   						gsap.set(this.DOM.menu, {x: this.renderedStyles.menuTranslation.previous});
  //   
  //   						if ( this.isDragging() && this.currentItem && this.upcomingItem ) {
  //   							let tx = this.renderedStyles.letterTranslation.previous;
  //   							gsap.set(this.currentItem.letters, {x: this.dragDirection === 'left' ? -1*tx-100 + '%' : tx-100 + '%'});
  //   							gsap.set(this.upcomingItem.letters, {x: this.dragDirection === 'left' ? tx + '%' : -1*tx + '%'});
  //   
  //   							gsap.set(this.currentItem.imageGrid.DOM.images, {
  //   								transformOrigin: this.dragDirection === 'left' ? '100% 50%' : '0% 50%',
  //   								opacity: this.renderedStyles.imgOpacity.previous,
  //   								scaleX: this.renderedStyles.imgScaleX.previous,
  //   								scaleY: this.renderedStyles.imgScaleY.previous,
  //   								x: this.dragDirection === 'left' ? -1*this.renderedStyles.imgTranslation.previous + '%' : this.renderedStyles.imgTranslation.previous + '%'
  //   							});
  //   							gsap.set(this.upcomingItem.imageGrid.DOM.images, {
  //   								transformOrigin: this.dragDirection === 'left' ? '0% 50%' : '100% 50%',
  //   								opacity: Math.abs(1-this.renderedStyles.imgOpacity.previous),
  //   								scaleX: 3-this.renderedStyles.imgScaleX.previous,
  //   								scaleY: 1.8-this.renderedStyles.imgScaleY.previous,
  //   								x: this.dragDirection === 'left' ? 150 - this.renderedStyles.imgTranslation.previous + '%' : -1*(150 - this.renderedStyles.imgTranslation.previous) + '%'
  //   							});
  //   						}
  //   
  //   						if ( !this.renderId ) {
  //   							this.renderId = requestAnimationFrame(() => this.render());
  //   						}
  //   					}
  //   					initEvents() {
  //   						this.onPointerDown = () => {
  //   							cursor.renderedStyles['scale'].current = 1.5;
  //   							cursor.showArrows();
  //   						};
  //   
  //   						this.onDragStart = () => {
  //   							if ( this.isAnimating ) return;
  //   							this.dragDirection = '';
  //   						};
  //   
  //   						this.cachedVectorMovement = {x:0,y:0};
  //   						this.onDragMove = (event, pointer, moveVector) => {
  //   							mousepos = getMousePos(event);
  //   							if ( this.isAnimating ) return;
  //   							
  //   							if ( moveVector.x != this.cachedVectorMovement.x ) {
  //   								this.currentDirection = moveVector.x > this.cachedVectorMovement.x ? 'right' : 'left';
  //   								this.cachedVectorMovement = moveVector;
  //   							}
  //   
  //   							if ( this.dragDirection === '' ) {
  //   								this.menuItems[this.current].hideExplore();
  //   								this.dragDirection = moveVector.x > 0 ? 'right' : 'left';
  //   								
  //   								if ( this.dragDirection === 'right' && this.current === 0 || this.dragDirection === 'left' && this.current === this.menuItemsTotal - 1 ) {
  //   									this.amountToMove = this.minDrag;
  //   								}
  //   								else {
  //   									this.upcomingIdx = this.dragDirection === 'left' ? this.current+1 : this.current-1;
  //   									this.currentItem = this.menuItems[this.current];
  //   									this.upcomingItem = this.menuItems[this.upcomingIdx];
  //   									this.amountToMove = Math.abs((this.currentItem.rect.left + this.currentItem.rect.width/2) - (this.upcomingItem.rect.left + this.upcomingItem.rect.width/2));
  //   								}
  //   							}
  //   							this.dragPosition = MathUtils.lineEq(this.amountToMove, 0, winsize.width, 0, this.draggie.position.x);
  //   							this.renderedStyles.menuTranslation.current = this.dragPosition + this.currentPosition;
  //   							this.renderedStyles.letterTranslation.current = MathUtils.lineEq(100, 0, winsize.width, 0, this.dragDirection === 'left' ? Math.min(this.draggie.position.x, 0) : Math.max(this.draggie.position.x, 0));
  //   							this.renderedStyles.imgOpacity.current = MathUtils.lineEq(0, 1, winsize.width, 0, this.dragDirection === 'left' ? Math.abs(Math.min(this.draggie.position.x, 0)) : Math.abs(Math.max(this.draggie.position.x, 0)));
  //   							this.renderedStyles.imgScaleX.current = MathUtils.lineEq(2, 1, winsize.width, 0, this.dragDirection === 'left' ? Math.abs(Math.min(this.draggie.position.x, 0)) : Math.abs(Math.max(this.draggie.position.x, 0)));
  //   							this.renderedStyles.imgScaleY.current = MathUtils.lineEq(0.8, 1, winsize.width, 0, this.dragDirection === 'left' ? Math.abs(Math.min(this.draggie.position.x, 0)) : Math.abs(Math.max(this.draggie.position.x, 0)));
  //   							this.renderedStyles.imgTranslation.current = MathUtils.lineEq(150, 0, winsize.width, 0, this.dragDirection === 'left' ? Math.abs(Math.min(this.draggie.position.x, 0)) : Math.abs(Math.max(this.draggie.position.x, 0)));
  //   						};
  //   
  //   						this.onPointerUp = () => {
  //   							cursor.renderedStyles['scale'].current = 1;
  //   							cursor.hideArrows();
  //   						};
  //   
  //   						this.onDragEnd = () => {
  //   							if ( !this.isAnimating ) {
  //   								this.isAnimating = true;
  //   
  //   								if ( this.renderId ) {
  //   									window.cancelAnimationFrame(this.renderId);
  //   									this.renderId = undefined;
  //   								}
  //   
  //   								if ( Math.abs(this.dragPosition) <= this.minDrag || this.dragDirection !== this.currentDirection ) {
  //   									this.menuItems[this.current].showExplore();
  //   
  //   									this.renderedStyles.menuTranslation.current = this.renderedStyles.menuTranslation.previous = this.currentPosition;
  //   									this.renderedStyles.letterTranslation.current = this.renderedStyles.letterTranslation.previous = 0;
  //   									this.renderedStyles.imgOpacity.current = this.renderedStyles.imgOpacity.previous = 1;
  //   									this.renderedStyles.imgScaleX.current = this.renderedStyles.imgScaleX.previous = 1;
  //   									this.renderedStyles.imgScaleY.current = this.renderedStyles.imgScaleY.previous = 1;
  //   									this.renderedStyles.imgTranslation.current = this.renderedStyles.imgTranslation.previous = 0;
  //   
  //   									const tl = gsap.timeline({
  //   										onComplete: () => {
  //   											this.renderId = requestAnimationFrame(() => this.render());
  //   											this.currentItem = undefined;
  //   											this.upcomingItem = undefined;
  //   											this.isAnimating = false;
  //   										}
  //   									})
  //   									.to(this.DOM.menu, {
  //   										duration: ANIMATION_SETTINGS.menu.duration,
  //   										ease: ANIMATION_SETTINGS.menu.ease,
  //   										x: this.currentPosition
  //   									}, 0);
  //   
  //   									if ( this.currentItem && this.upcomingItem ) {
  //   										tl
  //   										.to(this.currentItem.letters, {
  //   											duration: ANIMATION_SETTINGS.letters.duration,
  //   											ease: ANIMATION_SETTINGS.letters.ease,
  //   											x: '-100%'
  //   										}, 0)
  //   										.to(this.upcomingItem.letters, {
  //   											duration: ANIMATION_SETTINGS.letters.duration,
  //   											ease: ANIMATION_SETTINGS.letters.ease,
  //   											x: '0%'
  //   										}, 0)
  //   										.to(this.currentItem.imageGrid.DOM.images, {
  //   											duration: ANIMATION_SETTINGS.images.duration,
  //   											ease: ANIMATION_SETTINGS.images.ease,
  //   											opacity: 1,
  //   											scaleX: 1,
  //   											scaleY: 1,
  //   											x: '0%'
  //   										}, 0)
  //   										.to(this.upcomingItem.imageGrid.DOM.images, {
  //   											duration: ANIMATION_SETTINGS.images.duration,
  //   											ease: ANIMATION_SETTINGS.images.ease,
  //   											opacity: 0,
  //   											scaleX: 2,
  //   											scaleY: 0.8,
  //   											x: this.dragDirection === 'left' ? '150%' : '-150%'
  //   										}, 0);
  //   									}
  //   								}
  //   								else {
  //   									this.menuItems[this.upcomingIdx].showExplore();
  //   
  //   									this.currentPosition 
  //   										= this.renderedStyles.menuTranslation.current = this.renderedStyles.menuTranslation.previous 
  //   										= this.dragDirection === 'left' ? 
  //   											this.currentPosition - this.amountToMove : 
  //   											this.currentPosition + this.amountToMove;
  //   									
  //   									this.renderedStyles.letterTranslation.current = this.renderedStyles.letterTranslation.previous = 0;
  //   									this.renderedStyles.imgOpacity.current = this.renderedStyles.imgOpacity.previous = 1;
  //   									this.renderedStyles.imgScaleX.current = this.renderedStyles.imgScaleX.previous = 1;
  //   									this.renderedStyles.imgScaleY.current = this.renderedStyles.imgScaleY.previous = 1;
  //   									this.renderedStyles.imgTranslation.current = this.renderedStyles.imgTranslation.previous = 0;
  //   
  //   									const tl = gsap.timeline({
  //   										onComplete: () => {
  //   											this.renderId = requestAnimationFrame(() => this.render());
  //   											this.currentItem.unsetCurrent();
  //   											this.upcomingItem.setCurrent();
  //   											this.current = this.upcomingIdx;
  //   											this.currentItem = undefined;
  //   											this.upcomingItem = undefined;
  //   											this.isAnimating = false;
  //   										}
  //   									})
  //   									.to(this.DOM.menu, {
  //   										duration: ANIMATION_SETTINGS.menu.duration,
  //   										ease: ANIMATION_SETTINGS.menu.ease,
  //   										x: this.currentPosition
  //   									}, 0)
  //   									.to(this.currentItem.letters, {
  //   										duration: ANIMATION_SETTINGS.letters.duration,
  //   										ease: ANIMATION_SETTINGS.letters.ease,
  //   										x: '0%'
  //   									}, 0)
  //   									.to(this.upcomingItem.letters, {
  //   										duration: ANIMATION_SETTINGS.letters.duration,
  //   										ease: ANIMATION_SETTINGS.letters.ease,
  //   										x: '-100%'
  //   									}, 0)
  //   									.to(this.currentItem.imageGrid.DOM.images, {
  //   										duration: ANIMATION_SETTINGS.images.duration,
  //   										ease: ANIMATION_SETTINGS.images.ease,
  //   										opacity: 0,
  //   										scaleX: 2,
  //   										scaleY: 0.8,
  //   										x: this.dragDirection === 'left' ? '-150%' : '150%'
  //   									}, 0)
  //   									.to(this.upcomingItem.imageGrid.DOM.images, {
  //   										duration: ANIMATION_SETTINGS.images.duration,
  //   										ease: ANIMATION_SETTINGS.images.ease,
  //   										opacity: 1,
  //   										scaleX: 1,
  //   										scaleY: 1,
  //   										x: '0%'
  //   									}, 0);
  //   								}
  //   							}
  //   
  //   							this.dragPosition = 0;
  //   							this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
  //   							this.dragDirection = '';
  //   						};
  //   
  //   						this.draggie.on('pointerDown', this.onPointerDown);
  //   						this.draggie.on('dragStart', this.onDragStart);
  //   						this.draggie.on('dragMove', this.onDragMove);
  //   						this.draggie.on('pointerUp', this.onPointerUp);
  //   						this.draggie.on('dragEnd', this.onDragEnd);
  //   						
  //   						for ( let menuItem of this.menuItems ) {
  //   							menuItem.DOM.explore.addEventListener('click', () => this.showContent());
  //   						}
  //   
  //   						this.DOM.backToMenuCtrl.addEventListener('click', () => this.hideContent());
  //   						window.addEventListener('resize', () => this.resize());
  //   					}
  //   					showBackCtrl() {
  //   						return this.toggleBackCtrl('show');
  //   					}
  //   					hideBackCtrl() {
  //   						return this.toggleBackCtrl('hide');
  //   					}
  //   					toggleBackCtrl(action = 'show') {
  //   						return new Promise((resolve) => {
  //   							gsap.to(this.DOM.backToMenuCtrl, {
  //   								duration: ANIMATION_SETTINGS.backCtrl.duration,
  //   								ease: ANIMATION_SETTINGS.backCtrl.ease,
  //   								startAt: action === 'hide' ? null : {x: '100%'},
  //   								opacity: action === 'hide' ? 0 : 1,
  //   								x: action === 'hide' ? '-100%' : '0%',
  //   								onComplete: resolve
  //   							});
  //   						});
  //   					}
  //   					showContent() {
  //   						if ( this.isAnimating ) return;
  //   						this.isAnimating = true;
  //   
  //   						if ( this.renderId ) {
  //   							window.cancelAnimationFrame(this.renderId);
  //   							this.renderId = undefined;
  //   						}
  //   
  //   						this.DOM.pagePreview.classList.remove('page--preview');
  //   
  //   						let promises = [];
  //   						promises.push(this.menuItems[this.current].imageGrid.collapse());
  //   						promises.push(this.menuItems[this.current].hideExplore());
  //   						for (let item of this.menuItems) {
  //   							promises.push(item.hide());
  //   						}
  //   						promises.push(this.showBackCtrl());
  //   						
  //   						Promise.all(promises).then(() => this.isAnimating = false);
  //   					}
  //   					hideContent() {
  //   						if ( this.isAnimating ) return;
  //   						this.isAnimating = true;
  //   
  //   						scrollIt(0, 300, 'easeOutQuad', () => {
  //   							this.DOM.pagePreview.classList.add('page--preview');
  //   							this.renderId = requestAnimationFrame(() => this.render());
  //   
  //   							let promises = [];
  //   							promises.push(this.menuItems[this.current].imageGrid.spread(true));
  //   							promises.push(this.menuItems[this.current].showExplore());
  //   							for (let item of this.menuItems) {
  //   								promises.push(item.show());
  //   							}
  //   							promises.push(this.hideBackCtrl());
  //   							
  //   							Promise.all(promises).then(() => {
  //   								this.isAnimating = false;
  //   							});
  //   						});
  //   					}
  //   				}
  //   
  //   				// Global Constants and Setup Configurations
  //   				const ANIMATION_SETTINGS = {
  //   					menu: {duration: 0.8, ease: "power2.out"},
  //   					letters: {duration: 0.8, ease: "power2.out"},
  //   					images: {duration: 1, ease: "power4.out"},
  //   					grid: {duration: 0.8, ease: "expo.out"},
  //   					allMenuLettersToggle: {duration: 0.8, ease: "expo.out"},
  //   					explore: {duration: 0.6, ease: "expo.out"},
  //   					backCtrl: {duration: 0.6, ease: "expo.out"},
  //   					cursor: {duration: 1, ease: "expo.out"},
  //   				};
  //   				
  //   				const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //   				[...document.querySelectorAll('a'), document.querySelector('button')].forEach((link) => {
  //   					link.addEventListener('mouseenter', () => cursor.enter());
  //   					link.addEventListener('mouseleave', () => cursor.leave());
  //   				});
  //   
  //   				// Unified Page Preloader
  //   				const preloadImages = () => {
  //   					return new Promise((resolve) => {
  //   						imagesLoaded(document.querySelectorAll('.grid__item'), {background: true}, resolve);
  //   					});
  //   				};
  //   				
  //   				const preloadFonts = () => {
  //   					return document.fonts.ready;
  //   				};
  //   
  //   				Promise.all([
  //   					preloadImages(),
  //   					preloadFonts()  
  //   				]).then(() => {
  //   					const menu = new Menu(document.querySelector('.menu-wrap'));
  //   					document.body.classList.remove('loading');
  //   				});
  //   			}
  //   		
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-draggable-menu-with-grid-previews" ref={raiz}>
      <main>
      			
      			<div className="frame">
      				<div className="frame__pagetitle">Draggable Menu with Grid Previews</div>
      			</div>
      
      			
      			<div className="page page--preview">
      				<div className="grid-wrap">
      					
      					<div className="grid grid--layout-1">
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem2})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem3})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem4})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem5})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem6})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem7})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem8})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem9})`}}></div></div>
      					</div>
      
      					
      					<div className="grid grid--layout-2">
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem10})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem11})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem12})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem13})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem14})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem15})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem16})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem17})`}}></div></div>
      					</div>
      
      					
      					<div className="grid grid--layout-3">
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem18})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem19})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem20})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem21})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem22})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem23})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem24})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem25})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem26})`}}></div></div>
      					</div>
      
      					
      					<div className="grid grid--layout-4">
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem27})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem28})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem29})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem30})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem31})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem32})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem33})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem34})`}}></div></div>
      					</div>
      
      					
      					<div className="grid grid--layout-5">
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem35})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem36})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem37})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem38})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem39})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem40})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem41})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem42})`}}></div></div>
      						<div className="grid__item-wrap"><div className="grid__item" style={{backgroundImage: `url(${s.imagem43})`}}></div></div>
      					</div>
      
      					
      					<button className="gridback" aria-label="Go Back" onClick={s.onClick}>
      						<svg width="27px" height="15px" viewBox="0 0 27 15">
      							<path d="M1.469 6.75l-.719.719 7.938 6.937.718-.719L1.47 6.75zM8.594.531L.75 7.375l.688.688L9.28 1.218 8.594.53zM1.406 6.938v1h24.75v-1H1.406z" fill="var(--acento)"/>
      						</svg>
      					</button>
      				</div>
      			</div>
      
      			
      			<div className="menu-wrap">
      				<div className="menu-draggable"></div>
      				<nav className="menu">
      					<div className="menu__item">
      						<a className="menu__item-link">{s.acao}</a>
      						<a className="menu__item-explore">{s.acao2}</a>
      					</div>
      					<div className="menu__item">
      						<a className="menu__item-link">{s.acao3}</a>
      						<a className="menu__item-explore">{s.acao4}</a>
      					</div>
      					<div className="menu__item">
      						<a className="menu__item-link">{s.acao5}</a>
      						<a className="menu__item-explore">{s.acao6}</a>
      					</div>
      					<div className="menu__item">
      						<a className="menu__item-link">{s.acao7}</a>
      						<a className="menu__item-explore">{s.acao8}</a>
      					</div>
      					<div className="menu__item">
      						<a className="menu__item-link">{s.acao9}</a>
      						<a className="menu__item-explore">{s.acao10}</a>
      					</div>
      				</nav>
      			</div>
      		</main>
      
      		
      		<div className="cursor">
      			<div className="cursor__inner cursor__inner--circle">
      				<div className="cursor__side cursor__side--left"></div>
      				<div className="cursor__side cursor__side--right"></div>
      			</div>
      		</div>
    </section>
  );
}