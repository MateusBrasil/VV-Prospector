"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/svg-shape-overlays-demo-2
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //           /* ==================== js/easings.js ==================== */
  //           const ease = {
  //               cubicInOut: (t) => {
  //                   return t < 0.5
  //                   ? 4.0 * t * t * t
  //                   : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  //               }
  //           }
  //   
  //           /* ==================== js/demo2.js ==================== */
  //           class ShapeOverlays {
  //               constructor(elm) {
  //                   this.elm = elm;
  //                   this.path = elm.querySelectorAll('path');
  //                   // Configurações específicas para o efeito visual da Demo 2
  //                   this.numPoints = 10;
  //                   this.duration = 900;
  //                   this.delayPointsArray = [];
  //                   this.delayPointsMax = 300;
  //                   this.delayPerPath = 60;
  //                   this.timeStart = Date.now();
  //                   this.isOpened = false;
  //                   this.isAnimating = false;
  //               }
  //               toggle() {
  //                   this.isAnimating = true;
  //                   
  //                   // Demo 2: Atraso linear para criar uma onda direcional suave
  //                   for (var i = 0; i < this.numPoints; i++) {
  //                       this.delayPointsArray[i] = (i / (this.numPoints - 1)) * this.delayPointsMax;
  //                   }
  //                   
  //                   if (this.isOpened === false) {
  //                       this.open();
  //                   } else {
  //                       this.close();
  //                   }
  //               }
  //               open() {
  //                   this.isOpened = true;
  //                   this.elm.classList.add('is-opened');
  //                   this.timeStart = Date.now();
  //                   this.renderLoop();
  //               }
  //               close() {
  //                   this.isOpened = false;
  //                   this.elm.classList.remove('is-opened');
  //                   this.timeStart = Date.now();
  //                   this.renderLoop();
  //               }
  //               updatePath(time) {
  //                   const points = [];
  //                   for (var i = 0; i < this.numPoints + 1; i++) {
  //                       points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
  //                   }
  //   
  //                   let str = '';
  //                   str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
  //                   for (var i = 0; i < this.numPoints - 1; i++) {
  //                       const p = (i + 1) / (this.numPoints - 1) * 100;
  //                       const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
  //                       str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
  //                   }
  //                   str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
  //                   return str;
  //               }
  //               render() {
  //                   if (this.isOpened) {
  //                       for (var i = 0; i < this.path.length; i++) {
  //                           this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
  //                       }
  //                   } else {
  //                       for (var i = 0; i < this.path.length; i++) {
  //                           this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
  //                       }
  //                   }
  //               }
  //               renderLoop() {
  //                   this.render();
  //                   if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
  //                       requestAnimationFrame(() => {
  //                           this.renderLoop();
  //                       });
  //                   }
  //                   else {
  //                       this.isAnimating = false;
  //                   }
  //               }
  //           }
  //   
  //           (function() {
  //               const elmHamburger = document.querySelector('.hamburger');
  //               const gNavItems = document.querySelectorAll('.global-menu__item');
  //               const elmOverlay = document.querySelector('.shape-overlays');
  //               const overlay = new ShapeOverlays(elmOverlay);
  //   
  //               elmHamburger.addEventListener('click', () => {
  //                   if (overlay.isAnimating) {
  //                       return false;
  //                   }
  //                   overlay.toggle();
  //                   if (overlay.isOpened === true) {
  //                       elmHamburger.classList.add('is-opened-navi');
  //                       for (var i = 0; i < gNavItems.length; i++) {
  //                           gNavItems[i].classList.add('is-opened');
  //                       }
  //                   } else {
  //                       elmHamburger.classList.remove('is-opened-navi');
  //                       for (var i = 0; i < gNavItems.length; i++) {
  //                           gNavItems[i].classList.remove('is-opened');
  //                       }
  //                   }
  //               });
  //           }());
  //   
  //           /* ==================== js/demo.js ==================== */
  //           {
  //               setTimeout(() => document.body.classList.add('render'), 60);
  //               const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
  //               
  //               // A navegação entre demos foi prevenida
  //               navdemos.forEach(link => link.addEventListener('click', (ev) => {
  //                   ev.preventDefault();
  //               }));
  //           }
  //       
  // }, []);
  return (
    <section className="dobra" data-dobra="menu-svg-shape-overlays-demo-2" ref={raiz}>
      <svg className="hidden">
              <symbol id="icon-arrow" viewBox="0 0 24 24">
                  <title>seta</title>
                  <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
              </symbol>
              <symbol id="icon-drop" viewBox="0 0 24 24">
                  <title>gota</title>
                  <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
              </symbol>
          </svg>
          <main className="main main--demo-2">
              <div className="content content--fixed">
                  <header className="codrops-header">
                      <div className="codrops-links">
                          <a className="codrops-icon codrops-icon--prev" href="#" title="Demonstração Anterior"><svg className="icon icon--arrow"><use xlinkHref="#icon-arrow"></use></svg></a>
                          <a className="codrops-icon codrops-icon--drop" href="#" title="Voltar ao artigo"><svg className="icon icon--drop"><use xlinkHref="#icon-drop"></use></svg></a>
                      </div>
                      <h1 className="codrops-header__title">{s.titulo}</h1>
                  </header>
                  <nav className="demos">
                      <a className="demo demo--current" href="#"><span>{s.rotulo}</span></a>
                  </nav>
              </div>
              <div className="content content--demo-2">
                  <div className="hamburger js-hover">
                      <div className="hamburger__line hamburger__line--01">
                          <div className="hamburger__line-in hamburger__line-in--01"></div>
                      </div>
                      <div className="hamburger__line hamburger__line--02">
                          <div className="hamburger__line-in hamburger__line-in--02"></div>
                      </div>
                      <div className="hamburger__line hamburger__line--03">
                          <div className="hamburger__line-in hamburger__line-in--03"></div>
                      </div>
                      <div className="hamburger__line hamburger__line--cross01">
                          <div className="hamburger__line-in hamburger__line-in--cross01"></div>
                      </div>
                      <div className="hamburger__line hamburger__line--cross02">
                          <div className="hamburger__line-in hamburger__line-in--cross02"></div>
                      </div>
                  </div>
                  <div className="demo-title demo-title--demo-2">Aurora</div>
                  <div className="global-menu">
                      <div className="global-menu__wrap">
                          <a className="global-menu__item global-menu__item--demo-2" href="#">{s.acao}</a>
                          <a className="global-menu__item global-menu__item--demo-2" href="#">{s.acao2}</a>
                          <a className="global-menu__item global-menu__item--demo-2" href="#">{s.acao3}</a>
                          <a className="global-menu__item global-menu__item--demo-2" href="#">{s.acao4}</a>
                      </div>
                  </div>
                  <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path className="shape-overlays__path"></path>
                      <path className="shape-overlays__path"></path>
                      <path className="shape-overlays__path"></path>
                  </svg>
              </div>
          </main>
    </section>
  );
}