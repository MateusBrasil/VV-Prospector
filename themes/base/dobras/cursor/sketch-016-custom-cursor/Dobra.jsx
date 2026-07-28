"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/sketch-016-custom-cursor
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
  //   		// Safety check for modern browser variables
  //   		document.documentElement.className = "js";
  //   		const supportsCssVars = () => {
  //   			const t = document.createElement("style");
  //   			t.innerHTML = ":root { --tmp-var: bold; }";
  //   			document.head.appendChild(t);
  //   			const e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
  //   			t.parentNode.removeChild(t);
  //   			return e;
  //   		};
  //   		if (!supportsCssVars()) {
  //   			alert("Please view this demo in a modern browser that supports CSS Variables.");
  //   		}
  //   
  //   		/* Linear interpolation helper */
  //   		const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   
  //   		/* Map values helper */
  //   		const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
  //   
  //   		/* Track accurate cursor position */
  //   		const getCursorPos = ev => {
  //   			return { 
  //   				x : ev.clientX, 
  //   				y : ev.clientY 
  //   			};
  //   		};
  //   
  //   		let cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  //   		window.addEventListener('mousemove', ev => cursor = getCursorPos(ev));
  //   
  //   		/**
  //   		 * Class representing the complete custom cursor system
  //   		 */
  //   		class Cursor {
  //   			constructor(Dom_elems, triggerSelector = 'a') {
  //   				this.DOM = { elements: Dom_elems };
  //   				this.cursorElements = [];
  //   
  //   				[...this.DOM.elements].forEach(el => this.cursorElements.push(new CursorElement(el)));
  //   
  //   				this.triggerSelector = triggerSelector;
  //   				this.bindTriggers();
  //   			}
  //   
  //   			bindTriggers() {
  //   				[...document.querySelectorAll(this.triggerSelector)].forEach(link => {
  //   					link.addEventListener('mouseenter', () => this.enter());
  //   					link.addEventListener('mouseleave', () => this.leave());
  //   				});
  //   			}
  //   
  //   			enter() {
  //   				for (const el of this.cursorElements) {
  //   					el.enter();
  //   				}
  //   			}
  //   
  //   			leave() {
  //   				for (const el of this.cursorElements) {
  //   					el.leave();
  //   				}
  //   			}
  //   		}
  //   
  //   		/**
  //   		 * Class representing a single Cursor SVG element
  //   		 */
  //   		class CursorElement {
  //   			constructor(DOM_el) {
  //   				this.DOM = {
  //   					el: DOM_el,
  //   					inner: DOM_el.querySelector('.cursor__inner'),
  //   					feTurbulence: document.querySelector('#cursor-filter > feTurbulence')
  //   				};
  //   				
  //   				this.filterId = '#cursor-filter';
  //   				this.radiusOnEnter = 32; // Expand radius size dynamically on hover
  //   				this.opacityOnEnter = 1;
  //   				this.radius = parseFloat(this.DOM.inner.getAttribute('r')) || 10;
  //   				
  //   				// Definir o tamanho fixo de 120px do SVG para evitar bugs de sincronização inicial
  //   				this.cursorSize = 120;
  //   				
  //   				this.renderedStyles = {
  //   					tx: { previous: cursor.x - this.cursorSize / 2, current: cursor.x - this.cursorSize / 2, amt: 0.15 },
  //   					ty: { previous: cursor.y - this.cursorSize / 2, current: cursor.y - this.cursorSize / 2, amt: 0.15 },
  //   					radius: { previous: this.radius, current: this.radius, amt: 0.15 },
  //   					opacity: { previous: 0, current: 0, amt: 0.15 }
  //   				};
  //   
  //   				this.primitiveValues = { turbulence: 0 };
  //   
  //   				this.createFilterTimeline();
  //   
  //   				// Smooth fade-in sequence when the first mouse movement registers
  //   				const onMouseMoveEv = () => {
  //   					this.renderedStyles.tx.previous = this.renderedStyles.tx.current = cursor.x - this.cursorSize / 2;
  //   					this.renderedStyles.ty.previous = this.renderedStyles.ty.current = cursor.y - this.cursorSize / 2;
  //   					this.renderedStyles.opacity.current = 1;
  //   					
  //   					// Boot requestAnimationFrame loop
  //   					requestAnimationFrame(() => this.render());
  //   					window.removeEventListener('mousemove', onMouseMoveEv);
  //   				};
  //   				window.addEventListener('mousemove', onMouseMoveEv);
  //   			}
  //   
  //   			createFilterTimeline() {
  //   				const turbulenceValues = { from: 0.12, to: 0.28 };
  //   
  //   				this.filterTimeline = gsap.timeline({
  //   					paused: true,
  //   					onStart: () => {
  //   						// Randomize seed dynamically on trigger to keep distortion unique
  //   						this.DOM.feTurbulence.setAttribute('seed', Math.round(gsap.utils.random(1, 40)));
  //   						this.DOM.inner.style.filter = `url(${this.filterId})`;
  //   						this.renderedStyles['opacity'].current = 1;
  //   					},
  //   					onUpdate: () => {
  //   						this.DOM.feTurbulence.setAttribute('baseFrequency', this.primitiveValues.turbulence);
  //   						// Smoothly decay opacity as turbulence morphs towards extreme points
  //   						this.renderedStyles['opacity'].current = this.renderedStyles['opacity'].previous = map(
  //   							this.primitiveValues.turbulence, 
  //   							turbulenceValues.from, 
  //   							turbulenceValues.to, 
  //   							1, 
  //   							0
  //   						);
  //   					},
  //   					onComplete: () => {
  //   						this.DOM.inner.style.filter = 'none';
  //   						this.renderedStyles['radius'].current = this.renderedStyles['radius'].previous = this.radius;
  //   					}
  //   				})
  //   				.to(this.primitiveValues, { 
  //   					duration: 1.4,
  //   					ease: 'power2.out',
  //   					startAt: { turbulence: turbulenceValues.from },
  //   					turbulence: turbulenceValues.to
  //   				});
  //   			}
  //   
  //   			enter() {
  //   				this.renderedStyles['radius'].current = this.radiusOnEnter;
  //   				this.renderedStyles['opacity'].current = this.opacityOnEnter;
  //   				this.filterTimeline.restart();
  //   			}
  //   
  //   			leave() {
  //   				this.DOM.inner.style.filter = 'none';
  //   				this.filterTimeline.kill();
  //   				this.renderedStyles['radius'].current = this.radius;
  //   				this.renderedStyles['opacity'].current = 1;
  //   			}
  //   
  //   			render() {
  //   				// Offset center calculations usando o tamanho estático correto
  //   				this.renderedStyles['tx'].current = cursor.x - this.cursorSize / 2;
  //   				this.renderedStyles['ty'].current = cursor.y - this.cursorSize / 2;
  //   
  //   				// Smooth interpolation calculations
  //   				for (const key in this.renderedStyles) {
  //   					this.renderedStyles[key].previous = lerp(
  //   						this.renderedStyles[key].previous, 
  //   						this.renderedStyles[key].current, 
  //   						this.renderedStyles[key].amt
  //   					);
  //   				}
  //   
  //   				// Apply styles to customized DOM variables
  //   				this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
  //   				this.DOM.inner.setAttribute('r', this.renderedStyles['radius'].previous);
  //   				this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;
  //   
  //   				requestAnimationFrame(() => this.render());
  //   			}
  //   		}
  //   
  //   		// Initialize Custom Cursor instance
  //   		const customCursor = new Cursor(document.querySelectorAll('.cursor'));
  //   	
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-sketch-016-custom-cursor" ref={raiz}>
      <svg className="cursor" width="120" height="120" viewBox="0 0 120 120">
      		<defs>
      			<filter id="cursor-filter" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
      				
      				<feTurbulence type="fractalNoise" seed="1" baseFrequency="0" numOctaves="1" result="warp" />
      				
      				<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="35" in="SourceGraphic" />
      			</filter>
      		</defs>
      		<circle className="cursor__inner" cx="60" cy="60" r="10" />
      	</svg>
      
      	<main>
      		
      		<div className="frame">
      			<h1 className="frame__title">{s.titulo}</h1>
      		</div>
      
      		
      		<nav className="menu">
      			<a className="menu__item" href="#rupa">{s.acao}</a>
      			<a className="menu__item" href="#vedana">{s.acao2}</a>
      			<a className="menu__item" href="#samjna">{s.acao3}</a>
      			<a className="menu__item" href="#vijnana">{s.acao4}</a>
      		</nav>
      	</main>
      
      	
      	<div className="touch-alert">
      		📱 Custom liquid hover states are designed for mouse/trackpad interfaces. Connect a pointer to feel the fluid deformation filter!
      	</div>
    </section>
  );
}