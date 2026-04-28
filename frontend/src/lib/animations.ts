import type { Variants } from "framer-motion";

/**
 * Logix Animation System
 *
 * All animations use: [0.16, 1, 0.3, 1]
 * This is a snappy ease-out — elements start moving IMMEDIATELY
 * and decelerate smoothly. No initial hang, no overshoot.
 */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: EASE },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.4, ease: EASE },
  }),
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: EASE },
  }),
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: EASE },
  }),
};

export const scaleOnHover = {
  scale: 1.03,
  transition: { duration: 0.2, ease: EASE },
};

export const rotateOnHover = {
  rotate: 2,
  transition: { duration: 0.25, ease: EASE },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export const floatAnimation: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
