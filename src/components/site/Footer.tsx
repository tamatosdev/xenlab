import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left — Logo and Tagline */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Your voice. Everywhere.</p>
          </div>

          {/* Center — Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/60 transition-colors duration-200 hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-foreground/60 transition-colors duration-200 hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="text-foreground/60 transition-colors duration-200 hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-foreground/60 transition-colors duration-200 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Right — Social and Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Social
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors duration-200 hover:text-primary">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors duration-200 hover:text-primary">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors duration-200 hover:text-primary">TikTok</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors duration-200 hover:text-primary">YouTube</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:hello@xenlabs.ai" className="text-foreground/60 transition-colors duration-200 hover:text-primary">hello@xenlabs.ai</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom — Copyright and Legal */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 XENLabs.ai — All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-foreground/60 transition-colors duration-200 hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="text-foreground/60 transition-colors duration-200 hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}