"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/svg-mask-scroll-transitions
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   
  //       gsap.registerPlugin(ScrollTrigger);
  //   
  //       /* Initialize Lenis for Smooth Scrolling */
  //       const isTouch = window.matchMedia('(pointer: coarse)').matches;
  //       const lenis = new Lenis({
  //         lerp: 0.15,
  //         smoothWheel: true,
  //         smoothTouch: !isTouch,
  //       });
  //   
  //       lenis.on('scroll', ScrollTrigger.update);
  //       gsap.ticker.add((time) => {
  //         lenis.raf(time * 1000);
  //       });
  //   
  //       /* Application State */
  //       let currentMode = 'horizontal';
  //       const modes = ['horizontal', 'random', 'vertical', 'column'];
  //       const modeTitles = {
  //         'horizontal': '(Horizontal Blinds)',
  //         'random': '(Random Grid)',
  //         'vertical': '(Vertical Blinds)',
  //         'column': '(Column Grid)'
  //       };
  //       
  //       const svgNS = 'http://www.w3.org/2000/svg';
  //       let blindsSets = [];
  //       let master;
  //       let progressTrigger;
  //   
  //       /* Geometry Generators for the 4 Styles */
  //       function createHorizontalBlinds(g, vbWidth, vbHeight) {
  //         const BLIND_COUNT = 30;
  //         const h = vbHeight / BLIND_COUNT;
  //         const blinds = [];
  //         let currentY = 0;
  //         for (let i = 0; i < BLIND_COUNT; i++) {
  //           const centerY = vbHeight - (currentY + h / 2);
  //           const rTop = document.createElementNS(svgNS, 'rect');
  //           const rBot = document.createElementNS(svgNS, 'rect');
  //           [rTop, rBot].forEach(r => {
  //             r.setAttribute('x', 0);
  //             r.setAttribute('width', vbWidth);
  //             r.setAttribute('height', 0);
  //             r.setAttribute('fill', 'white');
  //             r.setAttribute('shape-rendering', 'crispEdges');
  //             r.setAttribute('y', centerY);
  //             g.appendChild(r);
  //           });
  //           blinds.push({ top: rTop, bottom: rBot, y: centerY, h: h / 2 });
  //           currentY += h;
  //         }
  //         return { type: 'horizontal', elements: blinds };
  //       }
  //   
  //       function createRandomGrid(g, vbWidth, vbHeight) {
  //         const cols = window.innerWidth <= 599 ? 6 : window.innerWidth <= 1024 ? 10 : 14;
  //         const rows = Math.round(cols * (vbHeight / vbWidth));
  //         const cellW = vbWidth / cols;
  //         const cellH = vbHeight / rows;
  //         const cells = [];
  //         for (let y = 0; y < rows; y++) {
  //           for (let x = 0; x < cols; x++) {
  //             const rect = document.createElementNS(svgNS, 'rect');
  //             rect.setAttribute('x', x * cellW);
  //             rect.setAttribute('y', y * cellH);
  //             rect.setAttribute('width', cellW + 0.5);
  //             rect.setAttribute('height', cellH + 0.5);
  //             rect.setAttribute('fill', 'white');
  //             rect.setAttribute('shape-rendering', 'crispEdges');
  //             rect.setAttribute('opacity', 0);
  //             g.appendChild(rect);
  //             cells.push(rect);
  //           }
  //         }
  //         return { type: 'random', elements: cells };
  //       }
  //   
  //       function createVerticalBlinds(g, vbWidth, vbHeight, isFirstLayer) {
  //         const BLIND_COUNT = 12;
  //         const w = vbWidth / BLIND_COUNT;
  //         const blinds = [];
  //         let currentX = 0;
  //         for (let i = 0; i < BLIND_COUNT; i++) {
  //           const centerX = currentX + w / 2;
  //           const rL = document.createElementNS(svgNS, 'rect');
  //           const rR = document.createElementNS(svgNS, 'rect');
  //           [rL, rR].forEach(r => {
  //             r.setAttribute('y', 0);
  //             r.setAttribute('height', vbHeight);
  //             r.setAttribute('width', isFirstLayer ? w / 2 + 0.5 : 0);
  //             r.setAttribute('fill', 'white');
  //             r.setAttribute('shape-rendering', 'crispEdges');
  //             g.appendChild(r);
  //           });
  //           if (isFirstLayer) {
  //             rL.setAttribute('x', centerX - w / 2 - 0.1);
  //             rR.setAttribute('x', centerX);
  //           } else {
  //             rL.setAttribute('x', centerX);
  //             rR.setAttribute('x', centerX);
  //           }
  //           blinds.push({ left: rL, right: rR, x: centerX, w: w / 2 });
  //           currentX += w;
  //         }
  //         return { type: 'vertical', elements: blinds, isFirstLayer };
  //       }
  //   
  //       function createColumnGrid(g, vbWidth, vbHeight) {
  //         const cols = window.innerWidth <= 599 ? 6 : window.innerWidth <= 1024 ? 10 : 14;
  //         const rows = Math.round(cols * (vbHeight / vbWidth));
  //         const cellW = vbWidth / cols;
  //         const cellH = vbHeight / rows;
  //         const cells = [];
  //         for (let y = 0; y < rows; y++) {
  //           for (let x = 0; x < cols; x++) {
  //             const rect = document.createElementNS(svgNS, 'rect');
  //             rect.setAttribute('x', x * cellW);
  //             rect.setAttribute('y', y * cellH);
  //             rect.setAttribute('width', cellW + 0.5);
  //             rect.setAttribute('height', cellH + 0.5);
  //             rect.setAttribute('fill', 'white');
  //             rect.setAttribute('shape-rendering', 'crispEdges');
  //             rect.setAttribute('opacity', 0);
  //             g.appendChild(rect);
  //             cells.push(rect);
  //           }
  //         }
  //         return { type: 'column', elements: cells, rows, cols };
  //       }
  //   
  //       /* Animation Factory */
  //       function getAnimationForBlinds(data) {
  //         if (data.type === 'horizontal') {
  //           return gsap.timeline().to(
  //             data.elements.flatMap(b => [b.top, b.bottom]),
  //             {
  //               attr: {
  //                 y: i => i % 2 === 0 ? data.elements[Math.floor(i / 2)].y - data.elements[Math.floor(i / 2)].h : data.elements[Math.floor(i / 2)].y,
  //                 height: i => data.elements[Math.floor(i / 2)].h + 0.1
  //               },
  //               ease: 'power3.out',
  //               stagger: { each: 0.02, from: 'start' }
  //             }
  //           );
  //         } else if (data.type === 'random') {
  //           const shuffled = gsap.utils.shuffle([...data.elements]);
  //           return gsap.timeline().to(shuffled, {
  //             opacity: 1, duration: 1.0, ease: 'power3.out', stagger: { each: 0.02 }
  //           });
  //         } else if (data.type === 'vertical') {
  //           return gsap.to(
  //             data.elements.flatMap(b => [b.left, b.right]),
  //             {
  //               attr: {
  //                 x: i => i % 2 === 0 ? data.elements[Math.floor(i / 2)].x - data.elements[Math.floor(i / 2)].w - 0.1 : data.elements[Math.floor(i / 2)].x,
  //                 width: i => data.elements[Math.floor(i / 2)].w + 0.2
  //               },
  //               ease: 'none',
  //               stagger: { each: 0.02, from: 'start' }
  //             }
  //           );
  //         } else if (data.type === 'column') {
  //           const ordered = [];
  //           for (let x = 0; x < data.cols; x++) {
  //             const col = [];
  //             for (let y = 0; y < data.rows; y++) col.push(data.elements[y * data.cols + x]);
  //             ordered.push(...gsap.utils.shuffle(col));
  //           }
  //           return gsap.timeline().to(ordered, {
  //             opacity: 1, duration: 1, ease: 'power3.out', stagger: { each: 0.02 }
  //           });
  //         }
  //       }
  //   
  //       /* Main Timeline Builder */
  //       function buildMasterTimeline() {
  //         if (master) master.kill();
  //         const texts = gsap.utils.toArray('.txt');
  //   
  //         if (currentMode === 'vertical') {
  //           // Vertical blinds start with the first image fully visible
  //           master = gsap.timeline({ scrollTrigger: { trigger: '.stage', start: 'top top', end: 'bottom bottom', scrub: 2.0, invalidateOnRefresh: true }});
  //           gsap.set(texts, { clipPath: 'inset(0% 0% 100% 0%)', y: 40, opacity: 0 });
  //           gsap.set(texts[0], { clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1 });
  //   
  //           blindsSets.forEach((data, i) => {
  //             if (i === 0) return;
  //             if (texts[i - 1]) {
  //               master.to(texts[i - 1], { clipPath: 'inset(0% 0% 100% 0%)', y: -40, opacity: 0, duration: 0.8 }, '>');
  //             }
  //             master.add(getAnimationForBlinds(data), '-=0.3');
  //             if (texts[i]) {
  //               master.to(texts[i], { clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1, duration: 0.8 }, '-=0.5');
  //             }
  //             master.to({}, { duration: 1 });
  //           });
  //         } else {
  //           // Horizontal, Random, and Column Grids
  //           master = gsap.timeline({ scrollTrigger: { trigger: '.stage', start: 'top top', end: 'bottom bottom', scrub: 2.5, anticipatePin: 1, invalidateOnRefresh: true }});
  //           gsap.set(texts, { clearProps: 'all' });
  //   
  //           blindsSets.forEach((data, i) => {
  //             master.add(getAnimationForBlinds(data));
  //             if (texts[i]) {
  //               master.to(texts[i], { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: currentMode === 'random' ? 2.6 : (currentMode === 'column' ? 2.2 : 1.5), ease: 'expo.out' }, '-=0.3');
  //               master.to(texts[i], { clipPath: 'inset(0% 0% 100% 0%)', y: currentMode === 'horizontal' ? -30 : 0, duration: currentMode === 'random' ? 2.0 : (currentMode === 'column' ? 1.6 : 1.2), ease: 'power2.inOut' }, '+=0.8');
  //             }
  //           });
  //         }
  //       }
  //   
  //       /* Layout & Geometry Refresher */
  //       function updateLayout() {
  //         const width = window.innerWidth;
  //         const height = window.innerHeight;
  //         const vbWidth = currentMode === 'vertical' ? (width / height) * 100 : 100;
  //         const vbHeight = currentMode === 'vertical' ? 100 : (height / width) * 100;
  //   
  //         const layers = document.querySelectorAll('.layer');
  //         blindsSets = [];
  //   
  //         layers.forEach((svg, i) => {
  //           svg.setAttribute('viewBox', `0 0 ${vbWidth} ${vbHeight}`);
  //           const maskRect = svg.querySelector('mask rect');
  //           if (maskRect) {
  //             maskRect.setAttribute('width', vbWidth);
  //             maskRect.setAttribute('height', vbHeight);
  //           }
  //           const img = svg.querySelector('image');
  //           if (img) {
  //             img.setAttribute('width', vbWidth);
  //             img.setAttribute('height', vbHeight);
  //             if (currentMode === 'vertical') {
  //               img.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  //             } else {
  //               img.setAttribute('preserveAspectRatio', 'none');
  //             }
  //           }
  //           const blindId = svg.querySelector('g[id^="blinds"]').id;
  //           const g = document.getElementById(blindId);
  //           g.innerHTML = ''; 
  //   
  //           let result;
  //           if (currentMode === 'horizontal') result = createHorizontalBlinds(g, vbWidth, vbHeight);
  //           else if (currentMode === 'random') result = createRandomGrid(g, vbWidth, vbHeight);
  //           else if (currentMode === 'vertical') result = createVerticalBlinds(g, vbWidth, vbHeight, i === 0);
  //           else if (currentMode === 'column') result = createColumnGrid(g, vbWidth, vbHeight);
  //   
  //           if (result) blindsSets.push(result);
  //         });
  //   
  //         buildMasterTimeline();
  //       }
  //   
  //       function initProgressBar() {
  //         if (progressTrigger) progressTrigger.kill();
  //         const progressFills = gsap.utils.toArray('.progress-bar .fill');
  //   
  //         progressTrigger = ScrollTrigger.create({
  //           trigger: '.stage',
  //           start: 'top top',
  //           end: 'bottom bottom',
  //           scrub: 0.3,
  //           onUpdate: (self) => {
  //             const progress = self.progress;
  //             const totalSteps = progressFills.length;
  //             progressFills.forEach((fill, i) => {
  //               let p = (progress - i / totalSteps) * totalSteps;
  //               p = Math.max(0, Math.min(1, p));
  //               fill.style.width = `${p * 100}%`;
  //             });
  //           },
  //         });
  //       }
  //   
  //       /* Handle UI Mode Changes */
  //       function setMode(mode) {
  //         if (!modes.includes(mode)) return;
  //         currentMode = mode;
  //         
  //         document.querySelectorAll('.demo-btn').forEach(btn => {
  //           btn.classList.toggle('current', btn.dataset.mode === mode);
  //         });
  //         document.getElementById('demo-title').innerText = modeTitles[mode];
  //   
  //         // Jump to top to reset animations
  //         lenis.scrollTo(0, { immediate: true });
  //         window.scrollTo(0, 0);
  //   
  //         // Re-initialize with slight delay to ensure scroll resets globally
  //         setTimeout(() => {
  //           updateLayout();
  //           initProgressBar();
  //           ScrollTrigger.refresh();
  //         }, 50);
  //       }
  //   
  //       document.querySelectorAll('.demo-btn').forEach(btn => {
  //         btn.addEventListener('click', (e) => {
  //           e.preventDefault();
  //           setMode(btn.dataset.mode);
  //         });
  //       });
  //   
  //       document.getElementById('next-demo-btn').addEventListener('click', (e) => {
  //         e.preventDefault();
  //         const nextIndex = (modes.indexOf(currentMode) + 1) % modes.length;
  //         setMode(modes[nextIndex]);
  //       });
  //   
  //       /* Initialization */
  //       updateLayout();
  //       initProgressBar();
  //   
  //       let resizeTimer;
  //       window.addEventListener('resize', () => {
  //         clearTimeout(resizeTimer);
  //         resizeTimer = setTimeout(() => {
  //           ScrollTrigger.refresh();
  //           updateLayout();
  //         }, 250);
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-svg-mask-scroll-transitions" ref={raiz}>
      <header className="frame">
          <nav className="frame__demos">
            <span>{s.rotulo}</span>
            <button className="demo-btn current" data-mode="horizontal" onClick={s.onClick}>{s.acao}</button>
            <button className="demo-btn" data-mode="random" onClick={s.onClick}>{s.acao2}</button>
            <button className="demo-btn" data-mode="vertical" onClick={s.onClick}>{s.acao3}</button>
            <button className="demo-btn" data-mode="column" onClick={s.onClick}>{s.acao4}</button>
          </nav>
        </header>
        
        <div className="spacer">
          <h1>On-Scroll SVG Mask Transitions<br /><span id="demo-title">{s.rotulo2}</span></h1>
          <span className="info">{s.rotulo3}</span>
        </div>
        
        <section className="stage">
          <div className="layers">
            <svg className="layer" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <mask id="mask1" maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="100" height="100" fill="var(--base-600)" />
                  <g id="blinds1"></g>
                </mask>
              </defs>
              <image href={s.destino || '#'}
                     x="0" y="0" width="100" height="100"
                     preserveAspectRatio="xMidYMid slice" mask="url(#mask1)" />
            </svg>
            <svg className="layer" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <mask id="mask2" maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="100" height="100" fill="var(--base-600)" />
                  <g id="blinds2"></g>
                </mask>
              </defs>
              <image href={s.destino2 || '#'}
                     x="0" y="0" width="100" height="100"
                     preserveAspectRatio="xMidYMid slice" mask="url(#mask2)" />
            </svg>
            <svg className="layer" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <mask id="mask3" maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="100" height="100" fill="var(--base-600)" />
                  <g id="blinds3"></g>
                </mask>
              </defs>
              <image href={s.destino3 || '#'}
                     x="0" y="0" width="100" height="100"
                     preserveAspectRatio="xMidYMid slice" mask="url(#mask3)" />
            </svg>
            
            <div className="progress-bar">
              <div className="segment"><div className="fill"></div></div>
              <div className="segment"><div className="fill"></div></div>
              <div className="segment"><div className="fill"></div></div>
            </div>
            
            <div className="texts">
              <div className="txt">
                <h1>SPRING<br />BREEZE</h1>
                <h2>{s.titulo}</h2>
                <span>{s.rotulo4}</span>
              </div>
              <div className="txt">
                <h1>SUMMER<br />GLOW</h1>
                <h2>{s.titulo2}</h2>
                <span>{s.rotulo5}</span>
              </div>
              <div className="txt">
                <h1>AUTUMN<br />MIST</h1>
                <h2>{s.titulo3}</h2>
                <span>{s.rotulo6}</span>
              </div>
            </div>
          </div>
        </section>
        
        <div className="spacer">
          <h1><a href="#" id="next-demo-btn">{s.acao5}</a></h1>
        </div>
    </section>
  );
}