"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import {
  filterCategories,
  getProjectsByCategory,
  type ProjectCategory,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function ProjectFilter() {
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const visibleProjects = useMemo(
    () => getProjectsByCategory(category),
    [category]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Filter tabs — horizontally scrollable on mobile, wrap on larger */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-3 scrollbar-hide sm:flex-wrap sm:overflow-x-visible">
        {filterCategories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={cn(
              "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95",
              category === item
                ? "border-brand bg-brand text-white shadow-soft"
                : "border-ink/15 bg-white text-ink/70 hover:border-brand/40 hover:text-brand"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Project count */}
      <p className="mb-5 text-sm font-medium text-ink/50">
        Showing {visibleProjects.length} project{visibleProjects.length !== 1 ? "s" : ""}
      </p>

      {/* Image grid — 1 col mobile, 2 tablet, 3-4 desktop */}
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        layout
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View ${project.title} — ${project.location} ${project.year}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                {/* Category badge */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-4">
                <div className="mb-1.5 flex items-center gap-1.5 text-sm text-brand">
                  <MapPin size={14} /> {project.location} · {project.year}
                </div>
                <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-ink/65">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {visibleProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg font-semibold text-ink/50">No projects found for this category.</p>
          <button
            onClick={() => setCategory("All")}
            className="focus-ring mt-3 text-sm font-semibold text-brand underline underline-offset-2 hover:text-ember"
          >
            View all projects
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={visibleProjects}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  );
}