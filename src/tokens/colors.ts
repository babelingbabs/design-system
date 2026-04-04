/**
 * Color tokens
 * Light mode primary. Dark mode inverts elegantly.
 * Architectural palette: off-whites, near-blacks, muted accent.
 */

export const colors = {
  // Backgrounds — light, layered surfaces
  background: {
    base: '#FAFAFA',      // page background
    subtle: '#F5F5F5',    // slightly elevated surface
    muted: '#EFEFEF',     // recessed / input bg
    inverse: '#1A1A1A',   // dark bg for contrast blocks
  },

  // Foreground / text
  foreground: {
    primary: '#1A1A1A',   // near-black, primary text
    secondary: '#555555', // secondary text
    tertiary: '#707070',  // placeholder, captions — WCAG AA 4.74:1 on bg.base
    disabled: '#BBBBBB',  // disabled states
    inverse: '#FAFAFA',   // text on dark backgrounds
  },

  // Borders / dividers
  border: {
    subtle: '#C7C7CC',    // decorative borders, hairlines
    default: '#8F8F8F',   // functional border — WCAG 3:1 on bg.base
    strong: '#6E6E6E',    // emphasized border — 4.9:1 on bg.base
  },

  // Accent — Apple Blue (#007AFF) as primary CTA
  accent: {
    50:  '#EBF5FF',
    100: '#CCE4FF',
    200: '#99C9FF',
    300: '#66AEFF',
    400: '#3393FF',
    500: '#007AFF', // Apple Blue — primary CTA
    600: '#0062CC',
    700: '#004A99',
    800: '#003166',
    900: '#001933',
  },

  // Semantic
  semantic: {
    success: '#2D6A4F',
    successBg: '#D8F3DC',
    warning: '#7B5800',
    warningBg: '#FFF3CD',
    error: '#9B1D20',
    errorBg: '#FCDCDC',
    info: '#1A4A6E',
    infoBg: '#D6EAF8',
  },
} as const

export type ColorToken = typeof colors

/**
 * Dark mode colors — Apple HIG inspired.
 * True black base for OLED. Elevated surfaces step up via iOS system grays.
 * Accent scale inverted: lighter stops for contrast on dark.
 */
export const darkColors = {
  // Backgrounds — OLED black + iOS system grays
  background: {
    base:    '#000000', // true black (OLED)
    subtle:  '#1C1C1E', // iOS systemGray6 — elevated surface
    muted:   '#2C2C2E', // iOS systemGray5 — recessed / input bg
    inverse: '#F5F5F5', // inverse (light) surface
  },

  // Foreground — Apple dark text hierarchy
  foreground: {
    primary:   '#FFFFFF', // pure white primary
    secondary: '#ADADAD', // iOS secondaryLabel dark
    tertiary:  '#929292', // tertiary text — WCAG AA 4.48:1 on bg.muted
    disabled:  '#3A3A3C', // iOS quaternaryLabel dark
    inverse:   '#000000', // text on light bg
  },

  // Borders — iOS separator scale dark
  border: {
    subtle:  '#48484A', // decorative separator
    default: '#676767', // functional border — WCAG 3:1 on bg.subtle
    strong:  '#929292', // emphasized border — 4.5:1 on bg.muted
  },

  // Accent — Apple Blue dark variant (#0A84FF), scale shifted lighter
  accent: {
    50:  '#001A33',
    100: '#002B57',
    200: '#004C99',
    300: '#006DDC',
    400: '#0A84FF', // Apple Blue dark — brighter for contrast
    500: '#0A84FF', // primary accent on dark
    600: '#3D9EFF',
    700: '#70B8FF',
    800: '#A3D1FF',
    900: '#D6EBFF',
  },

  // Semantic — elevated for dark background legibility
  semantic: {
    success:   '#52B788',
    successBg: '#1A3D2B',
    warning:   '#F4A52B',
    warningBg: '#3D2E00',
    error:     '#E57373',
    errorBg:   '#3D1515',
    info:      '#64B5F6',
    infoBg:    '#0D2A3D',
  },
} as const

export type DarkColorToken = typeof darkColors

/**
 * Apple iOS system colors — 12 chromatic colors.
 * Light and dark variants from Apple HIG + Figma kit.
 */
export const systemColors = {
  red:    { light: '#FF3B30', dark: '#FF453A' },
  orange: { light: '#FF9500', dark: '#FF9F0A' },
  yellow: { light: '#FFCC00', dark: '#FFD60A' },
  green:  { light: '#34C759', dark: '#30D158' },
  mint:   { light: '#00C7BE', dark: '#63E6E2' },
  teal:   { light: '#30B0C7', dark: '#40CBE0' },
  cyan:   { light: '#32ADE6', dark: '#64D2FF' },
  blue:   { light: '#007AFF', dark: '#0A84FF' },
  indigo: { light: '#5856D6', dark: '#5E5CE6' },
  purple: { light: '#AF52DE', dark: '#BF5AF2' },
  pink:   { light: '#FF2D55', dark: '#FF375F' },
  brown:  { light: '#A2845E', dark: '#AC8E68' },
} as const

/**
 * Apple iOS system grays — 6 steps from mid-gray to near-white/near-black.
 * Light and dark variants invert the scale.
 */
export const systemGray = {
  1: { light: '#8E8E93', dark: '#8E8E93' },
  2: { light: '#AEAEB2', dark: '#636366' },
  3: { light: '#C7C7CC', dark: '#48484A' },
  4: { light: '#D1D1D6', dark: '#3A3A3C' },
  5: { light: '#E5E5EA', dark: '#2C2C2E' },
  6: { light: '#F2F2F7', dark: '#1C1C1E' },
} as const

export type SystemColorToken = typeof systemColors
export type SystemGrayToken = typeof systemGray
