import type { ReactNode } from 'react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  /** Visual style and icon — maps to semantic color tokens */
  variant?: AlertVariant
  /** Bold heading line */
  title?: string
  /** Body content (description) */
  children?: ReactNode
  /** Show an X dismiss button */
  closable?: boolean
  /** Called when the dismiss button is clicked */
  onClose?: () => void
  /** Additional CSS class names */
  className?: string
}
