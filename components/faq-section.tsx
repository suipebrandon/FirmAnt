import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type HomepageFaq = {
  _id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
};

export function FaqSection({
  faqs,
  locale,
}: {
  faqs: HomepageFaq[];
  locale: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className="bg-blush/40 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            {locale === "fr" ? "Besoin d’informations ?" : "Here to help"}
          </p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-black sm:text-4xl">
            {locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
          </h2>
        </div>

        <div className="divide-y divide-ink/10 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
          {faqs.map((faq) => (
            <details key={faq._id} className="group">
              <summary className="focus-ring flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left font-bold marker:hidden sm:px-6 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="shrink-0 text-brand transition-transform group-open:rotate-180"
                  size={20}
                />
              </summary>
              <div className="px-5 pb-5 text-sm leading-7 text-ink/70 sm:px-6">
                <p className="whitespace-pre-line">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-ink/70">
          {locale === "fr"
            ? "Vous avez une autre question ?"
            : "Have another question?"}{" "}
          <Link
            href={`/${locale}/contact`}
            className="font-bold text-brand underline decoration-brand/40 underline-offset-4 transition hover:decoration-brand focus-ring"
          >
            {locale === "fr" ? "Contactez FirmAnt" : "Contact FirmAnt"}
          </Link>
        </p>
      </div>
    </section>
  );
}
