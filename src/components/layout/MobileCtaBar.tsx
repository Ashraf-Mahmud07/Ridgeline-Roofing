import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Fixed bottom action bar on phones — the highest-converting pattern for
 * local-service sites. Hidden on lg+ where the header CTA is always visible.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line-dark bg-ink-deep lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-[15px] font-semibold text-cream"
      >
        <svg
          aria-hidden
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/book-an-inspection"
        className="flex items-center justify-center bg-terracotta py-4 text-[15px] font-semibold text-cream"
      >
        Book Free Inspection
      </Link>
    </div>
  );
}
