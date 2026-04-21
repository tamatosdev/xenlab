import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "You film once.",
    desc: "A 15–30 minute session — that's it. No studio, no crew, no preparation. Just you talking naturally.",
  },
  {
    n: "02",
    title: "We build your AI clone.",
    desc: "We create a photorealistic avatar of you — your voice, your face, your energy. Indistinguishable from the real thing.",
  },
  {
    n: "03",
    title: "We create and publish at scale.",
    desc: "Scripts written, videos rendered, captions crafted, content published across LinkedIn, Instagram, TikTok and YouTube — every single day.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden border-t border-border bg-surface/30 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] w-[900px] bg-radial-glow opacity-40" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              How it works
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-gradient md:text-5xl lg:text-6xl">
              One shoot.{" "}
              <span className="text-accent-orange">Infinite content.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group relative h-full">
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-full top-12 hidden h-px w-8 bg-gradient-to-r from-border to-transparent md:block"
                  />
                )}

                <div className="hover-lift relative h-full overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-10">
                  <div
                    aria-hidden
                    className="font-display text-6xl font-bold leading-none tracking-tight text-accent-orange md:text-7xl"
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight md:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.desc}
                  </p>
                  <div className="mt-10 h-px w-10 bg-primary transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
