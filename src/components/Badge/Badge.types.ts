import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  /** Optional dot indicator before the label */
  dot?: boolean
  children: ReactNode
}
