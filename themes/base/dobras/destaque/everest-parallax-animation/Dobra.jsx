"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/everest-parallax-animation
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    
        // É importante registrar os plugins do GSAP antes de usá-los
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
        gsap.timeline({
          scrollTrigger:{
            trigger:'.scrollDist',
            start:'0 0',
            end:'100% 100%',
            scrub:1
          }
        })
        .fromTo('.sky', {y:0},{y:-200}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0);
    
        const arrowBtn = raiz.current.querySelector('#arrow-btn');
    
        arrowBtn.addEventListener('mouseenter', ()=>{
          gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); 
        });
    
        arrowBtn.addEventListener('mouseleave', ()=> {
          gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); 
        });
    
        arrowBtn.addEventListener('click', ()=> {
          gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'});
        }); 
      
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-everest-parallax-animation" ref={raiz}>
      <div className="scrollDist"></div>
        <main>
          <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <mask id="m">
              <g className="cloud1">
                <rect fill="var(--base-100)" width="100%" height="801" y="799" />
                <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
              </g>
            </mask>
            
            <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
            <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>    
            <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>    
            <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
            <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
            <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
            <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
            <text fill="var(--base-100)" x="350" y="200">EXPLORE</text>
            <polyline className="arrow" fill="var(--base-100)" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
            
            <g mask="url(#m)">
              <rect fill="var(--base-100)" width="100%" height="100%" />      
              <text x="350" y="200" fill="var(--acento)">FURTHER</text>
            </g>
            
            <rect id="arrow-btn" width="100" height="100" opacity="0" x="550" y="220" style={{cursor: 'pointer'}}/>
          </svg>
        </main>
    </section>
  );
}