import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://genznames.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
  for (const origin of ["indian", "english"]) {
    urls.push({
      url: `${SITE_URL}/names/${origin}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
    for (const gender of ["boy", "girl"]) {
      urls.push({
        url: `${SITE_URL}/names/${origin}/${gender}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }
  return urls;
}
