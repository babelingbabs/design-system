import type { ReactNode } from 'react'

export type RadioDirection = 'vertical' | 'horizontal'

export interface RadioGroupProps {
  /** Currently selected value (controlled) */
  value?: string
  /** Initially selected value (uncontrolled) */
  defaultValue?: string
  /** Called with the new value when selection changes */
  onChange?: (value: string) => void
  /** Shared name attribute for all radios in the group */
  name?: string
  /** Visible legend label above the group */
  label?: string
  /** Helper text rendered below the group */
  helperText?: string
  /** Error message — triggers error state when provided */
  error?: string
  /** Disables all radios in the group */
  disabled?: boolean
  /** Layout direction of the radio items */
  direction?: RadioDirection
  children: ReactNode
  className?: string
}

export interface RadioProps {
  /** The value this radio represents */
  value: string
  /** Visible label for this radio item */
  label?: ReactNode
  /** Disables this individual radio item (overrides group) */
  disabled?: boolean
  className?: string
}

export interface RadioGroupContextValue {
  name: string
  selectedValue: string | undefined
  onChange: (value: string) => void
  disabled: boolean
  hasError: boolean
  groupId: string
}
