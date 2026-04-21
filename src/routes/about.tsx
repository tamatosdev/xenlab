import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — XENLabs.ai" },
      {
        name: "description",
        content:
          "XENLabs.ai is a small, senior AI creative studio building the next generation of founder‑led brands.",
      },
      { property: "og:title", content: "About — XENLabs.ai" },
      {
        property: "og:description",
        content:
          "A small, senior AI creative studio building the next generation of founder‑led brands.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    title: "Operators, not vendors",
    desc: "We embed like a creative co‑founder. Decisions move at founder speed.",
  },
  {
    n: "02",
    title: "Premium by default",
    desc: "Every frame, voice, word and pixel is engineered to feel inevitable.",
  },
  {
    n: "03",
    title: "Owned, not rented",
    desc: "Your avatar, voice and brand IP are private — never resold, never shared.",
  },
  {
    n: "04",
    title: "Compound over noise",
    desc: "We obsess over outcomes that compound: authority, inbound, enterprise deals.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Section 01: Manifesto */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — text content */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                About Us
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-left md:text-5xl lg:text-6xl">
                We built XENLabs because great ideas deserve a bigger audience.
              </h2>
              <p className="mt-6 max-w-xl text-base text-left leading-relaxed text-muted-foreground md:text-lg">
                Too many brilliant founders, coaches and executives are invisible online — not because they have nothing to say, but because they don't have the time or team to say it consistently. We built XENLabs to fix that. We take your expertise, your voice and your personality — and we amplify it using AI at a scale that was impossible two years ago.
              </p>
            </Reveal>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-6 bg-radial-glow opacity-70 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated">
                  <img
                    src={portrait}
                    alt="Founder portrait, dramatic orange rim lighting"
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 02: What Makes Us Different */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        
        <div className="container-x relative">
          <div className="mb-12 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                What makes us different.
              </h2>
            </Reveal>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "We are a lab, not an agency.",
                body: "We experiment, iterate and optimise constantly. Your content strategy is always improving — never stale.",
              },
              {
                title: "Human first, AI powered.",
                body: "Our writers, strategists and editors shape everything. AI handles the execution. The ideas are always human.",
              },
              {
                title: "Your brand. Your voice. Always.",
                body: "We never make you sound like everyone else. Everything is built around who you actually are — your tone, your opinions, your authority.",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="hover-lift group relative h-full rounded-2xl border border-border bg-surface-elevated p-8 transition-colors hover:border-accent-orange/50">
                  <div className="absolute top-0 left-0 h-1 w-12 rounded-full bg-accent-orange opacity-0 transition-opacity group-hover:opacity-100" />
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Team */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  The Founder
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Meet the team.
                </h2>
              </Reveal>
            </div>
            
            <Reveal delay={120}>
              <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
                <div className="shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-radial-glow opacity-50 blur-2xl" />
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated">
                      <img
                        src={portrait}
                        alt="Founder portrait"
                        width={400}
                        height={500}
                        loading="lazy"
                        className="aspect-[4/5] w-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    Alex Rivera
                  </h3>
                  <p className="mt-1 text-sm text-accent-orange">
                    Founder & Creative Director
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    I spent 10 years watching brilliant founders struggle to be seen online. 
                    They had the expertise, but not the time or team to create content consistently. 
                    That's why I built XENLabs — to give you a personal brand that works while you focus on what you do best.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}