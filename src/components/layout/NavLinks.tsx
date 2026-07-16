"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/layout/nav-links";

/** Desktop nav links — the current section renders ink + semibold like the design. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden gap-8 text-sm font-medium text-muted lg:flex">
      {navItems.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-[5px] transition-colors ${
              active ? "font-semibold text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {item.label}
            {item.caret && (
              <span aria-hidden className="text-[9px]">
                ▾
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
