import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/types";

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

/**
 * Customer quote card. Placeholder entries are visibly tagged so they are never
 * mistaken for real testimonials. Server component.
 */
export function TestimonialCard({
  quote,
  name,
  company,
  placeholder,
  className,
}: TestimonialCardProps) {
  const t = useTranslations("testimonials");
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card className={className}>
      <div className="flex h-full flex-col gap-6 px-(--card-spacing)">
        <Quote className="size-8 text-primary/30" aria-hidden="true" />
        <p className="leading-relaxed text-foreground">“{quote}”</p>
        <div className="mt-auto flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
          >
            {initials}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{name}</span>
            <span className="text-sm text-muted-foreground">{company}</span>
          </div>
          {placeholder ? (
            <Badge variant="muted" className="ml-auto">
              {t("sample")}
            </Badge>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
