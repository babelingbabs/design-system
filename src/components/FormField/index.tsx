import { forwardRef } from 'react'
import { Label } from '../Typography/Label'
import type { FormFieldProps } from './FormField.types'
import styles from './FormField.module.css'

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      htmlFor,
      helperText,
      error,
      required = false,
      disabled = false,
      children,
      className,
    },
    ref
  ) => {
    const hasError = Boolean(error)

    return (
      <div
        ref={ref}
        className={[styles.field, className].filter(Boolean).join(' ')}
      >
        {label && (
          <Label
            htmlFor={htmlFor}
            required={required}
            disabled={disabled}
            size="md"
          >
            {label}
          </Label>
        )}

        {children}

        {(error || helperText) && (
          <span
            role={hasError ? 'alert' : undefined}
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

FormField.displayName = 'FormField'
