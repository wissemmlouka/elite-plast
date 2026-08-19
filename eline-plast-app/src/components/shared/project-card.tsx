import { ArrowRight, MapPin, Sprout } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";
import { GalleryCard } from "@/components/shared/gallery-card";
import type { Locale } from "@/i18n/routing";
import { pick, type Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  cta: string;
  className?: string;
}

/**
 * Project tile: visual, title, location and crop, summary, CTA. Takes the whole
 * record so the card holds no business copy of its own. Server component.
 */
export function ProjectCard({
  project,
  locale,
  cta,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
      className={cn(
        "group block h-full rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <Card hoverable className="h-full gap-0 py-0">
        <GalleryCard
          src={project.image}
          alt={pick(project.imageAlt, locale)}
          className="rounded-none border-0 border-b border-border"
        />
        <div className="flex h-full flex-col gap-4 p-(--card-spacing)">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden="true" />
              {pick(project.location, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sprout className="size-3.5" aria-hidden="true" />
              {pick(project.crop, locale)}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-balance text-foreground">
            {pick(project.title, locale)}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {pick(project.summary, locale)}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {cta}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}
