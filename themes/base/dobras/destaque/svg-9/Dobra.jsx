"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-svg/animacoes-svg-9/canvas-particles/dist
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
  //   const c = document.querySelector("canvas");
  //   const ctx = c.getContext("2d");
  //   let cw = (c.width = window.innerWidth);
  //   let ch = (c.height = window.innerHeight);
  //   let radius = Math.max(cw,ch);
  //   const particles = Array(99);
  //   
  //   for (let i = 0; i < particles.length; i++) {
  //     particles[i] = {
  //       x: 0,
  //       y: 0,
  //       scale: 0, 
  //       rotate: 0,
  //       img: new Image()
  //     }  
  //     particles[i].img.src = "https://assets.codepen.io/16327/flair-"+(2+i%21)+".png";
  //   }
  //   
  //   const tl = gsap.timeline({onUpdate:draw})
  //     .fromTo(particles, {
  //       x:(i)=> {
  //         const angle = (i/particles.length * Math.PI *2)- Math.PI/2
  //         return Math.cos(angle*10) * radius// * i/particles.length
  //       },
  //       y:(i)=> {
  //         const angle = (i/particles.length * Math.PI *2)- Math.PI/2
  //         return Math.sin(angle*10) * radius// * i/particles.length
  //       },
  //       scale: 1.1,
  //       rotate: 0
  //     },{
  //       duration: 5,
  //       ease: "sine",
  //       x: 0,
  //       y: 0,
  //       scale: 0,
  //       rotate: -3,
  //       stagger:{each:-0.05, repeat:-1}
  //     }, 0)
  //     .seek(99)
  //   
  //   function draw(){  
  //     particles.sort( (a,b) => a.scale - b.scale ) // sort by scale to set z-indexing  
  //     ctx.clearRect(0, 0, cw, ch);
  //     particles.forEach((p, i) => {
  //       ctx.translate(cw / 2, ch / 2);
  //       ctx.rotate( p.rotate );
  //       ctx.drawImage(
  //         p.img,
  //         p.x,
  //         p.y,
  //         p.img.width * p.scale,
  //         p.img.height * p.scale
  //       );
  //       ctx.resetTransform();
  //     });
  //   }
  //   
  //   window.addEventListener("resize", () => {
  //     cw = c.width = innerWidth;
  //     ch = c.height = innerHeight;
  //     radius = Math.max(cw,ch);
  //     tl.invalidate();
  //   });
  //   
  //   c.addEventListener('pointerup', ()=>{ 
  //     gsap.to(tl, { 
  //       timeScale: tl.isActive() ? 0 : 1 // use timeScale to toggle play / pause
  //     })
  //   })
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-svg-9" ref={raiz}>
      <main>
        <canvas></canvas>
      </main>
    </section>
  );
}