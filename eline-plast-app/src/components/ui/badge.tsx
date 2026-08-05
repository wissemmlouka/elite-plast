"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Small pill for eyebrows / section labels and status tags. Defaults to the
 * soft brand-tinted "eyebrow" look. Polymorphic via the Base UI `render` prop.
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition-colors [&>svg]:size-3.5 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        soft: "bg-primary/10 text-primary",
        solid: "bg-primary text-primary-foreground",
        secondary: "bg-secondary/15 text-secondary-foreground",
        outline: "border border-border text-muted-foreground",
        muted: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "soft",
    },
  },
);

function Badge({
  className,
  variant,
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      { className: cn(badgeVariants({ variant }), className) },
      props,
    ),
    render,
    state: { slot: "badge", variant: variant ?? "soft" },
  });
}

export { Badge, badgeVariants };
