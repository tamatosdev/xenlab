import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Check, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — XENLabs.ai" },
      {
        name: "description",
        content:
          "Three engagement tiers for founders, coaches and C-suite operators. From a one-off avatar build to a fully managed content empire.",
      },
      { property: "og:title", content: "Pricing — XENLabs.ai" },
      {
        property: "og:description",
        content:
          "Simple pricing. Serious results. Plans built for operators who want to scale without the overhead.",
      },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    tag: "FOUNDER IDENTITY",
    name: "Signature",
    price: "from $997",
    cycle: "/ one-off build",
    desc: "Build your AI avatar + voice model and a complete brand operating system.",
    features: [
      { text: "Photoreal AI avatar (v3.2)", highlight: false },
      { text: "Studio voice model", highlight: false },
      { text: "Brand identity & narrative", highlight: false },
      { text: "10 launch content pieces", highlight: false },
      { text: "30-day strategist support", highlight: false },
    ],
    highlighted: false,
    badge: null,
  },
  {
    tag: "ALWAYS-ON GROWTH",
    name: "Engine",
    price: "from $1600",
    cycle: "/ month",
    desc: "We run your end-to-end content engine — strategy, scripts, render, edit, post.",
    features: [
      { text: "Everything in Signature", highlight: false },
      { text: "30+ pieces / month", highlight: false },
      { text: "Multi-platform distribution", highlight: false },
      { text: "Weekly performance review", highlight: false },
      { text: "Dedicated creative director", highlight: false },
    ],
    highlighted: true,
    badge: "MOST CHOSEN",
  },
  {
    tag: "GLOBAL SCALE",
    name: "Empire",
    price: "Custom",
    cycle: "/ quarterly",
    desc: "For operators expanding into multiple markets, languages and personas.",
    features: [
      { text: "Everything in Engine", highlight: false },
      { text: "28-language localisation", highlight: true },
      { text: "Long-form + ads pipeline", highlight: false },
      { text: "Private model hosting", highlight: false },
      { text: "Executive war-room access", highlight: false },
    ],
    highlighted: false,
    badge: null,
  },
];

function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-125 w-250 bg-radial-glow opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" />

        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2B]" />
                Pricing
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Simple pricing.{" "}
                <span className="text-accent-orange">Serious results.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Three tiers built for operators at different stages. All of them remove you from
                the content equation — except for the part where you get the credit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="border-t border-border">
        <div className="container-x py-12 md:py-16">
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div className="relative flex h-full flex-col">
                  {/* Badge above card */}
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-[#FF6B2B] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`flex h-full flex-col rounded-3xl border p-8 transition-colors duration-300 ${
                      tier.highlighted
                        ? "border-[#FF6B2B]/50 bg-[#141414] shadow-[0_0_60px_rgba(255,107,43,0.08)]"
                        : "border-[#2a2a2a] bg-[#111111]"
                    }`}
                  >
                    {/* Tag */}
                    <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
                      {tier.tag}
                    </div>

                    {/* Name */}
                    <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground">
                      {tier.name}
                    </h2>

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-xs text-muted-foreground/60">{tier.cycle}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tier.desc}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-[#2a2a2a]" />

                    {/* Features */}
                    <ul className="flex-1 space-y-3.5">
                      {tier.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-3">
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              tier.highlighted ? "text-[#FF6B2B]" : "text-[#FF6B2B]/70"
                            }`}
                          />
                          <span
                            className={`text-sm leading-snug ${
                              f.highlight
                                ? "text-[#FF6B2B]"
                                : "text-foreground/80"
                            }`}
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className={`cta-scale inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 ${
                          tier.highlighted
                            ? "bg-[#FF6B2B] text-white hover:bg-[#ff7c42] shadow-[0_0_24px_rgba(255,107,43,0.3)]"
                            : "border border-[#333] bg-transparent text-foreground hover:border-[#555] hover:bg-[#1a1a1a]"
                        }`}
                      >
                        Book strategy call
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Trust line */}
          <Reveal delay={200}>
            <p className="mt-8 text-center text-xs text-muted-foreground/50">
              No commitment on Signature · Quarterly agreements on Engine & Empire · All plans include onboarding
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
