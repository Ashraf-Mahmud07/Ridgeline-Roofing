import { Counter } from "@/components/ui/motion";

/** Big-number stat with a small caption, used in heroes, dark bands, and headers. */
export function Stat({
  value,
  label,
  size = "md",
  onDark = false,
  animate = false,
}: {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  animate?: boolean;
}) {
  const valueSize =
    size === "lg" ? "text-4xl md:text-[40px]" : size === "md" ? "text-3xl" : "text-[26px]";
  return (
    <div>
      <div
        className={`font-display font-extrabold leading-none tracking-[-0.03em] ${valueSize} ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {animate ? <Counter value={value} /> : value}
      </div>
      <div className={`mt-1.5 text-[12.5px] font-medium ${onDark ? "text-taupe" : "text-faint"}`}>
        {label}
      </div>
    </div>
  );
}
