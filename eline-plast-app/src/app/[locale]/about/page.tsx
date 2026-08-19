import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { FeatureCard } from "@/components/shared/feature-card";
import { GalleryCard } from "@/components/shared/gallery-card";
import { CTA } from "@/components/shared/cta";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/i18n/routing";
import { company, expertise, values } from "@/data/company";
import { pick } from "@/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/${locale === "fr" ? "a-propos" : "about"}` },
  };
}

function AboutContent() {
  const t = useTranslations("about");
  const tCta = useTranslations("cta");
  const tProducts = useTranslations("products");
  const locale = useLocale() as Locale;

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            {pick(company.intro, locale).map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-pretty text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal variant="scaleIn" className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-muted/50 p-8">
              <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
                {t("missionTitle")}
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-pretty text-foreground">
                {pick(company.mission, locale)}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section variant="muted" aria-labelledby="values-heading">
        <Container className="flex flex-col gap-12 lg:gap-16">
          <Reveal>
            <SectionHeader
              id="values-heading"
              title={t("valuesTitle")}
              description={t("valuesDescription")}
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.id} delay={(i % 4) * 0.08} className="h-full">
                <FeatureCard
                  icon={value.icon}
                  title={pick(value.title, locale)}
                  description={pick(value.description, locale)}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="manufacturing-heading">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="scaleIn">
            <GalleryCard
              src=""
              alt={pick(
                {
                  fr: "Ligne d'extrusion de tuyaux dans l'atelier Eline Plast",
                  en: "Pipe extrusion line in the Eline Plast workshop",
                },
                locale,
              )}
              className="rounded-2xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>

          <Reveal className="flex flex-col items-start gap-5">
            <Badge className="uppercase tracking-wide">
              {t("manufacturingEyebrow")}
            </Badge>
            <h2
              id="manufacturing-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
            >
              {t("manufacturingTitle")}
            </h2>
            {pick(company.manufacturing, locale).map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-pretty text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section variant="muted" aria-labelledby="expertise-heading">
        <Container className="flex flex-col gap-12 lg:gap-16">
          <Reveal>
            <SectionHeader
              id="expertise-heading"
              title={t("expertiseTitle")}
              description={t("expertiseDescription")}
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {expertise.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.08} className="h-full">
                <FeatureCard
                  icon={item.icon}
                  title={pick(item.title, locale)}
                  description={pick(item.description, locale)}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label={tCta("ariaLabel")}>
        <Container>
          <Reveal>
            <CTA
              title={tCta("title")}
              description={tCta("description")}
              action={{ label: tCta("primary"), href: "/quote" }}
              secondaryAction={{
                label: tProducts("pageTitle"),
                href: "/products",
              }}
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}
