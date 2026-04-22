import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — XENLabs.ai" },
      { name: "description", content: "Terms of Service for XENLabs.ai." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using XENLabs.ai services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time, and your continued use of the service constitutes acceptance of the revised terms.",
  },
  {
    title: "2. Description of Services",
    body: "XENLabs.ai provides AI-powered personal branding, avatar cloning, and content production services. Our services are designed to help founders, coaches, and executives amplify their presence online through AI-generated content that reflects their unique voice and brand.",
  },
  {
    title: "3. User Responsibilities",
    body: "You are responsible for all content you submit to our platform, including images, videos, and written materials used for avatar training and content creation. You represent that you own or have the necessary rights to all submitted materials. You agree not to use our services for any unlawful, harmful, or deceptive purposes.",
  },
  {
    title: "4. Intellectual Property",
    body: "All AI-generated content produced for your account remains your exclusive property. XENLabs.ai will never resell, share, or repurpose your avatar, voice model, or brand assets. XENLabs.ai retains ownership of the underlying technology, tools, and platform used to deliver the services.",
  },
  {
    title: "5. Payments & Refunds",
    body: "Subscription fees are billed in advance on a monthly or annual basis. All payments are non-refundable unless otherwise stated in your service agreement. XENLabs.ai reserves the right to modify pricing with 30 days' notice to existing subscribers.",
  },
  {
    title: "6. Limitation of Liability",
    body: "XENLabs.ai shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability to you for any claims arising under these terms shall not exceed the amount paid by you in the three months preceding the claim.",
  },
  {
    title: "7. Termination",
    body: "Either party may terminate the service agreement with 30 days written notice. XENLabs.ai reserves the right to suspend or terminate accounts that violate these terms immediately and without notice. Upon termination, you retain ownership of all content produced during your subscription period.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be resolved through binding arbitration, except where prohibited by law.",
  },
];

function TermsPage() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />

      <div className="container-x relative mx-auto max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Legal
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: January 1, 2025</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Please read these Terms of Service carefully before using XENLabs.ai. These terms govern
            your access to and use of our platform and services.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 40}>
              <div className="rounded-2xl border border-border bg-surface-elevated p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-sm text-muted-foreground">
            Questions about these terms?{" "}
            <a
              href="mailto:legal@xenlabs.ai"
              className="text-foreground underline underline-offset-4 hover:text-accent-orange transition-colors"
            >
              Contact us at legal@xenlabs.ai
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
