"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-rolagem/animacao-rolagem-3
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
  //   CustomEase.create('stackEase', '0.83, 0, 0.17, 1')
  //   
  //   let isAnimating = false
  //   
  //   function splitText(selector) {
  //     const elements = document.querySelectorAll(selector)
  //   
  //     elements.forEach(element => {
  //       const text = element.innerText
  //       const chars = text
  //         .split('')
  //         .map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`)
  //         .join('')
  //   
  //       element.innerHTML = chars
  //     })
  //   }
  //   
  //   function positionCards() {
  //     const cards = Array.from(document.querySelectorAll('.card'))
  //   
  //     gsap.to(cards, {
  //       y: index => `${-18 + 18 * index}%`,
  //       z: index => 18 * index,
  //       duration: 1,
  //       ease: 'stackEase',
  //       stagger: -0.08
  //     })
  //   }
  //   
  //   function prepareCardText() {
  //     gsap.set('.copy h1 span', { y: -220 })
  //     gsap.set('.copy p span', { y: 60, opacity: 0 })
  //     gsap.set('.slider .card:last-child .copy h1 span', { y: 0 })
  //     gsap.set('.slider .card:last-child .copy p span', { y: 0, opacity: 1 })
  //   }
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //     splitText('.copy h1')
  //     splitText('.copy p')
  //     positionCards()
  //     prepareCardText()
  //   })
  //   
  //   document.addEventListener('click', () => {
  //     if (isAnimating) return
  //     isAnimating = true
  //   
  //     const slider = document.querySelector('.slider')
  //     const cards = Array.from(slider.querySelectorAll('.card'))
  //     const lastCard = cards.pop()
  //     const upcomingCard = cards[cards.length - 1]
  //   
  //     const currentTitleChars = lastCard.querySelectorAll('.copy h1 span')
  //     const currentMetaChars = lastCard.querySelectorAll('.copy p span')
  //     const nextTitleChars = upcomingCard.querySelectorAll('.copy h1 span')
  //     const nextMetaChars = upcomingCard.querySelectorAll('.copy p span')
  //   
  //     gsap.to(currentTitleChars, {
  //       y: 220,
  //       duration: 0.7,
  //       ease: 'stackEase',
  //       stagger: 0.03
  //     })
  //   
  //     gsap.to(currentMetaChars, {
  //       y: 40,
  //       opacity: 0,
  //       duration: 0.45,
  //       ease: 'power3.out',
  //       stagger: 0.015
  //     })
  //   
  //     gsap.to(lastCard, {
  //       y: '+=160%',
  //       duration: 0.78,
  //       ease: 'stackEase',
  //       onComplete: () => {
  //         slider.prepend(lastCard)
  //         positionCards()
  //   
  //         gsap.set(lastCard.querySelectorAll('.copy h1 span'), { y: -220 })
  //         gsap.set(lastCard.querySelectorAll('.copy p span'), { y: 60, opacity: 0 })
  //   
  //         setTimeout(() => {
  //           isAnimating = false
  //         }, 420)
  //       }
  //     })
  //   
  //     gsap.to(nextTitleChars, {
  //       y: 0,
  //       duration: 0.9,
  //       ease: 'stackEase',
  //       stagger: 0.04
  //     })
  //   
  //     gsap.to(nextMetaChars, {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.55,
  //       ease: 'power3.out',
  //       stagger: 0.02,
  //       delay: 0.12
  //     })
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-animacao-rolagem-3" ref={raiz}>
      <div className="page">
          <header className="topbar">
            <div className="brand">ÉLAN STUDIO</div>
            <div className="hint">Click anywhere</div>
          </header>
      
          <div className="container">
            <div className="slider">
              <article className="card">
                <img
                  src={s.imagem}
                  alt="Mountain landscape" />
                <div className="copy">
                  <h1>{s.titulo}</h1>
                  <p>{s.texto}</p>
                </div>
              </article>
      
              <article className="card">
                <img
                  src={s.imagem2}
                  alt="Lake and forest" />
                <div className="copy">
                  <h1>{s.titulo2}</h1>
                  <p>{s.texto2}</p>
                </div>
              </article>
      
              <article className="card">
                <img
                  src={s.imagem3}
                  alt="Sunset hills" />
                <div className="copy">
                  <h1>{s.titulo3}</h1>
                  <p>{s.texto3}</p>
                </div>
              </article>
      
              <article className="card">
                <img
                  src={s.imagem4}
                  alt="Waterfall valley" />
                <div className="copy">
                  <h1>{s.titulo4}</h1>
                  <p>{s.texto4}</p>
                </div>
              </article>
      
              <article className="card">
                <img
                  src={s.imagem5}
                  alt="Forest road" />
                <div className="copy">
                  <h1>{s.titulo5}</h1>
                  <p>{s.texto5}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  );
}