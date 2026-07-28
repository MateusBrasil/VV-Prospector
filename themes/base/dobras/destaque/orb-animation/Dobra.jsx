"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/orb-animation
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
    
        const svg = raiz.current.querySelector('svg');
        const ns = svg.getAttribute('xmlns');
        const bg = raiz.current.querySelector('.bg');
        const fg = raiz.current.querySelector('.fg');
        const ringTLs = [];
        const n = 16;
    
        for (let i = 0; i < n; i++) {
          const bgRing = document.createElementNS(ns, "ellipse");
          const fgRing = document.createElementNS(ns, "ellipse");
          const r = [bgRing, fgRing];
          
          bg.prepend(bgRing);
          fg.prepend(fgRing);
          
          gsap.set(r, { attr:{ cx: 50, cy: 48, rx: 28, ry: 8, 'stroke-width': 1.25 } });
          
          ringTLs.push(
            gsap
            .timeline({ repeat: -1 })
            .fromTo(r, {
              svgOrigin: "50 50",
              drawSVG: (j) => ["-5% 50%", "50% 99%"][j],
              y: 26,
              scale: 0.1,
              opacity: 0,
              stroke: 'hsl(260,80%,8%)'
            }, {
              duration: 2,
              y: -25,
              ease: "sine.inOut"
            }, 0)
            .to(r, {
              duration: 1,
              scale: 1,
              stroke: 'hsl(190,99%,50%)',
              ease: "sine",
              repeat: 1,
              yoyo: true
            }, 0)
            .to(r, {
              duration: 0.2,
              opacity: 1,
              ease: "expo.inOut",
              repeat: 1,
              repeatDelay: 1.6,
              yoyo: true
            }, 0)
            .add(()=>{ bg.append(bgRing); fg.append(fgRing) }, 1)
            .seek(i/(n/2))
          );
        }
    
        gsap.fromTo('svg', {rotate: 25, opacity: 0}, {duration: 1.5, opacity: 1, ease: 'power1.inOut'});
        gsap.fromTo(ringTLs, {timeScale: 0}, {duration: 2, timeScale: 0.15, ease: 'power2.in'});
    
        // Interação para pausar/tocar e alterar as cores ao clicar
        window.addEventListener('pointerup', ()=>{
          gsap.to(ringTLs, {
            timeScale: (i, t) => (t.isActive() ? 0 : 0.15)
          });  
          gsap.to('svg', {
            opacity: (ringTLs[0].isActive() ? 0.5 : 1),
            filter: (ringTLs[0].isActive() ? 'grayscale(1)' : 'grayscale(0)'),
            ease: 'sine.inOut'
          });
        });
      
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-orb-animation" ref={raiz}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
          <g className="orb1">
            <image href={s.destino || '#'} width="100" height="100"/>
            <g className="bg"></g>
            <circle cx="50" cy="50" r="25.5" fill="var(--base-600)"/>
            <g className="fg"></g>
          </g>
        </svg>
    </section>
  );
}