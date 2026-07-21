"use client";

import { ClipboardCheck, FileText, HardHat, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Tell us about your project",
    text: "Reach out by WhatsApp, email or our contact form. We will discuss scope, timeline and answer your initial questions — no commitment needed."
  },
  {
    icon: FileText,
    title: "2. Get a transparent quote",
    text: "We inspect the site and provide an itemized quote with material pricing, labor breakdown and an estimated timeline. Every cost is explained before you approve."
  },
  {
    icon: ClipboardCheck,
    title: "3. Approve and plan",
    text: "Once you approve, we schedule the build, agree on milestone payments and set up your preferred update channel — WhatsApp, email or call."
  },
  {
    icon: HardHat,
    title: "4. Build with oversight",
    text: "Our team executes the work while you receive weekly photo updates, budget tracking and direct access to your project manager."
  },
  {
    icon: ShieldCheck,
    title: "5. Final inspection & handover",
    text: "We walk through the completed work together, correct any issues from a punch list, and hand over a finish you are proud to show."
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            How it works
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
            From first call to final handover
          </h2>
          <p className="mt-3 max-w-2xl text-ink/67">
            A clear, proven process that keeps your project on budget, on time and up to standard.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step) => (
            <StaggerItem
              key={step.title}
              className="group relative rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blush text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <step.icon size={24} />
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/67">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}