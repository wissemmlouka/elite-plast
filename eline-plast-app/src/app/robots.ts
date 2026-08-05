import type { MetadataRoute } from "next";

// TODO: update to the real production domain when available.
const siteUrl = "https://www.elineplast.tn";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
