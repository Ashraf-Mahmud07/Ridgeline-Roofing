import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Fixed bottom action bar on phones — the highest-converting pattern for
 * local-service sites. Hidden on lg+ where the header CTA is always visible.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line-dark bg-ink-deep/95 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full bg-white/10 py-3 text-[15px] font-semibold text-white backdrop-blur"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="/book-an-inspection"
        className="flex items-center justify-center gap-2 rounded-full bg-terracotta py-3 text-[15px] font-semibold text-white"
      >
        <CalendarCheck className="h-4 w-4" />
        Free Inspection
      </Link>
    </div>
  );
}
