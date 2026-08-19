import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Marks placeholder figures so nothing on the prototype reads as a verified
 * company claim. Delete the component's usages once real data lands.
 */
export function DemoNote({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}
