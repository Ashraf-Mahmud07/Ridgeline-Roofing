import { certifications } from "@/lib/services";

export type CertMark = { name: string; sub: string };

/**
 * Certification / membership strip. Renders monochrome text lockups for each
 * mark — consistent with the design's editorial palette. Swap for official
 * vector logos (into public/) once brand-use permission is confirmed.
 */
export function TrustStrip({
  label = "Certified by",
  marks = certifications,
}: {
  label?: string;
  marks?: CertMark[];
}) {
  return (
    <section
      aria-label="Certifications"
      className="border-b border-line px-6 py-[22px] md:px-10 lg:px-14"
    >
      <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-12">
        <span className="flex-none text-xs font-semibold uppercase tracking-label text-faint">
          {label}
        </span>
        <div className="grid w-full flex-1 grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-10">
          {marks.map((m) => (
            <div key={m.name + m.sub} className="flex flex-col leading-tight">
              <span className="text-[17px] font-extrabold uppercase tracking-[0.06em] text-ink/80">
                {m.name}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                {m.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
