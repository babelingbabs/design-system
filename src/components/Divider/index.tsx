import { forwardRef } from 'react'
import type { DividerProps } from './Divider.types'
import styles from './Divider.module.css'

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', decorative = true, label, spacing, className, ...rest }, ref) => {
    const ariaProps = decorative
      ? { role: 'none' as const, 'aria-hidden': true as const }
      : { role: 'separator' as const, 'aria-orientation': orientation }

    if (label) {
      return (
        <div
          ref={ref}
          className={[styles.withLabel, className].filter(Boolean).join(' ')}
          data-spacing={spacing}
          {...ariaProps}
          {...rest}
        >
          <span className={styles.line} />
          <span className={styles.labelText}>{label}</span>
          <span className={styles.line} />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={[styles.divider, className].filter(Boolean).join(' ')}
        data-orientation={orientation}
        data-spacing={spacing}
        {...ariaProps}
        {...rest}
      />
    )
  }
)

Divider.displayName = 'Divider'
