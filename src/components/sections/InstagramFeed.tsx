import Image from "next/image";
import { Heart } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/motion";
import {
  getInstagramPosts,
  instagramConfig,
  resolvePostSrc,
} from "@/lib/instagram";

/** Instagram grid shown before the footer. Auto-swaps to a live feed via config. */
export async function InstagramFeed() {
  const posts = await getInstagramPosts();

  return (
    <section aria-label="Instagram" className="shell border-b border-line bg-white py-16 lg:py-20">
      <div>
        <Reveal className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-4">On the roof</Eyebrow>
            <h2 className="m-0 text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-[42px]">
              Follow the work
            </h2>
            <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted">
              Fresh installs, crew shots, and before/afters — straight from the field.
            </p>
          </div>
          <a
            href={instagramConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-terracotta to-terracotta-deep px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(249,115,22,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow {instagramConfig.handle}
          </a>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <RevealItem key={post.href + i}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-ink"
              >
                <Image
                  src={resolvePostSrc(post.image)}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart className="h-4 w-4" fill="currentColor" />
                    <span className="text-xs font-semibold">{post.likes}</span>
                  </div>
                  {post.caption && (
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-white/85">
                      {post.caption}
                    </p>
                  )}
                </div>
                <span className="absolute right-2.5 top-2.5 text-white/0 transition-colors duration-300 group-hover:text-white">
                  <InstagramIcon className="h-4 w-4" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
