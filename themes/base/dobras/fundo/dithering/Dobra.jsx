"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/backgrounds/dithering-shaders-background
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
  //       console.clear();
  //   
  //       const spacing = 10; // Muito pequeno pode prejudicar o desempenho
  //       const scale = 450;
  //       const intensity = 7;
  //   
  //       const c = document.querySelector('#c');
  //       const ctx = c.getContext('2d', { willReadFrequently: true });
  //       let dots = [];
  //       let cw = c.width = innerWidth;
  //       let ch = c.height = innerHeight;
  //       let tl = gsap.timeline();
  //   
  //       window.onresize = () => {
  //         cw = c.width = innerWidth;
  //         ch = c.height = innerHeight;
  //         setDots();
  //       };
  //   
  //       function setDots() {
  //         tl.kill(); // Para qualquer animação anterior
  //         dots = [];
  //         
  //         // Criando uma nova instância de SimplexNoise (substitui o noise.seed aleatório)
  //         let simplexInitial = new SimplexNoise();
  //         
  //         for (let x = 0; x <= cw + spacing; x += spacing) {
  //           for (let y = 0; y <= ch + spacing; y += spacing) {
  //             dots.push({
  //               s: simplexInitial.noise2D(x / scale, y / scale) * intensity,
  //               x: x - spacing / 2,
  //               y: y - spacing / 2
  //             });
  //           }
  //         }
  //         
  //         dots.sort((a, b) => a.x - b.x);
  //         
  //         // Nova instância para o update da animação
  //         let simplexAnim = new SimplexNoise();
  //   
  //         // Arredondando os valores do grid para evitar problemas internos do GSAP
  //         const gridCols = Math.floor(cw / spacing);
  //         const gridRows = Math.floor(ch / spacing);
  //   
  //         tl = gsap.timeline({ onUpdate: render })
  //           .to(dots, {
  //             duration: 2,
  //             s: (i, t) => simplexAnim.noise2D(t.x / scale, t.y / scale) * intensity,
  //             ease: 'power2.inOut',
  //             yoyoEase: 'power1.in',
  //             stagger: {
  //               amount: 4,
  //               from: 'edges',
  //               grid: [gridCols, gridRows],
  //               yoyo: true,
  //               repeat: -1
  //             }
  //           })
  //           .seek(99); // Pula para a frente na timeline para começar com movimento
  //       }
  //   
  //       // Inicializando o script após o carregamento completo
  //       window.onload = () => {
  //         setDots();
  //       };
  //   
  //       function render() {
  //         ctx.fillStyle = "#005";
  //         ctx.fillRect(0, 0, cw, ch);
  //         dots.forEach((d, i) => drawDot(d, i));
  //       }
  //   
  //       function drawDot(d, i) {
  //         let n = Math.round(gsap.utils.clamp(0.01, spacing / 2.5, d.s ** 2));
  //         ctx.translate(d.x, d.y);
  //         ctx.fillStyle = '#02a';
  //         ctx.fillRect(-(n / 2 ** 2), -(n / 2 ** 2), n ** 2.5, n ** 2.5);
  //         ctx.fillStyle = '#29e';
  //         ctx.fillRect(-(n / 2 ** 2), -(n / 2 ** 2), n ** 2, n ** 2);
  //         ctx.translate(-d.x, -d.y); 
  //       }
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="fundo-dithering" ref={raiz}>
      <div id="fixed-bg">
          <canvas id="c"></canvas>
        </div>
    </section>
  );
}