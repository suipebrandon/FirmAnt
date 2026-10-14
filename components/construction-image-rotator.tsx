"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { projects } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";

const slides = [
  ...projects.slice(0, 3).map((project) => ({
    src: project.image,
    alt: ""
  })),
  ...[
    "/Images/Building Construction/IMG-20260708-WA0310.webp",
    "/Images/Building Construction/IMG-20260708-WA0313.webp",
    "/Images/Building Construction/IMG-20260708-WA0321.webp",
    "/Images/Building Construction/IMG-20260708-WA0396.webp"
  ].map((src) => ({ src, alt: "" }))
];

const offerCopy = {
  en: {
    title: "BUILDING A HOUSE??? Stop scrolling!",
    introduction:
      "FIRMANT is giving YOU a FREE construction CHECK-UP. Entirely free! Whether you’re at architectural design, foundation, building, roofing, or finishing.",
    details:
      "We’ll help you identify possible mistakes, material wastage, and costly problems before they become expensive.",
    conditions: ["No payment", "No obligation", "Very limited slots"],
    action: "Request your free check-up"
  },
  fr: {
    title: "VOUS CONSTRUISEZ ? Arrêtez-vous ici !",
    introduction:
      "FIRMANT vous offre un BILAN DE CONSTRUCTION GRATUIT. Sans frais ! Que vous soyez à l’étape de la conception architecturale, des fondations, de la construction, de la toiture ou des finitions.",
    details:
      "Nous vous aiderons à repérer les erreurs possibles, le gaspillage de matériaux et les problèmes coûteux avant qu’ils ne le deviennent.",
    conditions: ["Sans frais", "Sans engagement", "Places très limitées"],
    action: "Demander mon bilan gratuit"
  }
} satisfies Record<Locale, {
  title: string;
  introduction: string;
  details: string;
  conditions: string[];
  action: string;
}>;

export function ConstructionImageRotator({ locale }: { locale: Locale }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const offer = offerCopy[locale];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-label="Construction check-up offer"
      className="relative min-h-[38rem] overflow-hidden bg-ink text-white sm:min-h-[34rem] lg:min-h-[32rem]"
    >
      <div
        aria-label="Rotating FirmAnt construction and promotional images"
        className="absolute inset-0"
      >
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20"
      />

      <div className="relative z-10 mx-auto flex min-h-[38rem] max-w-7xl items-center px-4 py-10 sm:min-h-[34rem] lg:min-h-[32rem] lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {offer.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {offer.introduction}
          </p>
          <p className="mt-3 max-w-2xl leading-7 text-white/80">
            {offer.details}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {offer.conditions.map((condition) => (
              <li
                key={condition}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm"
              >
                {condition}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button
              variant="whatsapp"
              href={whatsappHref("Hello Firm Ant, I would like to request the free construction check-up.")}
            >
              <MessageCircle size={18} />
              {offer.action}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
