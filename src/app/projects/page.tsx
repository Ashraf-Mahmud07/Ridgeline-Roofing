import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stat } from "@/components/ui/Stat";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/sections/Section";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { FinalCta } from "@/components/sections/FinalCta";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse completed roofing projects — shingle, metal, tile, flat/commercial, and storm restorations — with before & after photos from across the Denver metro.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Our work, roof by roof.",
    description:
      "Completed roofing projects with before & after photos.",
    url: "/projects",
    images: [{ url: images.homeBrickNew.src, alt: images.homeBrickNew.alt }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        {/* ===== Header + filters ===== */}
        <Section label="Projects" padded={false} className="pt-11">
          <div className="px-6 md:px-10 lg:px-14">
            <Breadcrumbs
              crumbs={[{ name: "Home", href: "/" }, { name: "Projects" }]}
              className="mb-[18px]"
            />
            <div className="flex flex-wrap items-end justify-between gap-10">
              <div>
                <h1 className="display-condensed m-0 text-4xl font-[650] tracking-[-0.025em] md:text-5xl">
                  Our work, roof by roof.
                </h1>
                <p className="mb-0 mt-3.5 max-w-[56ch] text-[16.5px] leading-[1.55] text-muted">
                  Every project below is real, local, and documented — addresses withheld for
                  privacy, happy to share references on request.
                </p>
              </div>
              <div className="flex flex-none gap-9">
                <Stat value={siteConfig.stats.roofsCompleted} label="Roofs completed" />
                <Stat value={siteConfig.stats.citiesServed} label="Cities served" />
              </div>
            </div>
          </div>
          <ProjectsGrid />
        </Section>

        {/* ===== Before/After strip ===== */}
        <Section label="Before and after" className="pb-14 pt-13">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
              Before &amp; after
            </h2>
            <span className="text-[13.5px] text-faint">
              Tear-off to finished system — transformations from recent jobs.
            </span>
          </div>
          <BeforeAfter before="homeBrickAged" after="homeBrickNew" />
        </Section>

        <FinalCta
          title="Your roof could be the next one here."
          body="Start with a free inspection and a written photo report — no pressure, ever."
        />
      </main>
      <Footer />
    </>
  );
}
