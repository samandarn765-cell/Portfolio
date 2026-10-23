import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samandar-nosirov.uz";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          uz: `${baseUrl}?lang=uz`,
          en: `${baseUrl}?lang=en`,
          ru: `${baseUrl}?lang=ru`,
        },
      },
    },
  ];
}
