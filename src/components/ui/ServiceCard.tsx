import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { images, type ImageKey } from "@/lib/images";

/** Homepage service card — photo, title (+optional badge), copy, Learn more. */
export function ServiceCard({
  title,
  desc,
  badge,
  image,
  href,
}: {
  title: string;
  desc: string;
  badge?: string;
  image: ImageKey;
  href: string;
}) {
  const img = images[image];
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 bg-cream p-7 pb-9 transition-colors hover:bg-hover-cream"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <div className="text-[21px] font-[650] tracking-[-0.01em]">{title}</div>
        {badge ? <Badge>{badge}</Badge> : null}
      </div>
      <p className="m-0 text-[14.5px] leading-[1.55] text-muted">{desc}</p>
      <span className="text-[13.5px] font-semibold text-terracotta">Learn more →</span>
    </Link>
  );
}

/** Text-only service tile (residential grid, city pages). */
export function ServiceTile({
  title,
  desc,
  badge,
  href,
  linkLabel = "Learn more →",
}: {
  title: string;
  desc: string;
  badge?: string;
  href: string;
  linkLabel?: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 bg-cream px-[26px] py-6 text-ink transition-colors hover:bg-hover-cream"
    >
      <div className="flex items-center gap-2.5">
        <div className="text-lg font-[650]">{title}</div>
        {badge ? <Badge>{badge}</Badge> : null}
      </div>
      <p className="m-0 text-sm leading-[1.55] text-muted">{desc}</p>
      <span className="mt-0.5 text-[13.5px] font-semibold text-terracotta">{linkLabel}</span>
    </Link>
  );
}
