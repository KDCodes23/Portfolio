"use client";

import { cn } from "@/lib/utils";
import { canRunStylizedMotion, observeOnce } from "@/lib/animations/core";
import { runSectionLabelAnimation } from "@/lib/animations/labelAnimations";
import { runSystemFrameAnimation, runSystemLineAnimation } from "@/lib/animations/systemLineAnimations";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type SectionWrapperProps = {
  id: string;
  marker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  marker,
  title,
  subtitle,
  children,
  className
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const labelRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !canRunStylizedMotion()) return;

    return observeOnce(sectionRef.current, () => {
      if (labelRef.current) runSectionLabelAnimation(labelRef.current);
      if (lineRef.current) runSystemLineAnimation(lineRef.current);
      if (frameRef.current) runSystemFrameAnimation(frameRef.current);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("scroll-mt-32 border-t border-white/12 py-16 sm:py-20 lg:py-24", className)}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-7 lg:px-10 2xl:max-w-[1360px]">
        <div
          ref={frameRef}
          className="mb-8 flex flex-col gap-4 border-b border-white/12 pb-6 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="relative">
            <p ref={labelRef} className="mb-2 text-[11px] uppercase tracking-[0.2em] text-accentBright">
              {marker}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[2.6rem]">
              {title}
            </h2>
            <span
              ref={lineRef}
              className="mt-4 block h-px w-28 origin-left bg-gradient-to-r from-accent/70 via-white/20 to-transparent"
            />
          </div>
          {subtitle ? (
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
