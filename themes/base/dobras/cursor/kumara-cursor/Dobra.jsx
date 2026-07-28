"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/kumara-cursor
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
  //   			/**
  //   			 * Interpolação linear (suavização de movimento)
  //   			 */
  //   			const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   
  //   			/**
  //   			 * Mapeamento de intervalo de valores
  //   			 */
  //   			const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
  //   
  //   			/**
  //   			 * Captura a posição global do rato real
  //   			 */
  //   			const getCursorPos = ev => {
  //   				return { 
  //   					x : ev.clientX, 
  //   					y : ev.clientY 
  //   				};
  //   			};
  //   
  //   			// Acompanhamento contínuo do rato real
  //   			let cursor = {x: 0, y: 0};
  //   			window.addEventListener('mousemove', ev => cursor = getCursorPos(ev));
  //   			
  //   			/**
  //   			 * Classe que gere o Cursor Personalizado
  //   			 */
  //   			class Cursor {
  //   				DOM = {
  //   					elements: null,
  //   				}
  //   				cursorElements = [];
  //   
  //   				constructor(Dom_elems, triggerSelector = 'a') {
  //   					this.DOM.elements = Dom_elems;
  //   
  //   					[...this.DOM.elements].forEach(el => this.cursorElements.push(new CursorElement(el)));
  //   
  //   					[...document.querySelectorAll(triggerSelector)].forEach(link => {
  //   						link.addEventListener('mouseenter', () => this.enter());
  //   						link.addEventListener('mouseleave', () => this.leave());
  //   					});
  //   				}
  //   
  //   				enter() {
  //   					for (const el of this.cursorElements) {
  //   						el.enter();
  //   					}
  //   				}
  //   
  //   				leave() {
  //   					for (const el of this.cursorElements) {
  //   						el.leave();
  //   					}
  //   				}
  //   			}
  //   			
  //   			/**
  //   			 * Classe que representa o círculo SVG e aplica a física de movimento e filtros
  //   			 */
  //   			class CursorElement {
  //   				DOM = {
  //   					el: null,
  //   					inner: null,
  //   					feTurbulence: null
  //   				}
  //   				radiusOnEnter = 60;
  //   				opacityOnEnter = 1;
  //   				radius;
  //   				
  //   				renderedStyles = {
  //   					tx: {previous: 0, current: 0, amt: 0.15},
  //   					ty: {previous: 0, current: 0, amt: 0.15},
  //   					radius: {previous: 20, current: 20, amt: 0.15},
  //   					opacity: {previous: 1, current: 1, amt: 0.15}
  //   				};
  //   				
  //   				rectSize; // Tamanho real do contentor SVG para cálculo de centro
  //   				filterId = '#cursor-filter';
  //   				primitiveValues = {turbulence: 0};
  //   
  //   				constructor(DOM_el) {
  //   					this.DOM.el = DOM_el;
  //   					this.DOM.inner = this.DOM.el.querySelector('.cursor__inner');
  //   					this.DOM.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`);
  //   					
  //   					this.createFilterTimeline();
  //   
  //   					// Oculta inicialmente
  //   					this.DOM.el.style.opacity = 0;
  //   					
  //   					// Previne distorções de cálculo caso o cursor comece oculto no CSS
  //   					const bounds = this.DOM.el.getBoundingClientRect();
  //   					this.rectSize = {
  //   						width: bounds.width || +this.DOM.el.getAttribute('width') || 140,
  //   						height: bounds.height || +this.DOM.el.getAttribute('height') || 140
  //   					};
  //   
  //   					// Opções personalizadas
  //   					this.radiusOnEnter = this.DOM.el.dataset.radiusEnter || this.radiusOnEnter;
  //   					this.opacityOnEnter = this.DOM.el.dataset.opacityEnter || this.opacityOnEnter;
  //   					for (const key in this.renderedStyles) {
  //   						this.renderedStyles[key].amt = this.DOM.el.dataset.amt || this.renderedStyles[key].amt;	
  //   					}
  //   
  //   					this.radius = this.DOM.inner.getAttribute('r');
  //   					this.renderedStyles['radius'].previous = this.renderedStyles['radius'].current = this.radius;
  //   					
  //   					// Ativa o cursor e inicia a animação no primeiro movimento detetado
  //   					const onMouseMoveEv = () => {
  //   						this.renderedStyles.tx.previous = this.renderedStyles.tx.current = cursor.x - this.rectSize.width / 2;
  //   						this.renderedStyles.ty.previous = this.renderedStyles.ty.current = cursor.y - this.rectSize.height / 2;
  //   						this.DOM.el.style.opacity = 1;
  //   						requestAnimationFrame(() => this.render());
  //   						window.removeEventListener('mousemove', onMouseMoveEv);
  //   					};
  //   					window.addEventListener('mousemove', onMouseMoveEv);
  //   				}
  //   
  //   				enter() {
  //   					this.renderedStyles['opacity'].current = this.opacityOnEnter;
  //   					this.filterTimeline.restart();
  //   				}
  //   
  //   				leave() {
  //   					this.DOM.inner.style.filter = 'none';
  //   					this.filterTimeline.kill();
  //   					this.renderedStyles['radius'].current = this.radius;
  //   					this.renderedStyles['opacity'].current = 1;
  //   				}
  //   
  //   				createFilterTimeline() {
  //   					const turbulenceValues = {from: 0.13, to: 0.15};
  //   
  //   					this.filterTimeline = gsap.timeline({
  //   						paused: true,
  //   						onStart: () => {
  //   							this.DOM.feTurbulence.setAttribute('seed', Math.round(gsap.utils.random(1, 20)));
  //   							this.DOM.inner.style.filter = `url(${this.filterId})`;
  //   							this.renderedStyles['opacity'].current = 1;
  //   						},
  //   						onUpdate: () => {
  //   							this.DOM.feTurbulence.setAttribute('baseFrequency', this.primitiveValues.turbulence);
  //   							this.renderedStyles['opacity'].current = this.renderedStyles['opacity'].previous = map(this.primitiveValues.turbulence, turbulenceValues.from, turbulenceValues.to, 1, 0);
  //   							this.renderedStyles['radius'].current = this.renderedStyles['radius'].previous = map(this.primitiveValues.turbulence, turbulenceValues.from, turbulenceValues.to, +this.radius, this.radiusOnEnter);
  //   						},
  //   						onComplete: () => {
  //   							this.DOM.inner.style.filter = 'none';
  //   							this.renderedStyles['radius'].current = this.renderedStyles['radius'].previous = this.radius;
  //   						}
  //   					})
  //   					.to(this.primitiveValues, { 
  //   						duration: 3,
  //   						ease: 'power4.out',
  //   						startAt: {turbulence: turbulenceValues.from},
  //   						turbulence: turbulenceValues.to
  //   					});
  //   				}
  //   
  //   				render() {
  //   					// Posição perfeitamente centralizada com base no tamanho do SVG
  //   					this.renderedStyles['tx'].current = cursor.x - this.rectSize.width / 2;
  //   					this.renderedStyles['ty'].current = cursor.y - this.rectSize.height / 2;
  //   					
  //   					for (const key in this.renderedStyles) {
  //   						this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   					}
  //   					
  //   					// Aplica a translação com suavização de movimento (efeito de atraso/follow-up)
  //   					this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px)`;
  //   					this.DOM.inner.setAttribute('r', this.renderedStyles['radius'].previous);
  //   					this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;
  //   
  //   					requestAnimationFrame(() => this.render());
  //   				}
  //   			}
  //   			
  //   			// Inicialização do script após o carregamento completo do DOM
  //   			document.addEventListener('DOMContentLoaded', () => {
  //   				new Cursor(document.querySelectorAll('.cursor'));
  //   			});
  //   		
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-kumara-cursor" ref={raiz}>
      <main>
      			
      			<div style={{paddingTop: '2.5rem'}}></div>
      			
      			<nav className="menu">
      				<a className="menu__item" href="#">{s.acao}</a>
      				<a className="menu__item" href="#">{s.acao2}</a>
      				<a className="menu__item" href="#">{s.acao3}</a>
      				<a className="menu__item" href="#">{s.acao4}</a>
      			</nav>
      
      			<div className="info-instruction">
      				Passa o cursor sobre os links para veres a distorção
      			</div>
      		</main>
      
      		
      		<svg className="cursor" width="140" height="140" viewBox="0 0 140 140">
      			<defs>
      				<filter id="cursor-filter" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
      					<feTurbulence type="fractalNoise" seed="1" baseFrequency="0" numOctaves="1" result="warp" />
      					<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="40" in="SourceGraphic" />
      				</filter>
      			</defs>
      			<circle className="cursor__inner" cx="70" cy="70" r="20"/>
      		</svg>
    </section>
  );
}