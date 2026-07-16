import { images, type ImageKey } from "@/lib/images";

/** Homepage "What we do" cards — copy carried verbatim from the design. */
export const homeServices: {
  title: string;
  desc: string;
  badge: string;
  image: ImageKey;
  href: string;
}[] = [
  {
    title: "Roof Replacement",
    desc: "Full tear-off and re-roof with architectural shingle, metal, or tile systems — done in days, not weeks.",
    badge: "",
    image: "roofConstructionAerial",
    href: "/services/roof-replacement",
  },
  {
    title: "Roof Repair",
    desc: "Leaks, missing shingles, flashing failures — diagnosed on-site and fixed right the first time.",
    badge: "",
    image: "roofRepairCrew",
    href: "/services/roof-replacement",
  },
  {
    title: "Storm & Insurance",
    desc: "Hail and wind damage assessments, plus hands-on help navigating your insurance claim.",
    badge: "24/7",
    image: "stormLightningField",
    href: "/storm-damage",
  },
  {
    title: "Commercial Roofing",
    desc: "TPO, EPDM, and metal systems for offices, retail, and multi-family properties.",
    badge: "",
    image: "commercialBuilding",
    href: "/commercial-roofing",
  },
  {
    title: "Gutters & Skylights",
    desc: "Seamless gutters, guards, and skylight installation that integrates with your roofing system.",
    badge: "",
    image: "homeTraditional",
    href: "/services/roof-replacement",
  },
  {
    title: "Inspections & Maintenance",
    desc: "Annual checkups and pre-sale inspections with a full written photo report.",
    badge: "Free",
    image: "contractorsReviewingPlans",
    href: "/book-an-inspection",
  },
];

/** Homepage process steps. */
export const homeSteps = [
  {
    num: "01",
    title: "Book an inspection",
    desc: "Pick a time online or call. We arrive on schedule and walk the roof, attic, and gutters.",
  },
  {
    num: "02",
    title: "Get a written report",
    desc: "Photos of everything we find, honest condition assessment, and clear options with fixed pricing.",
  },
  {
    num: "03",
    title: "We build it right",
    desc: "Certified crews, manufacturer-spec installation, and daily site cleanup — most homes done in 1–2 days.",
  },
  {
    num: "04",
    title: "Covered for decades",
    desc: "Final walkthrough together, then your material and workmanship warranties — in writing.",
  },
];

/** Certification / membership marks shown in the trust strips. */
export const certifications = [
  { name: "GAF", sub: "Master Elite® Contractor" },
  { name: "Owens Corning", sub: "Platinum Preferred" },
  { name: "CertainTeed", sub: "SELECT ShingleMaster™" },
  { name: "NRCA", sub: "Member Since 2006" },
  { name: "BBB", sub: "A+ Accredited Business" },
];

export const aboutCertifications = [
  { name: "GAF", sub: "Master Elite® Contractor" },
  { name: "Owens Corning", sub: "Platinum Preferred" },
  { name: "CertainTeed", sub: "SELECT ShingleMaster™" },
  { name: "NRCA", sub: "Member Since 2006" },
  { name: "OSHA", sub: "10/30 Trained Crews" },
];

/** Residential services grid. */
export const residentialServices = [
  { title: "Roof Replacement", desc: "Full tear-off and re-roof with shingle, metal, or tile — fixed written pricing.", badge: "" },
  { title: "Roof Repair", desc: "Leaks, missing shingles, flashing failures — fixed right the first time.", badge: "" },
  { title: "Storm & Insurance", desc: "Damage documentation and hands-on help with your claim.", badge: "24/7" },
  { title: "Gutters & Guards", desc: "Seamless gutters and guards that integrate with your roof system.", badge: "" },
  { title: "Skylights & Ventilation", desc: "Daylight and airflow done without creating tomorrow's leak.", badge: "" },
  { title: "Inspections & Maintenance", desc: "Annual checkups and pre-sale reports, free and in writing.", badge: "Free" },
];

export const residentialBenefits = [
  { title: "Our own crews", desc: "Background-checked, badged employees — never anonymous subcontractors." },
  { title: "Property protection", desc: "Tarps over landscaping and siding, plywood shields for AC units and pools." },
  { title: "Daily communication", desc: "Photo updates during the job and one point of contact who answers." },
  { title: "Magnetic-sweep cleanup", desc: "Debris hauled same day, magnet pass for every last nail." },
];

/** Commercial systems + property-manager benefits. */
export const commercialSystems = [
  { title: "TPO", desc: "Heat-welded single-ply membrane, energy-reflective and cost-effective.", bestFor: "Best for: flat & low-slope, retail, warehouses" },
  { title: "EPDM", desc: "Rubber membrane with decades of proven service life.", bestFor: "Best for: large flat roofs, budget-driven re-roofs" },
  { title: "Standing-Seam Metal", desc: "Concealed fasteners, 40–70 year lifespan, minimal upkeep.", bestFor: "Best for: sloped commercial, mixed-use, ag buildings" },
  { title: "Roof Coatings", desc: "Restore a sound roof for a fraction of replacement cost.", bestFor: "Best for: aging membranes with life left in them" },
];

export const pmBenefits = [
  { title: "Tenant-safe scheduling", desc: "Work sequenced around business hours, noise windows, and access rules." },
  { title: "Documentation that holds up", desc: "Photo reports, warranties, and scopes formatted for owners and boards." },
  { title: "One point of contact", desc: "A dedicated PM who answers — no dispatch roulette." },
  { title: "Budget honesty", desc: "Repair vs. restore vs. replace, priced side by side with life expectancy." },
];

/** Storm-damage page data. */
export const stormSteps = [
  { num: "01", title: "Stay off the roof", desc: "Photograph what you can see from the ground — dents, missing shingles, debris. Note the storm date." },
  { num: "02", title: "Stop interior damage", desc: "Buckets under drips, move valuables, poke a small drain hole in bulging ceiling paint." },
  { num: "03", title: "Call us before filing", desc: "A documented assessment first means you file with evidence — or don't file at all if damage is minor." },
  { num: "04", title: "Ignore the door-knockers", desc: "Never sign anything on your doorstep after a storm. Ever." },
];

export const stormRedFlags = [
  { title: "Deposit up front, today only", desc: "Legitimate roofers don't pressure you with expiring 'storm specials.'" },
  { title: "Out-of-state plates", desc: "Who honors the warranty when they're three states away next month?" },
  { title: "'We'll waive your deductible'", desc: "That's insurance fraud — and it's you who signs the claim." },
  { title: "No local address or license", desc: "Verify license #, insurance, and a physical local address before signing." },
];

/** Roof replacement service page data. */
export const replacementBenefits = [
  { title: "Full-system replacement", desc: "New decking repair, ice & water shield, underlayment, flashing, and ridge venting — not just shingles." },
  { title: "Fixed written pricing", desc: "The price we quote is the price you pay. Any hidden decking damage is priced per sheet, up front." },
  { title: "Certified installers", desc: "Manufacturer-certified crews, which is what unlocks the strongest available warranties." },
  { title: "Magnetic-sweep cleanup", desc: "Landscaping protected, debris hauled same day, and a magnet pass for every last nail." },
];

export const replacementMaterials: {
  name: string;
  desc: string;
  life: string;
  cost: string;
  wind: string;
  bestFor: string;
  image: ImageKey;
}[] = [
  {
    name: "Architectural Shingle",
    desc: "The best value for most homes — dimensional look, strong wind ratings, and huge color range.",
    life: "25–30 yrs",
    cost: "$",
    wind: "110–130 mph",
    bestFor: "Best for: most residential homes balancing budget and curb appeal.",
    image: "homeShingleDusk",
  },
  {
    name: "Standing-Seam Metal",
    desc: "Concealed fasteners, exceptional longevity, and energy-reflective finishes.",
    life: "40–70 yrs",
    cost: "$$$",
    wind: "140+ mph",
    bestFor: "Best for: long-term owners, modern designs, high-wind areas.",
    image: "homeMetalRoof",
  },
  {
    name: "Tile",
    desc: "Clay or concrete tile with unmatched character and fire resistance.",
    life: "50+ yrs",
    cost: "$$$$",
    wind: "125+ mph",
    bestFor: "Best for: Mediterranean and Southwest styles, hot climates.",
    image: "tileRoofCloseup",
  },
  {
    name: "Flat / Low-Slope",
    desc: "TPO and EPDM membranes for flat sections, additions, and commercial-style roofs.",
    life: "20–30 yrs",
    cost: "$$",
    wind: "N/A",
    bestFor: "Best for: flat sections, porches, additions, commercial buildings.",
    image: "homeFlatVilla",
  },
];

export const replacementSteps = [
  { num: "01", title: "Protect & tear off", desc: "Tarps over landscaping and siding, then complete removal down to the decking." },
  { num: "02", title: "Inspect & prep", desc: "Decking checked and repaired, ice & water shield and underlayment installed to spec." },
  { num: "03", title: "Install the system", desc: "Shingles or panels, flashing, and ridge ventilation — installed to manufacturer spec." },
  { num: "04", title: "Clean up & walk through", desc: "Debris hauled, magnetic nail sweep, and a final walkthrough with you before we leave." },
];

export const replacementRelated = [
  { title: "Roof Repair", desc: "Leaks and localized damage fixed fast — when a full replacement isn't needed.", href: "/services/roof-replacement" },
  { title: "Storm & Insurance", desc: "Hail or wind damage? We document everything and support your claim.", href: "/storm-damage" },
  { title: "Gutters & Skylights", desc: "The right time to upgrade gutters or add skylights is during a re-roof.", href: "/services/roof-replacement" },
];

/** Financing page data. */
export const financingPlans = [
  {
    name: "Intro offer",
    headline: "0% for 18 mo",
    desc: "Pay it off inside the intro window and the roof costs exactly the quote.",
    features: ["For qualified buyers", "No interest if paid in period", "No prepayment penalty"],
    badge: "Most popular",
  },
  {
    name: "Fixed monthly",
    headline: "$159/mo",
    desc: "A predictable payment over 2–12 years, sized to your budget.",
    features: ["Fixed rate, fixed term", "Decision in minutes", "No home equity required"],
    badge: "",
  },
  {
    name: "Deductible bridge",
    headline: "Claim-friendly",
    desc: "Financing shaped around insurance payouts — start work while the claim finalizes.",
    features: ["Works with any insurer", "Short-term options", "We handle the paperwork"],
    badge: "",
  },
];

export const financingSteps = [
  { num: "01", title: "Get your fixed quote", desc: "Free inspection first — you finance a real number, not an estimate." },
  { num: "02", title: "Check your rate", desc: "A soft credit check through GreenSky® — takes minutes, no score impact." },
  { num: "03", title: "Pick a plan & schedule", desc: "Choose the term that fits, sign digitally, and we book your install." },
];

/** About page data. */
export const aboutValues = [
  { num: "01", title: "Honest inspections", desc: "If a $400 repair solves it, that's what we quote. Replacement is recommended only when it's true." },
  { num: "02", title: "Our own crews", desc: "No anonymous subcontractors. The people on your roof are trained, insured, and accountable to us." },
  { num: "03", title: "Fixed written pricing", desc: "The quote is the price. Hidden-decking costs are itemized per sheet before we start." },
  { num: "04", title: "Clean job sites", desc: "Landscaping protected, debris gone same day, magnetic sweep for every nail." },
];

export const aboutMilestones = [
  {
    year: "2003",
    title: "Founded",
    desc: "Matt Larsen starts Ridgeline with one truck, a two-man crew, and a promise to return every phone call — re-roofing his first block of bungalows in Olde Town Arvada.",
  },
  {
    year: "2008",
    title: "First manufacturer certification",
    desc: "Earned GAF Master Elite® status — held by fewer than 2% of roofing contractors — unlocking 50-year Golden Pledge® warranties for our customers.",
  },
  {
    year: "2014",
    title: "Commercial division",
    desc: "Launched flat-roof and TPO service after re-roofing the Lakewood Marketplace retail plaza — still on a maintenance plan with us today.",
  },
  {
    year: "2021",
    title: "4,000th roof",
    desc: "Crossed 4,000 completed roofs the same summer the June hailstorm hit the Front Range — our crews tarped 212 homes in ten days.",
  },
  {
    year: "2026",
    title: "Today",
    desc: "38 employees, 5 dedicated crews, and 14 cities across the Denver metro — still family-owned, still answering our own phones.",
  },
];

export const aboutTeam = [
  { name: "Matt Larsen", role: "Founder & Owner" },
  { name: "Dana Whitfield", role: "Production Manager" },
  { name: "Luis Herrera", role: "Lead Inspector" },
  { name: "Karen Osborne", role: "Office & Scheduling" },
];

/** Careers page data. */
export const careerPerks = [
  { title: "Pay that respects the trade", desc: "$22–$38/hr based on experience, production bonuses, overtime, paid weekly." },
  { title: "Safety without shortcuts", desc: "Full harness and fall-protection gear provided, safety training on the clock." },
  { title: "Real advancement", desc: "Installer → lead → foreman → PM. We promote from the roof, not from outside." },
  { title: "Benefits", desc: "Health & dental, 401(k) with 4% match, 15 days PTO — plus tool allowance and winter hours honesty." },
];

export const careerRoles = [
  { title: "Roofing Installer", meta: "Full-time · Wheat Ridge · Experience preferred, will train the right attitude" },
  { title: "Crew Foreman", meta: "Full-time · Wheat Ridge · 5+ yrs steep-slope, valid driver's license" },
  { title: "Roof Inspector / Estimator", meta: "Full-time · Denver metro · Roofing background required, no pushy-sales types" },
  { title: "Office & Scheduling Coordinator", meta: "Full-time · Wheat Ridge · The voice of the company on the phone" },
];

export { images };
