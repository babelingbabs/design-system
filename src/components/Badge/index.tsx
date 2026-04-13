import { forwardRef } from 'react'
import type { BadgeProps } from './Badge.types'
import styles from './Badge.module.css'

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', dot = false, children, className, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={[styles.badge, className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        {...rest}
      >
        {dot && <span aria-hidden="true" className={styles.dot} />}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
