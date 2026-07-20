import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "dark" // navy fill (primary)
  | "accent" // orange fill (conversion CTA)
  | "outline" // hairline outline on light
  | "outline-dark" // outline on dark bands
  | "outline-invert"; // white outline that fills on hover (emergency strips)

type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] " +
  "transition-all duration-300 ease-out will-change-transform " +
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<Variant, string> = {
  dark: "bg-ink text-white shadow-[0_10px_30px_-12px_rgba(15,39,71,0.6)] hover:bg-navy-700 hover:shadow-[0_18px_40px_-14px_rgba(15,39,71,0.7)]",
  accent:
    "bg-terracotta text-white shadow-[0_10px_30px_-12px_rgba(249,115,22,0.7)] hover:bg-terracotta-deep hover:shadow-glow",
  outline:
    "border-[1.5px] border-line-strong bg-white/60 text-ink backdrop-blur hover:border-ink hover:bg-white",
  "outline-dark":
    "border-[1.5px] border-line-dark-3 text-white hover:border-white hover:bg-white/5",
  "outline-invert":
    "border-[1.5px] border-white text-white hover:bg-white hover:text-terracotta",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export function Button({
  href,
  variant = "dark",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;
  if (href) {
    const external =
      href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
