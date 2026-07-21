import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/button";
import { MotionDiv, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { contact, projects, services, testimonials } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";
import { StatsCounter } from "@/components/stats-counter";
import { ProcessSection } from "@/components/process-section";

export const metadata: Metadata = {
  title: "Construction Company in Buea, Cameroon",
  description:
    "Firm Ant is a Buea-based construction and design company serving Cameroon with homes, churches, commercial builds, renovations, interiors and project management."
};

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Firm Ant Company",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Biaka Street",
      addressLocality: "Buea",
      addressCountry: "CM"
    },
    telephone: contact.phoneDisplay,
    email: contact.email,
    areaServed: contact.cities,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://firmantafrica.com"
  };

  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* ── Video Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-ink text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source src="/Images/Building%20Construction/firmant2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(201,21,33,0.38),transparent_36%)]" />
        <div className="hero-grid absolute inset-0 opacity-35" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl content-center px-4 py-20 lg:px-8">
          <MotionDiv
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
            }}
          >
            {/* Badge */}
            <MotionDiv
              className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-semibold backdrop-blur"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShieldCheck size={18} /> Biaka Street, Buea · Serving all Cameroon
            </MotionDiv>

            {/* Headline */}
            <MotionDiv
              variants={{
                hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {t.heroTitle as string}
              </h1>
            </MotionDiv>

            {/* Subtext */}
            <MotionDiv
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                {t.heroText as string}
              </p>
            </MotionDiv>

            {/* CTAs */}
            <MotionDiv
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button href={`/${locale}/contact`}>
                {t.quote as string} <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                href={whatsappHref("Hello Firm Ant, I want to discuss a project.")}
              >
                <MessageCircle size={18} /> {t.whatsapp as string}
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* ── Trust badges ─────────────────────────────────────────────── */}
      <section className="bg-white py-5">
        <Stagger className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {(t.trust as string[]).map((item) => (
            <StaggerItem
              key={item}
              className="flex items-center gap-2 rounded-md bg-blush px-4 py-3 text-sm font-bold text-ink"
              whileHover={{ y: -3 }}
            >
              <CheckCircle2 className="shrink-0 text-brand" size={18} /> {item}
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── Stats Counter ────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ── Process Section ──────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Services Teaser ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.servicesTeaserEyebrow as string}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              {t.servicesTeaserTitle as string}
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredServices.map((service) => (
              <StaggerItem
                key={service.title}
                className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition-colors hover:border-brand/35"
                whileHover={{ y: -7 }}
              >
                <service.icon className="mb-4 text-brand" size={32} />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-ink/67">{service.text}</p>
                <p className="mt-4 text-sm font-semibold text-gold">{service.range}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Button href={`/${locale}/services`} variant="secondary">
              {t.viewAllServices as string} <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ─────────────────────────────────────────── */}
      <section className="bg-blush/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.portfolioTeaserEyebrow as string}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              {t.portfolioTeaserTitle as string}
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <StaggerItem
                key={project.title}
                className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft"
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink/65">
                    {project.location} · {project.year}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Button href={`/${locale}/portfolio`} variant="secondary">
              {t.viewAllProjects as string} <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.testimonialsEyebrow as string}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              {t.testimonialsTitle as string}
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem
                key={testimonial.name}
                className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft"
                whileHover={{ y: -5 }}
              >
                <div className="mb-3 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="leading-7 text-ink/78">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-5 font-bold">
                  {testimonial.name}
                  <span className="block text-sm font-medium text-ink/55">{testimonial.role}</span>
                </footer>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white lg:py-24">
        <Reveal className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
            {t.ctaTitle as string}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">{t.ctaText as string}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={whatsappHref("Hello Firm Ant, I want to start a project.")}>
              <MessageCircle size={18} /> {t.ctaWhatsapp as string}
            </Button>
            <Button variant="secondary" href={`/${locale}/contact`}>
              {t.ctaContact as string}
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}