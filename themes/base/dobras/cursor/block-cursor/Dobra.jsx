"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/block-cursor
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //       const gridSize = 10;
  //       let squares = [];
  //       let idleTimeout;
  //   
  //       // Função para criar um novo quadrado na tela
  //       function createSquare(x, y) {
  //         const square = document.createElement('div');
  //         square.classList.add('square');
  //         square.style.left = `${x}px`;
  //         square.style.top = `${y}px`;
  //         document.body.appendChild(square);
  //         squares.push(square);
  //       }
  //   
  //       // Atualiza a lista de quadrados ativos e aplica efeitos de tamanho
  //       function updateSquares(x, y) {
  //         createSquare(x, y);
  //   
  //         // Limita a quantidade de quadrados simultâneos na tela
  //         if (squares.length > 8) {
  //           const squareToRemove = squares.shift();
  //           squareToRemove.remove();
  //         }
  //   
  //         // Altera progressivamente o tamanho dos quadrados anteriores
  //         for (let i = 5; i < squares.length; i++) {
  //           const square = squares[i];
  //           const delay = i * 5;
  //           setTimeout(() => {
  //             const size = 2 + i * 2;
  //             square.style.width = `${size}px`;
  //             square.style.height = `${size}px`;
  //           }, delay);
  //         }
  //   
  //         // Reinicia o temporizador de inatividade
  //         clearTimeout(idleTimeout);
  //         idleTimeout = setTimeout(clearSquares, 300);
  //       }
  //   
  //       // Remove todos os quadrados suavemente quando o mouse para
  //       function clearSquares() {
  //         squares.forEach((sq) => {
  //           sq.style.opacity = "0";
  //           setTimeout(() => {
  //             if (sq && sq.parentNode) {
  //               sq.remove();
  //             }
  //           }, 300);
  //         });
  //         squares = [];
  //       }
  //   
  //       // Alinha as coordenadas do mouse à grade definida
  //       function snapToGrid(x, y) {
  //         const gridX = Math.round(x / gridSize) * gridSize;
  //         const gridY = Math.round(y / gridSize) * gridSize;
  //         return { x: gridX, y: gridY };
  //       }
  //   
  //       // Escuta o movimento do mouse na janela
  //       document.addEventListener('mousemove', (event) => {
  //         const { x, y } = snapToGrid(event.clientX, event.clientY);
  //         updateSquares(x, y);
  //       });
  //     
  // }, []);
  return (
    <section className="dobra" data-dobra="cursor-block-cursor" ref={raiz}>
      <h1>{s.titulo}</h1>
    </section>
  );
}