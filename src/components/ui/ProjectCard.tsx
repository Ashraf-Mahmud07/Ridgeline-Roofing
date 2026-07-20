import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images, type ImageKey } from "@/lib/images";

/** Project card — photo with hover overlay + zoom, category tag, title + meta. */
export function ProjectCard({
  title,
  meta,
  image,
  href,
  category,
  height = 260,
}: {
  title: string;
  meta: string;
  image: ImageKey;
  href: string;
  category?: string;
  height?: number;
}) {
  const img = images[image];
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl bg-ink shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative w-full" style={{ height }}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        {category ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-ink backdrop-blur">
            {category}
          </span>
        ) : null}
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <div className="text-[16.5px] font-bold leading-tight text-white">{title}</div>
          <div className="mt-0.5 text-[12.5px] text-white/70">{meta}</div>
        </div>
      </div>
    </Link>
  );
}
