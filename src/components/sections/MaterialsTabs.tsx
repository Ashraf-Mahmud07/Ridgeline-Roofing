"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { replacementMaterials } from "@/lib/services";

/** "Choose your system" — tab strip + photo/spec panel from the replacement page. */
export function MaterialsTabs() {
  const [idx, setIdx] = useState(0);
  const material = replacementMaterials[idx];
  const img = images[material.image];
  return (
    <div>
      <div
        role="tablist"
        aria-label="Roofing materials"
        className="flex w-full flex-wrap border border-line md:w-fit"
      >
        {replacementMaterials.map((m, i) => (
          <button
            key={m.name}
            role="tab"
            aria-selected={idx === i}
            onClick={() => setIdx(i)}
            className={`border-r border-line px-4 py-3 text-[14.5px] font-semibold transition-colors md:px-[26px] md:py-[13px] ${
              idx === i ? "bg-ink text-cream" : "bg-cream text-muted hover:text-ink"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
      <div className="grid border border-line border-t-0 lg:grid-cols-2">
        <div className="relative min-h-[240px] lg:min-h-[320px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 px-6 py-8 lg:px-10 lg:py-9">
          <h3 className="m-0 text-[26px] font-[650] tracking-[-0.01em]">{material.name}</h3>
          <p className="m-0 text-[15px] leading-[1.6] text-muted">{material.desc}</p>
          <div className="mt-1.5 flex flex-wrap gap-7">
            <div>
              <div className="text-[22px] font-bold">{material.life}</div>
              <div className="text-[12.5px] text-faint">Expected lifespan</div>
            </div>
            <div>
              <div className="text-[22px] font-bold">{material.cost}</div>
              <div className="text-[12.5px] text-faint">Relative cost</div>
            </div>
            <div>
              <div className="text-[22px] font-bold">{material.wind}</div>
              <div className="text-[12.5px] text-faint">Wind rating</div>
            </div>
          </div>
          <p className="mb-0 mt-1.5 text-[13.5px] leading-[1.55] text-faint">{material.bestFor}</p>
          <span className="mt-auto text-[13.5px] font-semibold text-terracotta">
            Full material guide →
          </span>
        </div>
      </div>
    </div>
  );
}
