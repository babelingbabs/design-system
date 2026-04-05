/**
 * Typography tokens
 * Geist-inspired type scale with system font stack.
 * Structure: heading | button | label | copy
 *
 * Font stack: SF Pro via system fonts (sans), JetBrains Mono (mono).
 * Do NOT reference or install Geist font — system stack only.
 */

export const fontFamily = {
  sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'system-ui', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(', '),
  mono: ['JetBrains Mono', 'Fira Code', '"SF Mono"', 'Consolas', 'monospace'].join(', '),
} as const

export const fontWeight = {
  light:    '300',
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const

// ─── Heading ─────────────────────────────────────────
// Used to introduce pages and sections.

export const heading = {
  72: { fontSize: '4.5rem',    lineHeight: 1.1,  letterSpacing: '-0.04em',  fontWeight: '700' },
  64: { fontSize: '4rem',      lineHeight: 1.1,  letterSpacing: '-0.04em',  fontWeight: '700' },
  56: { fontSize: '3.5rem',    lineHeight: 1.1,  letterSpacing: '-0.04em',  fontWeight: '700' },
  48: { fontSize: '3rem',      lineHeight: 1.1,  letterSpacing: '-0.035em', fontWeight: '700' },
  40: { fontSize: '2.5rem',    lineHeight: 1.15, letterSpacing: '-0.03em',  fontWeight: '700' },
  32: { fontSize: '2rem',      lineHeight: 1.2,  letterSpacing: '-0.025em', fontWeight: '600' },
  24: { fontSize: '1.5rem',    lineHeight: 1.25, letterSpacing: '-0.02em',  fontWeight: '600' },
  20: { fontSize: '1.25rem',   lineHeight: 1.3,  letterSpacing: '-0.015em', fontWeight: '600' },
  16: { fontSize: '1rem',      lineHeight: 1.4,  letterSpacing: '-0.01em',  fontWeight: '600' },
  14: { fontSize: '0.875rem',  lineHeight: 1.4,  letterSpacing: '0',        fontWeight: '600' },
} as const

// ─── Button ──────────────────────────────────────────
// Only for button components.

export const button = {
  16: { fontSize: '1rem',     lineHeight: 1.5, letterSpacing: '0', fontWeight: '500' },
  14: { fontSize: '0.875rem', lineHeight: 1.5, letterSpacing: '0', fontWeight: '500' },
  12: { fontSize: '0.75rem',  lineHeight: 1.5, letterSpacing: '0', fontWeight: '500' },
} as const

// ─── Label ───────────────────────────────────────────
// Single-line text with ample line-height for icon alignment.

export const label = {
  20:         { fontSize: '1.25rem',   lineHeight: 1.6, letterSpacing: '0',       fontWeight: '400', mono: false },
  18:         { fontSize: '1.125rem',  lineHeight: 1.6, letterSpacing: '0',       fontWeight: '400', mono: false },
  16:         { fontSize: '1rem',      lineHeight: 1.6, letterSpacing: '0',       fontWeight: '500', mono: false },
  14:         { fontSize: '0.875rem',  lineHeight: 1.6, letterSpacing: '0',       fontWeight: '500', mono: false },
  '14-mono':  { fontSize: '0.875rem',  lineHeight: 1.6, letterSpacing: '0',       fontWeight: '400', mono: true  },
  13:         { fontSize: '0.8125rem', lineHeight: 1.6, letterSpacing: '0',       fontWeight: '500', mono: false },
  '13-mono':  { fontSize: '0.8125rem', lineHeight: 1.6, letterSpacing: '0',       fontWeight: '400', mono: true  },
  12:         { fontSize: '0.75rem',   lineHeight: 1.6, letterSpacing: '0.04em',  fontWeight: '500', mono: false },
  '12-mono':  { fontSize: '0.75rem',   lineHeight: 1.6, letterSpacing: '0',       fontWeight: '400', mono: true  },
} as const

// ─── Copy ────────────────────────────────────────────
// Multi-line text with higher line-height for readability.

export const copy = {
  24:         { fontSize: '1.5rem',    lineHeight: 1.6,  letterSpacing: '-0.01em',  fontWeight: '400', mono: false },
  20:         { fontSize: '1.25rem',   lineHeight: 1.6,  letterSpacing: '-0.01em',  fontWeight: '400', mono: false },
  18:         { fontSize: '1.125rem',  lineHeight: 1.6,  letterSpacing: '-0.005em', fontWeight: '400', mono: false },
  16:         { fontSize: '1rem',      lineHeight: 1.6,  letterSpacing: '0',        fontWeight: '400', mono: false },
  14:         { fontSize: '0.875rem',  lineHeight: 1.6,  letterSpacing: '0',        fontWeight: '400', mono: false },
  13:         { fontSize: '0.8125rem', lineHeight: 1.55, letterSpacing: '0',        fontWeight: '400', mono: false },
  '13-mono':  { fontSize: '0.8125rem', lineHeight: 1.55, letterSpacing: '0',        fontWeight: '400', mono: true  },
} as const

// ─── Backward-compatible fontSize map ────────────────
// Maps legacy size keys to font-size values.

export const fontSize = {
  '2xs': '0.6875rem',  // 11px
  xs:    '0.75rem',    // 12px — label-12
  sm:    '0.8125rem',  // 13px — copy-13
  base:  '0.875rem',   // 14px — copy-14
  lg:    '1rem',       // 16px — copy-16
  xl:    '1.25rem',    // 20px — copy-20
  '2xl': '1.5rem',     // 24px — copy-24
  '3xl': '2rem',       // 32px — heading-32
  '4xl': '2.5rem',     // 40px — heading-40
  '5xl': '3rem',       // 48px — heading-48
  '6xl': '3.75rem',    // 60px
} as const

// ─── Barrel export ────────────────────────────────────

export const typography = {
  fontFamily,
  fontWeight,
  heading,
  button,
  label,
  copy,
  fontSize,
} as const

// ─── Types ───────────────────────────────────────────

export type HeadingSize         = keyof typeof heading
export type ButtonTypographySize = keyof typeof button
export type LabelKey            = keyof typeof label
export type CopyKey             = keyof typeof copy

/** Numeric label sizes (sans mono variants) — for component size prop */
export type LabelSize = 20 | 18 | 16 | 14 | 13 | 12
/** Numeric copy sizes (sans mono variant) — for component size prop */
export type CopySize  = 24 | 20 | 18 | 16 | 14 | 13
