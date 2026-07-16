import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Section, BenefitTile, HairlineGrid } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { MaterialsTabs } from "@/components/sections/MaterialsTabs";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  replacementBenefits,
  replacementSteps,
  replacementRelated,
} from "@/lib/services";
import { replacementFaqs } from "@/lib/faqs";
import { images } from "@/lib/images";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Roof Replacement",
  description:
    "Full tear-off roof replacement in the Denver metro with architectural shingle, standing-seam metal, or tile. Fixed written pricing, certified crews, done in 1–2 days.",
  alternates: { canonical: "/services/roof-replacement" },
  openGraph: {
    title: "Roof Replacement — done in days, built for decades.",
    description:
      "Full tear-off and re-roof with fixed written pricing and certified crews.",
    url: "/services/roof-replacement",
    images: [{ url: images.roofConstructionAerial.src, alt: images.roofConstructionAerial.alt }],
  },
};

const reviews = [
  {
    quote:
      "Fixed written price, and it stayed fixed even after they found two bad decking sheets — those were already itemized in the quote. Refreshingly honest.",
    name: "Steve & Robin Callahan",
    meta: "Roof replacement · Broomfield",
  },
  {
    quote:
      "Our standing-seam roof took exactly the two days they promised. The foreman walked the whole roofline with us before the crew left.",
    name: "Susan Maher",
    meta: "Metal re-roof · Golden",
  },
  {
    quote:
      "From inspection report to final magnet sweep, everything happened when they said it would. The Class 4 shingles even dropped our insurance premium.",
    name: "Marcus Whitley",
    meta: "Shingle replacement · Aurora",
  },
];

export default function RoofReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Roof Replacement",
            description:
              "Full tear-off and re-roof with architectural shingle, standing-seam metal, or tile.",
            path: "/services/roof-replacement",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(replacementFaqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Residential", path: "/residential-roofing" },
            { name: "Roof Replacement", path: "/services/roof-replacement" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        <PageHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Residential", href: "/residential-roofing" },
            { name: "Roof Replacement" },
          ]}
          title="Roof replacement, done in days — built for decades."
          body="Full tear-off and re-roof with architectural shingle, standing-seam metal, or tile. Fixed written pricing, certified crews, and a site left spotless."
          image="roofConstructionAerial"
          minHeight={400}
          checks={[
            "Most homes done in 1–2 days",
            "15-yr workmanship warranty",
            "Financing from $159/mo",
          ]}
        >
          <div className="mt-1 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
            <Button href="/book-an-inspection" variant="dark">
              Book a Free Inspection
            </Button>
            <Button href="/contact" variant="outline">
              Get a Ballpark Price
            </Button>
          </div>
        </PageHero>

        {/* ===== Benefits ===== */}
        <Section label="Why replace with us" className="pb-14 pt-13">
          <div className="grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow className="mb-3">Why replace with us</Eyebrow>
              <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
                A replacement you&apos;ll never think about again.
              </h2>
              <p className="mb-0 mt-4 text-[15.5px] leading-[1.6] text-muted">
                A roof is only as good as its weakest detail — decking, underlayment,
                flashing, ventilation. We replace the whole system, not just the shingles.
              </p>
            </div>
            <HairlineGrid cols={2}>
              {replacementBenefits.map((b) => (
                <BenefitTile key={b.title} {...b} />
              ))}
            </HairlineGrid>
          </div>
        </Section>

        {/* ===== Materials ===== */}
        <Section label="Materials" className="pb-15 pt-13">
          <Eyebrow className="mb-3">Materials</Eyebrow>
          <h2 className="mb-7 mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Choose your system
          </h2>
          <MaterialsTabs />
        </Section>

        {/* ===== Process ===== */}
        <Section label="What to expect" className="pb-14 pt-13">
          <Eyebrow className="mb-3">What to expect</Eyebrow>
          <h2 className="mb-8 mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Replacement day, step by step
          </h2>
          <ProcessSteps steps={replacementSteps} numeralSize="medium" />
        </Section>

        {/* ===== Before / After ===== */}
        <Section label="Before and after" className="pb-14 pt-13">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
              The difference a day makes
            </h2>
            <Link
              href="/projects"
              className="border-b-[1.5px] border-terracotta pb-0.5 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
            >
              Before &amp; after gallery →
            </Link>
          </div>
          <BeforeAfter before="homeBrickAged" after="homeBrickNew" />
        </Section>

        {/* ===== Reviews ===== */}
        <Section label="Reviews" className="pb-14 pt-13">
          <h2 className="mb-[30px] mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            From recent replacements
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((rev, i) => (
              <TestimonialCard key={i} {...rev} />
            ))}
          </div>
        </Section>

        {/* ===== Warranty / financing band ===== */}
        <Section
          label="Warranty and financing"
          className="flex flex-col items-start justify-between gap-8 bg-ink py-12 text-cream lg:flex-row lg:items-center"
        >
          <div className="flex flex-wrap gap-8 lg:gap-14">
            <div>
              <div className="text-[26px] font-bold">15-yr</div>
              <div className="text-[13px] text-taupe">Workmanship warranty</div>
            </div>
            <div>
              <div className="text-[26px] font-bold">Up to 50-yr</div>
              <div className="text-[13px] text-taupe">Material warranty</div>
            </div>
            <div>
              <div className="text-[26px] font-bold">$159/mo</div>
              <div className="text-[13px] text-taupe">Financing available</div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 sm:flex-row">
            <Button href="/book-an-inspection" variant="accent">
              Book a Free Inspection
            </Button>
            <Button href="/financing" variant="outline-dark">
              Explore Financing
            </Button>
          </div>
        </Section>

        {/* ===== FAQ ===== */}
        <Section label="FAQ" className="grid gap-13 pb-14 pt-13 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow className="mb-3">FAQ</Eyebrow>
            <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
              Replacement questions
            </h2>
            <p className="mb-0 mt-4 text-[15px] leading-[1.6] text-muted">
              Something else on your mind? Call us — a real person answers.
            </p>
          </div>
          <FaqAccordion faqs={replacementFaqs} compact />
        </Section>

        {/* ===== Related services ===== */}
        <Section label="Related services" className="pb-15 pt-13">
          <h2 className="mb-7 mt-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[30px]">
            Related services
          </h2>
          <HairlineGrid cols={3}>
            {replacementRelated.map((rel) => (
              <Link
                key={rel.title}
                href={rel.href}
                className="flex flex-col gap-2.5 bg-cream px-7 py-[26px] text-ink transition-colors hover:bg-hover-cream"
              >
                <div className="text-[18.5px] font-[650]">{rel.title}</div>
                <p className="m-0 text-sm leading-[1.55] text-muted">{rel.desc}</p>
                <span className="text-[13.5px] font-semibold text-terracotta">Learn more →</span>
              </Link>
            ))}
          </HairlineGrid>
        </Section>

        <FinalCta
          title="Find out if you need a replacement — or just a repair."
          body="Free inspection with a written photo report. If a repair will do, that's what we'll tell you."
        />
      </main>
      <Footer />
    </>
  );
}
