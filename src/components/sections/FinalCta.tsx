import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { siteConfig } from "@/lib/site-config";

/** Dark centered closing CTA used at the bottom of nearly every page. */
export function FinalCta({
  title,
  body,
  primaryLabel = "Book a Free Inspection",
  primaryHref = "/book-an-inspection",
  maxTitleWidth = "22ch",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  maxTitleWidth?: string;
}) {
  return (
    <section aria-label="Book an inspection" className="shell bg-cream py-16">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-white md:px-10 lg:py-20">
        <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-terracotta/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-steel/40 blur-3xl"
        />
        <Reveal className="relative z-10">
          <h2
            className="mx-auto my-0 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[46px]"
            style={{ maxWidth: maxTitleWidth }}
          >
            {title}
          </h2>
          <p className="mx-auto mb-0 mt-5 max-w-[52ch] text-base leading-[1.65] text-taupe">
            {body}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <Button href={primaryHref} variant="accent" size="lg">
              {primaryLabel}
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline-dark" size="lg">
              <Phone className="h-4 w-4" />
              Call {siteConfig.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
