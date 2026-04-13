import type { HTMLAttributes, ReactNode } from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'
export type AvatarGroupSpacing = 'tight' | 'normal'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  fallbackIcon?: ReactNode
  status?: AvatarStatus
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: AvatarSize
  spacing?: AvatarGroupSpacing
  children: ReactNode
}
