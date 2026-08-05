import { Droplets } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle dotted pattern, faded toward the edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] opacity-70 [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Left — copy */}
        <div className="flex flex-col items-start gap-7 text-left">
          <Reveal>
            <Badge className="uppercase tracking-wide">{t("eyebrow")}</Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
            >
              {t("title")}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
              {t("description")}
            </p>
          </Reveal>
          <Reveal delay={0.24} className="w-full sm:w-auto">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                {t("primary")}
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                {t("secondary")}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-sm text-muted-foreground">{t("trust")}</p>
          </Reveal>
        </div>

        {/* Right — placeholder visual. Swap with a real product/irrigation photo. */}
        <Reveal variant="scaleIn" delay={0.15}>
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <Droplets className="size-24 text-primary/25" aria-hidden="true" />
            <span className="absolute right-4 bottom-4 text-xs font-medium text-muted-foreground">
              {t("imageLabel")}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
