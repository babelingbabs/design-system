/**
 * Typography tokens
 * Aligned with Apple iOS 26 type scale (SF Pro → Inter).
 * Inter for body/UI — clean, neutral, Swiss precision.
 * JetBrains Mono for accents, labels, technical details.
 *
 * Mapping: SF Pro weight 590 → Inter Semibold (600)
 *          SF Pro weight 510 → Inter Medium (500)
 */

export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'].join(', '),
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'].join(', '),
} as const

/**
 * Type scale — Apple iOS 26 Dynamic Type (Default / Large size class)
 *
 * Each entry: [fontSize, { lineHeight, letterSpacing }]
 * Sizes in rem (base 16px). Letter spacing from Apple's Figma kit.
 */
export const typeScale = {
  /** 11px — smallest labels, timestamps */
  caption2:   ['0.6875rem', { lineHeight: '0.8125rem',  letterSpacing: '0.06px'  }],
  /** 12px — captions, metadata */
  caption1:   ['0.75rem',   { lineHeight: '1rem',       letterSpacing: '0px'     }],
  /** 13px — footnotes, auxiliary text */
  footnote:   ['0.8125rem', { lineHeight: '1.125rem',   letterSpacing: '-0.08px' }],
  /** 15px — secondary content, subheadings */
  subhead:    ['0.9375rem', { lineHeight: '1.25rem',    letterSpacing: '-0.23px' }],
  /** 16px — callouts, emphasized secondary */
  callout:    ['1rem',      { lineHeight: '1.3125rem',  letterSpacing: '-0.31px' }],
  /** 17px — primary reading text */
  body:       ['1.0625rem', { lineHeight: '1.375rem',   letterSpacing: '-0.43px' }],
  /** 17px semibold — emphasized body, list headers */
  headline:   ['1.0625rem', { lineHeight: '1.375rem',   letterSpacing: '-0.43px' }],
  /** 20px — small section titles */
  title3:     ['1.25rem',   { lineHeight: '1.5625rem',  letterSpacing: '-0.45px' }],
  /** 22px — medium section titles */
  title2:     ['1.375rem',  { lineHeight: '1.75rem',    letterSpacing: '-0.26px' }],
  /** 28px — large section titles */
  title1:     ['1.75rem',   { lineHeight: '2.125rem',   letterSpacing: '0.38px'  }],
  /** 34px — hero headings, page titles */
  largeTitle: ['2.125rem',  { lineHeight: '2.5625rem',  letterSpacing: '0.40px'  }],
} as const

/**
 * Legacy fontSize map — kept for backward compatibility.
 * Prefer typeScale for new work.
 */
export const fontSize = {
  '2xs': typeScale.caption2,
  xs:    typeScale.caption1,
  sm:    typeScale.footnote,
  base:  typeScale.body,
  lg:    typeScale.title3,
  xl:    typeScale.title2,
  '2xl': typeScale.title1,
  '3xl': typeScale.largeTitle,
  '4xl': ['2.25rem',  { lineHeight: '2.75rem',   letterSpacing: '0px' }],  // 36px — display
  '5xl': ['3rem',     { lineHeight: '3.5rem',     letterSpacing: '0px' }],  // 48px — display lg
  '6xl': ['3.75rem',  { lineHeight: '4.25rem',    letterSpacing: '0px' }],  // 60px — display xl
} as const

export const fontWeight = {
  light:    '300',
  regular:  '400',
  medium:   '500',  // SF Pro 510
  semibold: '600',  // SF Pro 590
  bold:     '700',
} as const

/**
 * Letter spacing tokens — derived from Apple's type scale.
 * Negative tracking for body text (tighter), positive for display (looser).
 */
export const letterSpacing = {
  tighter: '-0.45px',  // title3, tightest body text
  tight:   '-0.43px',  // body, headline
  snug:    '-0.26px',  // title2, callout range
  normal:  '0px',      // caption1, neutral
  wide:    '0.06px',   // caption2, small labels
  wider:   '0.38px',   // title1
  widest:  '0.40px',   // largeTitle
  mono:    '0.02em',   // monospace accents
} as const

/**
 * Semantic type styles — ready-to-use text presets.
 * Each combines size, weight, lineHeight, and letterSpacing.
 */
export const textStyle = {
  largeTitle:     { fontSize: '2.125rem',  fontWeight: '400', lineHeight: '2.5625rem', letterSpacing: '0.40px'  },
  largeTitleBold: { fontSize: '2.125rem',  fontWeight: '700', lineHeight: '2.5625rem', letterSpacing: '0.40px'  },
  title1:         { fontSize: '1.75rem',   fontWeight: '400', lineHeight: '2.125rem',  letterSpacing: '0.38px'  },
  title1Bold:     { fontSize: '1.75rem',   fontWeight: '700', lineHeight: '2.125rem',  letterSpacing: '0.38px'  },
  title2:         { fontSize: '1.375rem',  fontWeight: '400', lineHeight: '1.75rem',   letterSpacing: '-0.26px' },
  title2Bold:     { fontSize: '1.375rem',  fontWeight: '700', lineHeight: '1.75rem',   letterSpacing: '-0.26px' },
  title3:         { fontSize: '1.25rem',   fontWeight: '400', lineHeight: '1.5625rem', letterSpacing: '-0.45px' },
  title3Semibold: { fontSize: '1.25rem',   fontWeight: '600', lineHeight: '1.5625rem', letterSpacing: '-0.45px' },
  headline:       { fontSize: '1.0625rem', fontWeight: '600', lineHeight: '1.375rem',  letterSpacing: '-0.43px' },
  body:           { fontSize: '1.0625rem', fontWeight: '400', lineHeight: '1.375rem',  letterSpacing: '-0.43px' },
  callout:        { fontSize: '1rem',      fontWeight: '400', lineHeight: '1.3125rem', letterSpacing: '-0.31px' },
  subhead:        { fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.25rem',   letterSpacing: '-0.23px' },
  footnote:       { fontSize: '0.8125rem', fontWeight: '400', lineHeight: '1.125rem',  letterSpacing: '-0.08px' },
  footnoteSemibold: { fontSize: '0.8125rem', fontWeight: '600', lineHeight: '1.125rem', letterSpacing: '-0.08px' },
  caption1:       { fontSize: '0.75rem',   fontWeight: '400', lineHeight: '1rem',      letterSpacing: '0px'     },
  caption1Medium: { fontSize: '0.75rem',   fontWeight: '500', lineHeight: '1rem',      letterSpacing: '0px'     },
  caption2:       { fontSize: '0.6875rem', fontWeight: '400', lineHeight: '0.8125rem', letterSpacing: '0.06px'  },
  caption2Semibold: { fontSize: '0.6875rem', fontWeight: '600', lineHeight: '0.8125rem', letterSpacing: '0.06px' },
} as const

export const typography = {
  fontFamily,
  typeScale,
  fontSize,
  fontWeight,
  letterSpacing,
  textStyle,
} as const

export type TypeScaleKey = keyof typeof typeScale
export type TextStyleKey = keyof typeof textStyle

