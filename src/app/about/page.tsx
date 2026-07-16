import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stat } from "@/components/ui/Stat";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, HairlineGrid } from "@/components/sections/Section";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FinalCta } from "@/components/sections/FinalCta";
import { aboutValues, aboutMilestones, aboutTeam, aboutCertifications } from "@/lib/services";
import { images, type ImageKey } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Roofers first, salespeople never. Meet the Wheat Ridge team behind 22+ years of honest inspections, our own certified crews, and fixed written pricing.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ridgeline Roofing — Roofers first. Salespeople never.",
    description:
      "The people, values, and story behind our roofing company.",
    url: "/about",
    images: [{ url: images.constructionCrewSite.src, alt: images.constructionCrewSite.alt }],
  },
};

const teamImages: ImageKey[] = [
  "contractorsReviewingPlans",
  "crewTimberFraming",
  "rooferOnShingles",
  "officeConsult",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        {/* ===== Hero ===== */}
        <section aria-label="Page introduction" className="grid border-b border-line lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-[22px] px-6 pb-12 pt-11 md:px-10 lg:px-14">
            <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
            <h1 className="display-condensed m-0 text-4xl font-[650] leading-[1.02] tracking-[-0.025em] md:text-[52px]">
              Roofers first. Salespeople never.
            </h1>
            <p className="m-0 max-w-[52ch] text-[17px] leading-[1.6] text-muted">
              Matt Larsen started Ridgeline in 2003 with one truck, a two-man crew, and a
              simple rule: quote the repair if a repair will do. Twenty-two years and 4,800
              roofs later, we&apos;re still family-owned, still based in Wheat Ridge, and
              still answering our own phones.
            </p>
            <div className="mt-1.5 flex flex-wrap gap-10">
              <Stat value={siteConfig.stats.yearsInBusiness} label="Years in business" size="lg" />
              <Stat value={siteConfig.stats.teamMembers} label="Team members" size="lg" />
              <Stat value={siteConfig.stats.roofsCompleted} label="Roofs completed" size="lg" />
              <Stat value={`★ ${siteConfig.stats.avgRating}`} label="Avg. rating" size="lg" />
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[400px]">
            <Image
              src={images.constructionCrewSite.src}
              alt={images.constructionCrewSite.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* ===== Values ===== */}
        <Section label="How we work" className="pb-14 pt-13">
          <Eyebrow className="mb-3">How we work</Eyebrow>
          <h2 className="mb-[30px] mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Four things we refuse to compromise
          </h2>
          <HairlineGrid cols={4}>
            {aboutValues.map((v) => (
              <div key={v.num} className="flex flex-col gap-3 bg-cream px-[26px] pb-[30px] pt-[26px]">
                <div className="text-[44px] font-light leading-none tracking-[-0.03em] text-line-strong">
                  {v.num}
                </div>
                <div className="text-lg font-[650]">{v.title}</div>
                <p className="m-0 text-sm leading-[1.6] text-muted">{v.desc}</p>
              </div>
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Timeline ===== */}
        <Section label="Our story" className="grid gap-13 pb-14 pt-13 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow className="mb-3">Our story</Eyebrow>
            <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
              Built one roof at a time
            </h2>
            <p className="mb-0 mt-4 max-w-[44ch] text-[15.5px] leading-[1.6] text-muted">
              No private equity, no franchise playbook — just two decades of showing up when
              we said we would. Most of our work still comes the old way: a neighbor watched
              us re-roof the house next door.
            </p>
            <div className="mt-6 flex gap-10">
              <Stat value="68%" label="Jobs from referrals" size="sm" />
              <Stat value="1" label="Owner, since day one" size="sm" />
            </div>
          </div>
          <div className="flex flex-col border-l border-line">
            {aboutMilestones.map((m) => (
              <div key={m.title} className="relative flex gap-6 pb-7">
                <span
                  aria-hidden
                  className="ml-[-6px] mt-1.5 h-[11px] w-[11px] flex-none rounded-full bg-terracotta"
                />
                <div>
                  <div className="mb-1 text-[13px] font-bold text-terracotta">{m.year}</div>
                  <div className="mb-1 text-[16.5px] font-[650]">{m.title}</div>
                  <p className="m-0 max-w-[56ch] text-sm leading-[1.6] text-muted">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== Team ===== */}
        <Section label="The team" className="pb-14 pt-13">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="mb-3">The team</Eyebrow>
              <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
                The people on your roof
              </h2>
            </div>
            <span className="text-[13.5px] text-faint">
              Every crew member is background-checked and badged.
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutTeam.map((t, i) => {
              const img = images[teamImages[i]];
              return (
                <div key={t.role} className="flex flex-col gap-3">
                  <div className="relative h-[280px]">
                    <Image
                      src={img.src}
                      alt={`${t.name}, ${t.role} at ${siteConfig.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[16.5px] font-[650]">{t.name}</div>
                    <div className="text-[13.5px] text-muted">{t.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <TrustStrip label="Certifications & memberships" marks={aboutCertifications} />

        {/* ===== Careers strip ===== */}
        <section
          aria-label="Careers"
          className="flex flex-col items-start justify-between gap-5 bg-terracotta px-6 py-[26px] text-cream sm:flex-row sm:items-center md:px-10 lg:px-14"
        >
          <span className="text-[17px] font-semibold">
            Good with your hands and tired of bad employers? We&apos;re hiring installers and
            project managers.
          </span>
          <a
            href="/careers"
            className="flex-none border-[1.5px] border-cream px-[26px] py-3 text-[15px] font-semibold transition-colors hover:bg-cream hover:text-terracotta"
          >
            See Open Roles
          </a>
        </section>

        <FinalCta
          title="Meet us at your place, not a showroom."
          body="Free inspection, written photo report, and an honest recommendation — even if it's 'you're fine.'"
        />
      </main>
      <Footer />
    </>
  );
}
