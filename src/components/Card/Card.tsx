import React from 'react'
import { motion } from 'framer-motion'
import { cardHover } from '../../animations/variants'

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost'

export interface CardProps {
  children: React.ReactNode
  variant?: CardVariant
  /** Enables hover lift animation */
  interactive?: boolean
  /** Remove default padding */
  noPadding?: boolean
  className?: string
  onClick?: () => void
}

export interface CardSectionProps {
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<CardVariant, string> = {
  default: `
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-subtle)]
    shadow-[var(--shadow-sm)]
  `,
  outlined: `
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-default)]
  `,
  elevated: `
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-subtle)]
    shadow-[var(--shadow-md)]
  `,
  ghost: `
    bg-[var(--color-bg-subtle)]
    border border-transparent
  `,
}

export function Card({
  children,
  variant = 'default',
  interactive = false,
  noPadding = false,
  className = '',
  onClick,
}: CardProps) {
  const baseClasses = `
    rounded-[var(--radius-lg)]
    overflow-hidden
    ${noPadding ? '' : 'p-6'}
    ${variantStyles[variant]}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  if (interactive || onClick) {
    return (
      <motion.div
        className={baseClasses}
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={cardHover}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }
            : undefined
        }
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardSectionProps) {
  return (
    <div
      className={`
        px-6 py-4
        border-b border-[var(--color-border-subtle)]
        -mx-6 -mt-6 mb-6
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </div>
  )
}
CardHeader.displayName = 'Card.Header'

export function CardBody({ children, className = '' }: CardSectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
CardBody.displayName = 'Card.Body'

export function CardFooter({ children, className = '' }: CardSectionProps) {
  return (
    <div
      className={`
        px-6 py-4
        border-t border-[var(--color-border-subtle)]
        -mx-6 -mb-6 mt-6
        flex items-center justify-between
        gap-3
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </div>
  )
}
CardFooter.displayName = 'Card.Footer'
