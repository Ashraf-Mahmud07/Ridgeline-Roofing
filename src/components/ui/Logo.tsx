import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Brand mark — the design's triangle glyph + uppercase wordmark. */
export function Logo({
  variant = "dark",
  size = 30,
  href = "/",
}: {
  /** dark = ink triangle on cream (header), light = cream triangle on dark (footer) */
  variant?: "dark" | "light";
  size?: number;
  href?: string;
}) {
  const mark = variant === "dark" ? "bg-ink" : "bg-cream";
  const text = variant === "dark" ? "text-ink" : "text-cream";
  return (
    <Link href={href} className={`flex items-center gap-3 ${text}`}>
      <span
        aria-hidden
        className={`block ${mark}`}
        style={{
          width: size,
          height: size,
          clipPath: "polygon(50% 0,100% 100%,0 100%)",
        }}
      />
      <span
        className={`font-bold uppercase tracking-wordmark ${text}`}
        style={{ fontSize: size > 27 ? 17 : 15 }}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
