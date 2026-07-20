import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/sections/Section";
import { FaqTabs } from "@/components/sections/FaqTabs";
import { FinalCta } from "@/components/sections/FinalCta";
import { faqCategories } from "@/lib/faqs";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Roofing questions answered honestly — pricing, process, insurance claims, warranties, and maintenance, straight from the roofers who do the work.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Questions, answered honestly.",
    description: "Pricing, process, insurance, and warranties — answered by roofers.",
    url: "/faq",
  },
};

export default function FaqPage() {
  const allFaqs = Object.values(faqCategories).flat();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(allFaqs))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        <Section label="FAQ" padded={false} className="pt-11">
          <div className="shell ">
            <Breadcrumbs
              crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
              className="mb-[18px]"
            />
            <h1 className="display-condensed m-0 text-4xl font-[650] tracking-[-0.025em] md:text-5xl">
              Questions, answered honestly.
            </h1>
            <p className="mb-0 mt-3.5 max-w-[54ch] text-[16.5px] leading-[1.55] text-muted">
              Everything homeowners ask us — pricing, process, insurance, and warranties.
              Can&apos;t find it?{" "}
              <Link href="/contact" className="text-terracotta hover:text-terracotta-deep">
                Ask us directly
              </Link>
              .
            </p>
          </div>
          <FaqTabs />
        </Section>

        <FinalCta
          title="The best answers come from your roof."
          body="Free inspection, written photo report, honest options. No pressure."
        />
      </main>
      <Footer />
    </>
  );
}
