import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href?: string;
  className?: string;
}

/**
 * Product-category card: icon + name + short description + CTA.
 * The whole card is a single (locale-aware) link. Server component.
 */
export function ProductCard({
  icon: Icon,
  title,
  description,
  cta,
  href = "/products",
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <Card hoverable className="h-full">
        <div className="flex h-full flex-col gap-4 px-(--card-spacing)">
          <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
