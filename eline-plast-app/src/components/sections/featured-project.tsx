import { Check, Droplets } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedProject() {
  const t = useTranslations("featured");
  const highlights = t.raw("highlights") as string[];

  return (
    <Section aria-labelledby="featured-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="scaleIn">
          {/* Placeholder visual — swap with a real project photo. */}
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-muted to-brand-green/5 shadow-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] opacity-50 [background-size:20px_20px]"
            />
            <Droplets
              className="relative size-20 text-primary/25"
              aria-hidden="true"
            />
            <span className="absolute right-4 bottom-4 text-xs font-medium text-muted-foreground">
              {t("imageLabel")}
            </span>
          </div>
        </Reveal>

        <Reveal className="flex flex-col items-start gap-6">
          <Badge className="uppercase tracking-wide">{t("tag")}</Badge>
          <h2
            id="featured-heading"
            className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            {t("description")}
          </p>
          <ul className="flex flex-col gap-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-strong">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
          <Link
            href="/projects"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            {t("cta")}
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
