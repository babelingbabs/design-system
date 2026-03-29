import React, { useId } from 'react'
import { motion } from 'framer-motion'
import { Label } from '../Typography/Typography'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputState = 'default' | 'error' | 'success'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string
  hint?: string
  errorMessage?: string
  successMessage?: string
  inputState?: InputState
  size?: InputSize
  /** Leading icon or adornment */
  prefix?: React.ReactNode
  /** Trailing icon or adornment */
  suffix?: React.ReactNode
  /** Full width */
  fullWidth?: boolean
}

const sizeStyles: Record<InputSize, { input: string; height: string }> = {
  sm: { input: 'text-xs px-2.5', height: 'h-7' },
  md: { input: 'text-sm px-3',   height: 'h-9' },
  lg: { input: 'text-base px-4', height: 'h-11' },
}

export function Input({
  label,
  hint,
  errorMessage,
  successMessage,
  inputState = 'default',
  size = 'md',
  prefix,
  suffix,
  fullWidth = false,
  id: externalId,
  className = '',
  disabled,
  ...props
}: InputProps) {
  const autoId = useId()
  const id = externalId ?? autoId
  const hintId = `${id}-hint`

  const hasError   = inputState === 'error'   || !!errorMessage
  const hasSuccess = inputState === 'success' || !!successMessage
  const hint_text  = errorMessage ?? successMessage ?? hint

  const borderColor = hasError
    ? 'border-[var(--color-error)] focus-within:shadow-[0_0_0_3px_rgba(155,29,32,0.15)]'
    : hasSuccess
      ? 'border-[var(--color-success)] focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.15)]'
      : 'border-[var(--color-border-default)] focus-within:border-[var(--color-accent-500)] focus-within:shadow-[var(--shadow-focus)]'

  const { input: inputSize, height } = sizeStyles[size]

  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <Label htmlFor={id} required={props.required}>
          {label}
        </Label>
      )}

      <motion.div
        className={`
          relative flex items-center
          ${height}
          bg-[var(--color-bg-base)]
          border rounded-[var(--radius-md)]
          transition-all duration-150
          shadow-[var(--shadow-inner)]
          ${borderColor}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-[var(--color-bg-subtle)]' : ''}
        `.replace(/\s+/g, ' ').trim()}
      >
        {prefix && (
          <span className="flex items-center pl-3 text-[var(--color-fg-tertiary)] shrink-0">
            {prefix}
          </span>
        )}

        <input
          id={id}
          aria-describedby={hint_text ? hintId : undefined}
          aria-invalid={hasError}
          disabled={disabled}
          className={`
            w-full h-full bg-transparent
            ${inputSize}
            text-[var(--color-fg-primary)]
            placeholder:text-[var(--color-fg-tertiary)]
            focus:outline-none
            disabled:cursor-not-allowed
            ${prefix ? 'pl-1.5' : ''}
            ${suffix ? 'pr-1.5' : ''}
          `.replace(/\s+/g, ' ').trim()}
          style={{ fontFamily: 'var(--font-sans)' }}
          {...props}
        />

        {suffix && (
          <span className="flex items-center pr-3 text-[var(--color-fg-tertiary)] shrink-0">
            {suffix}
          </span>
        )}
      </motion.div>

      {hint_text && (
        <p
          id={hintId}
          className={`
            text-xs leading-normal
            ${hasError   ? 'text-[var(--color-error)]'   : ''}
            ${hasSuccess ? 'text-[var(--color-success)]' : ''}
            ${!hasError && !hasSuccess ? 'text-[var(--color-fg-tertiary)]' : ''}
          `.replace(/\s+/g, ' ').trim()}
        >
          {hint_text}
        </p>
      )}
    </div>
  )
}
