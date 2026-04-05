import React from 'react'
import { heading, label, copy } from '../../tokens/typography'
import type { HeadingSize, LabelSize, CopySize } from '../../tokens/typography'

// ─── Shared base ─────────────────────────────────────

interface BaseProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

// ─── Heading ─────────────────────────────────────────

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends BaseProps {
  level?: HeadingLevel
  /** Override size. Defaults: h1→48, h2→32, h3→24, h4→20, h5→16, h6→14 */
  size?: HeadingSize
}

const defaultHeadingSize: Record<HeadingLevel, HeadingSize> = {
  h1: 48, h2: 32, h3: 24, h4: 20, h5: 16, h6: 14,
}

export function Heading({ level = 'h2', size, children, className = '', style: styleProp }: HeadingProps) {
  const resolvedSize = size ?? defaultHeadingSize[level]
  const token = heading[resolvedSize]
  const Tag = level
  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
        letterSpacing: token.letterSpacing,
        color: 'var(--color-fg-primary)',
        margin: 0,
        ...styleProp,
      }}
    >
      {children}
    </Tag>
  )
}
Heading.displayName = 'Typography.Heading'

// ─── H1–H6 shorthands ────────────────────────────────

type HeadingShorthandProps = Omit<HeadingProps, 'level'>

function createHeadingShorthand(level: HeadingLevel) {
  function Component(props: HeadingShorthandProps) {
    return <Heading level={level} {...props} />
  }
  Component.displayName = `Typography.${level.toUpperCase()}`
  return Component
}

export const H1 = createHeadingShorthand('h1')
export const H2 = createHeadingShorthand('h2')
export const H3 = createHeadingShorthand('h3')
export const H4 = createHeadingShorthand('h4')
export const H5 = createHeadingShorthand('h5')
export const H6 = createHeadingShorthand('h6')

// ─── Copy ────────────────────────────────────────────

export interface CopyProps extends BaseProps {
  /** Font size in px (as number token). Default: 14 */
  size?: CopySize
  /** Override font weight */
  weight?: string
  secondary?: boolean
  muted?: boolean
  /** Render with monospace font */
  mono?: boolean
}

export function Copy({
  size = 14,
  weight,
  secondary = false,
  muted = false,
  mono = false,
  children,
  className = '',
  style: styleProp,
}: CopyProps) {
  const token = copy[size]
  const colorVar = muted
    ? 'var(--color-fg-tertiary)'
    : secondary
      ? 'var(--color-fg-secondary)'
      : 'var(--color-fg-primary)'

  return (
    <p
      className={className}
      style={{
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontSize: token.fontSize,
        fontWeight: weight ?? token.fontWeight,
        lineHeight: token.lineHeight,
        letterSpacing: token.letterSpacing,
        color: colorVar,
        margin: 0,
        ...styleProp,
      }}
    >
      {children}
    </p>
  )
}
Copy.displayName = 'Typography.Copy'

// ─── Text (backward-compat alias for Copy) ───────────

type LegacyTextSize = 'lg' | 'base' | 'sm' | 'xs'
type LegacyTextVariant = 'body' | 'callout' | 'subhead' | 'footnote'

export interface TextProps extends BaseProps {
  /** @deprecated Use Copy with numeric size instead */
  variant?: LegacyTextVariant
  /** Numeric CopySize or legacy string alias (lg|base|sm|xs) */
  size?: CopySize | LegacyTextSize
  secondary?: boolean
  muted?: boolean
}

const legacySizeMap: Record<LegacyTextSize, CopySize> = {
  lg: 16, base: 14, sm: 13, xs: 13,
}

const legacyVariantMap: Record<LegacyTextVariant, CopySize> = {
  body: 14, callout: 16, subhead: 13, footnote: 13,
}

export function Text({ size, variant, secondary, muted, children, className, style }: TextProps) {
  let resolvedSize: CopySize = 14
  if (size !== undefined) {
    resolvedSize = typeof size === 'string'
      ? (legacySizeMap[size as LegacyTextSize] ?? 14)
      : size
  } else if (variant) {
    resolvedSize = legacyVariantMap[variant] ?? 14
  }
  return (
    <Copy size={resolvedSize} secondary={secondary} muted={muted} className={className} style={style}>
      {children}
    </Copy>
  )
}
Text.displayName = 'Typography.Text'

// ─── Label ───────────────────────────────────────────

export interface LabelProps extends BaseProps {
  htmlFor?: string
  required?: boolean
  /** Font size in px (as number token). Default: 14 */
  size?: LabelSize
  /** Use monospace font (label-{size}-mono token) */
  mono?: boolean
  /** Bump font-weight to semibold */
  strong?: boolean
  /** Force uppercase. Auto-applied at size 12. */
  uppercase?: boolean
}

function getLabelToken(size: LabelSize, mono: boolean) {
  if (mono) {
    if (size === 14) return label['14-mono']
    if (size === 13) return label['13-mono']
    if (size === 12) return label['12-mono']
  }
  return label[size]
}

export function Label({
  size = 14,
  mono = false,
  strong = false,
  uppercase,
  htmlFor,
  required = false,
  children,
  className = '',
  style: styleProp,
}: LabelProps) {
  const token = getLabelToken(size, mono)
  const isUppercase = uppercase ?? (size === 12 && !mono)

  return (
    <label
      htmlFor={htmlFor}
      className={className}
      style={{
        fontFamily: token.mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontSize: token.fontSize,
        fontWeight: strong ? '600' : token.fontWeight,
        lineHeight: token.lineHeight,
        letterSpacing: isUppercase ? '0.04em' : token.letterSpacing,
        textTransform: isUppercase ? 'uppercase' : undefined,
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

// ─── Mono ────────────────────────────────────────────

type MonoSize = 14 | 13 | 12
type LegacyMonoSize = 'sm' | 'xs' | '2xs'

export interface MonoProps extends BaseProps {
  /** Font size: 14|13|12. Legacy: sm|xs|2xs */
  size?: MonoSize | LegacyMonoSize
  accent?: boolean
}

const legacyMonoSizeMap: Record<LegacyMonoSize, MonoSize> = {
  sm: 13, xs: 12, '2xs': 12,
}

function getMonoToken(size: MonoSize) {
  if (size === 14) return label['14-mono']
  if (size === 13) return label['13-mono']
  return label['12-mono']
}

export function Mono({ size = 13, accent = false, children, className = '', style: styleProp }: MonoProps) {
  const resolvedSize: MonoSize = typeof size === 'string'
    ? legacyMonoSizeMap[size as LegacyMonoSize]
    : size
  const token = getMonoToken(resolvedSize)

  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
        letterSpacing: token.letterSpacing,
        color: accent ? 'var(--color-accent-500)' : 'var(--color-fg-secondary)',
        ...styleProp,
      }}
    >
      {children}
    </span>
  )
}
Mono.displayName = 'Typography.Mono'

// ─── Caption (backward compat → Label size 12|13) ────

export interface CaptionProps extends BaseProps {
  /** 1 → label-13, 2 → label-12 */
  level?: 1 | 2
  muted?: boolean
}

export function Caption({ children, level = 1, muted = true, className = '', style: styleProp }: CaptionProps) {
  const size: LabelSize = level === 2 ? 12 : 13
  const token = label[size]

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

// ─── Lead (backward compat → Copy size 20) ───────────

export function Lead({ children, className = '', style: styleProp }: BaseProps) {
  return (
    <Copy size={20} weight="300" secondary className={className} style={styleProp}>
      {children}
    </Copy>
  )
}
Lead.displayName = 'Typography.Lead'
