import type { HTMLAttributes } from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerSpacing = 'sm' | 'md' | 'lg'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation
  decorative?: boolean
  label?: string
  spacing?: DividerSpacing
}
