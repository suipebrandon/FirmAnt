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
      "Reliable construction, renovation and design from Head Office Bonduma, opposite Nabesk Junction, Buea to every region of Cameroon. Clear budgets, careful supervision and first-class finishing.",
    quote: "Talk to an expert",
    whatsapp: "WhatsApp us",
    trust: ["Buea-based team", "Serving all Cameroon", "Transparent project updates", "Quality finishing guarantee"],
    statLabels: ["Years experience", "Projects completed", "Regions served across Cameroon", "Client satisfaction"] as [string, string, string, string],

    // ── Home — Services Teaser ───────────────────────────────────────────
    servicesTeaserEyebrow: "What we build",
    servicesTeaserTitle: "Construction and design services that fit your scope and budget",
    serviceTeaserCards: [
      {
        title: "Church Buildings",
        text: "Worship spaces, halls, stages, offices and finishing designed for durability, comfort and growth.",
        range: "From site assessment to complete build"
      },
      {
        title: "Residential Homes",
        text: "New homes, extensions and finishing with clear budgets, material guidance and dependable supervision.",
        range: "Small homes to premium residences"
      },
      {
        title: "Commercial Properties",
        text: "Shops, offices, rental units and business spaces planned for customer flow and long-term value.",
        range: "Design-build and fit-out"
      }
    ],
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
    storyTitle: "From Head Office Bonduma to all of Cameroon",
    storyText:
      "Firm Ant was founded in Buea with a single conviction: construction in Cameroon should be predictable, honest and high-quality. Too many clients especially diaspora homeowners have experienced delays, hidden costs and disappointing finishes from contractors who overpromised. We set out to change that. Starting from Head Office Bonduma, opposite Nabesk Junction, we built a team that combines solid technical skills with clear communication, photo updates and fair budgets. Today we serve clients across Buea, Limbe, Bamenda, Yaounde and Douala building homes, churches, commercial spaces and more.",
    missionEyebrow: "Mission & values",
    missionTitle: "Why clients trust Firm Ant",
    missionValues: [
      {
        title: "Transparency",
        description: "Every quote is itemized. Every cost change is communicated before it happens. No surprises at handover."
      },
      {
        title: "Quality",
        description: "Verified materials, skilled craftsmen and a punch-list process that does not cut corners on the final finish."
      },
      {
        title: "Accountability",
        description: "Photo updates, timeline tracking and a dedicated point of contact — whether you are local or abroad."
      }
    ],
    teamEyebrow: "The team",
    teamTitle: "Meet Our Professional Team",
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

    // ── Portfolio — Signature work accordion ─────────────────────────────
    signatureEyebrow: "Signature work",
    signatureTitle: "A closer look at five categories of finished work",
    signatureHint: "Expand a panel to preview the work, then open the full gallery below.",
    signatureJump: "See this work",
    signatureProjectsLabel: "projects",
    signatureLabelResidential: "Residential Homes",
    signatureLabelChurch: "Church Buildings",
    signatureLabelCommercial: "Commercial Spaces",
    signatureLabelRenovation: "Renovation & Remodeling",
    signatureLabelInterior: "Interior & Finishing",
    signatureCaptionResidential: "New homes, extensions and handover-ready finishing.",
    signatureCaptionChurch: "Worship halls, stages and offices built for congregation growth.",
    signatureCaptionCommercial: "Shops, offices and rental units planned for customer flow.",
    signatureCaptionRenovation: "Defect correction and modernisation of outdated spaces.",
    signatureCaptionInterior: "Paint, ceilings, joinery and custom furniture installation.",

    // ── Contact ──────────────────────────────────────────────────────────
    contactEyebrow: "Contact us",
    contactTitle: "Tell us what you want to build",
    contactSubtitle:
      "Reach us by WhatsApp, email or this form. We respond to all enquiries within one business day.",
    hoursTitle: "Working hours",
    followUs: "Get in touch",

    // ── Process Section ──────────────────────────────────────────────────
    processEyebrow: "How it works",
    processTitle: "From first call to final handover",
    processText: "A clear, proven process that keeps your project on budget, on time and up to standard.",
    processSteps: [
      {
        title: "1. Tell us about your project",
        text: "Reach out by WhatsApp, email or our contact form. We will discuss scope, timeline and answer your initial questions — no commitment needed."
      },
      {
        title: "2. Get a transparent quote",
        text: "We inspect the site and provide an itemized quote with material pricing, labor breakdown and an estimated timeline. Every cost is explained before you approve."
      },
      {
        title: "3. Approve and plan",
        text: "Once you approve, we schedule the build, agree on milestone payments and set up your preferred update channel — WhatsApp, email or call."
      },
      {
        title: "4. Build with oversight",
        text: "Our team executes the work while you receive weekly photo updates, budget tracking and direct access to your project manager."
      },
      {
        title: "5. Final inspection & handover",
        text: "We walk through the completed work together, correct any issues from a punch list, and hand over a finish you are proud to show."
      }
    ],

    // ── Stats Counter ────────────────────────────────────────────────────
    // ── Shared ───────────────────────────────────────────────────────────
    why: "Built for clients who need trust, not guesswork"
  },

  fr: {
    // ── Navigation ──────────────────────────────────────────────────────
    nav: ["Accueil", "À propos", "Services", "Portfolio", "Contact"],

    // ── Home — Hero ──────────────────────────────────────────────────────
    heroTitle: "Construisez votre maison, église ou espace commercial avec Firm Ant",
    heroText:
      "Construction, rénovation et design fiables depuis Head Office Bonduma, opposite Nabesk Junction, Buea vers tout le Cameroun. Budgets clairs, suivi rigoureux et finitions de première qualité.",
    quote: "Parler à un expert",
    whatsapp: "WhatsApp",
    trust: ["Équipe basée à Buea", "Service partout au Cameroun", "Suivi transparent", "Garantie de finition"],
    statLabels: ["Années d’expérience", "Projets réalisés", "Régions desservies au Cameroun", "Satisfaction client"] as [string, string, string, string],

    // ── Home — Services Teaser ───────────────────────────────────────────
    servicesTeaserEyebrow: "Ce que nous construisons",
    servicesTeaserTitle: "Des services de construction et de design adaptés à votre budget",
    serviceTeaserCards: [
      {
        title: "Bâtiments religieux",
        text: "Des lieux de culte, salles, estrades et bureaux conçus pour durer, offrir du confort et accompagner la croissance.",
        range: "De l’étude du site à la construction complète"
      },
      {
        title: "Maisons résidentielles",
        text: "Maisons neuves, extensions et finitions avec budgets clairs, conseils sur les matériaux et suivi fiable.",
        range: "Des petites maisons aux résidences haut de gamme"
      },
      {
        title: "Bâtiments commerciaux",
        text: "Magasins, bureaux, logements locatifs et espaces professionnels conçus pour accueillir les clients et offrir une valeur durable.",
        range: "Conception, construction et aménagement"
      }
    ],
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
    storyTitle: "De Head Office Bonduma à tout le Cameroun",
    storyText:
      "Firm Ant a été fondée à Buea avec une conviction : la construction au Cameroun doit être prévisible, honnête et de haute qualité. Trop de clients — notamment de la diaspora — ont connu des retards, des coûts cachés et des finitions décevantes. Nous avons décidé de changer cela. En partant de Head Office Bonduma, opposite Nabesk Junction, nous avons constitué une équipe alliant compétences techniques solides, communication claire, mises à jour photo et budgets équitables. Aujourd'hui, nous servons des clients à Buea, Limbe, Bamenda, Yaoundé et Douala.",
    missionEyebrow: "Mission et valeurs",
    missionTitle: "Pourquoi les clients font confiance à Firm Ant",
    missionValues: [
      {
        title: "Transparence",
        description: "Chaque devis est détaillé. Tout changement de coût est communiqué à l’avance. Aucune mauvaise surprise à la livraison."
      },
      {
        title: "Qualité",
        description: "Des matériaux vérifiés, des artisans qualifiés et une liste de contrôle rigoureuse pour une finition soignée jusque dans les détails."
      },
      {
        title: "Responsabilité",
        description: "Des photos régulières, un suivi du calendrier et un interlocuteur dédié, que vous soyez sur place ou à l’étranger."
      }
    ],
    teamEyebrow: "L'équipe",
    teamTitle: "Rencontrez notre équipe de professionnels",
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

    // ── Portfolio — Accordéon des réalisations phares ────────────────────
    signatureEyebrow: "Réalisations phares",
    signatureTitle: "Un aperçu de cinq catégories de travaux terminés",
    signatureHint: "Dépliez un panneau pour un aperçu, puis ouvrez la galerie complète ci-dessous.",
    signatureJump: "Voir ces travaux",
    signatureProjectsLabel: "projets",
    signatureLabelResidential: "Maisons résidentielles",
    signatureLabelChurch: "Bâtiments d'église",
    signatureLabelCommercial: "Espaces commerciaux",
    signatureLabelRenovation: "Rénovation et remise à neuf",
    signatureLabelInterior: "Intérieur et finitions",
    signatureCaptionResidential: "Maisons neuves, extensions et finitions prêtes à livrer.",
    signatureCaptionChurch: "Salles de culte, scènes et bureaux pensés pour la croissance.",
    signatureCaptionCommercial: "Boutiques, bureaux et unités locatives pensés pour le flux client.",
    signatureCaptionRenovation: "Correction des défauts et modernisation des espaces anciens.",
    signatureCaptionInterior: "Peinture, plafonds, menuiserie et mobilier sur mesure.",

    // ── Contact ──────────────────────────────────────────────────────────
    contactEyebrow: "Contactez-nous",
    contactTitle: "Dites-nous ce que vous voulez construire",
    contactSubtitle:
      "Contactez-nous par WhatsApp, email ou ce formulaire. Nous répondons à toutes les demandes sous un jour ouvrable.",
    hoursTitle: "Horaires d'ouverture",
    followUs: "Nous joindre",

    // ── Process Section ──────────────────────────────────────────────────
    processEyebrow: "Comment ça marche",
    processTitle: "Du premier appel à la remise finale",
    processText: "Un processus clair et éprouvé qui maintient votre projet dans les délais, le budget et les normes de qualité.",
    processSteps: [
      {
        title: "1. Parlez-nous de votre projet",
        text: "Contactez-nous par WhatsApp, e-mail ou via notre formulaire. Nous discuterons de vos besoins et du calendrier, et répondrons à vos premières questions, sans engagement."
      },
      {
        title: "2. Recevez un devis détaillé",
        text: "Nous inspectons le site et préparons un devis détaillé indiquant le prix des matériaux, le coût de la main-d’œuvre et le calendrier estimé. Chaque coût est expliqué avant votre approbation."
      },
      {
        title: "3. Validez et planifiez",
        text: "Après votre approbation, nous planifions les travaux, convenons des paiements par étapes et mettons en place votre canal de suivi préféré : WhatsApp, e-mail ou téléphone."
      },
      {
        title: "4. Construisez en toute confiance",
        text: "Notre équipe réalise les travaux pendant que vous recevez des photos chaque semaine, un suivi du budget et un accès direct à votre chef de projet."
      },
      {
        title: "5. Inspection finale et remise",
        text: "Nous inspectons ensemble les travaux terminés, corrigeons les éventuels points à reprendre et vous remettons un ouvrage dont vous serez fier."
      }
    ],

    // ── Stats Counter ────────────────────────────────────────────────────
    // ── Shared ───────────────────────────────────────────────────────────
    why: "Pour les clients qui veulent la confiance, pas les surprises"
  }
} satisfies Record<
  Locale,
  Record<
    string,
    string | string[] | { title: string; text: string; range?: string }[] | { title: string; description: string }[]
  >
>;
