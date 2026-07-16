import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/sections/Section";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { FinalCta } from "@/components/sections/FinalCta";
import { projects, projectDetail } from "@/lib/projects";
import { images } from "@/lib/images";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

/**
 * The design ships a single project-detail template; every project slug renders
 * it until real per-project data is available.
 */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${projectDetail.title}`,
    description:
      "A completed Golden, CO roofing project: standing-seam metal installed in 2 days with a 15-yr workmanship warranty. See before & after photos and project details.",
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: projectDetail.title,
      url: `/projects/${slug}`,
      images: [{ url: images[projectDetail.hero].src, alt: images[projectDetail.hero].alt }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const heroImg = images[projectDetail.hero];
  const crumbName =
    projects.find((p) => p.slug === slug)?.title ?? "Table Mountain Farmhouse";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: crumbName, path: `/projects/${slug}` },
          ])
        )}
      />
      <Header />
      <main>
        {/* ===== Hero image ===== */}
        <section aria-label="Project photo" className="relative h-[320px] border-b border-line md:h-[440px]">
          <Image
            src={heroImg.src}
            alt={heroImg.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-8 left-6 flex flex-wrap items-center gap-2.5 md:left-14">
            {projectDetail.tags.map((tag, i) => (
              <span
                key={tag}
                className={`px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.08em] ${
                  i === 0 ? "bg-terracotta text-cream" : "border border-line bg-cream text-ink"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ===== Title + facts ===== */}
        <Section label="Project overview" padded={false} className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-line px-6 pb-12 pt-10 md:px-10 lg:border-r lg:px-14">
            <Breadcrumbs
              crumbs={[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: crumbName },
              ]}
              className="mb-4"
            />
            <h1 className="display-condensed m-0 text-[32px] font-[650] tracking-[-0.025em] md:text-[42px]">
              {projectDetail.title}
            </h1>
            {projectDetail.story.map((para, i) => (
              <p
                key={i}
                className={`mb-0 max-w-[62ch] text-base leading-[1.65] text-muted ${
                  i === 0 ? "mt-[18px]" : "mt-3.5"
                }`}
              >
                {para}
              </p>
            ))}
            <blockquote className="mb-0 ml-0 mr-0 mt-7 border-l-[3px] border-terracotta py-1 pl-[22px]">
              <p className="m-0 text-[17px] font-medium leading-[1.6]">
                &ldquo;{projectDetail.quote}&rdquo;
              </p>
              <div className="mt-2 text-[13.5px] text-faint">{projectDetail.quoteBy}</div>
            </blockquote>
          </div>
          <div className="flex flex-col px-6 pb-12 pt-10 md:px-10 lg:px-12">
            <div className="border-b border-line pb-3.5 text-xs font-semibold uppercase tracking-label text-faint">
              Project facts
            </div>
            {projectDetail.facts.map((f) => (
              <div
                key={f.label}
                className="flex justify-between gap-5 border-b border-line py-[13px] text-[14.5px]"
              >
                <span className="text-muted">{f.label}</span>
                <span className="text-right font-semibold">{f.value}</span>
              </div>
            ))}
            <Link
              href="/book-an-inspection"
              className="mt-6 bg-ink px-7 py-[15px] text-center text-[15px] font-semibold text-cream transition-colors hover:bg-terracotta"
            >
              Get a roof like this — free inspection
            </Link>
          </div>
        </Section>

        {/* ===== Before / After ===== */}
        <Section label="Before and after" className="pb-13 pt-11">
          <h2 className="mb-6 mt-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[32px]">
            Before &amp; after
          </h2>
          <BeforeAfter before="homeBrickAged" after="homeMetalRoof" height={320} />
        </Section>

        {/* ===== Gallery ===== */}
        <Section label="Project gallery" className="pb-13 pt-11">
          <h2 className="mb-6 mt-0 text-[26px] font-[650] tracking-[-0.02em] md:text-[32px]">
            Project gallery
          </h2>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3.5 lg:grid-cols-4">
            {projectDetail.gallery.map((g) => {
              const img = images[g.image];
              return (
                <div
                  key={g.label}
                  className={`relative ${g.span ? "col-span-2 row-span-2" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={`${g.label} — ${img.alt}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </Section>

        {/* ===== Related projects ===== */}
        <Section label="More projects" className="pb-13 pt-11">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[24px] font-[650] tracking-[-0.02em] md:text-[28px]">
              More projects
            </h2>
            <Link
              href="/projects"
              className="border-b-[1.5px] border-terracotta pb-0.5 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
            >
              All projects →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetail.related.map((prj) => (
              <ProjectCard
                key={prj.slug}
                title={prj.title}
                meta={prj.meta}
                image={prj.image}
                href={`/projects/${prj.slug}`}
                height={200}
              />
            ))}
          </div>
        </Section>

        <FinalCta
          title="Want this done to your roof?"
          body="Free inspection with a written photo report — condition, lifespan, honest options."
        />
      </main>
      <Footer />
    </>
  );
}
