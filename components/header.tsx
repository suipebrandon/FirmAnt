"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { contact } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { cn, whatsappHref } from "@/lib/utils";

const navIds = ["services", "projects", "process", "resources", "contact"];

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const t = copy[locale];
  const otherLocale = locale === "en" ? "fr" : "en";

  useEffect(() => {
    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.12, 0.28, 0.44, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 shadow-[0_12px_35px_rgba(10,10,10,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 lg:px-8">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3 font-bold tracking-wide text-ink">
          <span className="relative h-14 w-36 overflow-hidden rounded-md bg-white sm:w-44">
            <Image src="/firmant-logo.jpg" alt="Firm Ant logo" fill priority className="object-contain" sizes="176px" />
          </span>
          <span className="sr-only">Firm Ant</span>
        </Link>

        <nav className="desktop-nav min-w-0 flex-1 items-center justify-end gap-2 lg:gap-3">
          {(t.nav as string[]).map((item, index) => (
            <a
              key={item}
              href={`#${navIds[index]}`}
              aria-current={activeSection === navIds[index] ? "location" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold shadow-[0_8px_24px_rgba(10,10,10,0.08)] backdrop-blur-xl transition duration-300",
                activeSection === navIds[index]
                  ? "border-brand bg-brand text-white"
                  : "border-ink/10 bg-white/90 text-ink hover:border-brand/35 hover:bg-white hover:text-brand"
              )}
            >
              {item}
            </a>
          ))}
          <Link
            href={`/${otherLocale}`}
            className="whitespace-nowrap rounded-full border border-brand/20 bg-white/90 px-3 py-2 text-sm font-bold uppercase text-brand shadow-[0_8px_24px_rgba(10,10,10,0.08)] backdrop-blur-xl transition hover:bg-brand hover:text-white"
          >
            {otherLocale}
          </Link>
          <Button className="hidden xl:inline-flex" href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}>
            <Phone size={18} /> {contact.phoneDisplay}
          </Button>
          <Button className="hidden lg:inline-flex xl:hidden" href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}>
            <Phone size={18} /> WhatsApp
          </Button>
        </nav>

        <button className="mobile-menu-toggle focus-ring rounded-md bg-white/90 p-2 text-ink shadow-[0_8px_24px_rgba(10,10,10,0.08)]" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-panel border-t border-ink/10 bg-white px-4 pb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
          <nav className="mx-auto grid max-w-7xl gap-2 py-3">
            {(t.nav as string[]).map((item, index) => (
              <a
                key={item}
                onClick={() => setOpen(false)}
                href={`#${navIds[index]}`}
                aria-current={activeSection === navIds[index] ? "location" : undefined}
                className={cn(
                  "rounded-md px-3 py-3 font-semibold transition",
                  activeSection === navIds[index] ? "bg-brand text-white" : "text-ink/80 hover:bg-blush hover:text-brand"
                )}
              >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
