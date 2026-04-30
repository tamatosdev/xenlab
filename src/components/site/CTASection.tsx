import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

interface CTASectionProps {
  heading?: React.ReactNode;
  text?: string;
}

export function CTASection({
  heading = (
    <>
      Your competitor just <span className="text-accent-orange">posted again.</span>
    </>
  ),
  text = "Every day you're not showing up online is a day someone else is taking your audience. Book a free 30-minute strategy call — we'll show you exactly what your content presence could look like in 90 days.",
}: CTASectionProps = {}) {
  return (
    <section className="relative overflow-hidden border-t border-[#222] bg-[#080808] py-24 md:py-36">
      {/* Radial glow behind content */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-250 -translate-x-1/2 -translate-y-1/2 bg-radial-glow opacity-60" />
      {/* Top edge line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#FF6B2B]/40 to-transparent" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Urgency eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#FF6B2B]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B2B] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B2B]" />
              </span>
              Act now
            </span>

            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {heading}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {text}
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <CTAButton size="lg" label="Book Your Free Call" />
              <p className="text-xs text-muted-foreground/70">
                No commitment. No pitch. Just a plan.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
