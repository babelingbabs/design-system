/**
 * Motion tokens
 * Extracted from variants.ts — single source of truth for timing and easing.
 * Tuned for the architectural vibe: precise, intentional, not bouncy.
 */

// ─── Duration ──────────────────────────────────────────

export const duration = {
  instant: 0,    // immediate feedback, no animation
  fast:    100,  // micro-interactions (hover state swaps)
  normal:  200,  // standard transitions (fade, scale)
  slow:    300,  // deliberate transitions (slide, page elements)
  glacial: 500,  // large compositional transitions
} as const

/** Duration values as CSS strings (ms) */
export const durationMs = {
  instant: '0ms',
  fast:    '100ms',
  normal:  '200ms',
  slow:    '300ms',
  glacial: '500ms',
} as const

// ─── Easing ────────────────────────────────────────────

/** Raw cubic-bezier arrays — compatible with Framer Motion's `ease` prop */
export const easing = {
  easeIn:  [0.4, 0, 1, 1]            as [number, number, number, number],
  easeOut: [0, 0, 0.2, 1]            as [number, number, number, number],
  spring:  [0.34, 1.56, 0.64, 1]     as [number, number, number, number], // subtle overshoot
  precise: [0.25, 0.46, 0.45, 0.94]  as [number, number, number, number], // architectural slide
} as const

/** CSS cubic-bezier strings for use in custom properties */
export const easingCss = {
  easeIn:  'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  spring:  'cubic-bezier(0.34, 1.56, 0.64, 1)',
  precise: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
} as const

// ─── Framer Motion transition presets ──────────────────

/** Drop-in transition objects for Framer Motion */
export const transition = {
  instant: { duration: duration.instant / 1000 },
  fast:    { duration: duration.fast    / 1000, ease: easing.easeOut },
  normal:  { duration: duration.normal  / 1000, ease: easing.easeOut },
  slow:    { duration: duration.slow    / 1000, ease: easing.precise },
  spring:  { duration: duration.slow    / 1000, ease: easing.spring },
} as const

export const motion = {
  duration,
  durationMs,
  easing,
  easingCss,
  transition,
} as const

export type DurationToken = typeof duration
export type EasingToken = typeof easing
