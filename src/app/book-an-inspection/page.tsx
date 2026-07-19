import type { Metadata } from "next";
import { SlimHeader } from "@/components/layout/Header";
import { SlimFooter } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Book a Free Inspection",
  description:
    "Book your free roof inspection in about 60 seconds — just your name, phone, and address. Written photo report, no obligation, no sales pressure.",
  alternates: { canonical: "/book-an-inspection" },
  openGraph: {
    title: "Book a Free Roof Inspection",
    description:
      "About 60 seconds to book — written photo report after the visit, no obligation.",
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
      <main id="main-content" className="grid min-h-[calc(100vh-63px)] lg:grid-cols-[380px_1fr]">
        {/* ===== Left rail ===== */}
        <aside className="flex flex-col gap-8 bg-ink px-6 py-11 text-cream md:px-10">
          <div>
            <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-eyebrow text-terracotta-soft">
              Free inspection
            </div>
            <h1 className="m-0 text-[28px] font-[650] leading-[1.1] tracking-[-0.02em] md:text-[32px]">
              Book your roof inspection
            </h1>
            <p className="mb-0 mt-3.5 text-[14.5px] leading-[1.6] text-taupe">
              Takes about 60 seconds. We&apos;ll call or text within one business hour to
              confirm your time window, and you&apos;ll get a written photo report after the
              visit.
            </p>
          </div>
          <div className="hidden flex-col gap-2.5 text-[13.5px] text-taupe lg:flex">
            <span>✓ Free, no obligation</span>
            <span>✓ Written photo report included</span>
            <span>✓ Most inspections within 2 business days</span>
            <span>✓ No door-knocking sales tactics</span>
          </div>
          <div className="mt-auto hidden border-t border-line-dark-2 pt-5 text-[13px] text-taupe lg:block">
            &ldquo;Inspection on Tuesday, new roof by Friday, and the yard was cleaner than
            they found it.&rdquo;
            <div className="mt-1.5 text-cream">— Rachel Dunleavy, Arvada</div>
          </div>
        </aside>

        {/* ===== Form panel ===== */}
        <div className="max-w-[640px] px-6 pb-14 pt-10 md:px-10 lg:px-14">
          <BookingForm />
        </div>
      </main>
      <SlimFooter />
    </>
  );
}
