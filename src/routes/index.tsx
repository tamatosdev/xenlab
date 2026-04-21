import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SocialProofBar } from "@/components/site/SocialProofBar";
import { ProblemSection } from "@/components/site/ProblemSection";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XENLabs.ai — AI Avatar Cloning & Content at Scale" },
      {
        name: "description",
        content:
          "Premium AI creative agency cloning founders, coaches and executives into avatars that ship content at scale. Book a free strategy call.",
      },
      { property: "og:title", content: "XENLabs.ai — Clone yourself. Scale your story." },
      {
        property: "og:description",
        content:
          "AI Avatar Cloning + Content at Scale for founders, coaches and C‑suite operators.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <ServicesGrid />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}