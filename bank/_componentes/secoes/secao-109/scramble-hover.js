// Block roll-up hover (Osmo). Idempotent — safe to call multiple times.
window.applyVaultixScrambleHover = function (selector, root) {
  root = root || document
  const elements = root.querySelectorAll(selector)
  elements.forEach((el) => {
    if (el.dataset.scrambleApplied) return
    const text = (el.textContent || "").trim()
    if (!text) return
    const width = el.getBoundingClientRect().width
    if (width > 0) el.style.minWidth = `${width}px`
    el.textContent = ""
    el.classList.add("hover-stagger")
    const inner = document.createElement("span")
    inner.className = "hover-stagger__inner"
    const textSpan = document.createElement("span")
    textSpan.textContent = text
    inner.appendChild(textSpan)
    el.appendChild(inner)
    let trigger = el
    const closest = el.closest("a, button")
    if (closest && closest !== el) trigger = closest
    if (trigger !== el) {
      trigger.addEventListener("mouseenter", () => el.classList.add("is-stagger-hovered"))
      trigger.addEventListener("mouseleave", () => el.classList.remove("is-stagger-hovered"))
    }
    el.dataset.scrambleApplied = "1"
  })
}
