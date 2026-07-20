"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 36 },
  right: { x: -36 },
  scale: {},
  blur: {},
  none: {},
};

/**
 * Scroll-triggered reveal. Purposeful, once-only, and respectful of
 * prefers-reduced-motion (framer-motion disables transforms automatically
 * when the OS setting is on via MotionConfig, but we also keep offsets small).
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
  once?: boolean;
  amount?: number;
}) {
  const off = offsets[direction];
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        ...off,
        scale: direction === "scale" ? 0.94 : 1,
        filter: direction === "blur" ? "blur(12px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — children with `RevealItem` animate in sequence. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const off = offsets[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...off },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Count-up number that animates once when scrolled into view.
 * Preserves any prefix/suffix (e.g. "22+", "4,800+", "★ 4.9") by extracting
 * the leading number and re-attaching the surrounding characters.
 */
export function Counter({
  value,
  className = "",
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const match = value.match(/([^\d]*)([\d,]+(?:\.\d+)?)(.*)/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = Number(numStr.replace(/,/g, ""));
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const grouped = numStr.includes(",");

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView && !Number.isNaN(target)) mv.set(target);
  }, [inView, target, mv]);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      if (!grouped) return fixed;
      const [int, dec] = fixed.split(".");
      const withCommas = Number(int).toLocaleString("en-US");
      return dec ? `${withCommas}.${dec}` : withCommas;
    };
    const unsub = spring.on("change", (latest) => {
      node.textContent = `${prefix}${format(latest)}${suffix}`;
    });
    return () => unsub();
  }, [spring, prefix, suffix, decimals, grouped]);

  if (Number.isNaN(target)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export { motion };
