import { images, type ImageKey } from "@/lib/images";

/**
 * Instagram feed configuration.
 *
 * The site ships with curated placeholder posts so the section always renders.
 * To wire up the live feed later:
 *   1. Set `useLiveFeed: true`.
 *   2. Provide a Graph API token / proxy endpoint in `apiEndpoint` and implement
 *      the fetch in `getInstagramPosts()` below (Meta Basic Display API or a
 *      service like Behold / EmbedSocial). Map the response to `InstagramPost[]`.
 *   3. Add the Instagram CDN host to `next.config.ts` remotePatterns
 *      (scontent.cdninstagram.com) so next/image can optimize the photos.
 */
export type InstagramPost = {
  /** Registry key (placeholder) OR absolute URL (live feed). */
  image: ImageKey | string;
  alt: string;
  /** Permalink to the post. */
  href: string;
  caption?: string;
  likes?: number;
};

export const instagramConfig = {
  handle: "@ridgelineroofing",
  profileUrl: "https://www.instagram.com/ridgelineroofing",
  useLiveFeed: false,
  apiEndpoint: "", // e.g. "/api/instagram" — implement server-side to keep tokens secret
  postCount: 6,
};

/** Curated placeholder posts (used until `useLiveFeed` is enabled). */
export const placeholderPosts: InstagramPost[] = [
  { image: "homeLuxuryDusk", alt: "Completed multi-gable shingle roof at dusk", href: instagramConfig.profileUrl, caption: "Golden-hour handoff in Arvada 🏡", likes: 214 },
  { image: "workerMetalPanels", alt: "Standing-seam metal panel install", href: instagramConfig.profileUrl, caption: "Standing seam, dialed in.", likes: 168 },
  { image: "roofConstructionAerial", alt: "Aerial of a new roof deck going down", href: instagramConfig.profileUrl, caption: "Tear-off to dry-in, one day.", likes: 302 },
  { image: "homeMetalRoof", alt: "Craftsman home with new metal roof", href: instagramConfig.profileUrl, caption: "Craftsman + metal = forever.", likes: 259 },
  { image: "rooferOnShingles", alt: "Roofer setting architectural shingles", href: instagramConfig.profileUrl, caption: "Our crews, our standards.", likes: 191 },
  { image: "homeBrickNew", alt: "Brick home with crisp new shingle roof", href: instagramConfig.profileUrl, caption: "Curb appeal, restored.", likes: 233 },
  { image: "neighborhoodAerial", alt: "Aerial over a neighborhood we serve", href: instagramConfig.profileUrl, caption: "14 cities and counting.", likes: 148 },
  { image: "homeTraditional", alt: "Traditional home with new gutters and roof", href: instagramConfig.profileUrl, caption: "Gutters that disappear.", likes: 176 },
  { image: "tileRoofCloseup", alt: "Close-up of clay tile roofing detail", href: instagramConfig.profileUrl, caption: "Tile detail 😍", likes: 205 },
];

/** Resolve a post's image source (registry key → URL, or pass-through URL). */
export function resolvePostSrc(image: ImageKey | string): string {
  if (image in images) return images[image as ImageKey].src;
  return image as string;
}

/**
 * Returns posts for the section. Swap the placeholder branch for a real fetch
 * when `useLiveFeed` is enabled.
 */
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  if (instagramConfig.useLiveFeed && instagramConfig.apiEndpoint) {
    // Example integration point — implement against your chosen API/proxy:
    // const res = await fetch(instagramConfig.apiEndpoint, { next: { revalidate: 3600 } });
    // const data = await res.json();
    // return data.posts.slice(0, instagramConfig.postCount);
  }
  return placeholderPosts.slice(0, instagramConfig.postCount);
}
