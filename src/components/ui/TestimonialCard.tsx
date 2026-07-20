import { Star, Quote } from "lucide-react";

function Stars({ onDark = false }: { onDark?: boolean }) {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-[17px] w-[17px] ${onDark ? "text-terracotta-soft" : "text-terracotta"}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

/** Review card — glassy surface, stars, quote, and attribution. */
export function TestimonialCard({
  quote,
  name,
  meta,
  withAvatar = true,
  onDark = false,
}: {
  quote: string;
  name: string;
  meta: string;
  withAvatar?: boolean;
  onDark?: boolean;
}) {
  return (
    <figure
      className={`group relative m-0 flex flex-col gap-5 rounded-2xl p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
        onDark
          ? "border border-white/10 bg-white/5 backdrop-blur-xl"
          : "border border-line bg-white"
      }`}
    >
      <Quote
        aria-hidden
        className={`absolute right-6 top-6 h-9 w-9 ${onDark ? "text-white/10" : "text-ink/[0.06]"}`}
        fill="currentColor"
      />
      <Stars onDark={onDark} />
      <blockquote
        className={`relative z-10 m-0 text-[16.5px] font-medium leading-[1.65] ${
          onDark ? "text-white/90" : "text-ink"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        {withAvatar && (
          <div
            aria-hidden
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-steel to-navy text-sm font-bold text-white"
          >
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className={`text-sm font-bold ${onDark ? "text-white" : "text-ink"}`}>{name}</div>
          <div className={`text-[12.5px] ${onDark ? "text-taupe" : "text-faint"}`}>{meta}</div>
        </div>
      </figcaption>
    </figure>
  );
}

/** Slimmer review variant used on residential/city pages. */
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
    <figure className="m-0 flex flex-col gap-3.5 rounded-2xl border border-line bg-white px-6 py-6 shadow-card">
      <Stars />
      <blockquote className="m-0 text-[15px] font-medium leading-[1.6] text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto text-[13px] text-faint">
        — {name}, {meta}
      </figcaption>
    </figure>
  );
}
