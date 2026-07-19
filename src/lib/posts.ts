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

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  author: string;
  authorRole: string;
  authorBio: string;
  updated: string;
  read: string;
  cover: ImageKey;
  intro: string;
  sections: { id: string; heading: string; body: string }[];
  /** Optional highlighted takeaway rendered after the first section. */
  ruleOfThumb?: string;
  /** Renders the cost-range table after the second section. */
  costTable?: boolean;
};

const luis = {
  author: "Luis Herrera",
  authorRole: "Lead Inspector",
  authorBio:
    "14 years on Front Range roofs, GAF- and CertainTeed-certified, and roughly 3,000 inspections into his career.",
};
const matt = {
  author: "Matt Larsen",
  authorRole: "Founder & Owner",
  authorBio:
    "Started Ridgeline in 2003 with one truck and still walks job sites weekly. 4,800 roofs and counting.",
};
const dana = {
  author: "Dana Whitfield",
  authorRole: "Production Manager",
  authorBio:
    "Runs Ridgeline's five crews and 400+ installs a year. If it happens on a job site, it crosses her desk first.",
};

export const articles: Record<string, Article> = {
  "what-a-new-roof-costs": {
    slug: "what-a-new-roof-costs",
    title: "What a new roof actually costs in 2026 — and what changes the number",
    category: "Costs & Pricing",
    description:
      "Size, pitch, material, decking condition, and the four line items contractors hide — a transparent breakdown of what a new roof actually costs in 2026.",
    ...luis,
    updated: "Updated July 2026",
    read: "8 min read",
    cover: "roofConstructionAerial",
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
    costTable: true,
  },
  "repair-or-replace": {
    slug: "repair-or-replace",
    title: "Repair or replace? The 5 signs that settle it",
    category: "Costs & Pricing",
    description:
      "When a $500 repair buys you five more years — and when it's throwing money at a dying roof. Five signs that settle the repair-or-replace question.",
    ...luis,
    updated: "Updated June 2026",
    read: "6 min read",
    cover: "roofRepairCrew",
    intro:
      "About a third of the inspections we run end with us recommending a repair, not a replacement — which surprises people who expect every roofer to sell them a roof. The honest answer depends on five things you can mostly see for yourself. Here's the same framework our inspectors use, so you can walk into any contractor conversation knowing which side of the line your roof is on.",
    sections: [
      {
        id: "s1",
        heading: "When a repair is the right call",
        body: "Repairs shine when the damage is localized and the field of the roof is healthy: a windstorm took a patch of shingles off one slope, a pipe boot cracked, flashing pulled away from a chimney, or a satellite installer left holes behind. If your roof is under 15 years old and the problem traces to a single cause in a single place, a $400–$900 repair genuinely buys you years. We photograph the fix and the surrounding field so you have a record that the rest of the roof was sound when we left.",
      },
      {
        id: "s2",
        heading: "The five signs that settle it",
        body: "One: age — asphalt shingles past 20 years in Colorado UV are living on borrowed time regardless of how they look from the street. Two: widespread granule loss — check your gutters; if they're filling with what looks like coarse sand, the shingles are dissolving. Three: curling or clawing edges across multiple slopes, not just one weathered spot. Four: repeat leaks in different places — one leak is an event, three is a pattern. Five: daylight or moisture staining in the attic across a broad area. Any two of these together, and repair money is rent, not investment.",
      },
      {
        id: "s3",
        heading: "Do the cost-per-remaining-year math",
        body: "Here's the calculation that cuts through the emotion. A $900 repair on a roof with five honest years left costs $180 per year — great deal. The same repair on a roof with 18 months left costs $600 a year, and you'll still buy the replacement, just later and possibly after interior damage. Flip it for replacement: $16,000 over 30 years is $533 a year, protecting a home that would suffer five figures in damage from one uncontrolled leak. The repair-or-replace answer is almost always obvious once both numbers are on paper.",
      },
      {
        id: "s4",
        heading: "What we'll tell you at the inspection",
        body: "Our free inspection ends with a written photo report that puts your roof in one of three buckets: repair it (with a fixed price), replace it (with the reasoning photographed, not asserted), or leave it alone and re-check in two years — which is the answer more often than you'd think. If a contractor's inspection only ever produces one answer, that tells you more about their sales quota than your roof.",
      },
    ],
    ruleOfThumb:
      "If you've spent more than 10% of a replacement's cost on repairs in the last three years, you're already paying for the new roof — you just don't have it yet.",
  },
  "asphalt-vs-metal": {
    slug: "asphalt-vs-metal",
    title: "Asphalt vs. metal: an honest comparison",
    category: "Materials",
    description:
      "Lifespan, cost per year of service, hail performance, looks, and resale — asphalt shingle vs. standing-seam metal, compared without the sales pitch.",
    ...matt,
    updated: "Updated May 2026",
    read: "9 min read",
    cover: "homeMetalRoof",
    intro:
      "We install both, so we have no horse in this race. Asphalt shingle covers about 80% of the roofs we do; standing-seam metal is the fastest-growing slice of the other 20%. Both are good roofs when installed right. The real question is which one is right for your house, your timeline, and your budget — and that comes down to math and honesty about how long you'll own the home.",
    sections: [
      {
        id: "s1",
        heading: "Up-front cost vs. cost per year",
        body: "On a typical 30-square home, architectural shingle runs $12,000–$19,500 installed; standing-seam metal runs $27,000–$45,000. That's the number everyone fixates on. But divide by realistic lifespan — 25 years for shingle in Front Range conditions, 50+ for metal — and the per-year costs nearly converge: roughly $520–$780 a year for shingle versus $540–$900 for metal. Metal also never needs the mid-life repairs shingle roofs accumulate. The up-front gap is real; the lifetime gap is much smaller than it looks.",
      },
      {
        id: "s2",
        heading: "Hail, wind, and Colorado reality",
        body: "This is Hail Alley, so durability isn't hypothetical. Class 4 impact-rated shingles resist most hail but will still bruise in a severe event — that's what insurance is for, and impact-rated discounts of 10–28% soften the premium. Metal dents cosmetically in large hail but almost never loses waterproofing, and mechanically-seamed panels carry 140+ mph wind ratings that no shingle matches. For wind-exposed foothills properties, metal wins outright. For typical suburban lots, Class 4 shingle plus the insurance discount is the pragmatic play.",
      },
      {
        id: "s3",
        heading: "The myths: noise, lightning, and resale",
        body: "Three things people 'know' about metal roofs that aren't true. Rain noise: over solid decking and insulation, a metal roof is no louder than shingle — the barn-roof drumming people remember comes from panels over open framing. Lightning: metal doesn't attract strikes, and if anything disperses energy more safely. Resale: appraisers increasingly credit metal roofs, and remodeling-industry data consistently shows strong cost recovery — while a shingle roof at year 20 becomes a negotiating chip against you at sale time.",
      },
      {
        id: "s4",
        heading: "Which roof for which homeowner",
        body: "Choose shingle if you'll likely move within 10–15 years, want the biggest color and style range, or the budget simply says so — a well-installed Class 4 architectural shingle is a genuinely good roof, not a consolation prize. Choose metal if this is your long-term home, your property takes serious wind, you want snow to shed instead of pack, or you never want to think about the roof again. And whichever you choose, installation quality moves lifespan more than material choice does — a badly installed metal roof loses to a well-installed shingle roof every time.",
      },
    ],
    ruleOfThumb:
      "Divide the installed price by the years you'll realistically own the home. If you're staying past year 15, metal's math starts winning. Selling before year 10? Shingle almost always pencils better.",
  },
  "hail-first-4-things": {
    slug: "hail-first-4-things",
    title: "Hail hit your roof? Do these 4 things first",
    category: "Storm & Insurance",
    description:
      "What to document after a hailstorm, when to call your insurer, and the door-knocker traps to avoid — the first four moves that protect your claim.",
    ...luis,
    updated: "Updated June 2026",
    read: "5 min read",
    cover: "stormLightningField",
    intro:
      "The hour after a hailstorm is when good claims are made and bad decisions get signed. Every June we tarp roofs for families who did the right things fast — and every June we untangle contracts for neighbors who signed something on their doorstep while the ice was still melting. Here's the four-step sequence that protects your roof and your claim.",
    sections: [
      {
        id: "s1",
        heading: "Step 1: Document from the ground — stay off the roof",
        body: "Walk the property and photograph everything you can see without a ladder: dented gutters and downspouts, hail splatter marks on fences and AC units, shredded window screens, pummeled plants, and hailstones themselves next to a coin or tape measure. Note the exact date and time — carriers match claims against weather-radar data. Do not climb on the roof: hail-loosened granules make shingle slopes genuinely dangerous, and everything up there will be documented properly at inspection.",
      },
      {
        id: "s2",
        heading: "Step 2: Stop any active damage",
        body: "If water is coming in, your job is containment, not repair. Buckets under drips, furniture and valuables moved, and a small drainage hole poked in any bulging ceiling paint — a controlled pencil-hole leak beats a collapsed ceiling panel every time. Save receipts for anything you buy to protect the home; reasonable emergency mitigation costs are typically reimbursable under your policy.",
      },
      {
        id: "s3",
        heading: "Step 3: Get an inspection before you file",
        body: "This ordering matters more than anything else on this list. A documented professional assessment before you file means you open the claim with evidence — measured test squares, bruise counts, photographed collateral damage — instead of a guess. It also protects you in the other direction: if the damage is genuinely minor, you'll know before you place a claim on your record for a repair that costs less than your deductible. Our storm assessments are free and you keep the report either way.",
      },
      {
        id: "s4",
        heading: "Step 4: Ignore the door-knockers",
        body: "After every major cell, out-of-state crews sweep the affected zip codes. The red flags are consistent: pressure to sign 'today only,' requests to collect your deductible waiver (that's insurance fraud, and it's your signature on the claim), no verifiable local address or license, and contracts that assign your entire claim to them. A legitimate local roofer will still be here next week, next storm, and in year 12 of your warranty. Nothing about a hail claim rewards speed-signing at your front door.",
      },
    ],
    ruleOfThumb:
      "Photograph first, file second, sign last. Any contractor who wants to reorder that sequence is optimizing for themselves, not for you.",
  },
  "fall-roof-checklist": {
    slug: "fall-roof-checklist",
    title: "The 15-minute fall roof checklist",
    category: "Maintenance",
    description:
      "Six things you can safely check from the ground before a Colorado winter — no ladder required — and the two symptoms that mean you should call a roofer.",
    ...dana,
    updated: "Updated September 2025",
    read: "4 min read",
    cover: "homeTraditional",
    intro:
      "Colorado winters don't break roofs — they finish off the weaknesses that summer left behind. Fifteen minutes with your feet on the ground in October prevents most of the emergency calls we get in January. Here's the walk-around we'd do at your house, minus the ladder, plus what each finding actually means.",
    sections: [
      {
        id: "s1",
        heading: "Walk the perimeter with binoculars",
        body: "From each side of the house, scan the roof field for shingles that are cracked, cupped, or missing outright, and look at the ridge line for gaps in the cap shingles. Check the metal: flashing at chimneys and walls should sit flat, not lifted or wavy. Look for shiny spots — exposed nail heads back themselves out over time and each one is a future drip. Ten minutes of binocular time catches 80% of what an inspector finds from the surface.",
      },
      {
        id: "s2",
        heading: "Read your gutters like a lab report",
        body: "Gutters tell the truth about a roof. A heavy layer of granules — it looks like coarse black sand — means the shingle surface is wearing off. Leaves and debris need to come out before the first freeze, because clogged gutters are how ice dams start: meltwater backs up, refreezes at the cold eave, and pries under the shingles. While you're there, confirm downspouts actually discharge away from the foundation and that the gutter runs slope toward them.",
      },
      {
        id: "s3",
        heading: "Spend five minutes in the attic",
        body: "Take a flashlight up on a bright day. You're looking for pinpoints of daylight around penetrations, dark water staining on the underside of the decking, matted or damp insulation, and rust on nail tips — that last one signals condensation, which is a ventilation problem, not a leak. Sniff too: a musty attic in dry October means moisture is getting in or failing to get out. Any of these findings is worth a professional look before snow load makes it worse.",
      },
      {
        id: "s4",
        heading: "When to stop DIYing and call",
        body: "Two findings mean the free checklist is over: active staining that grows after weather, and anything structural — sagging ridge lines or decking that looks wavy between rafters. And one standing rule: if the check requires a ladder, it requires us instead. Falls are the most expensive roofing problem there is, and our annual checkup is free precisely so nobody's uncle has to get on the roof in November.",
      },
    ],
  },
  "buying-a-house-roof": {
    slug: "buying-a-house-roof",
    title: "Buying a house? How to read the roof",
    category: "Buying & Selling",
    description:
      "What general home-inspection reports gloss over, the questions to ask sellers, and how to negotiate a roof before you waive anything.",
    ...luis,
    updated: "Updated April 2026",
    read: "7 min read",
    cover: "houseKeys",
    intro:
      "The roof is the most expensive single component on most homes, and the standard buyer's inspection gives it about four minutes from a ladder at the eave. We run pre-purchase roof inspections every week for buyers who'd rather know the real number before they waive contingencies — here's what we look at, and how to use what you learn.",
    sections: [
      {
        id: "s1",
        heading: "What the general inspection actually covers",
        body: "A general home inspector is a generalist by design — they'll note obvious missing shingles and visible ceiling stains, and their contract explicitly disclaims determining remaining roof life. The phrases to slow down on in their report: 'appears serviceable,' 'monitor,' 'evaluate by qualified roofing contractor,' and any mention of layered shingles. None of these are deal-breakers; all of them are the report politely telling you it doesn't know. That's the gap a dedicated roof inspection fills for a few hundred dollars — or free, if we're the ones doing it.",
      },
      {
        id: "s2",
        heading: "The four questions to ask the seller",
        body: "One: how old is the roof, and is there an installation invoice — 'about ten years' has a way of meaning seventeen. Two: is the warranty transferable, and has the transfer paperwork requirement been checked — most manufacturer warranties transfer once, within a time window. Three: have there been insurance claims on the roof, and were repairs done by a licensed contractor. Four: are there two layers up there — a layered roof means the next replacement costs $2,000–$4,000 more in tear-off, and that's your negotiating line item, not your surprise.",
      },
      {
        id: "s3",
        heading: "Negotiating a tired roof without killing the deal",
        body: "A worn roof isn't a reason to walk — it's the most legible negotiating item in the whole transaction, because replacement costs are knowable to the dollar. Your options, roughly in order of preference: a price reduction equal to a written replacement quote (you control the contractor and the quality), a seller-paid replacement before closing with your approval of the scope, or an escrow holdback. Get an actual quote, not a guess — 'the roof looks old' moves nothing, while a $17,400 written number moves exactly $17,400.",
      },
      {
        id: "s4",
        heading: "After closing: the 90-day moves",
        body: "Three things in your first quarter as an owner. Submit the warranty transfer paperwork if one exists — the window is often 30 or 60 days. Photograph the roof and attic in their move-in condition, so any future storm claim has a clean baseline. And book a real inspection if you never got one during the purchase: knowing you have seven good years lets you plan a replacement on your schedule and budget, which is always cheaper than doing it on the roof's schedule instead.",
      },
    ],
    ruleOfThumb:
      "Never waive inspection on a house with a roof over 15 years old without a written replacement quote in hand. You're not being paranoid — you're pricing the largest line item the general inspection won't.",
  },
  "ventilation-kills-roofs": {
    slug: "ventilation-kills-roofs",
    title: "Why ventilation quietly kills roofs",
    category: "Materials",
    description:
      "The most common install mistake we find on Front Range roofs — unbalanced attic ventilation — how it cooks shingles, breeds ice dams, and voids warranties.",
    ...dana,
    updated: "Updated March 2026",
    read: "6 min read",
    cover: "crewTimberFraming",
    intro:
      "When we inspect a roof that failed a decade early, the culprit is usually invisible from the street: the attic under it couldn't breathe. Bad ventilation is the most common defect we find on otherwise decent installations — and it's insidious, because the roof looks fine right up until it doesn't. Here's how airflow works, how it fails, and why your warranty quietly depends on it.",
    sections: [
      {
        id: "s1",
        heading: "How a roof is supposed to breathe",
        body: "A healthy roof system pulls outside air in at the eaves (intake, through soffit vents) and exhausts it at the top (ridge vents or box vents), continuously flushing the attic. Code and manufacturers generally want about one square foot of net vent area per 150 square feet of attic floor, split roughly half intake, half exhaust. That balance is the whole game: exhaust without intake just pulls conditioned air out of your house, and intake without exhaust does nothing at all.",
      },
      {
        id: "s2",
        heading: "Summer failure: cooking from below",
        body: "An unvented Colorado attic hits 150–160°F on a July afternoon, and that heat doesn't stay put — it bakes shingles from underneath, accelerating the granule loss and curling that UV is already causing from above. We routinely see 30-year shingles fail at year 18 on starved attics, with a telltale signature: the slopes over living space age fast while the slope over the vented garage looks years younger. Same shingles, same sun, different airflow.",
      },
      {
        id: "s3",
        heading: "Winter failure: ice dams and wet insulation",
        body: "Winter flips the mechanism. Warm attic air melts the snow blanket from below; meltwater runs down to the cold overhang and refreezes into a dam that pries water back up under the shingles. Meanwhile, household moisture rising into a cold, still attic condenses on the underside of the decking — we find rusty nail tips, matted insulation, and mold in attics whose owners swear the roof has never leaked. It hasn't. It's raining indoors, gently, all winter.",
      },
      {
        id: "s4",
        heading: "The warranty fine print nobody reads",
        body: "Every major shingle manufacturer conditions its warranty on adequate ventilation — it's right there in the registration terms, and inadequate airflow is one of the first things a warranty adjuster checks when a claim comes in. This is also the corner cheap bids cut most often, because ridge vent, baffles, and soffit work take time and don't show from the driveway. When you compare quotes, make sure ventilation is specified in numbers, not vibes: intake area, exhaust area, and what's being added or corrected. On our installs it's calculated, installed, and photographed into your project record.",
      },
    ],
    ruleOfThumb:
      "Stand in your attic on a summer afternoon. If it feels like an oven and there's no steady air movement, your roof is aging in dog years — no matter what the shingle wrapper promised.",
  },
};
