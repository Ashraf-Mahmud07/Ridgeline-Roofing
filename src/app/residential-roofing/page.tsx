import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceTile } from "@/components/ui/ServiceCard";
import { TestimonialCardSlim } from "@/components/ui/TestimonialCard";
import { Section, BenefitTile, HairlineGrid } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { residentialServices, residentialBenefits } from "@/lib/services";
import { images } from "@/lib/images";
import {
  serviceSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Residential Roofing",
  description:
    "Roof replacement, repair, and maintenance for houses, townhomes, and duplexes — installed by our own certified crews. Free inspections with written photo reports.",
  alternates: { canonical: "/residential-roofing" },
  openGraph: {
    title: "Residential Roofing — Your home, under a roof built right.",
    description:
      "Replacement, repair, and maintenance installed by our own certified crews.",
    url: "/residential-roofing",
    images: [{ url: images.homeSuburbanDusk2.src, alt: images.homeSuburbanDusk2.alt }],
  },
};

const reviews = [
  {
    quote:
      "Tear-off at 7am, magnetic sweep by 5pm the next day. My flower beds survived, my dogs barely noticed, and the roof looks incredible.",
    name: "Janet Okafor",
    meta: "Roof replacement · Golden",
  },
  {
    quote:
      "A ceiling stain the week before Thanksgiving — they diagnosed a flashing failure, fixed it in one visit, and charged exactly what they quoted.",
    name: "Tom Brandt",
    meta: "Repair · Wheat Ridge",
  },
  {
    quote:
      "New seamless gutters and guards fitted during our re-roof. One crew, one cleanup, and everything drains perfectly a full year later.",
    name: "Alicia Fuentes",
    meta: "Gutters · Lakewood",
  },
];

export default function ResidentialRoofingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Residential Roofing",
            description:
              "Roof replacement, repair, and maintenance for houses, townhomes, and duplexes.",
            path: "/residential-roofing",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Residential Roofing", path: "/residential-roofing" },
          ])
        )}
      />
      <Header />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Residential Roofing" }]}
          title="Your home, under a roof built right."
          body="Replacement, repair, and maintenance for houses, townhomes, and duplexes — installed by our own certified crews, with your landscaping and schedule respected."
          image="homeSuburbanDusk2"
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
            <Button href="/projects" variant="outline">
              See Our Work
            </Button>
          </div>
        </PageHero>

        {/* ===== Services ===== */}
        <Section label="Residential services" className="pb-14 pt-13">
          <h2 className="mb-7 mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Everything a home roof needs
          </h2>
          <HairlineGrid cols={3}>
            {residentialServices.map((s) => (
              <ServiceTile
                key={s.title}
                title={s.title}
                desc={s.desc}
                badge={s.badge}
                href="/services/roof-replacement"
              />
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Why us ===== */}
        <Section
          label="Why homeowners choose us"
          className="grid items-start gap-13 pb-14 pt-13 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <Eyebrow className="mb-3">Why homeowners choose us</Eyebrow>
            <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
              Treated like it&apos;s our own house.
            </h2>
            <p className="mb-0 mt-4 text-[15.5px] leading-[1.6] text-muted">
              A roofing job is a day of chaos on your property. We keep it contained,
              communicate constantly, and leave nothing behind but the roof.
            </p>
            <div className="relative mt-6 h-60">
              <Image
                src={images.crewTimberFraming.src}
                alt={images.crewTimberFraming.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <HairlineGrid cols={2}>
            {residentialBenefits.map((b) => (
              <BenefitTile key={b.title} {...b} />
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Reviews ===== */}
        <Section label="Reviews" className="pb-14 pt-13">
          <h2 className="mb-[26px] mt-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
            From homeowners like you
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((rev, i) => (
              <TestimonialCardSlim key={i} {...rev} />
            ))}
          </div>
        </Section>

        <FinalCta
          title="Find out what your roof needs — free."
          body="A 30-minute inspection with a written photo report. If it's fine, we'll say so."
        />
      </main>
      <Footer />
    </>
  );
}
