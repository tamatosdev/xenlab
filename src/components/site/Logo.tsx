import { Link } from "@tanstack/react-router";
import xenLabLogo from "@/assets/XENLAB-Logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="XENLabs.ai — Home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={xenLabLogo}
        alt="XENLabs.ai"
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
}
