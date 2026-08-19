import type { Testimonial } from "./types";

/**
 * DEMO CONTENT — customer quotes.
 *
 * Written as illustrations of the kind of feedback the site will carry. No real
 * person is named and no company is identified: authors are roles and regions
 * only. The UI tags each card as a demo quote.
 */

export const testimonials: Testimonial[] = [
  {
    id: "olive-grower",
    quote: {
      fr: "Le passage au goutte-à-goutte a changé notre façon de piloter la campagne. On irrigue secteur par secteur, on sait ce qu'on consomme, et la parcelle est enfin homogène d'un bout à l'autre.",
      en: "Moving to drip changed how we run the season. We irrigate sector by sector, we know what we use, and the plot is finally even from end to end.",
    },
    author: { fr: "Exploitant agricole", en: "Farm operator" },
    location: { fr: "Oléiculture — Tunisie", en: "Olive growing — Tunisia" },
  },
  {
    id: "distributor",
    quote: {
      fr: "Ce qui compte pour nous, c'est la disponibilité en pleine saison. Les références courantes suivent, et quand il faut un diamètre particulier on l'obtient sans attendre un conteneur.",
      en: "What matters to us is availability at the height of the season. The common references keep up, and when a specific diameter is needed we get it without waiting on a container.",
    },
    author: { fr: "Distributeur agricole", en: "Agricultural distributor" },
    location: { fr: "Distribution — Tunisie", en: "Distribution — Tunisia" },
  },
  {
    id: "vineyard",
    quote: {
      fr: "Nous avions surtout besoin d'être aidés sur le dimensionnement. Le réseau a été calculé avec nous avant la commande, et il tient depuis trois saisons.",
      en: "What we mainly needed was help with sizing. The network was worked out with us before the order, and it has held for three seasons.",
    },
    author: {
      fr: "Professionnel de l'agriculture",
      en: "Agriculture professional",
    },
    location: { fr: "Viticulture — Tunisie", en: "Viticulture — Tunisia" },
  },
];
