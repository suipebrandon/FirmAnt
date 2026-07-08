"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Church", "Commercial", "Renovation"];

export function ProjectFilter() {
  const [category, setCategory] = useState("All");
  const visibleProjects = useMemo(
    () => (category === "All" ? projects : projects.filter((project) => project.category === category)),
    [category]
  );

  return (
    <div>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={cn(
              "focus-ring shrink-0 rounded-md border px-4 py-2 text-sm font-semibold transition",
              category === item ? "border-brand bg-brand text-white" : "border-ink/15 bg-white text-ink/70 hover:border-brand"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {visibleProjects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-brand">
                <MapPin size={16} /> {project.location} · {project.year}
              </div>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{project.scope}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
