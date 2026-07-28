"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-3
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: webgl).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import Commons from "./classes/Commons";
  //   import * as THREE from "three";
  //   import WebGLText from "./classes/WebGLText";
  //   import PostProcessing from "./classes/PostProcessing";
  //   
  //   /**
  //    * Main entry-point.
  //    * Creates Commons instance, Postprocessing, Scene & WebGLTexts
  //    */
  //   class App {
  //     private commons!: Commons;
  //     private postProcessing!: PostProcessing;
  //   
  //     private scene!: THREE.Scene;
  //   
  //     private texts!: Array<WebGLText>;
  //   
  //     constructor() {
  //       document.addEventListener("DOMContentLoaded", async () => {
  //         await document.fonts.ready; // Important to wait for fonts to load when animating any texts.
  //         document.body.classList.remove("loading");
  //   
  //         this.commons = Commons.getInstance();
  //         this.commons.init();
  //   
  //         this.createScene();
  //         this.createWebGLTexts();
  //         this.createPostProcessing();
  //         this.addEventListeners();
  //   
  //         this.update();
  //       });
  //     }
  //   
  //     private createScene() {
  //       this.scene = new THREE.Scene();
  //     }
  //   
  //     private createWebGLTexts() {
  //       const texts = document.querySelectorAll('[data-animation="webgl-text"]');
  //   
  //       if (texts) {
  //         this.texts = Array.from(texts).map(
  //           (el) =>
  //             new WebGLText({
  //               element: el as HTMLElement,
  //               scene: this.scene,
  //             })
  //         );
  //       }
  //     }
  //   
  //     private createPostProcessing() {
  //       this.postProcessing = new PostProcessing({ scene: this.scene });
  //     }
  //   
  //     /**
  //      * The main raf loop handler of the App
  //      * The update function to be called on each frame of the browser.
  //      * Calls update() on Commons, WebGLTexts and Postprocessing
  //      */
  //     private update() {
  //       this.commons.update();
  //   
  //       if (this.texts) {
  //         this.texts.forEach((el) => el.update());
  //       }
  //   
  //       // Don't need line below as we're rendering everything using EffectComposer.
  //       // this.commons.renderer.render(this.scene, this.commons.camera);
  //   
  //       this.postProcessing.update();
  //   
  //       window.requestAnimationFrame(this.update.bind(this));
  //     }
  //   
  //     private onResize() {
  //       this.commons.onResize();
  //   
  //       if (this.texts) {
  //         this.texts.forEach((el) => el.onResize());
  //       }
  //   
  //       this.postProcessing.onResize();
  //     }
  //   
  //     private addEventListeners() {
  //       window.addEventListener("resize", this.onResize.bind(this));
  //     }
  //   }
  //   
  //   export default new App();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-3" ref={raiz}>
      <main>
      
            <div className="content">
              <div className="container">
                <section className="section__heading">
                  <h3 data-animation="webgl-text" className="text__2">{s.subtitulo}</h3>
                  <h2 data-animation="webgl-text" className="text__1">{s.titulo}</h2>
                </section>
                <section className="section__main__content">
                  <p data-animation="webgl-text" className="text__2">{s.texto}</p>
                  <p data-animation="webgl-text" className="text__2">{s.texto2}</p>
                  <p data-animation="webgl-text" className="text__2">{s.texto3}</p>
                </section>
                <section className="section__footer">
                  <p data-animation="webgl-text" className="text__3">{s.texto4}</p>
                </section>
              </div>
            </div>
          </main>
    </section>
  );
}