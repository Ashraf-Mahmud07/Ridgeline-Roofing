import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/sections/Section";
import { posts, article } from "@/lib/posts";
import { images } from "@/lib/images";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

/**
 * The design ships one worked article template; every post slug renders it
 * until real editorial content is written.
 */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: article.title,
    description:
      "Size, pitch, material, decking condition, and the four line items contractors hide — a transparent breakdown of what a new roof actually costs in 2026.",
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      url: `/blog/${slug}`,
      images: [{ url: images[article.cover].src, alt: images[article.cover].alt }],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cover = images[article.cover];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learning Center", path: "/blog" },
            { name: article.category, path: `/blog/${slug}` },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        {/* ===== Article header ===== */}
        <Section label="Article header" className="max-w-[860px] pb-9 pt-11">
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Learning Center", href: "/blog" },
              { name: article.category },
            ]}
            className="mb-[18px]"
          />
          <h1 className="display-condensed m-0 text-[34px] font-[650] leading-[1.05] tracking-[-0.025em] md:text-[46px]">
            {article.title}
          </h1>
          <div className="mt-[22px] flex items-center gap-3.5">
            <div aria-hidden className="texture-fine h-10 w-10 flex-none rounded-full" />
            <div className="text-[13.5px]">
              <span className="font-[650]">{article.author}</span>
              <span className="text-faint">
                {" "}
                · {article.authorRole} · {article.updated} · {article.read}
              </span>
            </div>
          </div>
        </Section>

        {/* ===== Cover ===== */}
        <div className="relative h-[280px] border-b border-line md:h-[380px]">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* ===== Body + TOC ===== */}
        <Section label="Article body" className="grid gap-10 pb-14 pt-11 lg:grid-cols-[1fr_300px] lg:gap-16">
          <article className="flex max-w-[680px] flex-col gap-[22px]">
            <p className="m-0 text-[17px] leading-[1.7] text-[#3d3933]">{article.intro}</p>

            {article.sections.map((s, i) => (
              <div key={s.id} className="contents">
                <h2
                  id={s.id}
                  className="mb-0 mt-4 scroll-mt-24 text-[24px] font-[650] tracking-[-0.02em] md:text-[28px]"
                >
                  {s.heading}
                </h2>
                <p className="m-0 text-base leading-[1.7] text-[#3d3933]">{s.body}</p>
                {i === 0 && (
                  <aside className="flex flex-col gap-2 border border-line bg-panel-soft px-[26px] py-[22px]">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-terracotta">
                      Rule of thumb
                    </div>
                    <p className="m-0 text-[15.5px] font-medium leading-[1.6]">
                      {article.ruleOfThumb}
                    </p>
                  </aside>
                )}
                {i === 1 && (
                  <figure className="m-0">
                    <div className="overflow-x-auto border border-line">
                      <table className="w-full min-w-[520px] border-collapse text-[14.5px]">
                        <thead>
                          <tr className="bg-panel-soft text-left">
                            <th scope="col" className="border-b border-line px-4 py-3 text-xs font-semibold uppercase tracking-label text-faint">Material</th>
                            <th scope="col" className="border-b border-line px-4 py-3 text-xs font-semibold uppercase tracking-label text-faint">Installed cost*</th>
                            <th scope="col" className="border-b border-line px-4 py-3 text-xs font-semibold uppercase tracking-label text-faint">Per sq ft</th>
                            <th scope="col" className="border-b border-line px-4 py-3 text-xs font-semibold uppercase tracking-label text-faint">Lifespan</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Architectural shingle", "$12,000–$19,500", "$4.00–$6.50", "25–30 yrs"],
                            ["Class 4 impact-rated shingle", "$13,500–$22,500", "$4.50–$7.50", "25–30 yrs"],
                            ["Standing-seam metal", "$27,000–$45,000", "$9.00–$15.00", "40–70 yrs"],
                            ["Concrete / clay tile", "$33,000–$60,000", "$11.00–$20.00", "50+ yrs"],
                            ["TPO / EPDM (flat)", "—", "$7.00–$11.00", "20–30 yrs"],
                          ].map((row) => (
                            <tr key={row[0]} className="border-b border-line last:border-b-0">
                              <th scope="row" className="px-4 py-3 text-left font-semibold">{row[0]}</th>
                              <td className="px-4 py-3 text-muted">{row[1]}</td>
                              <td className="px-4 py-3 text-muted">{row[2]}</td>
                              <td className="px-4 py-3 text-muted">{row[3]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <figcaption className="mt-2 text-[12.5px] text-faint">
                      *Typical 30-square Denver-metro home, 2026 — permitted, warrantied, installed.
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}

            {/* inline CTA */}
            <div className="mt-2.5 flex flex-col items-start justify-between gap-5 bg-ink px-8 py-7 text-cream sm:flex-row sm:items-center">
              <div>
                <div className="mb-1 text-[19px] font-[650]">Want a real number for your roof?</div>
                <div className="text-sm text-taupe">
                  Free inspection, fixed written price. No estimate-that-grows.
                </div>
              </div>
              <Link
                href="/book-an-inspection"
                className="flex-none bg-terracotta px-[26px] py-3.5 text-[14.5px] font-semibold text-cream transition-colors hover:bg-terracotta-deep"
              >
                Book Free Inspection
              </Link>
            </div>
          </article>

          {/* TOC sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-[88px] flex flex-col gap-7">
              <nav aria-label="In this article" className="border border-line px-6 py-[22px]">
                <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                  In this article
                </div>
                <div className="flex flex-col gap-[11px] text-sm">
                  {article.sections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="text-muted hover:text-terracotta">
                      {s.heading}
                    </a>
                  ))}
                </div>
              </nav>
              <div className="flex flex-col gap-3 border border-line px-6 py-[22px]">
                <div className="flex items-center gap-3">
                  <div aria-hidden className="texture-fine h-11 w-11 flex-none rounded-full" />
                  <div>
                    <div className="text-[14.5px] font-[650]">{article.author}</div>
                    <div className="text-[12.5px] text-faint">{article.authorRole}</div>
                  </div>
                </div>
                <p className="m-0 text-[13px] leading-[1.55] text-muted">{article.authorBio}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== Related posts ===== */}
        <Section label="Keep reading" className="pb-13 pt-11">
          <div className="mb-[26px] flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[24px] font-[650] tracking-[-0.02em] md:text-[28px]">
              Keep reading
            </h2>
            <Link
              href="/blog"
              className="border-b-[1.5px] border-terracotta pb-0.5 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
            >
              All articles →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {article.related.map((p) => {
              const img = images[p.image];
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="flex flex-col gap-[11px] text-ink">
                  <div className="relative h-[170px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs text-faint">
                    <span className="font-semibold text-terracotta">{p.category}</span> · {p.read}
                  </div>
                  <div className="text-[17px] font-[650] leading-[1.25]">{p.title}</div>
                </Link>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
