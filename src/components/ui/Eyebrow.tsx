/** Uppercase kicker with a short accent rule — used above section headings. */
export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-eyebrow ${
        onDark ? "text-terracotta-soft" : "text-terracotta"
      } ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
      {children}
    </div>
  );
}
