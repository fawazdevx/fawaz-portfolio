import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://fawazoyebode.tech", changeFrequency: "monthly", priority: 1 }];
}
