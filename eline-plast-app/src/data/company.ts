import {
  Factory,
  Handshake,
  Leaf,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import type { Localized, Value } from "./types";

/**
 * DEMO CONTENT — company profile.
 *
 * Placeholder information standing in for real Eline Plast details. Contact
 * data below is deliberately generic; replace it before the site goes live.
 * No certification, standard or export figure is claimed anywhere here,
 * because none has been verified.
 */

export const company = {
  name: "Eline Plast",
  country: "Tunisie",
  foundedYear: 2005,

  tagline: {
    fr: "Fabricant de solutions d'irrigation",
    en: "Irrigation solutions manufacturer",
  } satisfies Localized<string>,

  summary: {
    fr: "Eline Plast conçoit et fabrique des tuyaux, des lignes de goutte-à-goutte et des raccords pour l'irrigation agricole et l'aménagement paysager.",
    en: "Eline Plast designs and manufactures pipes, drip lines and fittings for agricultural irrigation and landscaping.",
  } satisfies Localized<string>,

  intro: {
    fr: [
      "Eline Plast est un fabricant tunisien de solutions d'irrigation. Nous produisons des tuyaux PEHD et PVC, des lignes de goutte-à-goutte, des raccords et des accessoires destinés aux exploitations agricoles, aux paysagistes et aux distributeurs.",
      "Notre métier consiste à transformer une ressource rare — l'eau — en rendement. Cela commence par la matière, se poursuit par la précision de la fabrication et se termine sur le terrain, là où un réseau doit tenir saison après saison.",
      "Nous travaillons avec les exploitants et les revendeurs pour dimensionner des réseaux adaptés à la culture, au sol et à la pression disponible, puis nous les accompagnons pendant l'installation et l'exploitation.",
    ],
    en: [
      "Eline Plast is a Tunisian manufacturer of irrigation solutions. We produce HDPE and PVC pipes, drip lines, fittings and accessories for farms, landscapers and distributors.",
      "Our business is turning a scarce resource — water — into yield. That starts with the material, continues through manufacturing precision, and ends in the field, where a network has to hold season after season.",
      "We work with growers and resellers to size networks around the crop, the soil and the available pressure, then support them through installation and operation.",
    ],
  } satisfies Localized<string[]>,

  mission: {
    fr: "Rendre l'irrigation efficace accessible à chaque exploitation, avec des produits fabriqués localement, dimensionnés correctement et conçus pour durer.",
    en: "Make efficient irrigation reachable for every farm, with products manufactured locally, sized correctly and built to last.",
  } satisfies Localized<string>,

  manufacturing: {
    fr: [
      "Notre production couvre l'extrusion des tuyaux, l'assemblage des lignes de goutte-à-goutte et le conditionnement des raccords.",
      "Chaque lot est contrôlé avant expédition : diamètre, épaisseur de paroi, tenue en pression et régularité du débit aux goutteurs.",
      "Produire en Tunisie raccourcit les délais, simplifie le réapprovisionnement en saison et permet de répondre à des besoins spécifiques sans passer par l'import.",
    ],
    en: [
      "Our production covers pipe extrusion, drip line assembly and fitting packaging.",
      "Every batch is checked before shipping: diameter, wall thickness, pressure resistance and emitter flow consistency.",
      "Manufacturing in Tunisia shortens lead times, simplifies in-season restocking and lets us answer specific requirements without importing.",
    ],
  } satisfies Localized<string[]>,

  /** Deliberately generic — replace with the real details. */
  contact: {
    phone: "+216 00 000 000",
    email: "contact@elineplast.tn",
    address: {
      fr: "Zone Industrielle, Tunisie",
      en: "Industrial Zone, Tunisia",
    } satisfies Localized<string>,
    hours: {
      fr: "Lundi – Vendredi, 8h00 – 17h00",
      en: "Monday – Friday, 8:00 – 17:00",
    } satisfies Localized<string>,
  },

  socials: [
    { id: "facebook", href: "#" },
    { id: "instagram", href: "#" },
    { id: "linkedin", href: "#" },
  ],
};

export const values: Value[] = [
  {
    id: "manufacturing",
    icon: Factory,
    title: { fr: "Fabrication intégrée", en: "Integrated manufacturing" },
    description: {
      fr: "Nous maîtrisons la chaîne, de la matière première au produit fini, ce qui nous permet de répondre vite et de garder la main sur la qualité.",
      en: "We control the chain from raw material to finished product, which lets us respond quickly and keep quality in our own hands.",
    },
  },
  {
    id: "reliability",
    icon: ShieldCheck,
    title: { fr: "Fiabilité sur le terrain", en: "Reliability in the field" },
    description: {
      fr: "Un réseau d'irrigation travaille sous pression, au soleil, pendant des années. Nos produits sont pensés pour cette réalité, pas pour une fiche technique.",
      en: "An irrigation network works under pressure, in the sun, for years. Our products are built for that reality, not for a datasheet.",
    },
  },
  {
    id: "water",
    icon: Leaf,
    title: { fr: "Économie d'eau", en: "Water efficiency" },
    description: {
      fr: "Chaque solution vise le même résultat : porter l'eau à la racine, au bon débit, sans perte entre la source et la culture.",
      en: "Every solution aims at the same result: water at the root, at the right flow, with nothing lost between source and crop.",
    },
  },
  {
    id: "support",
    icon: Handshake,
    title: { fr: "Accompagnement", en: "Support" },
    description: {
      fr: "Nous aidons au dimensionnement avant la commande et restons joignables après l'installation, pendant la saison.",
      en: "We help with sizing before the order and stay reachable after installation, through the season.",
    },
  },
];

export const expertise: Value[] = [
  {
    id: "sizing",
    icon: Target,
    title: { fr: "Dimensionnement", en: "Network sizing" },
    description: {
      fr: "Débit, pression, longueur de rampe et espacement des goutteurs, calculés à partir de la culture, du sol et de la topographie de la parcelle.",
      en: "Flow, pressure, lateral length and emitter spacing, worked out from the crop, the soil and the plot's topography.",
    },
  },
  {
    id: "production",
    icon: Factory,
    title: { fr: "Production", en: "Production" },
    description: {
      fr: "Extrusion de tuyaux PEHD et PVC, assemblage des lignes de goutte-à-goutte, préparation des raccords et accessoires.",
      en: "HDPE and PVC pipe extrusion, drip line assembly, preparation of fittings and accessories.",
    },
  },
  {
    id: "network",
    icon: Users,
    title: { fr: "Distribution", en: "Distribution" },
    description: {
      fr: "Un réseau de revendeurs partout en Tunisie, approvisionné en saison pour éviter les ruptures au moment où le besoin est le plus fort.",
      en: "A reseller network across Tunisia, restocked in season so nothing runs out when demand peaks.",
    },
  },
];
