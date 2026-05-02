"use client";

import { siteMeta } from "@/data/site";
import { EASE_OUT_QUAD, MOTION_SECONDS, canRunStylizedMotion, observeOnce } from "@/lib/animations/core";
import { runHeroGridAccentAnimation, runHeroTypographyAnimation } from "@/lib/animations/heroAnimation";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const heroMeta = [
  { label: "Location", value: siteMeta.location },
  { label: "Stack Focus", value: siteMeta.focus },
  { label: "Status", value: siteMeta.availability }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const gridAccentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion || !canRunStylizedMotion()) return;

    const cleanups: Array<() => void> = [];

    if (headingRef.current) {
      cleanups.push(observeOnce(headingRef.current, () => runHeroTypographyAnimation(headingRef.current!)));
    }

    if (gridAccentRef.current) {
      cleanups.push(observeOnce(gridAccentRef.current, () => runHeroGridAccentAnimation(gridAccentRef.current!)));
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [shouldReduceMotion]);

  return (
    <section id="hero" className="relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-34 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-25 sm:opacity-30">
        <div className="absolute inset-0 hidden bg-grid-fade bg-[size:42px_42px] sm:block" />
        <div className="absolute right-1/4 top-32 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div
          ref={gridAccentRef}
          className="absolute left-0 top-24 hidden h-px w-[45%] bg-gradient-to-r from-accent/70 via-white/20 to-transparent opacity-10 sm:block"
        />
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] gap-7 px-4 sm:gap-10 sm:px-7 lg:grid-cols-[1fr_0.72fr] lg:items-stretch lg:px-10 2xl:max-w-[1360px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: MOTION_SECONDS.reveal, ease: EASE_OUT_QUAD }}
          className="relative border border-white/12 bg-surface/85 p-5 shadow-panel backdrop-blur sm:p-8 lg:p-10"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text">
            <span className="h-2 w-2 rounded-full bg-accentBright" />
            {siteMeta.opportunityLabel}
          </p>
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted">Developer Dossier / 2026</p>
          <h1
            ref={headingRef}
            aria-label="Kanishka Dutta"
            className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            <span data-hero-word aria-hidden className="inline-block opacity-0 [filter:blur(6px)]">
              Kanishka
            </span>
            <br />
            <span data-hero-word aria-hidden className="inline-block opacity-0 [filter:blur(6px)]">
              Dutta
            </span>
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-accentBright sm:text-sm sm:tracking-[0.16em]">
            {siteMeta.roleLine}
          </p>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted sm:text-lg">{siteMeta.valueProp}</p>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
             <a
              href="/#"
              className="inline-flex min-h-11 items-center rounded-md border border-accent/60 bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accentBright"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-text transition hover:bg-white/15"
            >
              View Projects
            </a>
            <a
              href={siteMeta.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-md border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-text transition hover:border-white/35 hover:text-text"
            >
              GitHub
            </a>
             <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-md border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-text transition hover:border-white/35 hover:text-text"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
          transition={{ delay: 0.14, duration: MOTION_SECONDS.reveal, ease: EASE_OUT_QUAD }}
          className="grid gap-3 border border-white/12 bg-panel/85 p-4 shadow-panel backdrop-blur sm:p-5"
        >
          {heroMeta.map((item) => (
            <div key={item.label} className="border border-white/12 bg-bg/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text sm:text-[15px]">{item.value}</p>
            </div>
          ))}
          <div className="border border-accent/50 bg-accent/15 p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Current Focus</p>
            <p className="mt-2 text-sm leading-relaxed text-text">
              Building recruiter-ready products and scalable frontends while growing Vertex Studios.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
