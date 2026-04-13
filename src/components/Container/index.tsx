import { forwardRef } from 'react'
import type { ContainerProps } from './Container.types'
import styles from './Container.module.css'

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ size = 'lg', padding = true, as: Component = 'div', children, className, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={[styles.container, className].filter(Boolean).join(' ')}
        data-size={size}
        data-padding={padding ? 'true' : 'false'}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Container.displayName = 'Container'
