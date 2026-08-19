import type { LucideIcon } from "lucide-react";

import type { Locale } from "@/i18n/routing";

/**
 * Shapes for the demo content layer.
 *
 * Everything under `src/data` is DEMO CONTENT standing in for real Eline Plast
 * information. Components never hardcode business copy: they take these records
 * as props, so when the client supplies the real data only these files change.
 *
 * Localised fields carry every locale in one record, which keeps a product or a
 * project as a single unit of content rather than something split across
 * translation files.
 */

export type Localized<T> = Record<Locale, T>;

/** Reads the current locale out of a localised field. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: Localized<string>;
}

export interface Benefit {
  id: string;
  icon: LucideIcon;
  title: Localized<string>;
  description: Localized<string>;
}

export interface ProductCategory {
  id: string;
  name: Localized<string>;
}

export interface Spec {
  label: Localized<string>;
  value: Localized<string>;
}

export interface Product {
  slug: string;
  categoryId: string;
  icon: LucideIcon;
  name: Localized<string>;
  /** One line, used on cards and in listings. */
  summary: Localized<string>;
  /** Full description, one entry per paragraph. */
  description: Localized<string[]>;
  applications: Localized<string[]>;
  advantages: Localized<string[]>;
  specifications: Spec[];
  /** Empty until real photography is supplied; renders a labelled placeholder. */
  image: string;
  imageAlt: Localized<string>;
}

export interface ProjectResult {
  label: Localized<string>;
  value: Localized<string>;
}

export interface Project {
  slug: string;
  year: number;
  title: Localized<string>;
  location: Localized<string>;
  crop: Localized<string>;
  surface: Localized<string>;
  solution: Localized<string>;
  summary: Localized<string>;
  description: Localized<string[]>;
  results: ProjectResult[];
  gallery: GalleryItem[];
  image: string;
  imageAlt: Localized<string>;
  /** Products used, by slug — drives the cross-links on the detail page. */
  productSlugs: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  /** Empty until real photography is supplied. */
  src: string;
  alt: Localized<string>;
}

export interface Testimonial {
  id: string;
  quote: Localized<string>;
  /** Role, never an invented person. */
  author: Localized<string>;
  location: Localized<string>;
}

export interface NavItem {
  /** Internal pathname; next-intl maps it to the localised URL. */
  href: string;
  label: Localized<string>;
}

export interface Value {
  id: string;
  icon: LucideIcon;
  title: Localized<string>;
  description: Localized<string>;
}
