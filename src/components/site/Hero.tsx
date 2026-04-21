import heroAvatar from "@/assets/hero-avatar.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-background md:min-h-[calc(100vh-5rem)]">
      {/* Layer 1 — grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.28]" />

      {/* Layer 2 — radial orange glow, top-left of avatar */}
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[900px] w-[900px] bg-radial-glow opacity-80" />

      {/* Layer 3 — gigantic background wordmark "XEN" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-10%] flex select-none items-end justify-center overflow-hidden"
      >
        <span className="font-display text-[34vw] font-bold leading-[0.8] tracking-[-0.06em] text-white/[0.025] md:text-[26vw]">
          XEN
        </span>
      </div>

      {/* Layer 4 — bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      {/* Content */}
      <div className="container-x relative z-10 grid w-full items-center gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-10">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              AI-Powered Personal Branding
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-[40px] font-semibold leading-[1.02] tracking-tight md:text-[64px] lg:text-[80px]">
              Your voice.
              <br />
              <span className="text-gradient">Everywhere.</span>
              <br />
              Without the effort
              <span className="text-accent-orange">.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We clone your identity, write your scripts, create your content and publish it
              across every platform — so you show up daily without ever picking up a camera
              again.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="cta-scale inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold tracking-tight text-primary-foreground hover:bg-primary-glow glow-primary"
              >
                Book a Free Strategy Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#process"
                className="hover-lift group inline-flex h-14 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  <ArrowDown className="h-4 w-4" />
                </span>
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 flex items-center gap-8 text-xs text-muted-foreground">
              <div>
                <div className="font-display text-2xl font-semibold text-foreground">120+</div>
                <div className="mt-1 uppercase tracking-[0.18em]">Founders cloned</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-semibold text-foreground">9.4M</div>
                <div className="mt-1 uppercase tracking-[0.18em]">Views generated</div>
              </div>
              <div className="hidden h-10 w-px bg-border sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-2xl font-semibold text-foreground">24/7</div>
                <div className="mt-1 uppercase tracking-[0.18em]">Always-on</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — avatar visual (silent looping placeholder) */}
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* Glow halo */}
              <div className="absolute -inset-8 rounded-[32px] bg-radial-glow opacity-90 blur-2xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border bg-surface-elevated shadow-card">
                {/* Silent looping avatar — image fallback (drop-in replacement when video asset is ready) */}
                <img
                  src={heroAvatar}
                  alt="AI cloned avatar of a founder dissolving into particles"
                  width={1536}
                  height={1536}
                  className="h-full w-full object-cover"
                />

                {/* Cinematic vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />

                {/* Top-left status chip */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 backdrop-blur-xl">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/90">
                    Live Render
                  </span>
                </div>

                {/* Bottom badge */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <div className="text-xs font-medium">Avatar · v3.2</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Cloned · multilingual · always-on
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">XEN—00342</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
