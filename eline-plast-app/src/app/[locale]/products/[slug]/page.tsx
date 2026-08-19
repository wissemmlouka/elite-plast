import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { GalleryCard } from "@/components/shared/gallery-card";
import { ProjectCard } from "@/components/shared/project-card";
import { DemoNote } from "@/components/shared/demo-note";
import { CTA } from "@/components/shared/cta";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/i18n/routing";
import { getProduct, products } from "@/data/products";
import { projects } from "@/data/projects";
import { pick } from "@/data/types";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const key = locale as Locale;
  return {
    title: pick(product.name, key),
    description: pick(product.summary, key),
  };
}

function ProductDetail({ slug }: { slug: string }) {
  const t = useTranslations("products");
  const tCta = useTranslations("cta");
  const locale = useLocale() as Locale;
  const product = getProduct(slug);

  if (!product) notFound();

  const related = projects.filter((project) =>
    project.productSlugs.includes(product.slug),
  );

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={pick(product.name, locale)}
        description={pick(product.summary, locale)}
        above={
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t("back")}
          </Link>
        }
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="scaleIn">
            <GalleryCard
              src={product.image}
              alt={pick(product.imageAlt, locale)}
              className="rounded-2xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>

          <Reveal className="flex flex-col gap-5">
            {pick(product.description, locale).map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-pretty text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/quote"
              className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full sm:w-auto")}
            >
              {t("quoteCta")}
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("applications")}
            </h2>
            <ul className="flex flex-col gap-3">
              {pick(product.applications, locale).map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("advantages")}
            </h2>
            <ul className="flex flex-col gap-3">
              {pick(product.advantages, locale).map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-strong">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-6">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("specifications")}
            </h2>
          </Reveal>
          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {product.specifications.map((spec) => (
                <div
                  key={pick(spec.label, locale)}
                  className="flex flex-col gap-1 bg-background p-5"
                >
                  <dt className="text-sm text-muted-foreground">
                    {pick(spec.label, locale)}
                  </dt>
                  <dd className="font-medium text-foreground">
                    {pick(spec.value, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <DemoNote>{t("specsNote")}</DemoNote>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section variant="muted" aria-labelledby="related-projects">
          <Container className="flex flex-col gap-10">
            <Reveal>
              <h2
                id="related-projects"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {t("relatedProjects")}
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
                  <ProjectCard
                    project={project}
                    locale={locale}
                    cta={t("cardCta")}
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
              secondaryAction={{ label: t("back"), href: "/products" }}
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  return <ProductDetail slug={slug} />;
}
