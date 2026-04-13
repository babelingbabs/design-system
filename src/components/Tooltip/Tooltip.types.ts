import type { ReactNode } from 'react'

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'
export type TooltipAlign = 'start' | 'center' | 'end'

export interface TooltipProps {
  /** Content rendered inside the tooltip */
  content: ReactNode
  /** The element that triggers the tooltip */
  children: ReactNode
  /** Preferred side of the trigger to render against */
  side?: TooltipSide
  /** Alignment along the cross-axis */
  align?: TooltipAlign
  /** Duration in ms from when the mouse enters the trigger until the tooltip opens */
  delayDuration?: number
  /** Distance in px between the trigger and the tooltip */
  sideOffset?: number
}
