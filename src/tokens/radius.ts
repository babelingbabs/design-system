/**
 * Border radius tokens
 * Minimal. 4–8px max. Clean edges.
 */

export const radius = {
  none: '0px',
  xs:   '2px',
  sm:   '4px',
  md:   '6px',
  lg:   '8px',
  xl:   '12px',
  full: '9999px',
} as const

export type RadiusToken = typeof radius
