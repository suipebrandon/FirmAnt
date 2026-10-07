import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();

  return {
    openGraph: {
      url: `${siteUrl}/${rawLocale}`,
      locale: rawLocale === "fr" ? "fr_CM" : "en_CM"
    }
  };
}

/**
 * Locale layout — wraps every page under /[locale]/ with the shared
 * Header, Footer and floating WhatsApp FAB.
 */
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer />
      <WhatsAppFab />
    </>
  );
}
