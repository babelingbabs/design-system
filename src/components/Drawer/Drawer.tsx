import React, { useRef, useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────────────────────────

export type DrawerPosition = 'left' | 'right' | 'bottom'
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full'

export interface DrawerProps {
  open: boolean
  onClose: () => void
  position?: DrawerPosition
  size?: DrawerSize
  title?: string
  overlay?: boolean
  children?: React.ReactNode
  className?: string
}

// ─── Constants ───────────────────────────────────────────────────────────────

const sideWidths: Record<DrawerSize, string> = {
  sm: '256px',
  md: '320px',
  lg: '480px',
  full: '100vw',
}

const bottomHeights: Record<DrawerSize, string> = {
  sm: '192px',
  md: '288px',
  lg: '60vh',
  full: '100vh',
}

function getSlideProps(position: DrawerPosition) {
  if (position === 'left') return { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } }
  if (position === 'right') return { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } }
  return { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } }
}

const positionClasses: Record<DrawerPosition, string> = {
  left: 'fixed left-0 top-0 bottom-0 flex flex-col',
  right: 'fixed right-0 top-0 bottom-0 flex flex-col',
  bottom: 'fixed bottom-0 left-0 right-0 flex flex-col',
}

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

// ─── Drawer ──────────────────────────────────────────────────────────────────

export function Drawer({
  open,
  onClose,
  position = 'right',
  size = 'md',
  title,
  overlay = true,
  children,
  className = '',
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  // Compute inline size styles
  const drawerStyle: React.CSSProperties =
    position === 'bottom'
      ? { height: bottomHeights[size] }
      : { width: sideWidths[size] }

  // Focus trap + Escape key
  useEffect(() => {
    if (!open || !drawerRef.current) return
    const el = drawerRef.current

    const getFocusable = () => Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))

    // Focus first element (close button)
    setTimeout(() => getFocusable()[0]?.focus(), 10)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const focusable = getFocusable()
      if (focusable.length === 0) { e.preventDefault(); return }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const { initial, animate, exit } = getSlideProps(position)

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          {overlay && (
            <motion.div
              key="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[9998]"
              aria-hidden
              onClick={onClose}
            />
          )}

          {/* Drawer panel */}
          <motion.div
            key="drawer-panel"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            style={{ ...drawerStyle, zIndex: 9999 }}
            className={`
              ${positionClasses[position]}
              bg-[var(--color-bg-base)]
              border-[var(--color-border-subtle)]
              ${position === 'left' ? 'border-r' : position === 'right' ? 'border-l' : 'border-t'}
              shadow-xl
              ${className}
            `.replace(/\s+/g, ' ').trim()}
          >
            {/* Header */}
            <div
              className={`
                flex items-center justify-between shrink-0
                px-5 py-4
                border-b border-[var(--color-border-subtle)]
              `.replace(/\s+/g, ' ').trim()}
            >
              {title ? (
                <h2
                  id={titleId}
                  className="text-base font-semibold text-[var(--color-fg-primary)]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {title}
                </h2>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className={`
                  inline-flex items-center justify-center
                  w-8 h-8 rounded-[var(--radius-md)]
                  text-[var(--color-fg-secondary)]
                  hover:bg-[var(--color-bg-subtle)]
                  hover:text-[var(--color-fg-primary)]
                  active:bg-[var(--color-bg-muted)]
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]
                `.replace(/\s+/g, ' ').trim()}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Scrollable content */}
            <div
              className="flex-1 overflow-y-auto px-5 py-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M12 4L4 12M4 4l8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
