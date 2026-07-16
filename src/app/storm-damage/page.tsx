import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section, HairlineGrid } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/InnerHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FinalCta } from "@/components/sections/FinalCta";
import { stormSteps, stormRedFlags } from "@/lib/services";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Storm Damage & Insurance",
  description:
    "Emergency tarping, honest hail and wind damage assessments, and hands-on insurance claim help — from documentation to meeting the adjuster on your roof. Available 24/7.",
  alternates: { canonical: "/storm-damage" },
  openGraph: {
    title: "Storm Damage & Insurance — After the storm, before the panic.",
    description:
      "Emergency tarping, honest damage assessments, and hands-on help with your insurance claim.",
    url: "/storm-damage",
    images: [{ url: images.stormLightningDark.src, alt: images.stormLightningDark.alt }],
  },
};

export default function StormDamagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Storm Damage Repair & Insurance Claim Support",
            description:
              "Emergency tarping, hail and wind damage assessments, and insurance claim support.",
            path: "/storm-damage",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Storm Damage & Insurance", path: "/storm-damage" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        {/* ===== Emergency banner ===== */}
        <div className="flex items-center justify-center gap-3.5 bg-terracotta px-6 py-3.5 text-center text-[15px] font-semibold text-cream md:px-14">
          <span aria-hidden className="hidden h-[9px] w-[9px] flex-none rounded-full bg-cream sm:block" />
          <span>
            Active leak or storm damage right now? Call{" "}
            <a href={siteConfig.phoneHref} className="text-cream underline underline-offset-2">
              {siteConfig.phone}
            </a>{" "}
            — we answer 24/7 and can tarp your roof today.
          </span>
        </div>

        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Storm Damage & Insurance" }]}
          title="After the storm, before the panic."
          body="Emergency tarping, honest hail and wind assessments, and hands-on help with your insurance claim — from documentation to meeting the adjuster on your roof."
          image="stormLightningDark"
          checks={[
            "Same-day tarping",
            "Free damage documentation",
            "Adjuster meetings attended",
          ]}
        >
          <div className="mt-1 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
            <Button href={siteConfig.phoneHref} variant="accent">
              Call Emergency Line
            </Button>
            <Button href="/book-an-inspection" variant="outline">
              Book a Damage Assessment
            </Button>
          </div>
        </PageHero>

        {/* ===== First steps ===== */}
        <Section label="Right after a storm" className="pb-14 pt-13">
          <Eyebrow className="mb-3">Right after a storm</Eyebrow>
          <h2 className="mb-8 mt-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
            Do these four things first
          </h2>
          <ProcessSteps steps={stormSteps} numeralSize="medium" />
        </Section>

        {/* ===== Insurance help (dark) ===== */}
        <Section
          label="Insurance claims"
          className="grid items-center gap-10 bg-ink py-14 text-cream lg:grid-cols-2 lg:gap-16"
        >
          <div className="relative order-2 h-72 lg:order-1 lg:h-[360px]">
            <Image
              src={images.writingPlans.src}
              alt={images.writingPlans.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 flex flex-col gap-[18px] lg:order-2">
            <Eyebrow onDark>Insurance claims</Eyebrow>
            <h2 className="m-0 text-3xl font-[650] tracking-[-0.02em] md:text-4xl">
              We speak adjuster.
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.65] text-taupe">
              We photograph and measure every damaged slope, prepare the documentation your
              insurer needs, and meet the adjuster on your roof so nothing gets missed. We
              don&apos;t inflate claims — that protects you and keeps the process fast.
            </p>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              <span>✓ Full photo &amp; measurement documentation</span>
              <span>✓ On-site adjuster meetings</span>
              <span>✓ Scope review — we catch undercounted damage</span>
              <span>✓ Work starts only after your claim is settled</span>
            </div>
            <Button href="/book-an-inspection" variant="accent" className="mt-2 self-start">
              Get Damage Documented Free →
            </Button>
          </div>
        </Section>

        {/* ===== Storm chasers warning ===== */}
        <Section
          label="A warning about storm chasers"
          className="grid gap-13 pb-14 pt-13 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <Eyebrow className="mb-3">A warning</Eyebrow>
            <h2 className="m-0 text-[28px] font-[650] tracking-[-0.02em] md:text-[34px]">
              The trucks that follow the hail
            </h2>
            <p className="mb-0 mt-4 text-[15.5px] leading-[1.6] text-muted">
              After every big storm, out-of-state crews knock doors, collect deposits, and
              vanish before the warranty matters. Here&apos;s how to spot them.
            </p>
          </div>
          <HairlineGrid cols={2}>
            {stormRedFlags.map((f) => (
              <div key={f.title} className="flex flex-col gap-1.5 bg-cream px-6 py-[22px]">
                <div className="text-[15.5px] font-[650] text-terracotta">{f.title}</div>
                <p className="m-0 text-[13.5px] leading-[1.55] text-muted">{f.desc}</p>
              </div>
            ))}
          </HairlineGrid>
        </Section>

        <FinalCta
          title="Storm damage? Know for sure — free."
          body="A documented assessment you can take straight to your insurer. If there's no damage, you'll know that too."
          primaryLabel="Book a Damage Assessment"
        />
      </main>
      <Footer />
    </>
  );
}
