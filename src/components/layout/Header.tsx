"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NavLinks } from "@/components/layout/NavLinks";
import { MobileNav } from "@/components/layout/MobileNav";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { siteConfig } from "@/lib/site-config";

/**
 * Site header. On pages with a full-bleed hero, pass `transparent` — the bar
 * overlays the hero with light text, then transitions to a solid frosted bar
 * on scroll. On inner pages it renders as a sticky solid bar with the utility
 * strip above it (unchanged flow, so page layouts are unaffected).
 */
export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const overlay = transparent && !scrolled;

  const barCls = transparent
    ? `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/90 py-3 shadow-[0_8px_30px_-16px_rgba(15,39,71,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/85"
          : "border-b border-transparent bg-transparent py-5"
      }`
    : // Inner pages: opaque solid bar (no backdrop-filter — avoids the WebKit
      // sticky + backdrop-filter repaint/flicker bug on mobile).
      "sticky top-0 z-50 border-b border-line bg-white py-4 shadow-[0_4px_20px_-14px_rgba(15,39,71,0.3)]";

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* UtilityBar is a page-level sibling (not wrapped by the sticky bar) so
          it scrolls away while the header below stays pinned. */}
      {!transparent && <UtilityBar />}
      {/* The <header> itself is the sticky/fixed element — its containing block
          is the page body (tall), so it stays pinned for the whole scroll. */}
      <header className={barCls}>
        <div className="relative flex shell items-center justify-between">
          <Logo variant={overlay ? "light" : "dark"} />
          <nav aria-label="Primary" className="contents">
            <NavLinks onDark={overlay} />
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className={`hidden items-center gap-2 text-sm font-semibold transition-colors md:inline-flex ${
                overlay ? "text-white/90 hover:text-white" : "text-ink hover:text-terracotta"
              }`}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/book-an-inspection"
              className="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(249,115,22,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-deep hover:shadow-glow sm:inline-block"
            >
              Book Inspection
            </Link>
            <MobileNav
              phone={siteConfig.phone}
              phoneHref={siteConfig.phoneHref}
              onDark={overlay}
            />
          </div>
        </div>
      </header>
    </>
  );
}

/** Slim header for the booking flow — logo + "Prefer to talk?" phone. */
export function SlimHeader({ note = "Prefer to talk?" }: { note?: string }) {
  return (
    <header className="shell flex items-center justify-between border-b border-line bg-white py-4">
      <Logo />
      <div className="flex items-center gap-2 text-sm text-muted">
        <span className="hidden sm:inline">{note}</span>
        <a href={siteConfig.phoneHref} className="font-bold text-ink">
          {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}

/** Slim header with booking CTA — used on 404 and search. */
export function SlimHeaderCta({ sticky = false }: { sticky?: boolean }) {
  return (
    <header
      className={`shell flex items-center justify-between border-b border-line bg-white py-4 ${
        sticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <Logo />
      <div className="flex items-center gap-5">
        <a href={siteConfig.phoneHref} className="hidden text-sm font-semibold sm:inline">
          {siteConfig.phone}
        </a>
        <Link
          href="/book-an-inspection"
          className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-deep"
        >
          Book an Inspection
        </Link>
      </div>
    </header>
  );
}
