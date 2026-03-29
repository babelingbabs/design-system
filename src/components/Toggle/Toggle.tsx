import React from 'react'
import { motion } from 'framer-motion'

export type ToggleSize = 'sm' | 'md'

export interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  size?: ToggleSize
  label?: React.ReactNode
  disabled?: boolean
  id?: string
  className?: string
}

const sizeConfig: Record<ToggleSize, {
  track: React.CSSProperties
  thumb: React.CSSProperties
  thumbOff: number
  thumbOn: number
}> = {
  sm: {
    track: { width: '34px', height: '20px', borderRadius: '10px' },
    thumb: { width: '16px', height: '16px', borderRadius: '8px' },
    thumbOff: 2,
    thumbOn:  16,
  },
  md: {
    track: { width: '51px', height: '31px', borderRadius: '15.5px' },
    thumb: { width: '27px', height: '27px', borderRadius: '13.5px' },
    thumbOff: 2,
    thumbOn:  22,
  },
}

export function Toggle({
  checked,
  onChange,
  size = 'md',
  label,
  disabled = false,
  id,
  className = '',
}: ToggleProps) {
  const cfg = sizeConfig[size]
  const thumbX = checked ? cfg.thumbOn : cfg.thumbOff

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      if (!disabled) onChange(!checked)
    }
  }

  const toggleEl = (
    <motion.div
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      id={id}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange(!checked)}
      onKeyDown={handleKeyDown}
      animate={{
        backgroundColor: checked
          ? 'var(--color-system-green)'
          : 'var(--color-system-gray-4)',
      }}
      transition={{ duration: 0.2 }}
      style={{
        ...cfg.track,
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        flexShrink: 0,
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
      className="focus-visible:shadow-[var(--shadow-focus)]"
    >
      <motion.div
        animate={{ x: thumbX }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
          mass: 0.8,
        }}
        style={{
          ...cfg.thumb,
          position: 'absolute',
          top: '50%',
          translateY: '-50%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px rgba(0,0,0,0.25), 0 1px 1px rgba(0,0,0,0.12)',
        }}
      />
    </motion.div>
  )

  if (!label) {
    return <div className={className}>{toggleEl}</div>
  }

  return (
    <label
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.0625rem',
          fontWeight: '400',
          lineHeight: '1.375rem',
          letterSpacing: '-0.43px',
          color: disabled
            ? 'var(--color-fg-disabled)'
            : 'var(--color-fg-primary)',
          userSelect: 'none',
        }}
      >
        {label}
      </span>
      {toggleEl}
    </label>
  )
}
