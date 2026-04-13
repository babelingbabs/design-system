import { forwardRef } from 'react'
import type { StackProps } from './Stack.types'
import styles from './Stack.module.css'

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      direction = 'vertical',
      gap = 4,
      align,
      justify,
      wrap = false,
      as: Component = 'div',
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={[styles.stack, className].filter(Boolean).join(' ')}
        data-direction={direction}
        data-wrap={wrap ? 'true' : 'false'}
        data-align={align}
        data-justify={justify}
        style={{ gap: `var(--spacing-${gap})`, ...style }}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Stack.displayName = 'Stack'
