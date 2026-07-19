# Image Manifest

Every remote image on the site is registered in `src/lib/images.ts` and referenced by key.
**To swap any photo site-wide, change its URL in that one file.** All URLs were verified
(HTTP 200 + visual relevance check) against the Unsplash/Pexels CDNs at build time.

Per-slug usage on project case studies and blog articles is defined in
`src/lib/projects.ts` (hero/gallery/before/after per project) and `src/lib/posts.ts`
(cover per article) — the table below lists each image's primary placements.

Sources: [Unsplash License](https://unsplash.com/license) · [Pexels License](https://www.pexels.com/license/) — both free for commercial use, no attribution required.

## Where each image is used

| Registry key | Source | Page · Section | Alt text (summary) | Recommended replacement |
|---|---|---|---|---|
| `homeShingleDusk` | Pexels 1396122 | Home · Hero; Replacement · Shingle tab | Completed architectural shingle roof at golden hour | Flagship finished-roof photo (golden hour) |
| `rooferOnShingles` | Unsplash 1635424710928 | Project detail · Gallery | Roofer in harness on shingle roof | Real crew-at-work photo |
| `roofRepairCrew` | Unsplash 1632759145351 | Home · Repair card; Projects · storm cards; Blog · repair post; City · projects | Contractor repairing aged shingles on brick home | Real repair-job photo |
| `roofConstructionAerial` | Pexels 2098624 | Home · Replacement card; Replacement · Hero; Article · cover | Aerial of crew installing decking/underlayment | Drone shot of your crew mid-install |
| `crewTimberFraming` | Pexels 8961127 | Residential · Why us; Careers · Hero; About · team slot; Blog · ventilation post | Crew under timber roof framing | Your crew protecting landscaping / at work |
| `workerMetalPanels` | Pexels 8853502 | Project detail · Gallery (seam detail) | Technician fastening metal roof panels | Standing-seam detail from a real job |
| `constructionCrewSite` | Unsplash 1541888946425 | About · Hero | Commercial construction crew on site | Full team photo in front of the shop |
| `constructionWorkersStructure` | Unsplash 1504307651254 | (reserve) | Workers on structural framework | — |
| `contractorsReviewingPlans` | Pexels 1216589 | Home · Inspections card; Commercial · Maintenance; About · team slot | Contractors in hard hats reviewing plans | Inspector on a flat roof with tablet |
| `homeSuburbanDusk` | Pexels 106399 | Home · For homeowners; Projects grid; City · local projects | Suburban home with shingle roof at dusk | Real completed residential project |
| `homeSuburbanDusk2` | Pexels 186077 | Residential · Hero; Project detail · related | Single-family home, new shingle roof at sunset | Real completed residential project |
| `homeTraditional` | Unsplash 1570129477492 | Home · Gutters card; Blog · fall checklist | Traditional home with shingle roof + gutters | Close-up of seamless gutter install |
| `homeLuxuryDusk` | Unsplash 1564013799919 | Financing · Hero | Luxury residence, multi-gable shingle roof at dusk | Happy-customer home (family in front) |
| `homeCabinDusk` | Unsplash 1568605114967 | (reserve) | Steep-pitch shingle roof at twilight | — |
| `homeMetalRoof` | Unsplash 1583608205776 | Replacement · Metal tab; Projects grid; Project detail · hero; Blog · asphalt-vs-metal | Craftsman home with standing-seam metal roof | Real metal-roof project |
| `homeModernDark` | Unsplash 1600585154340 | (reserve) | Modern home, dark low-slope roofing | — |
| `homeModernMetal` | Unsplash 1600047509807 | Projects grid (metal barn); Project detail · gallery | Contemporary home with metal cladding | Real metal/ag-building project |
| `homeModernEvening` | Unsplash 1494526585095 | Project detail · gallery (wide) | Modern two-story home, evening | Finished-roofline wide shot |
| `homeSunset` | Unsplash 1558036117 | (reserve) | Wide shingle roofline at sunset | — |
| `homeBrickNew` | Pexels 462358 | Home/Projects/Replacement · "After"; Projects grid | Brick home with crisp new architectural shingle roof | Real "after" photo |
| `homeBrickClassic` | Pexels 259588 | (reserve) | Brick home, steep shingle roof | — |
| `homeBrickClassic2` | Pexels 259593 | (reserve) | Stone-and-brick home, multi-valley roof | — |
| `homeGrayLawn` | Pexels 280222 | (reserve) | Gray two-story home, gabled roof | — |
| `homeBeige` | Pexels 164558 | (reserve) | Beige home with shingles + gutters | — |
| `homeSuburbanBig` | Pexels 221540 | (reserve) | Large suburban multi-gable roof | — |
| `homeBrickAged` | Pexels 209315 | Home/Projects/Replacement/Detail · "Before"; Projects grid (hail claim) | Older brick home with aging roof | Real "before" photo (same angle as after) |
| `homeFlatVilla` | Unsplash 1512917774080 | Replacement · Flat/Low-Slope tab | Residence with flat membrane roof sections | TPO/EPDM install photo |
| `homeVillaModern` | Unsplash 1580587771525 | (reserve) | Modern villa, flat-roof construction | — |
| `tileRoofCloseup` | Pexels 1453799 | Replacement · Tile tab; Projects grid (tile) | Clay tile roofing close-up | Real tile-roof project |
| `neighborhoodAerial` | Pexels 1642125 | Home · Service areas | Drone aerial of neighborhood rooftops | Drone shot over your actual service area |
| `townRooftops` | Pexels 280221 | Service Areas · Hero (map slot) | Aerial of town rooftops | Service-area map graphic with coverage radius |
| `suburbanStreet` | Unsplash 1605146769289 | City page · Hero | Street of suburban homes | Recognizable per-city streetscape photos |
| `commercialBuilding` | Unsplash 1486406146926 | Home · Commercial cards; Projects (TPO); Project detail · related | Commercial building, flat membrane roof | Real commercial project |
| `commercialTowers` | Pexels 273250 | Commercial · Hero; Projects grid (EPDM retail) | Commercial buildings, flat roofs | Drone shot of a commercial flat roof you installed |
| `multiFamilyBuilding` | Pexels 2079234 | (reserve) | Multi-family building, low-slope roofing | — |
| `stormLightningDark` | Unsplash 1516490981167 | Storm · Hero | Storm with lightning over residential area | Storm-damaged roof / crew tarping photo |
| `stormLightningBolt` | Unsplash 1429552077091 | (reserve) | Lightning bolt | — |
| `stormLightningField` | Pexels 1118869 | Home · Storm card; Blog · hail post | Dramatic lightning storm | Hail-on-shingles close-up |
| `stormOverCity` | Pexels 1162251 | (reserve) | Lightning over city skyline | — |
| `stormTornado` | Pexels 1446076 | (reserve) | Tornado + lightning over fields | — |
| `handshake` | Unsplash 1521791136064 | (reserve — trust sections) | Contractor/homeowner handshake | Real customer handshake photo |
| `writingPlans` | Unsplash 1503387762 | Storm · Insurance section | Contractor preparing written report over blueprints | Inspector documenting hail damage on-site |
| `deskReport` | Unsplash 1454165804606 | Blog · Featured cover; Article · inline chart | Written quote/photo report at a desk | Cost-ranges infographic |
| `sketchingPlans` | Unsplash 1581092160562 | (reserve) | Estimator detailing measurements | — |
| `officeConsult` | Pexels 5439137 | About · team slot | Office team member with customer | Real office/scheduling staff portrait |
| `teamMeeting` | Pexels 3184291 | (reserve) | Office team collaborating | — |
| `houseKeys` | Unsplash 1560518883 | Blog · buying/selling post | Model house and keys | Pre-sale inspection photo |

## Known gaps (no suitable verified stock found)

- **Gutter close-up** — `homeTraditional` (eaves visible) stands in on the Gutters & Skylights card. Swap for a real seamless-gutter photo.
- **Service-area map** — `townRooftops` aerial stands in. Replace with a real coverage-radius map graphic.
- **Team portraits** (About page) — job-site/office photos stand in for the four team-member portraits (Matt Larsen, Dana Whitfield, Luis Herrera, Karen Osborne). Replace with real headshots.
- **Certification logos** — rendered as monochrome text lockups (GAF Master Elite®, Owens Corning Platinum Preferred, CertainTeed SELECT ShingleMaster™, NRCA, BBB A+, OSHA) in `TrustStrip.tsx`. Swap for the official vector logos (into `public/`) once each program's brand-use permission is confirmed.

## Placeholder texture

The design's diagonal-stripe placeholder texture is preserved as the `.texture` / `.texture-fine`
CSS utilities (used for review avatars and badge slots) until real assets exist.
