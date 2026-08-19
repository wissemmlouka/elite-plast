import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Breadcrumb or back link rendered above the eyebrow. */
  above?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Intro band for inner pages. Reuses the hero's dotted backdrop so the pages
 * read as one system, at a smaller scale than the homepage stage.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  above,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] opacity-70 [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <Container className="flex flex-col items-start gap-5 py-14 sm:py-20">
        {above}
        <Reveal className="flex flex-col items-start gap-5">
          {eyebrow ? (
            <Badge className="uppercase tracking-wide">{eyebrow}</Badge>
          ) : null}
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
