import { forwardRef, createElement } from 'react'
import type { HeadingProps, HeadingSize } from './Heading.types'
import styles from './Heading.module.css'

const LEVEL_TO_SIZE: Record<number, HeadingSize> = {
  1: '4xl',
  2: '3xl',
  3: '2xl',
  4: 'xl',
  5: 'lg',
  6: 'base',
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      size,
      weight = 'semibold',
      color = 'default',
      as,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const tag = as ?? (`h${level}` as const)
    const resolvedSize = size ?? LEVEL_TO_SIZE[level]

    return createElement(
      tag,
      {
        ref,
        className: [styles.heading, className].filter(Boolean).join(' '),
        'data-size': resolvedSize,
        'data-weight': weight,
        'data-color': color,
        ...rest,
      },
      children
    )
  }
)

Heading.displayName = 'Heading'
