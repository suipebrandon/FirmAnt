import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { contact, workingHours } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Firm Ant. Request a construction quote, WhatsApp us, or visit our office on Biaka Street, Buea, Cameroon."
};

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <main>
      <PageHero
        eyebrow={t.contactEyebrow as string}
        title={t.contactTitle as string}
        subtitle={t.contactSubtitle as string}
        bgImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
        bgAlt="Firm Ant office and construction site, Buea Cameroon"
      />

      {/* ── Main two-column layout ────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          {/* ── Left: info + hours + map ─────────────────────────────── */}
          <Reveal>
            <div className="grid gap-5">
              <InfoRow icon={<MapPin className="text-brand" size={20} />} label="Address">
                {contact.address}
              </InfoRow>
              <InfoRow
                icon={<Phone className="text-brand" size={20} />}
                label="Phone / WhatsApp"
              >
                <a
                  href={whatsappHref("Hello Firm Ant")}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-brand"
                >
                  {contact.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="text-brand" size={20} />} label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="transition hover:text-brand"
                >
                  {contact.email}
                </a>
              </InfoRow>
            </div>

            {/* Working hours */}
            <div className="mt-8 rounded-xl border border-ink/10 bg-blush/50 p-5">
              <div className="mb-4 flex items-center gap-2 font-bold">
                <Clock3 className="text-brand" size={18} />
                {t.hoursTitle as string}
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {workingHours.map(({ day, hours }) => (
                    <tr key={day} className="border-t border-ink/8 first:border-0">
                      <td className="py-2.5 font-semibold">{day}</td>
                      <td
                        className={`py-2.5 text-right font-medium ${
                          hours === "Closed" ? "text-red-500" : "text-ink/65"
                        }`}
                      >
                        {hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* WhatsApp CTA */}
            <Button
              className="mt-6 w-full"
              href={whatsappHref("Hello Firm Ant, I want to discuss a project.")}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Button>

            {/* Map embed */}
            <iframe
              title="Firm Ant location — Biaka Street, Buea"
              className="mt-6 h-64 w-full rounded-xl border-0 shadow-soft"
              loading="lazy"
              src="https://www.google.com/maps?q=Biaka%20Street%20Buea%20Cameroon&output=embed"
            />
          </Reveal>

          {/* ── Right: contact form ──────────────────────────────────── */}
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/** Reusable info row used in the contact details column */
function InfoRow({
  icon,
  label,
  children
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="font-bold">{label}</p>
        <p className="mt-0.5 text-ink/70">{children}</p>
      </div>
    </div>
  );
}
