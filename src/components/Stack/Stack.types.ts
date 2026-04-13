import type { HTMLAttributes, ReactNode, ElementType } from 'react'

export type StackDirection = 'horizontal' | 'vertical'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type StackAs = 'div' | 'section' | 'nav' | 'ul' | 'ol'
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24

export interface StackProps extends HTMLAttributes<HTMLElement> {
  direction?: StackDirection
  gap?: StackGap
  align?: StackAlign
  justify?: StackJustify
  wrap?: boolean
  as?: StackAs | ElementType
  children?: ReactNode
}
