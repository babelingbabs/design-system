import { forwardRef, useId, useRef, useEffect, useState, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { CheckboxProps } from './Checkbox.types'
import styles from './Checkbox.module.css'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      indeterminate = false,
      checked,
      defaultChecked,
      onChange,
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

    // Internal ref for setting indeterminate property
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])

    // Track visual checked state for Framer Motion animation
    const isControlled = checked !== undefined
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false)
    const isChecked = isControlled ? !!checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked)
      }
      onChange?.(e)
    }

    const descId = error ? errorId : helperText ? helperId : undefined
    const showVisual = isChecked || indeterminate

    return (
      <div
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        data-disabled={disabled ? 'true' : undefined}
        data-error={hasError ? 'true' : undefined}
      >
        <div className={styles.control}>
          <div className={styles.inputWrap} data-size={size}>
            <input
              ref={innerRef}
              type="checkbox"
              id={id}
              {...(isControlled ? { checked } : { defaultChecked })}
              onChange={handleChange}
              disabled={disabled}
              aria-checked={indeterminate ? 'mixed' : undefined}
              aria-describedby={descId}
              aria-invalid={hasError || undefined}
              className={styles.nativeInput}
              {...rest}
            />
            <div
              className={styles.box}
              data-checked={showVisual ? 'true' : undefined}
              data-indeterminate={indeterminate ? 'true' : undefined}
              aria-hidden="true"
            >
              <AnimatePresence>
                {showVisual && (
                  <motion.svg
                    key={indeterminate ? 'dash' : 'check'}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.icon}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {indeterminate ? (
                      <line x1="4" y1="8" x2="12" y2="8" />
                    ) : (
                      <polyline points="3.5,9 7,12.5 12.5,4.5" />
                    )}
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>
          </div>

          {(label || helperText || error) && (
            <div className={styles.textContent}>
              {label && (
                <label htmlFor={id} className={styles.label} data-size={size}>
                  {label}
                </label>
              )}
              {(error || helperText) && (
                <span
                  id={descId}
                  role={error ? 'alert' : undefined}
                  className={[styles.helper, hasError ? styles.helperError : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  {error ?? helperText}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
