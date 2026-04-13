import type { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'border' | 'shadow' | 'ghost'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  /** Hoverable: adds lift animation on hover */
  hoverable?: boolean
  /** Optional header content */
  header?: ReactNode
  /** Optional footer content */
  footer?: ReactNode
  /** Optional media slot (rendered above content, edge-to-edge) */
  media?: ReactNode
  children?: ReactNode
}
