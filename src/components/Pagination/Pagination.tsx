import React from 'react'
import { Button } from '../Button'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  showFirstLast?: boolean
  className?: string
}

// ─── Pagination range ────────────────────────────────────────────────────────

const DOTS = 'DOTS'

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function buildPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | typeof DOTS)[] {
  // Total numbers we want to show: siblings on each side + first + last + current + 2 dots
  const totalSlots = siblingCount * 2 + 5

  // If all pages fit, show them all
  if (totalPages <= totalSlots) {
    return range(1, totalPages)
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1)
  const rightSibling = Math.min(currentPage + siblingCount, totalPages)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < totalPages - 1

  if (!showLeftDots && showRightDots) {
    // Heavy left side — show more pages on the left
    const leftCount = 3 + 2 * siblingCount
    return [...range(1, leftCount), DOTS, totalPages]
  }

  if (showLeftDots && !showRightDots) {
    // Heavy right side — show more pages on the right
    const rightCount = 3 + 2 * siblingCount
    return [1, DOTS, ...range(totalPages - rightCount + 1, totalPages)]
  }

  // Dots on both sides
  return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, totalPages]
}

// ─── Nav icons ───────────────────────────────────────────────────────────────

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronsLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M11 11L7 7l4-4M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronsRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 3l4 4-4 4M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Pagination ──────────────────────────────────────────────────────────────

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  className = '',
}: PaginationProps) {
  const pages = buildPaginationRange(currentPage, totalPages, siblingCount)

  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  const navBtn = (
    label: string,
    icon: React.ReactNode,
    targetPage: number,
    disabled: boolean,
    ariaLabel: string
  ) => (
    <Button
      key={label}
      variant="ghost"
      size="sm"
      icon={icon}
      iconOnly
      disabled={disabled}
      onClick={() => !disabled && onPageChange(targetPage)}
      aria-label={ariaLabel}
    >
      {label}
    </Button>
  )

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center gap-1 ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {/* First */}
      {showFirstLast && navBtn('First', <ChevronsLeft />, 1, isFirst, 'Go to first page')}

      {/* Prev */}
      {navBtn('Prev', <ChevronLeft />, currentPage - 1, isFirst, 'Go to previous page')}

      {/* Page numbers */}
      {pages.map((page, i) => {
        if (page === DOTS) {
          return (
            <span
              key={`dots-${i}`}
              className="w-8 h-7 inline-flex items-center justify-center text-sm text-[var(--color-fg-tertiary)] select-none"
              aria-hidden
            >
              &hellip;
            </span>
          )
        }

        const isActive = page === currentPage
        return (
          <button
            key={page}
            type="button"
            aria-label={`Page ${page}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onPageChange(page)}
            className={`
              inline-flex items-center justify-center
              w-8 h-7 rounded-[var(--radius-md)]
              text-sm font-medium
              transition-colors duration-150
              focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]
              ${
                isActive
                  ? 'bg-[var(--color-accent-500)] text-white border border-[var(--color-accent-600)]'
                  : 'text-[var(--color-fg-secondary)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-fg-primary)] border border-transparent'
              }
            `.replace(/\s+/g, ' ').trim()}
          >
            {page}
          </button>
        )
      })}

      {/* Next */}
      {navBtn('Next', <ChevronRight />, currentPage + 1, isLast, 'Go to next page')}

      {/* Last */}
      {showFirstLast && navBtn('Last', <ChevronsRight />, totalPages, isLast, 'Go to last page')}
    </nav>
  )
}
