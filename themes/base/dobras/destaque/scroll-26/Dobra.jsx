"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-26
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
  //   (function() {
  //     const wrapper = document.getElementById("fold-effect");
  //     const btn = document.getElementById("btn-debug");
  //   
  //     const folds = Array.from(document.getElementsByClassName("fold"));
  //   
  //     const baseContent = document.getElementById("base-content");
  //   
  //     const toggleDebug = () => {
  //       wrapper.classList.toggle("debug");
  //     };
  //     btn.addEventListener("click", toggleDebug);
  //   
  //     let state = {
  //       disposed: false,
  //       targetScroll: 0,
  //       scroll: 0
  //     };
  //   
  //     function lerp(current, target, speed = 0.1, limit = 0.001) {
  //       let change = (target - current) * speed;
  //       if (Math.abs(change) < limit) {
  //         change = target - current;
  //       }
  //       return change;
  //     }
  //     let scaleFix = 0.992;
  //   
  //     class FoldedDom {
  //       constructor(wrapper, folds = null, scrollers = null) {
  //         this.wrapper = wrapper;
  //         this.folds = folds;
  //         this.scrollers = [];
  //       }
  //       setContent(baseContent, createScrollers = true) {
  //         const folds = this.folds;
  //         if (!folds) return;
  //   
  //         let scrollers = [];
  //   
  //         for (let i = 0; i < folds.length; i++) {
  //           const fold = folds[i];
  //           const copyContent = baseContent.cloneNode(true);
  //           copyContent.id = "";
  //           let scroller;
  //           if (createScrollers) {
  //             let sizeFixEle = document.createElement("div");
  //             sizeFixEle.classList.add("fold-size-fix");
  //             // sizeFixEle.style.transform = `scaleY(${scaleFix})`;
  //   
  //             scroller = document.createElement("div");
  //             scroller.classList.add("fold-scroller");
  //             sizeFixEle.append(scroller);
  //             fold.append(sizeFixEle);
  //           } else {
  //             scroller = this.scrollers[i];
  //           }
  //           scroller.append(copyContent);
  //   
  //           scrollers[i] = scroller;
  //         }
  //         this.scrollers = scrollers;
  //       }
  //       updateStyles(scroll, skewAmp, rotationAmp) {
  //         const folds = this.folds;
  //         const scrollers = this.scrollers;
  //   
  //         for (let i = 0; i < folds.length; i++) {
  //           const scroller = scrollers[i];
  //   
  //           // Scroller fixed so its aligned
  //           // scroller.style.transform = `translateY(${100 * -i}%)`;
  //           // And the content is the one that scrolls
  //           scroller.children[0].style.transform = `translateY(${scroll}px)`;
  //         }
  //       }
  //     }
  //   
  //     let insideFold;
  //   
  //     const centerFold = folds[Math.floor(folds.length / 2)];
  //     let tick = () => {
  //       if (state.disposed) return;
  //   
  //       // Calculate the scroll based on how much the content is outside the centerFold
  //       document.body.style.height =
  //         insideFold.scrollers[0].children[0].clientHeight -
  //         centerFold.clientHeight +
  //         window.innerHeight +
  //         "px";
  //   
  //       state.targetScroll = -(
  //         document.documentElement.scrollTop || document.body.scrollTop
  //       );
  //       state.scroll += lerp(state.scroll, state.targetScroll, 0.1, 0.0001);
  //   
  //       insideFold.updateStyles(state.scroll);
  //       // setScrollStyles(state.currentY);
  //   
  //       requestAnimationFrame(tick);
  //     };
  //     insideFold = new FoldedDom(wrapper, folds);
  //     insideFold.setContent(baseContent);
  //   
  //     tick();
  //   
  //     // Preload fonts
  //     const preloadFonts = () => {
  //       return new Promise((resolve, reject) => {
  //         WebFont.load({
  //           typekit: {
  //             id: 'ofv7fvi'
  //           },
  //           active: resolve
  //         });
  //       });
  //     };
  //   
  //     preloadFonts().then(() => document.body.classList.remove('loading'));
  //   })();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-26" ref={raiz}>
      <main>
              <div className="message">Some message for mobile (if needed).</div>
              <div className="frame">
                  <h1 className="frame__title">{s.titulo}</h1>
             
            
                  <div className="frame__demos">
                      <a href="index.html" className="frame__demo frame__demo--current">{s.acao}</a>
                      <a href="index2.html" className="frame__demo">{s.acao2}</a><a href="index3.html" className="frame__demo">{s.acao3}</a><a href="index4.html" className="frame__demo">{s.acao4}</a><a href="index5.html" className="frame__demo">{s.acao5}</a>
                  </div>
              </div>
              <div className="content">
                  <div className="fold-content" id="base-content">
                      
                      <div className="content__line">
                          <span className="type type--1">{s.rotulo}</span>
                          <span className="type type--2">{s.rotulo2}</span>
                          <span className="type type--1">{s.rotulo3}</span>
                          <span className="type type--2">{s.rotulo4}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--3">{s.rotulo5}</span>
                          <span className="type type--4">{s.rotulo6}</span>
                          <span className="type type--3">{s.rotulo7}</span>
                          <span className="type type--4">{s.rotulo8}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--6">{s.rotulo9}</span>
                          <span className="type type--1">{s.rotulo10}</span>
                          <span className="type type--6">{s.rotulo11}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--5">{s.rotulo12}</span>
                          <span className="type type--2">{s.rotulo13}</span>
                          <span className="type type--5">{s.rotulo14}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--1">{s.rotulo15}</span>
                          <span className="type type--7">{s.rotulo16}</span>
                          <span className="type type--1">{s.rotulo17}</span>
                          <span className="type type--7">{s.rotulo18}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--3">{s.rotulo19}</span>
                          <span className="type type--4">{s.rotulo20}</span>
                          <span className="type type--3">{s.rotulo21}</span>
                          <span className="type type--4">{s.rotulo22}</span>
                          <span className="type type--3">{s.rotulo23}</span>
                          <span className="type type--4">{s.rotulo24}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--6">{s.rotulo25}</span>
                          <span className="type type--1">{s.rotulo26}</span>
                          <span className="type type--6">{s.rotulo27}</span>
                          <span className="type type--1">{s.rotulo28}</span>
                          <span className="type type--6">{s.rotulo29}</span>
                          <span className="type type--1">{s.rotulo30}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--5">{s.rotulo31}</span>
                          <span className="type type--2">{s.rotulo32}</span>
                          <span className="type type--5">{s.rotulo33}</span>
                          <span className="type type--2">{s.rotulo34}</span>
                          <span className="type type--5">{s.rotulo35}</span>
                          <span className="type type--2">{s.rotulo36}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--1">{s.rotulo37}</span>
                          <span className="type type--2">{s.rotulo38}</span>
                          <span className="type type--1">{s.rotulo39}</span>
                          <span className="type type--2">{s.rotulo40}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--3">{s.rotulo41}</span>
                          <span className="type type--4">{s.rotulo42}</span>
                          <span className="type type--3">{s.rotulo43}</span>
                          <span className="type type--4">{s.rotulo44}</span>
                          <span className="type type--3">{s.rotulo45}</span>
                          <span className="type type--4">{s.rotulo46}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--6">{s.rotulo47}</span>
                          <span className="type type--1">{s.rotulo48}</span>
                          <span className="type type--6">{s.rotulo49}</span>
                          <span className="type type--1">{s.rotulo50}</span>
                          <span className="type type--6">{s.rotulo51}</span>
                          <span className="type type--1">{s.rotulo52}</span>
                      </div>
                      <div className="content__line">
                          <span className="type type--5">{s.rotulo53}</span>
                          <span className="type type--2">{s.rotulo54}</span>
                          <span className="type type--5">{s.rotulo55}</span>
                          <span className="type type--2">{s.rotulo56}</span>
                          <span className="type type--5">{s.rotulo57}</span>
                          <span className="type type--2">{s.rotulo58}</span>
                      </div>
                  </div>
                  <div className="screen" id="fold-effect">
                      <div className="wrapper-3d">
                          <div className="fold fold-before"></div>
                          <div className="fold fold-center"></div>
                          <div className="fold fold-after"></div>
                      </div>
                  </div>
                  <button className="btn-debug" id="btn-debug" style={{visibility: 'hidden'}} onClick={s.onClick}>{s.acao6}</button>
              </div>
          </main>
    </section>
  );
}