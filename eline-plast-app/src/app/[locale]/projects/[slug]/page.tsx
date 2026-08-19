import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Ruler, Sprout, Waves } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { GalleryCard } from "@/components/shared/gallery-card";
import { ProductCard } from "@/components/shared/product-card";
import { DemoNote } from "@/components/shared/demo-note";
import { CTA } from "@/components/shared/cta";
import type { Locale } from "@/i18n/routing";
import { getProject, projects } from "@/data/projects";
import { getProduct } from "@/data/products";
import { pick } from "@/data/types";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const key = locale as Locale;
  return {
    title: pick(project.title, key),
    description: pick(project.summary, key),
  };
}

function ProjectDetail({ slug }: { slug: string }) {
  const t = useTranslations("projects");
  const tProducts = useTranslations("products");
  const tCta = useTranslations("cta");
  const locale = useLocale() as Locale;
  const project = getProject(slug);

  if (!project) notFound();

  const facts = [
    { icon: MapPin, label: t("location"), value: pick(project.location, locale) },
    { icon: Sprout, label: t("crop"), value: pick(project.crop, locale) },
    { icon: Ruler, label: t("surface"), value: pick(project.surface, locale) },
    { icon: Waves, label: t("solution"), value: pick(project.solution, locale) },
    { icon: CalendarDays, label: t("year"), value: String(project.year) },
  ];

  const usedProducts = project.productSlugs
    .map((productSlug) => getProduct(productSlug))
    .filter((product) => product !== undefined);

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={pick(project.title, locale)}
        description={pick(project.summary, locale)}
        above={
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t("back")}
          </Link>
        }
      />

      <Section>
        <Container className="flex flex-col gap-12">
          <Reveal variant="scaleIn">
            <GalleryCard
              src={project.image}
              alt={pick(project.imageAlt, locale)}
              className="aspect-[16/9] rounded-2xl"
              sizes="100vw"
              priority
            />
          </Reveal>

          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col gap-1 bg-background p-5">
                  <dt className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className="size-3.5 text-primary" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="flex max-w-3xl flex-col gap-5">
            {pick(project.description, locale).map((paragraph) => (
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

      <Section variant="muted" aria-labelledby="project-results">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2
              id="project-results"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {t("results")}
            </h2>
          </Reveal>
          <Reveal>
            <dl className="grid gap-6 sm:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={pick(result.label, locale)}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-background p-6"
                >
                  <dt className="font-heading text-3xl font-bold tracking-tight text-foreground">
                    {pick(result.value, locale)}
                  </dt>
                  <dd className="text-sm text-muted-foreground">
                    {pick(result.label, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <DemoNote>{t("demoNote")}</DemoNote>
        </Container>
      </Section>

      {project.gallery.length > 0 ? (
        <Section aria-labelledby="project-gallery">
          <Container className="flex flex-col gap-8">
            <Reveal>
              <h2
                id="project-gallery"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {t("galleryTitle")}
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 0.08}>
                  <GalleryCard src={item.src} alt={pick(item.alt, locale)} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {usedProducts.length > 0 ? (
        <Section variant="muted" aria-labelledby="project-products">
          <Container className="flex flex-col gap-10">
            <Reveal>
              <h2
                id="project-products"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {t("productsUsed")}
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {usedProducts.map((product, i) => (
                <Reveal key={product.slug} delay={(i % 3) * 0.08} className="h-full">
                  <ProductCard
                    product={product}
                    locale={locale}
                    cta={tProducts("cardCta")}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section aria-label={tCta("ariaLabel")}>
        <Container>
          <Reveal>
            <CTA
              title={tCta("title")}
              description={tCta("description")}
              action={{ label: tCta("primary"), href: "/quote" }}
              secondaryAction={{ label: t("back"), href: "/projects" }}
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  return <ProjectDetail slug={slug} />;
}
