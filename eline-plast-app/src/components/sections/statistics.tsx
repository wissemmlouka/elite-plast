import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { Statistic } from "@/components/shared/statistic";
import type { Stat } from "@/types";

export function Statistics() {
  const t = useTranslations("stats");
  const items = t.raw("items") as Stat[];

  return (
    <Section variant="muted" aria-label={t("ariaLabel")}>
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <Statistic {...stat} className="items-center text-center" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
