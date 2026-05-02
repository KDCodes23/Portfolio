import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <Reveal>
      <div className="grid gap-7 border border-white/12 bg-surface/85 p-5 sm:grid-cols-[1.1fr_1fr] sm:items-center sm:p-7">

        {/* LEFT */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-accentBright">
            LET'S CONNECT
          </p>

          <h3 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Front-end focused Full-Stack developer looking for opportunities.
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
            I build modern web apps using React, Next.js, and TypeScript,
            focused on clean design, usability, and performance.
            Open to roles, collaborations, and product development.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4 text-[15px] text-muted">

          <a
            href="mailto:Kdutta2017@outlook.com"
            className="transition hover:text-accentBright font-medium"
          >
            Email · <span className="text-text">Kdutta2017@outlook.com</span>
          </a>

          <a
            href="https://github.com/KDCodes23"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accentBright font-medium"
          >
            GitHub · @KDCodes23
          </a>

          <a
            href="https://www.linkedin.com/in/kanishka-dutta-97491918a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accentBright font-medium"
          >
            LinkedIn · Kanishka Dutta
          </a>

          <p>
            Discord · <span className="text-text">kanishka.vertex</span>
          </p>

        </div>

      </div>
    </Reveal>
  );
}