"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilterChips } from "@/components/ui/FilterChips";
import { posts, postCategories } from "@/lib/posts";
import { images } from "@/lib/images";

/** Filterable Learning Center article grid. */
export function BlogGrid() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  return (
    <>
      <div className="shell mt-[26px] pb-7">
        <FilterChips options={postCategories} value={filter} onChange={setFilter} />
      </div>
      <div className="shell border-t border-line pb-13 pt-9">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const img = images[p.image];
            return (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="flex flex-col gap-3 text-ink">
                <div className="relative h-[190px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="text-xs text-faint">
                  <span className="font-semibold text-terracotta">{p.category}</span> · {p.read}
                </div>
                <div className="text-[18.5px] font-[650] leading-[1.25] tracking-[-0.01em]">
                  {p.title}
                </div>
                <p className="m-0 text-sm leading-[1.55] text-muted">{p.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
