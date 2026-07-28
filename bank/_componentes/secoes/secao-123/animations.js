/* =============================================================================
   congra/scripts/animations.js — motor de animación compartido de los ports
   Congra. Portado de src/scripts/animations.ts (TS + ESM -> JS clásico:
   sin export top-level; gsap/ScrollTrigger vienen de los globals del CDN).

   - Timeline de carga: título del hero por caracteres ([animation="first|second"]),
     .hero_img (zoom-out) y pop-in del navbar.
   - Reveals on-view: .slide-left / .slide-right / .slide_down (una vez).
   - Counters: [data-count-to] (+ data-count-duration opcional, ms).
   - Honra prefers-reduced-motion (todo visible, sin motion).
   - Viewport-fire (aprendizaje Vetic): en páginas standalone cortas un trigger
     con start > maxScroll jamás dispara -> se dispara al instante tras cada
     ScrollTrigger.refresh().
   ============================================================================= */

gsap.registerPlugin(ScrollTrigger);

var CONGRA_REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Divide el texto en spans por carácter, agrupados por palabra dentro de un
   wrapper white-space:nowrap para que el título solo quiebre en espacios. */
function congraSplitChars(el) {
  var text = el.textContent || '';
  el.textContent = '';
  var chars = [];
  text.split(/(\s+)/).forEach(function (part) {
    if (part === '') return;
    if (/^\s+$/.test(part)) {
      el.appendChild(document.createTextNode(part));
      return;
    }
    var word = document.createElement('span');
    word.style.display = 'inline-block';
    word.style.whiteSpace = 'nowrap';
    Array.from(part).forEach(function (ch) {
      var span = document.createElement('span');
      span.textContent = ch;
      span.style.display = 'inline-block';
      span.style.willChange = 'opacity';
      word.appendChild(span);
      chars.push(span);
    });
    el.appendChild(word);
  });
  return chars;
}

function congraRevealAll() {
  document
    .querySelectorAll('.slide-left, .slide-right, .slide_down, .hero_title h1, .hero_title .h1, .hero_img')
    .forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
}

/* Triggers inalcanzables (start > maxScroll) disparan al instante. */
function congraFireUnreachable() {
  var maxS = ScrollTrigger.maxScroll(window);
  ScrollTrigger.getAll().forEach(function (t) {
    if (t.start > maxS && t.vars && t.vars.onEnter) {
      var fn = t.vars.onEnter;
      t.kill();
      fn();
    }
  });
}

function congraInitAnimations() {
  if (CONGRA_REDUCE) {
    congraRevealAll();
    return;
  }

  // ---- Timeline de carga (hero: chars + imagen; todas: navbar) ----
  var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  document.querySelectorAll('[animation="first"], [animation="second"]').forEach(function (title) {
    var fromEnd = title.getAttribute('animation') === 'second';
    var chars = congraSplitChars(title);
    gsap.set(title, { opacity: 1 });
    tl.from(
      chars,
      { opacity: 0, duration: 0.6, ease: 'power2.out', stagger: { each: 0.5 / Math.max(chars.length, 1), from: fromEnd ? 'end' : 'start' } },
      0
    );
  });

  // Imagen de fondo del hero — zoom-out sutil (scale 1.2 -> 1).
  var heroImg = document.querySelector('.hero_img');
  if (heroImg) {
    tl.fromTo(heroImg, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1, ease: 'power1.inOut' }, 0);
  }

  // Items del navbar — pop-in (scale 0 -> 1) con stagger desde el centro.
  var navItems = document.querySelectorAll('.navbar_logo-link, .navbar_list .link, .nav_buttons-wrap .button, .menu-button');
  if (navItems.length) {
    // Suprime transitions CSS (el botón de ticket trae `transition: all`) para
    // que no peleen con los updates de scale de GSAP. Se restauran al terminar.
    navItems.forEach(function (el) { el.style.transition = 'none'; });
    tl.fromTo(
      navItems,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: { each: 0.5 / navItems.length, from: 'center' },
        onComplete: function () { navItems.forEach(function (el) { el.style.transition = ''; }); },
      },
      0
    );
  }

  // ---- Counters numéricos (stats de impact) ----
  document.querySelectorAll('[data-count-to]').forEach(function (el) {
    var end = Number(el.getAttribute('data-count-to') || '0');
    var duration = Number(el.getAttribute('data-count-duration') || '2000') / 1000;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: function () {
        var obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: duration,
          ease: 'power1.out',
          onUpdate: function () { el.textContent = String(Math.round(obj.v)); },
        });
      },
    });
  });

  // ---- Reveals on-view (slideInLeft / slideInRight / slideInBottom) ----
  var reveals = [
    ['.slide-left', { x: -40, opacity: 0 }],
    ['.slide-right', { x: 40, opacity: 0 }],
    ['.slide_down', { y: 40, opacity: 0 }],
  ];

  reveals.forEach(function (pair) {
    var selector = pair[0];
    var fromVars = pair[1];
    document.querySelectorAll(selector).forEach(function (el) {
      gsap.set(el, fromVars);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: function () {
          gsap.to(el, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
        },
      });
    });
  });

  ScrollTrigger.refresh();
  congraFireUnreachable();
  // Cargas de imágenes cambian el layout; re-chequear tras cada refresh.
  ScrollTrigger.addEventListener('refresh', congraFireUnreachable);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', congraInitAnimations);
else congraInitAnimations();
