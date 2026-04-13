import type { ReactNode } from 'react'

export interface FormFieldProps {
  /** Label text rendered above the field */
  label?: string
  /** Links the label to a form control via id */
  htmlFor?: string
  /** Helper text rendered below the field */
  helperText?: string
  /** Error message — triggers error styling when provided */
  error?: string
  /** Shows a required asterisk on the label */
  required?: boolean
  /** Applies disabled styling to label and helper text */
  disabled?: boolean
  /** The form control(s) to render */
  children: ReactNode
  className?: string
}
