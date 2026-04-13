import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixPopover from '@radix-ui/react-popover'

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left'
export type PopoverAlign = 'start' | 'center' | 'end'

export interface PopoverProps extends ComponentPropsWithoutRef<typeof RadixPopover.Root> {}

export interface PopoverContentProps {
  /** Preferred side of the trigger to render the popover against */
  side?: PopoverSide
  /** Alignment of the popover along the cross-axis */
  align?: PopoverAlign
  /** Distance in px between the trigger and the popover */
  sideOffset?: number
  /** Popover body content */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}
