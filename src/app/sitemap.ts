import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/projects";
import { cities } from "@/lib/cities";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticEntries: { url: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/residential-roofing`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/commercial-roofing`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/storm-damage`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/services/roof-replacement`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/book-an-inspection`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/projects`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/service-areas`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/financing`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${base}/careers`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${base}/privacy`, priority: 0.2, changeFrequency: "yearly" },
    { url: `${base}/terms`, priority: 0.2, changeFrequency: "yearly" },
  ];
  const staticRoutes: MetadataRoute.Sitemap = staticEntries.map((r) => ({
    ...r,
    lastModified: now,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/service-areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...cityRoutes, ...postRoutes];
}
