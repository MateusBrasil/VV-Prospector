(function(){
  var __root = document.querySelector('[data-blk="textos-animacao-texto-9"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* script.js */
MorphSVGPlugin.convertToPath("circle, rect, polygon");

const tl = gsap
  .timeline({
    repeat: 20,
    repeatDelay: 0.5,
    delay: 0.5,
    yoyo: true,
    defaults: { ease: "power2.inOut" }
  })
  .to("#triangle", { morphSVG: "#a" })
  .to("#square", { morphSVG: "#b" })
  .to("#circle", { morphSVG: "#c" });
})();