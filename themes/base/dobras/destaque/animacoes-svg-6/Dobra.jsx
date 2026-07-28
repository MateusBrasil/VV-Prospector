"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-svg/animacoes-svg-6
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
  //   /**
  //    * Linear interpolation
  //    * @param {Number} a - first value to interpolate
  //    * @param {Number} b - second value to interpolate 
  //    * @param {Number} n - amount to interpolate
  //    */
  //   const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   
  //   /**
  //    * Gets the cursor position
  //    * @param {Event} ev - mousemove event
  //    */
  //   const getCursorPos = ev => {
  //       return { 
  //           x : ev.clientX, 
  //           y : ev.clientY 
  //       };
  //   };
  //   
  //   /**
  //    * Map number x from range [a, b] to [c, d] 
  //    * @param {Number} x - changing value
  //    * @param {Number} a 
  //    * @param {Number} b
  //    * @param {Number} c
  //    * @param {Number} d
  //    */
  //   const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
  //   
  //   /**
  //    * Distance between point A(x1,y1) and B(x2,y2)
  //    * @param {Number} x1 
  //    * @param {Number} x2
  //    * @param {Number} y1
  //    * @param {Number} y2
  //    */
  //   const distance = (x1,x2,y1,y2) => {
  //       var a = x1 - x2;
  //       var b = y1 - y2;
  //       return Math.hypot(a,b);
  //   };
  //   
  //   /**
  //    * Calculates the viewport size
  //    */
  //   const calcWinsize = () => {
  //       return {
  //           width: window.innerWidth, 
  //           height: window.innerHeight
  //       }
  //   }
  //   
  //   // Viewport size
  //   let winsize = calcWinsize();
  //   // Re-calculate on resize
  //   window.addEventListener('resize', () => winsize = calcWinsize());
  //   
  //   // Track the cursor position
  //   let cursor = {x: winsize.width/2, y: winsize.height/2};
  //   let cachedCursor = cursor; 
  //   window.addEventListener('mousemove', ev => cursor = getCursorPos(ev));
  //   
  //   /**
  //    * Class representing an SVG image that follows the cursor 
  //    * and gets "distorted" as the cursor moves faster.
  //    */
  //   class SVGImageFilterEffect {
  //       // DOM elements
  //       DOM = {
  //           // Main element (SVG element)
  //           el: null,
  //           // the SVG image
  //           image: null,
  //           // feDisplacementMap element
  //           feDisplacementMapEl: null,
  //       };
  //       // option defaults
  //       defaults = {
  //           // How much to translate and rotate the image
  //           // Also the range of the displacementScale values
  //           valuesFromTo: {
  //               transform: {
  //                   x: [-120,120],
  //                   y: [-120,120],
  //                   rz: [-10,10]
  //               },
  //               displacementScale: [0, 400],
  //           },
  //           // The "amt" is the amount to interpolate. 
  //           // With interpolation, we can achieve a smooth animation effect when moving the cursor. 
  //           amt: {
  //               transform: 0.1,
  //               displacementScale: 0.06,
  //           },
  //       };
  //       // Values that change when moving the cursor (transform and feDisplacementMap scale values) 
  //       imgValues = {
  //           imgTransforms: {x: 0, y: 0, rz: 0},
  //           displacementScale: 0,
  //       };
  //   
  //       /**
  //        * Constructor.
  //        * @param {Element} DOM_el - the SVG element
  //        * @param {JSON} options
  //        */
  //       constructor(DOM_el, options) {
  //           this.DOM.el = DOM_el;
  //           this.DOM.image = this.DOM.el.querySelector('image');
  //           this.DOM.feDisplacementMapEl = this.DOM.el.querySelector('feDisplacementMap');
  //   
  //           this.options = Object.assign(this.defaults, options);
  //           
  //           requestAnimationFrame(() => this.render());
  //       }
  //       /**
  //        * Loop / Interpolation
  //        */
  //       render() {
  //           // Apply interpolated values (smooth effect)
  //           this.imgValues.imgTransforms.x = lerp(this.imgValues.imgTransforms.x, map(cursor.x, 0, winsize.width, this.options.valuesFromTo.transform.x[0], this.options.valuesFromTo.transform.x[1]), this.options.amt.transform);
  //           this.imgValues.imgTransforms.y = lerp(this.imgValues.imgTransforms.y, map(cursor.y, 0, winsize.height, this.options.valuesFromTo.transform.y[0], this.options.valuesFromTo.transform.y[1]), this.options.amt.transform);
  //           this.imgValues.imgTransforms.rz = lerp(this.imgValues.imgTransforms.rz, map(cursor.x, 0, winsize.width, this.options.valuesFromTo.transform.rz[0], this.options.valuesFromTo.transform.rz[1]), this.options.amt.transform);
  //           
  //           this.DOM.el.style.transform = `translateX(${(this.imgValues.imgTransforms.x)}px) translateY(${this.imgValues.imgTransforms.y}px) rotateZ(${this.imgValues.imgTransforms.rz}deg)`;    
  //           
  //           const cursorTravelledDistance = distance(cachedCursor.x, cursor.x, cachedCursor.y, cursor.y);
  //           this.imgValues.displacementScale = lerp(this.imgValues.displacementScale, map(cursorTravelledDistance, 0, 200, this.options.valuesFromTo.displacementScale[0], this.options.valuesFromTo.displacementScale[1]), this.options.amt.displacementScale);
  //           this.DOM.feDisplacementMapEl.scale.baseVal = this.imgValues.displacementScale;
  //   
  //           cachedCursor = cursor;
  //           
  //           // loop...
  //           requestAnimationFrame(() => this.render());
  //       }
  //   }
  //   
  //   // Initialize trail effect
  //   new SVGImageFilterEffect(document.querySelector('#theSVG'));
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-animacoes-svg-6" ref={raiz}>
      <main>
      			<div className="frame">
      				<h1 className="frame__title">{s.titulo}</h1>
      				<nav className="frame__links"><a href={s.destino || '#'}>{s.acao}</a><a href={s.destino2 || '#'}>{s.acao2}</a>
      				</nav>
      			</div>
      			<div className="content">
      				<svg id="theSVG" width="100%" height="100%" viewBox="0 0 600 750">
      					<filter id="imgFilter">
      						<feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="5" seed="4" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence1"/>
      						<feDisplacementMap in="SourceGraphic" in2="turbulence1" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap3"/>
      					</filter>
      					<g>
      						<image xlinkHref="img/1.jpg" x="150" y="187.5" width="300" height="375" filter="url(#imgFilter)"/>
      					</g>
      				</svg>
      			</div>
      		</main>
    </section>
  );
}