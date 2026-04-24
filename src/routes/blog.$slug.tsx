import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { getPostBySlug, blogPosts, type BlogPost } from "@/data/blogPosts";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return { meta: [{ title: "Post Not Found — XENLabs.ai" }] };
    return {
      meta: [
        { title: `${post.title} — XENLabs.ai` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.image },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="font-display text-4xl font-semibold text-foreground">Post not found</h1>
      <p className="text-muted-foreground">This article doesn't exist or has been moved.</p>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent-orange/50 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>
    </div>
  ),
});

function ContentRenderer({ post }: { post: BlogPost }) {
  return (
    <div className="space-y-6">
      {post.content.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-base leading-[1.85] text-foreground/80 md:text-lg">
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="pt-4 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="relative my-8 overflow-hidden rounded-2xl border border-[#FF6B2B]/20 bg-[#FF6B2B]/5 p-6 md:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#FF6B2B]" />
              <p className="font-display text-lg font-medium leading-snug text-foreground md:text-xl">
                "{block.text}"
              </p>
              {block.author && (
                <cite className="mt-3 block text-sm not-italic text-muted-foreground">
                  — {block.author}
                </cite>
              )}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-3 pl-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-base text-foreground/80 md:text-lg">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B2B]" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = blogPosts[currentIndex - 1];
  const nextPost = blogPosts[currentIndex + 1];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden md:h-[60vh]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-transparent" />
        </div>

        {/* Title overlay */}
        <div className="container-x relative -mt-32 pb-12 md:-mt-40">
          <Reveal>
            <Link
              to="/blog"
              className="group mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              All articles
            </Link>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#FF6B2B]">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground/60">
                {post.date} · {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Article body */}
      <section className="container-x py-14 md:py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <ContentRenderer post={post} />
          </Reveal>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prevPost || nextPost) && (
        <section className="border-t border-border">
          <div className="container-x py-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {prevPost ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: prevPost.slug }}
                  className="group flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-[#FF6B2B]/40"
                >
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                    Previous
                  </span>
                  <span className="font-display text-sm font-medium leading-snug text-foreground group-hover:text-accent-orange transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: nextPost.slug }}
                  className="group flex flex-col items-end gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-[#FF6B2B]/40"
                >
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    Next
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                  <span className="text-right font-display text-sm font-medium leading-snug text-foreground group-hover:text-accent-orange transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
