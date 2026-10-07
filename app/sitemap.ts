import type { MetadataRoute } from "next";
import { locales, navRoutes } from "@/lib/i18n";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navRoutes.flatMap((route) => {
    const pagePath = route ? `/${route}` : "";
    const englishUrl = `${siteUrl}/en${pagePath}/`;
    const frenchUrl = `${siteUrl}/fr${pagePath}/`;
    const languages = { en: englishUrl, fr: frenchUrl, "x-default": englishUrl };

    return locales.map((locale) => ({
      url: locale === "fr" ? frenchUrl : englishUrl,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}