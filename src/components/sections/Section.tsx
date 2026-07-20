import { Check } from "lucide-react";

/** Page section with generous gutters and an optional hairline bottom rule. */
export function Section({
  label,
  className = "",
  children,
  bordered = true,
  padded = true,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
  padded?: boolean;
}) {
  return (
    <section
      aria-label={label}
      className={`${bordered ? "border-b border-line" : ""} ${
        padded ? "shell" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

/** Centered max-width wrapper matching the global `.shell` container. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className}`}>{children}</div>;
}

/** Benefit tile with a check-in-disc icon — rounded card with hover lift. */
export function BenefitTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
        <Check className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <div className="mt-1 text-[17px] font-bold tracking-[-0.01em] text-ink">{title}</div>
      <p className="m-0 text-sm leading-[1.6] text-muted">{desc}</p>
    </div>
  );
}

/** Responsive card grid. Cards carry their own borders/shadows now. */
export function HairlineGrid({
  cols,
  children,
  className = "",
}: {
  cols: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];
  return <div className={`grid gap-5 ${colClass} ${className}`}>{children}</div>;
}
