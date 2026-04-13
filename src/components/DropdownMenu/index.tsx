import { createContext, forwardRef, useContext, useState } from 'react'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import type {
  DropdownMenuProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
} from './DropdownMenu.types'
import styles from './DropdownMenu.module.css'

type DropdownMenuContextValue = { open: boolean }
const DropdownMenuCtx = createContext<DropdownMenuContextValue>({ open: false })

export function DropdownMenu({
  open,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? (open as boolean) : uncontrolledOpen

  return (
    <DropdownMenuCtx.Provider value={{ open: isOpen }}>
      <RadixDropdownMenu.Root
        open={isOpen}
        onOpenChange={isControlled ? onOpenChange : setUncontrolledOpen}
        {...props}
      >
        {children}
      </RadixDropdownMenu.Root>
    </DropdownMenuCtx.Provider>
  )
}

export const DropdownMenuTrigger = RadixDropdownMenu.Trigger
export const DropdownMenuGroup = RadixDropdownMenu.Group

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ side = 'bottom', align = 'start', sideOffset = 6, children, className }, ref) => {
    const { open } = useContext(DropdownMenuCtx)

    return (
      <RadixDropdownMenu.Portal forceMount>
        <AnimatePresence>
          {open && (
            <RadixDropdownMenu.Content
              asChild
              forceMount
              side={side}
              align={align}
              sideOffset={sideOffset}
            >
              <motion.div
                ref={ref}
                className={[styles.content, className].filter(Boolean).join(' ')}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)' }}
              >
                {children}
              </motion.div>
            </RadixDropdownMenu.Content>
          )}
        </AnimatePresence>
      </RadixDropdownMenu.Portal>
    )
  }
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ icon, shortcut, children, className, ...props }, ref) => {
    return (
      <RadixDropdownMenu.Item
        ref={ref}
        className={[styles.item, className].filter(Boolean).join(' ')}
        {...props}
      >
        {icon && <span className={styles.itemIcon}>{icon}</span>}
        <span className={styles.itemLabel}>{children}</span>
        {shortcut && <span className={styles.itemShortcut}>{shortcut}</span>}
      </RadixDropdownMenu.Item>
    )
  }
)
DropdownMenuItem.displayName = 'DropdownMenuItem'

export const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ children, className }, ref) => {
    return (
      <RadixDropdownMenu.Label
        ref={ref}
        className={[styles.label, className].filter(Boolean).join(' ')}
      >
        {children}
      </RadixDropdownMenu.Label>
    )
  }
)
DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export const DropdownMenuSeparator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className }, ref) => {
    return (
      <RadixDropdownMenu.Separator
        ref={ref}
        className={[styles.separator, className].filter(Boolean).join(' ')}
      />
    )
  }
)
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'
