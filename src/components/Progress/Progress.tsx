import { useId } from 'react'
import { motion } from 'framer-motion'

export type ProgressSize = 'sm' | 'md' | 'lg'
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error'

export interface ProgressProps {
  value?: number
  max?: number
  label?: string
  size?: ProgressSize
  variant?: ProgressVariant
  showValue?: boolean
  indeterminate?: boolean
  className?: string
}

const sizeStyles: Record<ProgressSize, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

const variantFill: Record<ProgressVariant, string> = {
  default: 'var(--color-accent-500)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
}

export function Progress({
  value = 0,
  max = 100,
  label,
  size = 'md',
  variant = 'default',
  showValue = false,
  indeterminate = false,
  className = '',
}: ProgressProps) {
  const id = useId()
  const labelId = `${id}-label`
  const clamped = Math.min(Math.max(value, 0), max)
  const pct = (clamped / max) * 100
  const fillColor = variantFill[variant]

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span
              id={labelId}
              className="text-xs text-[var(--color-fg-secondary)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {label}
            </span>
          )}
          {showValue && !indeterminate && (
            <span
              className="text-xs tabular-nums text-[var(--color-fg-tertiary)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}

      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        aria-labelledby={label ? labelId : undefined}
        aria-busy={indeterminate}
        className={`relative overflow-hidden w-full rounded-full bg-[var(--color-bg-subtle)] ${sizeStyles[size]}`}
      >
        {indeterminate ? (
          <motion.div
            className="absolute inset-y-0 rounded-full"
            style={{ width: '40%', backgroundColor: fillColor }}
            animate={{ left: ['-40%', '100%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ) : (
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: fillColor }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </div>
    </div>
  )
}
