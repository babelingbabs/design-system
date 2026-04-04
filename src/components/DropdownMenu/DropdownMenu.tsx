import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useId,
} from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Context ────────────────────────────────────────────────────────────────

interface DropdownContextValue {
  open: boolean
  setOpen: (v: boolean) => void
  triggerId: string
  contentId: string
  triggerRef: React.MutableRefObject<HTMLElement | null>
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

function useDropdown() {
  const ctx = useContext(DropdownContext)
  if (!ctx) throw new Error('DropdownMenu compound components must be used inside DropdownMenu')
  return ctx
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DropdownMenuProps {
  children?: React.ReactNode
}

export interface DropdownItemProps {
  icon?: React.ReactNode
  shortcut?: string
  disabled?: boolean
  onSelect?: () => void
  children?: React.ReactNode
  className?: string
}

export interface DropdownLabelProps {
  children?: React.ReactNode
  className?: string
}

// ─── DropdownMenu ────────────────────────────────────────────────────────────

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const triggerId = useId()
  const contentId = useId()
  const triggerRef = useRef<HTMLElement | null>(null)

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerId, contentId, triggerRef }}>
      <div style={{ display: 'inline-block', position: 'relative' }}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// ─── DropdownTrigger ─────────────────────────────────────────────────────────

export function DropdownTrigger({ children }: { children: React.ReactElement<React.HTMLAttributes<HTMLElement>> }) {
  const { open, setOpen, triggerId, contentId, triggerRef } = useDropdown()

  return (
    <span
      ref={(el) => { triggerRef.current = el }}
      style={{ display: 'inline-flex' }}
    >
      {React.cloneElement(children, {
        id: triggerId,
        'aria-haspopup': 'menu',
        'aria-expanded': open,
        'aria-controls': open ? contentId : undefined,
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          children.props.onClick?.(e)
          setOpen(!open)
        },
      } as React.HTMLAttributes<HTMLElement>)}
    </span>
  )
}

// ─── DropdownContent ─────────────────────────────────────────────────────────

export function DropdownContent({ children }: { children?: React.ReactNode }) {
  const { open, setOpen, triggerId, contentId, triggerRef } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 })

  // Update position when menu opens
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPos({ top: rect.bottom + 4, left: rect.left, width: rect.width })
    }
  }, [open, triggerRef])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handle = (e: MouseEvent) => {
      if (
        !contentRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [open, setOpen, triggerRef])

  // Close on Escape / Tab
  useEffect(() => {
    if (!open) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        // Return focus to trigger button
        const btn = triggerRef.current?.querySelector<HTMLElement>('button, a, [tabindex]')
        ;(btn ?? triggerRef.current)?.focus()
      }
      if (e.key === 'Tab') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [open, setOpen, triggerRef])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      contentRef.current?.querySelectorAll<HTMLElement>(
        '[role="menuitem"]:not([aria-disabled="true"])'
      ) ?? []
    )
    if (items.length === 0) return

    const currentIndex = items.indexOf(document.activeElement as HTMLElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      items[next]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      items[prev]?.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      items[0]?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      items[items.length - 1]?.focus()
    }
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={contentRef}
          id={contentId}
          role="menu"
          aria-labelledby={triggerId}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0, scale: 0.95, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -4 }}
          transition={{ type: 'spring', duration: 0.18, bounce: 0 }}
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            minWidth: Math.max(pos.width, 180),
            zIndex: 9999,
          }}
          className={`
            py-1 outline-none
            bg-[var(--color-bg-subtle)]
            border border-[var(--color-border-default)]
            rounded-[var(--radius-md)]
            shadow-lg backdrop-blur-md
          `.replace(/\s+/g, ' ').trim()}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// ─── DropdownItem ────────────────────────────────────────────────────────────

export function DropdownItem({
  icon,
  shortcut,
  disabled = false,
  onSelect,
  children,
  className = '',
}: DropdownItemProps) {
  const { setOpen } = useDropdown()

  const handleSelect = () => {
    if (disabled) return
    onSelect?.()
    setOpen(false)
  }

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled ? 'true' : undefined}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleSelect()
        }
      }}
      className={`
        flex items-center gap-2 mx-1 px-2 py-1.5 rounded-[var(--radius-sm)]
        text-sm cursor-pointer select-none outline-none
        text-[var(--color-fg-primary)]
        transition-colors duration-100
        ${
          disabled
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-[var(--color-bg-muted)] active:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]'
        }
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {icon && (
        <span className="shrink-0 text-[var(--color-fg-secondary)]" aria-hidden>
          {icon}
        </span>
      )}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs text-[var(--color-fg-tertiary)] ml-auto pl-4 shrink-0">
          {shortcut}
        </span>
      )}
    </div>
  )
}

// ─── DropdownSeparator ───────────────────────────────────────────────────────

export function DropdownSeparator({ className = '' }: { className?: string }) {
  return (
    <div
      role="separator"
      className={`my-1 h-px bg-[var(--color-border-subtle)] ${className}`}
    />
  )
}

// ─── DropdownLabel ───────────────────────────────────────────────────────────

export function DropdownLabel({ children, className = '' }: DropdownLabelProps) {
  return (
    <div
      className={`
        px-3 py-1.5 text-xs font-semibold uppercase tracking-wide
        text-[var(--color-fg-tertiary)]
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {children}
    </div>
  )
}
