/**
 * Central image registry. Every remote image used on the site lives here so
 * IMAGES.md and the pages stay in sync. All URLs verified (HTTP 200 + visual
 * relevance check) against images.unsplash.com / images.pexels.com CDNs.
 */
export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  /* ===== Roofers at work ===== */
  rooferOnShingles: {
    src: unsplash("1635424710928-0544e8512eae"),
    alt: "Roofer in safety harness working on an asphalt shingle roof of a residential home",
  },
  roofRepairCrew: {
    src: unsplash("1632759145351-1d592919f522"),
    alt: "Roofing contractor repairing aged shingles on the roof of a brick home with a ladder",
  },
  roofConstructionAerial: {
    src: pexels(2098624),
    alt: "Aerial view of a roofing crew installing decking and underlayment on a new residential roof",
  },
  crewTimberFraming: {
    src: pexels(8961127),
    alt: "Roofing crew working beneath exposed timber roof framing on a job site",
  },
  workerMetalPanels: {
    src: pexels(8853502),
    alt: "Roofing technician in hard hat fastening standing-seam metal roof panels",
  },
  constructionCrewSite: {
    src: unsplash("1541888946425-d81bb19240f5"),
    alt: "Commercial construction crew reviewing progress on a large building site",
  },
  constructionWorkersStructure: {
    src: unsplash("1504307651254-35680f356dfd"),
    alt: "Construction workers on the structural framework of a commercial roofing project",
  },
  contractorsReviewingPlans: {
    src: pexels(1216589),
    alt: "Two roofing contractors in hard hats reviewing inspection plans on site",
  },

  /* ===== Finished roofs & homes ===== */
  homeShingleDusk: {
    src: pexels(1396122),
    alt: "Completed architectural shingle roof on a two-story home at golden hour",
  },
  homeSuburbanDusk: {
    src: pexels(106399),
    alt: "Newly roofed suburban family home with architectural shingles at dusk",
  },
  homeSuburbanDusk2: {
    src: pexels(186077),
    alt: "Single-family home with a freshly installed asphalt shingle roof at sunset",
  },
  homeTraditional: {
    src: unsplash("1570129477492-45c003edd2be"),
    alt: "Traditional home with architectural shingle roof, seamless gutters, and landscaped yard",
  },
  homeLuxuryDusk: {
    src: unsplash("1564013799919-ab600027ffc6"),
    alt: "Luxury residence with a multi-gable architectural shingle roof lit at dusk",
  },
  homeCabinDusk: {
    src: unsplash("1568605114967-8130f3a36994"),
    alt: "Home with a steep-pitch shingle roof and stone chimney at twilight",
  },
  homeMetalRoof: {
    src: unsplash("1583608205776-bfd35f0d9f83"),
    alt: "Craftsman-style home with a standing-seam metal roof and covered porch",
  },
  homeModernDark: {
    src: unsplash("1600585154340-be6161a56a0c"),
    alt: "Modern home with dark low-slope roofing and clean exterior lines",
  },
  homeModernMetal: {
    src: unsplash("1600047509807-ba8f99d2cdde"),
    alt: "Contemporary home with metal roof cladding and flat-roof sections",
  },
  homeModernEvening: {
    src: unsplash("1494526585095-c41746248156"),
    alt: "Modern two-story home with new roofing photographed in evening light",
  },
  homeSunset: {
    src: unsplash("1558036117-15d82a90b9b1"),
    alt: "Residential home with a wide shingle roofline against a sunset sky",
  },
  homeBrickNew: {
    src: pexels(462358),
    alt: "Large brick home with a crisp new architectural shingle roof under a clear sky",
  },
  homeBrickClassic: {
    src: pexels(259588),
    alt: "Brick residence with a steep architectural shingle roof and landscaped drive",
  },
  homeBrickClassic2: {
    src: pexels(259593),
    alt: "Stone-and-brick home with a complex multi-valley shingle roof",
  },
  homeGrayLawn: {
    src: pexels(280222),
    alt: "Gray two-story home with a new gabled shingle roof and large lawn",
  },
  homeBeige: {
    src: pexels(164558),
    alt: "Beige single-family home with fresh asphalt shingle roofing and gutters",
  },
  homeSuburbanBig: {
    src: pexels(221540),
    alt: "Large suburban house with a multi-gable architectural shingle roof",
  },
  homeBrickAged: {
    src: pexels(209315),
    alt: "Older brick home with an aging shingle roof before replacement",
  },
  homeFlatVilla: {
    src: unsplash("1512917774080-9991f1c4c750"),
    alt: "Residence with flat and low-slope membrane roof sections",
  },
  homeVillaModern: {
    src: unsplash("1580587771525-78b9dba3b914"),
    alt: "Modern villa with mixed flat-roof and low-slope construction",
  },
  tileRoofCloseup: {
    src: pexels(1453799),
    alt: "Close-up of weathered clay tile roofing showing texture and overlap detail",
  },

  /* ===== Neighborhoods & aerial ===== */
  neighborhoodAerial: {
    src: pexels(1642125),
    alt: "Drone aerial view of a residential neighborhood showing dozens of shingled rooftops",
  },
  townRooftops: {
    src: pexels(280221),
    alt: "Aerial view of a town with varied rooftops across the local service area",
  },
  suburbanStreet: {
    src: unsplash("1605146769289-440113cc3d00"),
    alt: "Street of suburban homes with asphalt shingle roofs in a local neighborhood",
  },

  /* ===== Commercial ===== */
  commercialBuilding: {
    src: unsplash("1486406146926-c627a92ad1ab"),
    alt: "Modern commercial office building with flat membrane roofing",
  },
  commercialTowers: {
    src: pexels(273250),
    alt: "Commercial buildings with flat roofs viewed from ground level",
  },
  multiFamilyBuilding: {
    src: pexels(2079234),
    alt: "Multi-family apartment building with low-slope roofing systems",
  },

  /* ===== Storm ===== */
  stormLightningDark: {
    src: unsplash("1516490981167-dc990a242afe"),
    alt: "Severe storm with lightning strikes over a residential area at night",
  },
  stormLightningBolt: {
    src: unsplash("1429552077091-836152271555"),
    alt: "Lightning bolt striking during a severe thunderstorm",
  },
  stormLightningField: {
    src: pexels(1118869),
    alt: "Dramatic lightning storm of the kind that causes wind and hail roof damage",
  },
  stormOverCity: {
    src: pexels(1162251),
    alt: "Lightning storm passing over a city skyline",
  },
  stormTornado: {
    src: pexels(1446076),
    alt: "Tornado and lightning over open fields during severe weather",
  },

  /* ===== Trust, docs, people ===== */
  handshake: {
    src: unsplash("1521791136064-7986c2920216"),
    alt: "Roofing contractor shaking hands with a homeowner after a completed project",
  },
  writingPlans: {
    src: unsplash("1503387762-592deb58ef4e"),
    alt: "Contractor preparing a written roof inspection report over blueprints",
  },
  deskReport: {
    src: unsplash("1454165804606-c3d57bc86b40"),
    alt: "Fixed written roofing quote and photo report being prepared at a desk",
  },
  sketchingPlans: {
    src: unsplash("1581092160562-40aa08e78837"),
    alt: "Estimator detailing a roof measurement and documentation plan",
  },
  officeConsult: {
    src: pexels(5439137),
    alt: "Office team member walking a customer through roofing options",
  },
  teamMeeting: {
    src: pexels(3184291),
    alt: "Ridgeline office team collaborating around a table",
  },
  houseKeys: {
    src: unsplash("1560518883-ce09059eeffa"),
    alt: "Model house and keys representing a pre-sale roof inspection",
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
