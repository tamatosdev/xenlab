import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — XENLabs.ai" },
      { name: "description", content: "Privacy Policy for XENLabs.ai." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us, including your name, email address, company information, and any content you upload for avatar training (images, videos, voice recordings). We also collect usage data such as pages visited, features used, and time spent on the platform through standard analytics tools.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information solely to deliver and improve our services — including training your AI avatar, generating content, and providing customer support. We do not use your personal data for advertising purposes or sell it to third parties under any circumstances.",
  },
  {
    title: "3. Your Avatar & Voice Data",
    body: "Any biometric or likeness data you submit — including photos, videos, and voice recordings — is used exclusively to build your personal AI avatar and voice model. This data is stored securely, is never shared with other clients, and is permanently deleted upon account termination if requested.",
  },
  {
    title: "4. Data Sharing",
    body: "XENLabs.ai does not sell, rent, or trade your personal information. We may share data with trusted third-party service providers (e.g., cloud infrastructure, payment processors) strictly for the purpose of delivering our services. These providers are bound by confidentiality agreements.",
  },
  {
    title: "5. Data Security",
    body: "We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits. While we strive to protect your data, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Data Retention",
    body: "We retain your account data for as long as your subscription is active. Upon cancellation, we retain data for 90 days to allow for account reinstatement. You may request immediate deletion of your data at any time by contacting us — including all avatar training data and generated content.",
  },
  {
    title: "7. Your Rights",
    body: "Depending on your location, you may have the right to access, correct, delete, or export your personal data. You may also have the right to object to or restrict certain types of processing. To exercise any of these rights, contact us at privacy@xenlabs.ai and we will respond within 30 days.",
  },
  {
    title: "8. Cookies",
    body: "We use essential cookies to operate the platform and optional analytics cookies to understand how users interact with our services. You can disable non-essential cookies in your browser settings at any time without affecting your ability to use the core platform.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our platform at least 14 days before the change takes effect. Your continued use of the service after that date constitutes your acceptance of the updated policy.",
  },
];

function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: January 1, 2025</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            At XENLabs.ai, your privacy is fundamental to how we operate. This policy explains what
            data we collect, why we collect it, and how we protect it.
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
            Questions about your privacy?{" "}
            <a
              href="mailto:privacy@xenlabs.ai"
              className="text-foreground underline underline-offset-4 hover:text-accent-orange transition-colors"
            >
              Contact us at privacy@xenlabs.ai
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
