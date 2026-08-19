import { Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  /** Label for the demo tag; omit to hide it once quotes are real. */
  sampleLabel?: string;
  className?: string;
}

/**
 * Customer quote card. Demo quotes are visibly tagged so they are never
 * mistaken for verified testimonials. Server component.
 */
export function TestimonialCard({
  quote,
  author,
  location,
  sampleLabel,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={className}>
      <figure className="flex h-full flex-col gap-6 px-(--card-spacing)">
        <Quote className="size-8 text-primary/30" aria-hidden="true" />
        <blockquote className="leading-relaxed text-foreground">
          “{quote}”
        </blockquote>
        <figcaption className="mt-auto flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              {author}
            </span>
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
          {sampleLabel ? (
            <Badge variant="muted" className="ml-auto">
              {sampleLabel}
            </Badge>
          ) : null}
        </figcaption>
      </figure>
    </Card>
  );
}
