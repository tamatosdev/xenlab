import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "We 3x'd our content output, added qualified leads weekly, and got all of it done without me filming every day. The ROI on time alone paid for it in month one.",
    name: "Marcus Vale",
    role: "Founder · Vale Capital",
    initials: "MV",
    stat: "3× content output",
  },
  {
    quote:
      "In 90 days we went from invisible to inbound. XENLabs built us a content engine that runs itself — I just show up for the strategy calls.",
    name: "Priya Anand",
    role: "C‑Suite Executive Coach",
    initials: "PA",
    stat: "12 qualified leads / week",
  },
  {
    quote:
      "I used to spend 6 hours a week on content. Now it's 30 minutes. My follower count has tripled and my DMs are full of people who already want to work with me.",
    name: "Daniel Reiss",
    role: "CEO · Northwave",
    initials: "DR",
    stat: "80% time saved",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-[#222] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/30 to-transparent" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#111] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2B]" />
              Client results
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Real people.{" "}
              <span className="text-accent-orange">Real results.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="hover-lift group flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-7">
                {/* Accent stat pill */}
                <div className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-orange/20 bg-accent-orange/10 px-3 py-1 text-[11px] font-medium tracking-wide text-accent-orange">
                  {t.stat}
                </div>

                {/* Quote mark */}
                <div className="text-3xl font-display leading-none text-accent-orange/60">"</div>

                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {/* Avatar placeholder */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-xs font-semibold tracking-wide text-accent-orange">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
