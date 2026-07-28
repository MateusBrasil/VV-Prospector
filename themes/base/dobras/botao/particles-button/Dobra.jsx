"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/particles-button
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
  //       (function(global, factory) {
  //           if (typeof exports === 'object' && typeof module !== 'undefined') {
  //               module.exports = factory(require('animejs'));
  //           } else if (typeof define === 'function' && define.amd) {
  //               define(['animejs'], factory);
  //           } else {
  //               global.Particles = factory(global.anime);
  //           }
  //       }(this, (function(anime) {
  //           'use strict';
  //   
  //           function Particles(element, options) {
  //               this.el = getElement(element);
  //               this.options = extend({color: getCSSValue(this.el, 'background-color')}, this.defaults, options);
  //               this.init();
  //           }
  //   
  //           Particles.prototype = {
  //               defaults: {
  //                   type: 'circle',
  //                   style: 'fill',
  //                   canvasPadding: 150,
  //                   duration: 1000,
  //                   easing: 'easeInOutCubic',
  //                   direction: 'left',
  //                   size: function() { return Math.floor((Math.random() * 3) + 1); },
  //                   speed: function() { return rand(4); },
  //                   particlesAmountCoefficient: 3,
  //                   oscillationCoefficient: 20
  //               },
  //               init: function () {
  //                   this.particles = [];
  //                   this.frame = null;
  //                   this.canvas = document.createElement('canvas');
  //                   this.ctx = this.canvas.getContext('2d');
  //                   this.canvas.className = 'particles-canvas';
  //                   this.canvas.style.display = 'none';
  //                   
  //                   this.wrapper = document.createElement('div');
  //                   this.wrapper.className = 'particles-wrapper';
  //                   this.el.parentNode.insertBefore(this.wrapper, this.el);
  //                   this.wrapper.appendChild(this.el);
  //                   
  //                   this.parentWrapper = document.createElement('div');
  //                   this.parentWrapper.className = 'particles';
  //                   this.wrapper.parentNode.insertBefore(this.parentWrapper, this.wrapper);
  //                   this.parentWrapper.appendChild(this.wrapper);
  //                   this.parentWrapper.appendChild(this.canvas);
  //               },
  //               loop: function () {
  //                   this.updateParticles();
  //                   this.renderParticles();
  //                   if (this.isAnimating()) {
  //                       this.frame = requestAnimationFrame(this.loop.bind(this));
  //                   }
  //               },
  //               updateParticles: function () {
  //                   var p;
  //                   for (var i = 0; i < this.particles.length; i++) {
  //                       p = this.particles[i];
  //                       if (p.life > p.death) {
  //                           this.particles.splice(i, 1);
  //                       } else {
  //                           p.x += p.speed;
  //                           p.y = this.o.oscillationCoefficient * Math.sin(p.counter * p.increase);
  //                           p.life++;
  //                           p.counter += this.disintegrating ? 1 : -1;
  //                       }
  //                   }
  //                   if (!this.particles.length) {
  //                       this.pause();
  //                       this.canvas.style.display = 'none';
  //                       if (is.fnc(this.o.complete)) {
  //                           this.o.complete();
  //                       }
  //                   }
  //               },
  //               renderParticles: function () {
  //                   this.ctx.clearRect(0, 0, this.width, this.height);
  //                   var p;
  //                   for (var i = 0; i < this.particles.length; i++) {
  //                       p = this.particles[i];
  //                       if (p.life < p.death) {
  //                           this.ctx.translate(p.startX, p.startY);
  //                           this.ctx.rotate(p.angle * Math.PI / 180);
  //                           this.ctx.globalAlpha = this.disintegrating ? 1 - p.life / p.death : p.life / p.death;
  //                           this.ctx.fillStyle = this.ctx.strokeStyle = p.color;
  //                           this.ctx.beginPath();
  //                           
  //                           if ( this.o.type === 'circle' ) {
  //                               this.ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
  //                           }
  //                           else if ( this.o.type === 'triangle' ) {
  //                               this.ctx.moveTo(p.x, p.y);
  //                               this.ctx.lineTo(p.x+p.size, p.y+p.size);
  //                               this.ctx.lineTo(p.x+p.size, p.y-p.size);
  //                           }
  //                           else if ( this.o.type === 'rectangle' ){
  //                               this.ctx.rect(p.x, p.y, p.size, p.size);
  //                           }
  //                           
  //                           if ( this.o.style === 'fill' ) {
  //                               this.ctx.fill();
  //                           }
  //                           else if ( this.o.style === 'stroke' ) {
  //                               this.ctx.closePath();
  //                               this.ctx.stroke();
  //                           }
  //                           
  //                           this.ctx.globalAlpha = 1;
  //                           this.ctx.rotate(-p.angle * Math.PI / 180);
  //                           this.ctx.translate(-p.startX, -p.startY);
  //                       }
  //                   }
  //               },
  //               play: function () {
  //                   this.frame = requestAnimationFrame(this.loop.bind(this));
  //               },
  //               pause: function () {
  //                   cancelAnimationFrame(this.frame);
  //                   this.frame = null;
  //               },
  //               addParticle: function (options) {
  //                   var frames = this.o.duration * 60 / 1000;
  //                   var speed = is.fnc(this.o.speed) ? this.o.speed() : this.o.speed;
  //                   var color = is.fnc(this.o.color) ? this.o.color() : this.o.color;            
  //                   this.particles.push({
  //                       startX: options.x,
  //                       startY: options.y,
  //                       x: this.disintegrating ? 0 : speed * -frames,
  //                       y: 0,
  //                       color: color,
  //                       angle: rand(360),
  //                       counter: this.disintegrating ? 0 : frames,
  //                       increase: Math.PI * 2 / 100,
  //                       life: 0,
  //                       death: this.disintegrating ? (frames - 20) + Math.random() * 40 : frames,
  //                       speed: speed,
  //                       size: is.fnc(this.o.size) ? this.o.size() : this.o.size
  //                   });
  //               },
  //               addParticles: function (rect, progress) {
  //                   var progressDiff = this.disintegrating ? progress - this.lastProgress : this.lastProgress - progress;
  //                   this.lastProgress = progress;
  //                   var x = this.options.canvasPadding;
  //                   var y = this.options.canvasPadding;
  //                   var progressValue = (this.isHorizontal() ? rect.width : rect.height) * progress + progressDiff * (this.disintegrating ? 100 : 220);
  //                   if (this.isHorizontal()) {
  //                       x += this.o.direction === 'left' ? progressValue : rect.width - progressValue;
  //                   } else {
  //                       y += this.o.direction === 'top' ? progressValue : rect.height - progressValue;
  //                   }
  //                   var i = Math.floor(this.o.particlesAmountCoefficient * (progressDiff * 100 + 1));
  //                   if (i > 0) {
  //                       while (i--) {
  //                           this.addParticle({
  //                               x: x + (this.isHorizontal() ? 0 : rect.width * Math.random()),
  //                               y: y + (this.isHorizontal() ? rect.height * Math.random() : 0)
  //                           });
  //                       }
  //                   }
  //                   if (!this.isAnimating()) {
  //                       this.canvas.style.display = 'block';
  //                       this.play();
  //                   }
  //               },
  //               addTransforms: function (value) {
  //                   var translateProperty = this.isHorizontal() ? 'translateX' : 'translateY';
  //                   var translateValue = this.o.direction === 'left' || this.o.direction === 'top' ? value : -value;
  //                   this.wrapper.style[transformString] = translateProperty + '('+ translateValue +'%)';
  //                   this.el.style[transformString] = translateProperty + '('+ -translateValue +'%)';
  //               },
  //               disintegrate: function (options) {
  //                   if (!this.isAnimating()) {
  //                       this.disintegrating = true;
  //                       this.lastProgress = 0;
  //                       this.setup(options);
  //                       var _ = this;
  //                       this.animate(function(anim) {
  //                           var value = anim.animatables[0].target.value;
  //                           _.addTransforms(value);
  //                           if (_.o.duration) {
  //                               _.addParticles(_.rect, value / 100, true);
  //                           }
  //                       });
  //                   }
  //               },
  //               integrate: function (options) {
  //                   if (!this.isAnimating()) {
  //                       this.disintegrating = false;
  //                       this.lastProgress = 1;
  //                       this.setup(options);
  //                       var _ = this;
  //                       this.animate(function(anim) {
  //                           var value = anim.animatables[0].target.value;
  //                           setTimeout(function() {
  //                               _.addTransforms(value);
  //                           }, _.o.duration);
  //                           if (_.o.duration) {
  //                               _.addParticles(_.rect, value / 100, true);
  //                           }
  //                       });
  //                   }
  //               },
  //               setup: function (options) {
  //                   this.o = extend({}, this.options, options);
  //                   this.wrapper.style.visibility = 'visible';
  //                   if (this.o.duration) {
  //                       this.rect = this.el.getBoundingClientRect();
  //                       this.width = this.canvas.width = this.o.width || this.rect.width + this.o.canvasPadding * 2;
  //                       this.height = this.canvas.height = this.o.height || this.rect.height + this.o.canvasPadding * 2;
  //                   }
  //               },
  //               animate: function (update) {
  //                   var _ = this;
  //                   anime({
  //                       targets: {value: _.disintegrating ? 0 : 101},
  //                       value: _.disintegrating ? 101 : 0,
  //                       duration: _.o.duration,
  //                       easing: _.o.easing,
  //                       begin: _.o.begin,
  //                       update: update,
  //                       complete: function() {
  //                           if (_.disintegrating) {
  //                               _.wrapper.style.visibility = 'hidden';
  //                           }
  //                           if (is.fnc(_.o.complete)) {
  //                               _.o.complete();
  //                           }
  //                       }
  //                   });
  //               },
  //               isAnimating: function () {
  //                   return !!this.frame;
  //               },
  //               isHorizontal: function () {
  //                   return this.o.direction === 'left' || this.o.direction === 'right';
  //               }
  //           };
  //   
  //           // Funções Utilitárias
  //   
  //           var is = {
  //               arr: function (a) { return Array.isArray(a); },
  //               str: function (a) { return typeof a === 'string'; },
  //               fnc: function (a) { return typeof a === 'function'; }
  //           };
  //   
  //           function stringToHyphens(str) {
  //               return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  //           }
  //   
  //           function getCSSValue(el, prop) {
  //               if (prop in el.style) {
  //                   return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
  //               }
  //           }
  //   
  //           var t = 'transform';
  //           var transformString = (getCSSValue(document.body, t) ? t : '-webkit-' + t);
  //   
  //           function extendSingle(target, source) {
  //               for (var key in source)
  //                   target[key] = is.arr(source[key]) ? source[key].slice(0) : source[key];
  //               return target;
  //           }
  //   
  //           function extend(target) {
  //               if (!target) target = {};
  //               for (var i = 1; i < arguments.length; i++)
  //                   extendSingle(target, arguments[i]);
  //               return target;
  //           }
  //   
  //           function rand(value) {
  //               return Math.random() * value - value / 2;
  //           }
  //   
  //           function getElement(element) {
  //               return is.str(element) ? document.querySelector(element) : element;
  //           }
  //   
  //           return Particles;
  //   
  //       })));
  //       
  //   
  //           document.addEventListener('DOMContentLoaded', () => {
  //               const bttn = document.getElementById('main-button');
  //               const bttnBack = document.getElementById('reset-button');
  //   
  //               // Configurações do efeito de partículas (Tema original 9)
  //               const particlesOpts = {
  //                   duration: 500,
  //                   easing: 'easeOutQuad',
  //                   speed: 0.1,
  //                   particlesAmountCoefficient: 10,
  //                   oscillationCoefficient: 80
  //               };
  //   
  //               // Ação disparada quando a animação de desintegração termina
  //               particlesOpts.complete = function() {
  //                   if (!buttonVisible) {
  //                       anime.remove(bttnBack);
  //                       anime({ 
  //                           targets: bttnBack, 
  //                           duration: 300, 
  //                           easing: 'easeOutQuint', 
  //                           opacity: 1, 
  //                           scale: [0, 1] 
  //                       });
  //                       bttnBack.style.pointerEvents = 'auto';
  //                   }
  //               };
  //   
  //               // Criação da instância de partículas
  //               const particles = new Particles(bttn, particlesOpts);
  //               let buttonVisible = true;
  //   
  //               // Ao clicar no botão principal (Desintegração)
  //               bttn.addEventListener('click', () => {
  //                   if (!particles.isAnimating() && buttonVisible) {
  //                       particles.disintegrate();
  //                       buttonVisible = false;
  //                   }
  //               });
  //   
  //               // Ao clicar no botão de reposição (Reintegração do botão original)
  //               bttnBack.addEventListener('click', () => {
  //                   if (!particles.isAnimating() && !buttonVisible) {
  //                       anime.remove(bttnBack);
  //                       anime({ 
  //                           targets: bttnBack, 
  //                           duration: 300, 
  //                           easing: 'easeOutQuint', 
  //                           opacity: 0, 
  //                           scale: 0 
  //                       });
  //                       bttnBack.style.pointerEvents = 'none';
  //                       
  //                       // Reconstrói o botão com uma animação suave
  //                       particles.integrate({ duration: 800, easing: 'easeOutSine' });
  //                       buttonVisible = true;
  //                   }
  //               });
  //           });
  //       
  // }, []);
  return (
    <section className="dobra" data-dobra="botao-particles-button" ref={raiz}>
      <div className="demo-stage">
              
              <button className="action" aria-label="reiniciar" id="reset-button" onClick={s.onClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                  </svg>
              </button>
              
              
              <button className="particles-button" id="main-button" onClick={s.onClick}>{s.acao}</button>
          </div>
    </section>
  );
}