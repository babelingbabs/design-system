import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'

export type TabsVariant = 'underline' | 'pill'
export type TabsSize = 'sm' | 'md'

export interface TabsProps extends ComponentPropsWithoutRef<typeof RadixTabs.Root> {
  /** TabsList and TabsContent elements */
  children: ReactNode
}

export interface TabsListProps extends ComponentPropsWithoutRef<typeof RadixTabs.List> {
  /** Visual style of the tab list — underline for primary nav, pill for filters */
  variant?: TabsVariant
  /** Size of the tab triggers */
  size?: TabsSize
  /** TabsTrigger elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
  /** Optional leading icon */
  icon?: ReactNode
  /** Tab label text */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface TabsContentProps extends ComponentPropsWithoutRef<typeof RadixTabs.Content> {
  /** Content revealed when this tab is active */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}
