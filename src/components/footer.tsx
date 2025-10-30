import Link from "next/link";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="space-y-3">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            ViQi by Vitrina
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            Purpose-built intelligence for the global video entertainment supply chain. Discover,
            connect, and monitor with confidence.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-border/60 bg-muted/30 py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Vitrina. All rights reserved.</span>
          <span>Designed & crafted with intelligence by the ViQi team.</span>
        </div>
      </div>
    </footer>
  );
}
