import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Shared domain types. Content lives in `src/content/*` and is typed against
 * these shapes so sections stay dumb assemblers and copy/data can be swapped
 * later without touching markup.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Lucide icon or a custom brand SVG component. */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tag?: string;
  href?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatar?: string;
  /** Flags unverified placeholder copy so it is never mistaken for real. */
  placeholder?: boolean;
}
