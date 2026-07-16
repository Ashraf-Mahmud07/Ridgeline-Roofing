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
      className={`text-[13px] font-semibold uppercase tracking-eyebrow ${
        onDark ? "text-terracotta-soft" : "text-terracotta"
      } ${className}`}
    >
      {children}
    </div>
  );
}
