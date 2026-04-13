import { forwardRef, useId } from 'react'
import type { InputProps } from './Input.types'
import styles from './Input.module.css'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leadingIcon,
      trailingIcon,
      leadingAddon,
      trailingAddon,
      inputSize = 'md',
      fullWidth = true,
      disabled,
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

    return (
      <div
        className={styles.wrapper}
        data-full-width={fullWidth ? 'true' : undefined}
        data-disabled={disabled ? 'true' : undefined}
      >
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <div
          className={styles.row}
          data-error={hasError ? 'true' : undefined}
          data-has-leading-addon={leadingAddon ? 'true' : undefined}
          data-has-trailing-addon={trailingAddon ? 'true' : undefined}
          data-size={inputSize}
        >
          {leadingAddon && (
            <div className={`${styles.addon} ${styles.addonLeading}`}>
              {leadingAddon}
            </div>
          )}

          <div
            className={styles.inputWrap}
            data-size={inputSize}
            data-has-leading={leadingIcon ? 'true' : undefined}
            data-has-trailing={trailingIcon ? 'true' : undefined}
          >
            {leadingIcon && (
              <span className={`${styles.icon} ${styles.iconLeading}`}>
                {leadingIcon}
              </span>
            )}

            <input
              ref={ref}
              id={id}
              disabled={disabled}
              aria-invalid={hasError}
              aria-describedby={error ? errorId : helperText ? helperId : undefined}
              className={[styles.input, className].filter(Boolean).join(' ')}
              {...rest}
            />

            {trailingIcon && (
              <span className={`${styles.icon} ${styles.iconTrailing}`}>
                {trailingIcon}
              </span>
            )}
          </div>

          {trailingAddon && (
            <div className={`${styles.addon} ${styles.addonTrailing}`}>
              {trailingAddon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <span
            id={error ? errorId : helperId}
            role={error ? 'alert' : undefined}
            className={[styles.helper, hasError ? styles.helperError : ''].filter(Boolean).join(' ')}
          >
            {error ?? helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
