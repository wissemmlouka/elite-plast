import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/i18n/routing";
import { products } from "@/data/products";

export function ProductCategories() {
  const t = useTranslations("products");
  const locale = useLocale() as Locale;

  return (
    <Section aria-labelledby="products-heading">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Reveal>
          <SectionHeader
            id="products-heading"
            align="left"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              delay={(index % 3) * 0.08}
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
        <Reveal>
          <Link
            href="/products"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
          >
            {t("allCta")}
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
