import React, { useId, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Label } from '../Typography/Typography'

export type SliderSize = 'sm' | 'md' | 'lg'

export interface SliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  disabled?: boolean
  size?: SliderSize
  showValue?: boolean
  id?: string
  className?: string
}

const sizeConfig: Record<SliderSize, { track: string; thumb: string }> = {
  sm: { track: 'h-1',   thumb: 'w-3.5 h-3.5' },
  md: { track: 'h-1.5', thumb: 'w-4 h-4' },
  lg: { track: 'h-2',   thumb: 'w-5 h-5' },
}

export function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  disabled = false,
  size = 'md',
  showValue = false,
  id: externalId,
  className = '',
}: SliderProps) {
  const autoId = useId()
  const id = externalId ?? autoId
  const trackRef = useRef<HTMLDivElement>(null)
  const cfg = sizeConfig[size]

  const clamp = (v: number) => Math.min(max, Math.max(min, v))
  const snap = (v: number) => Math.round((v - min) / step) * step + min
  const percent = ((value - min) / (max - min)) * 100

  const computeValue = useCallback((clientX: number): number => {
    if (!trackRef.current) return value
    const rect = trackRef.current.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    return clamp(snap(min + ratio * (max - min)))
  }, [min, max, step, value]) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePointerDown = (e: React.PointerEvent) => {
    if (disabled) return
    e.currentTarget.setPointerCapture(e.pointerId)
    onChange(computeValue(e.clientX))
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (disabled || !e.currentTarget.hasPointerCapture(e.pointerId)) return
    onChange(computeValue(e.clientX))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return
    const stepVal = e.shiftKey ? step * 10 : step
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault()
        onChange(clamp(snap(value - stepVal)))
        break
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault()
        onChange(clamp(snap(value + stepVal)))
        break
      case 'Home':
        e.preventDefault()
        onChange(min)
        break
      case 'End':
        e.preventDefault()
        onChange(max)
        break
    }
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <Label htmlFor={id}>{label}</Label>}
          {showValue && (
            <span
              className="text-xs tabular-nums text-[var(--color-fg-secondary)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {value}
            </span>
          )}
        </div>
      )}

      {/* Accessible native input (visually hidden, used for form submission) */}
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="sr-only"
        aria-hidden
        tabIndex={-1}
      />

      {/* Visual track */}
      <div
        ref={trackRef}
        className={`
          relative flex items-center w-full select-none
          ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
          py-2
        `.replace(/\s+/g, ' ').trim()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        {/* Background track */}
        <div
          className={`
            w-full ${cfg.track} rounded-full
            bg-[var(--color-border-default)]
            overflow-hidden
          `.replace(/\s+/g, ' ').trim()}
        >
          {/* Filled portion */}
          <div
            className={`h-full rounded-full bg-[var(--color-accent-500)] transition-none`}
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Thumb */}
        <motion.div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={String(value)}
          aria-disabled={disabled || undefined}
          aria-label={label}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          whileTap={disabled ? {} : { scale: 1.2 }}
          whileHover={disabled ? {} : { scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
          className={`
            absolute ${cfg.thumb} rounded-full
            bg-white
            focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none
            -translate-x-1/2
          `.replace(/\s+/g, ' ').trim()}
          style={{
            left: `${percent}%`,
            boxShadow: '0 1px 4px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)',
            border: '1.5px solid var(--color-border-default)',
            touchAction: 'none',
          }}
        />
      </div>
    </div>
  )
}
