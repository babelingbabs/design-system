import React from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BreadcrumbProps {
  separator?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export interface BreadcrumbItemProps {
  href?: string
  active?: boolean
  children?: React.ReactNode
  className?: string
}

// ─── BreadcrumbSeparator ─────────────────────────────────────────────────────

export function BreadcrumbSeparator({
  children = '/',
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <li
      role="presentation"
      aria-hidden
      className={`
        text-[var(--color-fg-tertiary)] select-none text-sm
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </li>
  )
}

// ─── BreadcrumbItem ──────────────────────────────────────────────────────────

export function BreadcrumbItem({
  href,
  active = false,
  children,
  className = '',
}: BreadcrumbItemProps) {
  if (active || !href) {
    return (
      <li
        aria-current={active ? 'page' : undefined}
        className={`
          text-sm text-[var(--color-fg-primary)] font-medium
          ${className}
        `.replace(/\s+/g, ' ').trim()}
      >
        {children}
      </li>
    )
  }

  return (
    <li className={className}>
      <a
        href={href}
        className={`
          text-sm text-[var(--color-fg-secondary)]
          hover:text-[var(--color-fg-primary)]
          transition-colors duration-150
          focus-visible:outline-none focus-visible:rounded-sm focus-visible:shadow-[var(--shadow-focus)]
        `.replace(/\s+/g, ' ').trim()}
      >
        {children}
      </a>
    </li>
  )
}

// ─── Breadcrumb ──────────────────────────────────────────────────────────────

export function Breadcrumb({
  separator = '/',
  children,
  className = '',
}: BreadcrumbProps) {
  const items = React.Children.toArray(children)

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className="flex items-center gap-1.5 flex-wrap"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < items.length - 1 && (
              <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}
