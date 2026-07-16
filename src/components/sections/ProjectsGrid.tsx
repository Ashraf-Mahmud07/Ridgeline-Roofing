"use client";

import { useState } from "react";
import { FilterChips } from "@/components/ui/FilterChips";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, projectCategories } from "@/lib/projects";

/** Filterable project grid — chips + cards + "Load more" per the design. */
export function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <>
      <div className="mt-7 px-6 pb-7 md:px-10 lg:px-14">
        <FilterChips options={projectCategories} value={filter} onChange={setFilter} />
      </div>
      <div className="border-t border-line px-6 pb-13 pt-9 md:px-10 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((prj) => (
            <ProjectCard
              key={prj.slug}
              title={prj.title}
              meta={prj.meta}
              category={prj.category}
              image={prj.image}
              href={`/projects/${prj.slug}`}
              height={230}
            />
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            className="border-[1.5px] border-line-strong px-[30px] py-[13px] text-[14.5px] font-semibold transition-colors hover:border-ink"
          >
            Load more projects
          </button>
        </div>
      </div>
    </>
  );
}
