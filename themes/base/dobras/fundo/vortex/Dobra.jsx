"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/backgrounds/vortex
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
  //       // Inicialização do Canvas
  //       const canvas = document.getElementById("vortexCanvas");
  //       const ctx = canvas.getContext("2d");
  //       let cw = (canvas.width = window.innerWidth);
  //       let ch = (canvas.height = window.innerHeight);
  //       let radius = Math.max(cw, ch);
  //   
  //       // Variáveis de Controle de Estado Estáveis
  //       let particleCount = 99;
  //       let swirlMultiplier = 10;
  //       let currentMode = 'original'; // Utiliza imagens originais com fallback automático
  //       let currentPalette = 'nebula';
  //   
  //       // Paleta de Cor Procedural para caso de falha de conexão com os assets externos
  //       const colorPalettes = {
  //         nebula: { c1: 'rgba(0, 229, 255, 0.85)', c2: 'rgba(168, 85, 247, 0.45)' }
  //       };
  //   
  //       // Coleção de Partículas
  //       const particles = Array(particleCount);
  //   
  //       // Geração de Sprite Procedural em caso de fallback
  //       function createProceduralParticleCanvas(paletteKey, size = 128) {
  //         const pCanvas = document.createElement('canvas');
  //         pCanvas.width = size;
  //         pCanvas.height = size;
  //         const pCtx = pCanvas.getContext('2d');
  //         const center = size / 2;
  //         const colors = colorPalettes[paletteKey];
  //   
  //         const grad = pCtx.createRadialGradient(center, center, 0, center, center, center * 0.9);
  //         grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  //         grad.addColorStop(0.12, colors.c1);
  //         grad.addColorStop(0.45, colors.c2);
  //         grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  //   
  //         pCtx.fillStyle = grad;
  //         pCtx.beginPath();
  //         pCtx.arc(center, center, center * 0.9, 0, Math.PI * 2);
  //         pCtx.fill();
  //   
  //         pCtx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  //         pCtx.lineWidth = 1.5;
  //         pCtx.beginPath();
  //         pCtx.moveTo(size * 0.15, center);
  //         pCtx.lineTo(size * 0.85, center);
  //         pCtx.moveTo(center, size * 0.15);
  //         pCtx.lineTo(center, size * 0.85);
  //         pCtx.stroke();
  //   
  //         pCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  //         pCtx.beginPath();
  //         pCtx.arc(center, center, center * 0.08, 0, Math.PI * 2);
  //         pCtx.fill();
  //   
  //         return pCanvas;
  //       }
  //   
  //       let fallbackSprite = createProceduralParticleCanvas('nebula');
  //   
  //       // Inicializando as partículas
  //       for (let i = 0; i < particles.length; i++) {
  //         particles[i] = {
  //           x: 0,
  //           y: 0,
  //           scale: 0, 
  //           rotate: 0,
  //           img: new Image()
  //         };
  //         
  //         particles[i].img.crossOrigin = "anonymous";
  //         particles[i].img.src = "https://assets.codepen.io/16327/flair-" + (2 + i % 21) + ".png";
  //       }
  //   
  //       // Instanciação da Timeline GSAP
  //       let tl;
  //   
  //       function buildTimeline() {
  //         if (tl) tl.kill();
  //   
  //         tl = gsap.timeline({ onUpdate: draw })
  //           .fromTo(particles, {
  //             x: (i) => {
  //               const angle = (i / particles.length * Math.PI * 2) - Math.PI / 2;
  //               return Math.cos(angle * swirlMultiplier) * radius;
  //             },
  //             y: (i) => {
  //               const angle = (i / particles.length * Math.PI * 2) - Math.PI / 2;
  //               return Math.sin(angle * swirlMultiplier) * radius;
  //             },
  //             scale: 1.1,
  //             rotate: 0
  //           }, {
  //             duration: 5,
  //             ease: "sine.inOut",
  //             x: 0,
  //             y: 0,
  //             scale: 0,
  //             rotate: -3,
  //             stagger: { each: -0.05, repeat: -1 }
  //           }, 0)
  //           .seek(99)
  //           .timeScale(0.5); // Ajustado para iniciar a rotação em 0.5x
  //       }
  //   
  //       // Função de Desenho no Canvas
  //       function draw() {  
  //         particles.sort((a, b) => a.scale - b.scale);  
  //         ctx.clearRect(0, 0, cw, ch);
  //         
  //         particles.forEach((p) => {
  //           let source;
  //           let w, h;
  //   
  //           if (p.img.complete && p.img.naturalWidth !== 0) {
  //             source = p.img;
  //             w = p.img.naturalWidth;
  //             h = p.img.naturalHeight;
  //           } else {
  //             source = fallbackSprite;
  //             w = source.width;
  //             h = source.height;
  //           }
  //   
  //           ctx.translate(cw / 2, ch / 2);
  //           ctx.rotate(p.rotate);
  //           
  //           ctx.drawImage(
  //             source,
  //             p.x,
  //             p.y,
  //             w * p.scale,
  //             h * p.scale
  //           );
  //           ctx.resetTransform();
  //         });
  //       }
  //   
  //       // Inicialização
  //       buildTimeline();
  //   
  //       // Redimensionamento Inteligente
  //       window.addEventListener("resize", () => {
  //         cw = canvas.width = window.innerWidth;
  //         ch = canvas.height = window.innerHeight;
  //         radius = Math.max(cw, ch);
  //         buildTimeline();
  //       });
  //   
  //       // Toggle Play/Pause ao clicar ou apertar espaço
  //       function togglePlayState() {
  //         const isCurrentlyPlaying = tl.timeScale() > 0;
  //         const nextTimeScale = isCurrentlyPlaying ? 0 : 0.5; // Alterna entre pausa (0) e a velocidade padrão (0.5x)
  //         
  //         gsap.to(tl, { 
  //           timeScale: nextTimeScale,
  //           duration: 0.5,
  //           ease: "power2.out"
  //         });
  //   
  //         // Feedback visual central sutil
  //         const indicator = document.getElementById("playStateIndicator");
  //         const indIcon = document.getElementById("indicatorIcon");
  //         
  //         if (isCurrentlyPlaying) {
  //           indIcon.setAttribute("data-lucide", "pause");
  //         } else {
  //           indIcon.setAttribute("data-lucide", "play");
  //         }
  //         lucide.createIcons();
  //   
  //         indicator.style.opacity = "1";
  //         indicator.style.transform = "scale(1)";
  //         
  //         setTimeout(() => {
  //           indicator.style.opacity = "0";
  //           indicator.style.transform = "scale(0.8)";
  //         }, 500);
  //       }
  //   
  //       // Clique/Toque no canvas
  //       canvas.addEventListener('pointerup', (e) => {
  //         if (e.target.tagName === 'CANVAS') {
  //           togglePlayState();
  //         }
  //       });
  //   
  //       // Espaço para pausar/iniciar
  //       window.addEventListener('keydown', (e) => {
  //         if (e.code === 'Space') {
  //           e.preventDefault();
  //           togglePlayState();
  //         }
  //       });
  //   
  //       // Inicialização dos ícones do feedback
  //       lucide.createIcons();
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="fundo-vortex" ref={raiz}>
      <main className="relative w-full h-screen flex items-center justify-center">
          
          <canvas id="vortexCanvas" className="absolute inset-0 w-full h-full block"></canvas>
      
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(5,6,5,0.8)_100%)] pointer-events-none"></div>
      
          
          <div id="playStateIndicator" className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 transition-all duration-300 transform scale-75">
            <div className="glass-panel p-5 rounded-full flex items-center justify-center text-white">
              <i id="indicatorIcon" data-lucide="play" className="w-8 h-8"></i>
            </div>
          </div>
      
          
          <div className="absolute bottom-6 left-6 z-10 text-[10px] text-zinc-500 uppercase tracking-widest hidden={true} md:block select-none pointer-events-none">
            <span className="text-zinc-400 font-semibold">{s.rotulo}</span> Pressione <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Espaço</kbd> ou toque na tela para Pausar / Iniciar
          </div>
        </main>
    </section>
  );
}