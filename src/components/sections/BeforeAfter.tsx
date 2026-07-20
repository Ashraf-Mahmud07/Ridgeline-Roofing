"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { images, type ImageKey } from "@/lib/images";

/** Interactive before/after comparison slider — drag or keyboard-controlled. */
export function BeforeAfter({
  before,
  after,
  height = 460,
}: {
  before: ImageKey;
  after: ImageKey;
  height?: number;
}) {
  const b = images[before];
  const a = images[after];
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className="group relative w-full touch-none select-none overflow-hidden rounded-2xl shadow-card"
      style={{ height }}
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <Image src={a.src} alt={`After: ${a.alt}`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
      <span className="absolute right-4 top-4 rounded-full bg-terracotta px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
        After
      </span>

      {/* Before (clipped with inset — image stays full-size and aligned) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={b.src}
          alt={`Before: ${b.alt}`}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
          Before
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
          }}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lift transition-transform group-hover:scale-105"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
