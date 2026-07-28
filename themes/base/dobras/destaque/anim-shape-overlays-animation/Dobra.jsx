"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/shape-overlays-animation
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    
        console.clear();
    
        let overlay = raiz.current.querySelector(".shape-overlays");
        let paths = raiz.current.querySelectorAll(".shape-overlays__path");
    
        let numPoints = 10;
        let numPaths = paths.length;
        let delayPointsMax = 0.3;
        let delayPerPath = 0.25;
        let duration = 0.9;
        let isOpened = false;
        let pointsDelay = [];
        let allPoints = [];
    
        // GSAP Timeline
        let tl = gsap.timeline({ 
          onUpdate: render,
          defaults: {
            ease: "power2.inOut",
            duration: 0.9
          }
        });
    
        for (let i = 0; i < numPaths; i++) {
          let points = [];
          allPoints.push(points);
          for (let j = 0; j < numPoints; j++) {
            points.push(100);
          }
        }
    
        overlay.addEventListener("click", onClick);
        
        // Starts the initial render
        toggle();
    
        function onClick() {
          if (!tl.isActive()) {
            isOpened = !isOpened;
            toggle();
          }
        }
    
        function toggle() {
          tl.progress(0).clear();
          
          for (let i = 0; i < numPoints; i++) {
            pointsDelay[i] = Math.random() * delayPointsMax;
          }
          
          for (let i = 0; i < numPaths; i++) {
            let points = allPoints[i];
            let pathDelay = delayPerPath * (isOpened ? i : (numPaths - i - 1));
                
            for (let j = 0; j < numPoints; j++) {      
              let delay = pointsDelay[j];      
              tl.to(points, {
                [j]: 0
              }, delay + pathDelay);
            }
          }
        }
    
        function render() {
          for (let i = 0; i < numPaths; i++) {
            let path = paths[i];
            let points = allPoints[i];
            
            let d = "";
            d += isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;
            
            for (let j = 0; j < numPoints - 1; j++) {
              let p = (j + 1) / (numPoints - 1) * 100;
              let cp = p - (1 / (numPoints - 1) * 100) / 2;
              d += ` ${cp} ${points[j]} ${cp} ${points[j+1]} ${p} ${points[j+1]}`;
            }
            
            d += isOpened ? ` V 100 H 0` : ` V 0 H 0`;
            path.setAttribute("d", d);
          }  
        }
      
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-anim-shape-overlays-animation" ref={raiz}>
      <div className="content">
          <h1>{s.titulo}</h1>
          <p>{s.texto}</p>
        </div>
      
        
        <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="var(--acento)"/>
              <stop offset="100%" stopColor="var(--base-100)"/>
            </linearGradient>
            
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="var(--base-100)"/>
              <stop offset="100%" stopColor="var(--acento)"/>
            </linearGradient>
          </defs>
          <path className="shape-overlays__path" fill="url(#gradient2)"></path>
          <path className="shape-overlays__path" fill="url(#gradient1)"></path>
        </svg>
    </section>
  );
}