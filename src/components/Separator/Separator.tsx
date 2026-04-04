
export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorProps {
  orientation?: SeparatorOrientation
  decorative?: boolean
  label?: string
  className?: string
}

export function Separator({
  orientation = 'horizontal',
  decorative = true,
  label,
  className = '',
}: SeparatorProps) {
  const role = decorative ? 'none' : 'separator'
  const ariaOrientation = !decorative && orientation === 'vertical' ? 'vertical' : undefined

  if (orientation === 'vertical') {
    return (
      <div
        role={role}
        aria-orientation={ariaOrientation}
        className={`self-stretch w-px shrink-0 bg-[var(--color-border-subtle)] ${className}`}
      />
    )
  }

  if (label) {
    return (
      <div
        role={role}
        className={`flex items-center gap-3 w-full ${className}`}
      >
        <div className="flex-1 h-px bg-[var(--color-border-subtle)]" />
        <span
          className="text-xs text-[var(--color-fg-tertiary)] whitespace-nowrap select-none"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--color-border-subtle)]" />
      </div>
    )
  }

  return (
    <div
      role={role}
      aria-orientation={ariaOrientation}
      className={`w-full h-px bg-[var(--color-border-subtle)] ${className}`}
    />
  )
}
