/**
 * Typography tokens
 * Inter for body/UI — clean, neutral, Swiss precision.
 * JetBrains Mono for accents, labels, technical details.
 */

export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'].join(', '),
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'].join(', '),
} as const

export const fontSize = {
  '2xs': ['0.625rem', { lineHeight: '1rem' }],    // 10px
  xs:   ['0.75rem',  { lineHeight: '1.125rem' }], // 12px
  sm:   ['0.875rem', { lineHeight: '1.375rem' }], // 14px
  base: ['1rem',     { lineHeight: '1.625rem' }], // 16px
  lg:   ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
  xl:   ['1.25rem',  { lineHeight: '1.875rem' }], // 20px
  '2xl':['1.5rem',   { lineHeight: '2rem' }],     // 24px
  '3xl':['1.875rem', { lineHeight: '2.375rem' }], // 30px
  '4xl':['2.25rem',  { lineHeight: '2.75rem' }],  // 36px
  '5xl':['3rem',     { lineHeight: '3.5rem' }],   // 48px
  '6xl':['3.75rem',  { lineHeight: '4.25rem' }],  // 60px
} as const

export const fontWeight = {
  light:    '300',
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const

export const letterSpacing = {
  tight:   '-0.03em',
  snug:    '-0.015em',
  normal:  '0em',
  wide:    '0.025em',
  wider:   '0.05em',
  widest:  '0.1em',
  mono:    '0.02em', // for monospace accents
} as const

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
} as const
