import { forwardRef, useId, useState } from 'react'
import type { TextareaProps } from './Textarea.types'
import styles from './Textarea.module.css'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      resize = 'vertical',
      rows = 4,
      showCount = false,
      maxLength,
      fullWidth = true,
      disabled,
      value,
      defaultValue,
      onChange,
      id: providedId,
      className,
      ...rest
    },
    ref
  ) => {
    const autoId = useId()
    const id = providedId ?? autoId
    const helperId = `${id}-helper`
    const errorId = `${id}-error`
    const hasError = Boolean(error)

    // Track character count for the counter display
    const isControlled = value !== undefined
    const [internalCount, setInternalCount] = useState(
      typeof defaultValue === 'string' ? defaultValue.length : 0
    )
    const charCount = isControlled
      ? typeof value === 'string' ? value.length : 0
      : internalCount
    const isOver = maxLength !== undefined && charCount > maxLength

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) setInternalCount(e.target.value.length)
      onChange?.(e)
    }

    const descId = error ? errorId : helperText ? helperId : undefined
    const showFooter = showCount || error || helperText

    return (
      <div
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        data-full-width={fullWidth ? 'true' : undefined}
        data-disabled={disabled ? 'true' : undefined}
        data-error={hasError ? 'true' : undefined}
      >
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={descId}
          className={styles.textarea}
          data-resize={resize}
          {...(isControlled ? { value } : { defaultValue })}
          onChange={handleChange}
          {...rest}
        />

        {showFooter && (
          <div className={styles.footer}>
            {(error || helperText) ? (
              <span
                id={descId}
                role={error ? 'alert' : undefined}
                className={[styles.helper, hasError ? styles.helperError : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                {error ?? helperText}
              </span>
            ) : (
              <span /> /* spacer when only counter is shown */
            )}

            {showCount && maxLength !== undefined && (
              <span
                className={styles.counter}
                data-over={isOver ? 'true' : undefined}
                aria-live="polite"
                aria-label={`${charCount} of ${maxLength} characters`}
              >
                {charCount}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
