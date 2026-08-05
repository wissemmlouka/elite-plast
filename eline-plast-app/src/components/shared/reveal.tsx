"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { transition, viewport, type RevealVariant } from "@/lib/motion";

const hidden: Record<RevealVariant, { opacity: number; y?: number; scale?: number }> = {
  fade: { opacity: 0 },
  fadeUp: { opacity: 0, y: 16 },
  fadeDown: { opacity: 0, y: -16 },
  scaleIn: { opacity: 0, scale: 0.96 },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

/**
 * Wraps children in a scroll-triggered entrance (once). Lets Server Component
 * sections animate without becoming client components themselves.
 */
export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={hidden[variant]}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
