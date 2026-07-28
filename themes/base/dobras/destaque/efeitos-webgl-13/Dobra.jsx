"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-13
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
  //   import "./style.css";
  //   import { EventEmitter } from "events"
  //   
  //   export const imagesSequenceEmitter = new EventEmitter()
  //   
  //   let loadedImages: HTMLImageElement[] = []
  //   
  //   export const loadSequenceImages = () => {
  //     const tr1_2 = []
  //     for (let i = 0; i <= 23; i++) {
  //       const fileName = `./morphing/1-2/1-2${i.toString().padStart(2, "0")}.jpg`
  //       tr1_2.push(fileName)
  //     }
  //     const tr2_3 = []
  //     for (let i = 0; i <= 23; i++) {
  //       const fileName = `./morphing/2-3/2-3${i.toString().padStart(2, "0")}.jpg`
  //       tr2_3.push(fileName)
  //     }
  //     const tr3_4 = []
  //     for (let i = 0; i <= 23; i++) {
  //       const fileName = `./morphing/3-4/3-4${i.toString().padStart(2, "0")}.jpg`
  //       tr3_4.push(fileName)
  //     }
  //     const tr4_5 = []
  //     for (let i = 0; i <= 23; i++) {
  //       const fileName = `./morphing/4-5/4-5${i.toString().padStart(2, "0")}.jpg`
  //       tr4_5.push(fileName)
  //     }
  //   
  //     const tr5_1 = []
  //     for (let i = 0; i <= 23; i++) {
  //       const fileName = `./morphing/5-1/5-1${i.toString().padStart(2, "0")}.jpg`
  //       tr5_1.push(fileName)
  //     }
  //   
  //     const images = [...tr1_2, ...tr2_3, ...tr3_4, ...tr4_5, ...tr5_1]
  //   
  //     const imagePromises = images.map((src) => {
  //       return new Promise<HTMLImageElement>((resolve) => {
  //         const img = new Image()
  //         img.src = src
  //         img.onload = () => resolve(img)
  //       })
  //     })
  //   
  //     Promise.all(imagePromises).then((imagesLoaded) => {
  //       loadedImages = [...(imagesLoaded as HTMLImageElement[])]
  //       imagesSequenceEmitter.emit("sequence-loaded")
  //     })
  //   }
  //   
  //   const removeLoadingClass = () => {
  //     document.body.classList.remove("loading");
  //   };
  //   
  //   let progress = 1
  //   
  //   export const normalize = (value: number, min: number, max: number) => {
  //     return Math.max(0, Math.min(1, (value - min) / (max - min)))
  //   }
  //   
  //   const canvas = document.querySelector("canvas") as HTMLCanvasElement
  //   
  //   canvas.width = 720
  //   canvas.height = 720
  //   const ctx = canvas.getContext("2d")
  //   
  //   imagesSequenceEmitter.on("sequence-loaded", () => {
  //     removeLoadingClass();
  //     requestAnimationFrame(render)
  //   })
  //   
  //   loadSequenceImages()
  //   
  //   let currentIndex = -1
  //   
  //   function render() {
  //     let index = Math.round(normalize(progress, 1, 6) * (loadedImages.length - 1))
  //   
  //     if (index !== currentIndex) {
  //       currentIndex = index
  //       if (!ctx || !canvas) return
  //   
  //       ctx.drawImage(
  //         loadedImages[index] as HTMLImageElement,
  //         0,
  //         0,
  //         canvas.width,
  //         canvas.height
  //       )
  //     }
  //   
  //     requestAnimationFrame(render)
  //   }
  //   
  //   let animation: number | null = null
  //   let startTime: number | null = null
  //   let startValue = 1
  //   let targetValue = 1
  //   
  //   const calculateShortestPath = (start: number, end: number): number => {
  //     // Regular difference
  //     const directDiff = end - start
  //   
  //     // Circular differences
  //     const throughTopDiff = end + 5 - start
  //     const throughBottomDiff = end - (start + 5)
  //   
  //     // Find the smallest absolute difference
  //     const diffs = [directDiff, throughTopDiff, throughBottomDiff]
  //     const absDiffs = diffs.map(Math.abs)
  //     const minDiff = Math.min(...absDiffs)
  //   
  //     return diffs[absDiffs.indexOf(minDiff)]
  //   }
  //   
  //   const progressIndicator = document.querySelector(".switcher-progress")
  //   
  //   const animate = (timestamp: number): void => {
  //     if (!startTime) {
  //       startTime = timestamp
  //     }
  //   
  //     const elapsed = timestamp - startTime
  //     const duration = 1000 // 1 second animation
  //   
  //     if (elapsed < duration) {
  //       const animprogress = elapsed / duration
  //       // Easing function for smoother animation
  //   
  //       const diff = calculateShortestPath(startValue, targetValue)
  //       let newValue = startValue + diff * animprogress
  //   
  //       // Handle wrapping
  //       if (newValue > 5) newValue = newValue - 5
  //       if (newValue < 1) newValue = newValue + 5
  //   
  //       progress = newValue
  //       animation = requestAnimationFrame(animate)
  //     } else {
  //       // Ensure we land exactly on the target
  //       progress = targetValue
  //       animation = null
  //       startTime = null
  //     }
  //   
  //     if (!progressIndicator) return
  //   
  //     progressIndicator.textContent = progress.toFixed(2)
  //   }
  //   
  //   const onClick = (target: number): void => {
  //     // Immediately stop current animation
  //     if (animation) {
  //       cancelAnimationFrame(animation)
  //     }
  //   
  //     // Start new animation from current position
  //     startTime = null
  //     startValue = progress
  //     targetValue = target
  //     animation = requestAnimationFrame(animate)
  //   }
  //   
  //   ;[...document.querySelectorAll(".switcher button")].forEach((button) => {
  //     button.addEventListener("click", (e) => {
  //       const value = parseInt(
  //         (e.currentTarget as HTMLButtonElement).getAttribute(
  //           "data-state"
  //         ) as string
  //       )
  //   
  //       onClick(value)
  //     })
  //   })
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-efeitos-webgl-13" ref={raiz}>
      <main>
            <header className="frame">
      				<h1 className="frame__title">Morphing Effect with Canvas2D <span>by <a href={s.destino || '#'}>{s.acao}</a></span></h1> 
      				<nav className="frame__links">
                <a href={s.destino2 || '#'}>{s.acao2}</a>
      				  <a href={s.destino3 || '#'}>{s.acao3}</a>
      				  <a href={s.destino4 || '#'}>{s.acao4}</a>
              </nav>
      				<nav className="frame__tags">
      					<a href={s.destino5 || '#'}>{s.acao5}</a>
      					<a href={s.destino6 || '#'}>{s.acao6}</a>
      				</nav>
      			</header>
            <div id="app">
              <div className="content">
                <div className="switcher-container">
                  <div className="switcher-progress">1.00</div>
                  <div className="switcher">
                    <div className="switcher-button-wrapper">
                      <button
                        style={{background: 'var(--base-100)'}}
                        data-state="4"
                       onClick={s.onClick}></button>
                      <p>4</p>
                    </div>
                    <div className="switcher-button-wrapper">
                      <button
                        style={{background: 'var(--base-200)'}}
                        data-state="5"
                       onClick={s.onClick}></button>
                      <p>5</p>
                    </div>
                    <div className="switcher-button-wrapper">
                      <button
                        style={{background: 'var(--base-200)'}}
                        data-state="1"
                       onClick={s.onClick}></button>
                      <p>1</p>
                    </div>
                    <div className="switcher-button-wrapper">
                      <button
                        style={{background: 'var(--base-300)'}}
                        data-state="2"
                       onClick={s.onClick}></button>
                      <p>2</p>
                    </div>
                    <div className="switcher-button-wrapper">
                      <button
                        style={{background: 'var(--base-300)'}}
                        data-state="3"
                       onClick={s.onClick}></button>
                      <p>3</p>
                    </div>
                  </div>
                </div>
                <div className="canvas-wrapper">
                  <canvas></canvas>
                </div>
              </div>
            </div>
          </main>
    </section>
  );
}