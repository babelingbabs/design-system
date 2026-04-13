import { createContext, forwardRef, useContext, useId, useState } from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
  TabsVariant,
  TabsSize,
} from './Tabs.types'
import styles from './Tabs.module.css'

/* ---- Contexts ---- */

interface TabsContextValue {
  activeValue: string
  layoutId: string
}

const TabsCtx = createContext<TabsContextValue>({
  activeValue: '',
  layoutId: '',
})

interface TabsListContextValue {
  variant: TabsVariant
  size: TabsSize
}

const TabsListCtx = createContext<TabsListContextValue>({
  variant: 'underline',
  size: 'md',
})

/* ---- Tabs root ---- */

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}: TabsProps) {
  const layoutId = useId()
  const [localValue, setLocalValue] = useState<string>(defaultValue ?? '')
  const isControlled = value !== undefined
  const activeValue = isControlled ? (value as string) : localValue

  function handleValueChange(v: string) {
    if (!isControlled) setLocalValue(v)
    onValueChange?.(v)
  }

  return (
    <TabsCtx.Provider value={{ activeValue, layoutId }}>
      <RadixTabs.Root
        className={styles.root}
        value={activeValue || undefined}
        onValueChange={handleValueChange}
        {...props}
      >
        {children}
      </RadixTabs.Root>
    </TabsCtx.Provider>
  )
}

/* ---- TabsList ---- */

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ variant = 'underline', size = 'md', children, className, ...props }, ref) => {
    return (
      <TabsListCtx.Provider value={{ variant, size }}>
        <RadixTabs.List
          ref={ref}
          className={[styles.list, className].filter(Boolean).join(' ')}
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </RadixTabs.List>
      </TabsListCtx.Provider>
    )
  }
)
TabsList.displayName = 'TabsList'

/* ---- TabsTrigger ---- */

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, icon, children, className, ...props }, ref) => {
    const { activeValue, layoutId } = useContext(TabsCtx)
    const { variant } = useContext(TabsListCtx)
    const isActive = activeValue === value

    return (
      <RadixTabs.Trigger
        ref={ref}
        value={value}
        className={[styles.trigger, className].filter(Boolean).join(' ')}
        {...props}
      >
        {icon && <span className={styles.triggerIcon}>{icon}</span>}
        <span>{children}</span>
        {variant === 'underline' && isActive && (
          <motion.div
            layoutId={layoutId}
            className={styles.indicator}
            transition={{ type: 'spring', stiffness: 500, damping: 38 }}
          />
        )}
      </RadixTabs.Trigger>
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

/* ---- TabsContent ---- */

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RadixTabs.Content
        ref={ref}
        className={[styles.content, className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </RadixTabs.Content>
    )
  }
)
TabsContent.displayName = 'TabsContent'
