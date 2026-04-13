import { forwardRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react'
import type { AlertProps, AlertVariant } from './Alert.types'
import styles from './Alert.module.css'

type IconComponent = React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' | 'false' }>

const ICONS: Record<AlertVariant, IconComponent> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, children, closable = false, onClose, className }, ref) => {
    const [dismissed, setDismissed] = useState(false)
    const Icon = ICONS[variant]

    const handleClose = () => {
      setDismissed(true)
      onClose?.()
    }

    return (
      <AnimatePresence>
        {!dismissed && (
          <motion.div
            ref={ref}
            role="alert"
            className={[styles.alert, className].filter(Boolean).join(' ')}
            data-variant={variant}
            exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className={styles.icon} aria-hidden="true">
              <Icon size={18} />
            </span>
            <div className={styles.body}>
              {title && <p className={styles.title}>{title}</p>}
              {children && <div className={styles.description}>{children}</div>}
            </div>
            {closable && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Dismiss"
              >
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
)

Alert.displayName = 'Alert'
