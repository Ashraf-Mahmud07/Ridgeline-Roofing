/** Page section with the design's 56px gutters and hairline bottom rule. */
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
        padded ? "px-6 md:px-10 lg:px-14" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

/** Triangle-icon benefit tile used across residential/commercial/replacement/careers. */
export function BenefitTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2 bg-cream px-[26px] py-6">
      <span
        aria-hidden
        className="block h-7 w-7 bg-terracotta opacity-90"
        style={{ clipPath: "polygon(50% 0,100% 100%,0 100%)" }}
      />
      <div className="mt-1.5 text-[17px] font-[650]">{title}</div>
      <p className="m-0 text-sm leading-[1.55] text-muted">{desc}</p>
    </div>
  );
}

/** Hairline card grid — 1px line-colored gaps inside a hairline border. */
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
  return (
    <div className={`grid gap-px border border-line bg-line ${colClass} ${className}`}>
      {children}
    </div>
  );
}
