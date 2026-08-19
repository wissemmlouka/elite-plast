import type { Stat } from "./types";

/**
 * DEMO CONTENT — key figures.
 *
 * These are placeholder values chosen to look plausible for a manufacturer of
 * this size. They are NOT verified Eline Plast figures and the UI labels them
 * as demo data. Replace the numbers here and the label disappears with them.
 */

export const statistics: Stat[] = [
  {
    id: "experience",
    value: 20,
    suffix: "+",
    label: { fr: "Années d'expérience", en: "Years of experience" },
  },
  {
    id: "projects",
    value: 500,
    suffix: "+",
    label: { fr: "Projets réalisés", en: "Projects delivered" },
  },
  {
    id: "clients",
    value: 1000,
    suffix: "+",
    label: { fr: "Clients accompagnés", en: "Customers served" },
  },
  {
    id: "references",
    value: 50,
    suffix: "+",
    label: { fr: "Références produits", en: "Product references" },
  },
];
