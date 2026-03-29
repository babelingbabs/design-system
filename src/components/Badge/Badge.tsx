import React from 'react'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'accent'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  /** Render as a dot indicator with no text */
  dot?: boolean
  /** Leading icon */
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; dot: string }> = {
  default: {
    bg:   'var(--color-bg-muted)',
    text: 'var(--color-fg-secondary)',
    dot:  'var(--color-fg-tertiary)',
  },
  success: {
    bg:   'var(--color-success-bg)',
    text: 'var(--color-success)',
    dot:  'var(--color-success)',
  },
  warning: {
    bg:   'var(--color-warning-bg)',
    text: 'var(--color-warning)',
    dot:  'var(--color-warning)',
  },
  error: {
    bg:   'var(--color-error-bg)',
    text: 'var(--color-error)',
    dot:  'var(--color-error)',
  },
  info: {
    bg:   'var(--color-info-bg)',
    text: 'var(--color-info)',
    dot:  'var(--color-info)',
  },
  accent: {
    bg:   'var(--color-accent-100)',
    text: 'var(--color-accent-600)',
    dot:  'var(--color-accent-500)',
  },
}

const sizeStyles: Record<BadgeSize, { badge: React.CSSProperties; dot: React.CSSProperties; fontSize: string; gap: string }> = {
  sm: {
    badge:    { padding: '1px 6px', height: '18px' },
    dot:      { width: '5px', height: '5px' },
    fontSize: '0.6875rem', // caption2 — 11px
    gap:      '4px',
  },
  md: {
    badge:    { padding: '2px 8px', height: '22px' },
    dot:      { width: '6px', height: '6px' },
    fontSize: '0.75rem',   // caption1 — 12px
    gap:      '5px',
  },
}

export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  icon,
  children,
  className = '',
  style: styleProp,
}: BadgeProps) {
  const colors = variantStyles[variant]
  const sizing = sizeStyles[size]

  // Pure dot — no text
  if (dot) {
    return (
      <span
        className={className}
        style={{
          display: 'inline-block',
          width: sizing.dot.width,
          height: sizing.dot.height,
          borderRadius: '9999px',
          backgroundColor: colors.dot,
          flexShrink: 0,
          ...styleProp,
        }}
        aria-hidden
      />
    )
  }

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sizing.gap,
        ...sizing.badge,
        borderRadius: '9999px',
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: 'var(--font-sans)',
        fontSize: sizing.fontSize,
        fontWeight: '500',
        letterSpacing: '0px',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        ...styleProp,
      }}
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {icon}
        </span>
      )}
      {children}
    </span>
  )
}
