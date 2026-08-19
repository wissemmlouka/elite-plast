import type { CSSProperties } from "react";
import { ArrowRight, ChevronDown, Droplets } from "lucide-react";
import { Outfit } from "next/font/google";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

import { HeroStats } from "./hero-stats";
import { HeroVideo } from "./hero-video";
import styles from "./hero.module.css";

/**
 * APPROVED — do not redesign.
 *
 * Ported from Lovable's HeroSection: a looping video plate under a Ken Burns
 * drift, the navy veil, a glass badge, the headline rising line by line, two
 * CTAs, the trust line, the drip overlay and the scroll cue. Timings, easings
 * and the veil gradient come from Lovable's own `styles.css`.
 *
 * The video carries the water: it is a five-second loop of the drip line
 * running. The overlay drops sit on top of it as a light accent.
 */

/** Lovable sets the hero in Outfit; scoped here rather than site-wide. */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

const TITLE_LINES: Record<string, string[]> = {
  fr: ["Systèmes d'irrigation", "fiables pour", "l'agriculture moderne"],
  en: ["Reliable irrigation", "systems for", "modern agriculture"],
};

/** Lovable's own drop positions and delays. */
const DROPS = [
  { left: "18%", top: "42%", delay: "0s" },
  { left: "34%", top: "56%", delay: "0.7s" },
  { left: "52%", top: "38%", delay: "1.3s" },
  { left: "68%", top: "60%", delay: "0.35s" },
  { left: "82%", top: "46%", delay: "1.8s" },
];

function DripOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {DROPS.map((drop) => (
        <span
          key={drop.left}
          className="absolute"
          style={{ left: drop.left, top: drop.top }}
        >
          <span
            className={cn(
              styles.drop,
              "block h-3 w-2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-white/70 blur-[0.4px]",
            )}
            style={{ animationDelay: drop.delay }}
          />
          <span
            className={cn(
              styles.ripple,
              "absolute top-[60px] left-1/2 block size-6 rounded-full border border-white/60",
            )}
            style={{ animationDelay: drop.delay }}
          />
        </span>
      ))}
    </div>
  );
}

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const lines = TITLE_LINES[locale] ?? TITLE_LINES.fr;

  return (
    <section
      className={cn(
        outfit.variable,
        styles.hero,
        "relative isolate -mt-20 min-h-[92svh] overflow-hidden",
      )}
      // Outfit for this section only; the rest of the site keeps Inter/Manrope.
      style={
        {
          "--font-sans": "var(--font-outfit)",
          "--font-heading": "var(--font-outfit)",
        } as CSSProperties
      }
      aria-labelledby="hero-heading"
    >
      <HeroVideo
        src="/videos/hero-irrigation.mp4"
        srcMobile="/videos/hero-irrigation-mobile.mp4"
        poster="/images/hero-irrigation.jpg"
        posterMobile="/images/hero-irrigation-mobile.jpg"
      />

      <div aria-hidden="true" className={cn(styles.veil, "absolute inset-0")} />
      <div aria-hidden="true" className={cn(styles.tint, "absolute inset-0")} />

      <DripOverlay />

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-page flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
        <span
          className={cn(
            styles.rise,
            "inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm max-lg:backdrop-blur-none",
          )}
          style={{ animationDelay: "0.1s" }}
        >
          <Droplets className="size-3.5 text-brand-green" aria-hidden="true" />
          {t("eyebrow")}
        </span>

        <h1
          id="hero-heading"
          className="mt-7 max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {lines.map((line, i) => (
            <span
              key={line}
              className={cn(styles.rise, "block")}
              style={{ animationDelay: `${0.25 + i * 0.14}s` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          className={cn(
            styles.rise,
            "mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg",
          )}
          style={{ animationDelay: "0.75s" }}
        >
          {t.rich("description", {
            nb: (chunks) => (
              <span className="whitespace-nowrap">{chunks}</span>
            ),
          })}
        </p>

        <div
          className={cn(styles.rise, "mt-9 flex flex-wrap items-center gap-4")}
          style={{ animationDelay: "0.9s" }}
        >
          <Link
            href="/quote"
            className={cn(
              styles.ctaShadow,
              "group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none",
            )}
          >
            {t("primary")}
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm max-lg:backdrop-blur-none transition-colors duration-200 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none"
          >
            {t("secondary")}
          </Link>
        </div>

        <p
          className={cn(styles.rise, "mt-8 text-sm text-white/70")}
          style={{ animationDelay: "1s" }}
        >
          {t("trust")}
        </p>

        <div className={styles.rise} style={{ animationDelay: "1.1s" }}>
          <HeroStats />
        </div>
      </div>

      <span
        aria-hidden="true"
        className={cn(styles.cue, "absolute bottom-6 left-1/2 text-white")}
      >
        <ChevronDown className="size-6" />
      </span>
    </section>
  );
}
