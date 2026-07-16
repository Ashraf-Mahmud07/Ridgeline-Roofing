import Link from "next/link";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ crumbs, className = "" }: { crumbs: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-[13px] text-faint">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.name + i} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className="text-faint hover:text-ink">
                  {c.name}
                </Link>
              ) : (
                <span className={last ? "font-semibold text-ink" : undefined}>{c.name}</span>
              )}
              {!last && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
