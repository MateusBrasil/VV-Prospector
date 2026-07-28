/**
 * Hero home — Action list a-68 "Home Hero three" (PAGE_FINISH)
 * GSAP loaded as a global via CDN.
 */
(function () {
  function init() {
    var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var EASE = "circ.out"; // outCirc
    var EASE_TITLE = "power4.out"; // outQuart for title-wrap move

    var hero = document.querySelector(".container-box.is-hero.is-home-three");
    if (!hero) return; // Not on home page

    // Split "Genovas" h1 into letter spans if not already split
    var h1 = hero.querySelector(".hero_title");
    if (h1 && !h1.querySelector("span")) {
      var text = (h1.textContent && h1.textContent.trim()) || "";
      h1.innerHTML = "";
      var letterClasses = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      text.split("").forEach(function (char, i) {
        var span = document.createElement("span");
        span.className = letterClasses[i] || "";
        span.textContent = char;
        span.style.display = "inline-block";
        h1.appendChild(span);
      });
    }

    // Element refs
    var titleWrap = hero.querySelector(".hero_title-wrap");
    var research = hero.querySelector(".hero_research");
    var letters = (h1 && h1.querySelectorAll("span")) || null;
    var tag = hero.querySelector(".tag-wrap.is-hero-tag");
    var heroImgs = hero.querySelectorAll(".hero_img-wrap .hero_img");
    var navbar = document.querySelector(".navbar");

    if (REDUCED_MOTION) return;

    // ============================================
    // INITIAL STATES (Group 0)
    // ============================================
    if (letters && letters.length) {
      gsap.set(letters, { opacity: 0, filter: "blur(40px)", xPercent: 150 });
    }
    if (titleWrap) gsap.set(titleWrap, { yPercent: 40 });
    if (research) gsap.set(research, { opacity: 0 });
    if (heroImgs.length) gsap.set(heroImgs, { opacity: 0 });
    if (tag) gsap.set(tag, { opacity: 0 });
    if (navbar) gsap.set(navbar, { opacity: 0 });
    gsap.set(hero, { backgroundColor: "rgb(241,241,241)" });

    // ============================================
    // TRANSITIONS (Group 1) — verbatim from source
    // ============================================
    var tl = gsap.timeline();

    // Letters — each has 3 simultaneous ops: opacity, filter, transform
    var letterDelays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]; // G/e/n/o/v/a/s
    if (letters) {
      letters.forEach(function (letter, i) {
        var d = letterDelays[i];
        if (d === undefined) return;
        tl.to(letter, { opacity: 1, duration: 0.1, ease: EASE }, d);
        tl.to(letter, { filter: "blur(0px)", duration: 0.5, ease: EASE }, d);
        tl.to(letter, { xPercent: 0, duration: 0.5, ease: EASE }, d);
      });
    }

    // Eyebrow "Research" — delay 400, dur 1000
    if (research) tl.to(research, { opacity: 1, duration: 1.0, ease: EASE }, 0.4);

    // Tag-wrap — delay 600, dur 1000
    if (tag) tl.to(tag, { opacity: 1, duration: 1.0, ease: EASE }, 0.6);

    // Title-wrap move — delay 800, dur 1000, outQuart
    if (titleWrap) tl.to(titleWrap, { yPercent: 0, duration: 1.0, ease: EASE_TITLE }, 0.8);

    // Hero images — staggered 200ms apart starting at 900, each 100ms fade
    var imgDelays = [0.9, 1.1, 1.3, 1.5];
    heroImgs.forEach(function (img, i) {
      var d = imgDelays[i];
      if (d === undefined) return;
      tl.to(img, { opacity: 1, duration: 0.1, ease: EASE }, d);
    });

    // Container background-color shift — delay 1500, dur 800
    tl.to(hero, { backgroundColor: "rgb(255,255,255)", duration: 0.8, ease: EASE }, 1.5);

    // Navbar — delay 1600, dur 1000
    if (navbar) tl.to(navbar, { opacity: 1, duration: 1.0, ease: EASE }, 1.6);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
