import { animate } from "animejs";
import { MOTION_MS, SYSTEM_EASE } from "@/lib/animations/core";

export function attachProjectCardMicroInteractions(card: HTMLElement) {
  const line = card.querySelector<HTMLElement>("[data-card-accent-line]");
  const marker = card.querySelector<HTMLElement>("[data-card-corner-marker]");
  if (!line || !marker) return () => undefined;

  const onEnter = () => {
    animate(line, {
      scaleX: [0.1, 1],
      opacity: [0.45, 1],
      duration: MOTION_MS.medium,
      ease: SYSTEM_EASE
    });

    animate(marker, {
      opacity: [0.2, 1],
      translateY: [4, 0],
      duration: MOTION_MS.medium - 60,
      ease: SYSTEM_EASE
    });
  };

  const onLeave = () => {
    animate(line, {
      scaleX: [1, 0.18],
      opacity: [1, 0.45],
      duration: MOTION_MS.fast,
      ease: SYSTEM_EASE
    });
  };

  card.addEventListener("mouseenter", onEnter);
  card.addEventListener("mouseleave", onLeave);

  return () => {
    card.removeEventListener("mouseenter", onEnter);
    card.removeEventListener("mouseleave", onLeave);
  };
}
