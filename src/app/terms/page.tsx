import type { Metadata } from "next";
import { LegalPage, termsSections } from "@/components/sections/LegalPage";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Ridgeline Roofing terms of service — estimates and pricing, scheduling and weather policy, warranty terms, payment, and dispute resolution.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Service", path: "/terms" },
          ])
        )}
      />
      <LegalPage docTitle="Terms of Service" sections={termsSections} active="terms" />
    </>
  );
}
