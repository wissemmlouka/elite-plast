import { useLocale, useTranslations } from "next-intl";

import { Statistic } from "@/components/shared/statistic";
import type { Locale } from "@/i18n/routing";
import { statistics } from "@/data/statistics";
import { pick } from "@/data/types";

/**
 * Key figures, sitting inside the hero on a glass panel. Reuses `Statistic`, so
 * the count-up on scroll is the same one the rest of the site uses — only the
 * colours change for the dark backdrop.
 */
export function HeroStats() {
  const t = useTranslations("stats");
  const locale = useLocale() as Locale;

  return (
    <dl aria-label={t("ariaLabel")} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-4">
      {statistics.map((stat) => (
        <div
          key={stat.id}
          className="bg-[color-mix(in_oklab,var(--primary-deep)_45%,transparent)] px-6 py-6"
        >
          <Statistic
            value={stat.value}
            suffix={stat.suffix}
            label={pick(stat.label, locale)}
            className="items-start text-left"
            valueClassName="text-2xl text-white sm:text-3xl lg:text-4xl"
            labelClassName="mt-1 text-xs text-white/75 sm:text-sm"
          />
        </div>
      ))}
    </dl>
  );
}
