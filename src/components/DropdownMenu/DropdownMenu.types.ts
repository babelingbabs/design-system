import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuSide = 'top' | 'right' | 'bottom' | 'left'
export type DropdownMenuAlign = 'start' | 'center' | 'end'

export interface DropdownMenuProps
  extends ComponentPropsWithoutRef<typeof RadixDropdownMenu.Root> {
  /** DropdownMenu sub-components (Trigger, Content) */
  children: ReactNode
}

export interface DropdownMenuContentProps {
  /** Preferred side of the trigger to render the menu against */
  side?: DropdownMenuSide
  /** Alignment of the menu along the cross-axis */
  align?: DropdownMenuAlign
  /** Distance in px between the trigger and the menu */
  sideOffset?: number
  /** Menu items and sub-components */
  children: ReactNode
  /** Additional CSS class names */
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
  /** Label text for a group of menu items */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DropdownMenuSeparatorProps {
  /** Additional CSS class names */
  className?: string
}
