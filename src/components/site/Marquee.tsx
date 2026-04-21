const logos = [
  "FORBES", "TECHCRUNCH", "BLOOMBERG", "Y COMBINATOR", "WIRED",
  "FAST COMPANY", "INC.", "PRODUCT HUNT",
];

export function Marquee() {
  const items = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="container-x">
        <p className="mb-6 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by operators featured in
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {items.map((l, i) => (
            <span
              key={i}
              className="font-display text-lg font-semibold tracking-[0.2em] text-muted-foreground/70"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
