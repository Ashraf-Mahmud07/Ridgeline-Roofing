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
    <section
      aria-label="Page introduction"
      className="grid border-b border-line lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="flex flex-col gap-[22px] px-6 pb-12 pt-11 md:px-10 lg:px-14">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="display-condensed m-0 text-4xl font-[650] leading-[1.02] tracking-[-0.025em] md:text-[52px]">
          {title}
        </h1>
        <p
          className="m-0 text-[17px] leading-[1.6] text-muted"
          style={{ maxWidth: maxBodyWidth }}
        >
          {body}
        </p>
        {children}
        {checks && (
          <div className="mt-0.5 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-muted">
            {checks.map((c) => (
              <span key={c}>✓ {c}</span>
            ))}
          </div>
        )}
      </div>
      <div className="relative" style={{ minHeight }}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority={imagePriority}
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
