/**
 * Semantic token layer
 * Maps primitive color tokens to purpose-driven names.
 * Consumers reference semantics — never primitives — for theme-aware code.
 *
 * Categories: surface, content, border, interactive, status
 */

import { colors, darkColors } from './colors'

// ─── Type ──────────────────────────────────────────────

export interface SemanticTokens {
  /** Page and component backgrounds */
  surface: {
    primary:   string // main page background
    secondary: string // cards, panels — slightly elevated
    tertiary:  string // inputs, recessed areas
    inverse:   string // reversed surfaces (dark on light, light on dark)
    overlay:   string // modal backdrop (use with opacity)
  }
  /** Text and icon colors */
  content: {
    primary:   string // body text, headings
    secondary: string // subtext, metadata
    tertiary:  string // placeholders, captions
    disabled:  string // disabled text/icons
    inverse:   string // text on inverse surfaces
    accent:    string // accent-colored text/icons
  }
  /** Dividers, outlines, ring */
  border: {
    subtle:  string // hairline separators
    default: string // standard input/card borders
    strong:  string // emphasized, focus-adjacent
    focus:   string // keyboard focus ring color (use as box-shadow)
  }
  /** Interactive component colors */
  interactive: {
    accent:        string // primary CTA background
    accentHover:   string // hover state
    accentActive:  string // pressed/active state
    accentSubtle:  string // ghost/outline tint background
    accentContent: string // text/icon on accent bg
  }
  /** Status feedback */
  status: {
    success:   string
    successBg: string
    warning:   string
    warningBg: string
    error:     string
    errorBg:   string
    info:      string
    infoBg:    string
  }
}

// ─── Light theme ───────────────────────────────────────

export const lightTheme: SemanticTokens = {
  surface: {
    primary:   colors.background.base,
    secondary: colors.background.subtle,
    tertiary:  colors.background.muted,
    inverse:   colors.background.inverse,
    overlay:   colors.foreground.primary, // used at low opacity
  },
  content: {
    primary:   colors.foreground.primary,
    secondary: colors.foreground.secondary,
    tertiary:  colors.foreground.tertiary,
    disabled:  colors.foreground.disabled,
    inverse:   colors.foreground.inverse,
    accent:    colors.accent[500],
  },
  border: {
    subtle:  colors.border.subtle,
    default: colors.border.default,
    strong:  colors.border.strong,
    focus:   colors.accent[500],
  },
  interactive: {
    accent:        colors.accent[500],
    accentHover:   colors.accent[600],
    accentActive:  colors.accent[700],
    accentSubtle:  colors.accent[50],
    accentContent: colors.foreground.inverse,
  },
  status: {
    success:   colors.semantic.success,
    successBg: colors.semantic.successBg,
    warning:   colors.semantic.warning,
    warningBg: colors.semantic.warningBg,
    error:     colors.semantic.error,
    errorBg:   colors.semantic.errorBg,
    info:      colors.semantic.info,
    infoBg:    colors.semantic.infoBg,
  },
} as const

// ─── Dark theme ────────────────────────────────────────

export const darkTheme: SemanticTokens = {
  surface: {
    primary:   darkColors.background.base,
    secondary: darkColors.background.subtle,
    tertiary:  darkColors.background.muted,
    inverse:   darkColors.background.inverse,
    overlay:   darkColors.foreground.primary,
  },
  content: {
    primary:   darkColors.foreground.primary,
    secondary: darkColors.foreground.secondary,
    tertiary:  darkColors.foreground.tertiary,
    disabled:  darkColors.foreground.disabled,
    inverse:   darkColors.foreground.inverse,
    accent:    darkColors.accent[500],
  },
  border: {
    subtle:  darkColors.border.subtle,
    default: darkColors.border.default,
    strong:  darkColors.border.strong,
    focus:   darkColors.accent[500],
  },
  interactive: {
    accent:        darkColors.accent[500],
    accentHover:   darkColors.accent[600],
    accentActive:  darkColors.accent[700],
    accentSubtle:  darkColors.accent[50],
    accentContent: darkColors.foreground.primary,
  },
  status: {
    success:   darkColors.semantic.success,
    successBg: darkColors.semantic.successBg,
    warning:   darkColors.semantic.warning,
    warningBg: darkColors.semantic.warningBg,
    error:     darkColors.semantic.error,
    errorBg:   darkColors.semantic.errorBg,
    info:      darkColors.semantic.info,
    infoBg:    darkColors.semantic.infoBg,
  },
} as const

export const semanticTokens = {
  light: lightTheme,
  dark: darkTheme,
} as const
