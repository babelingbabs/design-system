import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Show loading spinner and disable interaction */
  loading?: boolean
  /** Icon rendered before the label */
  leadingIcon?: ReactNode
  /** Icon rendered after the label */
  trailingIcon?: ReactNode
  /** Render as full-width block */
  fullWidth?: boolean
  children?: ReactNode
}
