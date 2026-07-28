"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/circular-gallery-with-gsap
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="vitrine-circular-gallery-with-gsap" ref={raiz}>
      <section className="wrapper">
          <div data-title="A misty Morning">
            <img src={s.imagem} alt="A misty Morning" />
          </div>
          <div data-title="Harvest">
            <img src={s.imagem2} alt="Harvest" />
          </div>
          <div data-title="Waiting">
            <img src={s.imagem3} alt="Waiting" />
          </div>
          <div data-title="Time for Everything">
            <img src={s.imagem4} alt="Time for Everything" />
          </div>
          <div data-title="Cross over">
            <img src={s.imagem5} alt="Cross over" />
          </div>
          <div data-title="In The City">
            <img src={s.imagem6} alt="In The City" />
          </div>
          <div id="img-7" data-title="A Boat Trip">
            <img src={s.imagem7} alt="A Boat Trip" />
          </div>
          <div data-title="Waiting">
            <img src={s.imagem8} alt="Waiting" />
          </div>
          <div data-title="Stories to tell">
            <img src={s.imagem9} alt="Stories to tell" />
          </div>
          <div data-title="A Perfect Day">
            <img src={s.imagem10} alt="A Perfect Day" />
          </div>
          <div data-title="Riding the Curve">
            <img src={s.imagem11} alt="Riding the Curve" />
          </div>
          <div data-title="Raindrops">
            <img src={s.imagem12} alt="Raindrops" />
          </div>
          <div data-title="Gone Sailing">
            <img src={s.imagem13} alt="Gone Sailing" />
          </div>
          <div data-title="The Watch Tower">
            <img src={s.imagem14} alt="The Watch Tower" />
          </div>
          <div data-title="Leaving">
            <img src={s.imagem15} alt="Leaving" />
          </div>
          <div data-title="Above the Clouds">
            <img src={s.imagem16} alt="Above the Clouds" />
          </div>
          <div data-title="This is the title">
            <img src={s.imagem17} alt="This is the title" />
          </div>
          <div data-title="This is the title">
            <img src={s.imagem18} alt="This is the title" />
          </div>
          <div data-title="This is the title">
            <img src={s.imagem19} alt="This is the title" />
          </div>
          <div data-title="Contemplation!">
            <img src={s.imagem20} alt="Contemplation!" />
          </div>
        </section>
      
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mouse">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
            <path d="M12 7l0 4" />
            <path d="M8 26l4 4l4 -4">
              <animateTransform attributeType="XML" attributeName="transform" type="translate" values="0 0; 0 4; 0 0" dur="1s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
    </section>
  );
}