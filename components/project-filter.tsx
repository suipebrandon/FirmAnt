"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Church", "Commercial", "Renovation", "Interior"];

export function ProjectFilter() {
  const [category, setCategory] = useState("All");
  const visibleProjects = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={cn(
              "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5",
              category === item
                ? "border-brand bg-brand text-white"
                : "border-ink/15 bg-white text-ink/70 hover:border-brand hover:text-brand"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" layout>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-4">
                <div className="mb-1.5 flex items-center gap-1.5 text-sm text-brand">
                  <MapPin size={14} /> {project.location} · {project.year}
                </div>
                <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                <p className="mt-1.5 text-sm text-ink/65">{project.scope}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
