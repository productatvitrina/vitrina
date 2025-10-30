"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { journeyStages } from "@/lib/data";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

export function JourneySection() {
  return (
    <section id="journey" className="border-y border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 text-left">
          <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            intelligence lifecycle
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ViQi UX Journey: From Discovery to Intelligence
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A seamless seven-stage experience that transforms raw industry data into actionable
            intelligence — aligning teams around the opportunities that matter most.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 hidden w-[3px] rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 md:block" />
          <div className="space-y-8 md:space-y-10">
            {journeyStages.map((stage, index) => (
              <Fragment key={stage.id}>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  custom={index}
                  className="relative pl-0 md:pl-14"
                >
                  <div className="group relative flex flex-col gap-5 rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm transition hover:border-accent/50 hover:shadow-lg md:flex-row md:items-center md:gap-10 md:p-8">
                    <div className="absolute left-4 top-8 hidden h-3 w-3 rounded-full border-4 border-background bg-gradient-to-r md:block" />
                    <div className="absolute left-[14px] top-8 hidden md:block">
                      <span
                        className={`block h-3 w-3 rounded-full bg-gradient-to-r ${stage.color}`}
                      />
                    </div>
                    <div className="flex shrink-0 items-center gap-4 md:w-56">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.color} text-sm font-semibold text-white shadow-lg`}
                      >
                        {stage.id.toString().padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
                        <p className="text-sm uppercase tracking-wide text-muted-foreground/80">
                          Stage {stage.id}
                        </p>
                      </div>
                    </div>
                    <ul className="grid flex-1 gap-3 text-sm text-muted-foreground md:grid-cols-3">
                      {stage.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 rounded-2xl border border-border/50 bg-muted/30 p-3 transition group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-foreground"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
