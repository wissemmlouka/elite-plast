import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { DemoNote } from "@/components/shared/demo-note";
import { CTA } from "@/components/shared/cta";
import type { Locale } from "@/i18n/routing";
import { projects } from "@/data/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/${locale === "fr" ? "projets" : "projects"}` },
  };
}

function ProjectsIndex() {
  const t = useTranslations("projects");
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
        <Container className="flex flex-col gap-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
                <ProjectCard
                  project={project}
                  locale={locale}
                  cta={t("cardCta")}
                />
              </Reveal>
            ))}
          </div>
          <DemoNote>{t("demoNote")}</DemoNote>
        </Container>
      </Section>

      <Section variant="muted" aria-label={tCta("ariaLabel")}>
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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsIndex />;
}
