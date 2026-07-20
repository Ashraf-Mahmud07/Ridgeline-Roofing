import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Ridgeline Roofing is committed to keeping this website usable for everyone, including people who rely on assistive technology.",
  alternates: { canonical: "/accessibility" },
};

const commitments = [
  {
    title: "Standards we follow",
    body: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, covering color contrast, keyboard operability, and screen-reader support.",
  },
  {
    title: "Keyboard & screen readers",
    body: "Every interactive element is reachable by keyboard with visible focus states, and images carry descriptive alternative text.",
  },
  {
    title: "Ongoing work",
    body: "Accessibility is never finished. We review new pages and components as we ship them, and we welcome feedback that helps us improve.",
  },
  {
    title: "Need help?",
    body: `If any part of this site is hard to use, call us at ${siteConfig.phone} or email ${siteConfig.email} and a real person will help you directly.`,
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Accessibility", path: "/accessibility" },
          ])
        )}
      />
      <Header />
      <main id="main-content">
        <Section className="bg-white py-14 lg:py-16">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Accessibility" }]} className="mb-5" />
          <Eyebrow className="mb-4">Accessibility</Eyebrow>
          <h1 className="m-0 max-w-[20ch] text-4xl font-extrabold tracking-[-0.03em] text-ink md:text-5xl">
            A website everyone can use
          </h1>
          <p className="mt-5 max-w-[62ch] text-[16.5px] leading-[1.7] text-muted">
            {siteConfig.name} is committed to making our site accessible to the widest possible
            audience, regardless of ability or technology.
          </p>
        </Section>

        <Section className="bg-cream py-14 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {commitments.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-white p-7 shadow-card">
                <h2 className="m-0 text-[19px] font-bold tracking-[-0.01em] text-ink">{c.title}</h2>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
