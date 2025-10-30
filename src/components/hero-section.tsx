"use client";

import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

const gradientEase: Easing = [0.45, 0, 0.55, 1];

const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      repeat: Infinity,
      duration: 18,
      ease: gradientEase,
    },
  },
};

const dotVariants = {
  animate: {
    opacity: [0.2, 0.5, 0.2],
    transition: {
      repeat: Infinity,
      duration: 12,
      ease: gradientEase,
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background/95 to-background"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          variants={gradientVariants}
          animate="animate"
          className="absolute inset-0 bg-[length:300%_300%] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-indigo-500/40 blur-3xl"
        />
        <motion.div
          variants={dotVariants}
          animate="animate"
          className="absolute inset-0 bg-grid-dots [background-size:24px_24px]"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr,0.9fr] md:py-20 lg:gap-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-7">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-border/80 bg-background/80 px-4 py-1 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
            <SparklesIcon className="h-4 w-4 text-indigo-500" />
            AI-native workflow for entertainment leaders
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Experience the Intelligent Entertainment Partner:{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              ViQi
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Your AI-powered assistant for projects, partners, and insights across the global
            entertainment supply-chain. Navigate the entire lifecycle from discovery to ongoing
            intelligence with one adaptive copilot.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#journey"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-floating transition hover:scale-[1.02] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore the Journey
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-accent/60 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Demo
            </Link>
          </div>
          <dl className="grid gap-6 pt-4 sm:grid-cols-3">
            {[
              { value: "40K+", label: "Industry profiles enriched" },
              { value: "7", label: "Stages of intelligence" },
              { value: "24/7", label: "Monitoring coverage" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-2xl font-semibold text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" as const }}
            className="absolute inset-0 -translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-fuchsia-500/20 blur-2xl lg:blur-3xl"
          />
          <div className="relative flex h-full items-center justify-center rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg backdrop-blur">
            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 4 }}
              className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_60%)]" />
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
                    ViQi Signal Lens
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    Live
                  </span>
                </div>
                <div className="space-y-4 text-white">
                  <div>
                    <h3 className="text-lg font-semibold">Global Co-Production Watchlist</h3>
                    <p className="text-sm text-indigo-100/90">
                      AI-curated matches between studios, streamers, and production partners based
                      on slate compatibility and market momentum.
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm">
                    {[
                      "Analyze 120+ data signals in seconds",
                      "Qualify partners with AI similarity scoring",
                      "Surface hidden connections and outreach cues",
                    ].map((line) => (
                      <div
                        key={line}
                        className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-300 to-violet-300" />
                        <p className="text-indigo-100">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
