import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  label?: string;
  full?: boolean;
};

export function CTAButton({
  size = "md",
  variant = "primary",
  label = "Book a Free Strategy Call",
  full = false,
}: Props) {
  const sizes = {
    sm: "h-9 px-4 text-[13px]",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-7 text-base",
  } as const;

  const base =
    "cta-scale inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight";

  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-glow glow-primary hover-lift"
      : "border border-border-strong bg-surface text-foreground hover:bg-surface-elevated hover-lift";

  return (
    <Link
      to="/contact"
      className={`${base} ${sizes[size]} ${styles} ${full ? "w-full" : ""}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}