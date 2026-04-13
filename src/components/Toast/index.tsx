import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { motion } from 'framer-motion'
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react'
import type {
  ToastContextValue,
  ToastItem,
  ToastOptions,
  ToastProviderProps,
  ToastVariant,
} from './Toast.types'
import styles from './Toast.module.css'

/* ---- Icons ---- */
type IconComponent = React.ComponentType<{ size?: number }>

const ICONS: Record<ToastVariant, IconComponent> = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
}

/* ---- Internal toast shape ---- */
type InternalToast = ToastItem & { exiting: boolean }

/* ---- Internal context (carries exiting flag) ---- */
type InternalContextValue = {
  toasts: InternalToast[]
  addToast: (opts: ToastOptions) => string
  exitToast: (id: string) => void
  removeToast: (id: string) => void
}

const ToastCtx = createContext<InternalContextValue | null>(null)

function useToastCtx(): InternalContextValue {
  const ctx = useContext(ToastCtx)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

/* ---- Public hook ---- */
export function useToast(): ToastContextValue {
  const { toasts, addToast, exitToast } = useToastCtx()
  return {
    toast: addToast,
    dismiss: exitToast,
    toasts: toasts.map(({ id, title, description, variant, duration }) => ({
      id,
      title,
      description,
      variant,
      duration,
    })),
  }
}

/* ---- Single toast item ---- */
function SingleToast({
  item,
  onDismiss,
  onRemove,
}: {
  item: InternalToast
  onDismiss: (id: string) => void
  onRemove: (id: string) => void
}) {
  const Icon = ICONS[item.variant ?? 'default']
  const exitingRef = useRef(item.exiting)
  exitingRef.current = item.exiting

  /* Auto-dismiss timer */
  useEffect(() => {
    if (item.exiting) return
    const duration = item.duration ?? 5000
    if (!isFinite(duration)) return
    const timer = setTimeout(() => onDismiss(item.id), duration)
    return () => clearTimeout(timer)
  }, [item.id, item.duration, item.exiting, onDismiss])

  return (
    <RadixToast.Root
      open={true}
      duration={Infinity}
      onOpenChange={(open) => {
        if (!open) onDismiss(item.id)
      }}
      className={styles.toastRoot}
    >
      <motion.div
        className={styles.toast}
        data-variant={item.variant ?? 'default'}
        initial={{ opacity: 0, x: 50, scale: 0.96 }}
        animate={
          item.exiting
            ? { opacity: 0, x: 50, scale: 0.96 }
            : { opacity: 1, x: 0, scale: 1 }
        }
        onAnimationComplete={() => {
          if (exitingRef.current) onRemove(item.id)
        }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className={styles.icon} aria-hidden="true">
          <Icon size={18} />
        </span>
        <div className={styles.body}>
          {item.title && (
            <RadixToast.Title className={styles.title}>{item.title}</RadixToast.Title>
          )}
          {item.description && (
            <RadixToast.Description className={styles.description}>
              {item.description}
            </RadixToast.Description>
          )}
        </div>
        <RadixToast.Close asChild>
          <button type="button" className={styles.closeButton} aria-label="Dismiss">
            <X size={14} aria-hidden="true" />
          </button>
        </RadixToast.Close>
      </motion.div>
    </RadixToast.Root>
  )
}

/* ---- Provider ---- */
export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<InternalToast[]>([])

  const addToast = useCallback((opts: ToastOptions): string => {
    const id = Math.random().toString(36).slice(2, 9)
    setToasts((prev) => [
      ...prev,
      { id, exiting: false, variant: 'default', duration: 5000, ...opts },
    ])
    return id
  }, [])

  const exitToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    )
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastCtx.Provider value={{ toasts, addToast, exitToast, removeToast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}
      </RadixToast.Provider>
    </ToastCtx.Provider>
  )
}

/* ---- Viewport — render this once at the root of your app ---- */
export function ToastViewport() {
  const { toasts, exitToast, removeToast } = useToastCtx()

  return (
    <>
      {toasts.map((item) => (
        <SingleToast
          key={item.id}
          item={item}
          onDismiss={exitToast}
          onRemove={removeToast}
        />
      ))}
      <RadixToast.Viewport className={styles.viewport} />
    </>
  )
}
