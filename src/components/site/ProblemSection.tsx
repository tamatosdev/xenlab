import { Reveal } from "./Reveal";
import { Clock, Wallet, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "No time to create content",
  },
  {
    icon: Wallet,
    title: "Too expensive to hire a full team",
  },
  {
    icon: TrendingDown,
    title: "Your competitors are posting daily while you're silent",
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] w-[900px] bg-radial-glow opacity-50" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              The Problem
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-gradient md:text-5xl lg:text-6xl">
              You know you need to show up online.
              <br className="hidden md:block" />{" "}
              <span className="text-accent-orange">You just don't have the time.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Hiring a team costs $8–15K a month. Doing it yourself means hours you don't
              have. And even if you invest — you still have to shoot. XENLabs removes you
              from the equation — except for the part where you get the credit.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="hover-lift group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-radial-glow opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <div className="mt-8 h-px w-10 bg-primary transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
