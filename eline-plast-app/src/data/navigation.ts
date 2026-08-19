import type { StaticPathname } from "@/i18n/routing";

import type { Localized } from "./types";

/**
 * Site navigation. `href` is always the internal pathname — next-intl resolves
 * it to `/fr/produits` or `/en/products`. Every entry here points at a route
 * that exists.
 */

export interface NavLink {
  href: StaticPathname;
  label: Localized<string>;
}

/** A NavLink once the active locale has been applied. */
export interface ResolvedNavLink {
  href: StaticPathname;
  label: string;
}

export const primaryNav: NavLink[] = [
  { href: "/", label: { fr: "Accueil", en: "Home" } },
  { href: "/products", label: { fr: "Produits", en: "Products" } },
  { href: "/projects", label: { fr: "Projets", en: "Projects" } },
  { href: "/about", label: { fr: "À propos", en: "About" } },
  { href: "/contact", label: { fr: "Contact", en: "Contact" } },
];

export const footerCompanyNav: NavLink[] = [
  { href: "/about", label: { fr: "À propos", en: "About" } },
  { href: "/projects", label: { fr: "Projets", en: "Projects" } },
  { href: "/contact", label: { fr: "Contact", en: "Contact" } },
  { href: "/quote", label: { fr: "Demander un devis", en: "Request a quote" } },
];
