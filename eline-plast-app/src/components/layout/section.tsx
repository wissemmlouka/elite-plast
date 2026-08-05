import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Full-bleed <section> owning vertical rhythm (72 / 96 / 120px) and background.
 * Pair with <Container> inside for horizontal gutters. Server component.
 */
const sectionVariants = cva(
  "py-section-sm md:py-section-md lg:py-section-lg",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        muted: "bg-muted text-foreground",
        navy: "bg-brand-navy text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {}

export function Section({ className, variant, ...props }: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ variant }), className)}
      {...props}
    />
  );
}
