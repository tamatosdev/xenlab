import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="XENLabs.ai — Home"
      className={`group inline-flex items-baseline font-display text-lg tracking-tight md:text-xl ${className}`}
    >
      <span className="font-bold text-foreground">XEN</span>
      <span className="font-medium text-foreground/70">Labs</span>
      <span className="font-semibold text-primary/80 transition-opacity group-hover:opacity-100">
        .ai
      </span>
    </Link>
  );
}
