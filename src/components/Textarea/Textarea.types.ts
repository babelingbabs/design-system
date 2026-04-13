import type { TextareaHTMLAttributes } from 'react'

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Visible label rendered above the textarea */
  label?: string
  /** Helper text rendered below the textarea */
  helperText?: string
  /** Error message — triggers error state when provided */
  error?: string
  /** Controls how the textarea can be resized */
  resize?: TextareaResize
  /** Default number of visible text rows */
  rows?: number
  /** Shows a character counter when combined with maxLength */
  showCount?: boolean
  /** Makes the textarea take full width of its container */
  fullWidth?: boolean
}
