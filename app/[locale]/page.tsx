import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock3, MapPinned, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { MotionA, MotionDiv, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ProjectFilter } from "@/components/project-filter";
import { QuoteEstimator } from "@/components/quote-estimator";
import { contact, resources, services, testimonials } from "@/lib/content";
import { copy, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Construction Company in Buea, Cameroon",
  description:
    "Firm Ant is a Buea-based construction and design company serving Cameroon with homes, churches, commercial builds, renovations, interiors and project management."
};

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Firm Ant Company",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Biaka Street",
      addressLocality: "Buea",
      addressCountry: "CM"
    },
    telephone: contact.phoneDisplay,
    email: contact.email,
    areaServed: contact.cities,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://firmantafrica.com"
  };

  return (
    <>
      <Header locale={locale} />
      <main>
        <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-ink text-white">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
            alt="Construction team planning a modern building project"
            fill
            priority
            className="hero-image object-cover opacity-48"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(201,21,33,0.38),transparent_34%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/22" />
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl content-center px-4 py-16 lg:px-8">
            <MotionDiv
              className="max-w-3xl"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } }
              }}
            >
              <MotionDiv
                className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-semibold backdrop-blur"
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <ShieldCheck size={18} /> Biaka Street, Buea · Serving all Cameroon
              </MotionDiv>
              <MotionDiv
                variants={{
                  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
              </MotionDiv>
              <MotionDiv
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">{t.heroText}</p>
              </MotionDiv>
              <MotionDiv
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button href="#contact">
                  {t.quote as string} <ArrowRight size={18} />
                </Button>
                <Button variant="secondary" href={whatsappHref("Hello Firm Ant, I want to discuss a project.")}>
                  <MessageCircle size={18} /> {t.whatsapp as string}
                </Button>
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>

        <section className="bg-white py-5">
          <Stagger className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {(t.trust as string[]).map((item) => (
              <StaggerItem key={item} className="flex items-center gap-2 rounded-md bg-blush px-4 py-3 text-sm font-bold text-ink" whileHover={{ y: -3 }}>
                <CheckCircle2 className="text-brand" size={18} /> {item}
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <Section id="services" eyebrow="Services" title="Complete construction, design and finishing support">
          <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <StaggerItem
                key={service.title}
                className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft transition-colors hover:border-brand/35"
                whileHover={{ y: -7 }}
              >
                <service.icon className="mb-5 text-brand" size={32} />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-ink/67">{service.text}</p>
                <p className="mt-4 text-sm font-semibold text-gold">{service.range}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section id="projects" eyebrow="Portfolio" title="Project proof clients can actually inspect">
          <ProjectFilter />
        </Section>

        <section id="process" className="bg-ink py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Process</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.why as string}</h2>
              <p className="mt-4 text-white/70">
                Firm Ant reduces the common pain of delays, hidden spending and poor finishing with a clear build path and practical updates.
              </p>
            </Reveal>
            <Stagger className="grid gap-4 md:grid-cols-2">
              {[
                ["1", "Consult & inspect", "We understand scope, site conditions, budget and the standard of finishing expected."],
                ["2", "Transparent quote", "You receive a clear estimate, materials discussion and realistic timeline before work begins."],
                ["3", "Build with updates", "Supervision, procurement and photo progress reports keep local and diaspora clients informed."],
                ["4", "Finish & handover", "Final checks, corrections and finishing details are handled before handover."]
              ].map(([step, title, text]) => (
                <StaggerItem key={title} className="rounded-lg border border-white/10 bg-white/7 p-5" whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <span className="grid size-9 place-items-center rounded-md bg-brand font-bold">{step}</span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <Section id="resources" eyebrow="Resources" title="Guides that help clients avoid costly mistakes">
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <StaggerItem key={resource} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft" whileHover={{ y: -6 }}>
                <Clock3 className="mb-4 text-brand" />
                <h3 className="font-bold">{resource}</h3>
                <p className="mt-3 text-sm text-ink/65">Publish as a CMS article, then use it for SEO and client education.</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <section className="bg-blush py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Testimonials</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Trust signals on every path to contact</h2>
              <Stagger className="mt-8 grid gap-4">
                {testimonials.map((testimonial) => (
                  <StaggerItem key={testimonial.name} className="rounded-lg bg-white p-5 shadow-soft" whileHover={{ x: 6 }}>
                    <div className="mb-3 flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-ink/78">&ldquo;{testimonial.quote}&rdquo;</p>
                    <footer className="mt-4 font-bold">
                      {testimonial.name}
                      <span className="block text-sm font-medium text-ink/55">{testimonial.role}</span>
                    </footer>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
            <Reveal delay={0.12}>
              <QuoteEstimator />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Contact</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.contactTitle as string}</h2>
              <div className="mt-6 grid gap-4 text-ink/72">
                <p className="flex gap-3">
                  <MapPinned className="shrink-0 text-brand" /> {contact.address}
                </p>
                <p>{contact.phoneDisplay} · {contact.email}</p>
                <p>Agents and project presence: {contact.cities.join(", ")}.</p>
              </div>
              <iframe
                title="Firm Ant map"
                className="mt-6 h-72 w-full rounded-lg border-0"
                loading="lazy"
                src="https://www.google.com/maps?q=Biaka%20Street%20Buea%20Cameroon&output=embed"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MotionA
        href={whatsappHref("Hello Firm Ant, I need help with a construction project.")}
        className="focus-ring fixed bottom-4 right-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-soft transition hover:bg-ember"
        aria-label="Chat with Firm Ant on WhatsApp"
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.08, rotate: -4 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.8 }}
      >
        <MessageCircle />
      </MotionA>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-black">Firm Ant</p>
          <p className="mt-2 text-sm text-white/65">Build Your Dream with reliable construction and first-class finishing.</p>
        </div>
        <div className="text-sm text-white/70">
          <p>{contact.address}</p>
          <p>{contact.phoneDisplay}</p>
          <p>{contact.email}</p>
        </div>
        <div className="text-sm text-white/70 md:text-right">
          <p>Construction · Renovation · Design · Project Management</p>
          <p className="mt-2">© {new Date().getFullYear()} Firm Ant Company</p>
        </div>
      </div>
    </footer>
  );
}
