"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-9
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import Menu from './menu';
  //   import { preloadFonts } from '../utils';
  //   
  //   // Preload typekit fonts
  //   preloadFonts('dba6omz').then(() => {
  //       document.body.classList.remove('loading');
  //   });
  //   
  //   const menu = new Menu(document.querySelector('nav.menu'));
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-9" ref={raiz}>
      <main>
      		<h1 className="title">{s.titulo}</h1>
      		<div className="text text--menu">&mdash; Menu</div>
      		<a className="text text--subscribe" href={s.destino || '#'}>{s.acao}</a>
      		<div className="links">
      			<a href={s.destino2 || '#'}>{s.acao2}</a>
      			<a href="">{s.acao3}</a>
      		</div>
      		<div className="demos">
      			<a href="index.html" className="demo demo--current">01</a>
      			<a href="index2.html" className="demo">02</a>
      			<a href="index3.html" className="demo">03</a>
      		</div>
      		<p className="credits">Inspired and based on this <a href={s.destino3 || '#'}>{s.acao4}</a></p>
      		<nav className="menu">
                  <a className="menu__item" href={s.destino4 || '#'} rel="nofollow" target="_blank">
                      <svg className="menu__text" viewBox="0 0 110 20" preserveAspectRatio="xMinYMid meet">
                          <defs>
                              <filter id="goo-1">
                                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"></feGaussianBlur>
                                  <feColorMatrix in="blur" mode="matrix" values="	1 0 0 0 0  
      																			0 1 0 0 0  
      																			1 0 1 0 0  
      																			0 0 0 15 -8" result="goo"></feColorMatrix>
                                  <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                              </filter>
                          </defs>
                          <g>
                              <text x="0" y="15">Cobain</text>
                              <text x="0" y="15">1994-4-5</text>
                          </g>
                      </svg>
                  </a>
                  <a className="menu__item" href={s.destino5 || '#'} rel="nofollow" target="_blank">
                      <svg className="menu__text" viewBox="0 0 110 20" preserveAspectRatio="xMinYMid meet">
                          <defs>
                              <filter id="goo-3">
                                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"></feGaussianBlur>
                                  <feColorMatrix in="blur" mode="matrix" values=" 1 0 0 0 0  
                                                                                  0 1 0 0 0  
                                                                                  1 0 1 0 0  
                                                                                  0 0 0 15 -8" result="goo"></feColorMatrix>
                                  <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                              </filter>
                          </defs>
                          <g>
                              <text x="0" y="15">Morrison</text>
                              <text x="0" y="15">1971-7-3</text>
                          </g>
                      </svg>
                  </a>
                  <a className="menu__item" href={s.destino6 || '#'} rel="nofollow" target="_blank">
                      <svg className="menu__text" viewBox="0 0 110 20" preserveAspectRatio="xMinYMid meet">
                          <defs>
                              <filter id="goo-2">
                                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"></feGaussianBlur>
                                  <feColorMatrix in="blur" mode="matrix" values="	1 0 0 0 0  
      																			0 1 0 0 0  
      																			1 0 1 0 0  
      																			0 0 0 15 -8" result="goo"></feColorMatrix>
                                  <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                              </filter>
                          </defs>
                          <g>
                              <text x="0" y="15">Lennon</text>
                              <text x="0" y="15">1980-12-8</text>
                          </g>
                      </svg>
                  </a>
                  <a className="menu__item" href={s.destino7 || '#'} rel="nofollow" target="_blank">
                      <svg className="menu__text" viewBox="0 0 110 20" preserveAspectRatio="xMinYMid meet">
                          <defs>
                              <filter id="goo-4">
                                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"></feGaussianBlur>
                                  <feColorMatrix in="blur" mode="matrix" values="	1 0 0 0 0  
      																			0 1 0 0 0  
      																			1 0 1 0 0  
      																			0 0 0 15 -8" result="goo"></feColorMatrix>
                                  <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                              </filter>
                          </defs>
                          <g>
                              <text x="0" y="15">Marley</text>
                              <text x="0" y="15">1981-5-11</text>
                          </g>
                      </svg>
                  </a>
              </nav>
      	</main>
    </section>
  );
}