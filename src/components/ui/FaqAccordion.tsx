"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

/** Accordion list with a single open item — matches the design's +/− toggles. */
export function FaqAccordion({
  faqs,
  defaultOpen = 0,
  compact = false,
}: {
  faqs: Faq[];
  defaultOpen?: number;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-line">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-5 px-1 text-left ${
                compact ? "py-[17px]" : "py-[18px]"
              }`}
            >
              <span className={`font-semibold ${compact ? "text-[16.5px]" : "text-[17px]"}`}>
                {faq.q}
              </span>
              <span aria-hidden className="flex-none text-xl font-light text-terracotta">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className={`m-0 px-1 pr-10 leading-[1.65] text-muted ${compact ? "pb-5 text-[14.5px]" : "pb-6 text-[15px]"}`}>
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
