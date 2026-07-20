import Image from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { images, type ImageKey } from "@/lib/images";

/**
 * Inner-page hero: breadcrumb, condensed h1, lede, optional CTA row and
 * checkmark strip on the left; full-bleed photo on the right.
 */
export function PageHero({
  crumbs,
  title,
  body,
  image,
  imagePriority = true,
  checks,
  children,
  minHeight = 420,
  maxBodyWidth = "50ch",
}: {
  crumbs: Crumb[];
  title: string;
  body: string;
  image: ImageKey;
  imagePriority?: boolean;
  checks?: string[];
  children?: React.ReactNode;
  minHeight?: number;
  maxBodyWidth?: string;
}) {
  const img = images[image];
  return (
    <section aria-label="Page introduction" className="shell border-b border-line bg-white">
      <div className="grid items-stretch gap-8 py-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col gap-5">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="m-0 text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-ink">
            {title}
          </h1>
          <p
            className="m-0 text-[17px] leading-[1.65] text-muted"
            style={{ maxWidth: maxBodyWidth }}
          >
            {body}
          </p>
          {children}
          {checks && (
            <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-muted">
              {checks.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5">
                  <span className="text-terracotta">✓</span> {c}
                </span>
              ))}
            </div>
          )}
        </div>
        <div
          className="relative overflow-hidden rounded-2xl shadow-card"
          style={{ minHeight }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={imagePriority}
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
