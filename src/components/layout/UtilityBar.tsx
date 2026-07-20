import { ShieldCheck, MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Slim navy strip above the nav — license note, region, hours, emergency phone. */
export function UtilityBar() {
  return (
    <div className="shell bg-ink-deep py-2.5 text-[13px] text-taupe">
      <div className="flex items-center justify-between gap-4">
        <div className="hidden items-center gap-7 md:flex">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-terracotta-soft" />
            Licensed &amp; insured
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-terracotta-soft" />
            Serving {siteConfig.region} and surrounding areas
          </span>
        </div>
        <div className="flex w-full items-center justify-between gap-7 md:w-auto md:justify-end">
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <Clock className="h-3.5 w-3.5 text-terracotta-soft" />
            {siteConfig.hours}
          </span>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-terracotta-soft"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.emergencyNote}: {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
