import { createContext, forwardRef, useContext, useState } from 'react'
import * as RadixPopover from '@radix-ui/react-popover'
import { AnimatePresence, motion } from 'framer-motion'
import type { PopoverProps, PopoverContentProps } from './Popover.types'
import styles from './Popover.module.css'

type PopoverContextValue = { open: boolean }
const PopoverCtx = createContext<PopoverContextValue>({ open: false })

export function Popover({ open, defaultOpen, onOpenChange, children, ...props }: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? (open as boolean) : uncontrolledOpen

  return (
    <PopoverCtx.Provider value={{ open: isOpen }}>
      <RadixPopover.Root
        open={isOpen}
        onOpenChange={isControlled ? onOpenChange : setUncontrolledOpen}
        {...props}
      >
        {children}
      </RadixPopover.Root>
    </PopoverCtx.Provider>
  )
}

export const PopoverTrigger = RadixPopover.Trigger
export const PopoverClose = RadixPopover.Close

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ side = 'bottom', align = 'center', sideOffset = 8, children, className }, ref) => {
    const { open } = useContext(PopoverCtx)

    return (
      <RadixPopover.Portal forceMount>
        <AnimatePresence>
          {open && (
            <RadixPopover.Content
              asChild
              forceMount
              side={side}
              align={align}
              sideOffset={sideOffset}
            >
              <motion.div
                ref={ref}
                className={[styles.content, className].filter(Boolean).join(' ')}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                {children}
                <RadixPopover.Arrow className={styles.arrow} width={10} height={5} />
              </motion.div>
            </RadixPopover.Content>
          )}
        </AnimatePresence>
      </RadixPopover.Portal>
    )
  }
)

PopoverContent.displayName = 'PopoverContent'
