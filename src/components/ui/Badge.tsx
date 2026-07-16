/** Small uppercase tag — terracotta fill by default (24/7, Free, URGENT, After). */
export function Badge({
  children,
  variant = "accent",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "dark" | "light";
  className?: string;
}) {
  const styles = {
    accent: "bg-terracotta text-cream",
    dark: "bg-ink text-cream",
    light: "bg-cream text-ink border border-line",
  }[variant];
  return (
    <span
      className={`inline-block px-2 py-[3px] text-[10.5px] font-bold uppercase tracking-[0.08em] ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
