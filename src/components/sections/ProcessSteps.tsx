"use client";

import { motion } from "framer-motion";

export type ProcessStep = { num: string; title: string; desc: string };

/**
 * Premium horizontal timeline. Numbered nodes sit on a connecting rail that
 * draws in on scroll; each step fades up in sequence. Stacks to a clean
 * vertical rail on mobile.
 */
export function ProcessSteps({
  steps,
}: {
  steps: ProcessStep[];
  /** kept for API compatibility */
  numeralSize?: "large" | "medium";
}) {
  const cols =
    steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className="relative">
      {/* connecting rail (desktop) */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block"
      />
      <motion.div
        aria-hidden
        className="absolute left-0 top-7 hidden h-px origin-left bg-gradient-to-r from-terracotta to-terracotta-soft md:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ right: 0 }}
      />
      <div className={`grid gap-x-8 gap-y-10 ${cols}`}>
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="relative flex flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white text-lg font-extrabold text-ink shadow-card ring-4 ring-cream">
              {step.num}
            </div>
            <h3 className="mt-1 text-[19px] font-bold tracking-[-0.01em] text-ink">{step.title}</h3>
            <p className="m-0 text-[14.5px] leading-[1.6] text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
