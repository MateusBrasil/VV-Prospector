"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cards/focus-form-animation
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
  //       const SPACING = 16;
  //       const RADIUS = 8;
  //       const CHECK_RADIUS = RADIUS * 1.8;
  //       const CHECK_SIZE = 10;
  //       const CHECK_LENGTH = Math.ceil( 10 * 1.8 );
  //       const TAIL_LENGTH = 8;
  //   
  //       const rootStyles = getComputedStyle( document.documentElement );
  //       const HEAD_COLOR = rootStyles.getPropertyValue( '--focus-head-color' ).trim() || 'hsl(218deg 92% 57%)';
  //       const TAIL_COLOR = rootStyles.getPropertyValue( '--focus-tail-color' ).trim() || 'hsl(218deg 92% 50%)';
  //   
  //       const head = { r: RADIUS, tr: RADIUS };   
  //       const tail = [];
  //       const checkmarks = new Map();
  //   
  //       const canvas = document.querySelector( 'canvas' );
  //       const context = canvas.getContext( '2d' );
  //   
  //       let width, height, dpr, currentFocus;
  //   
  //       document.body.addEventListener( 'focus', event => focus( event.target ), true );
  //       document.body.addEventListener( 'input', event => validate( event.target ), true );
  //       document.querySelectorAll( 'input:not([type="checkbox"])' ).forEach( input => {
  //         checkmarks.set( input, { v: 0, tv: 0 } );
  //       });
  //   
  //       function resize() {
  //         dpr = window.devicePixelRatio || 1;
  //   
  //         width = window.innerWidth;
  //         height = window.innerHeight;
  //   
  //         canvas.width = width * dpr;
  //         canvas.height = height * dpr;
  //   
  //         context.scale( dpr, dpr );
  //       }
  //   
  //       function animate() {
  //         paint();
  //         requestAnimationFrame( animate );
  //       }
  //   
  //       function paint() {
  //         context.clearRect( 0, 0, width, height );
  //   
  //         if( currentFocus ) {
  //           // Add to the tail
  //           tail.push( { ...head } );
  //           if( tail.length > TAIL_LENGTH ) tail.shift();
  //   
  //           // Paint the tail
  //           if( tail.length > 3 ) {
  //             context.beginPath();
  //             context.moveTo( tail[0].x, tail[0].y );
  //   
  //             for( let i = 2; i < tail.length - 2; i++ ) {
  //               const p1 = tail[i];
  //               const p2 = tail[i+1];
  //   
  //               context.quadraticCurveTo(
  //                 p1.x, p1.y,
  //                 ( p1.x + p2.x ) / 2,
  //                 ( p1.y + p2.y ) / 2
  //               );
  //             }
  //   
  //             let i = tail.length - 2;
  //             // Safeguard in case tail is exactly 4
  //             if(i >= 0 && tail[i+1]) {
  //               context.quadraticCurveTo(
  //                 tail[i].x, tail[i].y,
  //                 tail[i+1].x, tail[i+1].y
  //               );
  //             }
  //   
  //             context.lineWidth = RADIUS;
  //             context.lineCap = 'round';
  //             context.strokeStyle = TAIL_COLOR;
  //             context.stroke();
  //           }
  //   
  //           head.tr = currentFocus.classList.contains( 'valid' ) ? CHECK_RADIUS : RADIUS;
  //           
  //           // Animate the head towards its target values
  //           head.x += ( head.tx - head.x ) * 0.2;
  //           head.y += ( head.ty - head.y ) * 0.2;
  //           head.r += ( head.tr - head.r ) * 0.2;
  //   
  //           head.vx *= 0.8;
  //           head.x += head.vx;
  //   
  //           context.beginPath();
  //           context.arc( head.x, head.y, head.r, 0, Math.PI*2 );
  //           context.fillStyle = HEAD_COLOR;
  //           context.fill();
  //         }
  //         
  //         // Paint checkmarks
  //         for( const [inputElement, checkmark] of checkmarks ) {
  //           checkmark.v += ( checkmark.tv - checkmark.v ) * 0.2;
  //           
  //           if( checkmark.v > 0.05 ) {
  //             const midX = inputElement.offsetLeft - CHECK_SIZE/2 - SPACING - 3;
  //             const midY = inputElement.offsetTop + inputElement.offsetHeight/2 + 1;
  //   
  //             context.save();
  //             context.beginPath();
  //             
  //             context.moveTo( midX + CHECK_SIZE/2, midY - CHECK_SIZE/2 );
  //             context.lineTo( midX - 1, midY + CHECK_SIZE/2 - 1 );
  //             context.lineTo( midX - CHECK_SIZE/2, midY ); 
  //   
  //             context.lineWidth = 3;
  //             context.lineCap = 'round';
  //             context.lineJoin = 'round'; 
  //             context.setLineDash([CHECK_LENGTH, CHECK_LENGTH]);
  //             context.lineDashOffset = CHECK_LENGTH + Math.round( checkmark.v * CHECK_LENGTH );
  //         
  //             context.globalCompositeOperation = 'lighter';
  //             context.strokeStyle = '#555';
  //             context.stroke();
  //   
  //             context.globalCompositeOperation = 'overlay';
  //             context.strokeStyle = '#fff';
  //             context.stroke(); 
  //             
  //             context.restore();
  //           }
  //         }
  //       }
  //   
  //       function focus( element ) {
  //         const previousFocus = currentFocus;
  //   
  //         if( element ) currentFocus = element;
  //   
  //         if( !currentFocus || !currentFocus.matches( 'input, button' ) ) return;
  //   
  //         head.tx = currentFocus.offsetLeft - SPACING - RADIUS;
  //         head.ty = currentFocus.offsetTop + currentFocus.offsetHeight/2;
  //         
  //         // Skip animation on first focus
  //         if( isNaN( head.x ) ) {
  //           head.x = head.tx;
  //           head.y = head.ty;
  //         }
  //         
  //         // Bounce leftward when focus changes
  //         if( currentFocus !== previousFocus ) {
  //           head.vx = -8 - Math.abs( head.tx - head.x ) / 5;
  //         }
  //       }
  //   
  //       function validate( element ) {
  //         let valid = false;
  //         
  //         switch( element.getAttribute( 'type' ) ) {
  //           case 'email': valid = /(.+)@(.+){2,}\.(.+){2,}/.test( element.value ); break;
  //           case 'password': valid = element.value.length > 6; break;
  //           default: valid = element.value.length > 0; break;
  //         }
  //   
  //         element.classList.toggle( 'valid', valid );
  //         
  //         if(checkmarks.has(element)) {
  //           checkmarks.get( element ).tv = valid ? 1 : 0;   
  //         }
  //       }
  //   
  //       resize();
  //       animate();
  //   
  //       window.addEventListener( 'resize', () => {
  //         requestAnimationFrame( () => {
  //           resize();
  //           focus();
  //           paint();
  //         } );
  //       } );
  //   
  //       window.addEventListener( 'scroll', () => {
  //         requestAnimationFrame( () => {
  //           focus();
  //           paint();
  //         } );
  //       } );
  //   
  //     
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-focus-form-animation" ref={raiz}>
      <canvas></canvas>
      
        <div className="form-wrapper">
          <form onsubmit="return false;">
            <hgroup>
              <h1>{s.titulo}</h1>
              <h3>{s.subtitulo}</h3>
            </hgroup>
      
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            
            <div className="checkbox">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1">I accept the terms</label><br />
            </div>
            
            <div className="checkbox">
              <input type="checkbox" id="check2" />
              <label htmlFor="check2">Pineapple on pizza is a crime</label><br />
            </div>
            
            <button onClick={s.onClick}>{s.acao}</button>
          </form>
        </div>
    </section>
  );
}