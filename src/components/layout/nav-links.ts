export type NavItem = {
  label: string;
  href: string;
  caret?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Residential", href: "/residential-roofing", caret: true },
  { label: "Commercial", href: "/commercial-roofing", caret: true },
  { label: "Storm Damage", href: "/storm-damage" },
  { label: "Projects", href: "/projects" },
  { label: "Financing", href: "/financing" },
  { label: "Company", href: "/about", caret: true },
];
