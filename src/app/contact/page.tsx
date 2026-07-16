import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/sections/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a roofer, not a call center. Call, text, or message Ridgeline Roofing — a real person responds within one business hour, Mon–Sat. 24/7 for emergencies.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Talk to a roofer, not a call center.",
    description: "Call, text, or send the form — a real person responds within one business hour.",
    url: "/contact",
  },
};

const contactRows = [
  { label: "Call or text", value: siteConfig.phone, strong: true },
  { label: "Email", value: siteConfig.email },
  { label: "Office & yard", value: siteConfig.address.label },
  { label: "Hours", value: siteConfig.hours },
  { label: "Emergencies", value: "24/7 — call, don't email", accent: true },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ])
        )}
      />
      <Header />
      <main>
        <Section label="Contact" padded={false} className="grid lg:grid-cols-[0.95fr_1.05fr]">
          {/* left: info */}
          <div className="flex flex-col gap-7 border-line px-6 pb-13 pt-11 md:px-10 lg:border-r lg:px-14">
            <div>
              <Breadcrumbs
                crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
                className="mb-4"
              />
              <h1 className="display-condensed m-0 text-[34px] font-[650] tracking-[-0.025em] md:text-[46px]">
                Talk to a roofer, not a call center.
              </h1>
              <p className="mb-0 mt-3.5 max-w-[44ch] text-base leading-[1.6] text-muted">
                Call, text, or send the form — a real person from our office responds within
                one business hour, Mon–Sat.
              </p>
            </div>
            <div className="flex flex-col border-t border-line">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-line py-4"
                >
                  <span className="text-sm text-muted">{row.label}</span>
                  <span
                    className={`text-right text-[15px] font-semibold ${
                      row.accent ? "text-terracotta" : row.strong ? "text-base font-bold" : ""
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="border border-line">
              <iframe
                src="https://maps.google.com/maps?q=4280+Ward+Road,+Wheat+Ridge,+CO+80033&z=14&output=embed"
                className="block h-[260px] w-full border-none"
                loading="lazy"
                title="Ridgeline Roofing office at 4280 Ward Road, Wheat Ridge on Google Maps"
              />
              <div className="border-t border-line px-3 py-2 text-xs text-faint">
                Just off I-70 at Ward Road — customer parking in front, material yard in back.
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="px-6 pb-13 pt-11 md:px-10 lg:px-14">
            <ContactForm />
          </div>
        </Section>

        <EmergencyBanner message="Active leak or storm damage? Skip the form — call and we'll dispatch today." />
      </main>
      <Footer />
    </>
  );
}
