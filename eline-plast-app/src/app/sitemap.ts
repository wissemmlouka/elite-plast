import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

// TODO: update to the real production domain when available.
const siteUrl = "https://www.elineplast.tn";

// Only live routes belong here. Add the marketing pages as they are built:
// "/products", "/solutions", "/projects", "/about", "/contact".
const routes = ["/"];

function localizedUrl(locale: string, route: string) {
  return `${siteUrl}/${locale}${route === "/" ? "" : route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, route),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localizedUrl(l, route)]),
        ),
      },
    })),
  );
}
