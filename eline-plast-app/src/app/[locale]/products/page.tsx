import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { CTA } from "@/components/shared/cta";
import type { Locale } from "@/i18n/routing";
import { productCategories, getProductsByCategory } from "@/data/products";
import { pick } from "@/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/${locale === "fr" ? "produits" : "products"}` },
  };
}

/** Grouped by category rather than filtered, so the page needs no client JS. */
function ProductCatalogue() {
  const t = useTranslations("products");
  const tCta = useTranslations("cta");
  const tProjects = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />

      {productCategories.map((category, index) => {
        const items = getProductsByCategory(category.id);
        if (items.length === 0) return null;

        return (
          <Section
            key={category.id}
            variant={index % 2 === 1 ? "muted" : "default"}
            aria-labelledby={`category-${category.id}`}
          >
            <Container className="flex flex-col gap-10">
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                  <h2
                    id={`category-${category.id}`}
                    className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                  >
                    {pick(category.name, locale)}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {items.length === 1
                      ? t("countOne")
                      : t("countOther", { count: items.length })}
                  </p>
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product, i) => (
                  <Reveal
                    key={product.slug}
                    delay={(i % 3) * 0.08}
                    className="h-full"
                  >
                    <ProductCard
                      product={product}
                      locale={locale}
                      cta={t("cardCta")}
                    />
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <Section aria-label={tCta("ariaLabel")}>
        <Container>
          <Reveal>
            <CTA
              title={tCta("title")}
              description={tCta("description")}
              action={{ label: tCta("primary"), href: "/quote" }}
              secondaryAction={{
                label: tProjects("pageTitle"),
                href: "/projects",
              }}
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProductCatalogue />;
}
