/** Review card — stars, quote, and attribution (avatar disc uses the design's placeholder texture until real customer photos exist). */
export function TestimonialCard({
  quote,
  name,
  meta,
  withAvatar = true,
}: {
  quote: string;
  name: string;
  meta: string;
  withAvatar?: boolean;
}) {
  return (
    <figure className="m-0 flex flex-col gap-[18px] border border-line p-7">
      <div aria-label="5 out of 5 stars" className="text-[15px] tracking-[2px] text-terracotta">
        ★★★★★
      </div>
      <blockquote className="m-0 text-[16.5px] font-[450] leading-[1.6]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        {withAvatar && <div aria-hidden className="texture-fine h-[38px] w-[38px] flex-none rounded-full" />}
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-[12.5px] text-faint">{meta}</div>
        </div>
      </figcaption>
    </figure>
  );
}

/** Slimmer review variant used on residential/city pages — quote + em-dash attribution. */
export function TestimonialCardSlim({
  quote,
  name,
  meta,
}: {
  quote: string;
  name: string;
  meta: string;
}) {
  return (
    <figure className="m-0 flex flex-col gap-3.5 border border-line px-6 py-[26px]">
      <div aria-label="5 out of 5 stars" className="text-sm tracking-[2px] text-terracotta">
        ★★★★★
      </div>
      <blockquote className="m-0 text-[15px] font-[450] leading-[1.6]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto text-[13px] text-faint">
        — {name}, {meta}
      </figcaption>
    </figure>
  );
}
