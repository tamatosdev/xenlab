import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { CTASection } from "@/components/site/CTASection";
import { Check } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — XENLabs.ai" },
      {
        name: "description",
        content:
          "AI avatar cloning, voice modelling, content engine and global localisation — three engagement tiers built for serious operators.",
      },
      { property: "og:title", content: "Services — XENLabs.ai" },
      {
        property: "og:description",
        content:
          "Three premium engagement tiers built for founders, coaches and C‑suite operators.",
      },
    ],
  }),
  component: ServicesPage,
});

const tiers = [
  {
    name: "Signature",
    tag: "Founder identity",
    price: "From $9.5k",
    cycle: "/ one‑off build",
    desc: "Build your AI avatar + voice model and a complete brand operating system.",
    features: [
      "Photoreal AI avatar (v3.2)",
      "Studio voice model",
      "Brand identity & narrative",
      "10 launch content pieces",
      "30‑day strategist support",
    ],
    highlighted: false,
  },
  {
    name: "Engine",
    tag: "Always‑on growth",
    price: "From $7.5k",
    cycle: "/ month",
    desc: "We run your end‑to‑end content engine — strategy, scripts, render, edit, post.",
    features: [
      "Everything in Signature",
      "30+ pieces / month",
      "Multi‑platform distribution",
      "Weekly performance review",
      "Dedicated creative director",
    ],
    highlighted: true,
  },
  {
    name: "Empire",
    tag: "Global scale",
    price: "Custom",
    cycle: "/ quarterly",
    desc: "For operators expanding into multiple markets, languages and personas.",
    features: [
      "Everything in Engine",
      "28‑language localisation",
      "Long‑form + ads pipeline",
      "Private model hosting",
      "Executive war‑room access",
    ],
    highlighted: false,
  },
];

function ServicesPage() {
  return (
    <>
      {/* Section 01: Page Hero */}
      <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-background md:min-h-[calc(100vh-5rem)]">
        {/* Layer 1 — grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.28]" />

        {/* Layer 2 — radial orange glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[900px] w-[900px] bg-radial-glow opacity-80" />

        {/* Layer 3 — background wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[-10%] flex select-none items-end justify-center overflow-hidden"
        >
          <span className="font-display text-[34vw] font-bold leading-[0.8] tracking-[-0.06em] text-white/[0.025] md:text-[26vw]">
            XEN
          </span>
        </div>

        {/* Layer 4 — bottom fade */}
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
                Services
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[40px] font-semibold leading-[1.02] tracking-tight md:text-[64px] lg:text-[80px]">
                What we build
                <br />
                <span className="text-gradient">for you</span>
                <span className="text-accent-orange">.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Three core services.
                <br />
                One outcome — a personal brand that works while you don't.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <CTAButton size="lg" />
              </div>
            </Reveal>
          </div>

          {/* Right — avatar visual */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-[520px]">
                {/* Glow halo */}
                <div className="absolute -inset-8 rounded-[32px] bg-radial-glow opacity-90 blur-2xl" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border bg-surface-elevated shadow-card">
                  <img
                    src={heroAvatar}
                    alt="AI cloned avatar"
                    width={1536}
                    height={1536}
                    className="h-full w-full object-cover"
                  />

                  {/* Cinematic vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 02: Service 01 – AI Avatar Cloning */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left — text content */}
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                Service 01
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                AI Avatar
                <br />
                <span className="text-gradient">Cloning.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                We take a single recording of you and build a photorealistic AI avatar that
                replicates your face, voice, tone and mannerisms. Once created, it generates
                unlimited video content — no reshooting ever required. Your avatar is yours.
                You own it.
              </p>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  What's included
                </h3>
                <ul className="mt-5 space-y-4">
                  {[
                    "Avatar creation from one recording session",
                    "Voice cloning — your exact tone and cadence",
                    "Multiple outfit and background variations",
                    "Unlimited video renders",
                    "Revisions included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/20 text-primary">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right — visual */}
            <Reveal delay={120}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 rounded-[32px] bg-radial-glow opacity-60 blur-2xl shadow-lg" />
                
                <div className="relative aspect-square overflow-hidden rounded-[28px] border border-border bg-surface-elevated">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Abstract avatar visual representation */}
                    <div className="relative h-64 w-64">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent-orange/20 animate-pulse" />
                      <div className="absolute inset-4 rounded-full border border-border/50" />
                      <div className="absolute inset-8 rounded-full bg-surface" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="h-16 w-16 text-primary/60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ownership badge */}
                  <div className="absolute bottom-6 left-6 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur">
                    <span className="text-xs font-medium text-foreground">
                      ✓ You own your avatar
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 03: Service 02 – Content at Scale */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left — visual (alternating from previous) */}
            <Reveal>
              <div className="relative order-2 lg:order-1">
                {/* Glow effect */}
                <div className="absolute -inset-4 rounded-[32px] bg-radial-glow opacity-60 blur-2xl shadow-lg" />
                
                <div className="relative aspect-square overflow-hidden rounded-[28px] border border-border bg-surface-elevated">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Content pipeline visual representation */}
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="h-12 w-20 rounded-lg border border-border bg-surface" />
                        <div className="h-12 w-20 rounded-lg border border-border bg-surface" />
                        <div className="h-12 w-20 rounded-lg border border-border bg-surface" />
                      </div>
                      <svg className="h-8 w-8 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <div className="flex flex-col gap-3">
                        <div className="h-12 w-20 rounded-lg bg-primary/20" />
                        <div className="h-12 w-20 rounded-lg bg-primary/20" />
                        <div className="h-12 w-20 rounded-lg bg-primary/20" />
                      </div>
                      <svg className="h-8 w-8 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <div className="flex flex-col gap-3">
                        <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-accent-orange/20 text-xs text-accent-orange">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-accent-orange/20 text-xs text-accent-orange">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-accent-orange/20 text-xs text-accent-orange">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Done-for-you badge */}
                  <div className="absolute bottom-6 left-6 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur">
                    <span className="text-xs font-medium text-foreground">
                      ✓ Done-for-you execution
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — text content */}
            <Reveal delay={120}>
              <div className="order-1 lg:order-2">
                <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  Service 02
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Content at
                  <br />
                  <span className="text-gradient">Scale.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Our team writes scripts built around your expertise, renders videos with your
                  avatar, adds captions and hooks, and publishes across every platform on a
                  daily schedule. You review. We execute. Your audience grows.
                </p>

                <div className="mt-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    What's included
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {[
                      "Script writing aligned to your tone and niche",
                      "Video production with your AI avatar",
                      "Captions, hooks and platform-specific formatting",
                      "Scheduling and publishing across all platforms",
                      "Monthly analytics and performance report",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/20 text-primary">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 04: Service 03 – Full Brand Management (Featured) */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 bg-radial-glow opacity-50" />
        
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left — text content */}
            <Reveal>
              <div className="rounded-3xl border border-primary/30 bg-surface-elevated/50 p-8 glow-soft">
                <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  Service 03 — Flagship
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Full Brand
                  <br />
                  <span className="text-gradient">Management.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  For executives and founders who want everything handled. We develop your
                  content strategy, manage your editorial calendar, handle publishing, monitor
                  engagement and report on growth — end to end. You show up when we need input.
                  We do the rest.
                </p>

                <div className="mt-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    What's included
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {[
                      "Everything in Content at Scale",
                      "Dedicated account manager",
                      "Monthly content strategy calls",
                      "A/B hook testing and optimisation",
                      "Competitor content analysis",
                      "Priority support and turnaround",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/20 text-primary">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Right — visual */}
            <Reveal delay={120}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 rounded-[32px] bg-radial-glow opacity-60 blur-2xl shadow-lg" />
                
                <div className="relative aspect-square overflow-hidden rounded-[28px] border border-primary/30 bg-surface-elevated">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Premium dashboard visual representation */}
                    <div className="grid grid-cols-2 gap-4 p-8">
                      <div className="rounded-xl border border-border bg-surface p-4">
                        <div className="text-xs text-muted-foreground">Revenue</div>
                        <div className="mt-2 font-display text-2xl font-semibold text-foreground">$2.4M</div>
                        <div className="mt-1 text-xs text-green-500">+12%</div>
                      </div>
                      <div className="rounded-xl border border-border bg-surface p-4">
                        <div className="text-xs text-muted-foreground">Engagement</div>
                        <div className="mt-2 font-display text-2xl font-semibold text-foreground">+340%</div>
                        <div className="mt-1 text-xs text-green-500">+8%</div>
                      </div>
                      <div className="rounded-xl border border-border bg-surface p-4">
                        <div className="text-xs text-muted-foreground">Followers</div>
                        <div className="mt-2 font-display text-2xl font-semibold text-foreground">89K</div>
                        <div className="mt-1 text-xs text-green-500">+2.1K</div>
                      </div>
                      <div className="rounded-xl border border-border bg-surface p-4">
                        <div className="text-xs text-muted-foreground">Content</div>
                        <div className="mt-2 font-display text-2xl font-semibold text-foreground">124</div>
                        <div className="mt-1 text-xs text-muted-foreground">This month</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* End-to-end badge */}
                  <div className="absolute bottom-6 left-6 rounded-full border border-primary/30 bg-surface/80 px-4 py-2 backdrop-blur">
                    <span className="text-xs font-medium text-primary">
                      ✓ End-to-end management
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      {/* <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div
                  className={`hover-lift relative h-full rounded-3xl border p-8 ${
                    t.highlighted
                      ? "border-primary/40 bg-surface-elevated glow-soft"
                      : "border-border bg-surface"
                  }`}
                >
                  {t.highlighted && (
                    <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                      Most chosen
                    </span>
                  )}
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.tag}
                  </div>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                    {t.name}
                  </h3>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold">{t.price}</span>
                    <span className="text-xs text-muted-foreground">{t.cycle}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

                  <div className="my-7 h-px w-full bg-border" />

                  <ul className="space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-border bg-background text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <CTAButton
                      full
                      variant={t.highlighted ? "primary" : "ghost"}
                      label="Book strategy call"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 05: Pricing + CTA */}
      <section className="relative overflow-hidden border-t border-border bg-background py-20 md:py-28">
        <div className="container-x relative text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Simple pricing. Serious results.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Plans starting from $997/mo. Compare this to hiring a video team, editor and copywriter — which runs <span className="text-accent-orange">$8,000–15,000 </span>per month. XENLabs delivers all three at a fraction of the cost. Custom packages available based on your goals, platforms and content volume.
          </p>

          <div className="mt-10">
            <CTAButton href="#contact" className="px-8 py-4 text-lg">
              Book a Free Strategy Call
            </CTAButton>
            <p className="mt-4 text-sm text-muted-foreground">
              We’ll build a custom plan for you on the call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}