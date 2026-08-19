import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import type { Locale } from "@/i18n/routing";
import { gallery } from "@/data/gallery";
import { pick } from "@/data/types";

import { GalleryLightbox } from "./gallery-lightbox";

export function Gallery() {
  const t = useTranslations("gallery");
  const locale = useLocale() as Locale;

  const items = gallery.map((item) => ({
    src: item.src,
    alt: pick(item.alt, locale),
  }));

  return (
    <Section variant="muted" aria-labelledby="gallery-heading">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Reveal>
          <SectionHeader
            id="gallery-heading"
            align="left"
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <Reveal>
          <GalleryLightbox items={items} />
        </Reveal>
      </Container>
    </Section>
  );
}
