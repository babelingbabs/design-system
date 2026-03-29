import React from 'react'
import type { TextStyleKey } from '../../tokens/typography'
import { textStyle } from '../../tokens/typography'

// ─── Semantic Text Component ─────────────────────────
// Maps directly to Apple's iOS 26 type scale via textStyle tokens.

interface TypographyProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

// ─── Headings (mapped to Apple type scale) ───────────

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

/**
 * Heading → Apple type scale mapping:
 *   h1 → largeTitle (34px, 400)
 *   h2 → title1 (28px, 400)
 *   h3 → title2 (22px, 400)
 *   h4 → title3 (20px, 400)
 *   h5 → headline (17px, 600)
 *   h6 → callout (16px, 400)
 */
const headingTokens: Record<HeadingLevel, TextStyleKey> = {
  h1: 'largeTitle',
  h2: 'title1',
  h3: 'title2',
  h4: 'title3',
  h5: 'headline',
  h6: 'callout',
}

function createHeading(level: HeadingLevel) {
  const Component = ({ children, className = '', style: styleProp }: TypographyProps) => {
    const token = textStyle[headingTokens[level]]
    return React.createElement(
      level,
      {
        className: `text-[var(--color-fg-primary)] ${className}`.trim(),
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: token.fontSize,
          fontWeight: token.fontWeight,
          lineHeight: token.lineHeight,
          letterSpacing: token.letterSpacing,
          ...styleProp,
        },
      },
      children
    )
  }
  Component.displayName = `Typography.${level.toUpperCase()}`
  return Component
}

export const H1 = createHeading('h1')
export const H2 = createHeading('h2')
export const H3 = createHeading('h3')
export const H4 = createHeading('h4')
export const H5 = createHeading('h5')
export const H6 = createHeading('h6')

// ─── Body Text ───────────────────────────────────────

interface TextProps extends TypographyProps {
  /** Apple type scale variant (preferred) */
  variant?: 'body' | 'callout' | 'subhead' | 'footnote'
  /** @deprecated Use variant instead. Kept for backward compatibility. */
  size?: 'lg' | 'base' | 'sm' | 'xs'
  secondary?: boolean
  muted?: boolean
}

const textVariantTokens: Record<NonNullable<TextProps['variant']>, TextStyleKey> = {
  body: 'body',
  callout: 'callout',
  subhead: 'subhead',
  footnote: 'footnote',
}

/** Legacy size → variant mapping */
const legacySizeToVariant: Record<string, NonNullable<TextProps['variant']>> = {
  lg: 'callout',
  base: 'body',
  sm: 'subhead',
  xs: 'footnote',
}

export function Text({
  children,
  variant,
  size,
  secondary = false,
  muted = false,
  className = '',
  style: styleProp,
}: TextProps) {
  const resolvedVariant = variant ?? (size ? legacySizeToVariant[size] : 'body')
  const token = textStyle[textVariantTokens[resolvedVariant]]

  const colorVar = muted
    ? 'var(--color-fg-tertiary)'
    : secondary
      ? 'var(--color-fg-secondary)'
      : 'var(--color-fg-primary)'

  return (
    <p
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
        letterSpacing: token.letterSpacing,
        color: colorVar,
        ...styleProp,
      }}
    >
      {children}
    </p>
  )
}
Text.displayName = 'Typography.Text'

// ─── Caption ─────────────────────────────────────────

interface CaptionProps extends TypographyProps {
  /** caption1 (12px) or caption2 (11px) */
  level?: 1 | 2
  muted?: boolean
}

export function Caption({ children, level = 1, muted = true, className = '', style: styleProp }: CaptionProps) {
  const token = level === 2 ? textStyle.caption2 : textStyle.caption1

  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
        letterSpacing: token.letterSpacing,
        color: muted ? 'var(--color-fg-tertiary)' : 'var(--color-fg-secondary)',
        ...styleProp,
      }}
    >
      {children}
    </span>
  )
}
Caption.displayName = 'Typography.Caption'

// ─── Mono Accent ─────────────────────────────────────

interface MonoProps extends TypographyProps {
  /** Maps to footnote (13px), caption1 (12px), or caption2 (11px) */
  size?: 'sm' | 'xs' | '2xs'
  accent?: boolean
}

const monoSizeTokens: Record<NonNullable<MonoProps['size']>, TextStyleKey> = {
  sm: 'footnote',
  xs: 'caption1',
  '2xs': 'caption2',
}

export function Mono({ children, size = 'sm', accent = false, className = '', style: styleProp }: MonoProps) {
  const token = textStyle[monoSizeTokens[size]]
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        letterSpacing: '0.02em',
        color: accent ? 'var(--color-accent-500)' : 'var(--color-fg-secondary)',
        ...styleProp,
      }}
    >
      {children}
    </span>
  )
}
Mono.displayName = 'Typography.Mono'

// ─── Label ───────────────────────────────────────────

interface LabelProps extends TypographyProps {
  htmlFor?: string
  required?: boolean
}

export function Label({ children, htmlFor, required = false, className = '', style: styleProp }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: textStyle.caption2.fontSize,
        fontWeight: '500',
        lineHeight: textStyle.caption2.lineHeight,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: 'var(--color-fg-secondary)',
        ...styleProp,
      }}
    >
      {children}
      {required && (
        <span style={{ marginLeft: '4px', color: 'var(--color-error)' }} aria-hidden>*</span>
      )}
    </label>
  )
}
Label.displayName = 'Typography.Label'

// ─── Lead ────────────────────────────────────────────

export function Lead({ children, className = '', style: styleProp }: TypographyProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: textStyle.title3.fontSize,
        fontWeight: '300',
        lineHeight: textStyle.title3.lineHeight,
        letterSpacing: textStyle.title3.letterSpacing,
        color: 'var(--color-fg-secondary)',
        ...styleProp,
      }}
    >
      {children}
    </p>
  )
}
Lead.displayName = 'Typography.Lead'
