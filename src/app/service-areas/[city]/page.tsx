import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stat } from "@/components/ui/Stat";
import { ServiceTile } from "@/components/ui/ServiceCard";
import { TestimonialCardSlim } from "@/components/ui/TestimonialCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section, HairlineGrid } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities, cityServices, cityLocalFacts } from "@/lib/cities";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import type { ImageKey } from "@/lib/images";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const entry = cities.find((c) => c.slug === city);
  if (!entry) return {};
  return {
    title: `Roofing in ${entry.name}`,
    description: `Roof replacement, repair, storm restoration, and commercial roofing in ${entry.name} — local crews, fast response times, and free inspections with written reports.`,
    alternates: { canonical: `/service-areas/${city}` },
    openGraph: {
      title: `Roofing in ${entry.name}, done by locals.`,
      url: `/service-areas/${city}`,
      images: [{ url: images.suburbanStreet.src, alt: images.suburbanStreet.alt }],
    },
  };
}

const localProjects: { title: string; meta: string; image: ImageKey; href: string }[] = [
  { title: "Applewood Two-Story", meta: "Shingle · Applewood", image: "homeSuburbanDusk", href: "/projects/applewood-two-story" },
  { title: "Table Mountain Farmhouse", meta: "Metal · Table Mountain", image: "homeMetalRoof", href: "/projects/table-mountain-farmhouse" },
  { title: "Green Mountain Hail Recovery", meta: "Storm restoration · Green Mountain", image: "roofRepairCrew", href: "/projects/green-mountain-hail-recovery" },
];

const localReviews = [
  {
    quote:
      "Inspection on Tuesday, new roof by Friday, and the yard was cleaner than they found it. Every neighbor got their card.",
    name: "Rachel Dunleavy",
    meta: "Homeowner",
  },
  {
    quote:
      "They knew our HOA's color rules before we did and handled the whole approval. Zero friction start to finish.",
    name: "Vince Petrillo",
    meta: "Homeowner",
  },
  {
    quote:
      "After the hailstorm they documented everything, met our adjuster on the roof, and the claim went through first try.",
    name: "Dawn Kessler",
    meta: "Homeowner",
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const entry = cities.find((c) => c.slug === city);
  if (!entry) notFound();
  const name = entry.name;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name, path: `/service-areas/${city}` },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        <PageHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/service-areas" },
            { name },
          ]}
          title={`Roofing in ${name}, done by locals.`}
          body={`We've replaced and repaired ${entry.roofs} roofs in ${name} — we know its housing stock, its permit office, and what Front Range hail does to roofs here.`}
          image="suburbanStreet"
          minHeight={400}
        >
          <div className="mt-1 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
            <Button href="/book-an-inspection" variant="dark">
              Book a Free Inspection in {name}
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline">
              Call {siteConfig.phone}
            </Button>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-9">
            <Stat value={entry.roofs} label={`Roofs in ${name}`} size="sm" />
            <Stat value="< 45 min" label="Response time" size="sm" />
            <Stat value="★ 4.9" label={`From ${name} reviews`} size="sm" />
          </div>
        </PageHero>

        {/* ===== Local services ===== */}
        <Section label={`Roofing services in ${name}`} className="pb-13 pt-11">
          <h2 className="mb-[26px] mt-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[32px]">
            Roofing services in {name}
          </h2>
          <HairlineGrid cols={3}>
            {cityServices.map((s) => (
              <ServiceTile
                key={s.title}
                title={s.title}
                desc={s.desc.replaceAll("[City]", name)}
                href="/services/roof-replacement"
                linkLabel={`${s.title} in ${name} →`}
              />
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Local knowledge ===== */}
        <Section
          label="Local knowledge"
          className="grid gap-13 pb-13 pt-11 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <Eyebrow className="mb-3">Local knowledge</Eyebrow>
            <h2 className="m-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[32px]">
              What {name} roofs are up against
            </h2>
            <p className="mb-0 mt-4 text-[15px] leading-[1.6] text-muted">
              {name} sits squarely in Colorado&apos;s Hail Alley: hail from May through
              August, 100+ mph chinook gusts in winter, and some of the most intense UV in
              the country at this altitude. That combination is why we quote Class 4
              impact-rated shingles by default here — they hold up, and most insurers
              discount the premium for them.
            </p>
          </div>
          <HairlineGrid cols={2}>
            {cityLocalFacts.map((f) => (
              <div key={f.title} className="flex flex-col gap-1.5 bg-cream px-6 py-[22px]">
                <div className="text-[15.5px] font-[650]">{f.title}</div>
                <p className="m-0 text-[13.5px] leading-[1.55] text-muted">{f.desc}</p>
              </div>
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Local projects ===== */}
        <Section label={`Recent work in ${name}`} className="pb-13 pt-11">
          <SectionHeading
            title={`Recent work in ${name}`}
            titleClassName="text-[26px] md:text-[32px]"
            link={{ label: "All projects →", href: "/projects" }}
            className="mb-[26px]"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localProjects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                meta={p.meta}
                image={p.image}
                href={p.href}
                height={200}
              />
            ))}
          </div>
        </Section>

        {/* ===== Local reviews ===== */}
        <Section label={`${name} reviews`} className="pb-13 pt-11">
          <h2 className="mb-[26px] mt-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[32px]">
            {name} homeowners on working with us
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {localReviews.map((rev, i) => (
              <TestimonialCardSlim key={i} {...rev} />
            ))}
          </div>
        </Section>

        <FinalCta
          title={`Your ${name} roof, inspected free this week.`}
          body="A local crew, a written photo report, and honest options — no pressure."
          maxTitleWidth="24ch"
        />
      </main>
      <Footer />
    </>
  );
}
