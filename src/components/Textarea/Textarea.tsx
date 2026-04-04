import React, { useId } from 'react'
import { Label } from '../Typography/Typography'

export type TextareaSize = 'sm' | 'md' | 'lg'
export type TextareaState = 'default' | 'error' | 'success'
export type TextareaResize = 'none' | 'vertical' | 'both'

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  hint?: string
  errorMessage?: string
  successMessage?: string
  inputState?: TextareaState
  size?: TextareaSize
  rows?: number
  maxLength?: number
  resize?: TextareaResize
  fullWidth?: boolean
}

const sizeStyles: Record<TextareaSize, string> = {
  sm: 'text-xs px-2.5 py-1.5',
  md: 'text-sm px-3 py-2',
  lg: 'text-base px-4 py-2.5',
}

const resizeStyles: Record<TextareaResize, string> = {
  none:     'resize-none',
  vertical: 'resize-y',
  both:     'resize',
}

export function Textarea({
  label,
  hint,
  errorMessage,
  successMessage,
  inputState = 'default',
  size = 'md',
  rows = 4,
  maxLength,
  resize = 'vertical',
  fullWidth = false,
  id: externalId,
  className = '',
  disabled,
  value,
  defaultValue,
  onChange,
  ...props
}: TextareaProps) {
  const autoId = useId()
  const id = externalId ?? autoId
  const hintId = `${id}-hint`

  const [internalValue, setInternalValue] = React.useState(
    (value as string) ?? (defaultValue as string) ?? ''
  )

  const isControlled = value !== undefined
  const currentValue = isControlled ? (value as string) : internalValue
  const charCount = currentValue?.length ?? 0

  const hasError   = inputState === 'error'   || !!errorMessage
  const hasSuccess = inputState === 'success' || !!successMessage
  const hint_text  = errorMessage ?? successMessage ?? hint

  const borderColor = hasError
    ? 'border-[var(--color-error)] focus-within:shadow-[0_0_0_3px_rgba(155,29,32,0.15)]'
    : hasSuccess
      ? 'border-[var(--color-success)] focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.15)]'
      : 'border-[var(--color-border-default)] focus-within:border-[var(--color-accent-500)] focus-within:shadow-[var(--shadow-focus)]'

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
  }

  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <Label htmlFor={id} required={props.required}>
          {label}
        </Label>
      )}

      <div
        className={`
          relative
          bg-[var(--color-bg-base)]
          border rounded-[var(--radius-md)]
          transition-all duration-150
          shadow-[var(--shadow-inner)]
          ${borderColor}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-[var(--color-bg-subtle)]' : ''}
        `.replace(/\s+/g, ' ').trim()}
      >
        <textarea
          id={id}
          aria-describedby={hint_text ? hintId : undefined}
          aria-invalid={hasError}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          className={`
            w-full bg-transparent
            ${sizeStyles[size]}
            ${resizeStyles[resize]}
            text-[var(--color-fg-primary)]
            placeholder:text-[var(--color-fg-tertiary)]
            focus:outline-none
            disabled:cursor-not-allowed
            min-h-[2.5rem]
          `.replace(/\s+/g, ' ').trim()}
          style={{ fontFamily: 'var(--font-sans)' }}
          {...props}
        />

        {maxLength !== undefined && (
          <div
            className="flex justify-end px-3 pb-1.5"
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              className={`text-xs tabular-nums ${charCount >= maxLength ? 'text-[var(--color-error)]' : 'text-[var(--color-fg-tertiary)]'}`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {charCount}/{maxLength}
            </span>
          </div>
        )}
      </div>

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
