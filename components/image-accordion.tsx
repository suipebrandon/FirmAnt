"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionPanel {
  /** Stable id — used for the aria wiring */
  id: string;
  /** Panel heading (already localised by the calling page) */
  label: string;
  /** One-line description revealed while the panel is expanded */
  caption: string;
  /** Compact meta line, e.g. "14 projects · Buea" */
  meta: string;
  image: string;
}

interface ImageAccordionProps {
  panels: AccordionPanel[];
  /** Label of the affordance that scrolls down to the gallery */
  jumpLabel: string;
  /** Id of the section the panels scroll to (defaults to the portfolio gallery) */
  targetId?: string;
}

/**
 * Expanding image accordion — used on the Portfolio page as the "signature work" strip.
 * ≥1024px: a single row of panels that expands on hover, focus or click
 *          (click additionally scrolls down to the full gallery).
 * <1024px: a vertical accordion with one panel open at a time.
 */
export function ImageAccordion({ panels, jumpLabel, targetId = "gallery" }: ImageAccordionProps) {
  const [active, setActive] = useState(0);

  const scrollToTarget = () => {
    // No explicit behaviour — globals.css owns `scroll-behavior` so the
    // reduced-motion override keeps working.
    document.getElementById(targetId)?.scrollIntoView();
  };

  return (
    <div>
      {/* ── Desktop: horizontal expanding panels ─────────────────────── */}
      <div className="hidden h-[26rem] gap-3 lg:flex xl:h-[30rem]">
        {panels.map((panel, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={panel.id}
              className="relative min-w-0 basis-0 overflow-hidden rounded-xl border border-ink/10 bg-ink shadow-card"
              animate={{ flexGrow: isActive ? 3.4 : 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={panel.image}
                alt={panel.label}
                fill
                sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 30vw, 100vw"
                className={cn(
                  "object-cover transition duration-700",
                  isActive ? "scale-100 opacity-100" : "scale-110 opacity-60"
                )}
              />

              {/* Readability scrim — heavier while collapsed so the thin bars stay legible */}
              {/* Opacity modifiers must stay on the 5-point scale — Tailwind v3 silently
                  skips values like /92 or /88 that are not in the default opacity scale. */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 transition duration-500",
                  isActive
                    ? "bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                    : "bg-gradient-to-t from-ink/85 via-ink/60 to-ink/35"
                )}
              />

              {/* Collapsed state: vertical label running up the thin panel */}
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-0 grid place-items-center transition duration-300",
                  isActive ? "opacity-0" : "opacity-100"
                )}
              >
                <span className="rotate-180 text-sm font-bold uppercase tracking-[0.22em] text-white/85 [writing-mode:vertical-rl]">
                  {panel.label}
                </span>
              </span>

              {/* Toggle — sits above the caption so the whole panel is clickable */}
              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => {
                  setActive(index);
                  scrollToTarget();
                }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="focus-ring absolute inset-0 z-20 rounded-xl"
              >
                <span className="sr-only">
                  {panel.label} — {jumpLabel}
                </span>
              </button>

              {/* Expanded caption */}
              <div
                aria-hidden={!isActive}
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 transition duration-500",
                  isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                  {panel.meta}
                </p>
                <h3 className="mt-1.5 text-2xl font-black leading-tight text-white">
                  {panel.label}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/75">{panel.caption}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {jumpLabel} <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile / tablet: vertical accordion ──────────────────────── */}
      <div className="grid gap-3 lg:hidden">
        {panels.map((panel, index) => {
          const isOpen = active === index;

          return (
            <div
              key={panel.id}
              className="overflow-hidden rounded-xl border border-ink/10 bg-ink shadow-card"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActive(isOpen ? -1 : index)}
                className="focus-ring flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="text-base font-bold text-white">{panel.label}</span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={panel.image}
                        alt={panel.label}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-4 pb-4 pt-3">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                        {panel.meta}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/75">{panel.caption}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}