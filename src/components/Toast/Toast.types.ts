import type { ReactNode } from 'react'

export type ToastVariant = 'default' | 'success' | 'error' | 'warning'

export interface ToastOptions {
  /** Bold heading line for the toast */
  title?: string
  /** Supporting detail below the title */
  description?: string
  /** Visual and semantic style of the toast */
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
  /** App content that should have access to the toast context */
  children: ReactNode
}
