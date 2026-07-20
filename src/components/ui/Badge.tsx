/** Small pill tag — orange accent by default (24/7, Free, URGENT, After). */
export function Badge({
  children,
  variant = "accent",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "dark" | "light" | "success";
  className?: string;
}) {
  const styles = {
    accent: "bg-terracotta/12 text-terracotta ring-1 ring-inset ring-terracotta/25",
    dark: "bg-ink text-white",
    light: "bg-white text-ink ring-1 ring-inset ring-line",
    success: "bg-success/12 text-success ring-1 ring-inset ring-success/25",
  }[variant];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
