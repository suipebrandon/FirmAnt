"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/button";
import { contact } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = copy[locale];
  const otherLocale = locale === "en" ? "fr" : "en";
  const navIds = ["services", "projects", "process", "resources", "contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 lg:px-8">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3 font-bold tracking-wide text-ink">
          <span className="relative h-14 w-36 overflow-hidden rounded-md bg-white sm:w-44">
            <Image src="/firmant-logo.jpg" alt="Firm Ant logo" fill priority className="object-contain" sizes="176px" />
          </span>
          <span className="sr-only">Firm Ant</span>
        </Link>

        <nav className="desktop-nav min-w-0 flex-1 items-center justify-end gap-3 lg:gap-5">
          {(t.nav as string[]).map((item, index) => (
            <a key={item} href={`#${navIds[index]}`} className="whitespace-nowrap text-sm font-medium text-ink/75 hover:text-brand">
              {item}
            </a>
          ))}
          <Link href={`/${otherLocale}`} className="whitespace-nowrap text-sm font-semibold uppercase text-brand">
            {otherLocale}
          </Link>
          <Button className="hidden xl:inline-flex" href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}>
            <Phone size={18} /> {contact.phoneDisplay}
          </Button>
          <Button className="hidden lg:inline-flex xl:hidden" href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}>
            <Phone size={18} /> WhatsApp
          </Button>
        </nav>

        <button className="mobile-menu-toggle focus-ring rounded-md p-2" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu-panel border-t border-ink/10 bg-white px-4 pb-5">
          <nav className="mx-auto grid max-w-7xl gap-2 py-3">
            {(t.nav as string[]).map((item, index) => (
              <a key={item} onClick={() => setOpen(false)} href={`#${navIds[index]}`} className="rounded-md px-2 py-3 font-medium text-ink/80">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <Button className="flex-1" href={whatsappHref("Hello Firm Ant, I need a quote.")}>
              WhatsApp
            </Button>
            <Button className="flex-1" variant="secondary" href={`/${otherLocale}`}>
              {otherLocale.toUpperCase()}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
