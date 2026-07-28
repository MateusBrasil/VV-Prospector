"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/infinite-slider
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
  //       document.addEventListener("DOMContentLoaded", (event) => {
  //         
  //         // Registrando plugins do GSAP
  //         gsap.registerPlugin(Draggable, InertiaPlugin);
  //   
  //         function initSlider(){
  //           const wrapper = document.querySelector('[data-slider="list"]');  
  //           const slides = gsap.utils.toArray('[data-slider="slide"]');
  //           
  //           const nextButton = document.querySelector('[data-slider="button-next"]');
  //           const prevButton = document.querySelector('[data-slider="button-prev"]');
  //           
  //           const totalElement = document.querySelector('[data-slide-count="total"]');
  //           const stepElement = document.querySelector('[data-slide-count="step"]');
  //           const stepsParent = stepElement.parentElement;
  //           
  //           let activeElement;
  //           const totalSlides = slides.length;
  //   
  //           // Atualiza dinamicamente o número total de slides na UI
  //           totalElement.textContent = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
  //   
  //           // Gera os elementos numéricos do step de forma vertical e dinâmica para animação por translação
  //           stepsParent.innerHTML = ''; 
  //           slides.forEach((_, index) => {
  //             const stepClone = document.createElement('h2');
  //             stepClone.className = "count-heading";
  //             stepClone.setAttribute('data-slide-count', 'step');
  //             stepClone.textContent = index + 1 < 10 ? `0${index + 1}` : index + 1;
  //             stepsParent.appendChild(stepClone);
  //           });
  //   
  //           // Seleciona todos os steps recém criados
  //           const allSteps = stepsParent.querySelectorAll('[data-slide-count="step"]');
  //           
  //           // Loop infinito horizontal customizado da GreenSock
  //           const loop = horizontalLoop(slides, {
  //             paused: true, 
  //             draggable: true, 
  //             center: false,
  //             onChange: (element, index) => { 
  //               // Remove classe active do slide anterior
  //               activeElement && activeElement.classList.remove("active");
  //               
  //               // Adiciona classe active ao slide corrente (ajustado com offset visual de sibiling)
  //               const nextSibling = element.nextElementSibling || slides[0]; 
  //               nextSibling.classList.add("active");
  //               activeElement = nextSibling;
  //               
  //               // Move os números do contador verticalmente com base no índice atual
  //               gsap.to(allSteps, { y: `${-100 * index}%`, ease: "power3", duration: 0.45 });
  //             }
  //           });
  //           
  //           // Transiciona ao slide clicado (aplicando o offset de -1 para alinhar perfeitamente com a margem)
  //           slides.forEach((slide, i) => slide.addEventListener("click", () => {
  //             loop.toIndex(i - 1, {ease: "power3", duration: 0.725});
  //           }));
  //           
  //           // Controladores dos botões de próximo e anterior
  //           nextButton.addEventListener("click", () => loop.next({ease: "power3", duration: 0.725}));
  //           prevButton.addEventListener("click", () => loop.previous({ease: "power3", duration: 0.725}));
  //         }
  //   
  //         // Função Auxiliar GSAP para Loop Infinito Horizontal Responsivo e com Suporte a Drag e Inércia
  //         function horizontalLoop(items, config) {
  //           let timeline;
  //           items = gsap.utils.toArray(items);
  //           config = config || {};
  //           
  //           gsap.context(() => { 
  //             let onChange = config.onChange,
  //               lastIndex = 0,
  //               tl = gsap.timeline({
  //                 repeat: config.repeat, 
  //                 onUpdate: onChange && function() {
  //                   let i = tl.closestIndex();
  //                   if (lastIndex !== i) {
  //                     lastIndex = i;
  //                     onChange(items[i], i);
  //                   }
  //                 }, 
  //                 paused: config.paused, 
  //                 defaults: {ease: "none"}, 
  //                 onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
  //               }),
  //               length = items.length,
  //               startX = items[0].offsetLeft,
  //               times = [],
  //               widths = [],
  //               spaceBefore = [],
  //               xPercents = [],
  //               curIndex = 0,
  //               indexIsDirty = false,
  //               center = config.center,
  //               pixelsPerSecond = (config.speed || 1) * 100,
  //               snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), 
  //               timeOffset = 0,
  //               container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
  //               totalWidth,
  //               getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
  //               populateWidths = () => {
  //                 let b1 = container.getBoundingClientRect(), b2;
  //                 items.forEach((el, i) => {
  //                   widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
  //                   xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
  //                   b2 = el.getBoundingClientRect();
  //                   spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
  //                   b1 = b2;
  //                 });
  //                 gsap.set(items, { 
  //                   xPercent: i => xPercents[i]
  //                 });
  //                 totalWidth = getTotalWidth();
  //               },
  //               timeWrap,
  //               populateOffsets = () => {
  //                 timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
  //                 center && times.forEach((t, i) => {
  //                   times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
  //                 });
  //               },
  //               getClosest = (values, value, wrap) => {
  //                 let i = values.length,
  //                   closest = 1e10,
  //                   index = 0, d;
  //                 while (i--) {
  //                   d = Math.abs(values[i] - value);
  //                   if (d > wrap / 2) {
  //                     d = wrap - d;
  //                   }
  //                   if (d < closest) {
  //                     closest = d;
  //                     index = i;
  //                   }
  //                 }
  //                 return index;
  //               },
  //               populateTimeline = () => {
  //                 let i, item, curX, distanceToStart, distanceToLoop;
  //                 tl.clear();
  //                 for (i = 0; i < length; i++) {
  //                   item = items[i];
  //                   curX = xPercents[i] / 100 * widths[i];
  //                   distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
  //                   distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
  //                   tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
  //                     .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
  //                     .add("label" + i, distanceToStart / pixelsPerSecond);
  //                   times[i] = distanceToStart / pixelsPerSecond;
  //                 }
  //                 timeWrap = gsap.utils.wrap(0, tl.duration());
  //               },
  //               refresh = (deep) => {
  //                 let progress = tl.progress();
  //                 tl.progress(0, true);
  //                 populateWidths();
  //                 deep && populateTimeline();
  //                 populateOffsets();
  //                 deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
  //               },
  //               onResize = () => refresh(true),
  //               proxy;
  //             
  //             gsap.set(items, {x: 0});
  //             populateWidths();
  //             populateTimeline();
  //             populateOffsets();
  //             window.addEventListener("resize", onResize);
  //             
  //             function toIndex(index, vars) {
  //               vars = vars || {};
  //               (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); 
  //               let newIndex = gsap.utils.wrap(0, length, index),
  //                 time = times[newIndex];
  //               if (time > tl.time() !== index > curIndex && index !== curIndex) { 
  //                 time += tl.duration() * (index > curIndex ? 1 : -1);
  //               }
  //               if (time < 0 || time > tl.duration()) {
  //                 vars.modifiers = {time: timeWrap};
  //               }
  //               curIndex = newIndex;
  //               vars.overwrite = true;
  //               gsap.killTweensOf(proxy);    
  //               return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
  //             }
  //             
  //             tl.toIndex = (index, vars) => toIndex(index, vars);
  //             tl.closestIndex = setCurrent => {
  //               let index = getClosest(times, tl.time(), tl.duration());
  //               if (setCurrent) {
  //                 curIndex = index;
  //                 indexIsDirty = false;
  //               }
  //               return index;
  //             };
  //             tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
  //             tl.next = vars => toIndex(tl.current()+1, vars);
  //             tl.previous = vars => toIndex(tl.current()-1, vars);
  //             tl.times = times;
  //             tl.progress(1, true).progress(0, true); 
  //             
  //             if (config.reversed) {
  //               tl.vars.onReverseComplete();
  //               tl.reverse();
  //             }
  //             
  //             // Configurações de arrasto (Draggable) acopladas ao loop infinito
  //             if (config.draggable && typeof(Draggable) === "function") {
  //               proxy = document.createElement("div");
  //               let wrap = gsap.utils.wrap(0, 1),
  //                 ratio, startProgress, draggable, lastSnap, initChangeX, wasPlaying,
  //                 align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
  //                 syncIndex = () => tl.closestIndex(true);
  //               
  //               if (typeof(InertiaPlugin) === "undefined") {
  //                 console.warn("InertiaPlugin required for momentum-based scrolling.");
  //               }
  //               
  //               draggable = Draggable.create(proxy, {
  //                 trigger: items[0].parentNode,
  //                 type: "x",
  //                 onPressInit() {
  //                   let x = this.x;
  //                   gsap.killTweensOf(tl);
  //                   wasPlaying = !tl.paused();
  //                   tl.pause();
  //                   startProgress = tl.progress();
  //                   refresh();
  //                   ratio = 1 / totalWidth;
  //                   initChangeX = (startProgress / -ratio) - x;
  //                   gsap.set(proxy, {x: startProgress / -ratio});
  //                 },
  //                 onDrag: align,
  //                 onThrowUpdate: align,
  //                 overshootTolerance: 0,
  //                 inertia: true,
  //                 snap(value) {
  //                   if (Math.abs(startProgress / -ratio - this.x) < 10) {
  //                     return lastSnap + initChangeX;
  //                   }
  //                   let time = -(value * ratio) * tl.duration(),
  //                     wrappedTime = timeWrap(time),
  //                     snapTime = times[getClosest(times, wrappedTime, tl.duration())],
  //                     dif = snapTime - wrappedTime;
  //                   Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
  //                   lastSnap = (time + dif) / tl.duration() / -ratio;
  //                   return lastSnap;
  //                 },
  //                 onRelease() {
  //                   syncIndex();
  //                   draggable.isThrowing && (indexIsDirty = true);
  //                 },
  //                 onThrowComplete: () => {
  //                   syncIndex();
  //                   wasPlaying && tl.play();
  //                 }
  //               })[0];
  //               tl.draggable = draggable;
  //             }
  //             tl.closestIndex(true);
  //             lastIndex = curIndex;
  //             onChange && onChange(items[curIndex], curIndex);
  //             timeline = tl;
  //             return () => window.removeEventListener("resize", onResize); 
  //           });
  //           return timeline;
  //         }
  //         
  //         initSlider();
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-infinite-slider" ref={raiz}>
      <section className="cloneable">
          
          <div className="overlay">
            <div className="overlay-inner">
              
              <div className="overlay-count-row">
                <div className="count-column">
                  <h2 data-slide-count="step" className="count-heading">01</h2>
                </div>
                <div className="count-row-divider"></div>
                <div className="count-column">
                  <h2 data-slide-count="total" className="count-heading">04</h2>
                </div>
              </div>
              
              
              <div className="overlay-nav-row">
                
                <button aria-label="previous slide" data-slider="button-prev" className="button" onClick={s.onClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow">
                    <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
                  </svg>
                  <div className="button-overlay">
                    <div className="overlay-corner"></div>
                    <div className="overlay-corner top-right"></div>
                    <div className="overlay-corner bottom-left"></div>
                    <div className="overlay-corner bottom-right"></div>
                  </div>
                </button>
                
                
                <button aria-label="next slide" data-slider="button-next" className="button" onClick={s.onClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow next">
                    <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
                  </svg>
                  <div className="button-overlay">
                    <div className="overlay-corner"></div>
                    <div className="overlay-corner top-right"></div>
                    <div className="overlay-corner bottom-left"></div>
                    <div className="overlay-corner bottom-right"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
      
          
          <div className="main">
            <div className="slider-wrap">
              <div data-slider="list" className="slider-list">
                
                
                <div data-slider="slide" className="slider-slide">
                  <div className="slide-inner">
                    <img src={s.imagem} loading="lazy" alt="Imagem alternada 1" />
                    <div className="slide-caption">
                      <div className="caption-dot"></div>
                      <p className="caption">{s.texto}</p>
                    </div>
                  </div>
                </div>
                
                
                <div data-slider="slide" className="slider-slide active">
                  <div className="slide-inner">
                    <img src={s.imagem2} loading="lazy" alt="Imagem alternada 2" />
                    <div className="slide-caption">
                      <div className="caption-dot"></div>
                      <p className="caption">{s.texto2}</p>
                    </div>
                  </div>
                </div>
                
                
                <div data-slider="slide" className="slider-slide">
                  <div className="slide-inner">
                    <img src={s.imagem3} loading="lazy" alt="Imagem alternada 1" />
                    <div className="slide-caption">
                      <div className="caption-dot"></div>
                      <p className="caption">{s.texto3}</p>
                    </div>
                  </div>
                </div>
                
                
                <div data-slider="slide" className="slider-slide">
                  <div className="slide-inner">
                    <img src={s.imagem4} loading="lazy" alt="Imagem alternada 2" />
                    <div className="slide-caption">
                      <div className="caption-dot"></div>
                      <p className="caption">{s.texto4}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}