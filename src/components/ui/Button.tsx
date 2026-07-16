import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "dark" // ink fill → terracotta on hover (hero primary)
  | "accent" // terracotta fill → deep terracotta on hover (nav CTA)
  | "outline" // hairline outline on cream
  | "outline-dark" // outline on dark bands
  | "outline-invert"; // white outline that fills white on hover (emergency strips)

type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  dark: "bg-ink text-cream hover:bg-terracotta",
  accent: "bg-terracotta text-cream hover:bg-terracotta-deep",
  outline:
    "border-[1.5px] border-line-strong text-ink hover:border-ink",
  "outline-dark":
    "border-[1.5px] border-line-dark-3 text-cream hover:border-cream",
  "outline-invert":
    "border-[1.5px] border-cream text-cream hover:bg-cream hover:text-terracotta",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-[22px] py-3 text-sm",
  md: "px-7 py-[15px] text-[15px]",
  lg: "px-8 py-[18px] text-base",
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
  const cls = `inline-flex items-center justify-center font-semibold transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
