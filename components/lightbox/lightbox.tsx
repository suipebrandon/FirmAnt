"use client";

import Image from "next/image";
import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectItem } from "@/lib/portfolio-data";

interface LightboxProps {
  items: ProjectItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const current = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  /** Close on Escape key */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(currentIndex + 1);
    },
    [onClose, onNavigate, currentIndex, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  /** Close on overlay click (not on image) */
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  /** Touch handlers for swipe */
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchDelta(0);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    setTouchDelta(e.touches[0].clientX - touchStart);
  };
  const handleTouchEnd = () => {
    if (touchStart === null) return;
    const threshold = 60;
    if (touchDelta > threshold && hasPrev) onNavigate(currentIndex - 1);
    else if (touchDelta < -threshold && hasNext) onNavigate(currentIndex + 1);
    setTouchStart(null);
    setTouchDelta(0);
  };

  const navButtonClass =
    "focus-ring grid size-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-lg transition hover:bg-white/30 active:scale-90";

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 px-2 py-2 backdrop-blur-sm sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={handleOverlayClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${currentIndex + 1} of ${items.length}`}
      >
        {/* Close button — top right */}
        <button
          onClick={onClose}
          className="focus-ring fixed right-3 top-3 z-10 grid size-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur-lg transition hover:bg-white/20 sm:right-4 sm:top-4"
          aria-label="Close lightbox"
        >
          <X size={22} />
        </button>

        {/* Counter */}
        <span className="fixed left-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1.5 text-sm font-medium text-white/80 backdrop-blur-lg">
          {currentIndex + 1} / {items.length}
        </span>

        {/* Previous — desktop */}
        {hasPrev && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className={`${navButtonClass} fixed left-3 top-1/2 z-10 hidden -translate-y-1/2 sm:grid`}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next — desktop */}
        {hasNext && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className={`${navButtonClass} fixed right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:grid`}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image area */}
        <motion.div
          className="relative flex max-h-full w-full max-w-6xl flex-col items-center justify-center"
          key={current.id}
          initial={{ opacity: 0, scale: 0.92, x: touchDelta || 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: touchDelta,
            transition: { type: "spring", stiffness: 300, damping: 28 },
          }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          style={{ touchAction: "none" }}
        >
          {/* Image container */}
          <div className="relative flex w-full items-center justify-center">
            <div className="relative max-h-[65vh] w-full overflow-hidden rounded-lg sm:max-h-[75vh]">
              <Image
                src={current.image}
                alt={current.title}
                width={1200}
                height={900}
                className="h-auto max-h-[65vh] w-full rounded-lg object-contain sm:max-h-[75vh]"
                sizes="(max-width: 640px) 100vw, 90vw"
                priority
              />
            </div>
          </div>

          {/* Details bar */}
          <div className="mt-3 w-full max-w-2xl rounded-lg bg-white/10 px-4 py-3 text-center text-white backdrop-blur-lg">
            <h3 className="text-lg font-bold">{current.title}</h3>
            <p className="mt-1 text-sm text-white/70">
              {current.location} · {current.year} — {current.category}
            </p>
            <p className="mt-1 text-sm text-white/60">{current.description}</p>
          </div>
        </motion.div>

        {/* Mobile nav arrows inside the image area */}
        <div className="fixed bottom-24 left-0 right-0 z-10 flex justify-between px-4 sm:hidden">
          {hasPrev ? (
            <button
              onClick={() => onNavigate(currentIndex - 1)}
              className="grid size-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur-lg transition hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          ) : (
            <div />
          )}
          {hasNext ? (
            <button
              onClick={() => onNavigate(currentIndex + 1)}
              className="grid size-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur-lg transition hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}