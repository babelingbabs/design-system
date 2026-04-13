import { createContext, forwardRef, useContext, useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type {
  RadioGroupProps,
  RadioProps,
  RadioGroupContextValue,
} from './Radio.types'
import styles from './Radio.module.css'

// ---- Context ----

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroup() {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error('Radio must be rendered inside a RadioGroup')
  return ctx
}

// ---- RadioGroup ----

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      name: providedName,
      label,
      helperText,
      error,
      disabled = false,
      direction = 'vertical',
      children,
      className,
    },
    ref
  ) => {
    const autoId = useId()
    const autoName = useId()
    const groupId = autoId
    const name = providedName ?? autoName
    const helperId = `${groupId}-helper`
    const errorId = `${groupId}-error`
    const hasError = Boolean(error)

    // Uncontrolled state
    const isControlled = value !== undefined
    const [internalValue, setInternalValue] = useState(defaultValue)
    const selectedValue = isControlled ? value : internalValue

    const handleChange = (val: string) => {
      if (!isControlled) setInternalValue(val)
      onChange?.(val)
    }

    const ctx: RadioGroupContextValue = {
      name,
      selectedValue,
      onChange: handleChange,
      disabled,
      hasError,
      groupId,
    }

    return (
      <RadioGroupContext.Provider value={ctx}>
        <fieldset
          ref={ref}
          className={[styles.group, className].filter(Boolean).join(' ')}
          data-disabled={disabled ? 'true' : undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
        >
          {label && (
            <legend className={styles.groupLabel}>{label}</legend>
          )}

          <div
            className={styles.items}
            data-direction={direction}
          >
            {children}
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
        </fieldset>
      </RadioGroupContext.Provider>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

// ---- Radio ----

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, disabled: individualDisabled, className }, ref) => {
    const { name, selectedValue, onChange, disabled: groupDisabled, hasError } =
      useRadioGroup()

    const isDisabled = groupDisabled || (individualDisabled ?? false)
    const isChecked = selectedValue === value

    const handleChange = () => {
      if (!isDisabled) onChange(value)
    }

    return (
      <label
        className={[styles.item, className].filter(Boolean).join(' ')}
        data-disabled={isDisabled ? 'true' : undefined}
        data-error={hasError ? 'true' : undefined}
      >
        <div className={styles.inputWrap}>
          <input
            ref={ref}
            type="radio"
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={isDisabled}
            aria-invalid={hasError || undefined}
            className={styles.nativeInput}
          />
          <div
            className={styles.circle}
            data-checked={isChecked ? 'true' : undefined}
            aria-hidden="true"
          >
            <AnimatePresence>
              {isChecked && (
                <motion.div
                  className={styles.dot}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {label && <span className={styles.itemLabel}>{label}</span>}
      </label>
    )
  }
)

Radio.displayName = 'Radio'
