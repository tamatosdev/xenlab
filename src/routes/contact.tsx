import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { Mail, Calendar, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Book a Free Strategy Call A· XENLabs.ai" },
      {
        name: "description",
        content:
          "Book a free 30â€‘minute strategy call with the XENLabs.ai team. No pitch, no pressure â€” strategy first.",
      },
      { property: "og:title", content: "Contact â€” XENLabs.ai" },
      {
        property: "og:description",
        content: "Book a free 30â€‘minute strategy call. Strategy first, always.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Section 01: Hero + Calendly */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.2]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 bg-radial-glow opacity-70" />

        <div className="container-x relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            {/* Left â€” text content */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Contact
                </span>
                <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-left md:text-6xl lg:text-7xl">
                  Let's build your
                  <br />
                  <span className="text-gradient">presence.</span>
                </h1>
                <p className="mt-6 text-base text-left text-muted-foreground md:text-lg">
                  Book a free 30-minute strategy call. We'll map out what your content presence could look like in 90 days â€” no commitment, no pitch, just clarity.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10">
                  <a
                    href="#book-call"
                    className="hover-lift inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-glow"
                  >
                    Book a Call
                  </a>
                  <p className="mt-4 text-sm text-left text-muted-foreground">
                    Prefer email? <a href="mailto:hello@xenlabs.ai" className="text-foreground underline-offset-4 transition-colors duration-200 hover:text-primary">hello@xenlabs.ai</a>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right â€” Calendly embed area */}
            <div id="book-call" className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="relative">
                  <div className="absolute -inset-6 bg-radial-glow opacity-60 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          Schedule your call
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">XENâ€”CAL</span>
                    </div>

                    <div className="mt-6 flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background/60 p-8 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-primary">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                        Calendly embed slot
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Connect your Calendly link here to allow direct booking.
                      </p>
                    </div>

                    <p className="mt-6 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Replies within one business day Â· Worldwide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* Section 02: FAQ */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        
        <div className="container-x relative">
          <div className="mb-12 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Frequently asked questions.
              </h2>
            </Reveal>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                q: "Will people know it's AI?",
                a: "Your thoughts, your voice, AI-powered delivery. The value of your ideas is what your audience comes for — not the pixels.",
              },
              {
                q: "How much time does this take?",
                a: "One recording session to start. After that, 1–2 hours per month for review and approvals. That's it.",
              },
              {
                q: "What if I want to stop?",
                a: "Month-to-month after the first 3 months. You own your avatar assets — always.",
              },
              {
                q: "How quickly can we start?",
                a: "Avatar creation takes 5–7 days. First content batch goes live within 2 weeks of onboarding.",
              },
              {
                q: "Which platforms do you publish to?",
                a: "LinkedIn, Instagram, TikTok, YouTube Shorts, X — based on your package and target audience.",
              },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-surface-elevated p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>    </>
  );
}
       
