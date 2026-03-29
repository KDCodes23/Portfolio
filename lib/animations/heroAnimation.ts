import { animate, stagger } from "animejs";
import { MOTION_MS, SYSTEM_EASE } from "@/lib/animations/core";

export function runHeroTypographyAnimation(root: HTMLElement) {
  const words = root.querySelectorAll<HTMLElement>("[data-hero-word]");
  if (!words.length) return;

  animate(words, {
    opacity: [0, 1],
    filter: ["blur(6px)", "blur(0px)"],
    translateY: [14, 0],
    duration: MOTION_MS.reveal,
    delay: stagger(58, { start: 100 }),
    ease: SYSTEM_EASE
  });
}

export function runHeroGridAccentAnimation(element: HTMLElement) {
  animate(element, {
    opacity: [0, 0.5, 0.12],
    translateX: ["-8%", "0%"],
    duration: MOTION_MS.slow,
    ease: SYSTEM_EASE
  });
}
