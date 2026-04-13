import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ButtonProps } from './Button.types'
import styles from './Button.module.css'

const Spinner = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={styles.spinner}
  >
    <circle
      cx="8" cy="8" r="6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="28"
      strokeDashoffset="10"
      opacity="0.9"
    />
  </svg>
)

type MotionButtonProps = Omit<HTMLMotionProps<'button'>, keyof ButtonProps> & ButtonProps

export const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      disabled,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <motion.button
        ref={ref}
        className={[styles.button, className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-full-width={fullWidth ? 'true' : undefined}
        disabled={isDisabled}
        whileTap={isDisabled ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
        aria-busy={loading}
        {...rest}
      >
        {loading ? (
          <Spinner />
        ) : leadingIcon ? (
          <span aria-hidden="true" className={styles.iconWrapper}>
            {leadingIcon}
          </span>
        ) : null}

        {children && (
          <span className={styles.label}>{children}</span>
        )}

        {!loading && trailingIcon && (
          <span aria-hidden="true" className={styles.iconWrapper}>
            {trailingIcon}
          </span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
