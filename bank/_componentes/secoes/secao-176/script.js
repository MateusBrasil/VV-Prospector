// clayo-team-section — per-card entry animation (classic script, GSAP globals).
//
// Header label / heading / description reveal via the shared
// /clayo/scripts/scroll-reveal.js (data-reveal hooks). The card entry below is
// section-specific and NOT covered by the shared reveal:
//   .img-wrapper        height 0% -> 100%   (image scales in via object-fit:cover)
//                       delay 0.1, dur 1.0, power3.out
//   .team_card-content  y 150% -> 0%        (floating info bar slides up)
//                       delay 0.8, dur 0.5, power3.out
// Per-card ScrollTrigger — the inter-card stagger comes from scroll position.
// From-states are set via GSAP (not inline CSS) so cards stay visible if JS fails.
// Respects prefers-reduced-motion.
(function () {
  if (typeof gsap === "undefined") return;
  if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

  function initTeamCards() {
    var cards = gsap.utils.toArray(".section_team .team_card");
    if (!cards.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    cards.forEach(function (card) {
      var wrap = card.querySelector(".img-wrapper");
      var content = card.querySelector(".team_card-content");

      if (wrap) gsap.set(wrap, { height: "0%" });
      if (content) gsap.set(content, { y: "150%" });

      var tl = gsap.timeline({
        scrollTrigger: { trigger: card, start: "top 90%", once: true },
      });
      if (wrap) tl.to(wrap, { height: "100%", duration: 1, ease: "power3.out" }, 0.1);
      if (content) tl.to(content, { y: "0%", duration: 0.5, ease: "power3.out" }, 0.8);
    });

    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTeamCards);
  } else {
    initTeamCards();
  }
})();
