import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

export function registerEagleEases() {
  if (registered) return;
  gsap.registerPlugin(CustomEase);
  CustomEase.create("eagleStructure", "0.7, 0, 0.2, 1");
  CustomEase.create("eagleReveal", "0.16, 1, 0.3, 1");
  CustomEase.create("eagleDecor", "0.34, 1.3, 0.64, 1");
  CustomEase.create("eagleExit", "0.4, 0, 1, 1");
  registered = true;
}
