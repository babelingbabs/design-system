import React, { createContext, useContext, useEffect, useRef, useCallback, useId } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from '@phosphor-icons/react'

export type ModalSize = 'sm' | 'md' | 'lg' | 'full'

export interface ModalProps {
  open: boolean
  onClose: () => void
  size?: ModalSize
  children: React.ReactNode
  titleId?: string
  className?: string
}

export interface ModalHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

export interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

interface ModalContextValue {
  onClose: () => void
  titleId: string
}

const ModalContext = createContext<ModalContextValue | null>(null)

function useModalContext() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('Modal sub-components must be used inside <Modal>')
  return ctx
}

const sizeWidths: Record<ModalSize, string> = {
  sm: '400px',
  md: '520px',
  lg: '640px',
  full: '90vw',
} as const

function ModalRoot({ open, onClose, size = 'md', children, titleId: titleIdProp, className = '' }: ModalProps) {
  const generatedId = useId()
  const titleId = titleIdProp ?? `modal-title-${generatedId.replace(/:/g, '')}`
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key === 'Tab' && panelRef.current) {
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
  }, [onClose])

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement
      document.addEventListener('keydown', handleKeyDown)
      const raf = requestAnimationFrame(() => {
        const focusable = panelRef.current?.querySelector<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        focusable?.focus()
      })
      return () => cancelAnimationFrame(raf)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus()
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, handleKeyDown])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (typeof document === 'undefined') return null

  return createPortal(
    <ModalContext.Provider value={{ onClose, titleId }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 'var(--z-modal)' as unknown as number,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          >
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={className}
              style={{
                width: '100%',
                maxWidth: sizeWidths[size],
                backgroundColor: 'var(--color-bg-base)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-xl)',
                overflow: 'hidden',
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>,
    document.body
  )
}

function ModalHeader({ children, className = '' }: ModalHeaderProps) {
  const { onClose, titleId } = useModalContext()
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
        borderBottom: '1px solid var(--color-border-subtle)',
        gap: '12px',
      }}
    >
      <h2
        id={titleId}
        style={{
          margin: 0,
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-headline)',
          fontWeight: '600',
          color: 'var(--color-fg-primary)',
          letterSpacing: '-0.43px',
          lineHeight: 'var(--lh-headline)',
        }}
      >
        {children}
      </h2>
      <button
        onClick={onClose}
        aria-label="Close dialog"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          background: 'transparent',
          color: 'var(--color-fg-tertiary)',
          cursor: 'pointer',
          flexShrink: 0,
          padding: 0,
          transition: 'background-color 150ms ease, color 150ms ease',
          outline: 'none',
        }}
        className="hover:bg-[var(--color-bg-subtle)] hover:!text-[var(--color-fg-primary)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
      >
        <X size={16} weight="bold" aria-hidden />
      </button>
    </div>
  )
}
ModalHeader.displayName = 'Modal.Header'

function ModalBody({ children, className = '' }: ModalBodyProps) {
  return (
    <div
      className={className}
      style={{
        padding: '24px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-subhead)',
        color: 'var(--color-fg-secondary)',
        lineHeight: 'var(--lh-subhead)',
      }}
    >
      {children}
    </div>
  )
}
ModalBody.displayName = 'Modal.Body'

function ModalFooter({ children, className = '' }: ModalFooterProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '8px',
        padding: '16px 24px',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      {children}
    </div>
  )
}
ModalFooter.displayName = 'Modal.Footer'

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
