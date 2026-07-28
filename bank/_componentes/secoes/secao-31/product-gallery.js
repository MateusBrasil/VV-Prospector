// product-gallery.js — click (or keyboard-activate) a thumbnail to swap the large
// image. A light opacity crossfade (CSS handles the fade; this only toggles `.is-active`).
//
// Progressive enhancement: the markup ships with the first main image + first
// thumbnail already `.is-active`, so the gallery is correct even if JS never runs.
(function () {
  function initGallery(root) {
    const thumbs = Array.from(root.querySelectorAll("[data-thumb]"));
    const mains = Array.from(root.querySelectorAll("[data-main]"));
    if (thumbs.length < 2 || mains.length < 2) return;

    const select = (index) => {
      mains.forEach((m, i) => m.classList.toggle("is-active", i === index));
      thumbs.forEach((t, i) => {
        const on = i === index;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1; // roving tabindex
      });
    };

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => select(i));
      thumb.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(i);
        } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          const next = (i + 1) % thumbs.length;
          select(next);
          thumbs[next].focus();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = (i - 1 + thumbs.length) % thumbs.length;
          select(prev);
          thumbs[prev].focus();
        }
      });
    });

    // Normalise to the first item (in case markup drifted).
    const initial = thumbs.findIndex((t) => t.classList.contains("is-active"));
    select(initial >= 0 ? initial : 0);
  }

  function init() {
    document.querySelectorAll("[data-gallery]").forEach(initGallery);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
