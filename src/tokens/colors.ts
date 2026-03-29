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
    tertiary: '#8A8A8A',  // placeholder, captions
    disabled: '#BBBBBB',  // disabled states
    inverse: '#FAFAFA',   // text on dark backgrounds
  },

  // Borders / dividers
  border: {
    subtle: '#E8E8E8',    // hairline borders, grid lines
    default: '#D4D4D4',   // standard border
    strong: '#AAAAAA',    // emphasized border
  },

  // Accent — muted architectural blue-gray
  accent: {
    50:  '#F0F4F8',
    100: '#D9E4EE',
    200: '#B3C9DD',
    300: '#8DAECC',
    400: '#6793BB',
    500: '#4A7BA7', // primary accent
    600: '#3B6286',
    700: '#2C4A65',
    800: '#1E3144',
    900: '#0F1922',
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
    tertiary:  '#636366', // iOS tertiaryLabel dark
    disabled:  '#3A3A3C', // iOS quaternaryLabel dark
    inverse:   '#000000', // text on light bg
  },

  // Borders — iOS separator scale dark
  border: {
    subtle:  '#38383A', // iOS opaqueSeparator dark
    default: '#48484A', // iOS separator dark
    strong:  '#636366', // emphasized border
  },

  // Accent — shifted 1-2 stops lighter for dark background contrast
  accent: {
    50:  '#0D1B26',
    100: '#1A3347',
    200: '#264C68',
    300: '#336589',
    400: '#4A7BA7',
    500: '#6793BB', // primary accent on dark (1 stop lighter)
    600: '#8DAECC',
    700: '#B3C9DD',
    800: '#D9E4EE',
    900: '#F0F4F8',
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
