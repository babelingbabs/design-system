/**
 * Shadow tokens
 * Barely-there. Apple-style depth — you feel it more than see it.
 */

export const shadows = {
  none: 'none',
  xs:   '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
  sm:   '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
  md:   '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
  lg:   '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  xl:   '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
  // Lifted state for interactive cards
  lifted: '0 8px 24px -4px rgba(0, 0, 0, 0.10), 0 4px 8px -4px rgba(0, 0, 0, 0.06)',
  // Focus ring
  focus: '0 0 0 3px rgba(74, 123, 167, 0.25)',
  // Inner shadow for inputs
  inner: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
} as const

export type ShadowToken = typeof shadows
