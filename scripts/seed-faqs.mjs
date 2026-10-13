import { randomUUID } from "node:crypto";
import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Set a Sanity project ID, dataset, and SANITY_API_WRITE_TOKEN before seeding FAQs.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion:
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ??
    process.env.SANITY_API_VERSION ??
    "2026-10-13",
  token,
  useCdn: false,
});

const faqs = [
  {
    question: "How can I purchase land through FirmAnt?",
    answer:
      "Start by contacting FirmAnt with your preferred area, approximate plot size, intended use, and budget. The team can discuss available information and help you understand possible next steps. Before committing, review the plot and its documents and arrange appropriate independent checks. If you decide to proceed, agree the terms and document the transaction with the relevant parties. Plot availability and the specific assistance FirmAnt can provide should be confirmed directly.",
    category: "land",
  },
  {
    question: "How do I verify the ownership and legal status of a plot before buying?",
    answer:
      "Do not rely on a seller's assurances alone. Have the ownership and title documents checked against the relevant records, confirm that the person selling has authority to do so, and verify the plot's boundaries on site. A qualified local lawyer and, where appropriate, a licensed surveyor or relevant land authority can advise on the checks needed for the specific plot. Complete these checks before paying or signing binding documents.",
    category: "land",
  },
  {
    question: "What factors determine the price of land?",
    answer:
      "Land value can be influenced by its location and access, plot size and shape, the clarity and completeness of its documentation, and the availability of utilities such as water and electricity. Nearby amenities, current development, terrain, and the site's potential for your intended use can also affect the asking price. Compare similar plots and include any verification or site-preparation costs in your budget.",
    category: "land",
  },
  {
    question: "Can FirmAnt build a house from foundation to roofing?",
    answer:
      "FirmAnt provides construction services that may cover site preparation, foundations, structural work, walls, and roofing. The exact stages, responsibilities, materials, and handover point depend on the design and the scope agreed for your project. Discuss your drawings and requirements with the team so the proposed work is clearly defined before it begins.",
    category: "construction",
  },
  {
    question: "How do I get a quotation for my building project?",
    answer:
      "Contact FirmAnt to discuss the site, the building's intended use and size, and your budget. Drawings, specifications, preferred materials, and finish levels help clarify what is included. The team can then review the information and discuss a project-specific estimate and any details that still need confirmation. The final scope and estimate should be agreed before work starts.",
    category: "construction",
  },
  {
    question: "How long does it take to complete a house construction project?",
    answer:
      "There is no single timeline for every house. Duration depends on the building's size and design complexity, site conditions, the agreed scope, material availability, weather, and any required approvals. Once the project details have been reviewed, ask FirmAnt to provide a schedule for that specific scope and to explain the factors that could affect it.",
    category: "construction",
  },
  {
    question: "Can I customize my house design to suit my needs and budget?",
    answer:
      "A house design can be discussed around how you plan to use the space, your preferred layout, and your budget. Choices such as room sizes, materials, finishes, and specifications can be reviewed together to help align the proposal with your priorities. The available design support and any resulting cost or scope changes should be confirmed with FirmAnt before approval.",
    category: "design-interiors",
  },
  {
    question: "Does FirmAnt provide interior design services?",
    answer:
      "Interior design may include space planning, colour schemes, lighting, finishes, and coordinating the look of a room or property. The precise services available can depend on your project and current scope. Contact FirmAnt with the spaces you want to work on and ask the team to confirm which design services it can provide.",
    category: "design-interiors",
  },
  {
    question: "Can FirmAnt supply or customize furniture for my home or office?",
    answer:
      "Furniture choices can be coordinated with your room layout and interior style, including decisions about design, dimensions, and materials. Whether FirmAnt can supply, customize, or install a particular item depends on current service availability and the agreed project scope. Share your requirements with the team to confirm suitable options before making plans.",
    category: "design-interiors",
  },
  {
    question: "How can I get started with FirmAnt or request a consultation?",
    answer:
      "Use the contact form on the FirmAnt website to describe your project, location, preferred timing, and any drawings or other details you already have. You can also use the contact information listed on the Contact page. The team can review your enquiry and confirm the appropriate next step.",
    category: "getting-started",
  },
];

const existingQuestions = await client.fetch(
  '*[_type == "faq"]{question}',
  {},
  { perspective: "raw" },
);
const existing = new Set(existingQuestions.map(({ question }) => question));
const missingFaqs = faqs.filter(({ question }) => !existing.has(question));

if (missingFaqs.length === 0) {
  console.log("All 10 starter FAQs already exist; no documents were created.");
} else {
  await Promise.all(
    missingFaqs.map((faq) =>
      client.create({
        _id: `drafts.${randomUUID()}`,
        _type: "faq",
        ...faq,
        displayOrder: faqs.findIndex(({ question }) => question === faq.question) + 1,
        showOnHomepage: true,
      }),
    ),
  );
  console.log(
    `Created ${missingFaqs.length} FAQ draft${missingFaqs.length === 1 ? "" : "s"}. Review and publish them in Sanity Studio.`,
  );
}
