import Link from "next/link";
import type { ComponentType } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Users,
  Award,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Logo } from "@/components/ui/Logo";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { certifications } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

/* Footer content is wider than body content (1440px) with generous gutters —
   this fills the dark band so it reads as a real site footer, not a boxed card. */
const CONTENT = "mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-16";

type NavLink = { label: string; href: string };

const servicesLinks: NavLink[] = [
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Residential Roofing", href: "/residential-roofing" },
  { label: "Commercial Roofing", href: "/commercial-roofing" },
  { label: "Storm & Insurance", href: "/storm-damage" },
  { label: "Gutters & Skylights", href: "/services/roof-replacement" },
];

const companyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks: NavLink[] = [
  { label: "Learning Center", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Financing", href: "/financing" },
  { label: "Free Inspection", href: "/book-an-inspection" },
];

const areaLinks: NavLink[] = siteConfig.serviceAreas.map((city) => ({
  label: city,
  href: `/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`,
}));

const trustPoints: { icon: ComponentType<{ className?: string }>; label: string }[] = [
  { icon: ShieldCheck, label: "Licensed" },
  { icon: BadgeCheck, label: "Fully Insured" },
  { icon: Users, label: "Family Owned" },
  { icon: Award, label: "Mfr. Certified" },
  { icon: Sparkles, label: `Since ${siteConfig.founded}` },
];

/* ---------- reusable pieces ---------- */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 py-1.5 text-[14.5px] text-taupe transition-colors hover:text-white"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={title} className="flex flex-col">
      <FooterHeading>{title}</FooterHeading>
      <ul className="flex flex-col">
        {links.map((l) => (
          <li key={l.label}>
            <FooterLink href={l.href}>{l.label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark-2 text-taupe transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:bg-terracotta hover:text-white"
    >
      {children}
    </a>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white/[0.06] text-terracotta-soft">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
          {label}
        </span>
        <span className="text-[15px] font-medium text-white">{children}</span>
      </span>
    </>
  );
  const cls = "group flex items-start gap-3";
  return href ? (
    <a href={href} className={`${cls} transition-opacity hover:opacity-80`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/* ---------- footer ---------- */

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink-deep text-taupe">
      {/* brand accent hairline */}
      <div className="h-1 w-full bg-gradient-to-r from-terracotta via-terracotta-soft to-steel" />
      {/* ambient depth */}
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative">
        {/* ===== 1. Newsletter (full-width band, first) ===== */}
        <section aria-label="Newsletter" className="border-b border-line-dark bg-white/[0.015]">
          <div className={`${CONTENT} grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-14`}>
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-terracotta-soft">
                Stay ahead of the weather
              </div>
              <h2 className="m-0 max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white md:text-[40px]">
                Roofing insight, straight to your inbox.
              </h2>
              <p className="m-0 mt-3 max-w-[52ch] text-[15px] leading-relaxed text-taupe">
                Seasonal maintenance reminders, storm alerts, and honest advice for{" "}
                {siteConfig.region} homeowners. No spam — unsubscribe anytime.
              </p>
            </div>
            <div className="lg:justify-self-end lg:w-full lg:max-w-md">
              <NewsletterForm />
              <p className="mt-3 text-[12.5px] text-white/40">
                Join {siteConfig.stats.roofsCompleted} homeowners who trust {siteConfig.name}.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 2. Main footer ===== */}
        <div className={`${CONTENT} grid gap-x-10 gap-y-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_2.1fr_1.5fr] lg:py-16`}>
          {/* Brand */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <Logo variant="light" size={42} />
            <p className="m-0 max-w-[36ch] text-[14.5px] leading-[1.75] text-taupe">
              {siteConfig.name} builds precision-installed roofing systems backed by a 15-year
              workmanship warranty — for homeowners and property managers across {siteConfig.region}.
            </p>
            <ul className="flex flex-wrap gap-2">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-dark-2 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-white/80"
                >
                  <Icon className="h-3.5 w-3.5 text-terracotta-soft" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2.5 pt-1">
              <SocialLink href={siteConfig.social.facebook} label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.google} label="Google Business Profile">
                <MapPin className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            <LinkColumn title="Services" links={servicesLinks} />
            <LinkColumn title="Company" links={companyLinks} />
            <div className="flex flex-col">
              <FooterHeading>Service Areas</FooterHeading>
              <ul className="flex flex-col">
                {areaLinks.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
                <li>
                  <Link
                    href="/service-areas"
                    className="mt-1 inline-flex items-center gap-1 text-[13.5px] font-semibold text-terracotta-soft transition-colors hover:text-terracotta"
                  >
                    All service areas
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
            <LinkColumn title="Resources" links={resourceLinks} />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <FooterHeading>Get in touch</FooterHeading>
            <address className="flex flex-col gap-4 not-italic">
              <ContactRow icon={Phone} label="Call or text" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </ContactRow>
              <ContactRow icon={Mail} label="Email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </ContactRow>
              <ContactRow icon={MapPin} label="Visit">
                {siteConfig.address.label}
              </ContactRow>
              <ContactRow icon={Clock} label="Hours">
                {siteConfig.hours}
              </ContactRow>
            </address>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-between gap-3 rounded-xl border border-terracotta/30 bg-terracotta/10 px-4 py-3 transition-colors hover:bg-terracotta/15"
            >
              <span className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="animate-soft-ping h-2.5 w-2.5 flex-none rounded-full bg-terracotta-soft"
                />
                <span className="text-[13.5px] font-semibold text-white">
                  {siteConfig.emergencyNote} service
                </span>
              </span>
              <span className="text-[13.5px] font-bold text-terracotta-soft">Call now →</span>
            </a>
          </div>
        </div>

        {/* ===== 3. Trust & certifications ===== */}
        <section aria-label="Certifications" className="border-t border-line-dark">
          <div className={`${CONTENT} flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between`}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Certified &amp; accredited by
            </span>
            <ul className="flex flex-wrap items-stretch gap-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex flex-col justify-center rounded-xl border border-line-dark-2 bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta/40 hover:bg-white/[0.04]"
                >
                  <span className="text-[15px] font-extrabold uppercase leading-none tracking-[0.04em] text-white">
                    {c.name}
                  </span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white/45">
                    {c.sub}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== 4. Bottom bar ===== */}
        <section className="border-t border-line-dark">
          <div className={`${CONTENT} flex flex-col gap-4 py-6 text-[12.5px] text-white/50 md:flex-row md:items-center md:justify-between`}>
            <span>
              © {year} {siteConfig.legalName}. All rights reserved.
            </span>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="transition-colors hover:text-white">
                Sitemap
              </Link>
              <Link href="/accessibility" className="transition-colors hover:text-white">
                Accessibility
              </Link>
            </nav>
          </div>
        </section>
      </div>

      {/* keep content clear of the fixed mobile CTA bar */}
      <div aria-hidden className="h-16 lg:hidden" />
      <MobileCtaBar />
    </footer>
  );
}

/** Slim footer for 404 / search / legal pages. */
export function SlimFooter() {
  return (
    <footer className="shell flex flex-col items-center justify-between gap-3 bg-ink-deep py-6 text-[12.5px] text-taupe sm:flex-row">
      <span>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </span>
      <div className="flex gap-6">
        <Link href="/privacy" className="text-taupe hover:text-white">
          Privacy
        </Link>
        <Link href="/terms" className="text-taupe hover:text-white">
          Terms
        </Link>
      </div>
    </footer>
  );
}
