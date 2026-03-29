import React from 'react'
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react'

/**
 * Icon wrapper — standardizes Phosphor icon sizing to our design tokens.
 * Uses Phosphor's weight system: thin, light, regular, bold, fill, duotone.
 *
 * Usage:
 *   import { Bell } from '@phosphor-icons/react'
 *   <Icon icon={Bell} size="md" />
 *   <Icon icon={Bell} weight="fill" color="var(--color-accent-500)" />
 */

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type IconWeight = PhosphorIconProps['weight']

export interface IconProps {
  /** A Phosphor icon component (not an instance) */
  icon: React.ComponentType<PhosphorIconProps>
  size?: IconSize
  weight?: IconWeight
  color?: string
  className?: string
  style?: React.CSSProperties
  /** Accessibility label — if omitted, icon is decorative (aria-hidden) */
  label?: string
}

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const

export function Icon({
  icon: IconComponent,
  size = 'md',
  weight = 'regular',
  color,
  className,
  style,
  label,
}: IconProps) {
  return (
    <IconComponent
      size={sizeMap[size]}
      weight={weight}
      color={color}
      className={className}
      style={style}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  )
}
Icon.displayName = 'Icon'

/** Re-export common icons for convenience */
export { sizeMap as iconSizes }
