"use client";

import type { Project } from "@/lib/types";
import { EASE_OUT_QUAD, MOTION_SECONDS, canRunStylizedMotion } from "@/lib/animations/core";
import { attachProjectCardMicroInteractions } from "@/lib/animations/cardMicroInteractions";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion || !canRunStylizedMotion() || !cardRef.current) return;
    return attachProjectCardMicroInteractions(cardRef.current);
  }, [shouldReduceMotion]);

  return (
    <motion.article
      ref={cardRef}
      data-cursor-hover="true"
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: MOTION_SECONDS.fast, ease: EASE_OUT_QUAD }}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-surface/85 p-5 shadow-panel sm:p-6"
    >
      <span
        data-card-accent-line
        className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-[0.18] bg-gradient-to-r from-accent/90 via-accentBright/60 to-transparent opacity-45"
      />
      <span
        data-card-corner-marker
        className="pointer-events-none absolute right-3 top-3 h-2 w-2 rounded-full border border-accent/60 bg-accent/20 opacity-70"
      />
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted">{project.indexLabel}</span>
        <span className="rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-text">
          {project.status}
        </span>
      </div>

      <div className="relative mb-5 h-44 overflow-hidden border border-white/12 bg-gradient-to-br from-panel to-bg sm:h-48">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,48,48,0.25),transparent_55%)]"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
          transition={{ duration: MOTION_SECONDS.medium - 0.08, ease: EASE_OUT_QUAD }}
        />
        <div className="absolute left-3 top-3 border border-white/15 bg-bg/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
          System Preview
        </div>
      </div>

      <h3 className="font-display text-[1.6rem] font-medium leading-tight text-text">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="rounded-full border border-white/12 bg-panel px-2.5 py-1 text-xs text-text">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {project.links.demo ? (
          <a
            href={project.links.demo}
            className="inline-flex min-h-10 items-center rounded-md border border-accent/60 bg-accent/90 px-3 py-2 text-xs uppercase tracking-[0.12em] text-white transition hover:bg-accentBright"
          >
            Live Demo
          </a>
        ) : null}
        {project.links.github ? (
          <a
            href={project.links.github}
            className="inline-flex min-h-10 items-center rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.12em] text-text transition hover:bg-white/15"
          >
            GitHub
          </a>
        ) : null}
        {project.links.caseStudy ? (
          <a
            href={project.links.caseStudy}
            className="inline-flex min-h-10 items-center rounded-md border border-white/20 bg-transparent px-3 py-2 text-xs uppercase tracking-[0.12em] text-muted transition hover:border-white/35 hover:text-text"
          >
            Case Study
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
