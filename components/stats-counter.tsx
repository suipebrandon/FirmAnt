"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { copy, type Locale } from "@/lib/i18n";

interface Stat {
  value: number;
  suffix?: string;
  labelIndex: 0 | 1 | 2 | 3;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 8, suffix: "+", labelIndex: 0 },
  { value: 50, suffix: "+", labelIndex: 1 },
  { value: 6, suffix: "", labelIndex: 2, prefix: "" },
  { value: 98, suffix: "%", labelIndex: 3 },
];

function AnimatedStat({ stat, index, label }: { stat: Stat; index: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-4xl font-black tracking-tight sm:text-5xl">
        <span className="text-brand">
          {stat.prefix}
          {isInView ? stat.value : 0}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold text-ink/65">{label}</p>
    </motion.div>
  );
}

export function StatsCounter({ locale }: { locale: Locale }) {
  const labels = copy[locale].statLabels;

  return (
    <section className="border-y border-ink/10 bg-blush/40 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.labelIndex} stat={stat} index={i} label={labels[stat.labelIndex]} />
          ))}
        </div>
      </div>
    </section>
  );
}