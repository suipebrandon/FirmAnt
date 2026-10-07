export type ProjectCategory =
  | "All"
  | "Residential"
  | "Church"
  | "Commercial"
  | "Renovation"
  | "Interior"
  | "Roofing"
  | "3D Design";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  location: string;
  year: string;
}

const buildingConstruction = [
  { file: "/Images/Building Construction/IMG-20260708-WA0310.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0311.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0312.webp", loc: "Limbe", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0313.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0314.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0315.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0320.webp", loc: "Douala", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0321.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0322.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0324.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0325.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0327.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0328.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0335.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0338.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0344.webp", loc: "Douala", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0345.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0350.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0392.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0393.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0394.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0396.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0397.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0402.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0403.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0422.webp", loc: "Douala", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0423.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0425.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0430.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0432.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Building Construction/IMG-20260708-WA0435.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0437.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0439.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0441.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0442.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0444.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0475.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0481.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Building Construction/IMG-20260708-WA0493.webp", loc: "Buea", year: "2026" },
  // Commercial projects from Building Construction
  { file: "/Images/Building Construction/IMG-20260708-WA0288.webp", loc: "Douala", year: "2025", cat: "Commercial" },
];

const churchImages = [
  { file: "/Images/Church Buildings/642787942_122124093219060472_3357131735184768251_n.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0363.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0364.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0365.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0366.webp", loc: "Buea", year: "2024" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0367.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0368.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0370.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0371.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0375.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0377.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0379.webp", loc: "Buea", year: "2024" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0382.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0400.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0410.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0411.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0412.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0414.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0415.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0427.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0451.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0469.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Church Buildings/IMG-20260708-WA0495.webp", loc: "Buea", year: "2025" },
];

const officeImages = [
  { file: "/Images/offices/IMG-20260708-WA0267.webp", loc: "Douala", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0269.webp", loc: "Douala", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0446.webp", loc: "Douala", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0449.webp", loc: "Douala", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0453.webp", loc: "Douala", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0456.webp", loc: "Yaounde", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0457.webp", loc: "Yaounde", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0458.webp", loc: "Douala", year: "2025" },
  { file: "/Images/offices/IMG-20260708-WA0459.webp", loc: "Yaounde", year: "2025" },
];

const renovationImages = [
  { file: "/Images/Renovations/IMG-20260708-WA0275.webp", loc: "Buea", year: "2024" },
  { file: "/Images/Renovations/IMG-20260708-WA0276.webp", loc: "Buea", year: "2024" },
  { file: "/Images/Renovations/IMG-20260708-WA0282.webp", loc: "Limbe", year: "2024" },
  { file: "/Images/Renovations/IMG-20260708-WA0287.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Renovations/IMG-20260708-WA0341.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Renovations/IMG-20260708-WA0342.webp", loc: "Limbe", year: "2024" },
  { file: "/Images/Renovations/IMG-20260708-WA0357.webp", loc: "Buea", year: "2024" },
  { file: "/Images/Renovations/IMG-20260708-WA0359.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Renovations/IMG-20260708-WA0467.webp", loc: "Buea", year: "2024" },
];

const interiorImages = [
  { file: "/Images/Interior Design/IMG-20260708-WA0277.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0286.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0289.webp", loc: "Douala", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0301.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0302.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0316.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0317.webp", loc: "Douala", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0323.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0326.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0330.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0332.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0333.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0334.webp", loc: "Douala", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0337.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0339.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0340.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0347.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0360.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0361.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0362.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0455.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0473.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0477.webp", loc: "Buea", year: "2026" },
  { file: "/Images/Interior Design/IMG-20260708-WA0486.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0487.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0488.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0489.webp", loc: "Douala", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0490.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0496.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0497.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0498.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Interior Design/IMG-20260708-WA0499.webp", loc: "Buea", year: "2025" },
];

const paintingImages = [
  { file: "/Images/Painting/613020802_122118578979060472_2699318976548416572_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/613632768_122118578961060472_6954985293398792166_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/616848655_122120477775060472_6915948750010763239_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/617039395_122120477799060472_498866456241769518_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/617127403_122120477763060472_2616002527393643803_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/617574953_122120477787060472_4541978532778151193_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/621810480_122120477403060472_3231692492885189232_n.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Painting/IMG-20260708-WA0271.webp", loc: "Buea", year: "2025" },
];

const roofingImages = [
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0319.webp", loc: "Limbe", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0460.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0461.webp", loc: "Buea", year: "2025" },
];

const furnitureImages = [
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0273.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0278.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0279.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0290.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0292.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0297.webp", loc: "Buea", year: "2025" },
  { file: "/Images/Roofing Capentry/IMG-20260708-WA0353.webp", loc: "Buea", year: "2025" },
];

const threeDImages = [
  { file: "/Images/3D Designs/IMG-20260708-WA0304.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0305.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0306.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0307.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0308.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0309.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0404.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0405.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0406.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0407.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0408.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0409.webp", loc: "Buea", year: "2026" },
  { file: "/Images/3D Designs/IMG-20260708-WA0416.webp", loc: "Buea", year: "2026" },
];

/** Helper to create a ProjectItem with a derived title */
function toProjectItem(
  src: { file: string; loc: string; year: string; cat?: string },
  category: ProjectCategory,
  index: number
): ProjectItem {
  const cat = (src.cat ?? category) as Exclude<ProjectCategory, "All">;
  const fileName = src.file.split("/").pop() ?? "";
  const projectLabels: Record<Exclude<ProjectCategory, "All">, string> = {
    Residential: "Residential Construction & Finishing",
    Church: "Church Construction & Interior Finishing",
    Commercial: "Commercial Construction & Fit-Out",
    Renovation: "Interior Renovation & Finishing",
    Interior: "Interior Design & Finishing",
    Roofing: "Roof Construction & Installation",
    "3D Design": "Architectural 3D Visualization",
  };
  const imageTitles: Record<string, string> = {
    "642787942_122124093219060472_3357131735184768251_n.webp": "Church Sanctuary Altar",
    "IMG-20260708-WA0363.webp": "Sanctuary Platform Finishing",
    "IMG-20260708-WA0364.webp": "Sanctuary Wall Construction",
    "IMG-20260708-WA0365.webp": "Church Interior Construction",
    "IMG-20260708-WA0366.webp": "Church Hall Seating",
    "IMG-20260708-WA0367.webp": "Church Interior Passage",
    "IMG-20260708-WA0368.webp": "Church Hallway Construction",
    "IMG-20260708-WA0370.webp": "Church Sanctuary and Seating",
    "IMG-20260708-WA0371.webp": "Church Entrance Gate",
    "IMG-20260708-WA0375.webp": "Sanctuary Ceiling and Lighting",
    "IMG-20260708-WA0377.webp": "Church Sanctuary Seating",
    "IMG-20260708-WA0379.webp": "Sanctuary Ceiling Finishing",
    "IMG-20260708-WA0382.webp": "Church Interior Finishing",
    "IMG-20260708-WA0400.webp": "Completed Church Sanctuary",
    "IMG-20260708-WA0410.webp": "Church Roof Structure",
    "IMG-20260708-WA0411.webp": "Church Hall Seating and Ceiling",
    "IMG-20260708-WA0412.webp": "Church Interior Ceiling Finish",
    "IMG-20260708-WA0414.webp": "Church Building Under Construction",
    "IMG-20260708-WA0415.webp": "Church Exterior Construction",
    "IMG-20260708-WA0427.webp": "Church Sanctuary Interior",
    "IMG-20260708-WA0451.webp": "Sanctuary Altar Wall Finishing",
    "IMG-20260708-WA0469.webp": "Church Hall Ceiling and Seating",
    "IMG-20260708-WA0495.webp": "Church Interior Wall Finishing",
  };
  const projectDescriptions: Record<Exclude<ProjectCategory, "All">, string> = {
    Residential: "Residential building construction or finishing work photographed in",
    Church: "Church construction, interior or finishing work photographed in",
    Commercial: "Commercial building or office fit-out work photographed in",
    Renovation: "Interior renovation and property improvement work photographed in",
    Interior: "Interior finishing, painting or furniture work photographed in",
    Roofing: "Roof installation or roof construction work photographed in",
    "3D Design": "Architectural visualization or 3D building concept rendered for",
  };
  const title = imageTitles[fileName] ?? projectLabels[cat];
  const desc = `${projectDescriptions[cat]} ${src.loc}.`;

  return {
    id: `${cat.toLowerCase().replace(/\s+/g, "-")}-${index}-${fileName}`,
    title,
    description: desc,
    image: src.file,
    category: cat,
    location: src.loc,
    year: src.year,
  };
}

/** Build residential projects from Building Construction (excluding commercial-tagged) */
function buildResidential(): ProjectItem[] {
  const residential = buildingConstruction.filter((s) => !s.cat || s.cat !== "Commercial");
  return residential.map((s, i) => toProjectItem(s, "Residential", i));
}

function buildChurch(): ProjectItem[] {
  return churchImages.map((s, i) => toProjectItem(s, "Church", i));
}

function buildCommercial(): ProjectItem[] {
  // offices + commercial-tagged from Building Construction
  const commercialBC = buildingConstruction.filter((s) => s.cat === "Commercial");
  const all = [...officeImages.map((s) => ({ ...s, cat: "Commercial" as const })), ...commercialBC.map((s) => ({ ...s, cat: "Commercial" as const }))];
  return all.map((s, i) => toProjectItem(s, "Commercial", i));
}

function buildRenovation(): ProjectItem[] {
  return renovationImages.map((s, i) => toProjectItem(s, "Renovation", i));
}

function buildInterior(): ProjectItem[] {
  const all = [
    ...interiorImages.map((s) => ({ ...s, cat: "Interior" as const })),
    ...paintingImages.map((s) => ({ ...s, cat: "Interior" as const })),
    ...furnitureImages.map((s) => ({ ...s, cat: "Interior" as const })),
  ];
  return all.map((s, i) => toProjectItem(s, "Interior", i));
}

function buildRoofing(): ProjectItem[] {
  return roofingImages.map((s, i) => toProjectItem(s, "Roofing", i));
}

function buildThreeD(): ProjectItem[] {
  return threeDImages.map((s, i) => toProjectItem(s, "3D Design", i));
}

// Build all category project lists
export const residentialProjects = buildResidential();
export const churchProjects = buildChurch();
export const commercialProjects = buildCommercial();
export const renovationProjects = buildRenovation();
export const interiorProjects = buildInterior();
export const roofingProjects = buildRoofing();
export const threeDProjects = buildThreeD();

/** All projects grouped */
export const allProjects: Record<Exclude<ProjectCategory, "All">, ProjectItem[]> = {
  Residential: residentialProjects,
  Church: churchProjects,
  Commercial: commercialProjects,
  Renovation: renovationProjects,
  Interior: interiorProjects,
  Roofing: roofingProjects,
  "3D Design": threeDProjects,
};

/** Build "All" — curated mix of 1-2 best from each category */
function buildAll(): ProjectItem[] {
  const result: ProjectItem[] = [];
  const cats: Exclude<ProjectCategory, "All">[] = [
    "Residential", "Church", "Commercial", "Renovation", "Interior", "Roofing", "3D Design",
  ];
  for (const cat of cats) {
    const items = allProjects[cat];
    // Take first 2 from each category
    const picks = items.slice(0, Math.min(2, items.length));
    result.push(...picks);
  }
  return result;
}

export const allCategoryProjects = buildAll();

/** All available categories */
export const filterCategories: ProjectCategory[] = [
  "All",
  "Residential",
  "Church",
  "Commercial",
  "Renovation",
  "Interior",
  "Roofing",
  "3D Design",
];

/** Get projects by category */
export function getProjectsByCategory(category: ProjectCategory): ProjectItem[] {
  if (category === "All") return allCategoryProjects;
  return allProjects[category] ?? [];
}