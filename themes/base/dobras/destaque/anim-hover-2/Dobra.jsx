"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-2
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
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const background = document.getElementById('background');
  //     const disperseEls = gsap.utils.toArray('.js-disperse');
  //   
  //     const transforms = [
  //       { x: -0.8, y: -0.6, rotationZ: -29 },
  //       { x: -0.2, y: -0.4, rotationZ: -6 },
  //       { x: -0.05, y: 0.1, rotationZ: 12 },
  //       { x: -0.05, y: -0.1, rotationZ: -9 },
  //       { x: -0.1, y: 0.55, rotationZ: 3 },
  //       { x: 0, y: -0.1, rotationZ: 9 },
  //       { x: 0, y: 0.15, rotationZ: -12 },
  //       { x: 0, y: 0.15, rotationZ: -17 },
  //       { x: 0, y: -0.65, rotationZ: 9 },
  //       { x: 0.1, y: 0.4, rotationZ: 12 },
  //       { x: 0, y: -0.15, rotationZ: -9 },
  //       { x: 0.2, y: 0.15, rotationZ: 12 },
  //       { x: 0.8, y: 0.6, rotationZ: 20 }
  //     ];
  //   
  //     function splitChars(element) {
  //       const text = element.dataset.text || element.textContent.trim();
  //       element.innerHTML = '';
  //       [...text].forEach((char, i) => {
  //         const span = document.createElement('span');
  //         span.className = 'char';
  //         span.textContent = char;
  //         element.appendChild(span);
  //       });
  //     }
  //   
  //     disperseEls.forEach((line) => {
  //       splitChars(line);
  //       const chars = line.querySelectorAll('.char');
  //   
  //       line.addEventListener('mouseenter', () => {
  //         gsap.to(background, {
  //           opacity: 0.8,
  //           duration: 0.25,
  //           overwrite: true
  //         });
  //   
  //         chars.forEach((char, i) => {
  //           const t = transforms[i % transforms.length];
  //           gsap.to(char, {
  //             x: `${t.x}em`,
  //             y: `${t.y}em`,
  //             rotation: t.rotationZ,
  //             duration: 0.75,
  //             ease: 'power4.out',
  //             overwrite: true
  //           });
  //         });
  //       });
  //   
  //       line.addEventListener('mouseleave', () => {
  //         gsap.to(background, {
  //           opacity: 0,
  //           duration: 0.25,
  //           overwrite: true
  //         });
  //   
  //         gsap.to(chars, {
  //           x: 0,
  //           y: 0,
  //           rotation: 0,
  //           duration: 0.75,
  //           ease: 'power4.out',
  //           overwrite: true
  //         });
  //       });
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-2" ref={raiz}>
      <main className="main">
          <div className="body">
            <div className="intro-line">
              <p>{s.texto}</p>
            
            </div>
      
            <div className="intro-line">
              <p>{s.texto2}</p>
              <p>{s.texto3}</p>
            </div>
      
            <div className="intro-line">
              <p>{s.texto4}</p>
              <p>{s.texto5}</p>
            </div>
      
            <div className="intro-line intro-line--inline js-disperse" data-text="+447533063596">
              <p>{s.texto6}</p>
            </div>
      
            <div className="intro-line intro-line--inline intro-line--offset js-disperse" data-text="→Email">
              <p>{s.texto7}</p>
            </div>
      
            <div className="intro-line intro-line--inline js-disperse" data-text="→Insta">
              <p>{s.texto8}</p>
            </div>
          </div>
      
          <div className="background" id="background"></div>
        </main>
    </section>
  );
}