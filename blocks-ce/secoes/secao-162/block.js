(function(){
  var __root = document.querySelector('[data-blk="secoes-secao-162"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* script.js */

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const duration = prefersReduced ? 0 : 0.2;

const ctx = gsap.context(() => {
  const cards = gsap.utils.toArray(".specialists__deck--desktop .specialists__card");

  cards.forEach((card) => {
    const inner = card.querySelector(".specialists__card-inner");
    const info = card.querySelector(".specialists__card-info");

    const reveal = () => {
      gsap.to(card, { scale: 1.15, zIndex: 10, duration, ease: "power2.out" });
      gsap.to(inner, {
        boxShadow: "0 0.75rem 1.5rem rgba(0, 0, 0, 0.15)",
        duration,
        ease: "power2.out",
      });
      gsap.to(info, {
        height: "2.875rem",
        paddingTop: "0.375rem",
        paddingBottom: "0.375rem",
        opacity: 1,
        duration,
        ease: "power2.out",
      });
    };

    const conceal = () => {
      gsap.to(card, { scale: 1, zIndex: 1, duration, ease: "power2.inOut" });
      gsap.to(inner, {
        boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0)",
        duration,
        ease: "power2.inOut",
      });
      gsap.to(info, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0,
        duration,
        ease: "power2.inOut",
      });
    };

    card.addEventListener("mouseenter", reveal);
    card.addEventListener("mouseleave", conceal);
  });
});

window.addEventListener("beforeunload", () => ctx.revert());

})();