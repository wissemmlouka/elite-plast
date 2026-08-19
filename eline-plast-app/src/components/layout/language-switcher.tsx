"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

/**
 * Toggles between the configured locales while preserving the current route.
 * `light` is for the transparent navbar over the hero, where the default
 * border and muted text would disappear against the photograph.
 */
export function LanguageSwitcher({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  // Carries route params across the switch, so /fr/produits/tuyaux-pehd lands
  // on /en/products/tuyaux-pehd rather than the listing.
  const goTo = (next: string) => {
    // @ts-expect-error -- params are validated per-route by next-intl, and the
    // switcher is generic over every route.
    router.replace({ pathname, params }, { locale: next });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border p-0.5 transition-colors",
        light ? "border-white/30" : "border-border",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => goTo(loc)}
            aria-current={active ? "true" : undefined}
            className={cn(
              "cursor-pointer rounded px-2 py-1 text-xs font-semibold uppercase transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              active && !light && "bg-primary text-primary-foreground",
              active && light && "bg-white text-brand-navy",
              !active && !light && "text-muted-foreground hover:text-foreground",
              !active && light && "text-white/75 hover:text-white",
            )}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
