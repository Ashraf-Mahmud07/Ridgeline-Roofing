import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import { Section, HairlineGrid } from "@/components/sections/Section";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { FinalCta } from "@/components/sections/FinalCta";
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(homeFaqs))} />
      <Header />
      <main id="main-content">
        {/* ===== Hero ===== */}
        <Section label="Hero" padded={false} className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-9 px-6 pb-13 pt-15 md:px-10 lg:px-14">
            <div>
              <Eyebrow className="mb-[18px]">Residential &amp; Commercial Roofing</Eyebrow>
              <h1 className="display-condensed m-0 text-[44px] font-[650] leading-[0.98] tracking-[-0.025em] md:text-[58px] xl:text-[72px]">
                The roof over everything you love.
              </h1>
              <p className="mb-0 mt-5 max-w-[46ch] text-lg leading-[1.55] text-muted">
                Precision-installed roofing systems, transparent pricing, and a workmanship
                warranty we actually stand behind. Serving homeowners and property managers
                across the region.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="/book-an-inspection" variant="dark" size="lg">
                Book a Free Inspection
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                See Our Work
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[460px]">
            <Image
              src={images.homeShingleDusk.src}
              alt={images.homeShingleDusk.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute -left-px bottom-11 flex flex-wrap gap-6 border border-line bg-cream px-6 py-5 sm:gap-9 sm:px-[26px]">
              <Stat value={siteConfig.stats.yearsInBusiness} label="Years in business" size="lg" />
              <Stat value={siteConfig.stats.roofsCompleted} label="Roofs completed" size="lg" />
              <Stat value={`★ ${siteConfig.stats.avgRating}`} label="Avg. review rating" size="lg" />
            </div>
          </div>
        </Section>

        <TrustStrip />

        {/* ===== Services ===== */}
        <Section label="Services" className="pb-15 pt-13">
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            link={{ label: "All services →", href: "/residential-roofing" }}
            className="mb-[30px]"
          />
          <HairlineGrid cols={3}>
            {homeServices.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Residential vs Commercial ===== */}
        <Section label="Residential and commercial" padded={false} className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-5 border-b border-line px-6 py-13 md:px-10 lg:border-b-0 lg:border-r lg:px-14">
            <div className="relative h-60">
              <Image
                src={images.homeSuburbanDusk.src}
                alt={images.homeSuburbanDusk.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <h3 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[32px]">
              For homeowners
            </h3>
            <p className="m-0 text-base leading-[1.6] text-muted">
              Shingle, metal, and tile roofs installed with care for your family, your
              landscaping, and your schedule. Most homes finished in one to two days.
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-muted">
              <span>— Roof replacement</span>
              <span>— Repairs</span>
              <span>— Gutters &amp; skylights</span>
            </div>
            <Button href="/residential-roofing" variant="dark" className="self-start">
              Residential Roofing →
            </Button>
          </div>
          <div className="flex flex-col gap-5 px-6 py-13 md:px-10 lg:px-14">
            <div className="relative h-60">
              <Image
                src={images.commercialBuilding.src}
                alt={images.commercialBuilding.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <h3 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[32px]">
              For property managers
            </h3>
            <p className="m-0 text-base leading-[1.6] text-muted">
              TPO, EPDM, and metal systems for offices, retail, and multi-family — with
              maintenance programs that extend roof life and protect your budget.
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-muted">
              <span>— Flat &amp; low-slope</span>
              <span>— Maintenance plans</span>
              <span>— Tenant-safe scheduling</span>
            </div>
            <Button href="/commercial-roofing" variant="outline" className="self-start">
              Commercial Roofing →
            </Button>
          </div>
        </Section>

        {/* ===== Process ===== */}
        <Section label="How it works" className="pb-15 pt-13">
          <Eyebrow className="mb-3.5">How it works</Eyebrow>
          <h2 className="mb-[34px] mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            From inspection to installation
          </h2>
          <ProcessSteps steps={homeSteps} />
        </Section>

        {/* ===== Featured projects + Before/After ===== */}
        <Section label="Recent work" className="pb-15 pt-13">
          <SectionHeading
            eyebrow="Recent work"
            title="Roofs we're proud of"
            link={{ label: "All projects →", href: "/projects" }}
            className="mb-[30px]"
          />
          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((prj) => (
              <ProjectCard
                key={prj.slug}
                title={prj.title}
                meta={prj.meta}
                image={prj.image}
                href={`/projects/${prj.slug}`}
              />
            ))}
          </div>
          <BeforeAfter before="homeBrickAged" after="homeBrickNew" />
        </Section>

        {/* ===== Testimonials ===== */}
        <Section label="Reviews" className="pb-15 pt-13">
          <Eyebrow className="mb-3.5">Reviews</Eyebrow>
          <h2 className="mb-[34px] mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            What homeowners say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {homeReviews.map((rev, i) => (
              <TestimonialCard key={i} {...rev} />
            ))}
          </div>
        </Section>

        {/* ===== Warranty / Financing (dark) ===== */}
        <Section label="Warranty and financing" className="bg-ink py-15 text-cream">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-5">
              <Eyebrow onDark>Warranty</Eyebrow>
              <h2 className="m-0 text-[30px] font-[650] tracking-[-0.02em] md:text-[38px]">
                Covered in writing, not in promises.
              </h2>
              <p className="m-0 text-base leading-[1.6] text-taupe">
                Every installation includes a manufacturer material warranty plus our own
                15-year workmanship warranty — transferable if you sell your home.
              </p>
              <div className="mt-2 flex flex-wrap gap-9">
                <Stat value="15-yr" label="Workmanship" onDark />
                <Stat value="Up to 50-yr" label="Materials" onDark />
                <Stat value="100%" label="Transferable" onDark />
              </div>
            </div>
            <div className="flex flex-col gap-5 border-line-dark-2 lg:border-l lg:pl-20">
              <Eyebrow onDark>Financing</Eyebrow>
              <h2 className="m-0 text-[30px] font-[650] tracking-[-0.02em] md:text-[38px]">
                A new roof from $159/month.
              </h2>
              <p className="m-0 text-base leading-[1.6] text-taupe">
                Flexible plans through our lending partners, including 0% intro options for
                qualified buyers. Get a decision in minutes — no impact on your credit to check.
              </p>
              <Button href="/financing" variant="accent" className="mt-2 self-start">
                Explore Financing →
              </Button>
            </div>
          </div>
        </Section>

        {/* ===== Service areas ===== */}
        <Section label="Service areas" padded={false} className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-[18px] px-6 py-13 md:px-10 lg:px-14">
            <Eyebrow>Service areas</Eyebrow>
            <h2 className="m-0 text-[30px] font-[650] tracking-[-0.02em] md:text-[38px]">
              Local crews, close by
            </h2>
            <p className="m-0 max-w-[46ch] text-base leading-[1.6] text-muted">
              We only work where we can show up fast — for estimates, installs, and anything
              after.
            </p>
            <div className="mt-1.5 grid grid-cols-2 gap-x-8 gap-y-2.5 text-[15px] text-muted">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <Link
              href="/service-areas"
              className="self-start border-b-[1.5px] border-terracotta pb-0.5 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
            >
              All service areas →
            </Link>
          </div>
          <div className="relative min-h-[280px] border-line lg:min-h-[340px] lg:border-l">
            <Image
              src={images.neighborhoodAerial.src}
              alt={images.neighborhoodAerial.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Section>

        {/* ===== FAQ ===== */}
        <Section label="FAQ" className="grid gap-13 pb-15 pt-13 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow className="mb-3.5">FAQ</Eyebrow>
            <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
              Common questions
            </h2>
            <p className="mb-0 mt-[18px] text-[15.5px] leading-[1.6] text-muted">
              Something else on your mind? Call us — a real person answers.
            </p>
          </div>
          <FaqAccordion faqs={homeFaqs} />
        </Section>

        <EmergencyBanner message="Storm damage or active leak? We answer 24/7 and can tarp your roof today." />

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
