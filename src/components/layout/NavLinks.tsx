"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/layout/nav-links";

/**
 * Desktop nav. Items with children get a real hover/focus dropdown panel —
 * the caret is only shown where a menu actually exists.
 */
export function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="hidden gap-8 text-sm font-medium text-muted lg:flex">
      {navItems.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href)) ||
          (item.children?.some((c) => pathname.startsWith(c.href)) ?? false);
        const linkCls = `flex items-center gap-[5px] py-2 transition-colors ${
          active ? "font-semibold text-ink" : "text-muted hover:text-ink"
        }`;

        if (!item.children) {
          return (
            <Link key={item.label} href={item.href} className={linkCls}>
              {item.label}
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
              <span aria-hidden className={`text-[9px] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </Link>
            {isOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 border border-line bg-cream shadow-[0_12px_32px_rgba(43,41,38,0.10)]">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpen(null)}
                    className="block border-b border-line px-5 py-3.5 last:border-b-0 hover:bg-hover-cream"
                  >
                    <span className="block text-[14.5px] font-semibold text-ink">
                      {child.label}
                    </span>
                    {child.desc && (
                      <span className="mt-0.5 block text-[12.5px] text-muted">{child.desc}</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
