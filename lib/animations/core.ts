export const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const;
export const SYSTEM_EASE = "outQuad";

export const MOTION_SECONDS = {
  fast: 0.22,
  medium: 0.42,
  reveal: 0.6,
  slow: 0.78
} as const;

export const MOTION_MS = {
  fast: 220,
  medium: 420,
  reveal: 700,
  slow: 860
} as const;

export function canRunStylizedMotion() {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function observeOnce(
  element: Element,
  onEnter: () => void,
  options?: IntersectionObserverInit
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        onEnter();
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25,
      ...options
    }
  );

  observer.observe(element);
  return () => observer.disconnect();
}
