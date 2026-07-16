import { Button } from "@/components/ui/Button";
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
    <section
      aria-label="Book an inspection"
      className="bg-ink px-6 py-16 text-center text-cream md:px-10 lg:px-14 lg:py-[72px]"
    >
      <h2
        className="display-condensed mx-auto my-0 text-3xl font-[650] tracking-[-0.025em] md:text-[42px] md:leading-tight"
        style={{ maxWidth: maxTitleWidth }}
      >
        {title}
      </h2>
      <p className="mx-auto mb-0 mt-[18px] max-w-[52ch] text-base leading-[1.6] text-taupe">
        {body}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3.5 sm:flex-row">
        <Button href={primaryHref} variant="accent" size="lg">
          {primaryLabel}
        </Button>
        <Button href={siteConfig.phoneHref} variant="outline-dark" size="lg">
          Call {siteConfig.phone}
        </Button>
      </div>
    </section>
  );
}
