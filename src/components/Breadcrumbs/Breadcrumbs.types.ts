import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  separator?: ReactNode
  maxItems?: number
}

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
  current?: boolean
  children: ReactNode
}
