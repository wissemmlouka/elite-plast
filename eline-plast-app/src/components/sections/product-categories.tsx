import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { productIcons } from "@/content/home";

interface ProductItem {
  slug: string;
  title: string;
  description: string;
}

export function ProductCategories() {
  const t = useTranslations("products");
  const items = t.raw("items") as ProductItem[];
  const cta = t("cardCta");

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
          {items.map((product, index) => (
            <Reveal
              key={product.slug}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <ProductCard
                title={product.title}
                description={product.description}
                icon={productIcons[index]}
                cta={cta}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
