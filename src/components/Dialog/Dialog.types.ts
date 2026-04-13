import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface DialogProps extends ComponentPropsWithoutRef<typeof RadixDialog.Root> {
  children: ReactNode
}

export interface DialogContentProps {
  /** Panel width preset */
  size?: DialogSize
  /** Show the X close button in the top-right corner */
  showClose?: boolean
  children: ReactNode
  className?: string
}

export interface DialogHeaderProps {
  children: ReactNode
  className?: string
}

export interface DialogFooterProps {
  children: ReactNode
  className?: string
}
