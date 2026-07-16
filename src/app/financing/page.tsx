import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Section } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FinalCta } from "@/components/sections/FinalCta";
import { financingPlans, financingSteps } from "@/lib/services";
import { financingFaqs } from "@/lib/faqs";
import { images } from "@/lib/images";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Roof Financing",
  description:
    "Finance a new roof from $159/month through GreenSky® with 0% intro options for qualified buyers. Check your rate in minutes with no impact on your credit score.",
  alternates: { canonical: "/financing" },
  openGraph: {
    title: "Financing — A new roof from $159 a month.",
    description:
      "Flexible plans through our lending partners, including 0% intro options.",
    url: "/financing",
    images: [{ url: images.homeLuxuryDusk.src, alt: images.homeLuxuryDusk.alt }],
  },
};

export default function FinancingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(financingFaqs))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Financing", path: "/financing" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Financing" }]}
          title="A new roof from $159 a month."
          body="Flexible plans through our lending partners, including 0% intro options for qualified buyers. Check your rate in minutes — with no impact on your credit score."
          image="homeLuxuryDusk"
          checks={[
            "Decision in minutes",
            "No prepayment penalties",
            "Insurance-deductible plans too",
          ]}
        >
          <div className="mt-1 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
            <Button href="/contact" variant="dark">
              Check My Rate — No Credit Impact
            </Button>
            <Button href="/book-an-inspection" variant="outline">
              Get a Price First
            </Button>
          </div>
        </PageHero>

        {/* ===== Plans ===== */}
        <Section label="Three ways to pay" className="pb-14 pt-13">
          <h2 className="mb-2 mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Three ways to pay
          </h2>
          <p className="mb-[30px] mt-0 text-[15px] text-muted">
            Exact terms depend on credit approval through GreenSky®. These are the shapes to
            expect.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {financingPlans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col gap-3.5 border-[1.5px] px-7 pb-[34px] pt-[30px] ${
                  p.badge ? "border-terracotta" : "border-line"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-[11px] left-[26px] bg-terracotta px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-cream">
                    {p.badge}
                  </span>
                )}
                <div className="text-[13px] font-semibold uppercase tracking-label text-faint">
                  {p.name}
                </div>
                <div className="text-[30px] font-bold tracking-[-0.02em] md:text-[34px]">
                  {p.headline}
                </div>
                <p className="m-0 text-[14.5px] leading-[1.6] text-muted">{p.desc}</p>
                <div className="mt-1 flex flex-col gap-2 text-[13.5px] text-muted">
                  {p.features.map((f) => (
                    <span key={f}>✓ {f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== How it works ===== */}
        <Section label="How it works" className="pb-14 pt-13">
          <h2 className="mb-8 mt-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
            How it works
          </h2>
          <ProcessSteps steps={financingSteps} numeralSize="medium" />
        </Section>

        {/* ===== FAQ ===== */}
        <Section label="FAQ" className="grid gap-13 pb-14 pt-13 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow className="mb-3">FAQ</Eyebrow>
            <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
              Financing questions
            </h2>
            <p className="mb-0 mt-4 text-[15px] leading-[1.6] text-muted">
              More in the{" "}
              <Link href="/faq" className="text-terracotta hover:text-terracotta-deep">
                full FAQ
              </Link>
              , or call — a person answers.
            </p>
          </div>
          <FaqAccordion faqs={financingFaqs} compact />
        </Section>

        <FinalCta
          title="Get the price first. Then decide how to pay."
          body="Free inspection, fixed written quote, financing options laid out side by side."
          maxTitleWidth="24ch"
        />
      </main>
      <Footer />
    </>
  );
}
