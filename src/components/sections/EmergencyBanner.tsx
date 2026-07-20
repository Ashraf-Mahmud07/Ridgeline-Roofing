import { Phone, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Orange emergency strip with pulsing indicator and outlined call button. */
export function EmergencyBanner({ message }: { message: string }) {
  return (
    <section aria-label="Emergency service" className="shell bg-cream">
      <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-gradient-to-r from-terracotta to-terracotta-deep px-6 py-6 text-white shadow-glow sm:flex-row sm:items-center md:px-8">
        <div className="flex items-center gap-4">
          <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/15">
            <span aria-hidden className="animate-soft-ping absolute inset-0 rounded-full" />
            <AlertTriangle className="h-5 w-5" />
          </span>
          <span className="text-[16.5px] font-semibold leading-snug">{message}</span>
        </div>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex flex-none items-center gap-2 rounded-full border-[1.5px] border-white px-6 py-3 text-[15px] font-semibold transition-colors hover:bg-white hover:text-terracotta"
        >
          <Phone className="h-4 w-4" />
          Call {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
