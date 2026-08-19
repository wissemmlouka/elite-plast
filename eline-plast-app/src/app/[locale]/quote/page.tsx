import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { QuoteForm } from "@/components/forms/quote-form";
import type { Locale } from "@/i18n/routing";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { pick } from "@/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/${locale === "fr" ? "devis" : "quote"}` },
    robots: { index: false, follow: true },
  };
}

function QuoteContent() {
  const t = useTranslations("quote");
  const tContact = useTranslations("contact");
  const locale = useLocale() as Locale;

  // Only serialisable fields cross into the client component.
  const productOptions = products.map((product) => ({
    slug: product.slug,
    label: pick(product.name, locale),
  }));

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2 className="sr-only">{t("formTitle")}</h2>
            <QuoteForm productOptions={productOptions} />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="flex flex-col gap-6 rounded-2xl border border-border bg-muted/50 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground">
                {tContact("pageTitle")}
              </h2>
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <a
                    href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {company.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {company.contact.email}
                  </a>
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pick(company.contact.hours, locale)}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {tContact("demoNote")}
              </p>
            </aside>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <QuoteContent />;
}
