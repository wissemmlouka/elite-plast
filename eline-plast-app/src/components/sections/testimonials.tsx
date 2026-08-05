import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";

interface TestimonialItem {
  quote: string;
  name: string;
  company: string;
}

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as TestimonialItem[];

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
          {items.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <TestimonialCard {...testimonial} placeholder className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
