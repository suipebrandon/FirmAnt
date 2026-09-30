import type { MetadataRoute } from "next";
import { locales, navRoutes } from "@/lib/i18n";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => navRoutes.map((route) => ({
    url: `${siteUrl}/${locale}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  })));
}