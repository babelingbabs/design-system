import { forwardRef, useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { SelectProps } from './Select.types'
import styles from './Select.module.css'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      helperText,
      error,
      placeholder,
      size = 'md',
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

    // Track whether placeholder is showing (for styling)
    const isControlled = value !== undefined
    const [internalHasValue, setInternalHasValue] = useState(
      () => Boolean(defaultValue && defaultValue !== '')
    )
    const hasValue = isControlled
      ? Boolean(value && value !== '')
      : internalHasValue

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!isControlled) {
        setInternalHasValue(e.target.value !== '')
      }
      onChange?.(e)
    }

    return (
      <div
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        data-full-width={fullWidth ? 'true' : undefined}
        data-disabled={disabled ? 'true' : undefined}
      >
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <div
          className={styles.selectWrap}
          data-error={hasError ? 'true' : undefined}
        >
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={styles.select}
            data-size={size}
            data-placeholder={!hasValue && Boolean(placeholder) ? 'true' : undefined}
            {...(isControlled ? { value } : { defaultValue })}
            onChange={handleChange}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          <span className={styles.chevron} aria-hidden="true">
            <ChevronDown size={16} strokeWidth={2} />
          </span>
        </div>

        {(error || helperText) && (
          <span
            id={error ? errorId : helperId}
            role={error ? 'alert' : undefined}
            className={[styles.helper, hasError ? styles.helperError : '']
              .filter(Boolean)
              .join(' ')}
          >
            {error ?? helperText}
          </span>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
