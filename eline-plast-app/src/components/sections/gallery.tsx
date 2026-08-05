import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import type { GalleryItem } from "@/types";

import { GalleryLightbox } from "./gallery-lightbox";

export function Gallery() {
  const t = useTranslations("gallery");
  // Empty src renders a labelled placeholder tile until real photos are added.
  const items: GalleryItem[] = (t.raw("items") as string[]).map((alt) => ({
    src: "",
    alt,
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
