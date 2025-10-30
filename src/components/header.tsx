"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const hashSectionIds = navLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.slice(2));

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(() =>
    typeof window === "undefined" ? "#overview" : window.location.hash || "#overview",
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionElements = hashSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -45% 0px",
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all",
        scrolled
          ? "border-border/60 bg-background/90 backdrop-blur-xl"
          : "bg-background/40",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative flex items-center gap-2 text-base font-semibold tracking-tight sm:text-lg"
        >
          <span className="relative z-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            ViQi by Vitrina
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map(({ href, label }) => {
            const isHashLink = href.includes("#");
            const isActive = isHashLink
              ? pathname === "/" && activeHash === href.replace("/#", "#")
              : pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={cn(
                  "relative transition hover:text-foreground",
                  isActive && "text-foreground",
                )}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:border-accent/60 hover:text-accent-foreground hover:shadow-md md:inline-flex"
          >
            Request Demo
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground transition hover:border-accent/60 hover:text-accent-foreground md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur md:hidden"
          >
            <div className="flex flex-col space-y-2 text-sm font-medium text-muted-foreground">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-lg px-3 py-2 transition hover:bg-muted hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-accent-foreground transition hover:bg-accent/20"
                onClick={() => setIsOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
