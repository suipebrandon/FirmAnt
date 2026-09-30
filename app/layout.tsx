import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { BackToTop } from "@/components/back-to-top";
import { contact } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FirmAnt Cameroon | Construction & Design",
    template: "%s | FirmAnt Cameroon"
  },
  description:
    "FirmAnt Cameroon builds churches, homes, commercial spaces, renovations, interiors and managed construction projects from Buea.",
  openGraph: {
    type: "website",
    siteName: "FirmAnt Cameroon",
    locale: "en_CM",
    alternateLocale: ["fr_CM"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "FirmAnt Cameroon",
                url: siteUrl,
                email: contact.email,
                telephone: contact.phoneDisplay,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Biaka Street",
                  addressLocality: "Buea",
                  addressCountry: "CM"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "FirmAnt Cameroon",
                url: siteUrl
              }
            ])
          }}
        />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}