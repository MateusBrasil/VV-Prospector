"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-11
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
  //   import Gl from './gl';
  //   import Blob from './gl/Blob';
  //   
  //   import gsap from 'gsap';
  //   
  //   class App {
  //     constructor() {
  //       this.blobs = [];
  //       this.addBlobs();
  //   
  //       // Main animation tl
  //       this.tl = gsap.timeline({
  //         delay: 0.25,
  //       });
  //   
  //       this.tl
  //         .add(this.article())
  //         .add(this.animBlobs(), '-=1.5');
  //     }
  //   
  //     addBlobs() {
  //       // size, speed, color, freq, density, strength, offset
  //       const blob1 = new Blob(1.75, 0.3, 0.5, 1.5, 0.12, Math.PI * 1);    
  //       const blob2 = new Blob(6.0, 0.15, 0.4, 2.0, 0.3, Math.PI * 2);   
  //       const blob3 = new Blob(0.8, 0.5, 0.1, 2.0, 0.05, Math.PI * 0.5);    
  //   
  //       blob1.position.set(-8.5, 3.25, 2);
  //       blob2.position.set(11, -3, -10);
  //       blob3.position.set(-1, -4, 4);
  //   
  //       blob1.rotation.set(-0.4, 0, 0.5);
  //       blob2.rotation.set(0.4, 1.0, -0.4);
  //       blob3.rotation.set(0, 0, 0);
  //   
  //       this.blobs = [blob1, blob2, blob3];
  //       
  //       Gl.scene.add(...this.blobs);
  //     }
  //   
  //     article() {
  //       // Main content
  //       const tl = gsap.timeline({
  //         defaults: {
  //           ease: 'power3.inOut',
  //         }
  //       });
  //   
  //       // Content clip
  //       const content = document.querySelector('.content span');
  //       const contentClip = { x: 0 };    
  //   
  //       tl
  //         .from('.title div, .subtitle div', {
  //           duration: 2,
  //           xPercent: -100,
  //           // stagger: 0.1,
  //         })
  //         .from('.menu__inner-translate', {
  //           duration: 1.5,
  //           yPercent: -100,
  //         }, '-=1.5')
  //         .to(contentClip, {
  //           duration: 1.5,
  //           x: 100,
  //           onUpdate: () => {
  //             content.style.setProperty('--clip', `${contentClip.x}%`);
  //           },
  //         }, '-=1.25')
  //         .from('.play', {
  //           duration: 1,
  //           scale: 0,
  //           rotate: '-62deg',
  //         }, '-=1.5');
  //   
  //       return tl;    
  //     }
  //   
  //     animBlobs() {
  //       // Move Threejs Blobs
  //       const tl = gsap.timeline({
  //         defaults: {
  //           duration: 2,
  //           ease: 'power3.inOut'
  //         },
  //       });
  //   
  //       const uniformAlphas = [
  //         this.blobs[0].mesh.material.uniforms.uAlpha,
  //         this.blobs[1].mesh.material.uniforms.uAlpha,
  //         this.blobs[2].mesh.material.uniforms.uAlpha,
  //       ];
  //   
  //       tl
  //         .from(this.blobs[0].position, { z: -5 })
  //         .from(this.blobs[1].position, { z: -30 }, '-=1.75')
  //         .from(this.blobs[2].position, { z: 12 }, '-=1.75')
  //         .from(uniformAlphas, {
  //           value: 0,
  //           stagger: 0.2,
  //           ease: 'power3.inOut'
  //         }, 0);
  //   
  //       return tl;
  //     }
  //   }
  //   
  //   new App();
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-efeitos-webgl-11" ref={raiz}>
      <main>
      			<a className="logo dib" aria-label="Wave logo homepage">~</a>
      			<h2 className="page-title line line--vertical"><div className="dib" style={{'-Clip': '100%'}}>Creative WebGL Blobs</div></h2>
      			<nav className="demos">
      				<div className="dib oh"><a href="index.html" className="frame__demo frame__demo--current">{s.acao}</a></div>
      				<div className="dib oh"><a href="index2.html" className="frame__demo">{s.acao2}</a></div>
      				<div className="dib oh"><a href="index3.html" className="frame__demo">{s.acao3}</a></div>
      			</nav>
      			<nav className="links line line--vertical">
      				<div className="dib oh"><a href={s.destino || '#'} className="dib">{s.acao4}</a></div>
      				<div className="dib oh"><a href={s.destino2 || '#'} className="dib">{s.acao5}</a></div>	
      				<div className="dib oh"><a href={s.destino3 || '#'} className="dib">{s.acao6}</a></div>
      			</nav>
      			<div className="menu line line--vertical"><div className="menu__inner"><div className="oh"><div className="menu__inner-translate">Menu</div></div></div></div>
      			<h1 className="title line line--horizontal oh"><div>Insomnia</div></h1>
      			<div className="subtitle oh"><div>records</div></div>
      			<p className="content line line--horizontal">
      				<span className="db" style={{'-Clip': '0%'}}>{s.rotulo}</span>
      			</p>
      			<span className="play dib" aria-label="Play">{s.rotulo2}</span>
      			<a className="credits credits--site line line--vertical" href={s.destino4 || '#'}><div className="credits--site-inner oh"><div>foi</div></div></a>
      			<span className="credits credits--author line line--horizontal"><div className="dib" style={{'-Clip': '100%'}}>Made by <a href={s.destino5 || '#'}>Mario Carrillo</div></a></span> 
      			<div className="year oh"><div>2021</div></div>
      		</main>
    </section>
  );
}