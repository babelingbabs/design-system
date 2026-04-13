import type { LabelHTMLAttributes } from 'react'

export type LabelSize = 'sm' | 'md'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Links the label to a form control */
  htmlFor?: string
  /** Shows a red asterisk to indicate required */
  required?: boolean
  /** Font size scale */
  size?: LabelSize
  /** Muted color, typically mirrors the associated input's disabled state */
  disabled?: boolean
}
