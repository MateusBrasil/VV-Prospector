// aeline-faq — single-open accordion (ported from FaqSection.astro component script).
(function () {
  document.querySelectorAll("[data-faq]").forEach(function (group) {
    var items = Array.from(group.querySelectorAll(".faq_item"));
    items.forEach(function (item) {
      var top = item.querySelector(".faq_top");
      if (!top) return;
      top.addEventListener("click", function () {
        var willOpen = !item.classList.contains("is-open");
        items.forEach(function (other) { other.classList.remove("is-open"); });
        if (willOpen) item.classList.add("is-open");
      });
    });
  });
})();
