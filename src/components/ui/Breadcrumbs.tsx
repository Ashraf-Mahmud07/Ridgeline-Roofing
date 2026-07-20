import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ crumbs, className = "" }: { crumbs: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-faint">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.name + i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="text-faint transition-colors hover:text-terracotta">
                  {c.name}
                </Link>
              ) : (
                <span className={last ? "font-semibold text-ink" : undefined}>{c.name}</span>
              )}
              {!last && <ChevronRight aria-hidden className="h-3.5 w-3.5 text-line-strong" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
