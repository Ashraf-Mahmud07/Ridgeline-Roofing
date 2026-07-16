"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Denver-metro ZIP prefixes we serve (800xx–806xx covers the metro counties). */
const SERVED_PREFIXES = ["800", "801", "802", "803", "804", "805", "806"];

/** ZIP coverage checker with instant client-side feedback. */
export function ZipCheck() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"covered" | "call" | "invalid" | null>(null);

  const check = () => {
    const clean = zip.trim();
    if (!/^\d{5}$/.test(clean)) {
      setResult("invalid");
      return;
    }
    setResult(SERVED_PREFIXES.some((p) => clean.startsWith(p)) ? "covered" : "call");
  };

  return (
    <div className="mt-2">
      <form
        className="flex flex-wrap items-center gap-3"
        aria-label="Check coverage by ZIP code"
        onSubmit={(e) => {
          e.preventDefault();
          check();
        }}
      >
        <input
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
            setResult(null);
          }}
          placeholder="Enter your ZIP code"
          inputMode="numeric"
          maxLength={5}
          aria-label="ZIP code"
          className="w-[220px] border-[1.5px] border-line-strong bg-white px-[18px] py-3.5 text-[15px] text-ink outline-none focus:border-ink"
        />
        <button
          type="submit"
          className="bg-ink px-[26px] py-[15px] text-[15px] font-semibold text-cream transition-colors hover:bg-terracotta"
        >
          Check coverage
        </button>
      </form>
      <div aria-live="polite" className="mt-3 min-h-[22px] text-[14.5px]">
        {result === "covered" && (
          <span className="font-semibold text-success">
            ✓ You&apos;re in our service area —{" "}
            <Link href="/book-an-inspection" className="text-terracotta underline underline-offset-2 hover:text-terracotta-deep">
              book your free inspection
            </Link>
            .
          </span>
        )}
        {result === "call" && (
          <span className="text-muted">
            You may be at the edge of our area — call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-ink">
              {siteConfig.phone}
            </a>{" "}
            and we&apos;ll confirm.
          </span>
        )}
        {result === "invalid" && (
          <span className="text-terracotta">Please enter a 5-digit ZIP code.</span>
        )}
      </div>
    </div>
  );
}
