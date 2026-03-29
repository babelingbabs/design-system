/**
 * Spacing tokens
 * 4px base grid — consistent, precise, architectural.
 */

export const spacing = {
  0:   '0px',
  px:  '1px',
  0.5: '2px',
  1:   '4px',
  1.5: '6px',
  2:   '8px',
  3:   '12px',
  4:   '16px',
  6:   '24px',
  8:   '32px',
  12:  '48px',
  16:  '64px',
  24:  '96px',
  32:  '128px',
  48:  '192px',
  64:  '256px',
} as const

export type SpacingToken = typeof spacing
