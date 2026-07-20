"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { mobileNavGroups } from "@/components/layout/nav-links";
import { Logo } from "@/components/ui/Logo";

/**
 * Hamburger + full-screen animated drawer for viewports below lg.
 *
 * The overlay + drawer are rendered through a portal into document.body.
 * That's deliberate: the header applies `backdrop-filter` once scrolled, and a
 * `backdrop-filter` (like `transform`/`filter`/`perspective`) establishes a
 * containing block for `position: fixed` descendants — which would pin the
 * drawer to the header box instead of the viewport. Portalling to <body>
 * guarantees the fixed overlay always resolves against the viewport, at any
 * scroll position and regardless of header state.
 */
export function MobileNav({
  phone,
  phoneHref,
  onDark = false,
}: {
  phone: string;
  phoneHref: string;
  onDark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portals need the DOM — only render them after mount (also avoids SSR mismatch).
  useEffect(() => setMounted(true), []);

  // Lock background scroll while the drawer is open, then restore prior values.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const html = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
    };
  }, [open]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={`relative z-50 flex h-11 w-11 flex-none items-center justify-center rounded-full border transition-colors ${
          onDark
            ? "border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
            : "border-line bg-white text-ink shadow-sm hover:bg-panel"
        }`}
      >
        <Menu className="h-6 w-6" strokeWidth={2.25} />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Fullscreen dimmed overlay — true viewport cover */}
                <motion.div
                  key="mobilenav-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[60] h-[100dvh] w-screen bg-ink-deep/60 backdrop-blur-sm lg:hidden"
                  onClick={() => setOpen(false)}
                />
                {/* Slide-in drawer panel */}
                <motion.div
                  key="mobilenav-panel"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed inset-y-0 right-0 z-[70] flex h-[100dvh] w-[min(88vw,400px)] flex-col overflow-y-auto overscroll-contain bg-white shadow-navy lg:hidden"
                >
                  <div className="flex items-center justify-between border-b border-line px-6 py-5">
                    <Logo size={30} />
                    <button
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-panel"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <nav aria-label="Mobile" className="flex-1 px-6 py-4">
                    {mobileNavGroups.map((group) => (
                      <div key={group.title} className="py-3">
                        <div className="pb-1 text-xs font-semibold uppercase tracking-label text-faint">
                          {group.title}
                        </div>
                        {group.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between border-b border-line py-3.5 text-[15.5px] font-medium text-ink"
                          >
                            {link.label}
                            <ArrowRight className="h-4 w-4 text-line-strong transition-all group-hover:translate-x-1 group-hover:text-terracotta" />
                          </Link>
                        ))}
                      </div>
                    ))}
                  </nav>

                  <div className="mt-auto flex flex-col gap-3 border-t border-line bg-panel-soft px-6 py-6">
                    <a
                      href={phoneHref}
                      className="inline-flex items-center gap-2 text-base font-bold text-ink"
                    >
                      <Phone className="h-4 w-4 text-terracotta" />
                      {phone}
                    </a>
                    <Link
                      href="/book-an-inspection"
                      onClick={() => setOpen(false)}
                      className="rounded-full bg-terracotta px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(249,115,22,0.7)] transition-colors hover:bg-terracotta-deep"
                    >
                      Book a Free Inspection
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
