import Link from "next/link";
import { SlimHeaderCta } from "@/components/layout/Header";
import { Logo } from "@/components/ui/Logo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export type LegalSection = { title: string; body: string };

/**
 * Shared legal layout — the design's single toggle page becomes two routes
 * (/privacy and /terms) that link to each other from the sidebar.
 */
export function LegalPage({
  docTitle,
  sections,
  active,
}: {
  docTitle: string;
  sections: LegalSection[];
  active: "privacy" | "terms";
}) {
  return (
    <>
      <SlimHeaderCta sticky />
      <main id="main-content" className="mx-auto grid max-w-[1200px] gap-10 px-6 pb-16 pt-11 md:px-10 lg:grid-cols-[280px_1fr] lg:gap-16 lg:px-14">
        <div>
          <nav aria-label="Legal documents" className="flex flex-col lg:sticky lg:top-[88px]">
            <div className="border-b border-line pb-3 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              Legal
            </div>
            <Link
              href="/privacy"
              aria-current={active === "privacy" ? "page" : undefined}
              className={`border-b border-line py-[13px] text-[14.5px] ${
                active === "privacy" ? "font-[650] text-terracotta" : "font-[450] text-muted hover:text-ink"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              aria-current={active === "terms" ? "page" : undefined}
              className={`border-b border-line py-[13px] text-[14.5px] ${
                active === "terms" ? "font-[650] text-terracotta" : "font-[450] text-muted hover:text-ink"
              }`}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="max-w-[680px]">
          <Breadcrumbs
            crumbs={[{ name: "Home", href: "/" }, { name: docTitle }]}
            className="mb-4"
          />
          <h1 className="m-0 text-[32px] font-[650] tracking-[-0.025em] md:text-[40px]">
            {docTitle}
          </h1>
          <div className="mt-2.5 border-b border-line pb-6 text-[13.5px] text-faint">
            Last updated: January 15, 2026 · Applies to {siteConfig.url.replace("https://", "")} and all {siteConfig.name} services
          </div>
          {sections.map((s) => (
            <section key={s.title} className="mt-8">
              <h2 className="mb-2.5 mt-0 text-[21px] font-[650] tracking-[-0.01em]">{s.title}</h2>
              <p className="m-0 text-[15px] leading-[1.7] text-[#3d3933]">{s.body}</p>
            </section>
          ))}
          <div className="mt-10 border border-line bg-panel-soft px-6 py-5 text-sm leading-[1.6] text-muted">
            Questions about this document? Email{" "}
            <span className="font-semibold text-ink">{siteConfig.legalEmail}</span> or write to{" "}
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}{" "}
            {siteConfig.address.zip}.
          </div>
        </div>
      </main>
      <footer className="bg-ink-deep px-6 py-9 text-taupe md:px-10 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-4 text-[12.5px] sm:flex-row sm:items-center">
          <Logo variant="light" size={22} />
          <span>© 2026 {siteConfig.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className={active === "privacy" ? "text-cream" : "text-taupe hover:text-cream"}>
              Privacy
            </Link>
            <Link href="/terms" className={active === "terms" ? "text-cream" : "text-taupe hover:text-cream"}>
              Terms
            </Link>
            <Link href="/contact" className="text-taupe hover:text-cream">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export const privacySections: LegalSection[] = [
  {
    title: "1. Information we collect",
    body: "We collect the information you give us directly: your name, phone number, and email from forms and calls; the property address when you request an estimate or book an inspection; and photos of your roof taken during inspections or shared by you. Our website also collects standard analytics data such as pages visited and device type.",
  },
  {
    title: "2. How we use it",
    body: "Your information is used to schedule inspections, prepare quotes, maintain warranty records, and send service reminders you've asked for. We do not sell your personal information to anyone, and we don't share it for third-party marketing.",
  },
  {
    title: "3. Who we share it with",
    body: "We share information only where the work requires it: with our financing partner (GreenSky®) when you apply for financing, with manufacturers (such as GAF or CertainTeed) to register your material warranty, and with your insurance company only at your request during a claim.",
  },
  {
    title: "4. Cookies & analytics",
    body: "We use first-party cookies and a privacy-respecting analytics tool to understand how the site is used — which pages help people and which don't. You can block cookies in your browser settings without losing access to any part of the site.",
  },
  {
    title: "5. Your rights",
    body: "You can request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it (except records we're required to keep, like active warranty documents). Email legal@ridgelineroofing.com and we'll respond within 30 days.",
  },
  {
    title: "6. Data retention & security",
    body: "Project and warranty records are kept for the life of the warranty — up to 50 years — because that's what protects you if you ever need a claim honored. Everything else is deleted within 3 years of your last contact with us. Records are stored on access-controlled, encrypted systems.",
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "1. Services",
    body: "Ridgeline Roofing, LLC provides roof inspections, estimates, roof replacement, repair, maintenance, and related exterior work (gutters, skylights, ventilation) as described in your signed proposal. The signed proposal — not this page or any verbal conversation — defines the scope of work for your project.",
  },
  {
    title: "2. Estimates & pricing",
    body: "Written quotes are fixed for 30 days from the date issued. The quoted price is the price you pay, with one exception: hidden decking damage discovered during tear-off, which is itemized per sheet in your proposal before work begins and billed only for sheets actually replaced, with photos.",
  },
  {
    title: "3. Scheduling & weather",
    body: "Roofing is weather-dependent. If we postpone for weather, you'll hear from us by 7am the day of the job and be rescheduled within 5 business days. We never open more roof than we can dry-in the same day; any exposed section is tarped watertight overnight at our expense.",
  },
  {
    title: "4. Warranty terms",
    body: "Every full replacement includes our 15-year workmanship warranty covering installation defects, plus the manufacturer's material warranty (up to 50 years depending on system), which we register on your behalf. Both transfer once to a new owner if you sell. Coverage is voided by unapproved rooftop installations, pressure washing, or repairs by uncertified third parties.",
  },
  {
    title: "5. Payment",
    body: "Residential projects: no deposit for insurance work; 10% deposit for retail work, balance due on completion after your walkthrough. Financing through GreenSky® is available on approved credit. Invoices unpaid 30 days after completion accrue 1.5% monthly interest as permitted by Colorado law.",
  },
  {
    title: "6. Liability & disputes",
    body: "We carry $2M in general liability coverage and full workers' compensation on every crew member. Property damage claims are documented with photos and resolved directly — usually within 10 business days. These terms are governed by Colorado law; disputes go first to mediation in Jefferson County before any court filing.",
  },
];
