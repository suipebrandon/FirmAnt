import { redirect } from "next/navigation";

import type { Metadata } from "next";
import { RootLocaleRedirect } from "@/components/root-locale-redirect";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FirmAnt Cameroon | Construction & Design",
  description:
    "FirmAnt Cameroon builds homes, churches and commercial spaces in Buea and across Cameroon.",
  alternates: {
    canonical: `${siteUrl}/en/`,
    languages: {
      en: `${siteUrl}/en/`,
      fr: `${siteUrl}/fr/`,
      "x-default": `${siteUrl}/en/`,
    },
  },
};

export default function IndexPage() {
  return <RootLocaleRedirect />;
}
