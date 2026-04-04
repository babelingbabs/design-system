import React, { createContext, useContext } from 'react'

// ─── Context ────────────────────────────────────────────────────────────────

interface TableContextValue {
  striped: boolean
  bordered: boolean
  compact: boolean
  hoverable: boolean
}

const TableContext = createContext<TableContextValue>({
  striped: false,
  bordered: false,
  compact: false,
  hoverable: false,
})

function useTableCtx() {
  return useContext(TableContext)
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type SortDirection = 'asc' | 'desc' | null

export interface TableProps {
  striped?: boolean
  bordered?: boolean
  compact?: boolean
  hoverable?: boolean
  children?: React.ReactNode
  className?: string
}

export interface TableHeadProps {
  sticky?: boolean
  sortable?: boolean
  sortDirection?: SortDirection
  onSort?: () => void
  align?: 'left' | 'center' | 'right'
  children?: React.ReactNode
  className?: string
}

export interface TableCellProps {
  align?: 'left' | 'center' | 'right'
  children?: React.ReactNode
  className?: string
}

// ─── Table ───────────────────────────────────────────────────────────────────

export function Table({
  striped = false,
  bordered = false,
  compact = false,
  hoverable = false,
  children,
  className = '',
}: TableProps) {
  return (
    <TableContext.Provider value={{ striped, bordered, compact, hoverable }}>
      <div className="w-full overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]">
        <table
          className={`w-full border-collapse text-sm ${className}`}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  )
}

// ─── TableHeader ─────────────────────────────────────────────────────────────

export function TableHeader({
  children,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <thead
      className={`bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-subtle)] ${className}`}
    >
      {children}
    </thead>
  )
}

// ─── TableBody ───────────────────────────────────────────────────────────────

export function TableBody({
  children,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  const { striped } = useTableCtx()
  return (
    <tbody
      className={`
        divide-y divide-[var(--color-border-subtle)]
        bg-[var(--color-bg-base)]
        ${striped ? '[&>tr:nth-child(even)]:bg-[var(--color-bg-subtle)]' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </tbody>
  )
}

// ─── TableRow ────────────────────────────────────────────────────────────────

export function TableRow({
  children,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  const { hoverable } = useTableCtx()
  return (
    <tr
      className={`
        ${hoverable ? 'hover:bg-[var(--color-bg-subtle)] transition-colors duration-100' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </tr>
  )
}

// ─── SortIcon ────────────────────────────────────────────────────────────────

function SortIcon({ direction }: { direction: SortDirection }) {
  return (
    <span className={direction ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-fg-tertiary)] opacity-50'} aria-hidden>
      {direction === 'asc' ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M5 1L9 8H1L5 1Z" fill="currentColor" />
        </svg>
      ) : direction === 'desc' ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M5 9L1 2H9L5 9Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M5 1L8.5 5H1.5L5 1Z" fill="currentColor" />
          <path d="M5 11L1.5 7H8.5L5 11Z" fill="currentColor" />
        </svg>
      )}
    </span>
  )
}

// ─── TableHead ───────────────────────────────────────────────────────────────

export function TableHead({
  sticky = false,
  sortable = false,
  sortDirection = null,
  onSort,
  align = 'left',
  children,
  className = '',
}: TableHeadProps) {
  const { compact } = useTableCtx()
  const alignClass =
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'

  return (
    <th
      scope="col"
      onClick={sortable ? onSort : undefined}
      className={`
        ${compact ? 'px-3 py-2' : 'px-4 py-3'}
        text-xs font-semibold uppercase tracking-wide
        text-[var(--color-fg-secondary)]
        ${alignClass}
        ${sticky ? 'sticky top-0 bg-[var(--color-bg-subtle)] z-10 shadow-[0_1px_0_var(--color-border-subtle)]' : ''}
        ${sortable ? 'cursor-pointer select-none hover:text-[var(--color-fg-primary)] transition-colors duration-150' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {sortable ? (
        <span className="inline-flex items-center gap-1.5">
          {children}
          <SortIcon direction={sortDirection} />
        </span>
      ) : (
        children
      )}
    </th>
  )
}

// ─── TableCell ───────────────────────────────────────────────────────────────

export function TableCell({
  align = 'left',
  children,
  className = '',
}: TableCellProps) {
  const { compact } = useTableCtx()
  const alignClass =
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'

  return (
    <td
      className={`
        ${compact ? 'px-3 py-2' : 'px-4 py-3'}
        text-sm text-[var(--color-fg-primary)]
        ${alignClass}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </td>
  )
}
