import { Reveal } from "@/components/Reveal";
import { vertexPillars } from "@/data/site";

export function VertexSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_1fr] lg:gap-7">
      <Reveal>
        <div className="h-full border border-white/12 bg-surface/85 p-6 shadow-panel sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accentBright">
            Founder Framing
          </p>

          <h3 className="mt-4 font-display text-3xl font-semibold text-text">
            Vertex Studios
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            Vertex Studios is an indie studio focused on game development,
            student collaboration, portfolio projects, and creative technology.
            We build real projects that demonstrate craft, process, and impact
            while supporting the growth of emerging talent in the industry.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            I lead product direction, team coordination, and technical delivery
            to ensure every build has portfolio-level quality and practical
            impact.
          </p>
        </div>
      </Reveal>

      {/* Mobile horizontal slider */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 pt-2 sm:hidden">
        {vertexPillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={0.05 * index}
            className="min-w-[86%] snap-start"
          >
            <article className="h-full border border-white/12 bg-panel p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {pillar.marker}
              </p>

              <h4 className="mt-2 font-display text-xl text-text">
                {pillar.title}
              </h4>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Tablet/Desktop grid */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2">
        {vertexPillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.05 * index}>
            <article className="h-full border border-white/12 bg-panel p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {pillar.marker}
              </p>

              <h4 className="mt-2 font-display text-xl text-text">
                {pillar.title}
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}