import React from 'react'
import { motion } from 'framer-motion'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  closable?: boolean
  onClose?: () => void
  className?: string
}

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7v4M8 5.5v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const SuccessIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 2.5L14 13H2L8 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 6.5v3M8 11v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ErrorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

interface VariantConfig {
  borderColor: string
  iconColor: string
  titleColor: string
  bg: string
  defaultIcon: React.ReactNode
  ariaLive: 'polite' | 'assertive'
}

const variantConfig: Record<AlertVariant, VariantConfig> = {
  info: {
    borderColor: 'var(--color-accent-500)',
    iconColor: 'var(--color-accent-600)',
    titleColor: 'var(--color-accent-600)',
    bg: 'var(--color-bg-subtle)',
    defaultIcon: <InfoIcon />,
    ariaLive: 'polite',
  },
  success: {
    borderColor: 'var(--color-success)',
    iconColor: 'var(--color-success)',
    titleColor: 'var(--color-success)',
    bg: 'var(--color-bg-subtle)',
    defaultIcon: <SuccessIcon />,
    ariaLive: 'polite',
  },
  warning: {
    borderColor: 'var(--color-warning)',
    iconColor: 'var(--color-warning)',
    titleColor: 'var(--color-warning)',
    bg: 'var(--color-bg-subtle)',
    defaultIcon: <WarningIcon />,
    ariaLive: 'assertive',
  },
  error: {
    borderColor: 'var(--color-error)',
    iconColor: 'var(--color-error)',
    titleColor: 'var(--color-error)',
    bg: 'var(--color-error-bg)',
    defaultIcon: <ErrorIcon />,
    ariaLive: 'assertive',
  },
}

export function Alert({
  variant = 'info',
  title,
  children,
  icon,
  closable = false,
  onClose,
  className = '',
}: AlertProps) {
  const cfg = variantConfig[variant]
  const renderedIcon = icon ?? cfg.defaultIcon

  return (
    <motion.div
      role="alert"
      aria-live={cfg.ariaLive}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`relative flex items-start gap-3 border border-l-4 rounded-[var(--radius-md)] p-4 ${className}`}
      style={{
        backgroundColor: cfg.bg,
        borderColor: 'var(--color-border-subtle)',
        borderLeftColor: cfg.borderColor,
      }}
    >
      <span className="shrink-0 mt-0.5" style={{ color: cfg.iconColor }}>
        {renderedIcon}
      </span>

      <div className="flex-1 min-w-0">
        {title && (
          <p
            className="text-sm font-semibold leading-snug"
            style={{ fontFamily: 'var(--font-sans)', color: cfg.titleColor, marginBottom: children ? '4px' : 0 }}
          >
            {title}
          </p>
        )}
        {children && (
          <div
            className="text-sm leading-relaxed text-[var(--color-fg-secondary)]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {children}
          </div>
        )}
      </div>

      {closable && (
        <button
          onClick={onClose}
          aria-label="Close alert"
          className="shrink-0 flex items-center justify-center rounded-[var(--radius-md)] p-0.5 text-[var(--color-fg-tertiary)] hover:text-[var(--color-fg-primary)] transition-colors duration-150 focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]"
        >
          <CloseIcon />
        </button>
      )}
    </motion.div>
  )
}
