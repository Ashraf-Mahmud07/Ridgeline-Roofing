import type { Metadata } from "next";
import { LegalPage, privacySections } from "@/components/sections/LegalPage";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ridgeline Roofing collects, uses, and protects your information — contact details, property addresses, roof photos, and site analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ])
        )}
      />
      <LegalPage docTitle="Privacy Policy" sections={privacySections} active="privacy" />
    </>
  );
}
