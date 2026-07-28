"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-20
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
  //   import Lenis from "lenis";
  //   import { GPU } from "./gpu.js";
  //   import { Controller } from "./controller.js";
  //   import { Cursor } from "./cursor.js";
  //   import { Preloader } from "./preloader.js";
  //   
  //   async function start() {
  //     const lenis = new Lenis({
  //       smoothWheel: true,
  //       syncTouch: true,
  //       lerp: 0.09,
  //     });
  //   
  //     // Count up while textures load and the page is built behind the overlay.
  //     const preloader = new Preloader();
  //     const counting = preloader.count();
  //   
  //     const gpu = new GPU();
  //     await gpu.init();
  //   
  //     const controller = new Controller({
  //       app: document.getElementById("app"),
  //       gpu,
  //       lenis,
  //     });
  //     await controller.start();
  //   
  //     function raf(time) {
  //       lenis.raf(time);
  //       controller.tick();
  //       gpu.update();
  //       requestAnimationFrame(raf);
  //     }
  //     requestAnimationFrame(raf);
  //   
  //     // Hold until the counter reaches 100%, then lift the overlay and, in the same
  //     // tick, play the page intro so its hidden start states are applied before the
  //     // overlay clears (no flash of resting content).
  //     await counting;
  //     controller.playIntro();
  //     preloader.reveal();
  //   
  //     const cursor = new Cursor();
  //     cursor.start();
  //   }
  //   
  //   start();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-20" ref={raiz}>
      <div id="preloader">
          <span className="preloader-count">{s.rotulo}</span>
        </div>
        <nav id="nav">
          <a href="/" data-link data-nav-key="main">{s.acao}</a>
          <a href="/index" data-link data-nav-key="index">{s.acao2}</a>
        </nav>
        <main id="app"></main>
        <div id="cursor"></div>
        <footer id="footer">
          <a href={s.destino || '#'} target="_blank" rel="noopener noreferrer">{s.acao3}</a>
          <div>
            <a href={s.destino2 || '#'} target="_blank" rel="noopener noreferrer">{s.acao4}</a>
            <a href={s.destino3 || '#'} target="_blank" rel="noopener noreferrer">{s.acao5}</a>
            <a href={s.destino4 || '#'} target="_blank" rel="noopener noreferrer">{s.acao6}</a>
          </div>
      
        </footer>
    </section>
  );
}