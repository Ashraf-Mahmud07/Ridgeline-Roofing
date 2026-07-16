/**
 * Single source of truth for business identity and contact info.
 * Demo content: Ridgeline Roofing, a Denver-metro / Front Range roofing
 * contractor founded in 2003. Phone uses the reserved 555-01XX fictional
 * range in a real US format; swap all values here before go-live.
 */
export const siteConfig = {
  name: "Ridgeline Roofing",
  legalName: "Ridgeline Roofing, LLC",
  tagline: "Premium residential and commercial roofing. Licensed, insured, and warranty-backed.",
  url: "https://ridgelineroofing.com",

  phone: "(720) 555-0142",
  phoneHref: "tel:+17205550142",
  email: "hello@ridgelineroofing.com",
  legalEmail: "legal@ridgelineroofing.com",

  address: {
    street: "4280 Ward Road",
    city: "Wheat Ridge",
    state: "CO",
    zip: "80033",
    label: "4280 Ward Road, Wheat Ridge, CO",
  },
  geo: {
    latitude: 39.7772,
    longitude: -105.1085,
  },

  region: "the Denver metro",
  hours: "Mon–Sat 7am–6pm",
  openingHours: "Mo-Sa 07:00-18:00",
  emergencyNote: "24/7 Emergency",

  license: "CO License #RC-2214087",
  insuredNote: "Fully insured",

  founded: 2003,

  serviceAreas: [
    "Denver",
    "Arvada",
    "Lakewood",
    "Westminster",
    "Aurora",
    "Golden",
  ],

  stats: {
    yearsInBusiness: "22+",
    roofsCompleted: "4,800+",
    avgRating: "4.9",
    reviewCount: "612",
    teamMembers: "38",
    citiesServed: "14",
  },

  social: {
    facebook: "https://www.facebook.com/ridgelineroofing",
    instagram: "https://www.instagram.com/ridgelineroofing",
    google: "https://maps.google.com/?q=Ridgeline+Roofing+Wheat+Ridge+CO",
  } as Record<string, string>,
} as const;

export type SiteConfig = typeof siteConfig;
