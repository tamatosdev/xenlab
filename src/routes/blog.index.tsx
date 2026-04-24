import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — XENLabs.ai" },
      {
        name: "description",
        content:
          "Insights on AI avatar cloning, content strategy, and building a founder-led brand at scale.",
      },
      { property: "og:title", content: "Blog — XENLabs.ai" },
      {
        property: "og:description",
        content:
          "Insights on AI avatar cloning, content strategy, and building a founder-led brand at scale.",
      },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "AI Strategy", "Content Engine", "Industry Insight", "Case Study"];

function CategoryPill({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
        active
          ? "border-[#FF6B2B]/50 bg-[#FF6B2B]/10 text-[#FF6B2B]"
          : "border-border bg-surface text-muted-foreground hover:border-[#FF6B2B]/30 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function BlogPage() {
  const [featured, ...rest] = blogPosts;

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
                The XENLabs Blog
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Insights that move{" "}
                <span className="text-accent-orange">the needle.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Strategy, frameworks, and case studies for founders who want to build authority at
                scale — without trading more time for it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((c, i) => (
                <CategoryPill key={c} label={c} active={i === 0} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="border-t border-border">
        <div className="container-x py-12 md:py-16">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="hover-lift group relative block cursor-pointer overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-[#FF6B2B]/40"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden lg:h-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 hidden bg-linear-to-r from-transparent to-[#0a0a0a]/40 lg:block" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 to-transparent lg:hidden" />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#FF6B2B]">
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted-foreground/60">Featured</span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent-orange md:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <span className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-accent-orange">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Post grid */}
      <section className="border-t border-border">
        <div className="container-x py-12 md:py-20">
          <Reveal>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              All articles
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-[#FF6B2B]/40"
                >
                  <div className="relative h-48 overflow-hidden bg-[#111]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[#FF6B2B]">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent-orange">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground/70">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
