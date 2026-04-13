import { forwardRef } from 'react'
import type { LabelProps } from './Label.types'
import styles from './Label.module.css'

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size = 'md',
      required = false,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={[styles.label, className].filter(Boolean).join(' ')}
        data-size={size}
        data-disabled={disabled ? 'true' : undefined}
        {...rest}
      >
        {children}
        {required && (
          <span aria-hidden="true" className={styles.asterisk}>
            *
          </span>
        )}
      </label>
    )
  }
)

Label.displayName = 'Label'
