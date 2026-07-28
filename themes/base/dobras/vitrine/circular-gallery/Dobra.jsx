"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/circular-gallery
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
    <section className="dobra" data-dobra="vitrine-circular-gallery" ref={raiz}>
      <section className="wrapper">
          <div id="item-1" data-title="Yoni Kaplan-Nadel" style={{'-I': '1', '-BgImg': 'url(https://picsum.photos/id/27/1200/1200)'}}>
            <a href="#item-1"><img src={s.imagem} alt="Gallery Image 1" /></a>
          </div>
          
          <div id="item-2" data-title="Alejandro Escamilla" style={{'-I': '2', '-BgImg': 'url(https://picsum.photos/id/25/1200/1200)'}}>
            <a href="#item-2"><img src={s.imagem2} alt="Gallery Image 2" /></a>
          </div>
          
          <div id="item-3" data-title="Gabriel Santiago" style={{'-I': '3', '-BgImg': 'url(https://picsum.photos/id/372/1200/1200)'}}>
            <a href="#item-3"><img src={s.imagem3} alt="Gallery Image 3" /></a>
          </div>
          
          <div id="item-4" data-title="Michael Quinn" style={{'-I': '4', '-BgImg': 'url(https://picsum.photos/id/380/1200/1200)'}}>
            <a href="#item-4"><img src={s.imagem4} alt="Gallery Image 4" /></a>
          </div>
          
          <div id="item-5" data-title="Chris Brignola" style={{'-I': '5', '-BgImg': 'url(https://picsum.photos/id/392/1200/1200)'}}>
            <a href="#item-5"><img src={s.imagem5} alt="Gallery Image 5" /></a>
          </div>
          
          <div id="item-6" data-title="Matteo Minelli" style={{'-I': '6', '-BgImg': 'url(https://picsum.photos/id/456/1200/1200)'}}>
            <a href="#item-6"><img src={s.imagem6} alt="Gallery Image 6" /></a>
          </div>
          
          <div id="item-7" data-title="Matthew Clark" style={{'-I': '7', '-BgImg': 'url(https://picsum.photos/id/469/1200/1200)'}}>
            <a href="#item-7"><img src={s.imagem7} alt="Gallery Image 7" /></a>
          </div>
          
          <div id="item-8" data-title="Volkan Olmez" style={{'-I': '8', '-BgImg': 'url(https://picsum.photos/id/497/1200/1200)'}}>
            <a href="#item-8"><img src={s.imagem8} alt="Gallery Image 8" /></a>
          </div>
          
          <div id="item-9" data-title="Jeff Sheldon"  style={{'-I': '9', '-BgImg': 'url(https://picsum.photos/id/515/1200/1200)'}}>
            <a href="#item-9"><img src={s.imagem9} alt="Gallery Image 9" /></a>
          </div>
          
          <div id="item-10" data-title="Christian Holzinger" style={{'-I': '10', '-BgImg': 'url(https://picsum.photos/id/521/1200/1200)'}}>
            <a href="#item-10"><img src={s.imagem10} alt="Gallery Image 10" /></a>
          </div>
          
          <div id="item-11" data-title="Artur Pokusin" style={{'-I': '11', '-BgImg': 'url(https://picsum.photos/id/549/1200/1200)'}} >
            <a href="#item-11"><img src={s.imagem11} alt="Gallery Image 11" /></a>
          </div>
          
          <div id="item-12" data-title="Sam Wheeler" style={{'-I': '12', '-BgImg': 'url(https://picsum.photos/id/569/1200/1200)'}}>
            <a href="#item-12"><img src={s.imagem12} alt="Gallery Image 12" /></a>
          </div>
          
          <div id="item-13" data-title="Griffin Keller" style={{'-I': '13', '-BgImg': 'url(https://picsum.photos/id/637/1200/1200)'}}>
            <a href="#item-13"><img src={s.imagem13} alt="Gallery Image 13" /></a>
          </div>
          
          <div id="item-14" data-title="Fré Sonneveld" style={{'-I': '14', '-BgImg': 'url(https://picsum.photos/id/641/1200/1200)'}}>
            <a href="#item-14"><img src={s.imagem14} alt="Gallery Image 14" /></a>
          </div>
          
          <div id="item-15" data-title="Luke Pamer" style={{'-I': '15', '-BgImg': 'url(https://picsum.photos/id/669/1200/1200)'}}>
            <a href="#item-15"><img src={s.imagem15} alt="Gallery Image 15" /></a>
          </div>
          
          <div id="item-16" data-title="Joshua Earle" style={{'-I': '16', '-BgImg': 'url(https://picsum.photos/id/685/1200/1200)'}}>
            <a href="#item-16"><img src={s.imagem16} alt="Gallery Image 16" /></a>
          </div>
          
          <div id="item-17" data-title="lee Scott" style={{'-I': '17', '-BgImg': 'url(https://picsum.photos/id/699/1200/1200)'}}>
            <a href="#item-17"><img src={s.imagem17} alt="Gallery Image 17" /></a>
          </div>
          
          <div id="item-18" data-title="Biegun Wschodni" style={{'-I': '18', '-BgImg': 'url(https://picsum.photos/id/611/1200/1200)'}}>
            <a href="#item-18"><img src={s.imagem18} alt="Gallery Image 18" /></a>
          </div>
          
          <div id="item-19" data-title="Drew Geraets" style={{'-I': '19', '-BgImg': 'url(https://picsum.photos/id/480/1200/1200)'}}>
            <a href="#item-19"><img src={s.imagem19} alt="Gallery Image 19" /></a>
          </div>
          
          <div id="item-20" data-title="Julia Caesar" style={{'-I': '20', '-BgImg': 'url(https://picsum.photos/id/773/1200/1200)'}}>
            <a href="#item-20"><img src={s.imagem20} alt="Gallery Image 20" /></a>
          </div>
          
          <h1>{s.titulo}</h1>
        </section>
    </section>
  );
}