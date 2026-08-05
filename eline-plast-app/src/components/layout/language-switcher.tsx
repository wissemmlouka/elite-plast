"use client";

import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

/**
 * Toggles between the configured locales while preserving the current route.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border border-border p-0.5",
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
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded px-2 py-1 text-xs font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
