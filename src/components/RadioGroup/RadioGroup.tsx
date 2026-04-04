import React, { useId, createContext, useContext, useRef } from 'react'
import { motion } from 'framer-motion'

// ─── Context ─────────────────────────────────────────────────────────────────

interface RadioGroupContextValue {
  value: string
  onChange: (value: string) => void
  name: string
  disabled: boolean
  groupRef: React.RefObject<HTMLDivElement | null>
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroup() {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error('RadioItem must be used inside RadioGroup')
  return ctx
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type RadioOrientation = 'horizontal' | 'vertical'

export interface RadioGroupProps {
  value: string
  onChange: (value: string) => void
  name?: string
  label?: string
  disabled?: boolean
  orientation?: RadioOrientation
  children: React.ReactNode
  className?: string
}

export interface RadioItemProps {
  value: string
  label: string
  disabled?: boolean
}

// ─── RadioGroup ───────────────────────────────────────────────────────────────

export function RadioGroup({
  value,
  onChange,
  name: externalName,
  label,
  disabled = false,
  orientation = 'vertical',
  children,
  className = '',
}: RadioGroupProps) {
  const autoName = useId()
  const name = externalName ?? autoName
  const groupRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!groupRef.current) return
    const items = Array.from(
      groupRef.current.querySelectorAll<HTMLElement>('[role="radio"]:not([aria-disabled="true"])')
    )
    const idx = items.findIndex((el) => el === document.activeElement)
    if (idx === -1) return

    const isVertical = orientation === 'vertical'
    const prev = isVertical ? 'ArrowUp' : 'ArrowLeft'
    const next = isVertical ? 'ArrowDown' : 'ArrowRight'

    if (e.key === prev || e.key === next) {
      e.preventDefault()
      const nextIdx = e.key === next
        ? (idx + 1) % items.length
        : (idx - 1 + items.length) % items.length
      items[nextIdx].focus()
      items[nextIdx].click()
    }
  }

  return (
    <RadioGroupContext.Provider value={{ value, onChange, name, disabled, groupRef }}>
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <span
            className="text-sm font-medium text-[var(--color-fg-primary)] select-none"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {label}
          </span>
        )}
        <div
          ref={groupRef}
          role="radiogroup"
          aria-label={label}
          aria-disabled={disabled || undefined}
          onKeyDown={handleKeyDown}
          className={`
            flex ${orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row flex-wrap gap-4'}
          `.replace(/\s+/g, ' ').trim()}
        >
          {children}
        </div>
      </div>
    </RadioGroupContext.Provider>
  )
}

// ─── RadioItem ────────────────────────────────────────────────────────────────

export function RadioItem({ value: itemValue, label, disabled: itemDisabled = false }: RadioItemProps) {
  const { value, onChange, name, disabled: groupDisabled } = useRadioGroup()
  const isDisabled = groupDisabled || itemDisabled
  const isChecked = value === itemValue
  const itemId = useId()

  const handleClick = () => {
    if (!isDisabled) onChange(itemValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      <input
        type="radio"
        id={itemId}
        name={name}
        value={itemValue}
        checked={isChecked}
        onChange={() => !isDisabled && onChange(itemValue)}
        disabled={isDisabled}
        className="sr-only"
        aria-hidden
        tabIndex={-1}
      />
      <motion.div
        role="radio"
        aria-checked={isChecked}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        animate={{
          borderColor: isChecked
            ? 'var(--color-accent-500)'
            : 'var(--color-border-default)',
        }}
        transition={{ duration: 0.12 }}
        className={`
          w-4 h-4 rounded-full shrink-0
          border-2 flex items-center justify-center
          focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none
          ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
        `.replace(/\s+/g, ' ').trim()}
        style={{
          backgroundColor: 'var(--color-bg-base)',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <motion.div
          animate={{
            scale: isChecked ? 1 : 0,
            opacity: isChecked ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.6 }}
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)]"
        />
      </motion.div>
      <label
        htmlFor={itemId}
        className={`
          text-sm leading-none select-none
          ${isDisabled
            ? 'text-[var(--color-fg-disabled)] cursor-not-allowed'
            : 'text-[var(--color-fg-primary)] cursor-pointer'}
        `.replace(/\s+/g, ' ').trim()}
        style={{ fontFamily: 'var(--font-sans)' }}
        onClick={(e) => { e.preventDefault(); handleClick() }}
      >
        {label}
      </label>
    </div>
  )
}
