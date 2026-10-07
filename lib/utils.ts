import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale } from "@/lib/i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://firmantcameroon.com"
).replace(/\/+$/, "");

export function localizedAlternates(locale: Locale, route = "") {
  const pagePath = route ? `/${route}` : "";
  const englishUrl = `${siteUrl}/en${pagePath}/`;
  const frenchUrl = `${siteUrl}/fr${pagePath}/`;

  return {
    canonical: locale === "fr" ? frenchUrl : englishUrl,
    languages: {
      en: englishUrl,
      fr: frenchUrl,
      "x-default": englishUrl,
    },
  };
}

export const whatsappHref = (message: string) => {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "237654270882").replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
