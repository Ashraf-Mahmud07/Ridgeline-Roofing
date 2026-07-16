import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Section header pattern: optional terracotta eyebrow + large heading,
 * with an optional underlined "All … →" link aligned to the baseline.
 */
export function SectionHeading({
  eyebrow,
  title,
  link,
  className = "",
  titleClassName = "text-4xl",
}: {
  eyebrow?: string;
  title: string;
  link?: { label: string; href: string };
  className?: string;
  titleClassName?: string;
}) {
  const heading = (
    <div>
      {eyebrow ? <Eyebrow className="mb-3.5">{eyebrow}</Eyebrow> : null}
      <h2 className={`font-[650] tracking-[-0.02em] ${titleClassName}`}>{title}</h2>
    </div>
  );
  if (!link) return <div className={className}>{heading}</div>;
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      {heading}
      <Link
        href={link.href}
        className="border-b-[1.5px] border-terracotta pb-0.5 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
      >
        {link.label}
      </Link>
    </div>
  );
}
