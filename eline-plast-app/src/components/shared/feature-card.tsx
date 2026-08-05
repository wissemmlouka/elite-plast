import { Card } from "@/components/ui/card";
import type { Feature } from "@/types";

interface FeatureCardProps extends Feature {
  className?: string;
}

/**
 * Icon + title + description card for feature/benefit grids. Reuses the Card
 * shell (border, soft shadow, hover lift). Server component.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card hoverable className={className}>
      <div className="flex flex-col gap-4 px-(--card-spacing)">
        <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green-strong">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
