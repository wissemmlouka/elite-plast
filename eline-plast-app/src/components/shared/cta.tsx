import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";

interface CTAAction {
  label: string;
  href: string;
}

interface CTAProps {
  title: ReactNode;
  description?: ReactNode;
  action: CTAAction;
  secondaryAction?: CTAAction;
  className?: string;
}

/**
 * High-contrast conversion banner. Reusable as the homepage CTA and at the end
 * of future pages. Server component.
 */
export function CTA({
  title,
  description,
  action,
  secondaryAction,
  className,
}: CTAProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 rounded-2xl bg-brand-navy px-6 py-14 text-center sm:px-12 sm:py-20",
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link
          href={action.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full bg-white text-brand-navy hover:bg-white/90 sm:w-auto",
          )}
        >
          {action.label}
        </Link>
        {secondaryAction ? (
          <Link
            href={secondaryAction.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto",
            )}
          >
            {secondaryAction.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
