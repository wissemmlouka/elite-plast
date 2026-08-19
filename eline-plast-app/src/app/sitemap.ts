import type { MetadataRoute } from "next";

import { pathnames, routing, type Locale } from "@/i18n/routing";
import { products } from "@/data/products";
import { projects } from "@/data/projects";

// TODO: update to the real production domain when available.
const siteUrl = "https://www.elineplast.tn";

/** Static routes, by internal pathname. `/quote` stays out — it is noindex. */
const staticRoutes = [
  "/",
  "/products",
  "/projects",
  "/about",
  "/contact",
] as const;

function resolve(pathname: string, locale: Locale, slug?: string) {
  const entry = pathnames[pathname as keyof typeof pathnames];
  const localized = typeof entry === "string" ? entry : entry[locale];
  const withSlug = slug ? localized.replace("[slug]", slug) : localized;
  return `${siteUrl}/${locale}${withSlug === "/" ? "" : withSlug}`;
}

function entryFor(pathname: string, priority: number, slug?: string) {
  return routing.locales.map((locale) => ({
    url: resolve(pathname, locale, slug),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, resolve(pathname, l, slug)]),
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.flatMap((route) =>
      entryFor(route, route === "/" ? 1 : 0.8),
    ),
    ...products.flatMap((product) =>
      entryFor("/products/[slug]", 0.7, product.slug),
    ),
    ...projects.flatMap((project) =>
      entryFor("/projects/[slug]", 0.6, project.slug),
    ),
  ];
}
