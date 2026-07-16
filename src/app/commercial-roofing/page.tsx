import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stat } from "@/components/ui/Stat";
import { Section, BenefitTile, HairlineGrid } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { commercialSystems, pmBenefits } from "@/lib/services";
import { images } from "@/lib/images";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Commercial Roofing",
  description:
    "TPO, EPDM, and metal roofing systems for offices, retail, warehouses, and multi-family — with tenant-safe scheduling and maintenance programs that extend roof life.",
  alternates: { canonical: "/commercial-roofing" },
  openGraph: {
    title: "Commercial Roofing — Roofing that protects your P&L, too.",
    description:
      "TPO, EPDM, and metal systems installed around your tenants, backed by maintenance programs.",
    url: "/commercial-roofing",
    images: [{ url: images.commercialBuilding.src, alt: images.commercialBuilding.alt }],
  },
};

export default function CommercialRoofingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Commercial Roofing",
            description:
              "TPO, EPDM, and metal roofing systems for offices, retail, warehouses, and multi-family properties.",
            path: "/commercial-roofing",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Commercial Roofing", path: "/commercial-roofing" },
          ])
        )}
      />
      <Header />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Commercial Roofing" }]}
          title="Roofing that protects your P&L, too."
          body="TPO, EPDM, and metal systems for offices, retail, warehouses, and multi-family — installed around your tenants and backed by maintenance programs that extend roof life."
          image="commercialTowers"
          checks={[
            "Tenant-safe scheduling",
            "Full documentation for owners & HOAs",
            "Maintenance plans",
          ]}
        >
          <div className="mt-1 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
            <Button href="/book-an-inspection" variant="dark">
              Book a Free Roof Assessment
            </Button>
            <Button href="/contact" variant="outline">
              Talk to Commercial Team
            </Button>
          </div>
        </PageHero>

        {/* ===== Systems ===== */}
        <Section label="Systems we install" className="pb-14 pt-13">
          <h2 className="mb-7 mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Systems we install
          </h2>
          <HairlineGrid cols={4}>
            {commercialSystems.map((s) => (
              <div key={s.title} className="flex flex-col gap-2.5 bg-cream px-[26px] py-6">
                <div className="text-lg font-[650]">{s.title}</div>
                <p className="m-0 text-sm leading-[1.55] text-muted">{s.desc}</p>
                <div className="mt-auto pt-2 text-[13px] text-faint">{s.bestFor}</div>
              </div>
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Maintenance program (dark) ===== */}
        <Section
          label="Preventive maintenance"
          className="grid items-center gap-10 bg-ink py-14 text-cream lg:grid-cols-2 lg:gap-16"
        >
          <div className="flex flex-col gap-[18px]">
            <Eyebrow onDark>Preventive maintenance</Eyebrow>
            <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
              A roof program, not a roof emergency.
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.65] text-taupe">
              Twice-yearly inspections, membrane and drainage checks, documented reports for
              your records, and priority dispatch when weather hits. Commercial roofs fail
              slowly, then suddenly — the program catches &ldquo;slowly.&rdquo;
            </p>
            <div className="mt-1.5 flex flex-wrap gap-10">
              <Stat value="2× / yr" label="Scheduled inspections" onDark size="sm" />
              <Stat value="+7 yrs" label="Typical roof-life gain" onDark size="sm" />
              <Stat value="First" label="In line after storms" onDark size="sm" />
            </div>
            <Button href="/contact" variant="accent" className="mt-2 self-start">
              Ask About a Maintenance Plan →
            </Button>
          </div>
          <div className="relative h-72 lg:h-[360px]">
            <Image
              src={images.contractorsReviewingPlans.src}
              alt={images.contractorsReviewingPlans.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Section>

        {/* ===== For property managers ===== */}
        <Section label="Built for property managers" className="pb-14 pt-13">
          <h2 className="mb-7 mt-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
            Built for property managers
          </h2>
          <HairlineGrid cols={4}>
            {pmBenefits.map((b) => (
              <BenefitTile key={b.title} {...b} />
            ))}
          </HairlineGrid>
        </Section>

        <FinalCta
          title="Get a condition report your owners will actually read."
          body="Free assessment with photos, remaining-life estimate, and budget-ready options."
          primaryLabel="Book a Free Assessment"
          maxTitleWidth="24ch"
        />
      </main>
      <Footer />
    </>
  );
}
