import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { FeatureCard } from "@/components/shared/feature-card";
import { featureIcons } from "@/content/home";

interface FeatureItem {
  title: string;
  description: string;
}

export function WhyChooseUs() {
  const t = useTranslations("why");
  const items = t.raw("items") as FeatureItem[];

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
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <FeatureCard
                icon={featureIcons[index]}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
