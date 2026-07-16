import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NavLinks } from "@/components/layout/NavLinks";
import { MobileNav } from "@/components/layout/MobileNav";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { siteConfig } from "@/lib/site-config";

/** Full site header: utility bar + sticky nav with phone and booking CTA. */
export function Header() {
  return (
    <header>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <UtilityBar />
      <div className="sticky top-0 z-50 border-b border-line bg-cream">
        <div className="relative flex items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <Logo />
          <nav aria-label="Primary" className="contents">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="hidden text-sm font-semibold sm:inline"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/book-an-inspection"
              className="hidden bg-terracotta px-[22px] py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-deep sm:inline-block"
            >
              Book an Inspection
            </Link>
            <MobileNav phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} />
          </div>
        </div>
      </div>
    </header>
  );
}

/** Slim header for the booking flow — logo + "Prefer to talk?" phone. */
export function SlimHeader({ note = "Prefer to talk?" }: { note?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-line bg-cream px-6 py-4 md:px-10 lg:px-14">
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
      className={`flex items-center justify-between border-b border-line bg-cream px-6 py-4 md:px-10 lg:px-14 ${
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
          className="bg-terracotta px-[22px] py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-deep"
        >
          Book an Inspection
        </Link>
      </div>
    </header>
  );
}
