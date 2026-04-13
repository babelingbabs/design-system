import type { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label rendered above the input */
  label?: string
  /** Helper text rendered below the input */
  helperText?: string
  /** Error message — triggers error state when provided */
  error?: string
  /** Icon or element rendered on the left inside the input */
  leadingIcon?: ReactNode
  /** Icon or element rendered on the right inside the input */
  trailingIcon?: ReactNode
  /** Text/element rendered as a left addon (outside the input border) */
  leadingAddon?: ReactNode
  /** Text/element rendered as a right addon (outside the input border) */
  trailingAddon?: ReactNode
  /** Input size variant */
  inputSize?: 'sm' | 'md' | 'lg'
  /** Makes the input take full width of its container */
  fullWidth?: boolean
}
