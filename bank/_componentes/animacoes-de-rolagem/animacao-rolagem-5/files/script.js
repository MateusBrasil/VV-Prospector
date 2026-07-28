import * as THREE from "https://esm.sh/three@0.160.0";
import { gsap } from "https://esm.sh/gsap@3.12.5";

let sliderInitialized = false;

document.addEventListener("DOMContentLoaded", () => {
  initImageSlider();
});

function scrambleTextAnimation(element, finalString, duration = 1.5) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  const state = { p: 0 };

  return gsap.to(state, {
    duration,
    p: 1,
    ease: "power2.inOut",
    onUpdate: () => {
      const len = finalString.length;
      const revealCount = Math.floor(state.p * len);
      let result = "";

      for (let i = 0; i < len; i++) {
        result += i < revealCount
          ? finalString[i]
          : chars[Math.floor(Math.random() * chars.length)];
      }

      element.textContent = result;
    },
    onComplete: () => {
      element.textContent = finalString;
    }
  });
}

function initImageSlider() {
  if (sliderInitialized) return;
  sliderInitialized = true;

  const slider = document.querySelector("[data-image-slider-init]");

  const imageCollection = [
    "https://assets.codepen.io/7558/horror-01.jpg",
    "https://assets.codepen.io/7558/horror-02.jpg",
    "https://assets.codepen.io/7558/horror-03.jpg",
    "https://assets.codepen.io/7558/horror-04.jpg",
    "https://assets.codepen.io/7558/horror-05.jpg"
  ];

  const slideData = [
    {
      title: "Awakening Abyss",
      description: "Eldritch Emergence",
      number: "∅1",
      paragraphLines: ["Archived VHS footage", "captures the moment."]
    },
    {
      title: "Fractured Signal",
      description: "Glitch Documentary",
      number: "∅2",
      paragraphLines: ["Broadcast distorts", "forbidden knowledge."]
    },
    {
      title: "Echoes of Deep",
      description: "Haunted Vision",
      number: "∅3",
      paragraphLines: ["Submerged memories", "resurface in spectral."]
    },
    {
      title: "Glitching Sanctum",
      description: "Digital Cultifacts",
      number: "∅4",
      paragraphLines: ["A sacred data temple", "collapses into noise."]
    },
    {
      title: "Frozen Leviathan",
      description: "Apocalyptic Witness",
      number: "∅5",
      paragraphLines: ["The last frame holds", "the frozen titan."]
    }
  ];

  const config = {
    totalImages: imageCollection.length,
    transitionDuration: 1.8,
    scrollThrottleDelay: 1000,
    touchThreshold: 10,
    globalIntensity: 1.0,
    speedMultiplier: 1.0,
    noiseLevel: 0.5
  };

  const state = {
    currentImageIndex: 0,
    isTransitioning: false,
    scrollingEnabled: true,
    lastScrollTimestamp: 0,
    touchStartPosition: 0,
    isTouchActive: false,
    renderer: null,
    scene: null,
    camera: null,
    shaderMaterial: null,
    slideTextures: [],
    texturesLoaded: false,
    startTime: Date.now()
  };

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uTexture1;
    uniform sampler2D uTexture2;
    uniform float uProgress;
    uniform vec2 uResolution;
    uniform vec2 uTexture1Size;
    uniform vec2 uTexture2Size;
    uniform float uTime;
    uniform float uGlobalIntensity;
    uniform float uSpeedMultiplier;
    uniform float uNoiseLevel;
    uniform float uWipeAngle;
    uniform float uWipeAberrationStrength;
    uniform float uWipeEdgeWidth;
    uniform float uWipeColorBleeding;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    vec2 getCoverUV(vec2 uv, vec2 textureSize) {
      vec2 s = uResolution / textureSize;
      float scale = max(s.x, s.y);
      vec2 scaledSize = textureSize * scale;
      vec2 offset = (uResolution - scaledSize) * 0.5;
      return (uv * uResolution - offset) / scaledSize;
    }

    vec4 sampleTexture(sampler2D tex, vec2 uv, vec2 texSize) {
      vec2 coverUV = getCoverUV(uv, texSize);
      coverUV = clamp(coverUV, 0.0, 1.0);
      return texture2D(tex, coverUV);
    }

    vec4 applyWhiteGlitchOverlay(vec4 color, vec2 uv, float intensity) {
      float time = uTime * uSpeedMultiplier * 2.0;
      float glitchSize = 1500.0;
      vec2 glitchUV = floor(uv * glitchSize) / glitchSize;
      float glitchRandom = random(glitchUV + floor(time * 12.0));
      float whiteGlitch = step(0.98, glitchRandom) * uNoiseLevel;
      float fineNoise = random(uv * 3000.0 + time * 0.5);
      float whiteNoise = step(0.995, fineNoise) * uNoiseLevel;
      float glitchIntensity = 0.4 * uGlobalIntensity;
      float totalWhiteGlitch = (whiteGlitch + whiteNoise) * glitchIntensity * intensity;
      vec3 result = color.rgb;
      result = mix(result, vec3(1.0), totalWhiteGlitch * 0.6);
      return vec4(result, color.a);
    }

    vec4 glitchWipeEffect(vec2 uv, float progress) {
      vec4 img1 = sampleTexture(uTexture1, uv, uTexture1Size);
      vec4 img2 = sampleTexture(uTexture2, uv, uTexture2Size);

      if (progress < 0.01 || progress > 0.99) {
        return mix(img1, img2, smoothstep(0.0, 1.0, progress));
      }

      float time = uTime * uSpeedMultiplier * 2.0;
      vec2 wipeUV = uv;
      float angleRad = radians(uWipeAngle);
      mat2 rotation = mat2(cos(angleRad), -sin(angleRad), sin(angleRad), cos(angleRad));
      wipeUV = rotation * (wipeUV - 0.5) + 0.5;

      float curvedProgress = progress;
      float wipePos = curvedProgress * 1.2 - 0.1;
      float wipeEdge = wipePos + sin(wipeUV.y * 20.0 + time) * 0.02;
      float isRevealed = step(wipeUV.x, wipeEdge);
      float distanceFromWipe = abs(wipeUV.x - wipeEdge);

      float caIntensity = curvedProgress < 0.2
        ? smoothstep(0.0, 0.2, curvedProgress)
        : curvedProgress < 0.75
          ? 1.0
          : 1.0 - smoothstep(0.75, 0.95, curvedProgress);

      float caZone = (1.0 - smoothstep(0.0, 0.12 * uWipeEdgeWidth, distanceFromWipe)) * caIntensity * uGlobalIntensity;
      vec4 currentImg = mix(img1, img2, isRevealed);

      if (caZone > 0.05) {
        float baseShift = sin(time * 3.0 + wipeUV.y * 15.0) * 0.035 * caZone * uWipeAberrationStrength;
        float secondaryShift = cos(time * 2.0 + wipeUV.x * 10.0) * 0.02 * caZone;
        float totalShift = baseShift + secondaryShift;
        float bleeding = uWipeColorBleeding;

        float r;
        float g;
        float b;

        if (isRevealed > 0.5) {
          r = sampleTexture(uTexture2, uv + vec2(totalShift * 2.5 * bleeding, totalShift * 0.5), uTexture2Size).r;
          g = sampleTexture(uTexture2, uv + vec2(totalShift * 0.5, -totalShift * 0.3), uTexture2Size).g;
          b = sampleTexture(uTexture2, uv - vec2(totalShift * 2.0 * bleeding, totalShift * 0.7), uTexture2Size).b;
        } else {
          r = sampleTexture(uTexture1, uv + vec2(totalShift * 2.5 * bleeding, totalShift * 0.5), uTexture1Size).r;
          g = sampleTexture(uTexture1, uv + vec2(totalShift * 0.5, -totalShift * 0.3), uTexture1Size).g;
          b = sampleTexture(uTexture1, uv - vec2(totalShift * 2.0 * bleeding, totalShift * 0.7), uTexture1Size).b;
        }

        vec4 chromaticImg = vec4(r, g, b, 1.0);
        float edgeGlow = 1.0 - smoothstep(0.0, 0.015, distanceFromWipe);
        chromaticImg.rgb += vec3(1.0, 0.6, 0.9) * edgeGlow * 0.4 * caIntensity;
        float digitalNoise = random(uv * 200.0 + time * 0.1) * uNoiseLevel;
        chromaticImg.rgb += vec3(digitalNoise - 0.5) * 0.1 * caZone;
        currentImg = mix(currentImg, chromaticImg, caZone);
      }

      currentImg = applyWhiteGlitchOverlay(currentImg, uv, caIntensity * 0.9 * uGlobalIntensity);
      return currentImg;
    }

    void main() {
      gl_FragColor = glitchWipeEffect(vUv, uProgress);
    }
  `;

  function loadImageTexture(src) {
    return new Promise((resolve, reject) => {
      const loader = new THREE.TextureLoader();
      loader.load(
        src,
        texture => {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.userData = {
            size: new THREE.Vector2(texture.image.width, texture.image.height)
          };
          resolve(texture);
        },
        undefined,
        reject
      );
    });
  }

  function createFeaturedImageWrapper(imageIndex, direction) {
    const featuredWrapper = document.createElement("div");
    featuredWrapper.className = "featured-image-wrapper";
    featuredWrapper.setAttribute("data-featured-wrapper", "");

    const featuredImage = document.createElement("img");
    featuredImage.src = imageCollection[imageIndex];
    featuredImage.alt = `Project ${imageIndex + 1}`;
    featuredWrapper.appendChild(featuredImage);

    featuredWrapper.style.clipPath = direction === "down"
      ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    return featuredWrapper;
  }

  function executeSlideTransition(direction) {
    if (state.isTransitioning || !state.scrollingEnabled || !state.texturesLoaded) return;

    state.isTransitioning = true;
    state.scrollingEnabled = false;

    const nextIndex = direction === "down"
      ? (state.currentImageIndex === config.totalImages - 1 ? 0 : state.currentImageIndex + 1)
      : (state.currentImageIndex === 0 ? config.totalImages - 1 : state.currentImageIndex - 1);

    const currentTexture = state.slideTextures[state.currentImageIndex];
    const nextTexture = state.slideTextures[nextIndex];
    const nextData = slideData[nextIndex];

    const featuredImageContainer = slider.querySelector("[data-featured-image]");
    const currentFeaturedWrapper = featuredImageContainer.querySelector("[data-featured-wrapper]");
    const newFeaturedWrapper = createFeaturedImageWrapper(nextIndex, direction);
    featuredImageContainer.appendChild(newFeaturedWrapper);

    gsap.set(newFeaturedWrapper.querySelector("img"), {
      y: direction === "down" ? "-50%" : "50%"
    });

    const numberEl = slider.querySelector("[data-slide-number] span");
    const titleEl = slider.querySelector("[data-slide-title] h1");
    const descEl = slider.querySelector("[data-slide-description] p");
    const p1El = slider.querySelector("[data-paragraph-line-1] span");
    const p2El = slider.querySelector("[data-paragraph-line-2] span");

    state.shaderMaterial.uniforms.uTexture1.value = currentTexture;
    state.shaderMaterial.uniforms.uTexture2.value = nextTexture;
    state.shaderMaterial.uniforms.uTexture1Size.value.copy(currentTexture.userData.size);
    state.shaderMaterial.uniforms.uTexture2Size.value.copy(nextTexture.userData.size);

    state.currentImageIndex = nextIndex;

    const timeline = gsap.timeline({
      onComplete: () => {
        currentFeaturedWrapper?.remove();
        state.shaderMaterial.uniforms.uProgress.value = 0;
        state.shaderMaterial.uniforms.uTexture1.value = nextTexture;
        state.shaderMaterial.uniforms.uTexture1Size.value.copy(nextTexture.userData.size);
        state.isTransitioning = false;
        setTimeout(() => {
          state.scrollingEnabled = true;
          state.lastScrollTimestamp = Date.now();
        }, 100);
      }
    });

    const featuredClipPath = direction === "down"
      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";

    timeline.fromTo(
      state.shaderMaterial.uniforms.uProgress,
      { value: 0 },
      { value: 1, duration: config.transitionDuration, ease: "power4.inOut" },
      0
    );

    timeline.to(
      newFeaturedWrapper,
      { clipPath: featuredClipPath, duration: config.transitionDuration, ease: "power4.inOut" },
      0
    );

    timeline.to(
      currentFeaturedWrapper.querySelector("img"),
      { y: direction === "down" ? "50%" : "-50%", duration: config.transitionDuration, ease: "power4.inOut" },
      0
    );

    timeline.to(
      newFeaturedWrapper.querySelector("img"),
      { y: "0%", duration: config.transitionDuration, ease: "power4.inOut" },
      0
    );

    [
      { el: numberEl, text: nextData.number },
      { el: titleEl, text: nextData.title },
      { el: descEl, text: nextData.description },
      { el: p1El, text: nextData.paragraphLines[0] },
      { el: p2El, text: nextData.paragraphLines[1] }
    ].forEach(item => scrambleTextAnimation(item.el, item.text, 1.2));
  }

  function handleScrollInteraction(direction) {
    const now = Date.now();
    if (state.isTransitioning || !state.scrollingEnabled) return;
    if (now - state.lastScrollTimestamp < config.scrollThrottleDelay) return;
    state.lastScrollTimestamp = now;
    executeSlideTransition(direction);
  }

  async function initializeRenderer() {
    const canvas = slider.querySelector("[data-webgl-canvas]");
    state.scene = new THREE.Scene();
    state.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    state.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    state.renderer.setSize(window.innerWidth, window.innerHeight);
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    state.shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture1: { value: null },
        uTexture2: { value: null },
        uProgress: { value: 0.0 },
        uTime: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uTexture1Size: { value: new THREE.Vector2(1, 1) },
        uTexture2Size: { value: new THREE.Vector2(1, 1) },
        uGlobalIntensity: { value: config.globalIntensity },
        uSpeedMultiplier: { value: config.speedMultiplier },
        uNoiseLevel: { value: config.noiseLevel },
        uWipeAngle: { value: 15.0 },
        uWipeAberrationStrength: { value: 1.0 },
        uWipeEdgeWidth: { value: 1.0 },
        uWipeColorBleeding: { value: 1.0 }
      },
      vertexShader,
      fragmentShader
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, state.shaderMaterial);
    state.scene.add(mesh);

    for (const src of imageCollection) {
      try {
        state.slideTextures.push(await loadImageTexture(src));
      } catch (error) {
        console.warn(error);
      }
    }

    if (state.slideTextures.length >= 2) {
      state.shaderMaterial.uniforms.uTexture1.value = state.slideTextures[0];
      state.shaderMaterial.uniforms.uTexture2.value = state.slideTextures[1];
      state.shaderMaterial.uniforms.uTexture1Size.value.copy(state.slideTextures[0].userData.size);
      state.shaderMaterial.uniforms.uTexture2Size.value.copy(state.slideTextures[1].userData.size);
      state.texturesLoaded = true;
    }

    const render = () => {
      requestAnimationFrame(render);
      state.shaderMaterial.uniforms.uTime.value = (Date.now() - state.startTime) * 0.001;
      state.renderer.render(state.scene, state.camera);
    };

    render();
  }

  function initEventListeners() {
    window.addEventListener("wheel", e => {
      e.preventDefault();
      handleScrollInteraction(e.deltaY > 0 ? "down" : "up");
    }, { passive: false });

    window.addEventListener("touchstart", e => {
      state.touchStartPosition = e.touches[0].clientY;
      state.isTouchActive = true;
    }, { passive: false });

    window.addEventListener("touchmove", e => {
      e.preventDefault();
      if (!state.isTouchActive || state.isTransitioning) return;
      const diff = state.touchStartPosition - e.touches[0].clientY;
      if (Math.abs(diff) > config.touchThreshold) {
        state.isTouchActive = false;
        handleScrollInteraction(diff > 0 ? "down" : "up");
      }
    }, { passive: false });

    window.addEventListener("resize", () => {
      if (!state.renderer) return;
      state.renderer.setSize(window.innerWidth, window.innerHeight);
      state.shaderMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    });
  }

  initializeRenderer();
  initEventListeners();
}
