"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { navItems } from "@/components/layout/nav-links";

/**
 * Desktop nav. Items with children get an animated mega-dropdown panel.
 * `onDark` renders light link text for the transparent-over-hero state.
 */
export function NavLinks({ onDark = false }: { onDark?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  const idle = onDark ? "text-white/80 hover:text-white" : "text-muted hover:text-ink";
  const activeCls = onDark ? "text-white" : "text-ink";

  return (
    <div className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href)) ||
          (item.children?.some((c) => pathname.startsWith(c.href)) ?? false);
        const linkCls = `relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          active ? `font-semibold ${activeCls}` : idle
        }`;

        if (!item.children) {
          return (
            <Link key={item.label} href={item.href} className={linkCls}>
              {item.label}
              {active && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-terracotta" />
              )}
            </Link>
          );
        }

        const isOpen = open === item.label;
        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpen(item.label)}
            onMouseLeave={() => setOpen(null)}
            onFocus={() => setOpen(item.label)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
            }}
          >
            <Link href={item.href} className={linkCls} aria-expanded={isOpen} aria-haspopup="true">
              {item.label}
              <ChevronDown
                aria-hidden
                className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </Link>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(null)}
                        className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-panel"
                      >
                        <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-[14.5px] font-semibold text-ink">
                            {child.label}
                          </span>
                          {child.desc && (
                            <span className="mt-0.5 block text-[12.5px] leading-snug text-faint">
                              {child.desc}
                            </span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
