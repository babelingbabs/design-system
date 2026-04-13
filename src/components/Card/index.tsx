import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { CardProps } from './Card.types'
import styles from './Card.module.css'

type MotionDivProps = Omit<HTMLMotionProps<'div'>, keyof CardProps> & CardProps

export const Card = forwardRef<HTMLDivElement, MotionDivProps>(
  (
    {
      variant = 'border',
      padding = 'md',
      hoverable = false,
      header,
      footer,
      media,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const hasStructure = Boolean(header || footer || media)

    return (
      <motion.div
        ref={ref}
        className={[styles.card, className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-padding={padding}
        data-hoverable={hoverable ? 'true' : undefined}
        whileHover={
          hoverable
            ? {
                y: -3,
                boxShadow: 'var(--shadow-lg)',
                borderColor: 'var(--color-border-strong)',
              }
            : undefined
        }
        transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
        {...rest}
      >
        {media && <div className={styles.media}>{media}</div>}

        {hasStructure ? (
          <>
            {header && <div className={styles.header}>{header}</div>}
            {children && <div className={styles.body}>{children}</div>}
            {footer && <div className={styles.footer}>{footer}</div>}
          </>
        ) : (
          <div className={styles.body}>{children}</div>
        )}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'
