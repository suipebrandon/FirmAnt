import Image from "next/image";
import { Reveal } from "@/components/motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  bgImage: string;
  bgAlt: string;
}

/**
 * Reusable interior-page hero banner.
 * Used on About, Services, Portfolio and Contact pages.
 */
export function PageHero({ eyebrow, title, subtitle, bgImage, bgAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[44vh] items-end overflow-hidden bg-ink pb-14 pt-32 text-white lg:min-h-[54vh] lg:pb-20 lg:pt-40">
      <Image
        src={bgImage}
        alt={bgAlt}
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(201,21,33,0.22),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
