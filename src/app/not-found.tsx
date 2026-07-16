import Link from "next/link";
import { SlimHeaderCta } from "@/components/layout/Header";
import { SlimFooter } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <SlimHeaderCta />
      <main
        aria-label="Page not found"
        className="flex min-h-[calc(100vh-155px)] flex-col items-center justify-center px-6 py-16 text-center md:px-14"
      >
        <div className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.16em] text-terracotta">
          Error 404
        </div>
        <div aria-hidden className="mb-7 flex items-end gap-1">
          <span className="block h-14 w-[70px] bg-ink" style={{ clipPath: "polygon(50% 0,100% 100%,0 100%)" }} />
          <span className="block h-14 w-[70px] bg-line" style={{ clipPath: "polygon(50% 0,100% 100%,0 100%)" }} />
          <span className="block h-14 w-[70px] bg-terracotta" style={{ clipPath: "polygon(50% 0,100% 100%,0 100%)" }} />
        </div>
        <h1 className="display-condensed m-0 max-w-[20ch] text-4xl font-[650] tracking-[-0.025em] md:text-[52px]">
          This page has a hole in it.
        </h1>
        <p className="mb-0 mt-[18px] max-w-[44ch] text-[16.5px] leading-[1.6] text-muted">
          The page you&apos;re looking for was moved, renamed, or never existed. Unlike your
          roof, this one&apos;s an easy fix.
        </p>
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
          <Link
            href="/"
            className="bg-ink px-8 py-4 text-[15.5px] font-semibold text-cream transition-colors hover:bg-terracotta"
          >
            Back to homepage
          </Link>
          <Link
            href="/book-an-inspection"
            className="border-[1.5px] border-line-strong px-8 py-[14.5px] text-[15.5px] font-semibold text-ink transition-colors hover:border-ink"
          >
            Book a Free Inspection
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-7 text-sm font-semibold">
          <Link href="/services/roof-replacement" className="text-terracotta hover:text-terracotta-deep">
            Services
          </Link>
          <Link href="/projects" className="text-terracotta hover:text-terracotta-deep">
            Projects
          </Link>
          <Link href="/faq" className="text-terracotta hover:text-terracotta-deep">
            FAQ
          </Link>
          <Link href="/contact" className="text-terracotta hover:text-terracotta-deep">
            Contact
          </Link>
        </div>
      </main>
      <SlimFooter />
    </>
  );
}
