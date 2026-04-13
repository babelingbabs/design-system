import type { HTMLAttributes } from 'react'

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type TextColor = 'default' | 'muted' | 'subtle' | 'accent' | 'error'
export type TextAlign = 'left' | 'center' | 'right'
export type TextAs = 'span' | 'p' | 'div'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Font size using typography scale */
  size?: TextSize
  /** Font weight */
  weight?: TextWeight
  /** Semantic color */
  color?: TextColor
  /** Rendered HTML element */
  as?: TextAs
  /** Text alignment */
  align?: TextAlign
  /** Single-line truncation with ellipsis */
  truncate?: boolean
}
