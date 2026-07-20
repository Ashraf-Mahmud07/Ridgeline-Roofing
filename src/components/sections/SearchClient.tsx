"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

/** Static search index carried over from the design's mock search. */
const INDEX = [
  {
    type: "Service",
    title: "Roof Repair",
    excerpt: "Leaks, missing shingles, flashing failures — diagnosed on-site and fixed right the first time.",
    href: "/services/roof-replacement",
    keys: "leak repair shingle flashing fix water",
  },
  {
    type: "Service",
    title: "Roof Replacement",
    excerpt: "Full tear-off and re-roof with architectural shingle, metal, or tile systems.",
    href: "/services/roof-replacement",
    keys: "replace replacement new roof cost tear-off shingle metal tile",
  },
  {
    type: "Service",
    title: "Storm Damage & Insurance",
    excerpt: "Hail and wind damage assessments, plus hands-on help with your insurance claim.",
    href: "/storm-damage",
    keys: "storm hail wind insurance claim damage emergency leak tarp",
  },
  {
    type: "Article",
    title: "Repair or replace? The 5 signs that settle it",
    excerpt: "When a $500 repair buys you five more years — and when it's throwing money at a dying roof.",
    href: "/blog/repair-or-replace",
    keys: "repair replace signs leak cost decide",
  },
  {
    type: "Article",
    title: "What a new roof actually costs in 2026",
    excerpt: "Size, pitch, material, and the four line items contractors hide.",
    href: "/blog/what-a-new-roof-costs",
    keys: "cost price new roof estimate quote money financing",
  },
  {
    type: "FAQ",
    title: "Hail just hit — what should I do first?",
    excerpt: "Photograph damage from the ground, note the date, book an inspection before filing.",
    href: "/faq",
    keys: "hail storm insurance claim first steps damage",
  },
  {
    type: "FAQ",
    title: "What warranty comes with a new roof?",
    excerpt: "Manufacturer material warranties up to 50 years plus our workmanship warranty.",
    href: "/faq",
    keys: "warranty coverage transfer material workmanship",
  },
  {
    type: "Page",
    title: "Book a Free Inspection",
    excerpt: "2-minute booking — confirmed time window and a written photo report after the visit.",
    href: "/book-an-inspection",
    keys: "book inspection free estimate schedule appointment",
  },
];

export function SearchClient() {
  const [query, setQuery] = useState("roof leak");
  const q = query.trim().toLowerCase();
  const words = q.split(/\s+/).filter(Boolean);
  const results =
    q === ""
      ? INDEX
      : INDEX.filter((r) => {
          const hay = `${r.title} ${r.excerpt} ${r.keys}`.toLowerCase();
          return words.some((w) => hay.includes(w));
        });
  const resultCount =
    q === ""
      ? "Showing everything"
      : `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”`;

  return (
    <>
      {/* ===== Search header ===== */}
      <section aria-label="Search" className="shell border-b border-line pb-7 pt-11">
        <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Search" }]} className="mb-[18px]" />
        <form
          role="search"
          className="flex max-w-[620px] gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, articles, questions…"
            aria-label="Search the site"
            className="flex-1 border-[1.5px] border-line-strong bg-white px-[18px] py-[15px] text-base text-ink outline-none focus:border-ink"
          />
          <button
            type="submit"
            className="bg-ink px-7 py-4 text-[15px] font-semibold text-cream transition-colors hover:bg-terracotta"
          >
            Search
          </button>
        </form>
        <div className="mt-4 text-sm text-faint" aria-live="polite">
          {resultCount}
        </div>
      </section>

      {/* ===== Results ===== */}
      <section
        aria-label="Search results"
        className="shell grid gap-10 border-b border-line pb-14 pt-7 lg:grid-cols-[1fr_320px] lg:gap-16"
      >
        <div className="max-w-[680px]">
          {results.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="flex flex-col gap-1.5 border-b border-line py-[22px] text-ink"
            >
              <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-terracotta">
                {r.type}
              </div>
              <div className="text-[19px] font-[650] tracking-[-0.01em]">{r.title}</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-muted">{r.excerpt}</p>
            </Link>
          ))}
          {results.length === 0 && (
            <div className="flex flex-col gap-3.5 py-10">
              <div className="text-[22px] font-[650]">No results for &ldquo;{query}&rdquo;</div>
              <p className="m-0 max-w-[48ch] text-[15px] leading-[1.6] text-muted">
                Try a simpler term like &ldquo;leak&rdquo;, &ldquo;cost&rdquo;, or
                &ldquo;warranty&rdquo; — or just call us. A person who knows roofs answers.
              </p>
              <div className="mt-1.5 flex gap-6 text-sm font-semibold">
                <Link href="/faq" className="text-terracotta hover:text-terracotta-deep">
                  Browse the FAQ
                </Link>
                <Link href="/blog" className="text-terracotta hover:text-terracotta-deep">
                  Learning Center
                </Link>
                <Link href="/contact" className="text-terracotta hover:text-terracotta-deep">
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="flex flex-col gap-3 bg-ink px-7 py-[26px] text-cream lg:sticky lg:top-[88px]">
            <div className="text-[19px] font-[650] tracking-[-0.01em]">Faster than searching:</div>
            <p className="m-0 text-[13.5px] leading-[1.6] text-taupe">
              Book a free inspection and get answers about your actual roof — in writing, with
              photos.
            </p>
            <Link
              href="/book-an-inspection"
              className="mt-1 bg-terracotta px-[22px] py-[13px] text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-deep"
            >
              Book a Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
