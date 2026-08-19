import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import type { Locale } from "@/i18n/routing";
import { testimonials } from "@/data/testimonials";
import { pick } from "@/data/types";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as Locale;

  return (
    <Section aria-labelledby="testimonials-heading">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Reveal>
          <SectionHeader
            id="testimonials-heading"
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <TestimonialCard
                quote={pick(testimonial.quote, locale)}
                author={pick(testimonial.author, locale)}
                location={pick(testimonial.location, locale)}
                sampleLabel={t("sample")}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
