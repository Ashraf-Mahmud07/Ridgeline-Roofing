import { siteConfig } from "@/lib/site-config";

/** Dark strip above the nav — license note, region, hours, emergency phone. */
export function UtilityBar() {
  return (
    <div className="bg-ink px-6 py-[9px] text-[13px] text-taupe md:px-10 lg:px-14">
      <div className="flex items-center justify-between gap-4">
        <div className="hidden gap-7 md:flex">
          <span>Licensed &amp; insured</span>
          <span>Serving {siteConfig.region} and surrounding areas</span>
        </div>
        <div className="flex w-full items-center justify-between gap-7 md:w-auto md:justify-end">
          <span className="hidden sm:inline">{siteConfig.hours}</span>
          <a href={siteConfig.phoneHref} className="font-semibold text-cream">
            {siteConfig.emergencyNote}: {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
