"use client";

import { navItems, siteMeta } from "@/data/site";
import { EASE_OUT_QUAD, MOTION_SECONDS } from "@/lib/animations/core";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(navItems[0]?.id ?? "hero");
  const [scrolled, setScrolled] = useState(false);

  const ids = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const activeId =
        ids.findLast((id) => {
          const section = document.getElementById(id);
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top <= 140;
        }) ?? ids[0];

      setActive(activeId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled ? "border-white/12 bg-bg/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-4 sm:px-7 lg:px-10 2xl:max-w-[1360px]">
        <a href="#hero" className="group flex items-baseline gap-2.5">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-text">
            KD
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted sm:inline">Portfolio</span>
        </a>

        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors",
                active === item.id
                  ? "bg-white/12 text-text"
                  : "text-muted hover:bg-white/5 hover:text-text"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 text-muted transition hover:text-text lg:hidden"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className="text-sm leading-none">Close</span>
          ) : (
            <span className="text-sm leading-none">Menu</span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: MOTION_SECONDS.fast, ease: EASE_OUT_QUAD }}
            className="border-t border-white/12 bg-surface/95 px-4 py-4 backdrop-blur lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-[1240px] flex-col gap-2 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-xs uppercase tracking-[0.15em]",
                    active === item.id ? "bg-white/10 text-text" : "text-muted"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${siteMeta.email}`}
                className="mt-2 rounded-lg border border-accent/60 bg-accent/10 px-3 py-2 text-center text-xs uppercase tracking-[0.15em] text-text"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
