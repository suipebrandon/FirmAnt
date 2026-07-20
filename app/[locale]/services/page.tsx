import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion";
import { servicesDetail } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Firm Ant offers church buildings, residential homes, commercial properties, renovation, interior design, furniture and project management across Cameroon."
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <main>
      {/* ── Hero with video background ─────────────────────────────────── */}
      <section className="relative flex min-h-[44vh] items-end overflow-hidden bg-ink pb-14 pt-32 text-white lg:min-h-[54vh] lg:pb-20 lg:pt-40">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover opacity-25"
        >
          <source src="/Images/Interior%20Design/interior.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(201,21,33,0.22),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">
              {t.servicesEyebrow as string}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {t.servicesTitle as string}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {t.servicesSubtitle as string}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6 alternating service sections ───────────────────────────── */}
      {servicesDetail.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-24 ${!isEven ? "bg-blush/40" : "bg-white"}`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
              {/* Image — alternates left/right on desktop */}
              <Reveal className={isEven ? "" : "lg:order-last"} delay={0.05}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {/* Service number overlay */}
                  <div className="absolute left-4 top-4 grid size-10 place-items-center rounded-lg bg-brand font-black text-white">
                    0{index + 1}
                  </div>
                </div>
              </Reveal>

              {/* Text */}
              <Reveal delay={0.12}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                  {service.range}
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">{service.title}</h2>
                <p className="mt-2 text-lg font-semibold text-gold">{service.subtitle}</p>
                <p className="mt-4 leading-8 text-ink/72">{service.description}</p>

                <ul className="mt-6 grid gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-brand"
                        size={18}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href={whatsappHref(
                      `Hello Firm Ant, I'm interested in your ${service.title} service.`
                    )}
                  >
                    <MessageCircle size={18} /> {t.getQuote as string}
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white lg:py-24">
        <Reveal className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">{t.ctaTitle as string}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">{t.ctaText as string}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              href={whatsappHref("Hello Firm Ant, I want to discuss a project.")}
            >
              <MessageCircle size={18} /> {t.ctaWhatsapp as string}
            </Button>
            <Button variant="secondary" href={`/${locale}/contact`}>
              {t.ctaContact as string}
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
