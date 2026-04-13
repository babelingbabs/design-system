import type { ReactNode } from 'react'

export type ToastVariant = 'default' | 'success' | 'error' | 'warning'

export interface ToastOptions {
  title?: string
  description?: string
  variant?: ToastVariant
  /** Auto-dismiss delay in ms. Defaults to 5000. Pass Infinity to persist. */
  duration?: number
}

export interface ToastItem extends ToastOptions {
  id: string
}

export interface ToastContextValue {
  toasts: ToastItem[]
  toast: (opts: ToastOptions) => string
  dismiss: (id: string) => void
}

export interface ToastProviderProps {
  children: ReactNode
}
