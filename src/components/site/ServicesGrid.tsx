import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ScanFace, Layers, Compass } from "lucide-react";
import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";

const services = [
  {
    icon: ScanFace,
    title: "AI Avatar Cloning",
    desc: "Your face, voice and presence replicated with AI. One shoot, unlimited content forever.",
  },
  {
    icon: Layers,
    title: "Content at Scale",
    desc: "20–40 pieces of platform-optimised content per month. Published for you, every day.",
  },
  {
    icon: Compass,
    title: "Full Brand Management",
    desc: "Strategy, scripts, publishing and analytics. Everything under one roof.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              What we do
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-gradient md:text-5xl lg:text-6xl">
              Everything your personal brand needs.
              <br className="hidden md:block" />{" "}
              <span className="text-accent-orange">Nothing it doesn't.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link
                to="/services"
                className="hover-lift group relative block h-full overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong hover:bg-surface-elevated"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-radial-glow opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-accent-orange">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>

                  <h3 className="mt-8 font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-10 bg-accent-orange transition-all duration-500 group-hover:w-24" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton size="lg" />
            <Link
              to="/services"
              className="cta-scale inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-elevated"
            >
              Explore all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
