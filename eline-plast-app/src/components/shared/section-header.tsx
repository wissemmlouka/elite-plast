import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Set on the heading so a Section can reference it via aria-labelledby. */
  id?: string;
  className?: string;
}

/**
 * Eyebrow + heading + supporting text. The shared intro block for sections.
 * Server component (renders the client Badge as a leaf).
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Badge className="uppercase tracking-wide">{eyebrow}</Badge>
      ) : null}
      <h2
        id={id}
        className="max-w-3xl text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
