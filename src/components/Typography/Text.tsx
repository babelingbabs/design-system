import { forwardRef, createElement } from 'react'
import type { TextProps } from './Text.types'
import styles from './Text.module.css'

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as = 'span',
      size = 'base',
      weight = 'regular',
      color = 'default',
      align,
      truncate = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return createElement(
      as,
      {
        ref,
        className: [styles.text, className].filter(Boolean).join(' '),
        'data-size': size,
        'data-weight': weight,
        'data-color': color,
        'data-align': align,
        'data-truncate': truncate ? 'true' : undefined,
        ...rest,
      },
      children
    )
  }
)

Text.displayName = 'Text'
