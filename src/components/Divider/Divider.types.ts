import type { HTMLAttributes } from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerSpacing = 'sm' | 'md' | 'lg'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Axis of the dividing line */
  orientation?: DividerOrientation
  /** When true, hides the divider from the accessibility tree — use for purely visual separators */
  decorative?: boolean
  /** Optional centered label text rendered within the divider line */
  label?: string
  /** Vertical margin above and below the divider */
  spacing?: DividerSpacing
}
