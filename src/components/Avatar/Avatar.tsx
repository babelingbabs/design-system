import React from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'rounded'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

export interface AvatarProps {
  /** Image URL */
  src?: string
  /** Full name — used for initials fallback and aria-label */
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  status?: AvatarStatus
  className?: string
  style?: React.CSSProperties
}

export interface AvatarGroupProps {
  children: React.ReactNode
  /** Max avatars before showing +N overflow */
  max?: number
  size?: AvatarSize
  className?: string
}

const sizeConfig: Record<AvatarSize, {
  px: number
  fontSize: string
  statusSize: number
  statusOffset: number
  statusBorder: number
  roundedRadius: number
}> = {
  xs: { px: 24, fontSize: '0.5625rem',  statusSize: 7,  statusOffset: -1, statusBorder: 1.5, roundedRadius: 4 },
  sm: { px: 32, fontSize: '0.6875rem',  statusSize: 8,  statusOffset: -1, statusBorder: 2,   roundedRadius: 6 },
  md: { px: 40, fontSize: '0.875rem',   statusSize: 10, statusOffset: 0,  statusBorder: 2,   roundedRadius: 8 },
  lg: { px: 48, fontSize: '1rem',       statusSize: 12, statusOffset: 0,  statusBorder: 2,   roundedRadius: 10 },
  xl: { px: 64, fontSize: '1.25rem',    statusSize: 15, statusOffset: 1,  statusBorder: 2.5, roundedRadius: 14 },
} as const

const statusColors: Record<AvatarStatus, string> = {
  online:  'var(--color-system-green)',
  offline: 'var(--color-system-gray-3)',
  busy:    'var(--color-system-red)',
  away:    'var(--color-system-yellow)',
} as const

const groupOverlap: Record<AvatarSize, number> = {
  xs: 6, sm: 8, md: 10, lg: 12, xl: 16,
} as const

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

export function Avatar({
  src,
  name = '',
  size = 'md',
  shape = 'circle',
  status,
  className = '',
  style,
}: AvatarProps) {
  const cfg = sizeConfig[size]
  const [imgError, setImgError] = React.useState(false)
  const showImage = Boolean(src) && !imgError
  const initials = name ? getInitials(name) : '?'
  const borderRadius = shape === 'circle' ? '9999px' : `${cfg.roundedRadius}px`

  return (
    <div
      className={className}
      style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, width: cfg.px, height: cfg.px, ...style }}
    >
      <div
        aria-label={name || undefined}
        role={name ? 'img' : undefined}
        style={{
          width: cfg.px,
          height: cfg.px,
          borderRadius,
          overflow: 'hidden',
          backgroundColor: showImage ? 'var(--color-bg-muted)' : 'var(--color-accent-100)',
          border: '1.5px solid var(--color-border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          userSelect: 'none',
          boxSizing: 'border-box',
        }}
      >
        {showImage ? (
          <img
            src={src}
            alt={name || ''}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: cfg.fontSize,
              fontWeight: '600',
              color: 'var(--color-accent-700)',
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}
          >
            {initials}
          </span>
        )}
      </div>
      {status && (
        <span
          aria-label={`Status: ${status}`}
          style={{
            position: 'absolute',
            bottom: cfg.statusOffset,
            right: cfg.statusOffset,
            width: cfg.statusSize,
            height: cfg.statusSize,
            borderRadius: '9999px',
            backgroundColor: statusColors[status],
            border: `${cfg.statusBorder}px solid var(--color-bg-base)`,
            boxSizing: 'border-box',
          }}
        />
      )}
    </div>
  )
}

export function AvatarGroup({ children, max = 3, size = 'md', className = '' }: AvatarGroupProps) {
  const childArray = React.Children.toArray(children)
  const visible = childArray.slice(0, max)
  const overflow = childArray.length - max
  const cfg = sizeConfig[size]
  const overlap = groupOverlap[size]

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      {visible.map((child, i) => (
        <div
          key={i}
          style={{
            marginLeft: i > 0 ? -overlap : 0,
            zIndex: visible.length - i,
            position: 'relative',
          }}
        >
          {child}
        </div>
      ))}
      {overflow > 0 && (
        <div
          aria-label={`${overflow} more`}
          style={{
            marginLeft: -overlap,
            zIndex: 0,
            position: 'relative',
            width: cfg.px,
            height: cfg.px,
            borderRadius: '9999px',
            backgroundColor: 'var(--color-bg-muted)',
            border: '1.5px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: cfg.fontSize,
            fontWeight: '600',
            color: 'var(--color-fg-secondary)',
            flexShrink: 0,
            userSelect: 'none',
            boxSizing: 'border-box',
          }}
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}
