"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";
import type { Stat } from "@/types";

interface StatisticProps extends Stat {
  className?: string;
}

/**
 * Single statistic with a count-up that runs once when scrolled into view.
 * Falls back to the final value immediately when reduced motion is preferred.
 */
export function Statistic({ value, suffix, label, className }: StatisticProps) {
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
      duration: 1.2,
      ease,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <span className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-sm text-muted-foreground sm:text-base">
        {label}
      </span>
    </div>
  );
}
