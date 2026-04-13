import { createContext, forwardRef, useContext, useState } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { DialogProps, DialogContentProps, DialogHeaderProps, DialogFooterProps } from './Dialog.types'
import styles from './Dialog.module.css'

type DialogContextValue = { open: boolean }
const DialogContext = createContext<DialogContextValue>({ open: false })

export function Dialog({ open, defaultOpen, onOpenChange, children, ...props }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? (open as boolean) : uncontrolledOpen

  return (
    <DialogContext.Provider value={{ open: isOpen }}>
      <RadixDialog.Root
        open={isOpen}
        onOpenChange={isControlled ? onOpenChange : setUncontrolledOpen}
        {...props}
      >
        {children}
      </RadixDialog.Root>
    </DialogContext.Provider>
  )
}

export const DialogTrigger = RadixDialog.Trigger
export const DialogClose = RadixDialog.Close
export const DialogTitle = RadixDialog.Title
export const DialogDescription = RadixDialog.Description

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ size = 'md', showClose = true, children, className }, ref) => {
    const { open } = useContext(DialogContext)

    return (
      <RadixDialog.Portal forceMount>
        <AnimatePresence>
          {open && (
            <RadixDialog.Overlay asChild forceMount key="dialog-overlay">
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              />
            </RadixDialog.Overlay>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {open && (
            <RadixDialog.Content asChild forceMount key="dialog-content">
              <motion.div
                ref={ref}
                className={[styles.panel, className].filter(Boolean).join(' ')}
                data-size={size}
                style={{ x: '-50%', y: '-50%' }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                {showClose && (
                  <RadixDialog.Close asChild>
                    <button className={styles.closeButton} aria-label="Close dialog">
                      <X size={16} aria-hidden="true" />
                    </button>
                  </RadixDialog.Close>
                )}
                {children}
              </motion.div>
            </RadixDialog.Content>
          )}
        </AnimatePresence>
      </RadixDialog.Portal>
    )
  }
)

DialogContent.displayName = 'DialogContent'

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

export function DialogFooter({ children, className }: DialogFooterProps) {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
