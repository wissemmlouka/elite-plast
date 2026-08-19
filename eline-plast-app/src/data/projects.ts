import type { Project } from "./types";

/**
 * DEMO CONTENT — reference projects.
 *
 * Four illustrative installations. Locations, surfaces and results are
 * placeholders written to show what a real case study will look like; the UI
 * marks every figure as demo data. No named client is used anywhere.
 */

export const projects: Project[] = [
  {
    slug: "oliveraie-sfax",
    year: 2024,
    featured: true,
    image: "",
    imageAlt: {
      fr: "Rangs d'oliviers équipés de lignes de goutte-à-goutte",
      en: "Rows of olive trees fitted with drip lines",
    },
    title: {
      fr: "Goutte-à-goutte sur oliveraie de 40 hectares",
      en: "Drip irrigation across a 40-hectare olive grove",
    },
    location: { fr: "Région de Sfax", en: "Sfax region" },
    crop: { fr: "Oliviers", en: "Olive trees" },
    surface: { fr: "40 hectares", en: "40 hectares" },
    solution: {
      fr: "Réseau PEHD enterré et lignes de goutte-à-goutte",
      en: "Buried HDPE network and drip lines",
    },
    summary: {
      fr: "Un réseau complet, du forage jusqu'au dernier rang, dimensionné pour irriguer la parcelle en quatre secteurs successifs.",
      en: "A complete network, from the borehole to the last row, sized to irrigate the plot in four successive sectors.",
    },
    description: {
      fr: [
        "L'exploitation irriguait jusque-là par submersion, avec des apports irréguliers d'un bout à l'autre de la parcelle et une consommation difficile à maîtriser.",
        "Le réseau a été redessiné autour d'une conduite principale PEHD enterrée, alimentant quatre secteurs vannés indépendamment. Chaque rang reçoit une ligne de goutte-à-goutte avec des goutteurs espacés selon l'âge des arbres.",
        "La sectorisation permet d'irriguer avec la pression disponible au forage sans installer de surpresseur, en faisant tourner les secteurs plutôt qu'en alimentant toute la surface simultanément.",
      ],
      en: [
        "The farm had been flood-irrigating, with uneven delivery from one end of the plot to the other and consumption that was hard to control.",
        "The network was redrawn around a buried HDPE main feeding four independently valved sectors. Each row carries a drip line with emitter spacing set by tree age.",
        "Sectoring makes it possible to irrigate on the pressure available at the borehole without a booster pump, by rotating through sectors rather than feeding the whole area at once.",
      ],
    },
    results: [
      {
        label: { fr: "Eau économisée", en: "Water saved" },
        value: { fr: "≈ 35 %", en: "≈ 35%" },
      },
      {
        label: { fr: "Secteurs indépendants", en: "Independent sectors" },
        value: { fr: "4", en: "4" },
      },
      {
        label: { fr: "Mise en service", en: "Commissioning" },
        value: { fr: "6 semaines", en: "6 weeks" },
      },
    ],
    gallery: [
      {
        id: "oliveraie-1",
        src: "",
        alt: {
          fr: "Conduite principale PEHD en tranchée",
          en: "HDPE main in the trench",
        },
      },
      {
        id: "oliveraie-2",
        src: "",
        alt: {
          fr: "Poste de vannage en tête de secteur",
          en: "Valve station at the head of a sector",
        },
      },
      {
        id: "oliveraie-3",
        src: "",
        alt: {
          fr: "Goutteur en service au pied d'un olivier",
          en: "Emitter running at the foot of an olive tree",
        },
      },
    ],
    productSlugs: ["drip-irrigation", "pehd-pipes", "water-management"],
  },
  {
    slug: "maraichage-cap-bon",
    year: 2024,
    image: "",
    imageAlt: {
      fr: "Serres maraîchères équipées de rampes d'irrigation",
      en: "Vegetable greenhouses fitted with irrigation laterals",
    },
    title: {
      fr: "Maraîchage sous serre : fertirrigation sur 6 hectares",
      en: "Greenhouse vegetables: fertigation across 6 hectares",
    },
    location: { fr: "Cap Bon", en: "Cap Bon" },
    crop: { fr: "Tomate et poivron", en: "Tomato and pepper" },
    surface: { fr: "6 hectares sous abri", en: "6 hectares under cover" },
    solution: {
      fr: "Lignes de goutte-à-goutte et tête de fertirrigation",
      en: "Drip lines and a fertigation head",
    },
    summary: {
      fr: "Un réseau court mais dense, où la régularité du débit entre le premier et le dernier goutteur conditionne l'homogénéité de la récolte.",
      en: "A short but dense network, where flow consistency between the first and last emitter drives how even the harvest is.",
    },
    description: {
      fr: [
        "Sous abri, l'irrigation et la fertilisation passent par le même réseau. La moindre irrégularité de débit se lit directement sur le calibre des fruits en fin de rang.",
        "Les rampes ont été raccourcies et alimentées par les deux extrémités, ce qui divise la perte de charge et resserre l'écart de débit sur toute la longueur.",
        "La tête de réseau associe filtration à disques, régulation de pression et injection d'engrais, avec une purge en bout de rampe pour l'entretien de saison.",
      ],
      en: [
        "Under cover, irrigation and fertilisation share the same network. Any flow irregularity shows up directly in fruit size at the end of the row.",
        "Laterals were shortened and fed from both ends, which halves pressure loss and tightens the flow gap along their length.",
        "The network head combines disc filtration, pressure regulation and fertiliser injection, with an end-of-lateral flush for seasonal maintenance.",
      ],
    },
    results: [
      {
        label: { fr: "Écart de débit sur rampe", en: "Flow variation per lateral" },
        value: { fr: "< 10 %", en: "< 10%" },
      },
      { label: { fr: "Secteurs", en: "Sectors" }, value: { fr: "8", en: "8" } },
      {
        label: { fr: "Fertirrigation", en: "Fertigation" },
        value: { fr: "100 %", en: "100%" },
      },
    ],
    gallery: [
      {
        id: "maraichage-1",
        src: "",
        alt: {
          fr: "Rampes de goutte-à-goutte entre deux rangs sous serre",
          en: "Drip laterals between two greenhouse rows",
        },
      },
      {
        id: "maraichage-2",
        src: "",
        alt: {
          fr: "Poste de filtration à disques",
          en: "Disc filtration station",
        },
      },
    ],
    productSlugs: ["drip-irrigation", "water-management", "fittings-accessories"],
  },
  {
    slug: "vignoble-kairouan",
    year: 2023,
    image: "",
    imageAlt: {
      fr: "Vignes palissées avec ligne d'irrigation au sol",
      en: "Trellised vines with an irrigation line on the ground",
    },
    title: {
      fr: "Vignoble de 18 hectares : passage au goutte-à-goutte",
      en: "18-hectare vineyard: switching to drip",
    },
    location: { fr: "Région de Kairouan", en: "Kairouan region" },
    crop: { fr: "Vigne de cuve", en: "Wine grapes" },
    surface: { fr: "18 hectares", en: "18 hectares" },
    solution: {
      fr: "Lignes suspendues au fil porteur et réseau PVC",
      en: "Lines hung from the trellis wire and a PVC network",
    },
    summary: {
      fr: "Une installation pensée pour la mécanisation : ligne suspendue, inter-rang libre pour les passages d'engins.",
      en: "An installation built around mechanisation: line hung above ground, inter-row clear for machinery.",
    },
    description: {
      fr: [
        "Sur vigne palissée, poser la rampe au sol expose la ligne aux outils de travail du sol et aux passages de tracteur.",
        "La ligne a été suspendue au premier fil porteur, ce qui la met hors d'atteinte des machines et facilite le contrôle visuel des goutteurs pendant la saison.",
        "Le réseau structurant est en PVC enterré, avec des colonnes montantes en bout de rang et des vannes de sectorisation accessibles depuis les tournières.",
      ],
      en: [
        "On trellised vines, laying the lateral on the ground exposes it to tillage tools and tractor passes.",
        "The line was hung from the first trellis wire, which puts it out of reach of machinery and makes visual emitter checks easier during the season.",
        "The backbone is buried PVC, with risers at the row ends and sectoring valves reachable from the headlands.",
      ],
    },
    results: [
      {
        label: { fr: "Rangs équipés", en: "Rows equipped" },
        value: { fr: "≈ 220", en: "≈ 220" },
      },
      { label: { fr: "Secteurs", en: "Sectors" }, value: { fr: "3", en: "3" } },
      {
        label: { fr: "Inter-rang", en: "Inter-row" },
        value: { fr: "Libre", en: "Clear" },
      },
    ],
    gallery: [
      {
        id: "vignoble-1",
        src: "",
        alt: {
          fr: "Ligne d'irrigation fixée au fil porteur",
          en: "Irrigation line clipped to the trellis wire",
        },
      },
      {
        id: "vignoble-2",
        src: "",
        alt: {
          fr: "Colonne montante PVC en bout de rang",
          en: "PVC riser at the end of a row",
        },
      },
    ],
    productSlugs: ["drip-irrigation", "pvc-pipes", "fittings-accessories"],
  },
  {
    slug: "arboriculture-beja",
    year: 2023,
    image: "",
    imageAlt: {
      fr: "Verger irrigué par micro-aspersion",
      en: "Orchard irrigated by micro-sprinkler",
    },
    title: {
      fr: "Verger de 25 hectares : réseau d'aspersion sectorisé",
      en: "25-hectare orchard: sectored sprinkler network",
    },
    location: { fr: "Région de Béja", en: "Béja region" },
    crop: { fr: "Arboriculture fruitière", en: "Fruit orchard" },
    surface: { fr: "25 hectares", en: "25 hectares" },
    solution: {
      fr: "Aspersion et conduite principale PEHD",
      en: "Sprinkler system and HDPE main",
    },
    summary: {
      fr: "Un réseau d'aspersion qui sert autant à l'irrigation qu'à la protection contre le gel de printemps.",
      en: "A sprinkler network serving both irrigation and spring frost protection.",
    },
    description: {
      fr: [
        "Le verger avait besoin d'une couverture complète, pour l'irrigation d'été comme pour la protection antigel au débourrement.",
        "L'espacement des asperseurs a été calculé pour garantir un recouvrement suffisant à la pression disponible, sans zone sèche entre deux postes.",
        "La conduite principale en PEHD alimente cinq secteurs, dimensionnés pour qu'un seul fonctionne à la fois en irrigation et que plusieurs puissent être ouverts simultanément en épisode de gel.",
      ],
      en: [
        "The orchard needed full coverage, for summer irrigation as much as for frost protection at bud break.",
        "Sprinkler spacing was calculated to guarantee sufficient overlap at the available pressure, with no dry patch between two positions.",
        "The HDPE main feeds five sectors, sized so one runs at a time for irrigation while several can be opened together during a frost event.",
      ],
    },
    results: [
      { label: { fr: "Secteurs", en: "Sectors" }, value: { fr: "5", en: "5" } },
      {
        label: { fr: "Recouvrement", en: "Overlap" },
        value: { fr: "≈ 100 %", en: "≈ 100%" },
      },
      {
        label: { fr: "Usage", en: "Use" },
        value: { fr: "Irrigation + antigel", en: "Irrigation + frost" },
      },
    ],
    gallery: [
      {
        id: "verger-1",
        src: "",
        alt: {
          fr: "Asperseur en fonctionnement dans le verger",
          en: "Sprinkler running in the orchard",
        },
      },
      {
        id: "verger-2",
        src: "",
        alt: {
          fr: "Tranchée d'adduction PEHD",
          en: "HDPE supply trench",
        },
      },
    ],
    productSlugs: ["sprinkler-systems", "pehd-pipes", "water-management"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
