import { type ImageKey } from "@/lib/images";

export type Post = {
  slug: string;
  title: string;
  category: string;
  read: string;
  excerpt: string;
  image: ImageKey;
};

export const postCategories = [
  "All",
  "Costs & Pricing",
  "Materials",
  "Storm & Insurance",
  "Maintenance",
  "Buying & Selling",
];

export const featuredPost = {
  slug: "what-a-new-roof-costs",
  title: "What a new roof actually costs in 2026 — and what changes the number",
  category: "Costs & Pricing",
  read: "8 min read",
  excerpt:
    "Size, pitch, material, decking condition, and the four line items contractors hide. A transparent breakdown with real ranges.",
  image: "deskReport" as ImageKey,
};

export const posts: Post[] = [
  {
    slug: "repair-or-replace",
    title: "Repair or replace? The 5 signs that settle it",
    category: "Costs & Pricing",
    read: "6 min read",
    excerpt: "When a $500 repair buys you five more years — and when it's throwing money at a dying roof.",
    image: "roofRepairCrew",
  },
  {
    slug: "asphalt-vs-metal",
    title: "Asphalt vs. metal: an honest comparison",
    category: "Materials",
    read: "9 min read",
    excerpt: "Lifespan, cost per year of service, looks, and resale — compared without the sales pitch.",
    image: "homeMetalRoof",
  },
  {
    slug: "hail-first-4-things",
    title: "Hail hit your roof? Do these 4 things first",
    category: "Storm & Insurance",
    read: "5 min read",
    excerpt: "What to document, when to call your insurer, and the door-knocker traps to avoid.",
    image: "stormLightningField",
  },
  {
    slug: "fall-roof-checklist",
    title: "The 15-minute fall roof checklist",
    category: "Maintenance",
    read: "4 min read",
    excerpt: "What you can safely check from the ground before winter — no ladder required.",
    image: "homeTraditional",
  },
  {
    slug: "buying-a-house-roof",
    title: "Buying a house? How to read the roof",
    category: "Buying & Selling",
    read: "7 min read",
    excerpt: "What inspection reports gloss over, and the questions to ask before you waive anything.",
    image: "houseKeys",
  },
  {
    slug: "ventilation-kills-roofs",
    title: "Why ventilation quietly kills roofs",
    category: "Materials",
    read: "6 min read",
    excerpt: "The most common install mistake we find — and how it voids warranties.",
    image: "crewTimberFraming",
  },
];

/** The worked article (rendered for each post slug until per-post content is written). */
export const article = {
  slug: "what-a-new-roof-costs",
  title: "What a new roof actually costs in 2026 — and what changes the number",
  category: "Costs & Pricing",
  author: "Luis Herrera",
  authorRole: "Lead Inspector",
  updated: "Updated July 2026",
  read: "8 min read",
  authorBio:
    "14 years on Front Range roofs, GAF- and CertainTeed-certified, and roughly 3,000 inspections into his career.",
  cover: "roofConstructionAerial" as ImageKey,
  coverLabel: "Roofing crew installing shingles, wide shot",
  intro:
    "Ask three contractors what a new roof costs and you'll get three numbers that can differ by $10,000 — for the same house. That's not because someone is lying; it's because 'a new roof' hides a dozen decisions about scope. This guide breaks down what actually sets the price on a Denver-metro home in 2026, the honest ranges we quote every week, and the line items that make cheap bids expensive later.",
  sections: [
    {
      id: "s1",
      heading: "The five factors that set your price",
      body: "Size comes first — roofers price by the 'square' (100 sq ft), and most Front Range homes run 25–35 squares once you account for overhangs and garages. Then pitch and complexity: a walkable 4/12 ranch costs meaningfully less per square than a cut-up 10/12 two-story with dormers and valleys, because steep roofs need more safety gear, more time, and more waste. Material is the biggest swing (see the ranges below). Tear-off layers matter — a second layer of old shingles adds disposal weight and labor. And decking condition is the wildcard: rotten sheathing has to be replaced before anything goes on top, which is why an honest quote prices it per sheet in advance.",
    },
    {
      id: "s2",
      heading: "Typical ranges by material",
      body: "For a typical 30-square Denver-metro home in 2026: architectural asphalt shingle runs $12,000–$19,500 installed ($4.00–$6.50 per sq ft). Class 4 impact-rated shingle — worth it in Hail Alley, and often insurer-discounted — adds roughly 10–15%. Standing-seam metal runs $27,000–$45,000 ($9–$15 per sq ft) but lasts two to three times longer. Concrete or clay tile lands between $33,000 and $60,000 and needs framing that can carry the weight. Flat and low-slope sections in TPO or EPDM run $7–$11 per sq ft. These are installed, permitted, warrantied numbers — materials-only math you see online is usually half the real picture.",
    },
    {
      id: "s3",
      heading: "The line items bad quotes hide",
      body: "Four things separate a real quote from a teaser number. Decking allowance: if plywood replacement isn't priced per sheet up front, expect a mid-job change order. Flashing: reusing old step and chimney flashing saves the contractor an hour and costs you the next leak — new flashing should be listed, not assumed. Permit and disposal fees: in most metro cities that's $400–$900 combined, and 'we'll handle it' should mean it's in the number. And ventilation: code requires balanced intake and exhaust, and skipping it quietly voids most shingle warranties.",
    },
    {
      id: "s4",
      heading: "How to compare quotes fairly",
      body: "Line the bids up on identical scope before you look at the bottom line: same shingle line and class, same underlayment spec, ice & water shield at eaves and valleys, new flashing everywhere, decking priced per sheet, permit and disposal included, and both warranties in writing — manufacturer material and contractor workmanship. Then ask who's actually on the roof: an employed, certified crew and a subcontracted day crew can be a $3,000 difference that never shows up on paper. If one bid is dramatically lower, the money came out of one of these lines — find which one before you sign.",
    },
  ],
  ruleOfThumb:
    "Quick sanity check: most Denver-metro homes are 25–35 squares. If an architectural-shingle bid works out to much less than $400 per square installed, something — decking allowance, flashing, ventilation, or the warranty — has been quietly cut from the scope.",
  related: [
    { slug: "repair-or-replace", title: "Repair or replace? The 5 signs that settle it", category: "Costs & Pricing", read: "6 min", image: "roofRepairCrew" as ImageKey },
    { slug: "asphalt-vs-metal", title: "Asphalt vs. metal: an honest comparison", category: "Materials", read: "9 min", image: "homeMetalRoof" as ImageKey },
    { slug: "hail-first-4-things", title: "Hail hit your roof? Do these 4 things first", category: "Storm & Insurance", read: "5 min", image: "stormLightningField" as ImageKey },
  ],
};
