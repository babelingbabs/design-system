import { forwardRef, useId, useRef, useState, useImperativeHandle } from 'react'
import { motion } from 'framer-motion'
import type { SwitchProps } from './Switch.types'
import styles from './Switch.module.css'

// Travel distance (px) = track width - 2*padding - thumb width
const THUMB_OFFSETS: Record<string, number> = {
  sm: 14, // 32 - 4 - 14
  md: 20, // 44 - 4 - 20
  lg: 26, // 56 - 4 - 26
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      labelPosition = 'right',
      size = 'md',
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

    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => innerRef.current!)

    const isControlled = checked !== undefined
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false)
    const isChecked = isControlled ? !!checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked)
      onChange?.(e)
    }

    const labelEl = label ? (
      <span className={styles.label}>
        <label htmlFor={id}>{label}</label>
      </span>
    ) : null

    return (
      <div
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        data-disabled={disabled ? 'true' : undefined}
      >
        {labelPosition === 'left' && labelEl}

        <div className={styles.control}>
          <input
            ref={innerRef}
            type="checkbox"
            role="switch"
            id={id}
            {...(isControlled ? { checked } : { defaultChecked })}
            onChange={handleChange}
            disabled={disabled}
            aria-checked={isChecked}
            className={styles.nativeInput}
            {...rest}
          />
          <div
            className={styles.track}
            data-checked={isChecked ? 'true' : undefined}
            data-size={size}
            aria-hidden="true"
          >
            <motion.div
              className={styles.thumb}
              animate={{ x: isChecked ? THUMB_OFFSETS[size] : 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>

        {labelPosition === 'right' && labelEl}
      </div>
    )
  }
)

Switch.displayName = 'Switch'
