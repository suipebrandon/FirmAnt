import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { certifications, team } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { localizedAlternates, whatsappHref } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "À propos de FirmAnt Cameroon" : "About FirmAnt Cameroon",
    description: locale === "fr"
      ? "Découvrez FirmAnt Cameroon, une entreprise de construction basée à Buea et engagée pour la transparence et la qualité."
      : "Learn about FirmAnt Cameroon, a Buea-based construction company committed to transparency and quality.",
    alternates: localizedAlternates(locale, "about")
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <main>
      <PageHero
        eyebrow={t.aboutEyebrow as string}
        title={t.aboutTitle as string}
        subtitle={t.aboutSubtitle as string}
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85"
        bgAlt="Construction site overview, Cameroon"
        showGridlines
        contentClassName="pb-4 lg:pb-6"
      />

      {/* ── Company story ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.storyEyebrow as string}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.storyTitle as string}</h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">{t.storyText as string}</p>
            <div className="mt-8">
              <Button variant="whatsapp" href={whatsappHref("Hello Firm Ant, I want to discuss a project.")}>
                <MessageCircle size={18} /> Start a project
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
              <Image
                src="/Images/Company Brand/vision.webp"
                alt="Firm Ant construction team at work"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-35" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mission & Values ─────────────────────────────────────────── */}
        <section className="bg-blush/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.missionEyebrow as string}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              {t.missionTitle as string}
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {(t.missionValues as { title: string; description: string }[]).map((value, i) => (
              <StaggerItem
                key={value.title}
                className="rounded-xl border border-ink/10 bg-white p-6 shadow-soft"
                whileHover={{ y: -6 }}
              >
                <span className="grid size-11 place-items-center rounded-lg bg-brand font-black text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-black">{value.title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{value.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t.teamEyebrow as string}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.teamTitle as string}</h2>
            <p className="mt-4 max-w-2xl text-ink/70">{t.teamSubtitle as string}</p>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <StaggerItem
                key={member.name}
                className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-soft"
                whileHover={{ y: -4, x: 4 }}
              >
                <div
                  className={`grid size-14 shrink-0 place-items-center rounded-full ${member.color} text-lg font-black text-white`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold leading-snug">{member.name}</p>
                  <p className="mt-0.5 text-sm text-ink/60">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-sm text-ink/45">
          </p>
        </div>
      </section>

      {/* ── Certifications ───────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">
              {t.certsEyebrow as string}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.certsTitle as string}</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <StaggerItem
                key={cert}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/7 p-4"
                whileHover={{ x: 6 }}
              >
                <CheckCircle2 className="shrink-0 text-brand" size={20} />
                <span className="font-semibold">{cert}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
