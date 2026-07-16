/** Big-number stat with a small caption, used in heroes, dark bands, and headers. */
export function Stat({
  value,
  label,
  size = "md",
  onDark = false,
}: {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
}) {
  const valueSize =
    size === "lg" ? "text-3xl" : size === "md" ? "text-[28px]" : "text-[26px]";
  return (
    <div>
      <div className={`font-bold tracking-[-0.02em] ${valueSize}`}>{value}</div>
      <div className={`text-[12.5px] ${onDark ? "text-taupe" : "text-muted"}`}>
        {label}
      </div>
    </div>
  );
}
