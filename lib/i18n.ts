export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

/** Route slugs that map 1-to-1 with nav labels */
export const navRoutes = ["", "about", "services", "portfolio", "contact"] as const;
export type NavRoute = (typeof navRoutes)[number];

export const copy = {
  en: {
    // ── Navigation ──────────────────────────────────────────────────────
    nav: ["Home", "About", "Services", "Portfolio", "Contact"],

    // ── Home — Hero ──────────────────────────────────────────────────────
    heroTitle: "Build Your Dream Home, Church or Commercial Space with Firm Ant",
    heroText:
      "Reliable construction, renovation and design from Biaka Street, Buea to every region of Cameroon. Clear budgets, careful supervision and first-class finishing.",
    quote: "Request a quote",
    whatsapp: "WhatsApp us",
    trust: ["Buea-based team", "Serving all Cameroon", "Transparent project updates", "Quality finishing guarantee"],

    // ── Home — Services Teaser ───────────────────────────────────────────
    servicesTeaserEyebrow: "What we build",
    servicesTeaserTitle: "Construction and design services that fit your scope and budget",
    viewAllServices: "View all services",

    // ── Home — Portfolio Teaser ──────────────────────────────────────────
    portfolioTeaserEyebrow: "Recent work",
    portfolioTeaserTitle: "Projects clients can inspect, not just photos we selected",
    viewAllProjects: "View full portfolio",

    // ── Home — Testimonials ──────────────────────────────────────────────
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "Trust signals on every path to contact",

    // ── Home — CTA ───────────────────────────────────────────────────────
    ctaTitle: "Ready to start your project?",
    ctaText:
      "Get a transparent quote, a clear timeline and weekly progress updates. Serving Buea, Limbe, Bamenda, Yaounde and Douala.",
    ctaWhatsapp: "Start on WhatsApp",
    ctaContact: "Send a message",

    // ── About ────────────────────────────────────────────────────────────
    aboutEyebrow: "About Firm Ant",
    aboutTitle: "Built on trust, delivered with precision",
    aboutSubtitle:
      "A Cameroon-based construction company committed to transparent builds and first-class finishing.",
    storyEyebrow: "Our story",
    storyTitle: "From Biaka Street to all of Cameroon",
    storyText:
      "Firm Ant was founded in Buea with a single conviction: construction in Cameroon should be predictable, honest and high-quality. Too many clients — especially diaspora homeowners — have experienced delays, hidden costs and disappointing finishes from contractors who overpromised. We set out to change that. Starting from Biaka Street, we built a team that combines solid technical skills with clear communication, photo updates and fair budgets. Today we serve clients across Buea, Limbe, Bamenda, Yaounde and Douala — building homes, churches, commercial spaces and more.",
    missionEyebrow: "Mission & values",
    missionTitle: "Why clients trust Firm Ant",
    teamEyebrow: "The team",
    teamTitle: "Partnerships & Staff",
    teamSubtitle:
      "Experienced, accountable and client-focused professionals across construction, design and project management.",
    certsEyebrow: "Credentials",
    certsTitle: "Licensed and quality-checked",

    // ── Services ─────────────────────────────────────────────────────────
    servicesEyebrow: "Our services",
    servicesTitle: "Everything you need, from foundation to finishing",
    servicesSubtitle:
      "Six specialist service areas covering every phase of construction, renovation and design in Cameroon.",
    getQuote: "Get a quote for this service",

    // ── Portfolio ────────────────────────────────────────────────────────
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Project proof clients can actually inspect",
    portfolioSubtitle:
      "A growing catalogue of completed work across Cameroon — homes, churches, commercial builds, renovations and interiors.",
    ctaPortfolio: "Have a project in mind?",

    // ── Contact ──────────────────────────────────────────────────────────
    contactEyebrow: "Contact us",
    contactTitle: "Tell us what you want to build",
    contactSubtitle:
      "Reach us by WhatsApp, email or this form. We respond to all enquiries within one business day.",
    hoursTitle: "Working hours",
    followUs: "Get in touch",

    // ── Shared ───────────────────────────────────────────────────────────
    why: "Built for clients who need trust, not guesswork"
  },

  fr: {
    // ── Navigation ──────────────────────────────────────────────────────
    nav: ["Accueil", "À propos", "Services", "Portfolio", "Contact"],

    // ── Home — Hero ──────────────────────────────────────────────────────
    heroTitle: "Construisez votre maison, église ou espace commercial avec Firm Ant",
    heroText:
      "Construction, rénovation et design fiables depuis Biaka Street, Buea vers tout le Cameroun. Budgets clairs, suivi rigoureux et finitions de première qualité.",
    quote: "Demander un devis",
    whatsapp: "WhatsApp",
    trust: ["Équipe basée à Buea", "Service partout au Cameroun", "Suivi transparent", "Garantie de finition"],

    // ── Home — Services Teaser ───────────────────────────────────────────
    servicesTeaserEyebrow: "Ce que nous construisons",
    servicesTeaserTitle: "Des services de construction et de design adaptés à votre budget",
    viewAllServices: "Voir tous les services",

    // ── Home — Portfolio Teaser ──────────────────────────────────────────
    portfolioTeaserEyebrow: "Travaux récents",
    portfolioTeaserTitle: "Des projets que les clients peuvent inspecter",
    viewAllProjects: "Voir le portfolio complet",

    // ── Home — Testimonials ──────────────────────────────────────────────
    testimonialsEyebrow: "Témoignages",
    testimonialsTitle: "La confiance à chaque étape du projet",

    // ── Home — CTA ───────────────────────────────────────────────────────
    ctaTitle: "Prêt à démarrer votre projet ?",
    ctaText:
      "Obtenez un devis transparent, un calendrier clair et des mises à jour hebdomadaires. Service à Buea, Limbe, Bamenda, Yaoundé et Douala.",
    ctaWhatsapp: "Démarrer sur WhatsApp",
    ctaContact: "Envoyer un message",

    // ── About ────────────────────────────────────────────────────────────
    aboutEyebrow: "À propos de Firm Ant",
    aboutTitle: "Construit sur la confiance, livré avec précision",
    aboutSubtitle:
      "Une entreprise de construction camerounaise engagée dans des constructions transparentes et des finitions de première qualité.",
    storyEyebrow: "Notre histoire",
    storyTitle: "De Biaka Street à tout le Cameroun",
    storyText:
      "Firm Ant a été fondée à Buea avec une conviction : la construction au Cameroun doit être prévisible, honnête et de haute qualité. Trop de clients — notamment de la diaspora — ont connu des retards, des coûts cachés et des finitions décevantes. Nous avons décidé de changer cela. En partant de Biaka Street, nous avons constitué une équipe alliant compétences techniques solides, communication claire, mises à jour photo et budgets équitables. Aujourd'hui, nous servons des clients à Buea, Limbe, Bamenda, Yaoundé et Douala.",
    missionEyebrow: "Mission et valeurs",
    missionTitle: "Pourquoi les clients font confiance à Firm Ant",
    teamEyebrow: "L'équipe",
    teamTitle: "Partenariats et personnel",
    teamSubtitle:
      "Des professionnels expérimentés, responsables et centrés sur le client dans la construction, le design et la gestion de projet.",
    certsEyebrow: "Certifications",
    certsTitle: "Agréé et contrôlé qualité",

    // ── Services ─────────────────────────────────────────────────────────
    servicesEyebrow: "Nos services",
    servicesTitle: "Tout ce dont vous avez besoin, de la fondation à la finition",
    servicesSubtitle:
      "Six domaines de services couvrant toutes les phases de construction, rénovation et design au Cameroun.",
    getQuote: "Obtenir un devis pour ce service",

    // ── Portfolio ────────────────────────────────────────────────────────
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Des preuves de projet que les clients peuvent inspecter",
    portfolioSubtitle:
      "Un catalogue croissant de travaux réalisés — maisons, églises, bâtiments commerciaux, rénovations et intérieurs.",
    ctaPortfolio: "Vous avez un projet en tête ?",

    // ── Contact ──────────────────────────────────────────────────────────
    contactEyebrow: "Contactez-nous",
    contactTitle: "Dites-nous ce que vous voulez construire",
    contactSubtitle:
      "Contactez-nous par WhatsApp, email ou ce formulaire. Nous répondons à toutes les demandes sous un jour ouvrable.",
    hoursTitle: "Horaires d'ouverture",
    followUs: "Nous joindre",

    // ── Shared ───────────────────────────────────────────────────────────
    why: "Pour les clients qui veulent la confiance, pas les surprises"
  }
} satisfies Record<Locale, Record<string, string | string[]>>;
