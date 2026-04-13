import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface DialogProps extends ComponentPropsWithoutRef<typeof RadixDialog.Root> {
  /** Dialog sub-components (Trigger, Content) */
  children: ReactNode
}

export interface DialogContentProps {
  /** Panel width preset */
  size?: DialogSize
  /** Show the X close button in the top-right corner */
  showClose?: boolean
  /** Dialog body content */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DialogHeaderProps {
  /** Header content — typically DialogTitle and DialogDescription */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DialogFooterProps {
  /** Footer content — typically action buttons */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}
