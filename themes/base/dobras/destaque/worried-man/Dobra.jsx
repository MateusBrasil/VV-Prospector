"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/worried-man
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useEffect, useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useEffect(() => {
    
        var xmlns = "http://www.w3.org/2000/svg",
            xlinkns = "http://www.w3.org/1999/xlink",
            select = function(s) {
              return raiz.current.querySelector(s);
            },
            selectAll = function(s) {
              return raiz.current.querySelectorAll(s);
            },
            bgColour = '#000000',
            repeats = -1,
            pop = select('.pop'),
            popContainer = select('.popContainer');
    
        var footBezier = [
          {x: 343, y: 450},
          {x: 401, y: 414},
          {x: 424, y: 427},
          {x: 422, y: 449},
          {x: 343, y: 450}
        ];
    
        var mainTl = new TimelineMax(),
            footLRotateTl = new TimelineMax({repeat: repeats}),
            footRRotateTl = new TimelineMax({repeat: repeats}),
            footLTimeTl = new TimelineMax({repeat: repeats}),
            footRTimeTl = new TimelineMax({repeat: repeats}),
            footLPathTl = new TimelineMax({paused: true}),
            footRPathTl = new TimelineMax({paused: true}),
            footLTl = new TimelineMax({repeat: repeats}),
            footRTl = new TimelineMax({repeat: repeats}),
            torsoTl = new TimelineMax({repeat: repeats}),
            headBobTl = new TimelineMax({repeat: repeats}),
            handBobTl = new TimelineMax({repeat: repeats}),
            roadTl = new TimelineMax({repeat: repeats});
    
        function randomBetween(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        } 
    
        function createPop (obj) {
          var popClone = pop.cloneNode(true);
          popContainer.appendChild(popClone);
          TweenMax.set(popClone, {
            x: obj.target._gsTransform.x,
            y: obj.target._gsTransform.y
          })
        } 
    
        var smoothSinus = Sine.easeInOut;
        
        footLPathTl.to('.footL', 2, {
          bezier: {
            type: "thru",
            values: footBezier,
            autoRotate: false
          },
          ease: Linear.easeNone
        })
          
        footRPathTl.to('.footR', 2, {
          bezier: {
            type: "thru",
            values: footBezier,
            autoRotate: false
          },
          ease: Linear.easeNone
        })
          
        TweenMax.set('svg', {
          visibility: 'visible'
        })
        TweenMax.set('.foot', {
          x: 343,
          y: 450,
          transformOrigin: '80% 50%'
        })
        TweenMax.set(['.shadow'], {
          transformOrigin: '50% 50%'
        })
        TweenMax.set('.hand', {
          transformOrigin: '50% 100%'
        })
    
        footLRotateTl.to('.footL', 0.4, {
          rotation: 30,
          ease: Sine.easeIn
        })
        .to('.footL', 0.6, {
          rotation: -35,
          ease: Sine.easeIn
        } )
        .to('.footL', 0.5, {
          rotation: 0,
          ease: Power4.easeOut
        } )
        .to({}, 0.5,{})
    
        roadTl.to('.road', 0.85, {
          strokeDashoffset:'+=144',
          ease: Linear.easeNone,
          repeat: -1
        })
    
        footRRotateTl.to('.footR', 0.4, {
          rotation: 30,
          ease: Sine.easeIn
        })
        .to('.footR', 0.6, {
          rotation: -35, 
          ease: Sine.easeIn
        } )
        .to('.footR', 0.5, {
          rotation: 0,
          ease: Power4.easeOut
        } )
        .to({}, 0.5,{})
    
    
        footLTimeTl.to(footLPathTl, 2, {
          time: footLPathTl.duration(),
          ease: smoothSinus
        })
    
        footRTimeTl.to(footRPathTl, 2, {
          time: footRPathTl.duration(),
          ease: smoothSinus
        })
    
        torsoTl.to('.upperBody',0.5, {
          y: 20,
          ease: smoothSinus,
          repeat: 1,
          yoyo: true
        })
        .to('.shadow', 0.5, {
          ease: smoothSinus,
          scaleX: 1.1,
          repeat: 1,
          yoyo: true
        }, 0)
    
        headBobTl.to('.headBob',0.5, {
          y: 7,
          ease: smoothSinus,
          repeat: 3,
          yoyo: true
        })
    
        footLTl.add([footLTimeTl, footLRotateTl])
        footRTl.add([footRTimeTl, footRRotateTl])
    
        mainTl.add(footLTl, 0)
        .add(footRTl, 1)
        .add(torsoTl, 0.75)
        .add(headBobTl, 0.85)
        .seek(100)
    
        TweenMax.globalTimeScale(1.42)
      
  }, []);
  return (
    <section className="dobra" data-dobra="destaque-worried-man" ref={raiz}>
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <g id="pop" className="pop" fill="none" stroke="var(--base-100)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1">    
              <circle cx="18.22" cy="17.89" r="0" stroke="var(--base-100)" fill="none"/>
              <line x1="18" y1="10.5" x2="18" y2="0.5"/>
              <line x1="18" y1="25.5" x2="18" y2="35.5"/>
              <line x1="25.5" y1="18" x2="35.5" y2="18"/>
              <line x1="10.5" y1="18" x2="0.5" y2="18"/>
            </g>    
            <path id="dislike" d="M.63,10.86A2.4,2.4,0,0,0,0,12.52,2.52,2.52,0,0,0,2.51,15H7.38a16.46,16.46,0,0,0-.69,4.23v.85A3.36,3.36,0,0,0,10,23.47h.85a.84.84,0,0,0,.82-.63L12.18,21c.62-2.54,2.66-5.37,4.76-5.87a2.52,2.52,0,0,0,2.33,1.6h5a.83.83,0,0,0,.84-.84V.85A.84.84,0,0,0,24.29,0h-5A2.51,2.51,0,0,0,17,1.44L14.15.5A9.25,9.25,0,0,0,11.23,0H4.17A2.52,2.52,0,0,0,1.66,2.54a2.35,2.35,0,0,0,.19.91A2.51,2.51,0,0,0,.63,7.53,2.42,2.42,0,0,0,0,9.19a2.26,2.26,0,0,0,.63,1.67ZM4.18,10H2.51a.84.84,0,0,1-.84-.85.83.83,0,0,1,.84-.84H4.18a.85.85,0,0,0,0-1.7H2.51A.85.85,0,0,1,2.51,5H4.18a.85.85,0,0,0,0-1.7.85.85,0,1,1,0-1.69h7A7.81,7.81,0,0,1,13.56,2L16.73,3V13.37A6.65,6.65,0,0,0,13,15.81a12.16,12.16,0,0,0-2.45,4.71l-.28,1.19H10a1.67,1.67,0,0,1-1.66-1.66V19.2A13.73,13.73,0,0,1,9.16,15h1.73a.85.85,0,0,0,0-1.7H2.48a.85.85,0,0,1-.85-.85.84.84,0,0,1,.85-.84H4.14A.85.85,0,0,0,5,10.73.83.83,0,0,0,4.18,10Z"/>  
            <path id="bush1" d="M73.88,13.19a13.29,13.29,0,0,0-7.22,2.12A16.74,16.74,0,0,0,48,10.91,26.55,26.55,0,0,0,0,26.58H87.27A13.39,13.39,0,0,0,73.88,13.19Z" fill="var(--base-100)"/>
            <path id="bush2" d="M9.88,5.17a9.84,9.84,0,0,1,5.51,1.67A15,15,0,0,1,41.32,8.07,7.5,7.5,0,0,1,43,7.86,7.19,7.19,0,0,1,50.22,15H0A9.87,9.87,0,0,1,9.88,5.17Z" fill="var(--base-100)"/> 
            <path id="bush3" d="M148.39,51.66C144.67-17.85,37.13-17.85,37.13,55.52v8.17C21.84,56.86,0,64.44,0,87.61V99.93c0,3.72,0,3.72,3.71,3.72H204.09c3.86,0,3.86,0,3.86-3.72V87.61c0-41.15-37.87-53.63-59.56-35.95Z" fill="var(--base-100)"/>  
            <path id="loveHeart" d="M12.83,19.21l12-10.75a5.59,5.59,0,0,0-9.46-6L12.84,6.43,10.25,2.51a5.59,5.59,0,0,0-10.14,2,5.52,5.52,0,0,0,.69,4Z" />
            <path className="footPath" id="footPath" d="M358.39,460c-.74,0,58.12-35.73,58.12-35.73,7.12-4.09,19,2.25,23,13.25,3.49,9.58,3,20-2.43,22.1-9.8,0-63.57.3-78.68.38" fill="none" stroke="var(--base-100)" strokeMiterlimit="10"/>
          </defs>
          
          <ellipse className="shadow" cx="410" cy="470" rx="88" ry="5" opacity="0.2"/>
      
          <use xlinkHref="#footPath" opacity="0"/>
      
          <g className="foot footL">
            <path d="M36.52,16.42h-32A4.47,4.47,0,0,1,0,11.94V4.48A4.48,4.48,0,0,1,5,0l32,3.91A4.48,4.48,0,0,1,41,8.39v3.55A4.47,4.47,0,0,1,36.52,16.42Z" fill="var(--base-100)"/>
          </g>
          
          <g className="foot footR">
            <path d="M36.52,16.42h-32A4.47,4.47,0,0,1,0,11.94V4.48A4.48,4.48,0,0,1,5,0l32,3.91A4.48,4.48,0,0,1,41,8.39v3.55A4.47,4.47,0,0,1,36.52,16.42Z" fill="var(--base-100)"/>
          </g> 
          
          <g className="upperBody" transform="translate(10, 0)">
            <g transform="translate(5, -20)" fill="var(--base-100)">
              <path className="torso" d="M407.47,262.21q.4-6.33,1.25-12.61a18,18,0,0,0-2.18-11.27,27.58,27.58,0,0,0-14.22-12.68h0a21.46,21.46,0,0,0-14.17.42c-9.7,3.69-17.49,14-23.12,30.77a143.06,143.06,0,0,0-6.22,44.52c0,13.26,2.4,31.32,11.67,42.17h0a25.4,25.4,0,0,0,8,6.35c2.83,1.67,15.53,7.89,35.17-1h0a37,37,0,0,0,11.91-8.13,10.88,10.88,0,0,0,1.58-12.34l-.46-.9a139.88,139.88,0,0,1-4.29-14.16c-.17-1-.35-2-.55-3a4.9,4.9,0,0,0-.61-1.41c-.36-1.69-3.43-21.94-3.76-23.68A172.92,172.92,0,0,1,407.47,262.21Z"/>
              <g className="hand">
                <circle cx="468.74" cy="285.01" r="20.82"/>
                <rect x="460.77" y="265.14" width="39.15" height="12.54" rx="6.27" ry="6.27" transform="translate(-65.87 349.14) rotate(-37.57)"/>
              </g>
              <circle className="headBob" cx="420" cy="180" r="36" fill="var(--base-100)"/> 
            </g>
          </g>
          <line className="road" strokeWidth="0" stroke="var(--base-100)" x1="0" y1="330" x2="800" y2="330" fill="none" strokeMiterlimit="10" strokeDasharray="12 36 " strokeDashoffset="12"/>
          <g className="popContainer"></g>
        </svg>
    </section>
  );
}