import {
  CloudRain,
  Cylinder,
  Droplets,
  Gauge,
  Headset,
  ShieldCheck,
  Sprout,
  Waypoints,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Icons stay in code (they can't live in translation JSON). The order matches
 * the `products.items` / `why.items` arrays in the message files.
 */
export const productIcons: LucideIcon[] = [
  Droplets, // drip-irrigation
  CloudRain, // sprinkler-systems
  Cylinder, // pehd-pipes
  Waypoints, // pvc-pipes
  Wrench, // fittings-accessories
  Gauge, // water-management
];

export const featureIcons: LucideIcon[] = [
  ShieldCheck, // reliability
  Sprout, // efficiency
  Headset, // support
];
