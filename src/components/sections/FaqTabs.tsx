"use client";

import { useState } from "react";
import { FilterChips } from "@/components/ui/FilterChips";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqCategories } from "@/lib/faqs";

/** FAQ page: category chip tabs feeding the shared accordion. */
export function FaqTabs() {
  const cats = Object.keys(faqCategories);
  const [tab, setTab] = useState(cats[0]);
  return (
    <>
      <div className="mt-[26px] px-6 pb-7 md:px-10 lg:px-14">
        <FilterChips options={cats} value={tab} onChange={setTab} />
      </div>
      <div className="grid gap-10 border-t border-line px-6 pb-14 pt-9 md:px-10 lg:grid-cols-[1fr_320px] lg:gap-16 lg:px-14">
        <FaqAccordion key={tab} faqs={faqCategories[tab]} />
        <FaqSidebar />
      </div>
    </>
  );
}

import Link from "next/link";

function FaqSidebar() {
  return (
    <div>
      <div className="flex flex-col gap-5 lg:sticky lg:top-[88px]">
        <div className="flex flex-col gap-3 bg-ink px-7 py-[26px] text-cream">
          <div className="text-[19px] font-[650] tracking-[-0.01em]">
            Still unsure? Ask your roof.
          </div>
          <p className="m-0 text-[13.5px] leading-[1.6] text-taupe">
            A free inspection answers most of these questions for your specific roof — in
            writing, with photos.
          </p>
          <Link
            href="/book-an-inspection"
            className="mt-1 bg-terracotta px-[22px] py-[13px] text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-deep"
          >
            Book a Free Inspection
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 border border-line px-6 py-[22px]">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
            Deep dives
          </div>
          <Link
            href="/blog/what-a-new-roof-costs"
            className="text-sm font-semibold text-ink hover:text-terracotta"
          >
            What a new roof actually costs →
          </Link>
          <Link
            href="/blog/repair-or-replace"
            className="text-sm font-semibold text-ink hover:text-terracotta"
          >
            Repair or replace? 5 signs →
          </Link>
          <Link
            href="/blog/hail-first-4-things"
            className="text-sm font-semibold text-ink hover:text-terracotta"
          >
            Hail damage: first 4 steps →
          </Link>
        </div>
      </div>
    </div>
  );
}
