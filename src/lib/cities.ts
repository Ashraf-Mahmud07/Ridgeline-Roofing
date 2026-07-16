/** Service-area cities. Slugs become /service-areas/[city] routes. */
export type City = {
  slug: string;
  name: string;
  count: string;
  roofs: string;
  note: string;
};

export const cities: City[] = [
  { slug: "denver", name: "Denver", count: "980+ roofs", roofs: "980+", note: "Full residential & commercial" },
  { slug: "arvada", name: "Arvada", count: "760+ roofs", roofs: "760+", note: "Where it all started in 2003" },
  { slug: "wheat-ridge", name: "Wheat Ridge", count: "690+ roofs", roofs: "690+", note: "HQ — fastest response times" },
  { slug: "lakewood", name: "Lakewood", count: "540+ roofs", roofs: "540+", note: "Full residential & commercial" },
  { slug: "westminster", name: "Westminster", count: "480+ roofs", roofs: "480+", note: "Storm-response priority zone" },
  { slug: "aurora", name: "Aurora", count: "420+ roofs", roofs: "420+", note: "Full residential & commercial" },
  { slug: "golden", name: "Golden", count: "310+ roofs", roofs: "310+", note: "Residential focus" },
  { slug: "broomfield", name: "Broomfield", count: "280+ roofs", roofs: "280+", note: "Full residential & commercial" },
  { slug: "thornton", name: "Thornton", count: "240+ roofs", roofs: "240+", note: "Edge of service area — call to confirm" },
];

/** City-page template content — [City] token is replaced with the city name. */
export const cityServices = [
  { title: "Roof Replacement", desc: "Full tear-off and re-roof, most [City] homes done in 1–2 days." },
  { title: "Roof Repair", desc: "Leaks and localized damage, usually fixed within the week." },
  { title: "Storm & Insurance", desc: "Hail/wind documentation and claim support for [City] storms." },
  { title: "Commercial", desc: "TPO, EPDM, and metal for [City] businesses and multi-family." },
  { title: "Gutters & Skylights", desc: "Seamless gutters and skylights fitted during or after a re-roof." },
  { title: "Inspections", desc: "Free condition reports for buying, selling, or peace of mind." },
];

export const cityLocalFacts = [
  {
    title: "Hail season, May–August",
    desc: "The Front Range sits in Hail Alley — we recommend Class 4 impact-rated shingles, which many insurers discount 10–28%.",
  },
  {
    title: "1950s–70s housing stock",
    desc: "Many mid-century ranches have low-slope sections that shingles can't protect — we pair them with membrane systems correctly.",
  },
  {
    title: "Permits handled for you",
    desc: "We pull the permit, schedule the municipal inspection, and hand you the signed-off card with your warranty packet.",
  },
  {
    title: "HOA color approvals",
    desc: "We prepare the shingle spec sheets and color boards most metro HOAs require, and handle the submission with you.",
  },
];
