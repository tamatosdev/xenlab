export function SocialProofBar() {
  return (
    <section
      aria-label="Social proof"
      className="border-y border-border bg-surface/60"
    >
      <div className="container-x py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[13px] text-muted-foreground md:text-sm">
          <span>
            Trusted by founders, coaches and executives across{" "}
            <span className="font-semibold text-accent-orange">15+ industries</span>
          </span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-border-strong md:inline-block" />
          <span>
            <span className="font-semibold text-accent-orange">500+</span> pieces of content published
          </span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-border-strong md:inline-block" />
          <span>
            <span className="font-semibold text-accent-orange">10x</span> average content output increase
          </span>
        </div>
      </div>
    </section>
  );
}
