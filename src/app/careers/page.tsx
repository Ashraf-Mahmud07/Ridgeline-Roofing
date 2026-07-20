import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stat } from "@/components/ui/Stat";
import { Section, BenefitTile, HairlineGrid } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { careerPerks, careerRoles } from "@/lib/services";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Roofing careers with steady work, real training, and safety taken seriously. We're hiring installers, foremen, inspectors, and office coordinators in Wheat Ridge, CO.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — Do your best work above everyone else.",
    description: "Steady work, real training, safety taken seriously.",
    url: "/careers",
    images: [{ url: images.crewTimberFraming.src, alt: images.crewTimberFraming.alt }],
  },
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Company", path: "/about" },
            { name: "Careers", path: "/careers" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        <PageHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Company", href: "/about" },
            { name: "Careers" },
          ]}
          title="Do your best work above everyone else."
          body="Steady work, real training, safety taken seriously, and paychecks that clear. If you take pride in your craft, we want to meet you."
          image="crewTimberFraming"
          minHeight={380}
        >
          <div className="mt-1 flex flex-wrap gap-9">
            <Stat value={siteConfig.stats.teamMembers} label="Team members" size="sm" />
            <Stat value="6 yrs" label="Avg. tenure" size="sm" />
            <Stat value="0" label="Lost-time incidents in 2025" size="sm" />
          </div>
        </PageHero>

        {/* ===== What we offer ===== */}
        <Section label="What we offer" className="pb-14 pt-13">
          <h2 className="mb-[30px] mt-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
            What we offer
          </h2>
          <HairlineGrid cols={4}>
            {careerPerks.map((p) => (
              <BenefitTile key={p.title} {...p} />
            ))}
          </HairlineGrid>
        </Section>

        {/* ===== Open roles ===== */}
        <Section label="Open roles" className="grid gap-13 pb-14 pt-13 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow className="mb-3">Open roles</Eyebrow>
            <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
              We&apos;re hiring
            </h2>
            <p className="mb-0 mt-4 text-[15px] leading-[1.6] text-muted">
              Don&apos;t see your role? Send a résumé anyway — good people don&apos;t wait
              for openings, and neither do we.
            </p>
          </div>
          <div className="border-t border-line">
            {careerRoles.map((r) => (
              <div
                key={r.title}
                className="flex flex-col items-start justify-between gap-4 border-b border-line px-1 py-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <div>
                  <div className="text-lg font-[650]">{r.title}</div>
                  <div className="mt-1 text-[13.5px] text-muted">{r.meta}</div>
                </div>
                <Button href="/contact" variant="outline" size="sm" className="flex-none">
                  Apply →
                </Button>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== Final CTA (careers variant) ===== */}
        <section
          aria-label="Contact about a role"
          className="shell bg-ink py-16 text-center text-cream"
        >
          <h2 className="display-condensed mx-auto my-0 max-w-[22ch] text-3xl font-[650] tracking-[-0.025em] md:text-[42px]">
            Fifteen-minute call. No forms first.
          </h2>
          <p className="mx-auto mb-0 mt-[18px] max-w-[52ch] text-base leading-[1.6] text-taupe">
            Call and ask for Dana Whitfield — tell her what you&apos;ve worked on and what
            you&apos;re looking for.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3.5 sm:flex-row">
            <Button href={siteConfig.phoneHref} variant="accent" size="lg">
              Call {siteConfig.phone}
            </Button>
            <Button href="/contact" variant="outline-dark" size="lg">
              Send a résumé
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
