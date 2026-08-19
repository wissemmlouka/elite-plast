import { CloudRain, Cylinder, Droplets, Gauge, Waypoints, Wrench } from "lucide-react";

import type { Product, ProductCategory } from "./types";

/**
 * DEMO CONTENT — product catalogue.
 *
 * Six placeholder references covering the range Eline Plast actually sells.
 * Descriptions are written to be plausible and useful, not to assert anything
 * verified: no certification, norm or approval is claimed, and the technical
 * values are indicative ranges the client will replace with real datasheets.
 */

export const productCategories: ProductCategory[] = [
  { id: "irrigation", name: { fr: "Irrigation", en: "Irrigation" } },
  { id: "pipes", name: { fr: "Canalisations", en: "Pipes" } },
  { id: "fittings", name: { fr: "Raccordement", en: "Connection" } },
  { id: "management", name: { fr: "Gestion de l'eau", en: "Water management" } },
];

export const products: Product[] = [
  {
    slug: "drip-irrigation",
    categoryId: "irrigation",
    icon: Droplets,
    image: "",
    imageAlt: {
      fr: "Ligne de goutte-à-goutte déroulée le long d'un rang de culture",
      en: "Drip line running along a crop row",
    },
    name: { fr: "Irrigation goutte-à-goutte", en: "Drip irrigation" },
    summary: {
      fr: "Des lignes qui délivrent l'eau directement au pied de la plante, goutte par goutte.",
      en: "Lines that deliver water straight to the base of the plant, drop by drop.",
    },
    description: {
      fr: [
        "La ligne de goutte-à-goutte est la solution la plus économe en eau pour les cultures en rang. L'eau arrive à la racine à faible débit, sans ruissellement ni évaporation entre les plants.",
        "L'espacement des goutteurs et le débit se choisissent en fonction de la culture et du type de sol : plus rapproché sur sol sableux, plus espacé sur sol argileux qui diffuse latéralement.",
        "Nos lignes sont assemblées dans notre unité de production, avec un contrôle du débit sur chaque lot pour garantir la régularité d'un bout à l'autre de la rampe.",
      ],
      en: [
        "Drip line is the most water-efficient solution for row crops. Water reaches the root at low flow, with no runoff and no evaporation between plants.",
        "Emitter spacing and flow rate are chosen around the crop and the soil type: closer together on sandy soil, further apart on clay that spreads water sideways.",
        "Our lines are assembled in our own production unit, with flow checked on every batch so output stays even from one end of the lateral to the other.",
      ],
    },
    applications: {
      fr: [
        "Maraîchage de plein champ et sous serre",
        "Arboriculture et oliviers",
        "Vignoble",
        "Cultures sous paillage plastique",
      ],
      en: [
        "Open-field and greenhouse vegetables",
        "Orchards and olive groves",
        "Vineyards",
        "Crops under plastic mulch",
      ],
    },
    advantages: {
      fr: [
        "Consommation d'eau réduite par rapport à l'aspersion",
        "Inter-rang sec : moins d'adventices et de maladies foliaires",
        "Fertirrigation possible sur le même réseau",
        "Fonctionne à basse pression",
      ],
      en: [
        "Lower water use than sprinkler irrigation",
        "Dry inter-row: fewer weeds and leaf diseases",
        "Fertigation possible on the same network",
        "Works at low pressure",
      ],
    },
    specifications: [
      {
        label: { fr: "Diamètres", en: "Diameters" },
        value: { fr: "16 et 20 mm", en: "16 and 20 mm" },
      },
      {
        label: { fr: "Espacement des goutteurs", en: "Emitter spacing" },
        value: { fr: "20 à 100 cm", en: "20 to 100 cm" },
      },
      {
        label: { fr: "Débit par goutteur", en: "Flow per emitter" },
        value: { fr: "2 à 8 l/h", en: "2 to 8 l/h" },
      },
      {
        label: { fr: "Conditionnement", en: "Packaging" },
        value: { fr: "Couronnes", en: "Coils" },
      },
    ],
  },
  {
    slug: "sprinkler-systems",
    categoryId: "irrigation",
    icon: CloudRain,
    image: "",
    imageAlt: {
      fr: "Asperseur en fonctionnement au-dessus d'une parcelle",
      en: "Sprinkler running over a field",
    },
    name: { fr: "Systèmes d'aspersion", en: "Sprinkler systems" },
    summary: {
      fr: "Une couverture uniforme pour les cultures denses, les fourrages et les espaces verts.",
      en: "Even coverage for dense crops, forage and green spaces.",
    },
    description: {
      fr: [
        "L'aspersion reste la solution adaptée aux cultures couvrantes et aux surfaces enherbées, là où l'eau doit être répartie sur toute la parcelle plutôt qu'au pied de chaque plant.",
        "Le choix de la buse et l'espacement entre asperseurs déterminent l'uniformité : un recouvrement insuffisant crée des zones sèches, un recouvrement excessif gaspille de l'eau.",
        "Nous fournissons les asperseurs, les portes-asperseurs et les canalisations qui les alimentent, dimensionnés ensemble pour que la pression tienne jusqu'au dernier poste.",
      ],
      en: [
        "Sprinkler irrigation remains the right answer for cover crops and grassed areas, where water has to reach the whole plot rather than the base of each plant.",
        "Nozzle choice and spacing between sprinklers decide uniformity: too little overlap leaves dry patches, too much wastes water.",
        "We supply the sprinklers, the risers and the pipework that feeds them, sized together so pressure holds all the way to the last position.",
      ],
    },
    applications: {
      fr: [
        "Céréales et fourrages",
        "Pépinières et gazon",
        "Espaces verts et terrains de sport",
        "Protection contre le gel",
      ],
      en: [
        "Cereals and forage",
        "Nurseries and turf",
        "Green spaces and sports fields",
        "Frost protection",
      ],
    },
    advantages: {
      fr: [
        "Couverture homogène sur grandes surfaces",
        "Installation et déplacement rapides",
        "Adapté aux cultures couvrantes",
        "Entretien simple",
      ],
      en: [
        "Even coverage over large areas",
        "Fast to install and move",
        "Suited to cover crops",
        "Simple maintenance",
      ],
    },
    specifications: [
      {
        label: { fr: "Portée", en: "Throw radius" },
        value: { fr: "8 à 16 m selon buse", en: "8 to 16 m depending on nozzle" },
      },
      {
        label: { fr: "Pression de service", en: "Operating pressure" },
        value: { fr: "2 à 4 bar", en: "2 to 4 bar" },
      },
      {
        label: { fr: "Raccordement", en: "Connection" },
        value: { fr: "Filetage standard", en: "Standard thread" },
      },
      {
        label: { fr: "Matériau", en: "Material" },
        value: { fr: "Polymère technique", en: "Engineering polymer" },
      },
    ],
  },
  {
    slug: "pehd-pipes",
    categoryId: "pipes",
    icon: Cylinder,
    image: "",
    imageAlt: {
      fr: "Couronnes de tuyau PEHD noir prêtes à l'expédition",
      en: "Coils of black HDPE pipe ready for shipping",
    },
    name: { fr: "Tuyaux PEHD", en: "HDPE pipes" },
    summary: {
      fr: "La canalisation souple qui porte l'eau de la source jusqu'aux rampes.",
      en: "The flexible main that carries water from the source to the laterals.",
    },
    description: {
      fr: [
        "Le polyéthylène haute densité est la canalisation de référence pour les réseaux d'irrigation enterrés : souple, résistant aux chocs et insensible à la corrosion.",
        "Livré en couronnes, il se déroule le long de la parcelle avec très peu de raccords, ce qui réduit d'autant les points de fuite potentiels.",
        "Le diamètre se choisit en fonction du débit à transporter et de la longueur du réseau, pour limiter la perte de charge entre la pompe et le dernier poste d'arrosage.",
      ],
      en: [
        "High-density polyethylene is the standard main for buried irrigation networks: flexible, impact-resistant and immune to corrosion.",
        "Supplied in coils, it unrolls along the plot with very few joints, which cuts the number of potential leak points accordingly.",
        "Diameter is chosen from the flow to be carried and the length of the network, to limit pressure loss between the pump and the last outlet.",
      ],
    },
    applications: {
      fr: [
        "Réseaux d'irrigation enterrés",
        "Adduction depuis forage ou bassin",
        "Alimentation de rampes de goutte-à-goutte",
        "Réseaux d'aspersion",
      ],
      en: [
        "Buried irrigation networks",
        "Supply from borehole or reservoir",
        "Feeding drip laterals",
        "Sprinkler networks",
      ],
    },
    advantages: {
      fr: [
        "Souple : suit le relief sans raccord supplémentaire",
        "Insensible à la corrosion",
        "Longue durée de vie en enterré",
        "Assemblage par raccords mécaniques ou soudure",
      ],
      en: [
        "Flexible: follows the terrain without extra fittings",
        "Immune to corrosion",
        "Long service life underground",
        "Joined with mechanical fittings or by welding",
      ],
    },
    specifications: [
      {
        label: { fr: "Diamètres", en: "Diameters" },
        value: { fr: "20 à 160 mm", en: "20 to 160 mm" },
      },
      {
        label: { fr: "Pressions nominales", en: "Nominal pressures" },
        value: { fr: "PN 6 à PN 16", en: "PN 6 to PN 16" },
      },
      {
        label: { fr: "Conditionnement", en: "Packaging" },
        value: { fr: "Couronnes et barres", en: "Coils and bars" },
      },
      {
        label: { fr: "Couleur", en: "Colour" },
        value: { fr: "Noir, bande bleue", en: "Black, blue stripe" },
      },
    ],
  },
  {
    slug: "pvc-pipes",
    categoryId: "pipes",
    icon: Waypoints,
    image: "",
    imageAlt: {
      fr: "Barres de tuyau PVC stockées en atelier",
      en: "PVC pipe bars stored in the workshop",
    },
    name: { fr: "Tuyaux PVC", en: "PVC pipes" },
    summary: {
      fr: "La canalisation rigide pour les réseaux structurants et les colonnes.",
      en: "The rigid pipe for backbone networks and risers.",
    },
    description: {
      fr: [
        "Le PVC rigide est utilisé sur les tronçons droits d'un réseau, les colonnes montantes et les regards, là où la rigidité facilite le montage et la tenue dans le temps.",
        "Il s'assemble par collage ou par joint, avec une gamme de raccords complète : coudes, tés, réductions, manchons.",
        "Sur un réseau enterré, il est courant de combiner le PVC pour la structure et le PEHD pour les antennes qui suivent le relief.",
      ],
      en: [
        "Rigid PVC is used on the straight runs of a network, on risers and at inspection points, where rigidity makes assembly and long-term stability easier.",
        "It is joined by solvent welding or with gaskets, backed by a full range of fittings: elbows, tees, reducers, sleeves.",
        "On a buried network it is common to combine PVC for the structure with HDPE for the branches that follow the terrain.",
      ],
    },
    applications: {
      fr: [
        "Réseaux d'irrigation structurants",
        "Colonnes montantes et regards",
        "Adduction et distribution",
        "Réseaux industriels et bâtiment",
      ],
      en: [
        "Backbone irrigation networks",
        "Risers and inspection chambers",
        "Supply and distribution",
        "Industrial and building networks",
      ],
    },
    advantages: {
      fr: [
        "Rigide : tracés droits et propres",
        "Assemblage rapide par collage",
        "Gamme de raccords complète",
        "Bonne tenue en pression",
      ],
      en: [
        "Rigid: clean, straight runs",
        "Fast solvent-weld assembly",
        "Full range of matching fittings",
        "Good pressure resistance",
      ],
    },
    specifications: [
      {
        label: { fr: "Diamètres", en: "Diameters" },
        value: { fr: "32 à 200 mm", en: "32 to 200 mm" },
      },
      {
        label: { fr: "Pressions nominales", en: "Nominal pressures" },
        value: { fr: "PN 6 à PN 16", en: "PN 6 to PN 16" },
      },
      {
        label: { fr: "Assemblage", en: "Assembly" },
        value: { fr: "Collage ou joint", en: "Solvent weld or gasket" },
      },
      {
        label: { fr: "Longueur", en: "Length" },
        value: { fr: "Barres de 6 m", en: "6 m bars" },
      },
    ],
  },
  {
    slug: "fittings-accessories",
    categoryId: "fittings",
    icon: Wrench,
    image: "",
    imageAlt: {
      fr: "Raccords et vannes d'irrigation disposés sur un plan de travail",
      en: "Irrigation fittings and valves laid out on a bench",
    },
    name: { fr: "Raccords et accessoires", en: "Fittings and accessories" },
    summary: {
      fr: "Tout ce qui relie, dérive, règle et ferme un réseau d'irrigation.",
      en: "Everything that joins, branches, regulates and shuts off a network.",
    },
    description: {
      fr: [
        "Un réseau ne vaut que par ses points de raccordement. Coudes, tés, manchons, vannes, prises de dérivation et bouchons composent l'essentiel des interventions sur une installation.",
        "Nous fournissons une gamme cohérente avec nos tuyaux, pour que les diamètres correspondent et que le montage se fasse sans adaptateur improvisé.",
        "Les accessoires de tête de réseau — filtration, régulation, purge — conditionnent la durée de vie des goutteurs autant que la qualité de la ligne elle-même.",
      ],
      en: [
        "A network is only as good as its connection points. Elbows, tees, sleeves, valves, take-offs and end plugs make up most of the work on an installation.",
        "We supply a range that matches our pipes, so diameters line up and assembly happens without improvised adapters.",
        "Head-of-network accessories — filtration, regulation, flushing — govern emitter life just as much as the quality of the line itself.",
      ],
    },
    applications: {
      fr: [
        "Raccordement de rampes et d'antennes",
        "Têtes de réseau et postes de vannage",
        "Réparation et maintenance en saison",
        "Extension d'un réseau existant",
      ],
      en: [
        "Connecting laterals and branches",
        "Network heads and valve stations",
        "In-season repair and maintenance",
        "Extending an existing network",
      ],
    },
    advantages: {
      fr: [
        "Compatibles avec nos tuyaux PEHD et PVC",
        "Montage sans outillage spécifique pour la plupart des références",
        "Disponibles à l'unité comme en volume",
        "Références courantes tenues en stock",
      ],
      en: [
        "Compatible with our HDPE and PVC pipes",
        "Most references assemble without special tooling",
        "Available singly or in volume",
        "Common references held in stock",
      ],
    },
    specifications: [
      {
        label: { fr: "Types", en: "Types" },
        value: {
          fr: "Coudes, tés, manchons, vannes, prises",
          en: "Elbows, tees, sleeves, valves, take-offs",
        },
      },
      {
        label: { fr: "Diamètres", en: "Diameters" },
        value: { fr: "16 à 160 mm", en: "16 to 160 mm" },
      },
      {
        label: { fr: "Matériaux", en: "Materials" },
        value: { fr: "PP et PVC", en: "PP and PVC" },
      },
      {
        label: { fr: "Compatibilité", en: "Compatibility" },
        value: { fr: "PEHD et PVC", en: "HDPE and PVC" },
      },
    ],
  },
  {
    slug: "water-management",
    categoryId: "management",
    icon: Gauge,
    image: "",
    imageAlt: {
      fr: "Poste de filtration et de régulation en tête de réseau",
      en: "Filtration and regulation station at the network head",
    },
    name: {
      fr: "Solutions de gestion de l'eau",
      en: "Water management solutions",
    },
    summary: {
      fr: "Filtration, régulation et pilotage : ce qui protège le réseau et stabilise le débit.",
      en: "Filtration, regulation and control: what protects the network and steadies the flow.",
    },
    description: {
      fr: [
        "La plupart des pannes de goutteurs viennent de l'amont : une eau chargée, une pression mal régulée, un réseau jamais purgé.",
        "La tête de réseau filtre les particules, régule la pression à la valeur de service des goutteurs et permet d'isoler chaque secteur pour l'entretien.",
        "Bien dimensionnée, elle allonge la durée de vie de l'installation et évite les interventions en pleine campagne, au moment où elles coûtent le plus cher.",
      ],
      en: [
        "Most emitter failures start upstream: loaded water, badly regulated pressure, a network that is never flushed.",
        "The network head filters particles, regulates pressure to the emitters' operating value, and lets each sector be isolated for maintenance.",
        "Sized properly, it extends the life of the installation and avoids interventions mid-season, when they cost the most.",
      ],
    },
    applications: {
      fr: [
        "Tête de réseau sur forage ou bassin",
        "Sectorisation de grandes parcelles",
        "Fertirrigation",
        "Rénovation d'installations existantes",
      ],
      en: [
        "Network head on borehole or reservoir",
        "Sectoring large plots",
        "Fertigation",
        "Retrofitting existing installations",
      ],
    },
    advantages: {
      fr: [
        "Protège les goutteurs du colmatage",
        "Pression stable d'un secteur à l'autre",
        "Entretien possible sans couper toute la parcelle",
        "Consommation mesurable",
      ],
      en: [
        "Protects emitters from clogging",
        "Stable pressure from one sector to the next",
        "Maintenance without shutting the whole plot",
        "Measurable consumption",
      ],
    },
    specifications: [
      {
        label: { fr: "Filtration", en: "Filtration" },
        value: { fr: "À tamis ou à disques", en: "Screen or disc" },
      },
      {
        label: { fr: "Régulation", en: "Regulation" },
        value: { fr: "Réducteurs de pression", en: "Pressure reducers" },
      },
      {
        label: { fr: "Comptage", en: "Metering" },
        value: { fr: "Compteurs volumétriques", en: "Volumetric meters" },
      },
      {
        label: { fr: "Sectorisation", en: "Sectoring" },
        value: { fr: "Vannes et collecteurs", en: "Valves and manifolds" },
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((product) => product.categoryId === categoryId);
}
