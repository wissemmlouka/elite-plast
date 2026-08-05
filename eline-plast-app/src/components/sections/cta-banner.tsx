import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { CTA } from "@/components/shared/cta";

export function CTABanner() {
  const t = useTranslations("cta");

  return (
    <Section aria-label={t("ariaLabel")}>
      <Container>
        <Reveal>
          <CTA
            title={t("title")}
            description={t("description")}
            action={{ label: t("primary"), href: "/contact" }}
            secondaryAction={{ label: t("secondary"), href: "/products" }}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
