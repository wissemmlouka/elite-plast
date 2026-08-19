import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/i18n/routing";
import { pick, type Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
  locale: Locale;
  cta: string;
  className?: string;
}

/**
 * Product tile: icon, name, one-line summary, CTA. Takes the whole record so
 * the card never holds business copy of its own. Server component.
 */
export function ProductCard({
  product,
  locale,
  cta,
  className,
}: ProductCardProps) {
  const Icon = product.icon;

  return (
    <Link
      href={{ pathname: "/products/[slug]", params: { slug: product.slug } }}
      className={cn(
        "group block h-full rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <Card hoverable className="h-full">
        <div className="flex h-full flex-col gap-4 px-(--card-spacing)">
          <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-foreground">
              {pick(product.name, locale)}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {pick(product.summary, locale)}
            </p>
          </div>
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
