import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** BreadcrumbItem elements */
  children: ReactNode
  /** Custom separator rendered between items — defaults to "/" */
  separator?: ReactNode
  /** Collapse breadcrumbs longer than this count, showing a "…" in the middle */
  maxItems?: number
}

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** URL for the breadcrumb link — omit for the current (last) item */
  href?: string
  /** Marks this item as the current page — removes link and adds aria-current="page" */
  current?: boolean
  /** Label text for the breadcrumb item */
  children: ReactNode
}
