import { Droplet, Factory, Headset, ShieldCheck, Sprout } from "lucide-react";

import type { Benefit } from "./types";

/**
 * DEMO CONTENT — why Eline Plast.
 *
 * Positioning statements, not measured claims. Nothing here asserts a figure,
 * a certification or a standard.
 */

export const benefits: Benefit[] = [
  {
    id: "manufacturing",
    icon: Factory,
    title: { fr: "Fabrication locale", en: "Local manufacturing" },
    description: {
      fr: "Nos tuyaux et lignes de goutte-à-goutte sortent de notre propre production en Tunisie. Délais courts, réapprovisionnement rapide en pleine saison.",
      en: "Our pipes and drip lines come out of our own production in Tunisia. Short lead times, quick restocking at the height of the season.",
    },
  },
  {
    id: "reliability",
    icon: ShieldCheck,
    title: { fr: "Fiabilité", en: "Reliability" },
    description: {
      fr: "Diamètre, épaisseur de paroi et tenue en pression contrôlés lot par lot, parce qu'une réparation en pleine campagne coûte plus cher que le tuyau.",
      en: "Diameter, wall thickness and pressure resistance checked batch by batch, because a repair mid-season costs more than the pipe.",
    },
  },
  {
    id: "performance",
    icon: Droplet,
    title: { fr: "Performance hydraulique", en: "Hydraulic performance" },
    description: {
      fr: "Un débit régulier du premier au dernier goutteur de la rampe : c'est ce qui rend une parcelle homogène.",
      en: "Steady flow from the first emitter to the last one on the lateral: that is what makes a plot uniform.",
    },
  },
  {
    id: "water",
    icon: Sprout,
    title: { fr: "Économie d'eau", en: "Water savings" },
    description: {
      fr: "Porter l'eau directement à la racine réduit l'évaporation et le ruissellement, et laisse l'inter-rang sec.",
      en: "Delivering water straight to the root cuts evaporation and runoff, and leaves the inter-row dry.",
    },
  },
  {
    id: "support",
    icon: Headset,
    title: { fr: "Accompagnement", en: "Support" },
    description: {
      fr: "Nous dimensionnons le réseau avec vous avant la commande, et restons joignables pendant l'installation et la saison.",
      en: "We size the network with you before the order, and stay reachable through installation and the season.",
    },
  },
];
