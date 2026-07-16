import { type ImageKey } from "@/lib/images";

export type ProjectCategory =
  | "Shingle"
  | "Metal"
  | "Tile"
  | "Flat / Commercial"
  | "Storm Restoration";

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Shingle",
  "Metal",
  "Tile",
  "Flat / Commercial",
  "Storm Restoration",
];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  meta: string;
  image: ImageKey;
};

/** Project grid — completed Denver-metro jobs. */
export const projects: Project[] = [
  { slug: "applewood-two-story", title: "Applewood Two-Story", category: "Shingle", meta: "Wheat Ridge · 2026", image: "homeSuburbanDusk" },
  { slug: "table-mountain-farmhouse", title: "Table Mountain Farmhouse", category: "Metal", meta: "Golden · 2026", image: "homeMetalRoof" },
  { slug: "green-mountain-hail-recovery", title: "Green Mountain Hail Recovery", category: "Storm Restoration", meta: "Lakewood · 2026", image: "roofRepairCrew" },
  { slug: "lakewood-marketplace", title: "Lakewood Marketplace", category: "Flat / Commercial", meta: "Lakewood · 2025", image: "commercialBuilding" },
  { slug: "villa-del-sol", title: "Villa del Sol", category: "Tile", meta: "Denver · 2025", image: "tileRoofCloseup" },
  { slug: "berkeley-park-tudor", title: "Berkeley Park Tudor", category: "Shingle", meta: "Denver · 2025", image: "homeBrickNew" },
  { slug: "coal-creek-barn", title: "Coal Creek Barn & Workshop", category: "Metal", meta: "Arvada · 2025", image: "homeModernMetal" },
  { slug: "hyland-hills-ranch", title: "Hyland Hills Ranch", category: "Storm Restoration", meta: "Westminster · 2024", image: "homeBrickAged" },
  { slug: "olde-town-commons", title: "Olde Town Commons", category: "Flat / Commercial", meta: "Arvada · 2024", image: "commercialTowers" },
];

/** Featured trio on the homepage. */
export const featuredProjects = [
  { slug: "applewood-two-story", title: "Applewood Two-Story", meta: "Architectural shingle · Wheat Ridge", image: "homeSuburbanDusk" as ImageKey },
  { slug: "table-mountain-farmhouse", title: "Table Mountain Farmhouse", meta: "Standing-seam metal · Golden", image: "homeMetalRoof" as ImageKey },
  { slug: "lakewood-marketplace", title: "Lakewood Marketplace", meta: "Commercial TPO · Lakewood", image: "commercialBuilding" as ImageKey },
];

/** The project-detail template data (rendered for each project slug). */
export const projectDetail = {
  slug: "table-mountain-farmhouse",
  title: "Table Mountain Farmhouse — a 40-year roof on a 1970s home",
  tags: ["Standing-Seam Metal", "Residential"],
  story: [
    "The Mahers came to us after the third repair bid on their 1974 farmhouse below North Table Mountain. Two decades of Front Range hail and UV had worn the original cedar shake through to the felt, and patching was money down the drain. Our inspection found four compromised decking sheets, no ice & water shield at the eaves, and ventilation running at about half of what the attic needed.",
    "We tore off two layers down to the deck, replaced the damaged sheathing, and installed a 24-gauge standing-seam system in Charcoal Gray with concealed fasteners, new ridge ventilation, and snow guards over the entry. Golden's permit office signed off mid-week; the whole job — tear-off to magnetic sweep — took our crew two days, working around the family's horses in the adjacent paddock.",
  ],
  quote:
    "The crew treated our place like their own — plywood over the garden beds, magnet sweep twice a day, and the foreman texted us photos at every stage. The roof is stunning and we'll never think about hail again.",
  quoteBy: "— Susan & Greg Maher, Golden",
  facts: [
    { label: "Location", value: "Golden, CO" },
    { label: "Roof type", value: "Standing-seam metal" },
    { label: "Roof size", value: "34 squares" },
    { label: "Duration", value: "2 days" },
    { label: "Color / finish", value: "Charcoal Gray" },
    { label: "Warranty", value: "15-yr workmanship + 40-yr material" },
    { label: "Completed", value: "October 2025" },
  ],
  hero: "homeMetalRoof" as ImageKey,
  gallery: [
    { image: "homeModernEvening" as ImageKey, label: "Wide shot — finished roofline", span: true },
    { image: "workerMetalPanels" as ImageKey, label: "Seam detail" },
    { image: "crewTimberFraming" as ImageKey, label: "Crew at work" },
    { image: "rooferOnShingles" as ImageKey, label: "Flashing detail" },
    { image: "homeModernMetal" as ImageKey, label: "Ridge vent detail" },
  ],
  related: [
    { slug: "applewood-two-story", title: "Applewood Two-Story", meta: "Shingle · Wheat Ridge", image: "homeSuburbanDusk2" as ImageKey },
    { slug: "green-mountain-hail-recovery", title: "Green Mountain Hail Recovery", meta: "Storm restoration · Lakewood", image: "roofRepairCrew" as ImageKey },
    { slug: "lakewood-marketplace", title: "Lakewood Marketplace", meta: "Commercial TPO · Lakewood", image: "commercialBuilding" as ImageKey },
  ],
};
