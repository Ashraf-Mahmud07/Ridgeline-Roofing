export type NavChild = { label: string; href: string; desc?: string };

export type NavItem = {
  label: string;
  href: string;
  /** Dropdown entries — rendered as a hover/focus panel on desktop. */
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: "Residential",
    href: "/residential-roofing",
    children: [
      { label: "Residential Overview", href: "/residential-roofing", desc: "Everything a home roof needs" },
      { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Tear-off to new system in 1–2 days" },
      { label: "Storm & Insurance", href: "/storm-damage", desc: "Hail damage and claim support" },
      { label: "Free Inspection", href: "/book-an-inspection", desc: "Written photo report, no obligation" },
    ],
  },
  { label: "Commercial", href: "/commercial-roofing" },
  { label: "Storm Damage", href: "/storm-damage" },
  { label: "Projects", href: "/projects" },
  { label: "Financing", href: "/financing" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", desc: "22 years, family-owned" },
      { label: "Service Areas", href: "/service-areas", desc: "14 Denver-metro cities" },
      { label: "Learning Center", href: "/blog", desc: "Honest roofing guides" },
      { label: "FAQ", href: "/faq", desc: "Pricing, process, warranties" },
      { label: "Careers", href: "/careers", desc: "We're hiring installers" },
      { label: "Contact", href: "/contact", desc: "A real person answers" },
    ],
  },
];

/** Flat list for the mobile menu — every reachable page, grouped. */
export const mobileNavGroups: { title: string; links: NavChild[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Residential Roofing", href: "/residential-roofing" },
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Storm Damage", href: "/storm-damage" },
      { label: "Financing", href: "/financing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "About Us", href: "/about" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Learning Center", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
