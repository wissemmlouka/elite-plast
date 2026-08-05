# Content Management — Glossary & Placeholder Inventory

All user-facing copy lives in `messages/fr.json` (default) and `messages/en.json`.
This document supports Phase 11: a shared bilingual glossary (terminology
consistency) and the exact list of placeholder content the client must supply.

---

## 1. Bilingual terminology glossary

Use these terms consistently across all current and future copy. Do not
alternate between synonyms.

| Concept | French (canonical) | English (canonical) |
|---|---|---|
| Drip irrigation | irrigation goutte-à-goutte | drip irrigation |
| Drip line | ligne de goutte-à-goutte | drip line |
| Sprinklers / spray | asperseurs, aspersion | sprinklers |
| PEHD pipe | tuyau PEHD | PEHD pipe |
| PVC pipe | tuyau PVC | PVC pipe |
| Distribution pipe | tuyau de distribution | distribution pipe |
| Fittings & accessories | raccords et accessoires | fittings & accessories |
| Water management | gestion de l'eau | water management |
| Farm / holding | exploitation | farm |
| Quote request | demander un devis | request a quote |
| Yield | rendement | yield |

Notes:
- `PEHD` and `PVC` always uppercase.
- French uses the hyphenated form `goutte-à-goutte` everywhere.
- Prefer `tuyau(x)` over `tube(s)`; prefer `pipe(s)` consistently in English.

---

## 2. Placeholder content the client must replace

These are placeholders in the message files / code and **must be replaced with
verified, real information** before launch. Nothing here should be invented.

### Company & contact (`messages/*.json` → `footer`, and `src/lib/structured-data.ts`)
- [ ] Company description (footer + hero) — confirm or provide final wording
- [ ] Phone number — currently `+216 00 000 000`
- [ ] Email — currently `contact@elineplast.tn`
- [ ] Address — currently `Zone Industrielle, Tunisie`
- [ ] Social profile URLs (Facebook / Instagram / LinkedIn) — currently `#`

### Statistics (`messages/*.json` → `stats.items`)
- [ ] Years of experience — currently `20+`
- [ ] Projects delivered — currently `500+`
- [ ] Satisfied customers — currently `1000+`
- [ ] Product references — currently `50+`

### Featured project (`messages/*.json` → `featured`)
- [ ] Real project (title, description, 3 result highlights) — currently a
      placeholder "40-hectare olive farm / 35% water reduction"

### Testimonials (`messages/*.json` → `testimonials.items`)
- [ ] 3 real, approved customer quotes with name + company — currently
      placeholders, visibly tagged "Sample" / "Exemple" in the UI

### Products (`messages/*.json` → `products.items`)
- [ ] Confirm the 6 categories, names, and descriptions match the real catalog

### Imagery (not text, but content)
- [ ] Hero, featured-project, and 6 gallery photographs (real product /
      irrigation / production shots)

---

## 3. French copy for client review

The full French source is in `messages/fr.json`. Key blocks to review for tone
and regional wording:

- `hero.title`: « Systèmes d'irrigation fiables pour l'agriculture moderne »
- `hero.description`, `hero.trust`
- `why.title`: « Conçu pour les agriculteurs exigeants »
- `cta.title`: « Prêt à optimiser votre irrigation ? »
- All `products.items[].description` and `why.items[].description`

Once the client returns edits, apply them directly to `messages/fr.json`
(and mirror any structural changes in `messages/en.json`).
