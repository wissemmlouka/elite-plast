import { cn } from "@/lib/utils";

/**
 * Centers content at the 1280px page width with responsive gutters
 * (mobile 20px / tablet 32px / desktop 40px). Server component.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-page px-5 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
