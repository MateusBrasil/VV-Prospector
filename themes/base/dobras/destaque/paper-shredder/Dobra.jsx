"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/paper-shredder
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
    
        var container = raiz.current.querySelector('.container');
        var pageGroup = raiz.current.querySelector('.pageGroup');
        var shredderGroup = raiz.current.querySelector('.shredderGroup');
        var stripGroup = raiz.current.querySelector('.stripGroup');
        var nullObject = raiz.current.querySelector('.null-object');
        var pageMask = raiz.current.querySelector('.pageMask');
        var lightBlink = raiz.current.querySelector('.lightBlink');
        var link = raiz.current.querySelector('.link');
    
        var bendLeftAmount = 0;
        var bendRightAmount = 0;
        nullObject.bendL = 0;
        nullObject.bendR = 0;
    
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        
        TweenMax.set(pageMask, {
          attr: {
            y: (isFirefox) ? 300 : 0
          }
        });
    
        TweenMax.set([container, 'svg'], {
          position: 'absolute',
          top: '50%',
          left: '50%',
          xPercent: -50,
          yPercent: -50
        });
    
        // blink the light
        TweenMax.to(lightBlink, 0.3, {
          fill: '#fff',
          repeat: -1,
          ease: SteppedEase.config(1),
          yoyo: true
        });
    
        var tl = new TimelineMax({
          delay: 0.2,
          repeat: -1,
          onRepeat: resetBends
        });
    
        tl.set(pageMask, {
            y: 300
          })
          .set(pageGroup, {
            y: -300
          })
          .set('.strip', {
            y: -300
          })
          .to(pageMask, 1, {
            attr: {
              y: (isFirefox) ? -300 : 0
            },
            y: (isFirefox) ? 0 : -300,
            ease: Power1.easeInOut
          })
          .to(pageGroup, 1, {
            y: 300,
            ease: Power1.easeInOut
          }, '-=1')
          .to('.strip', 0.5, {
            y: -20,
            ease: Power1.easeOut
          }, '-=0.5')
          .to(nullObject, 0.8, {
            bendL: 0,
            onUpdate: bendLeft,
            ease: SlowMo.ease.config(0.1, 0.8, false)
          }, '-=0.3')
          .to(nullObject, 0.8, {
            bendR: 0,
            onUpdate: bendRight,
            ease: SlowMo.ease.config(0.4, 0.8, false)
          }, '-=0.8')
          .to('.left', 0.3, {
            rotation: 3
          }, '-=0.5')
          .staggerTo('.strip', 0.6, {
            y: 300,
            ease: Power4.easeIn
          }, 0.07, '-=0.5');
    
        function bendLeft() {
          bendLeftAmount -= 0.6;
          TweenMax.set('.left', {
            attr: {
              d: "M214,360c0,0,0,126.7,0,138 c0,36.3," + bendLeftAmount + ",72," + bendLeftAmount + ",72"
            }
          });
        }
    
        function bendRight() {
          bendRightAmount += 0.6;
          TweenMax.set('.right', {
            attr: {
              d: "M399,360c0,0,0,132.7,0,144 c0,30.3," + bendRightAmount + ",66," + bendRightAmount + ",66"
            }
          });
        }
    
        function resetBends() {
          bendLeftAmount = 0;
          TweenMax.set('.left', {
            attr: {
              d: "M214,360c0,0,0,126.7,0,138 c0,36.3," + bendLeftAmount + ",72," + bendLeftAmount + ",72"
            }
          });
          bendRightAmount = 0;
          TweenMax.set('.right', {
            attr: {
              d: "M399,360c0,0,0,132.7,0,144 c0,30.3," + bendRightAmount + ",66," + bendRightAmount + ",66"
            }
          });
        }
    
        link.onclick = function(e) {
          window.open('https://codepen.io/chrisgannon/pen/BNaVQO', '_new');
        }
      
  }, []);
  return (
    <section className="dobra" data-dobra="destaque-paper-shredder" ref={raiz}>
      <div className="container">
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 600 600">
            <defs>
              <clipPath id="pageClipPath" clipPathUnits="userSpaceOnUse">
                <rect className="pageMask" width="210" height="280" x="200" y="0" fill="red" />
              </clipPath>
              <clipPath id="stripsClipPath" clipPathUnits="userSpaceOnUse">
                <rect className="stripsMask" width="400" height="280" x="100" y="342" fill="red" />
              </clipPath>
            </defs>
      
            <g className="shredderGroup">
              <rect x="125" y="281" fill="var(--acento)" width="350" height="98" />
              <circle className="lightBlink" fill="var(--base-200)" cx="183" cy="308" r="8" />
              <circle fill="var(--base-100)" cx="157" cy="308" r="8" />
              <rect x="149" y="342.3" fill="var(--base-300)" width="301.3" height="12" />
            </g>
      
            <g className="pageGroup" clipPath="url(#pageClipPath)">
              <rect x="206" y="24" fill="var(--base-100)" width="201.3" height="210" />
              <g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,79c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,91c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,103c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,115c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,127c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,139c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,151c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,163c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,175c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2 c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2 c1.9,0,1.9-2,3.8-2c1.9,0,1.9,2,3.8,2c1.9,0,1.9-2,3.8-2s1.9,2,3.8,2" /></g>
              </g>
              <g>
                <path fill="none" stroke="var(--base-300)" strokeWidth="2" strokeMiterlimit="10" d="M307,211c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2 c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2" />
              </g>
              <g>
                <path fill="none" stroke="var(--base-300)" strokeWidth="2" strokeMiterlimit="10" d="M307,223c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2 c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2c2.5,0,2.5,2,5,2c2.5,0,2.5-2,5-2" />
              </g>
              <rect x="229.3" y="37.7" fill="var(--base-300)" width="69.3" height="6.7" />
              <g>
                <path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M229,60c2.4,0,2.4,2,4.8,2c2.4,0,2.4-2,4.8-2 s2.4,2,4.8,2c2.4,0,2.4-2,4.8-2c2.4,0,2.4,2,4.8,2c2.4,0,2.4-2,4.8-2c2.4,0,2.4,2,4.8,2c2.4,0,2.4-2,4.8-2c2.4,0,2.4,2,4.8,2" />
              </g>
              <g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,91c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,103c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,79c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,115c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,127c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,139c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,151c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,163c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
                <g><path fill="none" stroke="var(--base-100)" strokeWidth="2" strokeMiterlimit="10" d="M368,175c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2 c1.2,0,1.2,2,2.4,2c1.2,0,1.2-2,2.4-2c1.2,0,1.2,2,2.4,2" /></g>
              </g>
            </g>
      
            <g className="stripGroup" clipPath="url(#stripsClipPath)">
              <path className="strip left" fill="none" stroke="var(--base-100)" strokeWidth="16" strokeMiterlimit="10" d="M214,360c0,0,0,126.7,0,138 c0,36.3,0,72,0,72" />
              <g className="strip">
                <rect x="236.9" y="360" fill="var(--base-100)" width="16" height="210" />
                <rect x="236.9" y="448.5" fill="var(--base-300)" width="16" height="32.7" />
              </g>
              <g className="strip">
                <rect x="267.8" y="360" fill="var(--base-100)" width="16" height="210" />
                <rect x="267.8" y="493" fill="var(--base-100)" width="16" height="24.1" />
              </g>
              <g className="strip">
                <rect x="298.7" y="360" fill="var(--base-100)" width="16" height="210" />
              </g>
              <g className="strip">
                <rect x="329.6" y="360" fill="var(--base-100)" width="16" height="210" />
                <rect x="329.6" y="413.5" fill="var(--base-300)" width="16" height="24.1" />
              </g>
              <g className="strip">
                <rect x="360.4" y="360" fill="var(--base-100)" width="16" height="210" />
                <rect x="360.4" y="465" fill="var(--base-100)" width="16" height="12.1" />
              </g>
              <path className="strip right" fill="none" stroke="var(--base-100)" strokeWidth="16" strokeMiterlimit="10" d="M399,360c0,0,0,132.7,0,144 c0,30.3,0,66,0,66" />
            </g>
            <text className="link" x="300" y="570">INTERACTIVE VERSION</text>
          </svg>
          <div className="null-object"></div>
        </div>
    </section>
  );
}