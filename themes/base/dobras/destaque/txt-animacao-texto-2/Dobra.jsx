"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/textos/animacao-texto-2
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import NormalizeWheel from "normalize-wheel";
  //   import AutoBind from "auto-bind";
  //   
  //   import Canvas from "./components/canvas";
  //   
  //   class App {
  //     constructor() {
  //       AutoBind(this);
  //   
  //       this.init();
  //       this.update();
  //       this.onResize();
  //       this.addEventListeners();
  //     }
  //   
  //     init() {
  //       this.canvas = new Canvas();
  //     }
  //   
  //     update() {
  //       this.canvas.update();
  //       requestAnimationFrame(this.update.bind(this));
  //     }
  //   
  //     onResize() {
  //       window.requestAnimationFrame(() => {
  //         if (this.canvas && this.canvas.onResize) {
  //           this.canvas.onResize();
  //         }
  //       });
  //     }
  //   
  //     onTouchDown(event) {
  //       event.stopPropagation();
  //       if (this.canvas && this.canvas.onTouchDown) {
  //         this.canvas.onTouchDown(event);
  //       }
  //     }
  //   
  //     onTouchMove(event) {
  //       event.stopPropagation();
  //       if (this.canvas && this.canvas.onTouchMove) {
  //         this.canvas.onTouchMove(event);
  //       }
  //     }
  //   
  //     onTouchUp(event) {
  //       event.stopPropagation();
  //   
  //       if (this.canvas && this.canvas.onTouchUp) {
  //         this.canvas.onTouchUp(event);
  //       }
  //     }
  //   
  //     onWheel(event) {
  //       const normalizedWheel = NormalizeWheel(event);
  //   
  //       if (this.canvas && this.canvas.onWheel) {
  //         this.canvas.onWheel(normalizedWheel);
  //       }
  //     }
  //   
  //     addEventListeners() {
  //       window.addEventListener("resize", this.onResize, { passive: true });
  //       window.addEventListener("mousedown", this.onTouchDown, {
  //         passive: true,
  //       });
  //       window.addEventListener("mouseup", this.onTouchUp, { passive: true });
  //       window.addEventListener("pointermove", this.onTouchMove, {
  //         passive: true,
  //       });
  //       window.addEventListener("touchstart", this.onTouchDown, {
  //         passive: true,
  //       });
  //       window.addEventListener("touchmove", this.onTouchMove, {
  //         passive: true,
  //       });
  //       window.addEventListener("touchend", this.onTouchUp, { passive: true });
  //       window.addEventListener("wheel", this.onWheel, { passive: true });
  //     }
  //   }
  //   
  //   export default new App();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-txt-animacao-texto-2" ref={raiz}>
      <main>
            <header className="frame">
              <h1 className="frame__title">
                3D Text Circle Animation by
                <a href={s.destino || '#'} target="_blank">{s.acao}</a>
              </h1>
              <a className="frame__back" href={s.destino2 || '#'}
                >Article</a
              >
              <a className="frame__archive" href={s.destino3 || '#'}
                >All demos</a
              >
              <a className="frame__github" href={s.destino4 || '#'}>{s.acao2}</a>
              <nav className="frame__tags">
                <a href={s.destino5 || '#'}>{s.acao3}</a>
                <a href={s.destino6 || '#'}
                  >#three.js</a
                >
                <a href={s.destino7 || '#'}>{s.acao4}</a>
              </nav>
            </header>
            <div id="app">
              <div className="container">
                <div className="wrapper"></div>
              </div>
            </div>
            <canvas id="webgl"></canvas>
            
          </main>
    </section>
  );
}