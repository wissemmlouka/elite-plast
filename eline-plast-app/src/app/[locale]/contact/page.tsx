import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { DemoNote } from "@/components/shared/demo-note";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/i18n/routing";
import { company } from "@/data/company";
import { pick } from "@/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `/${locale}/contact` },
  };
}

function ContactContent() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;

  const channels = [
    {
      id: "phone",
      icon: Phone,
      label: t("phone"),
      value: company.contact.phone,
      href: `tel:${company.contact.phone.replace(/\s/g, "")}`,
    },
    {
      id: "email",
      icon: Mail,
      label: t("email"),
      value: company.contact.email,
      href: `mailto:${company.contact.email}`,
    },
    {
      id: "address",
      icon: MapPin,
      label: t("address"),
      value: pick(company.contact.address, locale),
    },
    {
      id: "hours",
      icon: Clock,
      label: t("hours"),
      value: pick(company.contact.hours, locale),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />

      <Section>
        <Container className="flex flex-col gap-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.id} delay={(i % 4) * 0.08} className="h-full">
                  <Card className="h-full">
                    <div className="flex h-full flex-col gap-4 px-(--card-spacing)">
                      <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-sm font-semibold text-muted-foreground">
                          {channel.label}
                        </h2>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">
                            {channel.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <DemoNote>{t("demoNote")}</DemoNote>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-background p-8 sm:p-12">
              <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
                {t("quoteTitle")}
              </h2>
              <p className="max-w-2xl leading-relaxed text-pretty text-muted-foreground">
                {t("quoteDescription")}
              </p>
              <Link
                href="/quote"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
              >
                {t("quoteCta")}
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}
