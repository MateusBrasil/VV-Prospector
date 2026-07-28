"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-13/canvas-cursor/dist
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
  //   const canvas = document.querySelector('.js-canvas');
  //   const ctx = canvas.getContext('2d');
  //   
  //   let width = canvas.width = window.innerWidth;
  //   let height = canvas.height = window.innerHeight;
  //   
  //   let mouseX = width / 2;
  //   let mouseY = height / 2;
  //   
  //   let circle = {
  //     radius: 10,
  //     lastX: mouseX,
  //     lastY: mouseY };
  //   
  //   
  //   const elems = [...document.querySelectorAll('[data-hover]')];
  //   
  //   function onResize() {
  //     width = canvas.width = window.innerWidth;
  //     height = canvas.height = window.innerHeight;
  //   }
  //   
  //   function render() {
  //     circle.lastX = lerp(circle.lastX, mouseX, 0.25);
  //     circle.lastY = lerp(circle.lastY, mouseY, 0.25);
  //   
  //     ctx.clearRect(0, 0, width, height);
  //     ctx.beginPath();
  //     ctx.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
  //     ctx.fillStyle = "#ffffff";
  //     ctx.fill();
  //     ctx.closePath();
  //   
  //     requestAnimationFrame(render);
  //   }
  //   
  //   function init() {
  //     requestAnimationFrame(render);
  //   
  //     window.addEventListener('mousemove', function (e) {
  //       mouseX = e.pageX;
  //       mouseY = e.pageY;
  //     });
  //   
  //     window.addEventListener('resize', onResize, false);
  //   
  //     let tween = TweenMax.to(circle, 0.25, {
  //       radius: circle.radius * 3,
  //       ease: Power1.easeInOut,
  //       paused: true });
  //   
  //   
  //     elems.forEach(el => {
  //       el.addEventListener('mouseenter', () => {
  //         tween.play();
  //       }, false);
  //       el.addEventListener('mouseleave', () => {
  //         tween.reverse();
  //       }, false);
  //     });
  //   }
  //   
  //   function lerp(a, b, n) {
  //     return (1 - n) * a + n * b;
  //   }
  //   
  //   init();
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-13" ref={raiz}>
      <header>
        <li data-hover>{s.item}</li>
        <li data-hover>{s.item2}</li>
        <li data-hover>{s.item3}</li>
      </header>
      <div className="white"></div>
      <div className="black"></div>
      <canvas className="js-canvas"></canvas>
    </section>
  );
}