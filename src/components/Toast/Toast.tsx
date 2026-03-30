import React, { createContext, useContext, useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Warning, XCircle, Info } from '@phosphor-icons/react'

export type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info'
export type ToastPosition = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'

export interface ToastItem {
  id: string
  variant: ToastVariant
  title: string
  description?: string
  duration: number
  icon?: React.ReactNode
}

export interface ToastOptions {
  variant?: ToastVariant
  description?: string
  duration?: number
  icon?: React.ReactNode
}

export interface ToastContextValue {
  toasts: ToastItem[]
  toast: (title: string, options?: ToastOptions) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}

export interface ToastProviderProps {
  children: React.ReactNode
  position?: ToastPosition
  maxToasts?: number
}

const variantConfig: Record<ToastVariant, { icon: React.ReactNode; accentColor: string }> = {
  default: {
    icon: <Info size={16} weight="fill" aria-hidden />,
    accentColor: 'var(--color-border-default)',
  },
  success: {
    icon: <CheckCircle size={16} weight="fill" aria-hidden />,
    accentColor: 'var(--color-success)',
  },
  warning: {
    icon: <Warning size={16} weight="fill" aria-hidden />,
    accentColor: 'var(--color-warning)',
  },
  error: {
    icon: <XCircle size={16} weight="fill" aria-hidden />,
    accentColor: 'var(--color-error)',
  },
  info: {
    icon: <Info size={16} weight="fill" aria-hidden />,
    accentColor: 'var(--color-info)',
  },
} as const

const variantIconColors: Record<ToastVariant, string> = {
  default: 'var(--color-fg-tertiary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error:   'var(--color-error)',
  info:    'var(--color-info)',
}

let toastCounter = 0

export function ToastProvider({ children, position = 'bottom-right', maxToasts = 5 }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
    const t = timers.current.get(id)
    if (t) {
      clearTimeout(t)
      timers.current.delete(id)
    }
  }, [])

  const dismissAll = useCallback(() => {
    timers.current.forEach(t => clearTimeout(t))
    timers.current.clear()
    setToasts([])
  }, [])

  const toast = useCallback((title: string, options: ToastOptions = {}): string => {
    const id = `toast-${++toastCounter}`
    const { variant = 'default', description, duration = 5000, icon } = options
    const item: ToastItem = { id, variant, title, description, duration, icon }
    setToasts(prev => [item, ...prev].slice(0, maxToasts))
    if (duration > 0) {
      const t = setTimeout(() => dismiss(id), duration)
      timers.current.set(id, t)
    }
    return id
  }, [dismiss, maxToasts])

  const isTop = position.startsWith('top')
  const isRight = position.endsWith('right')

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 'var(--z-toast)' as unknown as number,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px',
    pointerEvents: 'none',
    ...(isTop ? { top: 0 } : { bottom: 0 }),
    ...(isRight ? { right: 0 } : { left: 0 }),
  }

  const slideX = isRight ? 32 : -32

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss, dismissAll }}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <div style={containerStyle} role="region" aria-label="Notifications" aria-live="polite">
          <AnimatePresence initial={false} mode="sync">
            {toasts.map(t => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, x: slideX, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: slideX, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  width: '320px',
                  padding: '12px 14px',
                  backgroundColor: 'var(--color-bg-base)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  borderLeft: `3px solid ${variantConfig[t.variant].accentColor}`,
                  boxShadow: 'var(--shadow-lg)',
                  pointerEvents: 'auto',
                }}
              >
                <span
                  aria-hidden
                  style={{ color: variantIconColors[t.variant], flexShrink: 0, marginTop: '1px', display: 'flex' }}
                >
                  {t.icon ?? variantConfig[t.variant].icon}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    margin: 0,
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-subhead)',
                    fontWeight: '500',
                    color: 'var(--color-fg-primary)',
                    lineHeight: 'var(--lh-subhead)',
                  }}>
                    {t.title}
                  </p>
                  {t.description && (
                    <p style={{
                      margin: '2px 0 0',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-footnote)',
                      color: 'var(--color-fg-secondary)',
                      lineHeight: 'var(--lh-footnote)',
                    }}>
                      {t.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => dismiss(t.id)}
                  aria-label="Dismiss notification"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--color-fg-tertiary)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    padding: 0,
                    marginTop: '-1px',
                    transition: 'background-color 100ms ease, color 100ms ease',
                  }}
                  className="hover:bg-[var(--color-bg-subtle)] hover:!text-[var(--color-fg-secondary)]"
                >
                  <X size={12} weight="bold" aria-hidden />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}
