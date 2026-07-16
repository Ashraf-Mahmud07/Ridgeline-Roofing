import { siteConfig } from "@/lib/site-config";

/** Terracotta emergency strip with pulsing dot and outlined call button. */
export function EmergencyBanner({ message }: { message: string }) {
  return (
    <section
      aria-label="Emergency service"
      className="flex flex-col items-start justify-between gap-5 bg-terracotta px-6 py-[26px] text-cream sm:flex-row sm:items-center md:px-10 lg:px-14"
    >
      <div className="flex items-center gap-[18px]">
        <span aria-hidden className="h-2.5 w-2.5 flex-none rounded-full bg-cream" />
        <span className="text-[17px] font-semibold">{message}</span>
      </div>
      <a
        href={siteConfig.phoneHref}
        className="flex-none border-[1.5px] border-cream px-[26px] py-3 text-[15px] font-semibold transition-colors hover:bg-cream hover:text-terracotta"
      >
        Call {siteConfig.phone}
      </a>
    </section>
  );
}
