import { MapPin, Ruler, Sprout } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { GalleryCard } from "@/components/shared/gallery-card";
import { DemoNote } from "@/components/shared/demo-note";
import type { Locale } from "@/i18n/routing";
import { featuredProject } from "@/data/projects";
import { pick } from "@/data/types";

export function FeaturedProject() {
  const t = useTranslations("featured");
  const locale = useLocale() as Locale;
  const project = featuredProject;

  const facts = [
    { icon: MapPin, value: pick(project.location, locale) },
    { icon: Sprout, value: pick(project.crop, locale) },
    { icon: Ruler, value: pick(project.surface, locale) },
  ];

  return (
    <Section aria-labelledby="featured-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="scaleIn">
          <GalleryCard
            src={project.image}
            alt={pick(project.imageAlt, locale)}
            className="rounded-2xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>

        <Reveal className="flex flex-col items-start gap-6">
          <Badge className="uppercase tracking-wide">{t("tag")}</Badge>
          <h2
            id="featured-heading"
            className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
          >
            {pick(project.title, locale)}
          </h2>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {facts.map(({ icon: Icon, value }) => (
              <li key={value} className="inline-flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {value}
              </li>
            ))}
          </ul>

          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            {pick(project.summary, locale)}
          </p>

          <dl className="grid w-full grid-cols-3 gap-4 rounded-lg border border-border bg-muted/50 p-5">
            {project.results.map((result) => (
              <div key={pick(result.label, locale)} className="flex flex-col gap-1">
                <dt className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                  {pick(result.value, locale)}
                </dt>
                <dd className="text-xs leading-snug text-muted-foreground">
                  {pick(result.label, locale)}
                </dd>
              </div>
            ))}
          </dl>

          <DemoNote>{t("demoNote")}</DemoNote>

          <Link
            href={{
              pathname: "/projects/[slug]",
              params: { slug: project.slug },
            }}
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            {t("cta")}
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
