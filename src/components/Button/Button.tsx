import React from 'react'
import { motion } from 'framer-motion'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Icon-only button — renders square, hides label from layout */
  iconOnly?: boolean
  /** Leading icon */
  icon?: React.ReactNode
  /** Trailing icon */
  trailingIcon?: React.ReactNode
  loading?: boolean
  children?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-accent-500)]
    text-white
    border border-[var(--color-accent-600)]
    hover:bg-[var(--color-accent-600)]
    active:bg-[var(--color-accent-700)]
    disabled:bg-[var(--color-fg-disabled)]
    disabled:border-[var(--color-fg-disabled)]
    disabled:text-white
  `,
  secondary: `
    bg-[var(--color-bg-subtle)]
    text-[var(--color-fg-primary)]
    border border-[var(--color-border-default)]
    hover:bg-[var(--color-bg-muted)]
    hover:border-[var(--color-border-strong)]
    active:bg-[var(--color-bg-muted)]
    disabled:text-[var(--color-fg-disabled)]
    disabled:border-[var(--color-border-subtle)]
  `,
  ghost: `
    bg-transparent
    text-[var(--color-fg-secondary)]
    border border-transparent
    hover:bg-[var(--color-bg-subtle)]
    hover:text-[var(--color-fg-primary)]
    active:bg-[var(--color-bg-muted)]
    disabled:text-[var(--color-fg-disabled)]
  `,
  danger: `
    bg-[var(--color-error-bg)]
    text-[var(--color-error)]
    border border-[var(--color-error-bg)]
    hover:bg-[var(--color-error)]
    hover:text-white
    hover:border-[var(--color-error)]
    active:opacity-90
    disabled:opacity-50
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-7 px-3 text-xs gap-1.5',
  md: 'h-9 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-base gap-2.5',
}

const iconOnlySizeStyles: Record<ButtonSize, string> = {
  sm: 'h-7 w-7 p-0',
  md: 'h-9 w-9 p-0',
  lg: 'h-11 w-11 p-0',
}

const iconSizes: Record<ButtonSize, number> = {
  sm: 12,
  md: 14,
  lg: 16,
}

export function Button({
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  icon,
  trailingIcon,
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <motion.button
      whileTap={isDisabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.1 }}
      disabled={isDisabled}
      className={`
        inline-flex items-center justify-center
        font-medium
        rounded-[var(--radius-md)]
        transition-colors duration-150
        cursor-pointer
        select-none
        focus-visible:outline-none
        focus-visible:shadow-[var(--shadow-focus)]
        disabled:cursor-not-allowed
        ${iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      style={{ fontFamily: 'var(--font-sans)' }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {loading ? (
        <Spinner size={iconSizes[size]} />
      ) : (
        <>
          {icon && <span className="shrink-0">{icon}</span>}
          {!iconOnly && children && <span>{children}</span>}
          {iconOnly && <span className="sr-only">{children}</span>}
          {trailingIcon && !iconOnly && (
            <span className="shrink-0">{trailingIcon}</span>
          )}
        </>
      )}
    </motion.button>
  )
}

function Spinner({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="animate-spin"
      aria-hidden
    >
      <circle
        cx="8" cy="8" r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.25"
      />
      <path
        d="M14 8a6 6 0 0 0-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
