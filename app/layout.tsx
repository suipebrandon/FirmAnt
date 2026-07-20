import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://firmantafrica.com"),
  title: {
    default: "Firm Ant | Construction & Design in Cameroon",
    template: "%s | Firm Ant"
  },
  description:
    "Firm Ant builds churches, homes, commercial spaces, renovations, interiors, furniture and managed construction projects from Buea across Cameroon.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
