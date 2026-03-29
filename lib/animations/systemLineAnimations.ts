import { animate } from "animejs";
import { MOTION_MS, SYSTEM_EASE } from "@/lib/animations/core";

export function runSystemLineAnimation(line: HTMLElement) {
  animate(line, {
    scaleX: [0.15, 1],
    opacity: [0.2, 1],
    duration: MOTION_MS.reveal,
    ease: SYSTEM_EASE
  });
}

export function runSystemFrameAnimation(frame: HTMLElement) {
  animate(frame, {
    opacity: [0, 1],
    scale: [0.985, 1],
    duration: MOTION_MS.medium + 200,
    ease: SYSTEM_EASE
  });
}
