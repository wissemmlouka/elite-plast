import type { GalleryItem } from "./types";

/**
 * DEMO CONTENT — gallery.
 *
 * `src` is empty on every entry, which makes the tile render as a labelled
 * placeholder rather than a broken image. Drop a real file into `/public` and
 * set its path here — nothing else changes.
 */

export const gallery: GalleryItem[] = [
  {
    id: "drip-olive",
    src: "",
    alt: {
      fr: "Lignes de goutte-à-goutte dans une oliveraie",
      en: "Drip lines in an olive grove",
    },
  },
  {
    id: "production-pehd",
    src: "",
    alt: {
      fr: "Ligne de production de tuyaux PEHD",
      en: "HDPE pipe production line",
    },
  },
  {
    id: "sprinkler-field",
    src: "",
    alt: {
      fr: "Asperseurs arrosant un champ verdoyant",
      en: "Sprinklers watering a green field",
    },
  },
  {
    id: "pvc-coils",
    src: "",
    alt: {
      fr: "Rouleaux de tuyau d'irrigation en PVC",
      en: "Coils of PVC irrigation pipe",
    },
  },
  {
    id: "fittings-install",
    src: "",
    alt: {
      fr: "Technicien installant des raccords d'irrigation",
      en: "Technician fitting irrigation connectors",
    },
  },
  {
    id: "aerial-farm",
    src: "",
    alt: {
      fr: "Vue aérienne d'une exploitation irriguée",
      en: "Aerial view of an irrigated farm",
    },
  },
];
