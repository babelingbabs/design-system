import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuSide = 'top' | 'right' | 'bottom' | 'left'
export type DropdownMenuAlign = 'start' | 'center' | 'end'

export interface DropdownMenuProps
  extends ComponentPropsWithoutRef<typeof RadixDropdownMenu.Root> {
  children: ReactNode
}

export interface DropdownMenuContentProps {
  side?: DropdownMenuSide
  align?: DropdownMenuAlign
  sideOffset?: number
  children: ReactNode
  className?: string
}

export interface DropdownMenuItemProps
  extends ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item> {
  /** Leading icon */
  icon?: ReactNode
  /** Trailing keyboard shortcut hint */
  shortcut?: string
  children: ReactNode
  className?: string
}

export interface DropdownMenuLabelProps {
  children: ReactNode
  className?: string
}

export interface DropdownMenuSeparatorProps {
  className?: string
}
