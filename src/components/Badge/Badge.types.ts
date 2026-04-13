import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color and semantic style of the badge */
  variant?: BadgeVariant
  /** Visual size of the badge */
  size?: BadgeSize
  /** Optional dot indicator before the label */
  dot?: boolean
  /** Badge label — keep to 1–3 words or a short number */
  children: ReactNode
}
