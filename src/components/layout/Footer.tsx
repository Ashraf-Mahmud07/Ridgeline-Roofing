import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Roof Repair", href: "/services/roof-replacement" },
  { label: "Storm & Insurance", href: "/storm-damage" },
  { label: "Commercial", href: "/commercial-roofing" },
  { label: "Gutters & Skylights", href: "/services/roof-replacement" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Financing", href: "/financing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Careers", href: "/careers" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 text-xs font-semibold uppercase tracking-label text-cream">
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-deep px-6 pb-[34px] pt-13 text-taupe md:px-10 lg:px-14">
      <div className="grid gap-10 border-b border-line-dark pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-4">
          <Logo variant="light" size={26} />
          <p className="m-0 max-w-[34ch] text-[13.5px] leading-[1.6]">{siteConfig.tagline}</p>
          <div className="text-[13.5px]">
            {siteConfig.license} · {siteConfig.insuredNote}
          </div>
        </div>
        <nav aria-label="Services" className="flex flex-col gap-3 text-sm">
          <ColumnTitle>Services</ColumnTitle>
          {serviceLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-taupe hover:text-cream">
              {l.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Company" className="flex flex-col gap-3 text-sm">
          <ColumnTitle>Company</ColumnTitle>
          {companyLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-taupe hover:text-cream">
              {l.label}
            </Link>
          ))}
        </nav>
        <address className="flex flex-col gap-3 text-sm not-italic">
          <ColumnTitle>Contact</ColumnTitle>
          <a href={siteConfig.phoneHref} className="font-semibold text-cream">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="text-taupe hover:text-cream">
            {siteConfig.email}
          </a>
          <span>{siteConfig.address.street}</span>
          <span>{siteConfig.hours}</span>
        </address>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-6 text-[12.5px] sm:flex-row">
        <span>© 2026 {siteConfig.name}. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-taupe hover:text-cream">
            Privacy
          </Link>
          <Link href="/terms" className="text-taupe hover:text-cream">
            Terms
          </Link>
          <Link href="/sitemap.xml" className="text-taupe hover:text-cream">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}

/** Slim footer for 404 / search / legal pages. */
export function SlimFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 bg-ink-deep px-6 py-6 text-[12.5px] text-taupe sm:flex-row md:px-10 lg:px-14">
      <span>© 2026 {siteConfig.name}. All rights reserved.</span>
      <div className="flex gap-6">
        <Link href="/privacy" className="text-taupe hover:text-cream">
          Privacy
        </Link>
        <Link href="/terms" className="text-taupe hover:text-cream">
          Terms
        </Link>
      </div>
    </footer>
  );
}
