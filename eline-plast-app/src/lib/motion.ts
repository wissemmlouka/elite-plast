import type { Transition, Variants } from "motion/react";

/**
 * Central animation config. All motion in the site flows through these presets
 * so timing and easing stay consistent (durations kept within 150-300ms per
 * the design system: fade, slide, scale, stagger only).
 */

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.3,
} as const;

/** Premium ease-out curve (expo-like) for entrances. */
export const ease = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = {
  duration: duration.base,
  ease,
};

/** Short transition for hover / interactive feedback. */
export const hoverTransition: Transition = {
  duration: duration.fast,
  ease,
};

/** Scroll-reveal viewport config — animate once, when 30% in view. */
export const viewport = { once: true, amount: 0.3 } as const;

const slideOffset = 16;

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: slideOffset },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -slideOffset },
  visible: { opacity: 1, y: 0, transition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition },
};

/** Parent wrapper that staggers its children's entrances. */
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const variants = { fade, fadeUp, fadeDown, scaleIn } as const;

export type RevealVariant = keyof typeof variants;
