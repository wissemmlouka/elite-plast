"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

/**
 * The count-up gets its own timing rather than the site's entrance easing.
 * That curve is near-expo, which would run the number almost to its final
 * value in the first fraction of a second and then crawl — the opposite of
 * watching a figure climb. This is a gentle ease-out over a longer beat, so
 * the increment stays readable the whole way.
 */
const COUNT_DURATION = 2.8;
const COUNT_EASE = [0.33, 1, 0.68, 1] as const;

interface StatisticProps extends Stat {
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

/**
 * Single statistic with a count-up that runs once when scrolled into view.
 * Falls back to the final value immediately when reduced motion is preferred.
 */
export function Statistic({
  value,
  suffix,
  label,
  className,
  valueClassName,
  labelClassName,
}: StatisticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration: COUNT_DURATION,
      ease: [...COUNT_EASE],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
          valueClassName,
        )}
      >
        {display.toLocaleString()}
        {suffix}
      </span>
      <span
        className={cn("mt-2 text-sm text-muted-foreground sm:text-base", labelClassName)}
      >
        {label}
      </span>
    </div>
  );
}
