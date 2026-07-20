import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { ProjectFilter } from "@/components/project-filter";
import { copy, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Firm Ant's completed projects across Cameroon — residential homes, church buildings, commercial spaces, renovations and interior designs."
};

export default async function PortfolioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <main>
      <PageHero
        eyebrow={t.portfolioEyebrow as string}
        title={t.portfolioTitle as string}
        subtitle={t.portfolioSubtitle as string}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
        bgAlt="Completed residential construction project"
      />

      {/* ── Project gallery ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
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
