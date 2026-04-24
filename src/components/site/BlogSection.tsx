import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const featured = blogPosts.slice(0, 3);

export function BlogSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#222] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#FF6B2B]/30 to-transparent" />

      <div className="container-x relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#111] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2B]" />
                From the blog
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                Insights that move{" "}
                <span className="text-accent-orange">the needle.</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all posts
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
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
  );
}
