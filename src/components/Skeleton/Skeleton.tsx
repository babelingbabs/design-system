import { motion } from 'framer-motion'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular'

export interface SkeletonProps {
  variant?: SkeletonVariant
  width?: number | string
  height?: number | string
  lines?: number
  animate?: boolean
  className?: string
}

function ShimmerOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      <motion.div
        className="absolute inset-y-0"
        style={{
          width: '50%',
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-bg-muted) 50%, transparent 100%)',
        }}
        animate={{ x: ['-100%', '300%'] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export function Skeleton({
  variant = 'rectangular',
  width,
  height,
  lines = 3,
  animate = true,
  className = '',
}: SkeletonProps) {
  const baseClass = 'relative bg-[var(--color-bg-subtle)] overflow-hidden'

  if (variant === 'text') {
    return (
      <div
        aria-busy="true"
        aria-label="Loading"
        className={`flex flex-col gap-2 ${className}`}
        style={{ width: width ?? '100%' }}
      >
        {Array.from({ length: lines }).map((_, i) => {
          const isLast = i === lines - 1
          return (
            <div
              key={i}
              className={`${baseClass} rounded`}
              style={{
                height: height ?? '0.875rem',
                width: isLast ? '80%' : '100%',
              }}
            >
              {animate && <ShimmerOverlay />}
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === 'circular') {
    const size = width ?? height ?? 40
    return (
      <div
        aria-busy="true"
        aria-label="Loading"
        className={`${baseClass} rounded-full shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        {animate && <ShimmerOverlay />}
      </div>
    )
  }

  // rectangular
  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      className={`${baseClass} rounded-[var(--radius-md)] ${className}`}
      style={{
        width: width ?? '100%',
        height: height ?? 120,
      }}
    >
      {animate && <ShimmerOverlay />}
    </div>
  )
}
