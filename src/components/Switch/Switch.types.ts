import type { InputHTMLAttributes, ReactNode } from 'react'

export type SwitchSize = 'sm' | 'md' | 'lg'
export type SwitchLabelPosition = 'left' | 'right'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Visible label rendered beside the switch */
  label?: ReactNode
  /** Position of the label relative to the switch track */
  labelPosition?: SwitchLabelPosition
  /** Visual size of the switch */
  size?: SwitchSize
}
