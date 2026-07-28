"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/orb-animation-cursor
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
  //           // Configurações iniciais do Canvas e matrizes
  //           const dots = [];
  //           const c = document.querySelector('#c');
  //           const ctx = c.getContext('2d');
  //           const cw = 1100;
  //           const ch = 1100;
  //           const T = Math.PI * 2;
  //   
  //           // Estado do "mouse"
  //           const m = { x: cw/2, y: ch/2, smx: cw/2, smy: ch/2, r: 52 };
  //           
  //           // Utilizando gsap.quickTo para criar um seguimento suave do ponteiro
  //           const xTo = gsap.quickTo(m, "x", {duration: 1, ease: "power2"});
  //           const yTo = gsap.quickTo(m, "y", {duration: 1, ease: "power2"});
  //           
  //           let cBox = c.getBoundingClientRect();
  //           
  //           // Atualiza as dimensões ao redimensionar a janela
  //           window.addEventListener('resize', () => cBox = c.getBoundingClientRect());
  //   
  //           // Função de captura do movimento do ponteiro
  //           function mMove(e) {
  //               m.smx = (e.clientX - cBox.left) * c.width / cBox.width;
  //               m.smy = (e.clientY - cBox.top) * c.height / cBox.height;
  //               xTo(m.smx);
  //               yTo(m.smy);
  //           }
  //   
  //           // Define tamanho fixo da resolução interna do canvas (mantém qualidade alta)
  //           c.width = cw;
  //           c.height = ch;
  //   
  //           // Animação de entrada (explosão de interação inicial)
  //           gsap.from(m, {
  //               duration: 2,
  //               r: 1,
  //               ease: 'back.out(9)',
  //               onComplete: () => window.addEventListener('pointermove', mMove)
  //           });
  //   
  //           // Geração do grid de pontos
  //           for (let x = 0, i = 0; x < cw; x += 9) {
  //               for (let y = 0; y < ch; y += 9) {
  //                   dots.push({
  //                       i: i,
  //                       r: 1.2,
  //                       x: x + 4.5,
  //                       y: y + 4.5,
  //                       h: gsap.utils.random(150, 200, 1),
  //                       a: .7,
  //                       s: 1
  //                   });
  //                   i++;
  //               }
  //           }
  //   
  //           // Função que desenha cada ponto afetado pelo raio do ponteiro
  //           function drawDot(c) {
  //               // Calcula distância entre o ponto e o cursor
  //               const d = Math.sqrt((c.x - m.x)**2 + (c.y - m.y)**2);
  //               
  //               // Se o ponto estiver dentro do raio de alcance
  //               if (d < m.r) {
  //                   c.s = 5 + d / m.r / 1.5;
  //                   c.h = gsap.utils.wrap(150, 200, c.h += .3);
  //               }
  //               
  //               // Animação de retorno (diminui o ponto) ou pular renderização
  //               if (c.s > 1) {
  //                   c.s -= 0.1;
  //                   c.h = gsap.utils.clamp(0, 200, c.h += .5);
  //               } else {
  //                   c.h = gsap.utils.random(150, 200, 1);
  //                   return; // Otimização: não desenha o ponto se ele estiver em tamanho normal
  //               }
  //               
  //               // Desenho do círculo
  //               ctx.fillStyle = 'hsla(' + c.h + ', 100%, 50%,' + c.a + ')';
  //               ctx.beginPath();
  //               ctx.arc(c.x, c.y, c.r * c.s, 0, T);
  //               ctx.fill();
  //           }
  //   
  //           // Loop de renderização com ticker do GSAP
  //           function render() {
  //               // Fundo alterado para branco para combinar com o CSS
  //               ctx.fillStyle = "#ffffff";
  //               ctx.fillRect(0, 0, cw, ch);
  //               
  //               // Desenhar os pontos ativos
  //               dots.forEach(drawDot);
  //           }
  //   
  //           // Adicionar o loop no ticker do GSAP para rodar a cada frame
  //           gsap.ticker.add(render);
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-orb-animation-cursor" ref={raiz}>
      <div id="fixed-bg">
              <canvas id="c"></canvas>
          </div>
    </section>
  );
}