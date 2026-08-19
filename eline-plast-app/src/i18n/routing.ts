import { defineRouting } from "next-intl/routing";

/**
 * Internal pathnames on the left, the URL each locale actually serves on the
 * right. Components always link with the internal name (`/products`) and
 * next-intl rewrites it to `/fr/produits` or `/en/products`.
 */
export const pathnames = {
  "/": "/",
  "/products": { fr: "/produits", en: "/products" },
  "/products/[slug]": { fr: "/produits/[slug]", en: "/products/[slug]" },
  "/projects": { fr: "/projets", en: "/projects" },
  "/projects/[slug]": { fr: "/projets/[slug]", en: "/projects/[slug]" },
  "/about": { fr: "/a-propos", en: "/about" },
  "/contact": { fr: "/contact", en: "/contact" },
  "/quote": { fr: "/devis", en: "/quote" },
} as const;

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames,
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof pathnames;

/**
 * Routes that need no params, so they can be linked with a bare string.
 * Dynamic ones must be passed as `{ pathname, params }`.
 */
export type StaticPathname = Exclude<AppPathname, `${string}[${string}]`>;
