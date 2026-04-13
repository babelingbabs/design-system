import { forwardRef, useState, Children, isValidElement, cloneElement } from 'react'
import { User } from 'lucide-react'
import type { AvatarProps, AvatarGroupProps } from './Avatar.types'
import styles from './Avatar.module.css'

// Deterministic palette index from name string
function nameToIndex(name: string): number {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) & 0xffffffff
  }
  return Math.abs(hash) % 8
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

const ICON_SIZES: Record<NonNullable<AvatarProps['size']>, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = 'md',
      shape = 'circle',
      fallbackIcon,
      status,
      className,
      ...rest
    },
    ref
  ) => {
    const [imgError, setImgError] = useState(false)
    const showImage = src && !imgError

    const iconSize = ICON_SIZES[size]
    const icon = fallbackIcon ?? <User size={iconSize} aria-hidden="true" />

    const renderFallback = () => {
      if (name) {
        const idx = nameToIndex(name)
        return (
          <span
            className={[styles.fallback, styles[`palette${idx}` as keyof typeof styles]].join(' ')}
            aria-label={alt ?? name}
          >
            {getInitials(name)}
          </span>
        )
      }
      return (
        <span className={[styles.fallback, styles.iconFallback].join(' ')} aria-label={alt ?? 'Avatar'}>
          {icon}
        </span>
      )
    }

    return (
      <div
        ref={ref}
        className={[styles.avatar, className].filter(Boolean).join(' ')}
        data-size={size}
        data-shape={shape}
        {...rest}
      >
        {showImage ? (
          <img
            className={styles.image}
            src={src}
            alt={alt ?? name ?? 'Avatar'}
            onError={() => setImgError(true)}
          />
        ) : (
          renderFallback()
        )}
        {status && (
          <span className={styles.status} data-status={status} aria-label={status} />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size = 'md', spacing = 'normal', children, className, ...rest }, ref) => {
    const childArray = Children.toArray(children)
    const visible = max !== undefined ? childArray.slice(0, max) : childArray
    const overflowCount = max !== undefined ? Math.max(0, childArray.length - max) : 0

    return (
      <div
        ref={ref}
        className={[styles.group, className].filter(Boolean).join(' ')}
        data-spacing={spacing}
        {...rest}
      >
        {visible.map((child, i) => {
          if (isValidElement<AvatarProps>(child)) {
            return cloneElement(child, { key: i, size })
          }
          return child
        })}
        {overflowCount > 0 && (
          <span
            className={styles.overflow}
            data-size={size}
            aria-label={`${overflowCount} more`}
          >
            +{overflowCount}
          </span>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'
