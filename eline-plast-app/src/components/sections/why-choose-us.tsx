import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { FeatureCard } from "@/components/shared/feature-card";
import type { Locale } from "@/i18n/routing";
import { benefits } from "@/data/benefits";
import { pick } from "@/data/types";

export function WhyChooseUs() {
  const t = useTranslations("why");
  const locale = useLocale() as Locale;

  return (
    <Section variant="muted" aria-labelledby="why-heading">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Reveal>
          <SectionHeader
            id="why-heading"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.id}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <FeatureCard
                icon={benefit.icon}
                title={pick(benefit.title, locale)}
                description={pick(benefit.description, locale)}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
