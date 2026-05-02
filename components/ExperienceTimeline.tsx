"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { experienceGroups } from "@/data/experience";
import { educationTimeline } from "@/data/education";

export function ExperienceTimeline() {
  const [openGroup, setOpenGroup] = useState<string | null>("Education");

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/15" />

      <div className="space-y-10">
        {educationTimeline.map((group, idx) => {
          const isOpen = openGroup === group.title;

          return (
            <Reveal key={`edu-${group.title}`} delay={idx * 0.06}>
              <div className="group relative flex items-start gap-6">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                  <div
                    className={`h-3 w-3 rounded-full border border-accent bg-bg transition-all duration-300 ${
                      isOpen
                        ? "scale-110 shadow-[0_0_12px_rgba(239,68,68,0.55)]"
                        : "group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                    }`}
                  />
                </div>

                <div
                  className={`absolute left-7 top-4 h-px w-8 transition-colors duration-300 ${
                    isOpen
                      ? "bg-accent/70"
                      : "bg-white/20 group-hover:bg-accent/50"
                  }`}
                />

                <article className="relative flex-1 rounded-md border border-white/12 bg-surface/85 transition duration-300 hover:border-white/25 hover:bg-surface">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup((prev) =>
                        prev === group.title ? null : group.title
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-display text-2xl text-text transition group-hover:text-white">
                          {group.title}
                        </p>

                        <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                          {group.type ?? "Education"}
                        </span>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                        {group.summary}
                      </p>
                    </div>

                    <svg
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-text" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="space-y-4">
                          {group.items.map((item) => (
                            <div
                              key={`${group.title}-${item.schoolName}`}
                              className="rounded-md border border-white/8 bg-black/10 p-4 transition duration-300 hover:border-white/15 hover:bg-black/15"
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-base font-medium text-text sm:text-lg">
                                  {item.schoolName}
                                </p>

                                <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                                  {item.degree}
                                </span>
                              </div>

                              <p className="mt-1 text-sm text-muted/90">
                                {item.location} · {item.period}
                              </p>

                              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                                {item.summary}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          );
        })}

        {experienceGroups.map((group, idx) => {
          const isOpen = openGroup === group.title;

          return (
            <Reveal key={group.title} delay={idx * 0.06}>
              <div className="group relative flex items-start gap-6">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                  <div
                    className={`h-3 w-3 rounded-full border border-accent bg-bg transition-all duration-300 ${
                      isOpen
                        ? "scale-110 shadow-[0_0_12px_rgba(239,68,68,0.55)]"
                        : "group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                    }`}
                  />
                </div>

                <div
                  className={`absolute left-7 top-4 h-px w-8 transition-colors duration-300 ${
                    isOpen
                      ? "bg-accent/70"
                      : "bg-white/20 group-hover:bg-accent/50"
                  }`}
                />

                <article className="relative flex-1 rounded-md border border-white/12 bg-surface/85 transition duration-300 hover:border-white/25 hover:bg-surface">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup((prev) =>
                        prev === group.title ? null : group.title
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-display text-2xl text-text transition group-hover:text-white">
                          {group.title}
                        </p>

                        <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                          {group.type}
                        </span>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                        {group.summary}
                      </p>
                    </div>

                    <svg
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-text" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="space-y-3 border-l border-white/10 pl-4">
                          {group.items.map((item) => (
                            <div
                              key={`${group.title}-${item.title}`}
                              className="rounded-md border border-white/8 bg-black/10 p-4 transition duration-300 hover:border-white/15 hover:bg-black/15"
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-base font-medium text-text sm:text-lg">
                                  {item.title}
                                </p>

                                {item.type ? (
                                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                                    {item.type}
                                  </span>
                                ) : null}
                              </div>

                              <p className="mt-1 text-sm text-muted/90">
                                {item.organization} · {item.period}
                              </p>

                              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                                {item.summary}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}