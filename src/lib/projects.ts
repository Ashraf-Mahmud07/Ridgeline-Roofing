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

export type ProjectDetail = {
  slug: string;
  title: string;
  /** One-line meta description for SEO. */
  summary: string;
  tags: string[];
  story: string[];
  quote: string;
  quoteBy: string;
  facts: { label: string; value: string }[];
  hero: ImageKey;
  gallery: { image: ImageKey; label: string; span?: boolean }[];
  before: ImageKey;
  after: ImageKey;
};

export const projectDetails: Record<string, ProjectDetail> = {
  "applewood-two-story": {
    slug: "applewood-two-story",
    title: "Applewood Two-Story — a Class 4 upgrade that pays for itself",
    summary:
      "A 1998 two-story in Wheat Ridge re-roofed in one day with Class 4 impact-rated shingles — HOA approval handled, insurance premium down 14%.",
    tags: ["Architectural Shingle", "Residential"],
    story: [
      "The Okonkwos' 1998 two-story in Applewood still had its original three-tab shingles — brittle, curling at the south-facing edges, and one hailstorm away from a claim. They didn't want to wait for that storm. Our inspection confirmed the decking was sound, which meant the whole budget could go into the system itself rather than repairs.",
      "We tore off to the deck and installed Class 4 impact-rated architectural shingles in Weathered Wood, with new ice & water shield, synthetic underlayment, and a continuous ridge vent to fix the attic's chronic summer heat. We prepared the HOA color-board submission ourselves — approved in four days — and their insurer confirmed a 14% premium discount for the impact rating. Tear-off to magnetic sweep took one day.",
    ],
    quote:
      "One day. They started at seven, and by dinner the roof was done, the yard was spotless, and the paperwork for our insurance discount was already in my inbox.",
    quoteBy: "— Chidi & Amara Okonkwo, Wheat Ridge",
    facts: [
      { label: "Location", value: "Wheat Ridge, CO" },
      { label: "Roof type", value: "Class 4 architectural shingle" },
      { label: "Roof size", value: "26 squares" },
      { label: "Duration", value: "1 day" },
      { label: "Color / finish", value: "Weathered Wood" },
      { label: "Warranty", value: "15-yr workmanship + 50-yr material" },
      { label: "Completed", value: "March 2026" },
    ],
    hero: "homeSuburbanDusk",
    gallery: [
      { image: "homeSuburbanDusk2", label: "Finished elevation at dusk", span: true },
      { image: "roofConstructionAerial", label: "Deck inspection after tear-off" },
      { image: "rooferOnShingles", label: "Field shingle installation" },
      { image: "crewTimberFraming", label: "Ridge vent preparation" },
      { image: "homeTraditional", label: "New gutters and drip edge" },
    ],
    before: "homeBrickAged",
    after: "homeSuburbanDusk2",
  },
  "table-mountain-farmhouse": {
    slug: "table-mountain-farmhouse",
    title: "Table Mountain Farmhouse — a 40-year roof on a 1970s home",
    summary:
      "A 1974 Golden farmhouse re-roofed in standing-seam metal: 34 squares, two days, snow guards, ridge ventilation, and a 40-year finish warranty.",
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
    hero: "homeMetalRoof",
    gallery: [
      { image: "homeModernEvening", label: "Finished elevation at dusk", span: true },
      { image: "homeMetalRoof", label: "Standing-seam panels and porch line" },
      { image: "crewTimberFraming", label: "Crew during structural checks" },
      { image: "roofConstructionAerial", label: "Deck preparation from above" },
      { image: "rooferOnShingles", label: "Detail work at the ridge" },
    ],
    before: "roofRepairCrew",
    after: "homeMetalRoof",
  },
  "green-mountain-hail-recovery": {
    slug: "green-mountain-hail-recovery",
    title: "Green Mountain Hail Recovery — from tarp to new roof in nine days",
    summary:
      "June hailstorm damage in Lakewood: same-day tarping, full claim documentation, an on-roof adjuster meeting, and a Class 4 re-roof nine days later.",
    tags: ["Storm Restoration", "Insurance Claim"],
    story: [
      "The June 12 storm dropped golf-ball hail across Green Mountain for eleven minutes. The Reinharts called at 7:40 the next morning; our crew had their two active leaks tarped by noon. The inspection that followed documented 40+ impact bruises per test square, cracked pipe boots, and dented gutters on all four elevations — everything photographed, measured, and packaged for their insurer before they filed.",
      "Luis met the adjuster on the roof eight days later and walked the documentation slope by slope; the approved scope matched ours line for line, including gutters the initial desk review had missed. We replaced the roof with Class 4 impact-rated shingles in Charcoal — so the next June storm is the insurer's last problem, not the Reinharts'.",
    ],
    quote:
      "They tarped us the same morning we called, and when the adjuster came, Ridgeline's inspector was already on the roof with photos of everything. The claim was approved in one pass.",
    quoteBy: "— Paul & Kristen Reinhart, Lakewood",
    facts: [
      { label: "Location", value: "Lakewood, CO" },
      { label: "Roof type", value: "Class 4 architectural shingle" },
      { label: "Roof size", value: "29 squares" },
      { label: "Duration", value: "9 days, storm to completion" },
      { label: "Color / finish", value: "Charcoal" },
      { label: "Warranty", value: "15-yr workmanship + 50-yr material" },
      { label: "Completed", value: "June 2026" },
    ],
    hero: "roofRepairCrew",
    gallery: [
      { image: "stormLightningField", label: "The June 12 storm cell", span: true },
      { image: "roofRepairCrew", label: "Damage assessment on the south slope" },
      { image: "writingPlans", label: "Claim documentation package" },
      { image: "roofConstructionAerial", label: "Re-roof underway" },
      { image: "homeGrayLawn", label: "Completed and claim-closed" },
    ],
    before: "homeBrickAged",
    after: "homeGrayLawn",
  },
  "lakewood-marketplace": {
    slug: "lakewood-marketplace",
    title: "Lakewood Marketplace — 41,000 sq ft of TPO over two weekends",
    summary:
      "A retail plaza re-roofed in 60-mil TPO across two weekends with zero tenant disruption — now on a twice-yearly maintenance program.",
    tags: ["Commercial TPO", "Retail"],
    story: [
      "Lakewood Marketplace is nine tenants under one 41,000 sq ft low-slope roof — a restaurant, a daycare, and seven retailers, none of whom could close for roofing. The aging EPDM was past coating candidacy: seams were letting go and two ponding areas had saturated the insulation beneath. Property manager Carol Jimenez needed the replacement invisible to her tenants.",
      "We sequenced the job across two weekends: tear-off and dry-in over the north wing the first, the south wing the second, with staging cleared and the lot fully open every Monday at 6am. The new 60-mil heat-welded TPO added R-20 polyiso insulation, new tapered crickets to kill the ponding, and reflective white membrane that cut summer cooling loads. The plaza's now on our twice-yearly maintenance program.",
    ],
    quote:
      "They re-roofed our retail plaza over two weekends without a single tenant complaint. The photo reports made my owner meetings easy.",
    quoteBy: "— Carol Jimenez, Property Manager, Lakewood",
    facts: [
      { label: "Location", value: "Lakewood, CO" },
      { label: "Roof type", value: "60-mil TPO, mechanically fastened" },
      { label: "Roof size", value: "41,000 sq ft" },
      { label: "Duration", value: "2 weekends" },
      { label: "Insulation", value: "R-20 polyiso + tapered crickets" },
      { label: "Warranty", value: "20-yr membrane + 15-yr workmanship" },
      { label: "Completed", value: "September 2025" },
    ],
    hero: "commercialBuilding",
    gallery: [
      { image: "commercialBuilding", label: "The plaza after completion", span: true },
      { image: "contractorsReviewingPlans", label: "Sequencing plan with the PM" },
      { image: "constructionWorkersStructure", label: "Weekend crew on the north wing" },
      { image: "commercialTowers", label: "Parapet and edge detail" },
      { image: "multiFamilyBuilding", label: "Adjacent phase, same program" },
    ],
    before: "commercialTowers",
    after: "commercialBuilding",
  },
  "villa-del-sol": {
    slug: "villa-del-sol",
    title: "Villa del Sol — restoring a 1927 clay tile roof, tile by tile",
    summary:
      "A 1927 Mediterranean revival in Denver: original clay field tiles salvaged and relaid over a modern waterproofing system, with 96-year-old character intact.",
    tags: ["Clay Tile", "Historic Residential"],
    story: [
      "Villa del Sol is a 1927 Mediterranean revival in Denver's Country Club neighborhood, and its clay tile roof is original — which is exactly why the owners refused a tear-off-and-replace bid that would have sent 96-year-old tile to a landfill. The tiles themselves were mostly sound; the underlayment beneath them, installed when Coolidge was president, was not.",
      "Our crew lifted and palletized the field tiles by hand, replaced the underlayment with a modern two-layer self-adhered system, re-flashed the chimneys and valleys in copper, and relaid the original tile — swapping cracked pieces with color-matched salvage stock from the same era. From the street, nothing changed. Underneath, the roof is watertight for another half-century.",
    ],
    quote:
      "Every other contractor wanted to rip off our original tile and sell us something new. Ridgeline saved it — and the copper valleys are so beautiful I almost wish they showed more.",
    quoteBy: "— Elena Vasquez-Moreno, Denver",
    facts: [
      { label: "Location", value: "Denver, CO (Country Club)" },
      { label: "Roof type", value: "Original clay tile, relaid" },
      { label: "Roof size", value: "31 squares" },
      { label: "Duration", value: "8 days" },
      { label: "Flashing", value: "16-oz copper, valleys & chimneys" },
      { label: "Warranty", value: "15-yr workmanship on system" },
      { label: "Completed", value: "July 2025" },
    ],
    hero: "tileRoofCloseup",
    gallery: [
      { image: "tileRoofCloseup", label: "Original 1927 field tile, relaid", span: true },
      { image: "crewTimberFraming", label: "Underlayment replacement" },
      { image: "sketchingPlans", label: "Salvage-tile mapping plan" },
      { image: "homeVillaModern", label: "South elevation on completion" },
      { image: "contractorsReviewingPlans", label: "Final walkthrough" },
    ],
    before: "tileRoofCloseup",
    after: "homeVillaModern",
  },
  "berkeley-park-tudor": {
    slug: "berkeley-park-tudor",
    title: "Berkeley Park Tudor — designer shingles on a 12/12 pitch",
    summary:
      "A 1930s Denver Tudor with a steep 12/12 pitch, re-roofed in designer architectural shingles that read like slate — scaffolded, harnessed, done in three days.",
    tags: ["Designer Shingle", "Residential"],
    story: [
      "Tudors are all roof — on the Hendersons' 1930s Berkeley Park home, the steep 12/12 gables are most of what you see from the street, and the faded builder-grade shingles from a 2004 re-roof were flattening the whole facade. They wanted the look of slate without the structural work slate's weight demands.",
      "We spec'd a designer architectural shingle in Antique Slate — deep shadow lines, staggered edges — over new synthetic underlayment and open metal valleys. A 12/12 pitch means full scaffolding, roof jacks, and harnessed crews moving slowly, so we planned three days and took three days. The copper-toned drip edge was Mrs. Henderson's pick, and she was right.",
    ],
    quote:
      "Neighbors keep asking if we put on real slate. It transformed the house — the roof went from something you ignore to the best thing about the street view.",
    quoteBy: "— James & Nora Henderson, Denver",
    facts: [
      { label: "Location", value: "Denver, CO (Berkeley)" },
      { label: "Roof type", value: "Designer architectural shingle" },
      { label: "Roof size", value: "24 squares" },
      { label: "Duration", value: "3 days" },
      { label: "Color / finish", value: "Antique Slate" },
      { label: "Warranty", value: "15-yr workmanship + 50-yr material" },
      { label: "Completed", value: "May 2025" },
    ],
    hero: "homeBrickNew",
    gallery: [
      { image: "homeBrickNew", label: "Street elevation on completion", span: true },
      { image: "rooferOnShingles", label: "Harnessed work on the 12/12 pitch" },
      { image: "homeBrickClassic", label: "Gable and valley detail" },
      { image: "crewTimberFraming", label: "Scaffold staging, day one" },
      { image: "homeBrickClassic2", label: "Rear elevation" },
    ],
    before: "homeBrickAged",
    after: "homeBrickNew",
  },
  "coal-creek-barn": {
    slug: "coal-creek-barn",
    title: "Coal Creek Barn & Workshop — ag metal built for 100-mph gusts",
    summary:
      "A 7,200 sq ft barn and workshop near Coal Creek re-roofed in structural standing-seam metal, engineered for chinook winds and hobby-farm budgets.",
    tags: ["Standing-Seam Metal", "Agricultural"],
    story: [
      "The Kaminskis' property backs onto the Coal Creek drainage, where winter chinooks funnel off the foothills at highway speeds — the old exposed-fastener panels on their barn had been working loose for years, and one February gust finally peeled a six-foot section into the paddock. They needed something that would hold, on an agricultural budget.",
      "We replaced both the barn and workshop roofs with mechanically-seamed standing-seam panels rated past 140 mph, on new purlins where the old ones had split. Concealed clips mean no fastener holes through the weather surface — the failure mode that kills ag roofs. Two crews, four days, and the horses only lost access to the paddock for one of them.",
    ],
    quote:
      "The old roof lifted every time the wind came down the creek. This one hasn't made a sound through two chinook seasons — and it looks better than our house.",
    quoteBy: "— Tom & Lucy Kaminski, Arvada",
    facts: [
      { label: "Location", value: "Arvada, CO (Coal Creek)" },
      { label: "Roof type", value: "Mechanical-seam standing-seam metal" },
      { label: "Roof size", value: "7,200 sq ft (barn + workshop)" },
      { label: "Duration", value: "4 days" },
      { label: "Wind rating", value: "140+ mph" },
      { label: "Warranty", value: "15-yr workmanship + 40-yr finish" },
      { label: "Completed", value: "April 2025" },
    ],
    hero: "homeModernMetal",
    gallery: [
      { image: "homeModernMetal", label: "Workshop roofline on completion", span: true },
      { image: "constructionWorkersStructure", label: "Purlin replacement" },
      { image: "crewTimberFraming", label: "Panel staging inside the barn" },
      { image: "homeCabinDusk", label: "Barn elevation at dusk" },
      { image: "homeSunset", label: "The property from the county road" },
    ],
    before: "roofRepairCrew",
    after: "homeModernMetal",
  },
  "hyland-hills-ranch": {
    slug: "hyland-hills-ranch",
    title: "Hyland Hills Ranch — wind claim, low-slope fix, one clean scope",
    summary:
      "A 1962 Westminster ranch with wind damage and a chronically leaking low-slope addition — solved in one insurance-coordinated scope: shingle field plus EPDM.",
    tags: ["Storm Restoration", "Low-Slope Hybrid"],
    story: [
      "The December windstorm stripped shingles off the west field of the Delgados' 1962 ranch near Hyland Hills — but the real story was the family-room addition, a low-slope section some previous roofer had shingled flat against the manufacturer's instructions. It had leaked in every spring thaw for a decade. Wind claims don't usually fix bad old decisions, so the scope had to be built carefully.",
      "We documented the wind damage for the carrier and priced the addition correction separately and honestly — claim money for the storm, a fixed retail price for the fix insurance was never going to owe. The main field got new architectural shingles; the addition got the 60-mil EPDM membrane it always needed, tied into the shingle field with a proper transition flashing. One crew, two days, and the first spring in ten years with a dry family room.",
    ],
    quote:
      "They were straight with us about what insurance would and wouldn't cover, and the price for the rest never moved. The addition finally doesn't leak.",
    quoteBy: "— Ray & Sofia Delgado, Westminster",
    facts: [
      { label: "Location", value: "Westminster, CO" },
      { label: "Roof type", value: "Shingle field + EPDM low-slope" },
      { label: "Roof size", value: "22 squares + 600 sq ft membrane" },
      { label: "Duration", value: "2 days" },
      { label: "Claim scope", value: "Wind damage, carrier-approved" },
      { label: "Warranty", value: "15-yr workmanship, both systems" },
      { label: "Completed", value: "December 2024" },
    ],
    hero: "homeBrickAged",
    gallery: [
      { image: "homeBrickAged", label: "The ranch before replacement", span: true },
      { image: "writingPlans", label: "Split claim / retail scope" },
      { image: "roofConstructionAerial", label: "Field tear-off underway" },
      { image: "homeBeige", label: "Completed elevation" },
      { image: "homeSuburbanBig", label: "Low-slope transition detail" },
    ],
    before: "homeBrickAged",
    after: "homeBeige",
  },
  "olde-town-commons": {
    slug: "olde-town-commons",
    title: "Olde Town Commons — restore half, replace half, save the budget",
    summary:
      "A mixed-use Arvada building where honest assessment split the roof: silicone restoration over the sound section, new EPDM over the failed one — 40% under the replace-everything bid.",
    tags: ["Commercial EPDM", "Roof Coating"],
    story: [
      "Olde Town Commons is retail below, offices above, and 18,000 sq ft of EPDM on top — half of it installed a decade after the other half. The building's board had a replace-everything bid in hand when they called us for a second opinion. Our core cuts told a split story: the newer west section was sound with dry insulation; the older east section was saturated and done.",
      "So we treated them differently. The east half got full replacement — new insulation, new 60-mil EPDM. The west half got infrared-verified spot repairs and a reinforced silicone restoration coating with a 15-year warranty of its own. Total cost came in 40% under the replacement bid, and both halves are now on the same maintenance and inspection cycle, aging on the same clock.",
    ],
    quote:
      "The other bid was 'replace it all.' Ridgeline cored the roof, showed us photos of exactly where the moisture was, and saved the association about forty percent. That's who you re-hire.",
    quoteBy: "— Marcus Feld, HOA Board President, Arvada",
    facts: [
      { label: "Location", value: "Arvada, CO (Olde Town)" },
      { label: "Roof type", value: "EPDM + silicone restoration" },
      { label: "Roof size", value: "18,000 sq ft" },
      { label: "Duration", value: "6 days" },
      { label: "Savings", value: "≈40% vs. full replacement" },
      { label: "Warranty", value: "20-yr membrane / 15-yr coating" },
      { label: "Completed", value: "August 2024" },
    ],
    hero: "commercialTowers",
    gallery: [
      { image: "commercialTowers", label: "The Commons from Olde Town", span: true },
      { image: "contractorsReviewingPlans", label: "Core-cut findings with the board" },
      { image: "constructionCrewSite", label: "East-half replacement" },
      { image: "deskReport", label: "Moisture survey report" },
      { image: "multiFamilyBuilding", label: "West half after coating" },
    ],
    before: "commercialTowers",
    after: "commercialBuilding",
  },
};
