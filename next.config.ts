import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      // Instagram CDN — enable when wiring up the live feed (see src/lib/instagram.ts)
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "*.cdninstagram.com" },
    ],
  },
};

export default nextConfig;
