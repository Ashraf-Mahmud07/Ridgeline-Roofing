import type { Metadata } from "next";
import { SlimHeaderCta } from "@/components/layout/Header";
import { SlimFooter } from "@/components/layout/Footer";
import { SearchClient } from "@/components/sections/SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search Ridgeline Roofing services, Learning Center articles, and FAQs — leaks, costs, warranties, storm damage, and more.",
  alternates: { canonical: "/search" },
  robots: { index: false },
};

export default function SearchPage() {
  return (
    <>
      <SlimHeaderCta sticky />
      <main>
        <SearchClient />
      </main>
      <SlimFooter />
    </>
  );
}
