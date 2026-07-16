import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/lib/images";

/** Project thumbnail card — photo with optional category tag, title + meta row. */
export function ProjectCard({
  title,
  meta,
  image,
  href,
  category,
  height = 210,
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
    <Link href={href} className="flex flex-col gap-3 text-ink">
      <div className="relative overflow-hidden" style={{ height }}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        {category ? (
          <span className="absolute left-3.5 top-3.5 border border-line bg-cream px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-ink">
            {category}
          </span>
        ) : null}
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <div className="text-[16.5px] font-[650]">{title}</div>
        <div className="flex-none text-[12.5px] text-faint">{meta}</div>
      </div>
    </Link>
  );
}
