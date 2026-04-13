import type { InputHTMLAttributes, ReactNode } from 'react'

export type CheckboxSize = 'sm' | 'md'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Visible label rendered beside the checkbox */
  label?: ReactNode
  /** Helper text rendered below the label */
  helperText?: string
  /** Error message — triggers error state when provided */
  error?: string
  /** Visual size of the checkbox */
  size?: CheckboxSize
  /** Shows a dash instead of a checkmark to indicate partial selection */
  indeterminate?: boolean
}
