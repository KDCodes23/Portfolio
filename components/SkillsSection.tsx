import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map((group, idx) => (
        <Reveal key={group.category} delay={idx * 0.05} className="h-full">
          <article className="h-full border border-white/12 bg-surface/85 p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentBright">{group.category}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-white/20 bg-panel px-2.5 py-1.5 text-xs text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
