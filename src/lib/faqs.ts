export type Faq = { q: string; a: string };

/** Homepage FAQ. */
export const homeFaqs: Faq[] = [
  {
    q: "How much does a new roof cost?",
    a: "It depends on size, pitch, and material — most homes fall in a predictable range we can estimate over the phone. After a free inspection you get a fixed written price, not an estimate that grows later.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roofs are completed in one to two days, including tear-off and cleanup. Larger or more complex roofs may take three to four.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Yes — we document damage with photos, meet your adjuster on-site, and make sure the scope covers everything the storm actually damaged.",
  },
  {
    q: "Is the inspection really free?",
    a: "Yes. You get a written photo report of your roof's condition with zero obligation. Many inspections end with 'your roof is fine, check back in a few years.'",
  },
  {
    q: "What warranty do you offer?",
    a: "Manufacturer material warranties up to 50 years, plus our own 15-year workmanship warranty covering installation — both in writing and transferable if you sell.",
  },
];

/** Roof-replacement page FAQ. */
export const replacementFaqs: Faq[] = [
  {
    q: "How do I know I need a replacement and not a repair?",
    a: "Age, widespread granule loss, curling shingles, or repeated leaks usually point to replacement. Our free inspection tells you definitively — and if a repair will do, that's what we'll recommend.",
  },
  {
    q: "How long will my roof replacement take?",
    a: "Most homes are finished in one to two days including tear-off and cleanup. Steep, large, or complex roofs may take three to four.",
  },
  {
    q: "What happens if you find rotten decking?",
    a: "Decking replacement is priced per sheet in your quote before we start, so there are no surprise change orders mid-job.",
  },
  {
    q: "Can I finance a roof replacement?",
    a: "Yes — monthly plans through our lending partners, including 0% intro options for qualified buyers. Checking your rate doesn't affect your credit.",
  },
];

/** Financing page FAQ. */
export const financingFaqs: Faq[] = [
  {
    q: "Does checking my rate hurt my credit?",
    a: "No — pre-qualification uses a soft inquiry. A hard inquiry only happens if you accept a loan offer.",
  },
  {
    q: "What credit score do I need?",
    a: "GreenSky® approves a wide range of profiles; the rate varies with credit. Checking costs nothing, so it's worth seeing your real offer.",
  },
  {
    q: "Can I pay it off early?",
    a: "Yes — no prepayment penalties on any plan we offer.",
  },
  {
    q: "Can I finance just my insurance deductible?",
    a: "Yes. The deductible-bridge option covers exactly that, and we'll walk you through it during the claim.",
  },
];

/** Full FAQ page, grouped by category tab. */
export const faqCategories: Record<string, Faq[]> = {
  Pricing: [
    {
      q: "How much does a new roof cost?",
      a: "It depends on size, pitch, and material — most homes fall in a predictable range we can ballpark over the phone. After a free inspection you get a fixed written price, not an estimate that grows later.",
    },
    {
      q: "Do you charge for estimates or inspections?",
      a: "No. Inspections are free and include a written photo report. Many end with 'your roof is fine, check back in a few years.'",
    },
    {
      q: "Can I finance my roof?",
      a: "Yes — monthly plans through our lending partners, including 0% intro options for qualified buyers. Checking your rate doesn't affect your credit.",
    },
    {
      q: "Why do quotes from different companies vary so much?",
      a: "Usually scope: material spec, decking allowance, flashing replacement vs reuse, warranty terms, and whether the crew is employed or subcontracted. We itemize all of it so you can compare fairly.",
    },
  ],
  Process: [
    {
      q: "How long does a replacement take?",
      a: "Most homes are done in one to two days including tear-off and cleanup. Steep, large, or complex roofs may take three to four.",
    },
    {
      q: "Do I need to be home during the work?",
      a: "No — you just need to move vehicles from the driveway and let us know about pets. We send photo updates during the day.",
    },
    {
      q: "What happens if it rains mid-job?",
      a: "We watch forecasts and never open more roof than we can dry-in the same day. Exposed sections are tarped and watertight overnight.",
    },
    {
      q: "Who is actually on my roof?",
      a: "Our own trained, insured crews — no anonymous subcontractors. Every crew member is background-checked and badged.",
    },
  ],
  "Insurance & Storms": [
    {
      q: "Hail just hit — what should I do first?",
      a: "Photograph any visible damage from the ground, note the date, and book an inspection before filing. We document everything and meet your adjuster on-site.",
    },
    {
      q: "Will filing a claim raise my rates?",
      a: "Weather claims are typically 'no-fault' but policies vary — we'll help you understand what you're covered for before you decide to file.",
    },
    {
      q: "Do you work with all insurance companies?",
      a: "Yes. We provide the documentation and scope detail adjusters need, and we don't inflate claims — that protects you.",
    },
  ],
  Warranty: [
    {
      q: "What warranty comes with a new roof?",
      a: "Manufacturer material warranties up to 50 years plus our own 15-year workmanship warranty covering installation — both in writing.",
    },
    {
      q: "Is the warranty transferable if I sell?",
      a: "Yes — it transfers to the new owner, which is a genuine selling point at listing time.",
    },
    {
      q: "What voids a roof warranty?",
      a: "Most commonly: poor attic ventilation, pressure washing, unapproved rooftop installs (satellite mounts, solar done wrong), and repairs by uncertified installers.",
    },
  ],
  Maintenance: [
    {
      q: "How often should my roof be inspected?",
      a: "Once a year, plus after any major hail or wind event. Annual checkups catch small failures while they're still cheap.",
    },
    {
      q: "How long should my current roof last?",
      a: "Asphalt shingle: 20–30 years. Metal: 40–70. Tile: 50+. Flat membranes: 20–30. Ventilation and installation quality move these numbers a lot.",
    },
    {
      q: "Can I clean my own gutters?",
      a: "If it's a single-story and you're comfortable on a ladder, yes. Anything higher, let us — falls are the real cost.",
    },
  ],
};
