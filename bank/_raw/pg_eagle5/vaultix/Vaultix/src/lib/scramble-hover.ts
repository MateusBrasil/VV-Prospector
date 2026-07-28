/**
 * Block roll-up hover (Osmo-inspired). The whole text rolls up as one unit
 * (no per-char stagger). CSS in global.css handles the actual translateY +
 * text-shadow clone trick.
 *
 * If the [data-scramble-hover] element isn't itself hoverable (e.g. it's a
 * <span> inside a <button> with a chevron sibling), the helper finds the
 * closest <a>/<button>/[data-platform-dropdown] ancestor and toggles a class
 * on the element when that ancestor is hovered.
 */
export function applyScrambleHover(
  selector: string,
  root: ParentNode = document
) {
  const elements = root.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el) => {
    const text = (el.textContent ?? "").trim();
    if (!text) return;

    // Lock width before mutating so adjacent siblings don't shift.
    const width = el.getBoundingClientRect().width;
    if (width > 0) {
      el.style.minWidth = `${width}px`;
    }

    el.textContent = "";
    el.classList.add("hover-stagger");

    const inner = document.createElement("span");
    inner.className = "hover-stagger__inner";

    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    inner.appendChild(textSpan);

    el.appendChild(inner);

    // If this element is wrapped inside an <a>/<button> with sibling content
    // (icons, chevrons), use that ancestor as the hover trigger.
    let trigger: HTMLElement = el;
    const closestInteractive = el.closest<HTMLElement>("a, button");
    if (closestInteractive && closestInteractive !== el) {
      trigger = closestInteractive;
      // Special case: Recursos dropdown — sync hover with the wrapper <li>
      // (which is the same element that opens the dropdown on hover).
      if (trigger.tagName === "BUTTON") {
        const dropdownWrapper = trigger.closest<HTMLElement>(
          "[data-platform-dropdown]"
        );
        if (dropdownWrapper) trigger = dropdownWrapper;
      }
    }

    if (trigger !== el) {
      trigger.addEventListener("mouseenter", () =>
        el.classList.add("is-stagger-hovered")
      );
      trigger.addEventListener("mouseleave", () =>
        el.classList.remove("is-stagger-hovered")
      );
    }
  });
}
