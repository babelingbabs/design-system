import { useState } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { AnimatePresence, motion } from 'framer-motion'
import type { TooltipProps } from './Tooltip.types'
import styles from './Tooltip.module.css'

export function Tooltip({
  content,
  children,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  sideOffset = 8,
}: TooltipProps) {
  const [open, setOpen] = useState(false)

  const yOffset = side === 'bottom' ? -4 : 4

  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal forceMount>
          <AnimatePresence>
            {open && (
              <RadixTooltip.Content
                asChild
                forceMount
                side={side}
                align={align}
                sideOffset={sideOffset}
              >
                <motion.div
                  className={styles.content}
                  initial={{ opacity: 0, y: yOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: yOffset }}
                  transition={{ duration: 0.12, ease: [0.4, 0, 0.2, 1] }}
                >
                  {content}
                  <RadixTooltip.Arrow className={styles.arrow} width={8} height={4} />
                </motion.div>
              </RadixTooltip.Content>
            )}
          </AnimatePresence>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
