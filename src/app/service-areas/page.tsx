import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stat } from "@/components/ui/Stat";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, HairlineGrid } from "@/components/sections/Section";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { FinalCta } from "@/components/sections/FinalCta";
import { cities } from "@/lib/cities";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Roofing service areas across the Denver metro — local crews within about 35 miles of Wheat Ridge for fast estimates, installs, and emergency storm response.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas — Where we work",
    description: "Local crews, close by, across the Denver metro.",
    url: "/service-areas",
    images: [{ url: images.townRooftops.src, alt: images.townRooftops.alt }],
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
          ])
        )}
      />
      <Header />
      <main>
        {/* ===== Hero + map ===== */}
        <section aria-label="Page introduction" className="grid border-b border-line lg:grid-cols-2">
          <div className="flex flex-col gap-5 px-6 pb-12 pt-11 md:px-10 lg:px-14">
            <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Service Areas" }]} />
            <h1 className="display-condensed m-0 text-4xl font-[650] leading-[1.02] tracking-[-0.025em] md:text-5xl">
              Where we work
            </h1>
            <p className="m-0 max-w-[50ch] text-[16.5px] leading-[1.6] text-muted">
              We only take jobs we can reach fast — for estimates, installs, and anything that
              comes up after. If you&apos;re within about 35 miles of {siteConfig.address.city},
              you&apos;re covered.
            </p>
            <div className="mt-1 flex flex-wrap gap-9">
              <Stat value={siteConfig.stats.citiesServed} label="Cities & towns" />
              <Stat value="< 45 min" label="Avg. emergency response" />
              <Stat value="5" label="Local crews" />
            </div>
            <form
              className="mt-2 flex flex-wrap items-center gap-3"
              aria-label="Check coverage by ZIP code"
            >
              <input
                placeholder="Enter your ZIP code"
                inputMode="numeric"
                className="w-[220px] border-[1.5px] border-line-strong bg-white px-[18px] py-3.5 text-[15px] text-ink outline-none focus:border-ink"
              />
              <button
                type="button"
                className="bg-ink px-[26px] py-[15px] text-[15px] font-semibold text-cream transition-colors hover:bg-terracotta"
              >
                Check coverage
              </button>
            </form>
          </div>
          <div className="relative min-h-[300px] border-line lg:min-h-[420px] lg:border-l">
            <Image
              src={images.townRooftops.src}
              alt={images.townRooftops.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* ===== City cards ===== */}
        <Section label="Cities we serve" className="pb-14 pt-11">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
              Cities we serve
            </h2>
            <span className="text-[13.5px] text-faint">
              Each city page includes local projects, reviews, and response times.
            </span>
          </div>
          <HairlineGrid cols={3}>
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="flex flex-col gap-1.5 bg-cream px-[26px] py-[22px] text-ink transition-colors hover:bg-hover-cream"
              >
                <div className="flex items-baseline justify-between">
                  <div className="text-lg font-[650]">{c.name}</div>
                  <span className="text-xs text-faint">{c.count}</span>
                </div>
                <div className="text-[13.5px] text-muted">{c.note}</div>
                <span className="mt-1 text-[13px] font-semibold text-terracotta">
                  Roofing in {c.name} →
                </span>
              </Link>
            ))}
          </HairlineGrid>
        </Section>

        <EmergencyBanner message="Storm just hit your area? Crews are dispatched by proximity — call for same-day tarping." />

        <FinalCta
          title="In our area? Then you're on our schedule."
          body="Book a free inspection and we'll be on your roof this week."
        />
      </main>
      <Footer />
    </>
  );
}
