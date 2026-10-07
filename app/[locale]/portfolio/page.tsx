import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { ProjectFilter } from "@/components/project-filter";
import { ImageAccordion, type AccordionPanel } from "@/components/image-accordion";
import { allProjects, type ProjectCategory } from "@/lib/portfolio-data";
import { copy, type Locale } from "@/lib/i18n";
import { localizedAlternates, whatsappHref } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Portfolio de projets" : "Project portfolio",
    description: locale === "fr"
      ? "Parcourez les projets réalisés par FirmAnt Cameroon : maisons, églises, espaces commerciaux, rénovations et intérieurs."
      : "Browse FirmAnt Cameroon projects including homes, churches, commercial spaces, renovations and interiors.",
    alternates: localizedAlternates(locale, "portfolio")
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  /** Categories highlighted in the expanding accordion above the gallery */
  const signatureCategories: {
    id: string;
    category: Exclude<ProjectCategory, "All">;
    label: string;
    caption: string;
  }[] = [
    {
      id: "residential",
      category: "Residential",
      label: t.signatureLabelResidential as string,
      caption: t.signatureCaptionResidential as string
    },
    {
      id: "church",
      category: "Church",
      label: t.signatureLabelChurch as string,
      caption: t.signatureCaptionChurch as string
    },
    {
      id: "commercial",
      category: "Commercial",
      label: t.signatureLabelCommercial as string,
      caption: t.signatureCaptionCommercial as string
    },
    {
      id: "renovation",
      category: "Renovation",
      label: t.signatureLabelRenovation as string,
      caption: t.signatureCaptionRenovation as string
    },
    {
      id: "interior",
      category: "Interior",
      label: t.signatureLabelInterior as string,
      caption: t.signatureCaptionInterior as string
    }
  ];

  const signaturePanels: AccordionPanel[] = signatureCategories.flatMap((item) => {
    const items = allProjects[item.category];
    const cover = items[0];
    if (!cover) return [];
    return [
      {
        id: item.id,
        label: item.label,
        caption: item.caption,
        meta: `${items.length} ${t.signatureProjectsLabel as string} · ${cover.location}`,
        image: cover.image
      }
    ];
  });

  return (
    <main>
      <PageHero
        eyebrow={t.portfolioEyebrow as string}
        title={t.portfolioTitle as string}
        subtitle={t.portfolioSubtitle as string}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
        bgAlt="Completed residential construction project"
        showGridlines
      />

      {/* ── Breadcrumb ────────────────────────────────────────────────── */}
      <nav className="bg-white py-3" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ol className="flex items-center gap-1.5 text-sm font-medium text-ink/60">
            <li>
              <Link href={`/${locale}`} className="transition hover:text-brand">
                Home
              </Link>
            </li>
            <ChevronRight size={14} className="text-ink/30" />
            <li className="text-ink" aria-current="page">
              Portfolio
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Signature work accordion ─────────────────────────────────── */}
      <section className="bg-blush/40 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.signatureEyebrow as string}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              {t.signatureTitle as string}
            </h2>
            <p className="mt-4 max-w-2xl text-ink/70">{t.signatureHint as string}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <ImageAccordion panels={signaturePanels} jumpLabel={t.signatureJump as string} />
          </Reveal>
        </div>
      </section>

      {/* ── Project gallery ───────────────────────────────────────────── */}
      <section id="gallery" className="scroll-mt-24 pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ProjectFilter />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white lg:py-24">
        <Reveal className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">{t.ctaPortfolio as string}</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">{t.ctaText as string}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              variant="whatsapp"
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
