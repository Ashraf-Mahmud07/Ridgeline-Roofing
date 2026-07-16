import Image from "next/image";
import { images, type ImageKey } from "@/lib/images";

/** Side-by-side before/after pair with corner tags. */
export function BeforeAfter({
  before,
  after,
  height = 300,
}: {
  before: ImageKey;
  after: ImageKey;
  height?: number;
}) {
  const b = images[before];
  const a = images[after];
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-2">
      <div className="relative" style={{ height }}>
        <Image src={b.src} alt={`Before: ${b.alt}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <span className="absolute left-4 top-4 bg-ink px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.1em] text-cream">
          Before
        </span>
      </div>
      <div className="relative" style={{ height }}>
        <Image src={a.src} alt={`After: ${a.alt}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <span className="absolute left-4 top-4 bg-terracotta px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.1em] text-cream">
          After
        </span>
      </div>
    </div>
  );
}
