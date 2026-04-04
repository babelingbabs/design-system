import React, { useId } from 'react'
import { motion } from 'framer-motion'

export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  size?: SwitchSize
  id?: string
  className?: string
}

const sizeConfig: Record<SwitchSize, {
  track: React.CSSProperties
  thumb: React.CSSProperties
  thumbOff: number
  thumbOn: number
  text: string
}> = {
  sm: {
    track: { width: '34px', height: '20px', borderRadius: '10px' },
    thumb: { width: '14px', height: '14px', borderRadius: '7px' },
    thumbOff: 3,
    thumbOn: 17,
    text: 'text-xs',
  },
  md: {
    track: { width: '44px', height: '26px', borderRadius: '13px' },
    thumb: { width: '20px', height: '20px', borderRadius: '10px' },
    thumbOff: 3,
    thumbOn: 21,
    text: 'text-sm',
  },
  lg: {
    track: { width: '56px', height: '32px', borderRadius: '16px' },
    thumb: { width: '26px', height: '26px', borderRadius: '13px' },
    thumbOff: 3,
    thumbOn: 27,
    text: 'text-base',
  },
}

export function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'md',
  id: externalId,
  className = '',
}: SwitchProps) {
  const autoId = useId()
  const id = externalId ?? autoId
  const cfg = sizeConfig[size]
  const thumbX = checked ? cfg.thumbOn : cfg.thumbOff

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      if (!disabled) onChange(!checked)
    }
  }

  const track = (
    <motion.div
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      id={label ? undefined : id}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange(!checked)}
      onKeyDown={handleKeyDown}
      animate={{
        backgroundColor: checked
          ? 'var(--color-accent-500)'
          : 'var(--color-border-strong)',
      }}
      transition={{ duration: 0.2 }}
      className="focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none shrink-0"
      style={{
        ...cfg.track,
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        WebkitTapHighlightColor: 'transparent',
      }}
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
    return <div className={className}>{track}</div>
  }

  return (
    <label
      className={`inline-flex items-center gap-3 ${className}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {track}
      <span
        id={id}
        className={`
          ${cfg.text} select-none
          ${disabled ? 'text-[var(--color-fg-disabled)]' : 'text-[var(--color-fg-primary)]'}
        `.replace(/\s+/g, ' ').trim()}
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </span>
    </label>
  )
}
