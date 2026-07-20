import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Brand mark — layered roof-peak glyph with an orange ridge + wordmark. */
export function Logo({
  variant = "dark",
  size = 34,
  href = "/",
}: {
  /** dark = navy mark (header on light), light = white mark (footer/dark) */
  variant?: "dark" | "light";
  size?: number;
  href?: string;
}) {
  const text = variant === "dark" ? "text-ink" : "text-white";
  const base = variant === "dark" ? "#0f2747" : "#ffffff";
  return (
    <Link href={href} className={`group flex items-center gap-2.5 ${text}`} aria-label={siteConfig.name}>
      <span
        aria-hidden
        className="relative inline-flex flex-none items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{
          width: size,
          height: size,
          background: variant === "dark" ? "rgba(15,39,71,0.06)" : "rgba(255,255,255,0.08)",
        }}
      >
        <svg width={size * 0.66} height={size * 0.66} viewBox="0 0 24 24" fill="none">
          {/* upper roof peak — accent */}
          <path d="M12 3 22 11 19.2 11 12 5.4 4.8 11 2 11 Z" fill="#f97316" />
          {/* lower roof line */}
          <path d="M12 9 20 15.2 20 21 4 21 4 15.2 Z" fill={base} opacity={variant === "dark" ? 0.9 : 0.95} />
        </svg>
      </span>
      <span
        className={`font-display font-extrabold uppercase leading-none tracking-wordmark ${text}`}
        style={{ fontSize: size > 30 ? 17 : 15 }}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
