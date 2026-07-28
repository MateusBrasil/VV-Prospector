import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const STYLES = `
  html, body { margin: 0; height: 100%; background: #f4f6fa; overflow: hidden; }
  #section { position: fixed; inset: 0;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    color: var(--ink);
    --ink: #12141a; --ink-2: #565c6b; --ink-3: #9198a6;
    --line: rgba(18,20,26,.14); --line-2: rgba(18,20,26,.07);
    --accent: #1e5bff;
    --corner: 16px; --hover: 1.05; --scrim: .9; --shadow: 1;
    --title-size: 17px; --title-color: #ffffff;
    --bg-top: #ffffff; --bg-bottom: #e9edf4;
  }
  #section *, #section *::before, #section *::after { box-sizing: border-box; }

  #stage { position: fixed; inset: 0; overflow: hidden;
    background: radial-gradient(125% 95% at 50% 4%, var(--bg-top) 0%, var(--bg-bottom) 100%);
    perspective: 1200px; perspective-origin: 50% 50%;
    display: grid; place-items: center;
    cursor: grab; touch-action: none; user-select: none; outline: none; }
  #stage.-drag { cursor: grabbing; }

  #floor { position: absolute; left: 50%; top: 68%; width: 62vw; height: 26vh; z-index: 0;
    transform: translate(-50%,-50%);
    background: radial-gradient(60% 60% at 50% 50%, rgba(18,20,26,.14), rgba(18,20,26,0) 70%);
    filter: blur(6px); pointer-events: none; }
  #ghost { position: absolute; left: 50%; top: 51%; z-index: 0; transform: translate(-50%,-50%);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700; font-size: 42vh; line-height: .8;
    color: rgba(18,20,26,.045); letter-spacing: -.03em; pointer-events: none; user-select: none;
    font-variant-numeric: tabular-nums; }

  #ring { position: relative; width: 0; height: 0; transform-style: preserve-3d; z-index: 1;
    transform: translateZ(var(--push, 0px)) rotateY(var(--rot, 0deg)); }

  .card { position: absolute; width: var(--cw, 220px); height: var(--ch, 300px);
    left: calc(var(--cw, 220px) / -2); top: calc(var(--ch, 300px) / -2);
    transform: rotateY(var(--a)) translateZ(calc(var(--r, 620px) * -1));
    backface-visibility: hidden; -webkit-backface-visibility: hidden; transform-style: preserve-3d; }
  .card__inner {
    position: absolute; inset: 0; border-radius: var(--corner); overflow: hidden; background: #0a0e18;
    box-shadow: 0 26px 60px -18px rgba(24,34,64, calc(.42 * var(--shadow))),
                0 6px 16px -8px rgba(24,34,64, calc(.32 * var(--shadow)));
    transition: transform .4s cubic-bezier(.22,.61,.36,1), box-shadow .4s ease;
    backface-visibility: hidden; -webkit-backface-visibility: hidden; will-change: transform; }
  .card.-front .card__inner { box-shadow: 0 40px 90px -20px rgba(24,34,64,.5), 0 8px 22px -8px rgba(24,34,64,.4); }
  .card:hover .card__inner { transform: scale(var(--hover)); }
  .card__inner img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
  .card__scrim { position: absolute; inset: 0; pointer-events: none; opacity: var(--scrim);
    background: linear-gradient(to top, rgba(6,10,22,.85) 0%, rgba(6,10,22,.28) 30%, rgba(6,10,22,0) 55%); }
  .card__no { position: absolute; top: 12px; left: 13px; z-index: 2; font-size: 11px; font-weight: 700;
    letter-spacing: .12em; color: rgba(255,255,255,.92); font-variant-numeric: tabular-nums;
    text-shadow: 0 1px 8px rgba(0,0,0,.4); }
  .card__foot { position: absolute; left: 14px; right: 14px; bottom: 12px; z-index: 2; }
  .card__title { margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: var(--title-size); line-height: 1.05; letter-spacing: -.01em;
    color: var(--title-color); text-shadow: 0 1px 10px rgba(0,0,0,.35); }

  #frame { position: fixed; inset: 16px; z-index: 3; pointer-events: none;
    border: 1px solid var(--line-2); border-radius: 6px; }
  #frame i { position: absolute; width: 9px; height: 9px; }
  #frame i::before, #frame i::after { content: ''; position: absolute; background: var(--line); }
  #frame i::before { left: 0; top: 0; width: 9px; height: 1px; }
  #frame i::after  { left: 0; top: 0; width: 1px; height: 9px; }
  #frame .tl { left: -1px; top: -1px; }
  #frame .tr { right: -1px; top: -1px; transform: scaleX(-1); }
  #frame .bl { left: -1px; bottom: -1px; transform: scaleY(-1); }
  #frame .br { right: -1px; bottom: -1px; transform: scale(-1); }

  #top { position: fixed; top: 0; left: 0; right: 0; z-index: 6;
    display: flex; align-items: center; justify-content: space-between;
    padding: clamp(20px, 3vh, 34px) clamp(24px, 4vw, 52px); }
  #brand { display: flex; align-items: center; gap: 11px; font-weight: 700; font-size: 15px; letter-spacing: .01em; }
  #brand svg { width: 22px; height: 22px; display: block; }
  #brand .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); margin-left: 2px; }
  #nav { display: flex; gap: clamp(18px, 2.6vw, 38px); }
  #nav a { color: var(--ink-2); text-decoration: none; font-size: 14px; font-weight: 700; letter-spacing: .01em;
    position: relative; transition: color .2s; }
  #nav a::after { content: ''; position: absolute; left: 0; right: 100%; bottom: -5px; height: 1px;
    background: var(--ink); transition: right .28s cubic-bezier(.22,.61,.36,1); }
  #nav a:hover, #nav a:focus-visible { color: var(--ink); }
  #nav a:hover::after, #nav a:focus-visible::after { right: 0; }
  #cta { display: inline-flex; align-items: center; gap: 8px; padding: 9px 17px; border-radius: 999px;
    background: var(--ink); color: #fff; font-size: 13px; font-weight: 700; letter-spacing: .01em;
    text-decoration: none; border: 1px solid var(--ink); transition: transform .2s ease, background .2s ease; white-space: nowrap; }
  #cta:hover { transform: translateY(-1px); background: #000; }
  #cta .arw { transition: transform .25s ease; }
  #cta:hover .arw { transform: translateX(3px); }

  #mast { position: fixed; top: clamp(80px, 13vh, 128px); left: 0; right: 0; z-index: 4;
    text-align: center; pointer-events: none; padding: 0 20px; }
  #eyebrow { display: inline-flex; align-items: center; gap: 9px; font-size: 11px; font-weight: 700;
    letter-spacing: .26em; text-transform: uppercase; color: var(--ink-3); }
  #eyebrow::before, #eyebrow::after { content: ''; width: 26px; height: 1px; background: var(--line); }
  #headline { margin: 14px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(28px, 4.6vw, 58px); line-height: 1.02; letter-spacing: -.018em; color: var(--ink);
    text-wrap: balance; }
  #headline em { font-style: italic; font-weight: 700; }

  .edge { position: fixed; top: 50%; z-index: 4; font-size: 10.5px; font-weight: 700; letter-spacing: .28em;
    text-transform: uppercase; color: var(--ink-3); pointer-events: none; white-space: nowrap; }
  .edge.-l { left: clamp(22px, 3.4vw, 40px); transform: translateY(-50%) rotate(-90deg); transform-origin: left center; }
  .edge.-r { right: clamp(22px, 3.4vw, 40px); transform: translateY(-50%) rotate(90deg); transform-origin: right center; }

  #dock { position: fixed; left: 0; right: 0; bottom: 0; z-index: 6;
    display: grid; grid-template-columns: 1fr auto 1fr; align-items: end; gap: 24px;
    padding: 0 clamp(24px, 4vw, 56px) clamp(22px, 4vh, 40px); pointer-events: none; }
  #dock > * { pointer-events: auto; }
  .dock__count { font-variant-numeric: tabular-nums; letter-spacing: .04em; font-size: 13px; color: var(--ink-3); }
  .dock__count b { font-size: 34px; font-weight: 700; color: var(--ink);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: 0; }
  .dock__count i { font-style: normal; }

  .dock__c { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px; }
  .dock__title { margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(22px, 2.8vw, 34px); line-height: 1; letter-spacing: -.01em; color: var(--ink); }
  .dock__sub { display: flex; align-items: center; gap: 14px; font-size: 12.5px; color: var(--ink-2); font-weight: 700; }
  .dock__rating { display: inline-flex; align-items: center; gap: 4px; color: var(--ink); }
  .dock__rating svg { width: 13px; height: 13px; color: var(--accent); }
  .dock__pip { width: 3px; height: 3px; border-radius: 50%; background: var(--line); }
  #dots { display: flex; align-items: center; gap: 7px; }
  #dots button { width: 8px; height: 8px; padding: 0; border: 0; border-radius: 999px; cursor: pointer;
    background: var(--line); transition: width .3s cubic-bezier(.22,.61,.36,1), background .3s ease; }
  #dots button.-on { width: 24px; background: var(--accent); }

  .dock__r { display: flex; align-items: center; justify-content: flex-end; gap: 12px; }
  .navbtn { width: 48px; height: 48px; border-radius: 999px; border: 1px solid var(--line);
    background: rgba(255,255,255,.6); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    color: var(--ink); font-size: 19px; line-height: 1; cursor: pointer; display: grid; place-items: center;
    transition: background .2s ease, color .2s ease, border-color .2s ease, transform .15s ease; }
  .navbtn:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
  .navbtn:active { transform: scale(.94); }

  .hint { position: fixed; left: 50%; bottom: clamp(124px, 17vh, 156px); transform: translateX(-50%); z-index: 4;
    font-size: 10.5px; letter-spacing: .3em; text-transform: uppercase; font-weight: 700; color: var(--ink-3);
    pointer-events: none; user-select: none; opacity: .9; }

  #section :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }

  @media (max-width: 1024px) {
    #ghost { font-size: 34vh; }
    .edge { display: none; }
  }
  @media (max-width: 760px) {
    #nav { display: none; }
    #cta { padding: 8px 13px; }
    #frame { inset: 10px; }
    #mast { top: clamp(74px, 11vh, 104px); }
    #dock { grid-template-columns: auto 1fr auto; gap: 12px; align-items: center;
      padding-bottom: clamp(18px, 3vh, 28px); }
    .dock__count b { font-size: 24px; }
    .dock__count i, .dock__count .of { display: none; }
    .dock__c { gap: 9px; }
    .hint { display: none; }
    .navbtn { width: 44px; height: 44px; }
  }
  @media (max-width: 420px) {
    #dots { display: none; }
    .dock__sub { font-size: 11.5px; gap: 10px; }
  }
  @media (max-height: 560px) {
    #mast { top: 60px; }
    #headline { font-size: clamp(22px, 5vw, 34px); }
    .hint { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .card__inner, #dots button, #nav a::after { transition: none; }
  }
`;

function Index() {
  useEffect(() => {
    const IMGS = [
      "/assets/spotlight/azure.webp",
      "/assets/spotlight/velocity.webp",
      "/assets/spotlight/vanta.webp",
      "/assets/spotlight/sentinel.webp",
      "/assets/spotlight/nova.webp",
      "/assets/spotlight/zane.webp",
      "/assets/spotlight/rael.webp",
    ];
    const CARDS = IMGS.map((img, i) => ({
      img,
      title: `EAGLE ${(i % 2) + 1}`,
      rating: "8.7",
      meta: "2025 · Portrait",
    }));


    const UI = {
      brand: "Spotlight",
      nav: ["Gallery", "Artists", "Editorial", "About"],
      cta: "Get access",
      eyebrow: "The Spotlight Collection · Vol. 01",
      headline: "Selected works,<br>framed in <em>light</em>",
      edgeL: "Curated Index",
      edgeR: "2025 — Ⓐ",
    };

    const P: Record<string, any> = {
      bgTop: "#ffffff", bgBottom: "#e9edf4", accent: "#1e5bff",
      slots: 14, cardScale: 1.0, cardRatio: 1.36, radiusK: 3.0, arcDepth: 0.7, perspective: 1.0,
      corner: 16, cardShadow: 1.0,
      autoSpin: 0, drag: 0.16, damp: 0.94, hoverScale: 1.05,
      scrim: 0.9, titleSize: 17, titleColor: "#ffffff",
    };

    const section = document.getElementById("section")!;
    const stage = document.getElementById("stage")!;
    const ring = document.getElementById("ring")!;
    const ghost = document.getElementById("ghost")!;
    const pad2 = (n: number) => String(n).padStart(2, "0");
    const stepDeg = () => 360 / P.slots;

    document.getElementById("d-total")!.textContent = pad2(CARDS.length);


    function buildRing() {
      ring.innerHTML = "";
      const step = stepDeg();
      for (let i = 0; i < P.slots; i++) {
        const cd = CARDS[i % CARDS.length];
        const card = document.createElement("article");
        card.className = "card";
        card.dataset.slot = String(i);
        card.style.setProperty("--a", i * step + "deg");
        card.innerHTML = `
          <div class="card__inner">
            <img src="${cd.img}" alt="${cd.title}" draggable="false" loading="lazy">
            <div class="card__scrim"></div>
            <span class="card__no">${pad2((i % CARDS.length) + 1)}</span>
            <div class="card__foot"><h3 class="card__title">${cd.title}</h3></div>
          </div>`;
        ring.appendChild(card);
      }
    }

    const dotsWrap = document.getElementById("dots")!;
    function buildDots() {
      dotsWrap.innerHTML = "";
      CARDS.forEach((cd, i) => {
        const b = document.createElement("button");
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", "Go to " + cd.title);
        b.addEventListener("click", () => focusWork(i));
        dotsWrap.appendChild(b);
      });
    }

    function layout() {
      const vw = window.innerWidth;
      const cw = Math.min(238, Math.max(150, vw * 0.17)) * P.cardScale;
      const ch = cw * P.cardRatio;
      const r = cw * P.radiusK;
      stage.style.setProperty("--cw", cw + "px");
      stage.style.setProperty("--ch", ch + "px");
      stage.style.setProperty("--r", r + "px");
      stage.style.setProperty("--push", r * (1 - P.arcDepth) + "px");
      stage.style.perspective = Math.max(700, vw * 0.8 * P.perspective) + "px";
    }

    function applyStyles() {
      const s = section.style;
      s.setProperty("--bg-top", P.bgTop);
      s.setProperty("--bg-bottom", P.bgBottom);
      s.setProperty("--accent", P.accent);
      s.setProperty("--corner", P.corner + "px");
      s.setProperty("--shadow", String(P.cardShadow));
      s.setProperty("--hover", String(P.hoverScale));
      s.setProperty("--scrim", String(P.scrim));
      s.setProperty("--title-size", P.titleSize + "px");
      s.setProperty("--title-color", P.titleColor);
    }

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    const dTitle = document.getElementById("d-title")!;
    const dCur = document.getElementById("d-cur")!;
    let lastCard = -1, lastFrontSlot = -1;
    const frontSlot = () => (((Math.round(-rot / stepDeg()) % P.slots) + P.slots) % P.slots);
    function render() {
      const fs = frontSlot();
      if (fs !== lastFrontSlot) {
        const cards = ring.children;
        if (lastFrontSlot >= 0 && cards[lastFrontSlot]) (cards[lastFrontSlot] as HTMLElement).classList.remove("-front");
        if (cards[fs]) (cards[fs] as HTMLElement).classList.add("-front");
        lastFrontSlot = fs;
      }
      const ci = fs % CARDS.length;
      if (ci !== lastCard) {
        lastCard = ci;
        const cd = CARDS[ci];
        dTitle.textContent = cd.title;
        dCur.textContent = pad2(ci + 1);
        ghost.textContent = pad2(ci + 1);
        [...dotsWrap.children].forEach((b, i) => (b as HTMLElement).classList.toggle("-on", i === ci));
      }
    }

    const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rot = 0, vel = 0, dragging = false, lastX = 0, downX = 0, moved = false;
    let targetIndex = 0, settled = true, lastRot = NaN;
    const applyRot = () => {
      if (rot !== lastRot) { ring.style.setProperty("--rot", rot + "deg"); lastRot = rot; }
    };

    const onDown = (e: PointerEvent) => {
      dragging = true; lastX = downX = e.clientX; moved = false; vel = 0; settled = false;
      stage.classList.add("-drag"); stage.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX; lastX = e.clientX;
      if (Math.abs(e.clientX - downX) > 6) moved = true;
      const d = -dx * P.drag; rot += d; vel = d;
    };
    const onUp = (e: PointerEvent) => {
      dragging = false; settled = false; stage.classList.remove("-drag");
      if (!moved) {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const card = el && (el as HTMLElement).closest(".card") as HTMLElement | null;
        if (card && card.dataset.slot) focusSlot(+card.dataset.slot);
      }
    };
    const onCancel = () => { dragging = false; stage.classList.remove("-drag"); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { go(1); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { go(-1); e.preventDefault(); }
    };
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onCancel);
    stage.addEventListener("keydown", onKey);
    const nextBtn = document.getElementById("next")!;
    const prevBtn = document.getElementById("prev")!;
    const onNext = () => go(1);
    const onPrev = () => go(-1);
    nextBtn.addEventListener("click", onNext);
    prevBtn.addEventListener("click", onPrev);

    const nearestCenter = () => Math.round(-rot / stepDeg());
    function go(delta: number) { targetIndex = nearestCenter() + delta; settled = true; vel = 0; }
    function focusSlot(slot: number) {
      const cs = nearestCenter();
      let d = (((slot - (cs % P.slots)) % P.slots) + P.slots) % P.slots;
      if (d > P.slots / 2) d -= P.slots;
      targetIndex = cs + d; settled = true; vel = 0;
    }
    function focusWork(i: number) {
      const cs = nearestCenter();
      let d = (((i - (cs % CARDS.length)) % CARDS.length) + CARDS.length) % CARDS.length;
      if (d > CARDS.length / 2) d -= CARDS.length;
      targetIndex = cs + d; settled = true; vel = 0;
    }

    let rafId = 0, alive = true;
    function tick() {
      if (!alive) return;
      if (!dragging) {
        rot += vel; vel *= P.damp;
        if (P.autoSpin > 0) { rot += P.autoSpin; }
        else if (Math.abs(vel) < 0.05) {
          if (!settled) { targetIndex = nearestCenter(); settled = true; }
          const diff = -targetIndex * stepDeg() - rot;
          if (Math.abs(diff) < 0.01) rot = -targetIndex * stepDeg();
          else rot += diff * (REDUCE ? 1 : 0.14);
        } else settled = false;
      }
      applyRot(); render();
      rafId = requestAnimationFrame(tick);
    }

    buildRing(); buildDots(); layout(); applyStyles(); applyRot(); render(); tick();

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onCancel);
      stage.removeEventListener("keydown", onKey);
      nextBtn.removeEventListener("click", onNext);
      prevBtn.removeEventListener("click", onPrev);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div id="section">
        <div
          id="stage"
          tabIndex={0}
          role="region"
          aria-label="Spotlight gallery — draggable 3D carousel. Use left and right arrow keys to move between works."
        >
          <div id="floor"></div>
          <div id="ghost">01</div>
          <div id="ring"></div>
        </div>

        <div id="frame">
          <i className="tl"></i>
          <i className="tr"></i>
          <i className="bl"></i>
          <i className="br"></i>
        </div>

        <div id="mast">
          <h1 id="headline">EAGLE</h1>
        </div>


        <footer id="dock">
          <div className="dock__l">
            <div className="dock__count">
              <b id="d-cur">01</b> <i className="of">/ <span id="d-total">07</span></i>
            </div>
          </div>
          <div className="dock__c" aria-live="polite">
            <h2 className="dock__title" id="d-title">—</h2>
            <div id="dots" role="tablist" aria-label="Jump to work"></div>
          </div>
          <div className="dock__r">
            <button className="navbtn" id="prev" aria-label="Previous work">‹</button>
            <button className="navbtn" id="next" aria-label="Next work">›</button>
          </div>
        </footer>
      </div>
    </>
  );
}
