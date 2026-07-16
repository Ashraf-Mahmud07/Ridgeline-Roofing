import type { Metadata } from "next";
import { SlimHeader } from "@/components/layout/Header";
import { BookingWizard } from "@/components/sections/BookingWizard";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Book a Free Inspection",
  description:
    "Book your free roof inspection in about 2 minutes. Pick a time window and get a written photo report after the visit — no obligation, no sales pressure.",
  alternates: { canonical: "/book-an-inspection" },
  openGraph: {
    title: "Book a Free Roof Inspection",
    description:
      "Takes about 2 minutes — confirmed time window and a written photo report after the visit.",
    url: "/book-an-inspection",
  },
};

export default function BookInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book an Inspection", path: "/book-an-inspection" },
          ])
        )}
      />
      <SlimHeader />
      <main id="main-content">
        <BookingWizard />
      </main>
    </>
  );
}
