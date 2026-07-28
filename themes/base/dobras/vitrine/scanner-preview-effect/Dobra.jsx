"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/scanner-preview-effect
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: webgl).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //       const codeChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?";
  //   
  //       class CardStreamController {
  //         constructor() {
  //           this.container = document.getElementById("cardStream");
  //           this.cardLine = document.getElementById("cardLine");
  //           
  //           this.position = 0;
  //           this.velocity = 250;
  //           this.direction = -1;
  //           this.isAnimating = true;
  //           this.isDragging = false;
  //   
  //           this.lastTime = 0;
  //           this.lastMouseX = 0;
  //           this.mouseVelocity = 0;
  //           this.friction = 0.95;
  //           this.minVelocity = 30;
  //   
  //           this.containerWidth = 0;
  //           this.cardLineWidth = 0;
  //   
  //           this.init();
  //         }
  //   
  //         init() {
  //           this.populateCardLine();
  //           this.calculateDimensions();
  //           this.setupEventListeners();
  //           this.updateCardPosition();
  //           this.animate();
  //           this.startPeriodicUpdates();
  //         }
  //   
  //         calculateDimensions() {
  //           this.containerWidth = this.container.offsetWidth;
  //           const cardWidth = 400;
  //           const cardGap = 60;
  //           const cardCount = this.cardLine.children.length;
  //           this.cardLineWidth = (cardWidth + cardGap) * cardCount;
  //         }
  //   
  //         setupEventListeners() {
  //           this.cardLine.addEventListener("mousedown", (e) => this.startDrag(e));
  //           document.addEventListener("mousemove", (e) => this.onDrag(e));
  //           document.addEventListener("mouseup", () => this.endDrag());
  //   
  //           this.cardLine.addEventListener("touchstart", (e) => this.startDrag(e.touches[0]), { passive: false });
  //           document.addEventListener("touchmove", (e) => this.onDrag(e.touches[0]), { passive: false });
  //           document.addEventListener("touchend", () => this.endDrag());
  //   
  //           this.cardLine.addEventListener("wheel", (e) => this.onWheel(e));
  //           this.cardLine.addEventListener("selectstart", (e) => e.preventDefault());
  //           this.cardLine.addEventListener("dragstart", (e) => e.preventDefault());
  //   
  //           window.addEventListener("resize", () => this.calculateDimensions());
  //         }
  //   
  //         startDrag(e) {
  //           e.preventDefault();
  //           this.isDragging = true;
  //           this.isAnimating = false;
  //           this.lastMouseX = e.clientX;
  //           this.mouseVelocity = 0;
  //   
  //           const transform = window.getComputedStyle(this.cardLine).transform;
  //           if (transform !== "none") {
  //             const matrix = new DOMMatrix(transform);
  //             this.position = matrix.m41;
  //           }
  //   
  //           this.cardLine.style.animation = "none";
  //           this.cardLine.classList.add("dragging");
  //   
  //           document.body.style.userSelect = "none";
  //           document.body.style.cursor = "grabbing";
  //         }
  //   
  //         onDrag(e) {
  //           if (!this.isDragging) return;
  //           e.preventDefault();
  //   
  //           const deltaX = e.clientX - this.lastMouseX;
  //           this.position += deltaX;
  //           this.mouseVelocity = deltaX * 60;
  //           this.lastMouseX = e.clientX;
  //   
  //           this.cardLine.style.transform = `translateX(${this.position}px)`;
  //           this.updateCardClipping();
  //         }
  //   
  //         endDrag() {
  //           if (!this.isDragging) return;
  //           this.isDragging = false;
  //           this.cardLine.classList.remove("dragging");
  //   
  //           if (Math.abs(this.mouseVelocity) > this.minVelocity) {
  //             this.velocity = Math.abs(this.mouseVelocity);
  //             this.direction = this.mouseVelocity > 0 ? 1 : -1;
  //           } else {
  //             this.velocity = 250;
  //           }
  //   
  //           this.isAnimating = true;
  //           document.body.style.userSelect = "";
  //           document.body.style.cursor = "";
  //         }
  //   
  //         animate() {
  //           const currentTime = performance.now();
  //           const deltaTime = (currentTime - this.lastTime) / 1000;
  //           this.lastTime = currentTime;
  //   
  //           if (this.isAnimating && !this.isDragging) {
  //             if (this.velocity > this.minVelocity) {
  //               this.velocity *= this.friction;
  //             } else {
  //               this.velocity = Math.max(this.minVelocity, this.velocity);
  //             }
  //   
  //             this.position += this.velocity * this.direction * deltaTime;
  //             this.updateCardPosition();
  //           }
  //   
  //           requestAnimationFrame(() => this.animate());
  //         }
  //   
  //         updateCardPosition() {
  //           const containerWidth = this.containerWidth;
  //           const cardLineWidth = this.cardLineWidth;
  //   
  //           if (this.position < -cardLineWidth) {
  //             this.position = containerWidth;
  //           } else if (this.position > containerWidth) {
  //             this.position = -cardLineWidth;
  //           }
  //   
  //           this.cardLine.style.transform = `translateX(${this.position}px)`;
  //           this.updateCardClipping();
  //         }
  //   
  //         onWheel(e) {
  //           e.preventDefault();
  //           const scrollSpeed = 20;
  //           const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
  //           this.position += delta;
  //           this.updateCardPosition();
  //           this.updateCardClipping();
  //         }
  //   
  //         generateCode(width, height) {
  //           const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  //           const pick = (arr) => arr[randInt(0, arr.length - 1)];
  //   
  //           const library = [
  //             "// compiled preview • scanner demo",
  //             "const SCAN_WIDTH = 8;",
  //             "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
  //             "const bounds = { w: window.innerWidth, h: 300 };"
  //           ];
  //   
  //           for (let i = 0; i < 40; i++) {
  //             library.push(`const v${i} = (${randInt(1, 9)} + ${randInt(10, 99)}) * 0.${randInt(1, 9)};`);
  //           }
  //   
  //           let flow = library.join(" ");
  //           const totalChars = width * height;
  //           while (flow.length < totalChars + width) {
  //             flow += " " + pick(library);
  //           }
  //   
  //           let out = "";
  //           let offset = 0;
  //           for (let row = 0; row < height; row++) {
  //             let line = flow.slice(offset, offset + width);
  //             if (line.length < width) line = line + " ".repeat(width - line.length);
  //             out += line + (row < height - 1 ? "\n" : "");
  //             offset += width;
  //           }
  //           return out;
  //         }
  //   
  //         calculateCodeDimensions(cardWidth, cardHeight) {
  //           const fontSize = 11;
  //           const lineHeight = 13;
  //           const charWidth = 6;
  //           const width = Math.floor(cardWidth / charWidth);
  //           const height = Math.floor(cardHeight / lineHeight);
  //           return { width, height, fontSize, lineHeight };
  //         }
  //   
  //         createCardWrapper(index) {
  //           const wrapper = document.createElement("div");
  //           wrapper.className = "card-wrapper";
  //   
  //           const normalCard = document.createElement("div");
  //           normalCard.className = "card card-normal";
  //   
  //           const cardImages = [
  //             "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png",
  //             "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png",
  //             "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png",
  //             "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png",
  //             "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png",
  //           ];
  //   
  //           const cardImage = document.createElement("img");
  //           cardImage.className = "card-image";
  //           cardImage.src = cardImages[index % cardImages.length];
  //           
  //           cardImage.onerror = () => {
  //             const canvas = document.createElement("canvas");
  //             canvas.width = 400;
  //             canvas.height = 250;
  //             const ctx = canvas.getContext("2d");
  //             const gradient = ctx.createLinearGradient(0, 0, 400, 250);
  //             gradient.addColorStop(0, "#667eea");
  //             gradient.addColorStop(1, "#764ba2");
  //             ctx.fillStyle = gradient;
  //             ctx.fillRect(0, 0, 400, 250);
  //             cardImage.src = canvas.toDataURL();
  //           };
  //   
  //           normalCard.appendChild(cardImage);
  //   
  //           const asciiCard = document.createElement("div");
  //           asciiCard.className = "card card-ascii";
  //           const asciiContent = document.createElement("div");
  //           asciiContent.className = "ascii-content";
  //   
  //           const { width, height, fontSize, lineHeight } = this.calculateCodeDimensions(400, 250);
  //           asciiContent.style.fontSize = fontSize + "px";
  //           asciiContent.style.lineHeight = lineHeight + "px";
  //           asciiContent.textContent = this.generateCode(width, height);
  //   
  //           asciiCard.appendChild(asciiContent);
  //           wrapper.appendChild(normalCard);
  //           wrapper.appendChild(asciiCard);
  //   
  //           return wrapper;
  //         }
  //   
  //         updateCardClipping() {
  //           const scannerX = window.innerWidth / 2;
  //           const scannerWidth = 8;
  //           const scannerLeft = scannerX - scannerWidth / 2;
  //           const scannerRight = scannerX + scannerWidth / 2;
  //           let anyScanningActive = false;
  //   
  //           document.querySelectorAll(".card-wrapper").forEach((wrapper) => {
  //             const rect = wrapper.getBoundingClientRect();
  //             const cardLeft = rect.left;
  //             const cardRight = rect.right;
  //             const cardWidth = rect.width;
  //   
  //             const normalCard = wrapper.querySelector(".card-normal");
  //             const asciiCard = wrapper.querySelector(".card-ascii");
  //   
  //             if (cardLeft < scannerRight && cardRight > scannerLeft) {
  //               anyScanningActive = true;
  //               const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
  //               const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);
  //   
  //               const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
  //               const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;
  //   
  //               normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
  //               asciiCard.style.setProperty("--clip-left", `${asciiClipLeft}%`);
  //   
  //               if (!wrapper.hasAttribute("data-scanned") && scannerIntersectLeft > 0) {
  //                 wrapper.setAttribute("data-scanned", "true");
  //                 const scanEffect = document.createElement("div");
  //                 scanEffect.className = "scan-effect";
  //                 wrapper.appendChild(scanEffect);
  //                 setTimeout(() => {
  //                   if (scanEffect.parentNode) {
  //                     scanEffect.parentNode.removeChild(scanEffect);
  //                   }
  //                 }, 600);
  //               }
  //             } else {
  //               if (cardRight < scannerLeft) {
  //                 normalCard.style.setProperty("--clip-right", "100%");
  //                 asciiCard.style.setProperty("--clip-left", "100%");
  //               } else if (cardLeft > scannerRight) {
  //                 normalCard.style.setProperty("--clip-right", "0%");
  //                 asciiCard.style.setProperty("--clip-left", "0%");
  //               }
  //               wrapper.removeAttribute("data-scanned");
  //             }
  //           });
  //   
  //           if (window.setScannerScanning) {
  //             window.setScannerScanning(anyScanningActive);
  //           }
  //         }
  //   
  //         updateAsciiContent() {
  //           document.querySelectorAll(".ascii-content").forEach((content) => {
  //             if (Math.random() < 0.15) {
  //               const { width, height } = this.calculateCodeDimensions(400, 250);
  //               content.textContent = this.generateCode(width, height);
  //             }
  //           });
  //         }
  //   
  //         populateCardLine() {
  //           this.cardLine.innerHTML = "";
  //           const cardsCount = 30;
  //           for (let i = 0; i < cardsCount; i++) {
  //             this.cardLine.appendChild(this.createCardWrapper(i));
  //           }
  //         }
  //   
  //         startPeriodicUpdates() {
  //           setInterval(() => this.updateAsciiContent(), 200);
  //           const updateClipping = () => {
  //             this.updateCardClipping();
  //             requestAnimationFrame(updateClipping);
  //           };
  //           updateClipping();
  //         }
  //       }
  //   
  //       class ParticleSystem {
  //         constructor() {
  //           this.scene = null;
  //           this.camera = null;
  //           this.renderer = null;
  //           this.particles = null;
  //           this.particleCount = 400;
  //           this.canvas = document.getElementById("particleCanvas");
  //           this.init();
  //         }
  //   
  //         init() {
  //           this.scene = new THREE.Scene();
  //           this.camera = new THREE.OrthographicCamera(
  //             -window.innerWidth / 2, window.innerWidth / 2, 125, -125, 1, 1000
  //           );
  //           this.camera.position.z = 100;
  //           this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
  //           this.renderer.setSize(window.innerWidth, 250);
  //           this.renderer.setClearColor(0x000000, 0);
  //   
  //           this.createParticles();
  //           this.animate();
  //           window.addEventListener("resize", () => this.onWindowResize());
  //         }
  //   
  //         createParticles() {
  //           const geometry = new THREE.BufferGeometry();
  //           const positions = new Float32Array(this.particleCount * 3);
  //           const colors = new Float32Array(this.particleCount * 3);
  //           const sizes = new Float32Array(this.particleCount);
  //           const velocities = new Float32Array(this.particleCount);
  //   
  //           const canvas = document.createElement("canvas");
  //           canvas.width = 100;
  //           canvas.height = 100;
  //           const ctx = canvas.getContext("2d");
  //           const half = canvas.width / 2;
  //           const hue = 270; // Alterado para um tom mais roxo
  //   
  //           const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
  //           gradient.addColorStop(0.025, "#fff");
  //           gradient.addColorStop(0.1, `hsl(${hue}, 80%, 60%)`);
  //           gradient.addColorStop(0.25, `hsl(${hue}, 80%, 20%)`);
  //           gradient.addColorStop(1, "transparent");
  //   
  //           ctx.fillStyle = gradient;
  //           ctx.beginPath();
  //           ctx.arc(half, half, half, 0, Math.PI * 2);
  //           ctx.fill();
  //   
  //           const texture = new THREE.CanvasTexture(canvas);
  //   
  //           for (let i = 0; i < this.particleCount; i++) {
  //             positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
  //             positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
  //             positions[i * 3 + 2] = 0;
  //             colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1;
  //             sizes[i] = (Math.random() * 140 + 60) / 8;
  //             velocities[i] = Math.random() * 60 + 30;
  //           }
  //   
  //           geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  //           geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  //           geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
  //           this.velocities = velocities;
  //   
  //           const alphas = new Float32Array(this.particleCount);
  //           for (let i = 0; i < this.particleCount; i++) {
  //             alphas[i] = (Math.random() * 8 + 2) / 10;
  //           }
  //           geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
  //           this.alphas = alphas;
  //   
  //           const material = new THREE.ShaderMaterial({
  //             uniforms: { pointTexture: { value: texture }, size: { value: 15.0 } },
  //             vertexShader: `
  //               attribute float alpha; varying float vAlpha; varying vec3 vColor; uniform float size;
  //               void main() {
  //                 vAlpha = alpha; vColor = color;
  //                 vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  //                 gl_PointSize = size; gl_Position = projectionMatrix * mvPosition;
  //               }
  //             `,
  //             fragmentShader: `
  //               uniform sampler2D pointTexture; varying float vAlpha; varying vec3 vColor;
  //               void main() {
  //                 gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
  //               }
  //             `,
  //             transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: true,
  //           });
  //   
  //           this.particles = new THREE.Points(geometry, material);
  //           this.scene.add(this.particles);
  //         }
  //   
  //         animate() {
  //           requestAnimationFrame(() => this.animate());
  //           if (this.particles) {
  //             const positions = this.particles.geometry.attributes.position.array;
  //             const alphas = this.particles.geometry.attributes.alpha.array;
  //             const time = Date.now() * 0.001;
  //   
  //             for (let i = 0; i < this.particleCount; i++) {
  //               positions[i * 3] += this.velocities[i] * 0.016;
  //               if (positions[i * 3] > window.innerWidth / 2 + 100) {
  //                 positions[i * 3] = -window.innerWidth / 2 - 100;
  //                 positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
  //               }
  //               positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;
  //   
  //               const twinkle = Math.floor(Math.random() * 10);
  //               if (twinkle === 1 && alphas[i] > 0) alphas[i] -= 0.05;
  //               else if (twinkle === 2 && alphas[i] < 1) alphas[i] += 0.05;
  //               alphas[i] = Math.max(0, Math.min(1, alphas[i]));
  //             }
  //             this.particles.geometry.attributes.position.needsUpdate = true;
  //             this.particles.geometry.attributes.alpha.needsUpdate = true;
  //           }
  //           this.renderer.render(this.scene, this.camera);
  //         }
  //   
  //         onWindowResize() {
  //           this.camera.left = -window.innerWidth / 2;
  //           this.camera.right = window.innerWidth / 2;
  //           this.camera.updateProjectionMatrix();
  //           this.renderer.setSize(window.innerWidth, 250);
  //         }
  //       }
  //   
  //       class ParticleScanner {
  //         constructor() {
  //           this.canvas = document.getElementById("scannerCanvas");
  //           this.ctx = this.canvas.getContext("2d");
  //           this.w = window.innerWidth;
  //           this.h = 300;
  //           this.particles = [];
  //           this.count = 0;
  //           this.maxParticles = 800;
  //           this.intensity = 0.8;
  //           this.lightBarX = this.w / 2;
  //           this.lightBarWidth = 3;
  //           this.fadeZone = 60;
  //           this.scanningActive = false;
  //   
  //           this.setupCanvas();
  //           this.createGradientCache();
  //           this.initParticles();
  //           this.animate();
  //   
  //           window.addEventListener("resize", () => this.onResize());
  //         }
  //   
  //         setupCanvas() {
  //           this.canvas.width = this.w;
  //           this.canvas.height = this.h;
  //           this.canvas.style.width = this.w + "px";
  //           this.canvas.style.height = this.h + "px";
  //         }
  //   
  //         onResize() {
  //           this.w = window.innerWidth;
  //           this.lightBarX = this.w / 2;
  //           this.setupCanvas();
  //         }
  //   
  //         createGradientCache() {
  //           this.gradientCanvas = document.createElement("canvas");
  //           this.gradientCtx = this.gradientCanvas.getContext("2d");
  //           this.gradientCanvas.width = 16;
  //           this.gradientCanvas.height = 16;
  //   
  //           const half = this.gradientCanvas.width / 2;
  //           const gradient = this.gradientCtx.createRadialGradient(half, half, 0, half, half, half);
  //           gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  //           gradient.addColorStop(0.3, "rgba(196, 181, 253, 0.8)"); // Roxo brilhante
  //           gradient.addColorStop(0.7, "rgba(139, 92, 246, 0.4)");
  //           gradient.addColorStop(1, "transparent");
  //   
  //           this.gradientCtx.fillStyle = gradient;
  //           this.gradientCtx.beginPath();
  //           this.gradientCtx.arc(half, half, half, 0, Math.PI * 2);
  //           this.gradientCtx.fill();
  //         }
  //   
  //         randomFloat(min, max) { return Math.random() * (max - min) + min; }
  //   
  //         createParticle() {
  //           const speedMultiplier = 1 + (this.intensity / 0.8 - 1) * 1.2;
  //           return {
  //             x: this.lightBarX + this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2),
  //             y: this.randomFloat(0, this.h),
  //             vx: this.randomFloat(0.2, 1.0) * speedMultiplier,
  //             vy: this.randomFloat(-0.15, 0.15) * speedMultiplier,
  //             radius: this.randomFloat(0.4, 1) * (1 + (this.intensity / 0.8 - 1) * 0.7),
  //             alpha: this.randomFloat(0.6, 1),
  //             decay: this.randomFloat(0.005, 0.025),
  //             originalAlpha: 0, life: 1.0, time: 0,
  //             twinkleSpeed: this.randomFloat(0.02, 0.08) * speedMultiplier,
  //             twinkleAmount: this.randomFloat(0.1, 0.25),
  //           };
  //         }
  //   
  //         initParticles() {
  //           for (let i = 0; i < this.maxParticles; i++) {
  //             const p = this.createParticle();
  //             p.originalAlpha = p.alpha;
  //             this.count++;
  //             this.particles[this.count] = p;
  //           }
  //         }
  //   
  //         updateParticle(p) {
  //           p.x += p.vx; p.y += p.vy; p.time++;
  //           p.alpha = p.originalAlpha * p.life + Math.sin(p.time * p.twinkleSpeed) * p.twinkleAmount;
  //           p.life -= p.decay;
  //           if (p.x > this.w + 10 || p.life <= 0) {
  //             p.x = this.lightBarX + this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2);
  //             p.y = this.randomFloat(0, this.h);
  //             p.vx = this.randomFloat(0.2, 1.0);
  //             p.vy = this.randomFloat(-0.15, 0.15);
  //             p.alpha = this.randomFloat(0.6, 1);
  //             p.originalAlpha = p.alpha;
  //             p.life = 1.0;
  //           }
  //         }
  //   
  //         drawParticle(p) {
  //           if (p.life <= 0) return;
  //           let fade = 1;
  //           if (p.y < this.fadeZone) fade = p.y / this.fadeZone;
  //           else if (p.y > this.h - this.fadeZone) fade = (this.h - p.y) / this.fadeZone;
  //           
  //           this.ctx.globalAlpha = Math.max(0, Math.min(1, fade)) * p.alpha;
  //           this.ctx.drawImage(this.gradientCanvas, p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
  //         }
  //   
  //         drawLightBar() {
  //           const verticalGradient = this.ctx.createLinearGradient(0, 0, 0, this.h);
  //           verticalGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  //           verticalGradient.addColorStop(this.fadeZone / this.h, "rgba(255, 255, 255, 1)");
  //           verticalGradient.addColorStop(1 - this.fadeZone / this.h, "rgba(255, 255, 255, 1)");
  //           verticalGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  //   
  //           this.ctx.globalCompositeOperation = "lighter";
  //           
  //           const glow = this.scanningActive ? 3.5 : 1.0;
  //           const lw = this.lightBarWidth;
  //   
  //           // Substituído roundRect por fillRect para evitar bugs de renderização em alguns navegadores
  //           const coreGradient = this.ctx.createLinearGradient(this.lightBarX - lw / 2, 0, this.lightBarX + lw / 2, 0);
  //           coreGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  //           coreGradient.addColorStop(0.3, `rgba(230, 200, 255, ${0.9 * glow})`);
  //           coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${1 * glow})`);
  //           coreGradient.addColorStop(0.7, `rgba(230, 200, 255, ${0.9 * glow})`);
  //           coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  //   
  //           this.ctx.globalAlpha = 1;
  //           this.ctx.fillStyle = coreGradient;
  //           this.ctx.fillRect(this.lightBarX - lw / 2, 0, lw, this.h);
  //   
  //           const glow1Gradient = this.ctx.createLinearGradient(this.lightBarX - lw * 2, 0, this.lightBarX + lw * 2, 0);
  //           glow1Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
  //           glow1Gradient.addColorStop(0.5, `rgba(196, 181, 253, ${0.8 * glow})`);
  //           glow1Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
  //   
  //           this.ctx.globalAlpha = this.scanningActive ? 1.0 : 0.8;
  //           this.ctx.fillStyle = glow1Gradient;
  //           this.ctx.fillRect(this.lightBarX - lw * 2, 0, lw * 4, this.h);
  //   
  //           const glow2Gradient = this.ctx.createLinearGradient(this.lightBarX - lw * 4, 0, this.lightBarX + lw * 4, 0);
  //           glow2Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
  //           glow2Gradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.4 * glow})`);
  //           glow2Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
  //   
  //           this.ctx.globalAlpha = this.scanningActive ? 0.8 : 0.6;
  //           this.ctx.fillStyle = glow2Gradient;
  //           this.ctx.fillRect(this.lightBarX - lw * 4, 0, lw * 8, this.h);
  //   
  //           if (this.scanningActive) {
  //             const glow3Gradient = this.ctx.createLinearGradient(this.lightBarX - lw * 8, 0, this.lightBarX + lw * 8, 0);
  //             glow3Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
  //             glow3Gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
  //             glow3Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
  //   
  //             this.ctx.globalAlpha = 0.6;
  //             this.ctx.fillStyle = glow3Gradient;
  //             this.ctx.fillRect(this.lightBarX - lw * 8, 0, lw * 16, this.h);
  //           }
  //   
  //           this.ctx.globalCompositeOperation = "destination-in";
  //           this.ctx.globalAlpha = 1;
  //           this.ctx.fillStyle = verticalGradient;
  //           this.ctx.fillRect(0, 0, this.w, this.h);
  //         }
  //   
  //         render() {
  //           const targetIntensity = this.scanningActive ? 1.8 : 0.8;
  //           const targetMaxParticles = this.scanningActive ? 2500 : 800;
  //           
  //           this.intensity += (targetIntensity - this.intensity) * 0.05;
  //           this.maxParticles += (targetMaxParticles - this.maxParticles) * 0.05;
  //   
  //           this.ctx.globalCompositeOperation = "source-over";
  //           this.ctx.clearRect(0, 0, this.w, this.h);
  //           this.drawLightBar();
  //   
  //           this.ctx.globalCompositeOperation = "lighter";
  //           for (let i = 1; i <= this.count; i++) {
  //             if (this.particles[i]) {
  //               this.updateParticle(this.particles[i]);
  //               this.drawParticle(this.particles[i]);
  //             }
  //           }
  //   
  //           if (Math.random() < this.intensity && this.count < this.maxParticles) {
  //             this.count++;
  //             this.particles[this.count] = this.createParticle();
  //           }
  //   
  //           if (this.count > this.maxParticles + 200) {
  //             const excess = Math.min(15, this.count - this.maxParticles);
  //             for (let i = 0; i < excess; i++) delete this.particles[this.count - i];
  //             this.count -= excess;
  //           }
  //         }
  //   
  //         animate() {
  //           this.render();
  //           requestAnimationFrame(() => this.animate());
  //         }
  //   
  //         setScanningActive(active) {
  //           this.scanningActive = active;
  //         }
  //       }
  //   
  //       let cardStream, particleSystem, particleScanner;
  //   
  //       document.addEventListener("DOMContentLoaded", () => {
  //         cardStream = new CardStreamController();
  //         particleSystem = new ParticleSystem();
  //         particleScanner = new ParticleScanner();
  //   
  //         window.setScannerScanning = (active) => {
  //           if (particleScanner) particleScanner.setScanningActive(active);
  //         };
  //       });
  //     
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-scanner-preview-effect" ref={raiz}>
      <div className="container">
          <canvas id="particleCanvas"></canvas>
          <canvas id="scannerCanvas"></canvas>
      
          <div className="scanner"></div>
      
          <div className="card-stream" id="cardStream">
            <div className="card-line" id="cardLine"></div>
          </div>
        </div>
    </section>
  );
}