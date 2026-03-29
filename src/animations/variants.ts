import type { Variants } from 'framer-motion'

/**
 * Reusable Framer Motion animation variants.
 * Tuned for the architectural vibe: precise, not bouncy.
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const scaleOut: Variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

/** For list items — parent sets staggerChildren, children use this */
export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

/** Subtle card hover lift */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: 'var(--shadow-sm)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    y: -2,
    boxShadow: 'var(--shadow-lifted)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

/** Interactive element hover lift — alias for cardHover */
export const hoverLift = cardHover

/** Button press */
export const buttonTap = {
  tap: { scale: 0.97 },
}

/** Smooth input focus transition */
export const inputFocus = {
  rest: {
    boxShadow: 'none',
    borderColor: 'var(--color-border-default)',
    transition: { duration: 0.15 },
  },
  focus: {
    boxShadow: 'var(--shadow-focus)',
    borderColor: 'var(--color-accent-500)',
    transition: { duration: 0.15 },
  },
}

/** Page transition */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}
