import type { HTMLAttributes, ReactNode, ElementType } from 'react'

export type StackDirection = 'horizontal' | 'vertical'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type StackAs = 'div' | 'section' | 'nav' | 'ul' | 'ol'
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Flex direction — vertical stacks items in a column, horizontal in a row */
  direction?: StackDirection
  /** Spacing between children using the design token scale */
  gap?: StackGap
  /** Cross-axis alignment (align-items) */
  align?: StackAlign
  /** Main-axis distribution (justify-content) */
  justify?: StackJustify
  /** Allow items to wrap to the next line when the stack overflows */
  wrap?: boolean
  /** Rendered HTML element — use semantic elements for proper document structure */
  as?: StackAs | ElementType
  /** Items to arrange in the stack */
  children?: ReactNode
}
