import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { Statistic } from "@/components/shared/statistic";
import { DemoNote } from "@/components/shared/demo-note";
import type { Locale } from "@/i18n/routing";
import { statistics } from "@/data/statistics";
import { pick } from "@/data/types";

export function Statistics() {
  const t = useTranslations("stats");
  const locale = useLocale() as Locale;

  return (
    <Section variant="muted" aria-label={t("ariaLabel")}>
      <Container className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.08}>
              <Statistic
                value={stat.value}
                suffix={stat.suffix}
                label={pick(stat.label, locale)}
                className="items-center text-center"
              />
            </Reveal>
          ))}
        </div>
        <DemoNote className="justify-center text-center">
          {t("demoNote")}
        </DemoNote>
      </Container>
    </Section>
  );
}
