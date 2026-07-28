/* Coverly — FAQ
   Replaces Webflow `w-dropdown` runtime: clicking `.accordion_toggle`
   toggles `.w--open` on the parent `.accordion`. The shared Coverly
   stylesheet drives the expand/collapse + icon rotation from that class. */

document.querySelectorAll(".section_faq .accordion").forEach((acc) => {
  const toggle = acc.querySelector(".accordion_toggle");
  if (!toggle) return;
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    acc.classList.toggle("w--open");
  });
});
