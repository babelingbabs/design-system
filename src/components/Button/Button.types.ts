import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style and intent of the button */
  variant?: ButtonVariant
  /** Size of the button — affects height, padding, and font size */
  size?: ButtonSize
  /** Show loading spinner and disable interaction */
  loading?: boolean
  /** Icon rendered before the label */
  leadingIcon?: ReactNode
  /** Icon rendered after the label */
  trailingIcon?: ReactNode
  /** Render as full-width block */
  fullWidth?: boolean
  /** Button label or content */
  children?: ReactNode
}
