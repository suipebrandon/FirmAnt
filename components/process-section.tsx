"use client";

import { ClipboardCheck, FileText, HardHat, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { copy, type Locale } from "@/lib/i18n";

const stepIcons = [
  MessageCircle,
  FileText,
  ClipboardCheck,
  HardHat,
  ShieldCheck
];

export function ProcessSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            {t.processEyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
            {t.processTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-ink/67">
            {t.processText}
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <StaggerItem
                key={step.title}
                className="group relative rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blush text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={24} />
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/67">{step.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}