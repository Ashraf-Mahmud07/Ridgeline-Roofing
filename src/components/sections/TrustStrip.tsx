import { certifications } from "@/lib/services";

export type CertMark = { name: string; sub: string };

/**
 * Certification / membership strip. Renders monochrome text lockups in a
 * seamless marquee. Swap for official vector logos (into public/) once
 * brand-use permission is confirmed.
 */
export function TrustStrip({
  label = "Trusted & certified by",
  marks = certifications,
}: {
  label?: string;
  marks?: CertMark[];
}) {
  const loop = [...marks, ...marks];
  return (
    <section
      aria-label="Certifications"
      className="shell border-b border-line bg-white py-7"
    >
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
        <span className="flex-none text-[11px] font-semibold uppercase tracking-label text-faint">
          {label}
        </span>
        <div className="group relative w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {loop.map((m, i) => (
              <div key={m.name + i} className="flex flex-none flex-col leading-tight">
                <span className="text-[17px] font-extrabold uppercase tracking-[0.06em] text-ink/75">
                  {m.name}
                </span>
                <span className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-faint">
                  {m.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
