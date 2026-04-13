import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ContainerAs = 'div' | 'section' | 'main' | 'article'

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  size?: ContainerSize
  padding?: boolean
  as?: ContainerAs
  children?: ReactNode
}
