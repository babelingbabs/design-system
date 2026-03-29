import React from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TypographyProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

// ─── Headings ────────────────────────────────────────

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'text-5xl font-bold tracking-tight text-[var(--color-fg-primary)] leading-[1.1]',
  h2: 'text-4xl font-semibold tracking-tight text-[var(--color-fg-primary)] leading-[1.15]',
  h3: 'text-3xl font-semibold tracking-snug text-[var(--color-fg-primary)] leading-[1.2]',
  h4: 'text-2xl font-medium tracking-normal text-[var(--color-fg-primary)] leading-[1.3]',
  h5: 'text-xl font-medium tracking-normal text-[var(--color-fg-primary)] leading-[1.4]',
  h6: 'text-lg font-medium tracking-normal text-[var(--color-fg-primary)] leading-[1.5]',
}

function createHeading(level: HeadingLevel) {
  const Component = ({ children, className = '', style }: TypographyProps) => {
    return React.createElement(
      level,
      { className: `${headingStyles[level]} ${className}`.trim(), style },
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
  size?: 'lg' | 'base' | 'sm' | 'xs'
  secondary?: boolean
  muted?: boolean
}

export function Text({
  children,
  size = 'base',
  secondary = false,
  muted = false,
  className = '',
  style,
}: TextProps) {
  const sizeClass = {
    lg:   'text-lg',
    base: 'text-base',
    sm:   'text-sm',
    xs:   'text-xs',
  }[size]

  const colorClass = muted
    ? 'text-[var(--color-fg-tertiary)]'
    : secondary
      ? 'text-[var(--color-fg-secondary)]'
      : 'text-[var(--color-fg-primary)]'

  return (
    <p className={`${sizeClass} ${colorClass} leading-relaxed ${className}`.trim()} style={style}>
      {children}
    </p>
  )
}
Text.displayName = 'Typography.Text'

// ─── Caption ─────────────────────────────────────────

interface CaptionProps extends TypographyProps {
  muted?: boolean
}

export function Caption({ children, muted = true, className = '', style }: CaptionProps) {
  return (
    <span
      className={`
        text-xs
        ${muted ? 'text-[var(--color-fg-tertiary)]' : 'text-[var(--color-fg-secondary)]'}
        leading-normal
        ${className}
      `.trim()}
      style={style}
    >
      {children}
    </span>
  )
}
Caption.displayName = 'Typography.Caption'

// ─── Mono Accent ─────────────────────────────────────

interface MonoProps extends TypographyProps {
  size?: 'sm' | 'xs' | '2xs'
  accent?: boolean
}

export function Mono({ children, size = 'sm', accent = false, className = '', style }: MonoProps) {
  const sizeClass = { sm: 'text-sm', xs: 'text-xs', '2xs': 'text-[0.625rem]' }[size]
  return (
    <span
      className={`
        font-mono
        ${sizeClass}
        tracking-wide
        ${accent ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-fg-secondary)]'}
        ${className}
      `.trim()}
      style={{ fontFamily: 'var(--font-mono)', ...style }}
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

export function Label({ children, htmlFor, required = false, className = '', style }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        text-xs
        font-medium
        tracking-wider
        uppercase
        text-[var(--color-fg-secondary)]
        ${className}
      `.trim()}
      style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', ...style }}
    >
      {children}
      {required && (
        <span className="ml-1 text-[var(--color-error)]" aria-hidden>*</span>
      )}
    </label>
  )
}
Label.displayName = 'Typography.Label'

// ─── Lead ────────────────────────────────────────────

export function Lead({ children, className = '', style }: TypographyProps) {
  return (
    <p
      className={`
        text-xl
        font-light
        text-[var(--color-fg-secondary)]
        leading-relaxed
        ${className}
      `.trim()}
      style={style}
    >
      {children}
    </p>
  )
}
Lead.displayName = 'Typography.Lead'
