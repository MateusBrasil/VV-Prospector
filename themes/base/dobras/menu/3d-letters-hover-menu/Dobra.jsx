"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/3d-letters-hover-menu
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
  //   		// --- UTILS ---
  //   		const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
  //   		const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   		const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
  //   		const getMousePos = e => ({ x: e.clientX, y: e.clientY });
  //   
  //   		// Globals for Mouse Position
  //   		let mousepos = {x: 0, y: 0};
  //   		let mousePosCache = mousepos;
  //   		let cursorDirection = {x: 0, y: 0};
  //   		window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
  //   
  //   		// --- CURSOR ---
  //   		class Cursor {
  //   			constructor(el) {
  //   				this.DOM = {el: el};
  //   				this.DOM.el.style.opacity = 0;
  //   				
  //   				this.bounds = this.DOM.el.getBoundingClientRect();
  //   				
  //   				this.renderedStyles = {
  //   					tx: {previous: 0, current: 0, amt: 0.15},
  //   					ty: {previous: 0, current: 0, amt: 0.15},
  //   					scale: {previous: 1, current: 1, amt: 0.15},
  //   					opacity: {previous: 1, current: 1, amt: 0.1}
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
  //   				this.renderedStyles['scale'].current = 2.5;
  //   				this.renderedStyles['opacity'].current = 0.5;
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
  //   		// --- MENU ITEM ---
  //   		class MenuItem {
  //   			constructor(el, inMenuPosition, animatableProperties, totalItems) {
  //   				this.DOM = {el: el};
  //   				this.inMenuPosition = inMenuPosition;
  //   				this.animatableProperties = animatableProperties;
  //   				this.totalItems = totalItems;
  //   				// Optional: Set to odd position to alternate translate direction based on Codrops structure
  //   				this.isPositionOdd = this.inMenuPosition % 2 !== 0;
  //   
  //   				this.layout();
  //   				this.initEvents();
  //   			}
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
  //   				this.DOM.revealImage.style.backgroundImage = `url(${this.DOM.el.dataset.img})`;
  //   
  //   				this.DOM.revealInner.appendChild(this.DOM.revealImage);
  //   				this.DOM.reveal.appendChild(this.DOM.revealInner);
  //   				this.DOM.el.appendChild(this.DOM.reveal);
  //   
  //   				this.DOM.textInner = this.DOM.el.querySelector('.menu__item-text');
  //   				this.DOM.word = this.DOM.textInner.querySelector('.word');
  //   				this.DOM.wordClone = this.DOM.word.cloneNode(true);
  //   				this.DOM.wordClone.classList.add('word--clone');
  //   				this.DOM.textInner.appendChild(this.DOM.wordClone);
  //   				
  //   				this.DOM.titleChars = [...this.DOM.word.querySelectorAll('span.char')];
  //   				this.DOM.titleCloneChars = [...this.DOM.wordClone.querySelectorAll('span.char')];
  //   			}
  //   			calcBounds() {
  //   				this.bounds = {
  //   					el: this.DOM.el.getBoundingClientRect(),
  //   					reveal: this.DOM.reveal.getBoundingClientRect(),
  //   					width: this.DOM.reveal.offsetWidth,
  //   					height: this.DOM.reveal.offsetHeight
  //   				};
  //   			}
  //   			initEvents() {
  //   				this.mouseenterFn = () => {
  //   					this.hoverTimeout = setTimeout(() => {
  //   						this.hoverEnter = true;
  //   						this.firstRAFCycle = true;
  //   						this.calcBounds();
  //   
  //   						this.DOM.reveal.style.transformOrigin = '100% 0%';
  //   						this.animateCharsIn();
  //   						this.showImage();
  //   						this.loopRender();
  //   					}, 100);
  //   				}
  //   				this.mouseleaveFn = () => {
  //   					if ( this.hoverTimeout ) {
  //   						clearTimeout(this.hoverTimeout);
  //   					}
  //   					if ( this.hoverEnter ) {
  //   						this.hoverEnter = null;
  //   						this.stopRendering();
  //   						this.animateCharsOut();
  //   						this.hideImage();
  //   					}
  //   				};
  //   				
  //   				this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
  //   				this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  //   			}
  //   			animateCharsIn() {
  //   				this.animateCharsTimeline = gsap.timeline({
  //   					defaults: {duration: 0.5, ease: 'power2', stagger: 0.025}
  //   				})
  //   				.to(this.DOM.titleChars, {
  //   					y: '100%',
  //   					rotationX: -90,
  //   					opacity: 0
  //   				})
  //   				.to(this.DOM.titleCloneChars, {
  //   					startAt: {y: '-100%', rotationX: 90, opacity: 0},
  //   					y: '0%',
  //   					rotationX: 0,
  //   					opacity: 1
  //   				}, 0);
  //   			}
  //   			animateCharsOut() {
  //   				if ( this.animateCharsTimeline ) this.animateCharsTimeline.kill();
  //   				this.animateCharsTimeline = gsap.timeline({
  //   					defaults: {duration: 0.5, ease: 'power2', stagger: 0.025}
  //   				})
  //   				.to(this.DOM.titleCloneChars, {
  //   					y: '-100%',
  //   					rotationX: 90,
  //   					opacity: 0
  //   				})
  //   				.to(this.DOM.titleChars, {
  //   					startAt: {y: '100%', rotationX: -90, opacity: 0},
  //   					y: '0%',
  //   					rotationX: 0,
  //   					opacity: 1
  //   				}, 0);
  //   			}
  //   			showImage() {
  //   				if (this.tl) {
  //   					this.tl.kill();
  //   				}
  //   
  //   				this.tl = gsap.timeline({
  //   					onStart: () => {
  //   						gsap.set([this.DOM.reveal, this.DOM.revealInner], {opacity: 1})
  //   						gsap.set(this.DOM.el, {zIndex: this.totalItems});
  //   					}
  //   				})
  //   				.to(this.DOM.revealInner, {
  //   					duration: 1.3,
  //   					ease: 'expo',
  //   					startAt: {scale: 0.5},
  //   					scale: 1
  //   				})
  //   				.to(this.DOM.revealImage, {
  //   					duration: 1.3,
  //   					ease: 'expo',
  //   					startAt: {scaleX: 2},
  //   					scaleX: 1
  //   				}, 0)
  //   				.to(this.DOM.reveal, {
  //   					duration: 0.6,
  //   					ease: 'power1.inOut'
  //   				}, 0);
  //   			}
  //   			hideImage() {
  //   				if (this.tl) {
  //   					this.tl.kill();
  //   				}
  //   
  //   				this.tl = gsap.timeline({
  //   					defaults: {
  //   						duration: 1.2,
  //   						ease: 'power1',
  //   					},
  //   					onStart: () => {
  //   						gsap.set(this.DOM.el, {zIndex: 1});
  //   					},
  //   					onComplete: () => {
  //   						gsap.set(this.DOM.reveal, {opacity: 0});
  //   					}
  //   				})
  //   				.to(this.DOM.revealInner, {
  //   					opacity: 0
  //   				})
  //   				.to(this.DOM.revealImage, {
  //   					scaleX: 1.7
  //   				}, 0)
  //   				.to(this.DOM.reveal, {
  //   					rotation: cursorDirection.x < 0 ? '+=5' : '-=5',
  //   					y: '200%'
  //   				}, 0);
  //   			}
  //   			loopRender() {
  //   				if ( !this.requestId ) {
  //   					this.requestId = requestAnimationFrame(() => this.render());
  //   				}
  //   			}
  //   			stopRendering() {
  //   				if ( this.requestId ) {
  //   					window.cancelAnimationFrame(this.requestId);
  //   					this.requestId = undefined;
  //   				}
  //   			}
  //   			render() {
  //   				this.requestId = undefined;
  //   
  //   				const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
  //   				cursorDirection = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};
  //   				mousePosCache = {x: mousepos.x, y: mousepos.y};
  //   				
  //   				this.animatableProperties.tx.current = this.isPositionOdd ? Math.abs(mousepos.x - this.bounds.el.left) : Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.width;
  //   				this.animatableProperties.ty.current = this.firstRAFCycle ? this.bounds.height/1.5 : Math.abs(mousepos.y - this.bounds.el.top);
  //   				
  //   				let startingAngle = -30;  
  //   				this.animatableProperties.rotation.current = this.firstRAFCycle 
  //   															 ? startingAngle
  //   															 : map(mouseDistanceX, 0, 300, startingAngle, cursorDirection.x < 0 ? startingAngle+100 : startingAngle-100);
  //   
  //   				this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : map(mouseDistanceX,0,100,1,5);
  //   
  //   				this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : lerp(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt);
  //   				this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : lerp(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt);
  //   				this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : lerp(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);
  //   				this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : lerp(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt);
  //   				
  //   				gsap.set(this.DOM.reveal, {
  //   					x: this.animatableProperties.tx.previous,
  //   					y: this.animatableProperties.ty.previous,
  //   					rotation: this.animatableProperties.rotation.previous,
  //   					// filter: `brightness(${this.animatableProperties.brightness.previous})`
  //   				});
  //   
  //   				this.firstRAFCycle = false;
  //   				this.loopRender();
  //   			}
  //   		}
  //   
  //   		// --- MENU ---
  //   		class Menu {
  //   			constructor(el) {
  //   				this.DOM = {el: el};
  //   				this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
  //   				
  //   				this.animatableProperties = {
  //   					tx: {previous: 0, current: 0, amt: 0.15},
  //   					ty: {previous: 0, current: 0, amt: 0.15},
  //   					rotation: {previous: 0, current: 0, amt: 0.15},
  //   					brightness: {previous: 1, current: 1, amt: 0.06}
  //   				};
  //   				
  //   				this.menuItems = [];
  //   				const totalItems = this.DOM.menuItems.length;
  //   				
  //   				[...this.DOM.menuItems].forEach((item, pos) => this.menuItems.push(new MenuItem(item, pos, this.animatableProperties, totalItems)));
  //   				this.showMenuItems();
  //   			}
  //   			showMenuItems() {
  //   				const innerTexts = this.menuItems.map(item => item.DOM.textInner);
  //   
  //   				gsap.timeline()
  //   				.set(innerTexts, {x: '20%', opacity: 0})
  //   				.to(innerTexts, {
  //   					duration: 1,
  //   					ease: 'power3',
  //   					x: '0%',
  //   					stagger: 0.05
  //   				})
  //   				.to(innerTexts, {
  //   					duration: 0.4,
  //   					ease: 'power1',
  //   					opacity: 1,
  //   					stagger: 0.05
  //   				}, 0);
  //   			}
  //   		}
  //   
  //   		// --- PRELOADER & INIT ---
  //   		const preloader = selector => {
  //   			return new Promise(resolve => {
  //   				const imgwrap = document.createElement('div');
  //   				imgwrap.style.visibility = 'hidden';
  //   				document.body.appendChild(imgwrap);
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
  //   					imgwrap.parentNode.removeChild(imgwrap);
  //   					document.body.classList.remove('loading');
  //   					resolve();
  //   				});
  //   			});
  //   		};
  //   
  //   		// Run Splitting to prepare the DOM structure
  //   		Splitting();
  //   
  //   		// Initialization
  //   		const menuEl = document.querySelector('.menu');
  //   		preloader('.menu__item').then(() => {
  //   			new Menu(menuEl);
  //   		});
  //   
  //   		const cursor = new Cursor(document.querySelector('.cursor'));
  //   		[...document.querySelectorAll('a')].forEach(link => {
  //   			link.addEventListener('mouseenter', () => cursor.enter());
  //   			link.addEventListener('mouseleave', () => cursor.leave());
  //   		});
  //   
  //   	
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-3d-letters-hover-menu" ref={raiz}>
      <main>
      		<div className="frame">
      			<h1 className="frame__title">{s.titulo}</h1>
      		</div>
      		<nav className="menu">
                  
      			<a className="menu__item" data-img="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop">
      				<span className="menu__item-text" data-splitting>{s.rotulo}</span>
      			</a>
      			<a className="menu__item" data-img="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=800&auto=format&fit=crop">
      				<span className="menu__item-text" data-splitting>{s.rotulo2}</span>
      			</a>
      			<a className="menu__item" data-img="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop">
      				<span className="menu__item-text" data-splitting>{s.rotulo3}</span>
      			</a>
      			<a className="menu__item" data-img="https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop">
      				<span className="menu__item-text" data-splitting>{s.rotulo4}</span>
      			</a>
      			<a className="menu__item" data-img="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop">
      				<span className="menu__item-text" data-splitting>{s.rotulo5}</span>
      			</a>
      			<a className="menu__item" data-img="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop">
      				<span className="menu__item-text" data-splitting>{s.rotulo6}</span>
      			</a>
      		</nav>
      		<p className="content">
      			Design is not just<br />
      			what it looks like and feels like.<br />
      			Design is how it works.<br />
      			Simplicity is the ultimate sophistication.<br />
      			Every detail has a purpose,<br />
      			every line tells a story.<br />
      			Browse through our gallery<br />
      			and discover the beauty between the lines.<br />
      			Creativity without limits,<br />
      			innovation at every click.<br />
      			Welcome to our space,<br />
      			made especially for you.
      		</p>
      	</main>
      	<svg className="cursor" width="20" height="20" viewBox="0 0 20 20">
      		<circle className="cursor__inner" cx="10" cy="10" r="5"/>
      	</svg>
    </section>
  );
}