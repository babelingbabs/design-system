import React, { useId } from 'react'
import { motion } from 'framer-motion'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  size?: CheckboxSize
  name?: string
  value?: string
  id?: string
  className?: string
}

const sizeConfig: Record<CheckboxSize, { box: string; icon: number; gap: string; text: string }> = {
  sm: { box: 'w-3.5 h-3.5 rounded-[3px]', icon: 8,  gap: 'gap-1.5', text: 'text-xs' },
  md: { box: 'w-4 h-4 rounded-[4px]',     icon: 10, gap: 'gap-2',   text: 'text-sm' },
  lg: { box: 'w-5 h-5 rounded-[5px]',     icon: 12, gap: 'gap-2.5', text: 'text-base' },
}

export function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  indeterminate = false,
  size = 'md',
  name,
  value,
  id: externalId,
  className = '',
}: CheckboxProps) {
  const autoId = useId()
  const id = externalId ?? autoId
  const cfg = sizeConfig[size]

  const isChecked = indeterminate ? 'mixed' : checked

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault()
      if (!disabled) onChange(!checked)
    }
  }

  const box = (
    <motion.div
      role="checkbox"
      aria-checked={isChecked}
      aria-disabled={disabled || undefined}
      id={label ? undefined : id}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange(!checked)}
      onKeyDown={handleKeyDown}
      animate={{
        backgroundColor:
          checked || indeterminate
            ? 'var(--color-accent-500)'
            : 'var(--color-bg-base)',
        borderColor:
          checked || indeterminate
            ? 'var(--color-accent-600)'
            : 'var(--color-border-default)',
      }}
      transition={{ duration: 0.12 }}
      className={`
        ${cfg.box}
        shrink-0
        border
        flex items-center justify-center
        focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
      `.replace(/\s+/g, ' ').trim()}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <motion.svg
        width={cfg.icon}
        height={cfg.icon}
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden
        initial={false}
        animate={{ opacity: checked || indeterminate ? 1 : 0, scale: checked || indeterminate ? 1 : 0.5 }}
        transition={{ duration: 0.12 }}
      >
        {indeterminate ? (
          <path d="M2 5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        ) : (
          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </motion.svg>
    </motion.div>
  )

  if (!label) {
    return (
      <div className={className}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
          aria-hidden
          tabIndex={-1}
        />
        {box}
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center ${cfg.gap} ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => !disabled && onChange(e.target.checked)}
        disabled={disabled}
        className="sr-only"
        aria-hidden
        tabIndex={-1}
      />
      {box}
      <label
        htmlFor={id}
        className={`
          ${cfg.text}
          ${disabled ? 'text-[var(--color-fg-disabled)] cursor-not-allowed' : 'text-[var(--color-fg-primary)] cursor-pointer'}
          select-none leading-none
        `.replace(/\s+/g, ' ').trim()}
        style={{ fontFamily: 'var(--font-sans)' }}
        onClick={(e) => {
          e.preventDefault()
          if (!disabled) onChange(!checked)
        }}
      >
        {label}
      </label>
    </div>
  )
}
