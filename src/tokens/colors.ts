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
