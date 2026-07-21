import { Building2, Church, ClipboardCheck, Home, Paintbrush, Sofa } from "lucide-react";

export const contact = {
  phoneDisplay: "+237 654 27 08 82",
  whatsapp: "237654270882",
  email: "firmantcompany@gmail.com",
  backupEmail: "firmantgrowthcatalyst@gmail.com",
  address: "Biaka Street, Buea, Cameroon",
  cities: ["Buea", "Limbe", "Bamenda", "Yaounde", "Douala", "All Cameroon"]
};

/** Brief service cards — used on the Home teaser and as a quick reference */
export const services = [
  {
    icon: Church,
    title: "Church Buildings",
    text: "Worship spaces, halls, stages, offices and finishing designed for durability, comfort and growth.",
    range: "From site assessment to complete build"
  },
  {
    icon: Home,
    title: "Residential Homes",
    text: "New homes, extensions and finishing with clear budgets, material guidance and dependable supervision.",
    range: "Small homes to premium residences"
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    text: "Shops, offices, rental units and business spaces planned for customer flow and long-term value.",
    range: "Design-build and fit-out"
  },
  {
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    text: "Repair poor work, modernize old spaces and upgrade finishes without losing control of cost or timing.",
    range: "Rooms, facades and full-property remodels"
  },
  {
    icon: Sofa,
    title: "Interior, Exterior & Furniture",
    text: "Paint, decor, custom furniture, exterior upgrades and finishing details that make the space feel complete.",
    range: "Concept to installation"
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "Planning, procurement, contractor coordination, photo updates and quality checks for local and diaspora clients.",
    range: "Weekly reporting available"
  }
];

/** Detailed service data — used on the /services page */
export const servicesDetail = [
  {
    id: "church",
    icon: Church,
    title: "Church Buildings",
    subtitle: "From foundation to final finish — worship spaces built for generations.",
    description:
      "From site assessment to complete build, Firm Ant delivers worship spaces designed for durability, acoustic comfort and congregational growth. We handle structure, roofing, interior finishing, stage construction and office fit-outs. Whether starting from a bare plot or completing a stalled build, our team manages every phase with clear reporting and on-budget delivery.",
    features: [
      "Acoustic ceiling and wall design",
      "Stage, platform and pulpit construction",
      "Multi-use hall and office layouts",
      "Exterior finishing and landscaping",
      "Roofing, guttering and waterproofing"
    ],
    image: "https://images.unsplash.com/photo-1537041421496-d5a7dac58c08?auto=format&fit=crop&w=1400&q=80",
    range: "From site assessment to complete build"
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Homes",
    subtitle: "Clear budgets, careful supervision and first-class finishing for your family home.",
    description:
      "New builds, extensions and finishing with transparent budgets, material guidance and dependable supervision. We serve first-time homeowners, families expanding their space and diaspora clients who need reliable remote oversight. Every project includes a structured timeline, itemized cost breakdown and weekly photo updates.",
    features: [
      "Foundation and structural work",
      "Roofing and waterproofing",
      "Interior finishing, plastering and tiling",
      "Plumbing and electrical provisions",
      "Weekly photo update reports for diaspora clients"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    range: "Small homes to premium residences"
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Properties",
    subtitle: "Business spaces designed for customer flow and long-term return.",
    description:
      "Shops, offices, rental units and business spaces planned for customer flow and long-term value. We combine practical space planning with quality construction to deliver commercial builds that attract clients and tenants. From strip-mall fit-outs to multi-storey blocks, we bring the same transparency and supervision standards to every scope.",
    features: [
      "Space planning and architectural coordination",
      "Shop-front and façade construction",
      "Electrical, plumbing and air provision",
      "Design-build and fit-out packages",
      "Rental unit and multi-unit developments"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    range: "Design-build and fit-out"
  },
  {
    id: "renovation",
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    subtitle: "Correct defects, upgrade spaces and deliver the finish your brief always deserved.",
    description:
      "Repair poor-quality work, modernize outdated spaces and upgrade finishes without losing control of cost or timing. We take over from failed contractors, correct structural and finishing defects, and deliver the standard the original brief promised. No hidden surprises — just honest assessment and reliable execution from day one.",
    features: [
      "Defect correction and structural repair",
      "Kitchen, bathroom and floor upgrades",
      "Ceiling remodeling and plastering",
      "Full-property modernization packages",
      "Before-and-after photo documentation"
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    range: "Rooms, façades and full-property remodels"
  },
  {
    id: "interior",
    icon: Sofa,
    title: "Interior, Exterior & Furniture",
    subtitle: "Every finishing detail that transforms a shell into a space you love.",
    description:
      "Paint, décor, custom-made furniture, exterior upgrades and finishing details that make a space feel complete and personal. From concept to installation, we handle every element that transforms a bare shell into a welcoming home or professional environment. All furniture is built to your specification and the site's exact dimensions.",
    features: [
      "Custom furniture design and build",
      "Interior paint selection and application",
      "Ceiling finishes, cornices and accent features",
      "Exterior cladding, paint and facade upgrades",
      "Concept-to-installation project management"
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    range: "Concept to installation"
  },
  {
    id: "management",
    icon: ClipboardCheck,
    title: "Project Management",
    subtitle: "Your trusted eyes on site — budget, schedule and quality in one weekly report.",
    description:
      "Planning, procurement, contractor coordination, photo progress updates and quality checks for local and diaspora clients. We act as your trusted representative on site, ensuring budgets are respected, timelines are met and finishing standards are maintained. Ideal for clients who cannot be on site daily but will not compromise on quality.",
    features: [
      "Weekly photo and video progress reports",
      "Contractor vetting and daily site oversight",
      "Budget tracking and procurement management",
      "Quality inspections and punch-list sign-off",
      "Dedicated client communication channel"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    range: "Weekly reporting available"
  }
];

export const projects = [
  {
    title: "Modern Family Residence",
    category: "Residential",
    location: "Buea",
    year: "2026",
    scope: "Construction, exterior finishing, paint",
    image: "/Images/Building Construction/IMG-20260708-WA0430.webp"
  },
  {
    title: "Community Church Hall",
    category: "Church",
    location: "Limbe",
    year: "2025",
    scope: "Structure, roofing, stage, interior finishing",
    image: "/Images/Church Buildings/IMG-20260708-WA0400.webp"
  },
  {
    title: "Commercial Shopfront Fit-Out",
    category: "Commercial",
    location: "Douala",
    year: "2025",
    scope: "Space planning, renovation, painting",
    image: ""
  },
  {
    title: "Before & After Apartment Upgrade",
    category: "Renovation",
    location: "Yaounde",
    year: "2024",
    scope: "Remodeling, kitchen, ceiling, finishes",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Twin-Unit Villa Complex",
    category: "Residential",
    location: "Bamenda",
    year: "2024",
    scope: "Foundation, structure, exterior finish, landscaping",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Office Block Interior Fit-Out",
    category: "Commercial",
    location: "Yaounde",
    year: "2025",
    scope: "Partitions, ceiling, flooring, electrical",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Pentecostal Assembly Hall",
    category: "Church",
    location: "Buea",
    year: "2024",
    scope: "Full church build, stage, lighting and sound provisions",
    image: "https://images.unsplash.com/photo-1537041421496-d5a7dac58c08?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Luxury Apartment Interior",
    category: "Interior",
    location: "Douala",
    year: "2025",
    scope: "Custom furniture, paint, ceiling, kitchen refit",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
  }
];

export const testimonials = [
  {
    name: "Pastor M. T.",
    role: "Church project client, Limbe",
    quote:
      "Firm Ant explained every stage, corrected site issues early and delivered a clean finish our members are proud of."
  },
  {
    name: "Eunice N.",
    role: "Diaspora homeowner",
    quote:
      "The photo updates and budget clarity made it possible to manage my Buea project while abroad."
  },
  {
    name: "Alain F.",
    role: "Commercial renovation client",
    quote:
      "They fixed poor finishing from a previous contractor and reopened our shop faster than expected."
  }
];

export const resources = [
  "How to choose a trustworthy contractor in Cameroon",
  "What affects construction cost in Buea and Limbe",
  "Renovation checklist before buying materials",
  "How diaspora clients can monitor projects remotely"
];

/** Team members — update with real data when available */
export const team = [
  { name: "Emmanuel Tabi", role: "Founder & Managing Director", initials: "ET", color: "bg-brand" },
  { name: "Grace Nkeng", role: "Project Manager", initials: "GN", color: "bg-graphite" },
  { name: "Bernard Afe", role: "Senior Site Supervisor", initials: "BA", color: "bg-brand" },
  { name: "Sylvie Mboua", role: "Interior & Design Lead", initials: "SM", color: "bg-graphite" },
  { name: "Patrick Njong", role: "Procurement Officer", initials: "PN", color: "bg-brand" },
  { name: "Amina Yusuf", role: "Client Relations", initials: "AY", color: "bg-graphite" }
];

export const brandValues = [
  {
    title: "Transparency",
    description:
      "Every quote is itemized. Every cost change is communicated before it happens. No surprises at handover."
  },
  {
    title: "Quality",
    description:
      "Verified materials, skilled craftsmen and a punch-list process that does not cut corners on the final finish."
  },
  {
    title: "Accountability",
    description:
      "Photo updates, timeline tracking and a dedicated point of contact — whether you are local or abroad."
  }
];

export const certifications = [
  "Registered with Ministry of Public Works, Cameroon",
  "Business registration & tax clearance",
  "Site safety compliance",
  "Member — Cameroon Contractors Network"
];

export const workingHours = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];
