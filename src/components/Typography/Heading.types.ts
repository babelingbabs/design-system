import type { HTMLAttributes } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
export type HeadingWeight = 'medium' | 'semibold' | 'bold'
export type HeadingColor = 'default' | 'muted' | 'subtle' | 'accent'
export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading level — determines the default element and default size */
  level?: HeadingLevel
  /** Override the visual size independently of the semantic level */
  size?: HeadingSize
  weight?: HeadingWeight
  color?: HeadingColor
  /** Override the rendered element (e.g. render an h1 visually as an h3) */
  as?: HeadingAs
}
