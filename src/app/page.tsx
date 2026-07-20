import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ClipboardCheck,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal, RevealGroup, RevealItem, Counter } from "@/components/ui/motion";
import { Section } from "@/components/sections/Section";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { FinalCta } from "@/components/sections/FinalCta";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { homeServices, homeSteps } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { homeFaqs } from "@/lib/faqs";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { faqSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Denver Roofing Contractor | Residential & Commercial Roofing`,
  },
  description:
    "Precision-installed roofing systems with transparent pricing and a 15-year workmanship warranty. Free inspections for homeowners and property managers across the Denver metro.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — The roof over everything you love.`,
    description:
      "Precision-installed roofing, transparent pricing, and a workmanship warranty we actually stand behind.",
    url: "/",
    images: [{ url: images.homeShingleDusk.src, alt: images.homeShingleDusk.alt }],
  },
};

const homeReviews = [
  {
    quote:
      "They found the leak two other companies missed, fixed it the same week, and the invoice matched the quote to the dollar. Our whole cul-de-sac uses Ridgeline now.",
    name: "Melissa Grantham",
    meta: "Roof replacement · Arvada",
  },
  {
    quote:
      "After the June hailstorm we had a tarp on the roof within hours. Luis met our adjuster on the roof and the claim covered everything he documented.",
    name: "Derek & Priya Nandakumar",
    meta: "Storm repair · Westminster",
  },
  {
    quote:
      "They re-roofed our retail plaza over two weekends without a single tenant complaint. The photo reports made my owner meetings easy.",
    name: "Carol Jimenez, Property Manager",
    meta: "Commercial re-roof · Lakewood",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Our own crews",
    desc: "Background-checked, badged employees — never anonymous subcontractors on your roof.",
  },
  {
    icon: ClipboardCheck,
    title: "Fixed written pricing",
    desc: "The quote is the price. Hidden decking damage is itemized per sheet, up front.",
  },
  {
    icon: BadgeCheck,
    title: "Certified installers",
    desc: "Manufacturer-certified crews — which is what unlocks the strongest warranties.",
  },
  {
    icon: Sparkles,
    title: "Spotless job sites",
    desc: "Landscaping protected, debris hauled same day, and a magnet pass for every nail.",
  },
];

const homeStats = [
  { value: siteConfig.stats.yearsInBusiness, label: "Years in business" },
  { value: siteConfig.stats.roofsCompleted, label: "Roofs completed" },
  { value: siteConfig.stats.avgRating, label: "Average rating" },
  { value: siteConfig.stats.teamMembers, label: "Team members" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(homeFaqs))} />
      <Header transparent />
      <main id="main-content">
        <Hero />

        <TrustStrip />

        {/* ===== Services ===== */}
        <Section label="Services" className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title="Roofing done right, start to finish"
                link={{ label: "All services", href: "/residential-roofing" }}
                className="mb-10"
              />
            </Reveal>
            <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {homeServices.map((svc) => (
                <RevealItem key={svc.title}>
                  <ServiceCard {...svc} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>

        {/* ===== Why choose us ===== */}
        <Section label="Why choose us" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <Reveal direction="left">
              <Eyebrow className="mb-4">Why Ridgeline</Eyebrow>
              <h2 className="m-0 text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-[42px]">
                A roofer homeowners actually recommend
              </h2>
              <p className="mt-5 max-w-[48ch] text-[15.5px] leading-[1.7] text-muted">
                For over two decades we&apos;ve built our name on honest inspections, fixed pricing,
                and clean job sites — not high-pressure sales. Here&apos;s what that looks like on
                your project.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4 lg:grid-cols-2">
                {homeStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-4xl">
                      <Counter value={s.value} />
                    </div>
                    <div className="mt-1.5 text-[12.5px] font-medium text-faint">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <RevealGroup className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((f) => (
                <RevealItem key={f.title}>
                  <div className="group h-full rounded-2xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/30 hover:bg-white hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                      <f.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-[18px] font-bold tracking-[-0.01em] text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-muted">{f.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>

        {/* ===== Residential vs Commercial ===== */}
        <Section label="Residential and commercial" className="bg-cream py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {[
              {
                img: images.homeSuburbanDusk,
                eyebrow: "For homeowners",
                title: "Residential roofing",
                desc: "Shingle, metal, and tile roofs installed with care for your family, your landscaping, and your schedule. Most homes finished in one to two days.",
                tags: ["Roof replacement", "Repairs", "Gutters & skylights"],
                href: "/residential-roofing",
                cta: "Residential Roofing",
              },
              {
                img: images.commercialBuilding,
                eyebrow: "For property managers",
                title: "Commercial roofing",
                desc: "TPO, EPDM, and metal systems for offices, retail, and multi-family — with maintenance programs that extend roof life and protect your budget.",
                tags: ["Flat & low-slope", "Maintenance plans", "Tenant-safe scheduling"],
                href: "/commercial-roofing",
                cta: "Commercial Roofing",
              },
            ].map((c, i) => (
              <Reveal key={c.title} direction={i === 0 ? "left" : "right"}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-500 hover:shadow-lift">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={c.img.src}
                      alt={c.img.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-ink backdrop-blur">
                      {c.eyebrow}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-7 md:p-9">
                    <h3 className="m-0 text-2xl font-extrabold tracking-[-0.02em] text-ink md:text-[30px]">
                      {c.title}
                    </h3>
                    <p className="m-0 text-[15px] leading-[1.65] text-muted">{c.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-panel px-3 py-1.5 text-[12.5px] font-medium text-steel-deep"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Button
                      href={c.href}
                      variant={i === 0 ? "dark" : "outline"}
                      className="mt-2 self-start"
                    >
                      {c.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ===== Process ===== */}
        <Section label="How it works" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <Eyebrow className="mb-4">How it works</Eyebrow>
              <h2 className="mb-12 mt-0 text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-[42px]">
                From inspection to installation
              </h2>
            </Reveal>
            <ProcessSteps steps={homeSteps} />
          </div>
        </Section>

        {/* ===== Featured projects + Before/After ===== */}
        <Section label="Recent work" className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Recent work"
                title="Roofs we're proud of"
                link={{ label: "All projects", href: "/projects" }}
                className="mb-10"
              />
            </Reveal>
            <RevealGroup className="mb-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((prj) => (
                <RevealItem key={prj.slug}>
                  <ProjectCard
                    title={prj.title}
                    meta={prj.meta}
                    image={prj.image}
                    href={`/projects/${prj.slug}`}
                  />
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-[13px] font-medium text-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                Drag to compare — same home, before &amp; after
              </p>
              <BeforeAfter before="homeBrickAged" after="homeBrickNew" />
            </Reveal>
          </div>
        </Section>

        {/* ===== Testimonials (dark) ===== */}
        <Section label="Reviews" className="relative overflow-hidden bg-ink py-16 text-white lg:py-20">
          <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow onDark className="mb-4">
                  Reviews
                </Eyebrow>
                <h2 className="m-0 text-3xl font-extrabold tracking-[-0.03em] md:text-[42px]">
                  What homeowners say
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                <span className="font-display text-3xl font-extrabold text-white">
                  {siteConfig.stats.avgRating}
                </span>
                <div className="text-[13px] leading-tight text-taupe">
                  <div className="text-terracotta-soft">★★★★★</div>
                  {siteConfig.stats.reviewCount} verified reviews
                </div>
              </div>
            </Reveal>
            <RevealGroup className="grid gap-5 md:grid-cols-3">
              {homeReviews.map((rev, i) => (
                <RevealItem key={i}>
                  <TestimonialCard {...rev} onDark />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>

        {/* ===== Warranty / Financing ===== */}
        <Section label="Warranty and financing" className="bg-cream py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-white p-8 shadow-card md:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-steel/10 text-steel">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h2 className="m-0 text-[26px] font-extrabold tracking-[-0.02em] text-ink md:text-[32px]">
                  Covered in writing, not in promises
                </h2>
                <p className="m-0 text-[15px] leading-[1.65] text-muted">
                  Every installation includes a manufacturer material warranty plus our own 15-year
                  workmanship warranty — transferable if you sell your home.
                </p>
                <div className="mt-auto flex flex-wrap gap-8 pt-2">
                  <Stat value="15-yr" label="Workmanship" animate />
                  <Stat value="Up to 50-yr" label="Materials" />
                  <Stat value="100%" label="Transferable" animate />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-navy md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-terracotta/25 blur-3xl"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/15 text-terracotta-soft">
                  <Wallet className="h-6 w-6" />
                </span>
                <h2 className="relative m-0 text-[26px] font-extrabold tracking-[-0.02em] md:text-[32px]">
                  A new roof from $159/month
                </h2>
                <p className="relative m-0 text-[15px] leading-[1.65] text-taupe">
                  Flexible plans through our lending partners, including 0% intro options for
                  qualified buyers. Get a decision in minutes — no impact on your credit to check.
                </p>
                <Button href="/financing" variant="accent" className="relative mt-auto self-start">
                  Explore Financing
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ===== Service areas ===== */}
        <Section label="Service areas" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <Eyebrow className="mb-4">Service areas</Eyebrow>
              <h2 className="m-0 text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-[42px]">
                Local crews, close by
              </h2>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.65] text-muted">
                We only work where we can show up fast — for estimates, installs, and anything
                after.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {siteConfig.serviceAreas.map((area) => (
                  <Link
                    key={area}
                    href="/service-areas"
                    className="group inline-flex items-center gap-2 rounded-xl border border-line bg-cream px-4 py-3 text-[14px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-card"
                  >
                    <MapPin className="h-4 w-4 text-terracotta" />
                    {area}
                  </Link>
                ))}
              </div>
              <Link
                href="/service-areas"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
              >
                All service areas
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal direction="right">
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-card lg:h-[420px]">
                <Image
                  src={images.neighborhoodAerial.src}
                  alt={images.neighborhoodAerial.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ===== FAQ ===== */}
        <Section label="FAQ" className="bg-cream py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="left">
              <Eyebrow className="mb-4">FAQ</Eyebrow>
              <h2 className="m-0 text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-4xl">
                Common questions
              </h2>
              <p className="mb-0 mt-4 text-[15px] leading-[1.65] text-muted">
                Something else on your mind? Call us — a real person answers.
              </p>
              <Button href={siteConfig.phoneHref} variant="outline" className="mt-6">
                {siteConfig.phone}
              </Button>
            </Reveal>
            <Reveal direction="right">
              <FaqAccordion faqs={homeFaqs} />
            </Reveal>
          </div>
        </Section>

        <EmergencyBanner message="Storm damage or active leak? We answer 24/7 and can tarp your roof today." />

        <InstagramFeed />

        <FinalCta
          title="Know your roof's condition by this weekend."
          body="A free 30-minute inspection with a written photo report — condition, remaining lifespan, and honest options. No pressure, ever."
          maxTitleWidth="20ch"
        />
      </main>
      <Footer />
    </>
  );
}
