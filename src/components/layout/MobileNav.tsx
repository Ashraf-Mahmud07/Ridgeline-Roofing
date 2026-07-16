"use client";

import { useState } from "react";
import Link from "next/link";
import { mobileNavGroups } from "@/components/layout/nav-links";

/** Hamburger + slide-down panel for viewports below lg — every page reachable. */
export function MobileNav({
  phone,
  phoneHref,
}: {
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`block h-[2px] w-6 bg-ink ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-70px)] overflow-y-auto border-b border-line bg-cream px-6 pb-8 pt-2 shadow-sm">
          <nav aria-label="Mobile" className="grid gap-x-8 sm:grid-cols-2">
            {mobileNavGroups.map((group) => (
              <div key={group.title}>
                <div className="pb-1 pt-4 text-xs font-semibold uppercase tracking-label text-faint">
                  {group.title}
                </div>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3 text-[15px] font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a href={phoneHref} className="text-base font-semibold text-ink">
              {phone}
            </a>
            <Link
              href="/book-an-inspection"
              onClick={() => setOpen(false)}
              className="bg-terracotta px-[22px] py-3 text-center text-sm font-semibold text-cream hover:bg-terracotta-deep"
            >
              Book an Inspection
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
