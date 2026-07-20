"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/button";
import { contact } from "@/lib/content";
import { copy, navRoutes, type Locale } from "@/lib/i18n";
import { cn, whatsappHref } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = copy[locale];
  const otherLocale = locale === "en" ? "fr" : "en";

  // Replace only the locale segment so /en/services → /fr/services
  const otherLocalePath = pathname.replace(/^\/(en|fr)/, `/${otherLocale}`);

  /** Returns true when this nav item matches the current route */
  function isActive(routeSlug: string) {
    if (routeSlug === "") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(`/${locale}/${routeSlug}`);
  }

  function navHref(routeSlug: string) {
    return routeSlug === "" ? `/${locale}` : `/${locale}/${routeSlug}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 shadow-[0_12px_35px_rgba(10,10,10,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-3 font-bold tracking-wide text-ink"
        >
          <span className="relative h-14 w-36 overflow-hidden rounded-md bg-white sm:w-44">
            <Image
              src="/firmant-logo.jpg"
              alt="Firm Ant logo"
              fill
              priority
              className="object-contain"
              sizes="176px"
            />
          </span>
          <span className="sr-only">Firm Ant</span>
        </Link>

        {/* Desktop nav — visible at ≥ 1024px (see globals.css) */}
        <nav className="desktop-nav min-w-0 flex-1 items-center justify-end gap-1.5 xl:gap-2">
          {(t.nav as string[]).map((label, index) => (
            <Link
              key={label}
              href={navHref(navRoutes[index])}
              className={cn(
                "whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold shadow-[0_8px_24px_rgba(10,10,10,0.07)] backdrop-blur-xl transition duration-300",
                isActive(navRoutes[index])
                  ? "border-brand bg-brand text-white"
                  : "border-ink/10 bg-white/90 text-ink hover:border-brand/35 hover:bg-white hover:text-brand"
              )}
            >
              {label}
            </Link>
          ))}

          {/* Locale switcher */}
          <Link
            href={otherLocalePath}
            className="whitespace-nowrap rounded-full border border-brand/20 bg-white/90 px-3 py-2 text-sm font-bold uppercase text-brand shadow-[0_8px_24px_rgba(10,10,10,0.07)] backdrop-blur-xl transition hover:bg-brand hover:text-white"
          >
            {otherLocale}
          </Link>

          {/* CTA — phone number on xl, "WhatsApp" text on lg */}
          <Button
            className="hidden xl:inline-flex"
            href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}
          >
            <Phone size={16} /> {contact.phoneDisplay}
          </Button>
          <Button
            className="hidden lg:inline-flex xl:hidden"
            href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}
          >
            <Phone size={16} /> WhatsApp
          </Button>
        </nav>

        {/* Hamburger — visible at < 1024px (see globals.css) */}
        <button
          className="mobile-menu-toggle focus-ring min-h-[44px] min-w-[44px] rounded-md bg-white/90 p-2 text-ink shadow-[0_8px_24px_rgba(10,10,10,0.08)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-panel border-t border-ink/10 bg-white px-4 pb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <nav className="mx-auto grid max-w-7xl gap-1 py-3">
              {(t.nav as string[]).map((label, index) => (
                <Link
                  key={label}
                  href={navHref(navRoutes[index])}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-[44px] items-center rounded-md px-3 font-semibold transition",
                    isActive(navRoutes[index])
                      ? "bg-brand text-white"
                      : "text-ink/80 hover:bg-blush hover:text-brand"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3">
              <Button
                className="flex-1"
                href={whatsappHref("Hello Firm Ant, I need a quote.")}
              >
                WhatsApp
              </Button>
              <Button className="flex-1" variant="secondary" href={otherLocalePath}>
                {otherLocale.toUpperCase()}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
