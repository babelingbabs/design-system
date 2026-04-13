import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'

export type TabsVariant = 'underline' | 'pill'
export type TabsSize = 'sm' | 'md'

export interface TabsProps extends ComponentPropsWithoutRef<typeof RadixTabs.Root> {
  children: ReactNode
}

export interface TabsListProps extends ComponentPropsWithoutRef<typeof RadixTabs.List> {
  variant?: TabsVariant
  size?: TabsSize
  children: ReactNode
  className?: string
}

export interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
  /** Optional leading icon */
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export interface TabsContentProps extends ComponentPropsWithoutRef<typeof RadixTabs.Content> {
  children: ReactNode
  className?: string
}
