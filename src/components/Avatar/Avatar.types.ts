import type { HTMLAttributes, ReactNode } from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'
export type AvatarGroupSpacing = 'tight' | 'normal'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Image URL — falls back to initials or icon when unavailable or broken */
  src?: string
  /** Alt text for the image; use empty string when the name is visible nearby */
  alt?: string
  /** Full name — used to generate initials when no image is provided */
  name?: string
  /** Visual size of the avatar */
  size?: AvatarSize
  /** Shape of the avatar container */
  shape?: AvatarShape
  /** Custom icon rendered when image and initials are both unavailable */
  fallbackIcon?: ReactNode
  /** Presence indicator badge overlaid on the avatar */
  status?: AvatarStatus
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show before collapsing into a "+N" overflow badge */
  max?: number
  /** Size applied to all avatars in the group */
  size?: AvatarSize
  /** Overlap spacing between stacked avatars */
  spacing?: AvatarGroupSpacing
  /** Avatar elements to render in the group */
  children: ReactNode
}
