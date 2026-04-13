import { forwardRef } from 'react'
import type { CodeProps } from './Code.types'
import styles from './Code.module.css'

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ inline = true, className, children, ...rest }, ref) => {
    if (inline) {
      return (
        <code
          ref={ref as React.Ref<HTMLElement>}
          className={[styles.inline, className].filter(Boolean).join(' ')}
          {...rest}
        >
          {children}
        </code>
      )
    }

    return (
      <pre
        ref={ref as React.Ref<HTMLPreElement>}
        className={[styles.block, className].filter(Boolean).join(' ')}
        {...(rest as React.HTMLAttributes<HTMLPreElement>)}
      >
        <code>{children}</code>
      </pre>
    )
  }
)

Code.displayName = 'Code'
