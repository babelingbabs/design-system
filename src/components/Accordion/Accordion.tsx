import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Context ────────────────────────────────────────────────────────────────

interface AccordionContextValue {
  openItems: Set<string>
  toggle: (value: string) => void
  type: 'single' | 'multiple'
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('AccordionItem must be used inside Accordion')
  return ctx
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  children?: React.ReactNode
  className?: string
}

export interface AccordionItemProps {
  value: string
  title: string
  disabled?: boolean
  children?: React.ReactNode
  className?: string
}

// ─── Accordion ───────────────────────────────────────────────────────────────

export function Accordion({
  type = 'single',
  defaultValue,
  value: controlledValue,
  onChange,
  children,
  className = '',
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState<Set<string>>(() => {
    if (defaultValue === undefined) return new Set()
    return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue])
  })

  const openItems =
    controlledValue !== undefined
      ? new Set(Array.isArray(controlledValue) ? controlledValue : [controlledValue])
      : internalOpen

  const toggle = (itemValue: string) => {
    let next: Set<string>
    if (type === 'single') {
      next = openItems.has(itemValue) ? new Set() : new Set([itemValue])
    } else {
      next = new Set(openItems)
      if (next.has(itemValue)) {
        next.delete(itemValue)
      } else {
        next.add(itemValue)
      }
    }

    if (controlledValue === undefined) {
      setInternalOpen(next)
    }

    if (onChange) {
      const arr = Array.from(next)
      onChange(type === 'single' ? (arr[0] ?? '') : arr)
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type }}>
      <div
        className={`divide-y divide-[var(--color-border-subtle)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] overflow-hidden ${className}`}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// ─── AccordionItem ───────────────────────────────────────────────────────────

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function AccordionItem({
  value,
  title,
  disabled = false,
  children,
  className = '',
}: AccordionItemProps) {
  const { openItems, toggle } = useAccordion()
  const isOpen = openItems.has(value)
  const triggerId = `accordion-trigger-${value}`
  const panelId = `accordion-panel-${value}`

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled) toggle(value)
    }
  }

  return (
    <div className={`bg-[var(--color-bg-base)] ${className}`}>
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        disabled={disabled}
        onClick={() => !disabled && toggle(value)}
        onKeyDown={handleKeyDown}
        className={`
          w-full flex items-center justify-between
          px-4 py-3 text-left
          text-sm font-medium
          text-[var(--color-fg-primary)]
          bg-transparent
          transition-colors duration-150
          focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]
          disabled:text-[var(--color-fg-disabled)] disabled:cursor-not-allowed
          ${!disabled ? 'hover:bg-[var(--color-bg-subtle)] cursor-pointer' : ''}
        `.replace(/\s+/g, ' ').trim()}
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="shrink-0 text-[var(--color-fg-tertiary)] ml-3"
        >
          <ChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-4 pb-4 pt-1 text-sm text-[var(--color-fg-secondary)] leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
