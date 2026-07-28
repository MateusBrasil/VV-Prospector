"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/magnetic-button-1
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
  //           document.addEventListener("DOMContentLoaded", () => {
  //               const zone = document.querySelector("#zone");
  //               const btn = document.querySelector("#btn");
  //               
  //               // Força de atração (1 = até ao limite exato do cursor, 0.5 = até metade)
  //               const strength = 0.6; 
  //   
  //               // 1. Evento: Quando o rato se move DENTRO da zona
  //               // Sem "wiggle" - mapeando diretamente a posição do rato para o botão
  //               zone.addEventListener("mousemove", (e) => {
  //                   const rect = zone.getBoundingClientRect();
  //                   
  //                   // mapRange converte as coordenadas do ecrã para um eixo centrado (-largura/2 a +largura/2)
  //                   const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX);
  //                   const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);
  //   
  //                   gsap.to(btn, {
  //                       x: x * strength,
  //                       y: y * strength,
  //                       duration: 0.4,
  //                       ease: "power2.out",
  //                       overwrite: true // Interrompe qualquer transição anterior imediatamente
  //                   });
  //               });
  //   
  //               // 2. Evento: Quando o rato SAI da zona
  //               // Reposiciona o botão de volta para o centro (0,0) com efeito elástico de mola
  //               zone.addEventListener("mouseleave", () => {
  //                   gsap.to(btn, { 
  //                       x: 0, 
  //                       y: 0,
  //                       duration: 0.7,
  //                       ease: "elastic.out(1, 0.4)",
  //                       overwrite: true // Garante a sobreposição dos movimentos anteriores ao sair
  //                   });
  //               });
  //           });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="botao-magnetic-button-1" ref={raiz}>
      <div id="zone" className="relative flex items-center justify-center w-[300px] h-[300px] rounded-full cursor-pointer group">
              
              
              <button id="btn" className="relative px-12 py-5 text-white/95 font-bold tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(252,1,94,0.35)] border border-[var(--base-300)]/30 transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(252,1,94,0.5)]" style={{background: 'radial-gradient(circle at 25% 25%, var(--base-300) 0%, var(--base-300) 55%, var(--acento) 100%)'}} onClick={s.onClick}>
                  <span className="no-pointer relative z-10">{s.rotulo}</span>
              </button>
      
          </div>
    </section>
  );
}