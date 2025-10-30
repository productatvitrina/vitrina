"use client";

import { featureHighlights } from "@/lib/data";
import { cn } from "@/lib/utils";
import { BoltIcon, EyeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const iconMap = {
  "globe-alt": GlobeAltIcon,
  bolt: BoltIcon,
  eye: EyeIcon,
} as const;

const cardVariants = {
  initial: { opacity: 0, y: 25 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export function FeatureHighlights() {
  return (
    <section id="features" className="border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 text-left">
          <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            feature signals
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI copilots tuned for entertainment dealmakers
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            ViQi orchestrates data, relationships, and automation so teams can move from gut-driven
            decisions to provable intelligence — across development, distribution, and partnerships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? GlobeAltIcon;

            return (
              <motion.article
                key={feature.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                custom={index}
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm transition hover:border-accent/50 hover:shadow-lg",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-600/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 px-3 py-2 transition group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-foreground"
                      >
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
