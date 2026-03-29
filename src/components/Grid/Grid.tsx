import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Layout Grid ─────────────────────────────────────

export interface GridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 6 | 8 | 12
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const colsMap: Record<NonNullable<GridProps['cols']>, string> = {
  1:  'grid-cols-1',
  2:  'grid-cols-2',
  3:  'grid-cols-3',
  4:  'grid-cols-4',
  6:  'grid-cols-6',
  8:  'grid-cols-8',
  12: 'grid-cols-12',
}

const gapMap: Record<NonNullable<GridProps['gap']>, string> = {
  none: 'gap-0',
  xs:   'gap-1',
  sm:   'gap-2',
  md:   'gap-4',
  lg:   'gap-6',
  xl:   'gap-8',
}

export function Grid({ children, cols = 12, gap = 'md', className = '' }: GridProps) {
  return (
    <div className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  )
}

// ─── Grid Item (Col span) ────────────────────────────

export interface GridItemProps {
  children: React.ReactNode
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  className?: string
}

const spanMap: Record<NonNullable<GridItemProps['span']>, string> = {
  1:  'col-span-1',
  2:  'col-span-2',
  3:  'col-span-3',
  4:  'col-span-4',
  5:  'col-span-5',
  6:  'col-span-6',
  7:  'col-span-7',
  8:  'col-span-8',
  9:  'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
}

export function GridItem({ children, span = 1, className = '' }: GridItemProps) {
  return (
    <div className={`${spanMap[span]} ${className}`}>
      {children}
    </div>
  )
}

// ─── Architectural Grid Overlay ──────────────────────

export interface GridOverlayProps {
  /** Whether the overlay is visible */
  visible?: boolean
  /** Number of columns */
  columns?: number
  /** Column color */
  color?: string
  /** Base unit in px for dot grid */
  unit?: number
}

export function GridOverlay({
  visible = true,
  columns = 12,
  color = 'var(--color-accent-500)',
  unit = 8,
}: GridOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 pointer-events-none z-[9999]"
          aria-hidden
        >
          {/* Dot grid — base unit */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${color}33 1px, transparent 1px)`,
              backgroundSize: `${unit}px ${unit}px`,
            }}
          />

          {/* Column grid */}
          <div
            className="absolute inset-0 mx-auto max-w-screen-xl px-6"
            style={{ width: '100%' }}
          >
            <div
              className="h-full"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: '16px',
              }}
            >
              {Array.from({ length: columns }).map((_, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: `${color}0D`, borderLeft: `1px solid ${color}33` }}
                />
              ))}
            </div>
          </div>

          {/* Grid label */}
          <div
            className="absolute bottom-4 right-4 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-sm"
              style={{
                color,
                border: `1px solid ${color}66`,
                backgroundColor: `${color}1A`,
                letterSpacing: '0.08em',
              }}
            >
              {columns}col / {unit}px
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Stack (vertical/horizontal flex) ────────────────

export interface StackProps {
  children: React.ReactNode
  direction?: 'row' | 'col'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  wrap?: boolean
  className?: string
}

const alignMap = {
  start:   'items-start',
  center:  'items-center',
  end:     'items-end',
  stretch: 'items-stretch',
}

const justifyMap = {
  start:   'justify-start',
  center:  'justify-center',
  end:     'justify-end',
  between: 'justify-between',
  around:  'justify-around',
}

export function Stack({
  children,
  direction = 'col',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
}: StackProps) {
  return (
    <div
      className={`
        flex
        ${direction === 'col' ? 'flex-col' : 'flex-row'}
        ${gapMap[gap]}
        ${alignMap[align]}
        ${justifyMap[justify]}
        ${wrap ? 'flex-wrap' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </div>
  )
}
