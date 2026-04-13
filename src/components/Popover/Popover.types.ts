import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixPopover from '@radix-ui/react-popover'

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left'
export type PopoverAlign = 'start' | 'center' | 'end'

export interface PopoverProps extends ComponentPropsWithoutRef<typeof RadixPopover.Root> {}

export interface PopoverContentProps {
  side?: PopoverSide
  align?: PopoverAlign
  sideOffset?: number
  children: ReactNode
  className?: string
}
