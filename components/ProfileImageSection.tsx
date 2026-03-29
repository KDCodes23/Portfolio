import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { siteMeta } from "@/data/site";

export function ProfileImageSection() {
  return (
    <section id="portrait" className="scroll-mt-32 border-t border-white/12 py-18 sm:py-22 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-7 lg:px-10 2xl:max-w-[1460px]">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch xl:gap-8">
          <Reveal delay={0.08} className="order-1">
            <article className="relative h-[540px] overflow-hidden border border-white/12 bg-panel shadow-panel sm:h-[620px] lg:h-[720px] xl:h-[760px] 2xl:h-[820px]">
              <div className="pointer-events-none absolute inset-0 z-10 border-[1.5px] border-white/10 [clip-path:inset(16px)]" />
              
              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between border-b border-white/12 bg-bg/65 px-4 py-2.5 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Founder Portrait</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-accentBright">Identity / KD-01</p>
              </div>

              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={siteMeta.portraitImageBG}
                  alt="Background roses"
                  fill
                  priority
                  className="object-cover grayscale opacity-35 blur-sm scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 62vw, (max-width: 1920px) 820px, 920px"
                />
              </div>

              {/* Overlay effects */}
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(229,48,48,0.14),transparent_62%)]" />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),transparent_35%,rgba(0,0,0,0.15))]" />

              {/* Main portrait */}
              <div className="absolute inset-0 z-20">
                <Image
                  src={siteMeta.portraitImage}
                  alt={siteMeta.portraitAlt}
                  fill
                  priority
                  className="object-contain object-bottom p-2 pt-6 sm:p-3 sm:pt-8 lg:p-0 lg:pt-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 62vw, (max-width: 1920px) 820px, 920px"
                />
              </div>

              <div className="pointer-events-none absolute bottom-4 left-4 z-30 border border-white/12 bg-bg/80 px-2.5 py-1.5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Kanishka Dutta / 2026</p>
              </div>

              <div className="pointer-events-none absolute bottom-4 right-4 z-30 border border-accent/40 bg-accent/10 px-2.5 py-1.5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-text">Frontend + Founder</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="order-2">
            <article className="h-full border border-white/12 bg-surface/85 p-6 shadow-panel sm:p-8 lg:p-9">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accentBright">Founder Profile</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[2.8rem] lg:leading-[1.04]">
                Cinematic identity, product-first execution.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
                This panel positions me as both builder and creative lead. It is designed to feel
                editorial and futuristic, while keeping the focus on clear communication, technical
                execution, and leadership presence.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="border border-white/12 bg-bg/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Identity</p>
                  <p className="mt-1.5 text-sm text-text">{siteMeta.name}</p>
                </div>
                <div className="border border-white/12 bg-bg/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Primary Role</p>
                  <p className="mt-1.5 text-sm text-text">Frontend Developer</p>
                </div>
                <div className="border border-white/12 bg-bg/70 p-4 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Framing Note</p>
                  <p className="mt-1.5 text-sm text-text">
                    Founder of Vertex Studios, focused on polished interfaces and ambitious
                    collaborative builds.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}