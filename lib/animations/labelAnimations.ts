import { animate } from "animejs";
import { MOTION_MS, SYSTEM_EASE } from "@/lib/animations/core";

export function runSectionLabelAnimation(label: HTMLElement) {
  animate(label, {
    opacity: [0, 1],
    translateY: [8, 0],
    duration: MOTION_MS.reveal - 80,
    ease: SYSTEM_EASE
  });
}
