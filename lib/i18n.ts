export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const copy = {
  en: {
    nav: ["Services", "Projects", "Process", "Resources", "Contact"],
    heroTitle: "Build Your Dream Home, Church or Commercial Space with Firm Ant",
    heroText:
      "Reliable construction, renovation and design from Biaka Street, Buea to every region of Cameroon. Clear budgets, careful supervision and first-class finishing.",
    quote: "Request quote",
    whatsapp: "WhatsApp us",
    trust: ["Buea-based team", "Serving all Cameroon", "Transparent project updates", "Quality finishing guarantee"],
    why: "Built for clients who need trust, not guesswork",
    contactTitle: "Tell us what you want to build"
  },
  fr: {
    nav: ["Services", "Projets", "Processus", "Guides", "Contact"],
    heroTitle: "Construisez votre maison, eglise ou espace commercial avec Firm Ant",
    heroText:
      "Construction, renovation et design fiables depuis Biaka Street, Buea vers tout le Cameroun. Budgets clairs, suivi rigoureux et finitions de premiere qualite.",
    quote: "Demander un devis",
    whatsapp: "WhatsApp",
    trust: ["Equipe basee a Buea", "Service partout au Cameroun", "Suivi transparent", "Garantie de finition"],
    why: "Pour les clients qui veulent la confiance, pas les surprises",
    contactTitle: "Dites-nous ce que vous voulez construire"
  }
} satisfies Record<Locale, Record<string, string | string[]>>;
