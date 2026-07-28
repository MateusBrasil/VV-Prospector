/* Coverly — Contact Hero
 * Component-scoped logic. The scroll-slide-left entrance animations are handled by
 * the shared /coverly/scripts/scroll-reveal.js (it auto-initializes on
 * DOMContentLoaded and picks up every .scroll-slide-left element).
 *
 * Only the form submit handler lives here — it POSTs FormData to /api/contact and
 * toggles the Webflow-style .w-form-done / .w-form-fail divs based on the response.
 * Falls back to the error state on network failure or non-OK status. */

(function () {
  const form = document.querySelector(".section_hero .form_form");
  const successDiv = document.querySelector(".section_hero .form_message-success");
  const errorDiv = document.querySelector(".section_hero .form_message-error");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (res.ok) {
        form.style.display = "none";
        successDiv && successDiv.removeAttribute("hidden");
      } else {
        errorDiv && errorDiv.removeAttribute("hidden");
      }
    } catch {
      errorDiv && errorDiv.removeAttribute("hidden");
    }
  });
})();

/* ===== TEMLIS-INLINED-NAVBAR: coverly-navbar behavior ===== */
/* Coverly — Navbar
 *
 * Boot logic for the fullscreen overlay menu. The shared
 * /coverly/scripts/navbar.js source uses an ES-module `export`, which would
 * throw a SyntaxError when loaded via a plain <script> tag in this standalone
 * component, so the equivalent behavior is inlined here.
 *
 * All transitions (slide-down menu, fade backdrop, link clip hover) are
 * CSS-driven via the .is-open class — see components.css.
 */
(function initNavbarMenu() {
  const menuTrigger = document.querySelector(".menu");
  const menuContent = document.querySelector(".menu_content");
  const navOverlay = document.querySelector(".nav_overlay");
  if (!menuTrigger || !menuContent || !navOverlay) return;

  let isOpen = false;

  function open() {
    menuContent.classList.add("is-open");
    navOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    menuTrigger.setAttribute("aria-expanded", "true");
    navOverlay.setAttribute("aria-hidden", "false");
    isOpen = true;
  }

  function close() {
    menuContent.classList.remove("is-open");
    navOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
    menuTrigger.setAttribute("aria-expanded", "false");
    navOverlay.setAttribute("aria-hidden", "true");
    isOpen = false;
  }

  function toggle() {
    if (isOpen) close();
    else open();
  }

  menuTrigger.addEventListener("click", toggle);
  menuTrigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
  navOverlay.addEventListener("click", () => {
    if (isOpen) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) close();
  });
})();
