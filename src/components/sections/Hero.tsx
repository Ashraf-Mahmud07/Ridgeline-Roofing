"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ShieldCheck, ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/motion";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const hero = images.homeLuxuryDusk;

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="relative min-h-[92svh] overflow-hidden bg-ink-deep"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/95 via-ink-deep/70 to-ink-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink-deep/40" />
      <div aria-hidden className="dot-grid absolute inset-0 opacity-30" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="shell relative z-10 flex min-h-[92svh] flex-col justify-center pb-28 pt-36"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[46rem]">
          {/* Rating chip */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-terracotta-soft" fill="currentColor" />
              ))}
            </span>
            <span className="text-[13px] font-medium text-white">
              {siteConfig.stats.avgRating} rating · {siteConfig.stats.reviewCount} reviews
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[clamp(2.25rem,6vw,5rem)] font-extrabold leading-[1.0] tracking-[-0.035em] text-white [text-wrap:balance] sm:leading-[0.98]"
          >
            The roof over everything{" "}
            <span className="text-gradient-accent">you love.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[48ch] text-lg leading-[1.6] text-white/75"
          >
            Precision-installed roofing systems, transparent pricing, and a workmanship warranty we
            actually stand behind — for homeowners and property managers across {siteConfig.region}.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/book-an-inspection" variant="accent" size="lg">
              Book a Free Inspection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline-invert" size="lg">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-terracotta-soft" />
              Licensed &amp; Insured
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>{siteConfig.license}</span>
            <span aria-hidden className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>Family-owned since {siteConfig.founded}</span>
          </motion.div>
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur-xl lg:absolute lg:bottom-16 lg:right-14 lg:mt-0 lg:max-w-xs lg:grid-cols-1 lg:gap-5"
        >
          {[
            { value: siteConfig.stats.yearsInBusiness, label: "Years in business" },
            { value: siteConfig.stats.roofsCompleted, label: "Roofs completed" },
            { value: siteConfig.stats.citiesServed, label: "Cities served" },
          ].map((s, i) => (
            <div key={s.label} className={i > 0 ? "lg:border-t lg:border-white/10 lg:pt-5" : ""}>
              <div className="font-display text-2xl font-extrabold tracking-[-0.02em] text-white lg:text-3xl">
                <Counter value={s.value} />
              </div>
              <div className="mt-1 text-[12px] text-white/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.div>
    </section>
  );
}
