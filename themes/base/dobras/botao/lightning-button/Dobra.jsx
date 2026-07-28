"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/lightning-button
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
    
        let button = raiz.current.querySelector("button");
    
        let rough = new RoughEase({
          strength: 3,
          points: 30,
          taper: "none",
          randomize: true
        });
    
        let tl = gsap.timeline({
          defaults: { duration: 2, ease: "sine.out" },
          paused: true
        });
    
        let strikes = gsap.utils.toArray(".strike");
    
        tl.to("#lightning", { opacity: 1, duration: 0.1 })
          .to(".border-gradient", { opacity: 1 }, 0) // Ajustada a posição da linha do tempo para um início paralelo suave
          .to("#filter feDisplacementMap", { attr: { scale: "10" }, ease: rough }, 0)
          .to("#filter2 feDisplacementMap", { attr: { scale: "30" }, ease: rough }, 0)
          .to("#filter4 feDisplacementMap", { attr: { scale: "40" }, ease: rough }, 0)
          .fromTo(strikes[0], { drawSVG: "100% 90%" }, { drawSVG: "0% 10%" }, 0)
          .fromTo(strikes[1], { drawSVG: "0% 20%" }, { drawSVG: "100% 100%" }, 0)
          .fromTo(strikes[2], { drawSVG: "0% 10%" }, { drawSVG: "135% 140%" }, 0)
          .fromTo(strikes[3], { drawSVG: "120% 140%" }, { drawSVG: "35% 40%" }, 0)
          .fromTo(strikes[4], { drawSVG: "20% 40%" }, { drawSVG: "135% 140%" }, 0)
          .to("#lightning", { opacity: 0, duration: 0.3 }, "-=0.4");
    
        button.addEventListener("mouseenter", function () {
          gsap.to("#scribbles", { opacity: 1, duration: 0.3, ease: "sine.out" });
          tl.play(0);
        });
    
        button.addEventListener("mouseleave", function () {
          gsap.to("#scribbles", { opacity: 0, duration: 0.6, ease: "sine.out" });
          tl.reverse();
        });
      
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="botao-lightning-button" ref={raiz}>
      <div className="container">
          <div className="border-gradient">
            <button onClick={s.onClick}>
              <span className="vh">{s.rotulo}</span>
            </button>
            <span className="button-text" aria-hidden="true">{s.rotulo2}</span>
          </div>
          
          <svg id="scribbles" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 50">
            <filter colorInterpolationFilters="sRGB" id="glow" x="-50" y="-50" width="200" height="200" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="10"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="2" />
              </feComponentTransfer>
              <feBlend in2="SourceGraphic" />
            </filter>
            
            <filter colorInterpolationFilters="sRGB" id="filter" x="-50" y="-50" width="200" height="200" filterUnits="userSpaceOnUse">
              <feTurbulence type="fractalNoise" baseFrequency="0.15 0" numOctaves="1" result="warp"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="warp" />
            </filter>
            
            <filter colorInterpolationFilters="sRGB" id="filter2" x="-50" y="-50" width="200" height="200" filterUnits="userSpaceOnUse">
              <feTurbulence type="fractalNoise" baseFrequency="0.2 0" numOctaves="1" result="warp"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="10" in="SourceGraphic" in2="warp" />
            </filter>
            
            <filter colorInterpolationFilters="sRGB" id="filter3" x="-50" y="-50" width="200" height="200" filterUnits="userSpaceOnUse">
              <feTurbulence type="fractalNoise" baseFrequency="0.2 0.2" numOctaves="1" result="warp"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="warp" />
            </filter>
            
            <filter colorInterpolationFilters="sRGB" id="filter4" x="-50" y="-50" width="200" height="200" filterUnits="userSpaceOnUse">
              <feTurbulence type="fractalNoise" baseFrequency="0.2 0.2" numOctaves="1" result="warp"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="warp" />
            </filter>
      
            <linearGradient gradientUnits="userSpaceOnUse" id="gradient">
              <stop offset="0%" stopColor="var(--base-100)" />
              <stop offset="10%" stopColor="var(--acento)" />
              <stop offset="50%" stopColor="var(--base-100)" />
              <stop offset="100%" stopColor="var(--base-100)" />
            </linearGradient>
      
            <linearGradient gradientUnits="userSpaceOnUse" id="gradient2" gradientTransform="rotate(65)">
              <stop offset="0%" stopColor="var(--base-100)" />
              <stop offset="10%" stopColor="var(--acento)" />
              <stop offset="50%" stopColor="var(--base-100)" />
              <stop offset="100%" stopColor="var(--base-100)" />
            </linearGradient>
      
            <linearGradient gradientUnits="userSpaceOnUse" id="gradient3">
              <stop offset="0%" stopColor="var(--base-100)" />
              <stop offset="50%" stopColor="var(--base-100)" />
              <stop offset="100%" stopColor="var(--base-100)" />
            </linearGradient>
      
            <g id="lightning" strokeWidth="1" filter="url(#glow)" stroke="url(#gradient)">
              <rect filter="url(#filter)" className="strike" stroke="url(#gradient)" x="0" y="0" width="100" height="50" rx="38.59" fill="none" stroke="var(--base-600)" strokeMiterlimit="10" strokeWidth="1.5" />
              <rect filter="url(#filter2)" className="strike" stroke="url(#gradient2)" x="0" y="0" width="100" height="50" rx="38.59" fill="none" stroke="var(--base-600)" strokeMiterlimit="10" strokeWidth="2" />
              <rect filter="url(#filter3)" className="strike" stroke="url(#gradient3)" x="0" y="0" width="100" height="50" rx="38.59" fill="none" stroke="var(--base-600)" strokeMiterlimit="10" strokeWidth="1.5"/>
              <rect filter="url(#filter2)" className="strike" stroke="url(#gradient3)" x="0" y="0" width="100" height="50" rx="38.59" fill="none" stroke="var(--base-600)" strokeMiterlimit="10" strokeWidth="1"/>
              <rect filter="url(#filter4)" className="strike" stroke="url(#gradient3)" x="0" y="0" width="100" height="50" rx="38.59" fill="none" stroke="var(--base-600)" strokeMiterlimit="10" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
    </section>
  );
}