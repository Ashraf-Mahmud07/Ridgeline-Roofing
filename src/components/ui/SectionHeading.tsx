import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Section header pattern: optional accent eyebrow + large display heading,
 * with an optional "All … →" link that animates its arrow on hover.
 */
export function SectionHeading({
  eyebrow,
  title,
  link,
  className = "",
  titleClassName = "text-3xl md:text-[42px]",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  link?: { label: string; href: string };
  className?: string;
  titleClassName?: string;
  onDark?: boolean;
}) {
  const heading = (
    <div>
      {eyebrow ? (
        <Eyebrow onDark={onDark} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`font-extrabold leading-[1.05] tracking-[-0.03em] ${
          onDark ? "text-white" : "text-ink"
        } ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
  if (!link) return <div className={className}>{heading}</div>;
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      {heading}
      <Link
        href={link.href}
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-deep"
      >
        {link.label}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
