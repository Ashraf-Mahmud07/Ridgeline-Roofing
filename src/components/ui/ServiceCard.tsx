import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { images, type ImageKey } from "@/lib/images";

/** Homepage service card — photo, title (+optional badge), copy, hover lift + image zoom. */
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        {badge ? (
          <div className="absolute left-4 top-4">
            <Badge variant="light">{badge}</Badge>
          </div>
        ) : null}
        <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/95 text-ink opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="text-[21px] font-bold tracking-[-0.02em] text-ink">{title}</h3>
        <p className="m-0 flex-1 text-[14.5px] leading-[1.6] text-muted">{desc}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-terracotta">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
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
      className="group flex flex-col gap-2 rounded-2xl border border-line bg-white px-7 py-6 text-ink shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
    >
      <div className="flex items-center gap-2.5">
        <div className="text-lg font-bold tracking-[-0.01em]">{title}</div>
        {badge ? <Badge>{badge}</Badge> : null}
      </div>
      <p className="m-0 text-sm leading-[1.6] text-muted">{desc}</p>
      <span className="mt-1 text-[13.5px] font-semibold text-terracotta">{linkLabel}</span>
    </Link>
  );
}
