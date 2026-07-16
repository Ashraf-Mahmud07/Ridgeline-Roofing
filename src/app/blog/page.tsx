import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/sections/Section";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { featuredPost } from "@/lib/posts";
import { images } from "@/lib/images";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Learning Center",
  description:
    "Straight answers about roofs — costs, materials, insurance, and maintenance — written by the people who install them. The Ridgeline Roofing Learning Center.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Learning Center — straight answers about roofs",
    description:
      "Costs, materials, insurance, and maintenance — written by the people who install roofs.",
    url: "/blog",
    images: [{ url: images[featuredPost.image].src, alt: images[featuredPost.image].alt }],
  },
};

export default function BlogPage() {
  const featured = images[featuredPost.image];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learning Center", path: "/blog" },
          ])
        )}
      />
      <Header />
      <main>
        {/* ===== Header + filters ===== */}
        <Section label="Learning Center" padded={false} className="pt-11">
          <div className="px-6 md:px-10 lg:px-14">
            <Breadcrumbs
              crumbs={[{ name: "Home", href: "/" }, { name: "Learning Center" }]}
              className="mb-[18px]"
            />
            <h1 className="display-condensed m-0 text-4xl font-[650] tracking-[-0.025em] md:text-5xl">
              The Learning Center
            </h1>
            <p className="mb-0 mt-3.5 max-w-[56ch] text-[16.5px] leading-[1.55] text-muted">
              Straight answers about roofs — costs, materials, insurance, and maintenance —
              written by the people who install them.
            </p>
          </div>
          <BlogGrid />
        </Section>

        {/* ===== Featured ===== */}
        <Section label="Featured article" padded={false} className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <Link href={`/blog/${featuredPost.slug}`} className="relative block min-h-[260px] lg:min-h-[360px]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </Link>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="flex flex-col justify-center gap-4 border-line px-6 py-10 text-ink lg:border-l lg:px-12"
          >
            <div className="flex items-center gap-3">
              <span className="bg-terracotta px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-cream">
                Featured
              </span>
              <span className="text-[12.5px] text-faint">
                {featuredPost.category} · {featuredPost.read}
              </span>
            </div>
            <h2 className="m-0 text-[26px] font-[650] leading-[1.1] tracking-[-0.02em] md:text-[34px]">
              {featuredPost.title}
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.6] text-muted">{featuredPost.excerpt}</p>
            <span className="text-sm font-semibold text-terracotta">Read the guide →</span>
          </Link>
        </Section>

        {/* ===== Newsletter ===== */}
        <section
          aria-label="Newsletter"
          className="flex flex-col items-start justify-between gap-8 border-b border-line bg-ink px-6 py-12 text-cream md:px-10 lg:flex-row lg:items-center lg:px-14"
        >
          <div>
            <div className="mb-1.5 text-2xl font-[650] tracking-[-0.02em]">
              One useful roofing email per season.
            </div>
            <div className="text-[14.5px] text-taupe">
              Maintenance reminders and storm-season prep. No spam, unsubscribe anytime.
            </div>
          </div>
          <form className="flex w-full flex-none flex-col gap-3 sm:w-auto sm:flex-row" aria-label="Subscribe to the newsletter">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-[1.5px] border-line-dark-3 bg-cream px-[18px] py-3.5 text-[15px] text-ink outline-none sm:w-[260px]"
            />
            <button
              type="button"
              className="bg-terracotta px-[26px] py-[15px] text-[15px] font-semibold text-cream transition-colors hover:bg-terracotta-deep"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
