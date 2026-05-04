import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ArrowUpRight, CheckCircle2, Eye, Clock, Users, TrendingUp } from "lucide-react";

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

const engagementFeatures = [
  "AI avatar creation — your face, your voice, built once",
  "Monthly content strategy call (30 min)",
  "Full script writing by our content team",
  "Avatar video generation across all agreed platforms",
  "Professional editing, captions, hooks, thumbnails",
  "Scheduling and publishing — fully managed",
  "Monthly performance report",
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
                You're already paying.{" "}
                <span className="text-accent-orange">Just not getting results.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Before you look at our number, look at what you're already spending — in agency
                fees, wasted founder hours, and pipeline that never found you.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="cta-scale inline-flex items-center gap-2 rounded-full bg-[#FF6B2B] px-7 py-3.5 text-sm font-semibold tracking-tight text-white shadow-[0_0_24px_rgba(255,107,43,0.3)] transition-all duration-200 hover:bg-[#ff7c42]"
                >
                  Book Your Free Call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-[#0d0d0d]">
        <div className=" py-10 md:py-12">
          <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
            {[
              {
                value: "20–40",
                unit: "hrs",
                label:
                  "Average hours a founder spends on content per month — if they do it themselves",
              },
              {
                value: "$250",
                unit: null,
                label:
                  "Conservative hourly value of a founder's time at a $500K/yr equivalent business",
              },
              {
                value: "$10K",
                unit: "/mo",
                label:
                  "Opportunity cost of DIY content — before counting the pipeline you didn't build",
              },
              {
                value: "90",
                unit: "min",
                label:
                  "Total time xenlabs clients spend on content each month — for a full platform presence",
              },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex flex-col items-center px-6 py-6 text-center md:px-10">
                  <div className="font-display text-4xl font-bold md:text-5xl">
                    <span className="text-[#FF6B2B]">{stat.value}</span>
                    {stat.unit && <span className="text-foreground"> {stat.unit}</span>}
                  </div>
                  <p className="mt-3 text-s leading-relaxed text-muted-foreground/60">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Cost */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container-x py-16 md:py-24">
          {/* Header */}
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF6B2B]">
                The Hidden Cost
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                The cost nobody puts <span className="text-[#FF6B2B]">in a spreadsheet.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Most founders calculate what they spend on content. Almost none calculate what they
                lose by not having it — or by doing it wrong.
              </p>
            </div>
          </Reveal>

          {/* Two big stat cards */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                label: "LINKEDIN REACH",
                stat: "5×",
                body: "Video content gets 5× more reach than text posts on LinkedIn. Yet 89% of B2B founders post text only — or nothing at all.",
                source: "LinkedIn Engineering Blog, 2024",
              },
              {
                label: "B2B BUYER BEHAVIOUR",
                stat: "82%",
                body: "of B2B buyers research a company's leadership online before taking a first meeting. Your profile is the first pitch — whether you wrote one or not.",
                source: "Edelman-LinkedIn B2B Thought Leadership Impact Study, 2024",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
                    {card.label}
                  </div>
                  <div className="mt-3 font-display text-6xl font-bold text-[#FF6B2B]">
                    {card.stat}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                  <p className="mt-4 text-[11px] text-muted-foreground/40">Source: {card.source}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Three smaller stats */}
          <Reveal delay={100}>
            <div className="mt-4 rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
              <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
                What the data says about inbound
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    stat: "14.6%",
                    body: "Inbound lead close rate when founders have consistent content presence vs. 1.7% outbound",
                    source: "HubSpot State of Inbound",
                  },
                  {
                    stat: "58%",
                    body: "of B2B decision-makers say thought leadership directly influenced a purchase decision in the last 12 months.",
                    source: "Edelman-LinkedIn, 2024",
                  },
                  {
                    stat: "3×",
                    body: "more inbound pipeline reported by founders who post consistent video content vs. those who don't, within 90 days.",
                    source: "Demand Gen Report, 2024",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="font-display text-4xl font-bold text-foreground">
                      {item.stat}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                    <p className="mt-3 text-[11px] text-muted-foreground/40">
                      Source: {item.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Real cost of doing nothing */}
          <Reveal delay={120}>
            <div className="mt-4 rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
              <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
                The real cost of doing nothing
              </div>
              <div className="space-y-6 ">
                {[
                  {
                    icon: <Eye className="h-4 w-4 text-white" />,
                    bg: "bg-[#e86b2e1f]",
                    title: "Every month without video = compounding invisibility",
                    body: "The LinkedIn algorithm rewards consistency. Going dark for 30 days costs you 60 days of recovery time.",
                  },
                  {
                    icon: <Clock className="h-4 w-4 text-white" />,
                    bg: "bg-[#e86b2e1f]",
                    title: "Founder time spent on content = your most expensive line item",
                    body: "At $250/hr, 3 hours on a video that doesn't get made costs you $750. Every single week.",
                  },
                  {
                    icon: <Users className="h-4 w-4 text-white" />,
                    bg: "bg-[#e86b2e1f]",
                    title:
                      "Your competitor is building trust while you're busy running your business",
                    body: "Buyers research before they reach out. The founder with 50 videos in their feed wins the meeting before it's even requested.",
                  },
                  {
                    icon: <TrendingUp className="h-4 w-4 text-white" />,
                    bg: "bg-[#e86b2e1f]",
                    title: "Pipeline built on content doesn't disappear when ad spend does",
                    body: "Unlike paid acquisition, a personal brand compounds. A video posted today is still generating trust in 18 months.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#e86b2e4f]" ${item.bg}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investment */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container-x py-16 md:py-24">
          {/* Header */}
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF6B2B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2B]" />
                Investment
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                One price to start.{" "}
                <span className="block text-[#FF6B2B]">Scoped to your goals.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                We don't put tiers on the page because every founder's situation is different.
                Platforms, volume, and output are scoped on your discovery call.
              </p>
            </div>
          </Reveal>

          {/* Card */}
          <Reveal delay={80}>
            <div className="mt-10 rounded-2xl border border-[#2a2a2a] bg-[#111111]">
              <div className="grid md:grid-cols-2 md:divide-x md:divide-[#2a2a2a]">
                {/* Left — price */}
                <div className="p-8 md:p-10">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
                    Starting From
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-7xl font-bold leading-none text-foreground">
                      <span className="text-4xl font-semibold align-top mt-2 inline-block">$</span>
                      997
                    </span>
                    <span className="mb-2 text-base text-muted-foreground">/ month</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground/50">
                    Custom scoped on your discovery call. No lock-in on first engagement.
                  </p>
                  <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Every engagement starts with a Discovery Call where we scope your platforms,
                      content volume, avatar setup, and monthly output. Pricing is confirmed before
                      anything is signed.
                    </p>
                    <p>The only thing we ask for upfront is 90 minutes of your time each month.</p>
                  </div>
                </div>

                {/* Right — features + CTA */}
                <div className="flex flex-col p-8 md:p-10">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
                    Every Engagement Includes
                  </div>
                  <ul className="mt-6 flex-1 space-y-4">
                    {engagementFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00d492]" />
                        <span className="text-sm text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-3">
                    <Link
                      to="/contact"
                      className="cta-scale inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B2B] py-3.5 text-sm font-semibold tracking-tight text-white shadow-[0_0_24px_rgba(255,107,43,0.3)] transition-all duration-200 hover:bg-[#ff7c42]"
                    >
                      Book Your Discovery Call
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex w-full items-center justify-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Start with the free Visibility Score quiz
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container-x py-16 md:py-24">
          {/* Header */}
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF6B2B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2B]" />
                The Comparison
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Every option on the table. <span className="block text-[#FF6B2B]">Honestly.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                We're not going to pretend other options don't exist. Here's what they actually cost
                — in money, time, and output.
              </p>
            </div>
          </Reveal>

          {/* Table */}
          <Reveal delay={80}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-[#2a2a2a]">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                {/* Head */}
                <thead>
                  <tr className="border-b border-[#2a2a2a]">
                    <th className="w-[18%] p-5 text-left" />
                    {[
                      { label: "Traditional Agency", highlight: false },
                      { label: "In-House Team", highlight: false },
                      { label: "Ghostwriter", highlight: false },
                      { label: "DIY", highlight: false },
                      { label: "XenLabs.ai", highlight: true },
                    ].map((col) => (
                      <th
                        key={col.label}
                        className={`px-4 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          col.highlight
                            ? "bg-[#1c0e00] text-[#FF6B2B]"
                            : "bg-[#111111] text-muted-foreground/60"
                        }`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Monthly Cost",
                      values: [
                        { text: "$5,000 – $8,000", style: "red" },
                        { text: "$8,000 – $15,000", style: "red" },
                        { text: "$2,000 – $4,000", style: "normal" },
                        { text: "$0", style: "normal" },
                        { text: "From $997", style: "highlight-bold" },
                      ],
                    },
                    {
                      label: "Videos / Month",
                      values: [
                        { text: "8 – 12", style: "normal" },
                        { text: "12 – 20", style: "normal" },
                        { text: "0", style: "red" },
                        { text: "4 – 8 (if consistent)", style: "normal" },
                        { text: "8 – 30+", style: "pill" },
                      ],
                    },
                    {
                      label: "Your Time / Month",
                      values: [
                        { text: "4 – 8 hrs", style: "normal" },
                        { text: "6 – 10 hrs", style: "normal" },
                        { text: "2 – 4 hrs", style: "normal" },
                        { text: "20 – 40 hrs", style: "red" },
                        { text: "90 minutes", style: "pill" },
                      ],
                    },
                    {
                      label: "Shoot Days Required",
                      values: [
                        { text: "Monthly", style: "normal" },
                        { text: "Monthly", style: "normal" },
                        { text: "✗  N/A", style: "muted" },
                        { text: "Weekly", style: "normal" },
                        { text: "Never (after setup)", style: "pill" },
                      ],
                    },
                    {
                      label: "Video Content",
                      values: [
                        { text: "✓  Yes", style: "green" },
                        { text: "✓  Yes", style: "green" },
                        { text: "✗  No", style: "muted" },
                        { text: "Sometimes", style: "normal" },
                        { text: "✓  Yes", style: "green-highlight" },
                      ],
                    },
                    {
                      label: "Multi-Platform",
                      values: [
                        { text: "Sometimes", style: "normal" },
                        { text: "Sometimes", style: "normal" },
                        { text: "✗  LinkedIn only", style: "muted" },
                        { text: "Rarely", style: "normal" },
                        { text: "✓  Yes", style: "green-highlight" },
                      ],
                    },
                    {
                      label: "AI-Powered",
                      values: [
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✓  Yes", style: "green-highlight" },
                      ],
                    },
                    {
                      label: "Content Strategy Included",
                      values: [
                        { text: "Sometimes (+cost)", style: "normal" },
                        { text: "Depends on hire", style: "normal" },
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✓  Always", style: "green-highlight" },
                      ],
                    },
                    {
                      label: "Scales Without Hiring",
                      values: [
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✗  No", style: "muted" },
                        { text: "✓  Yes", style: "green-highlight" },
                      ],
                    },
                  ].map((row, ri) => (
                    <tr
                      key={row.label}
                      className={`border-b border-[#1e1e1e] last:border-0 ${ri % 2 === 0 ? "bg-[#0e0e0e]" : "bg-[#111111]"}`}
                    >
                      <td className="px-5 py-4 text-xs font-semibold text-foreground/90">
                        {row.label}
                      </td>
                      {row.values.map((cell, ci) => {
                        const isXen = ci === 4;
                        const base = isXen ? "bg-[#1c0e00]" : "";
                        let content: React.ReactNode;
                        if (cell.style === "pill") {
                          content = (
                            <span className="inline-flex items-center rounded-full bg-[#FF6B2B]/15 px-2.5 py-1 text-xs font-semibold text-[#FF6B2B]">
                              {cell.text}
                            </span>
                          );
                        } else if (cell.style === "highlight-bold") {
                          content = (
                            <span className="text-sm font-bold text-[#FF6B2B]">{cell.text}</span>
                          );
                        } else if (cell.style === "green-highlight") {
                          content = (
                            <span className="text-xs font-semibold text-emerald-400">
                              {cell.text}
                            </span>
                          );
                        } else if (cell.style === "green") {
                          content = (
                            <span className="text-xs font-semibold text-emerald-400">
                              {cell.text}
                            </span>
                          );
                        } else if (cell.style === "red") {
                          content = <span className="text-xs text-[#FF6B2B]/80">{cell.text}</span>;
                        } else if (cell.style === "muted") {
                          content = (
                            <span className="text-xs text-muted-foreground/40">{cell.text}</span>
                          );
                        } else {
                          content = (
                            <span className="text-xs text-muted-foreground/70">{cell.text}</span>
                          );
                        }
                        return (
                          <td
                            key={ci}
                            className={`px-4 py-4 text-center ${base} ${isXen ? "border-x border-[#FF6B2B]/10" : ""}`}
                          >
                            {content}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF6B2B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2B]" />
                Questions
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                The things people ask{" "}
                <span className="block text-[#FF6B2B]">before they book.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 rounded-2xl border border-[#2a2a2a] bg-[#111111]">
            {[
              [
                {
                  q: "Do I actually need to film anything?",
                  a: "Once. You record about 20 minutes of footage on your phone during onboarding — turning your head, natural expressions, no script needed. That footage trains your avatar. After setup, you never step in front of a camera again.",
                },
                {
                  q: "How quickly does content go live?",
                  a: "Your first videos are live within 7 days of onboarding. We move fast on avatar creation and run test videos for your approval before full production starts.",
                },
              ],
              [
                {
                  q: "Is it really my voice and face?",
                  a: "Yes. Your avatar is built from your actual footage and voice, not a generic model. The ideas in every script are also yours — sourced from your strategy call and brain dump each month. The production is ours. The person is you.",
                },
                {
                  q: "What if I don't like the output?",
                  a: "You approve every script before production begins. Nothing gets generated until you've signed off on the words. One round of script revisions is included in every engagement — which means you control the voice before we ever render the video.",
                },
              ],
              [
                {
                  q: "Will my audience know it's AI?",
                  a: "Some might look — none will be able to tell. Avatar quality in 2026 is not what it was 18 months ago. More importantly: your audience is consuming content for the value of the ideas, not to forensically inspect your face. Quality content, consistently delivered, is what builds trust.",
                },
                {
                  q: "Is there a minimum contract length?",
                  a: "We ask for a 3-month minimum. Personal brand content compounds — 30 days is not enough to draw meaningful conclusions. Our clients who stay for 90 days consistently see results. Those who leave after 30 usually wish they hadn't.",
                },
              ],
            ].map((row, ri) => (
              <Reveal key={ri} delay={ri * 60}>
                <div
                  className={`grid md:grid-cols-2 md:divide-x md:divide-[#1e1e1e] ${ri > 0 ? "border-t border-[#1e1e1e]" : ""}`}
                >
                  {row.map((item, ci) => (
                    <div key={ci} className="p-8 md:p-10">
                      <p className="text-sm font-semibold text-foreground">{item.q}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={
          <>
            Your audience is watching. <span className="block text-accent-orange">Someone.</span>
          </>
        }
        text="While you're deciding, your competitor is posting. Book a 20-minute call. We'll show you exactly what your first 30 days looks like."
      />
    </>
  );
}
