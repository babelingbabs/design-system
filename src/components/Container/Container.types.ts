import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ContainerAs = 'div' | 'section' | 'main' | 'article'

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Max-width preset for the container */
  size?: ContainerSize
  /** Adds horizontal padding on small screens when true (default) */
  padding?: boolean
  /** Rendered HTML element — use semantic elements to create landmark regions */
  as?: ContainerAs
  /** Content to constrain within the container */
  children?: ReactNode
}
