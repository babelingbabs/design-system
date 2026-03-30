import React, { useState, useRef, useEffect, useCallback, useId } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  /** Tooltip content */
  content: React.ReactNode
  /** Preferred position */
  position?: TooltipPosition
  /** Delay before showing (ms) */
  delay?: number
  /** Max width in px */
  maxWidth?: number
  disabled?: boolean
  children: React.ReactElement
}

interface Coords { top: number; left: number }

const GAP = 8

function computeCoords(trigger: DOMRect, tooltip: DOMRect, position: TooltipPosition): Coords {
  const scrollX = window.scrollX
  const scrollY = window.scrollY
  switch (position) {
    case 'top':
      return {
        top: trigger.top - tooltip.height - GAP + scrollY,
        left: trigger.left + trigger.width / 2 - tooltip.width / 2 + scrollX,
      }
    case 'bottom':
      return {
        top: trigger.bottom + GAP + scrollY,
        left: trigger.left + trigger.width / 2 - tooltip.width / 2 + scrollX,
      }
    case 'left':
      return {
        top: trigger.top + trigger.height / 2 - tooltip.height / 2 + scrollY,
        left: trigger.left - tooltip.width - GAP + scrollX,
      }
    case 'right':
      return {
        top: trigger.top + trigger.height / 2 - tooltip.height / 2 + scrollY,
        left: trigger.right + GAP + scrollX,
      }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const motionVariants: Record<TooltipPosition, { hidden: any; visible: any }> = {
  top:    { hidden: { opacity: 0, scale: 0.92, y: 4 },  visible: { opacity: 1, scale: 1, y: 0 } },
  bottom: { hidden: { opacity: 0, scale: 0.92, y: -4 }, visible: { opacity: 1, scale: 1, y: 0 } },
  left:   { hidden: { opacity: 0, scale: 0.92, x: 4 },  visible: { opacity: 1, scale: 1, x: 0 } },
  right:  { hidden: { opacity: 0, scale: 0.92, x: -4 }, visible: { opacity: 1, scale: 1, x: 0 } },
} as const

const arrowStyle: Record<TooltipPosition, React.CSSProperties> = {
  top:    { bottom: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
  bottom: { top: -4,    left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
  left:   { right: -4,  top: '50%',  transform: 'translateY(-50%) rotate(45deg)' },
  right:  { left: -4,   top: '50%',  transform: 'translateY(-50%) rotate(45deg)' },
} as const

export function Tooltip({
  content,
  position = 'top',
  delay = 300,
  maxWidth = 250,
  disabled = false,
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rawId = useId()
  const tooltipId = `tooltip-${rawId.replace(/:/g, '')}`

  const show = useCallback(() => {
    if (disabled) return
    delayTimer.current = setTimeout(() => setVisible(true), delay)
  }, [disabled, delay])

  const hide = useCallback(() => {
    if (delayTimer.current) clearTimeout(delayTimer.current)
    setVisible(false)
  }, [])

  // Recompute position after tooltip renders
  useEffect(() => {
    if (!visible || !triggerRef.current) return
    const trig = triggerRef.current.getBoundingClientRect()
    // Use estimated size on first render, then real size
    const tip = tooltipRef.current?.getBoundingClientRect() ?? new DOMRect(0, 0, 160, 32)
    setCoords(computeCoords(trig, tip, position))
  }, [visible, position])

  const child = React.Children.only(children)

  const clonedChild = React.cloneElement(child, {
    ...child.props,
    ref: (node: HTMLElement | null) => {
      triggerRef.current = node
      const ref = (child as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref
      if (typeof ref === 'function') ref(node)
      else if (ref && 'current' in ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node
    },
    onMouseEnter: (e: React.MouseEvent) => { show(); child.props.onMouseEnter?.(e) },
    onMouseLeave: (e: React.MouseEvent) => { hide(); child.props.onMouseLeave?.(e) },
    onFocus:      (e: React.FocusEvent) => { show(); child.props.onFocus?.(e) },
    onBlur:       (e: React.FocusEvent) => { hide(); child.props.onBlur?.(e) },
    ...(visible ? { 'aria-describedby': tooltipId } : {}),
  })

  return (
    <>
      {clonedChild}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {visible && (
            <motion.div
              ref={tooltipRef}
              id={tooltipId}
              role="tooltip"
              initial={motionVariants[position].hidden}
              animate={motionVariants[position].visible}
              exit={motionVariants[position].hidden}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'absolute',
                top: coords.top,
                left: coords.left,
                zIndex: 1550,
                maxWidth,
                padding: '5px 10px',
                backgroundColor: 'var(--color-bg-inverse)',
                color: 'var(--color-fg-inverse)',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-footnote)',
                fontWeight: '400',
                lineHeight: 'var(--lh-footnote)',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {content}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  width: 7,
                  height: 7,
                  backgroundColor: 'var(--color-bg-inverse)',
                  ...arrowStyle[position],
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
