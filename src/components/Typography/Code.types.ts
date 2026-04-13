import type { HTMLAttributes } from 'react'

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  /** Renders as inline <code> when true, block <pre><code> when false */
  inline?: boolean
}
