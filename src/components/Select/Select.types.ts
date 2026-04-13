import type { SelectHTMLAttributes } from 'react'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Array of options to render */
  options: SelectOption[]
  /** Visible label rendered above the select */
  label?: string
  /** Helper text rendered below the select */
  helperText?: string
  /** Error message — triggers error state when provided */
  error?: string
  /** Placeholder option shown when no value is selected */
  placeholder?: string
  /** Select size variant */
  size?: SelectSize
  /** Makes the select take full width of its container */
  fullWidth?: boolean
}
