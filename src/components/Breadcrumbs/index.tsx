import { forwardRef, Children, isValidElement } from 'react'
import { ChevronRight } from 'lucide-react'
import type { BreadcrumbsProps, BreadcrumbItemProps } from './Breadcrumbs.types'
import styles from './Breadcrumbs.module.css'

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ href, current, children, className, ...rest }, ref) => {
    if (current) {
      return (
        <span
          className={[styles.item, styles.current, className].filter(Boolean).join(' ')}
          aria-current="page"
        >
          {children}
        </span>
      )
    }

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={[styles.item, styles.link, className].filter(Boolean).join(' ')}
          {...rest}
        >
          {children}
        </a>
      )
    }

    return (
      <span className={[styles.item, className].filter(Boolean).join(' ')}>
        {children}
      </span>
    )
  }
)

BreadcrumbItem.displayName = 'BreadcrumbItem'

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      children,
      separator = <ChevronRight size={14} aria-hidden="true" />,
      maxItems,
      className,
      ...rest
    },
    ref
  ) => {
    const childArray = Children.toArray(children).filter(isValidElement)
    const total = childArray.length

    let visibleChildren: typeof childArray

    if (maxItems !== undefined && total > maxItems) {
      // Always show first and last; collapse middle into ellipsis
      const first = childArray[0]
      const last = childArray[total - 1]
      const ellipsis = (
        <span key="ellipsis" className={styles.ellipsis}>
          &hellip;
        </span>
      )
      visibleChildren = [first, ellipsis, last]
    } else {
      visibleChildren = childArray
    }

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={[styles.nav, className].filter(Boolean).join(' ')}
        {...rest}
      >
        <ol className={styles.list}>
          {visibleChildren.map((child, i) => (
            <li key={i} className={styles.listItem}>
              {child}
              {i < visibleChildren.length - 1 && (
                <span className={styles.separator} aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }
)

Breadcrumbs.displayName = 'Breadcrumbs'
