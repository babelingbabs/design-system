import type { CSSProperties, ReactNode } from 'react'

const baseStyle: CSSProperties = {
  fontFamily: 'var(--typography-font-family-sans, sans-serif)',
}

// ---------------------------------------------------------------------------
// Color tokens
// ---------------------------------------------------------------------------

interface ColorSwatchProps {
  label: string
  variable: string
  hex?: string
}

export function ColorSwatch({ label, variable, hex }: ColorSwatchProps) {
  return (
    <div
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 0',
        borderBottom: '1px solid #f5f4f2',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          background: hex ?? `var(${variable})`,
          border: '1px solid rgba(0,0,0,0.08)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#171615' }}>{label}</div>
        <code
          style={{
            fontSize: '11px',
            color: '#7a7974',
            fontFamily: 'var(--typography-font-family-mono, monospace)',
          }}
        >
          {variable}
        </code>
      </div>
      {hex && (
        <code
          style={{
            fontSize: '11px',
            color: '#a8a7a2',
            fontFamily: 'var(--typography-font-family-mono, monospace)',
          }}
        >
          {hex}
        </code>
      )}
    </div>
  )
}

interface ColorGroupProps {
  title: string
  swatches: ColorSwatchProps[]
}

export function ColorGroup({ title, swatches }: ColorGroupProps) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h4
        style={{
          ...baseStyle,
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#a8a7a2',
          margin: '0 0 4px 0',
        }}
      >
        {title}
      </h4>
      {swatches.map((s) => (
        <ColorSwatch key={s.variable} {...s} />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Spacing tokens
// ---------------------------------------------------------------------------

interface SpacingRowProps {
  name: string
  variable: string
  value: string
}

export function SpacingRow({ name, variable, value }: SpacingRowProps) {
  return (
    <div
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '8px 0',
        borderBottom: '1px solid #f5f4f2',
      }}
    >
      <div
        style={{
          height: '20px',
          width: value,
          minWidth: '2px',
          background: 'var(--color-accent-default, #6366f1)',
          borderRadius: '2px',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#171615', minWidth: '60px' }}>
          {name}
        </span>
        <code
          style={{
            fontSize: '11px',
            color: '#7a7974',
            fontFamily: 'var(--typography-font-family-mono, monospace)',
          }}
        >
          {variable}
        </code>
        <span style={{ fontSize: '12px', color: '#a8a7a2', marginLeft: 'auto' }}>{value}</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Radius tokens
// ---------------------------------------------------------------------------

interface RadiusRowProps {
  name: string
  variable: string
  value: string
}

export function RadiusRow({ name, variable, value }: RadiusRowProps) {
  return (
    <div
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '8px 0',
        borderBottom: '1px solid #f5f4f2',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          background: 'var(--color-accent-subtle, #eef2ff)',
          border: '2px solid var(--color-accent-default, #6366f1)',
          borderRadius: value,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#171615', minWidth: '60px' }}>
          {name}
        </span>
        <code
          style={{
            fontSize: '11px',
            color: '#7a7974',
            fontFamily: 'var(--typography-font-family-mono, monospace)',
          }}
        >
          {variable}
        </code>
        <span style={{ fontSize: '12px', color: '#a8a7a2', marginLeft: 'auto' }}>{value}</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Shadow tokens
// ---------------------------------------------------------------------------

interface ShadowRowProps {
  name: string
  variable: string
  value: string
}

export function ShadowRow({ name, variable, value }: ShadowRowProps) {
  return (
    <div
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '16px 0',
        borderBottom: '1px solid #f5f4f2',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '40px',
          background: '#ffffff',
          border: '1px solid #f5f4f2',
          borderRadius: '6px',
          boxShadow: value,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#171615', marginBottom: '2px' }}>
          {name}
        </div>
        <code
          style={{
            fontSize: '11px',
            color: '#7a7974',
            fontFamily: 'var(--typography-font-family-mono, monospace)',
          }}
        >
          {variable}
        </code>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Typography scale
// ---------------------------------------------------------------------------

interface TypeScaleRowProps {
  name: string
  variable: string
  value: string
}

export function TypeScaleRow({ name, variable, value }: TypeScaleRowProps) {
  return (
    <div
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'baseline',
        gap: '16px',
        padding: '10px 0',
        borderBottom: '1px solid #f5f4f2',
      }}
    >
      <div
        style={{
          fontSize: value,
          fontFamily: 'var(--typography-font-family-sans, sans-serif)',
          color: '#171615',
          lineHeight: 1.2,
          flexShrink: 0,
          minWidth: '200px',
        }}
      >
        Aa — {name}
      </div>
      <div>
        <code
          style={{
            fontSize: '11px',
            color: '#7a7974',
            fontFamily: 'var(--typography-font-family-mono, monospace)',
            display: 'block',
          }}
        >
          {variable}
        </code>
        <span style={{ fontSize: '11px', color: '#a8a7a2' }}>{value}</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Motion tokens
// ---------------------------------------------------------------------------

interface MotionRowProps {
  name: string
  variable: string
  value: string
  type: 'duration' | 'easing'
}

export function MotionRow({ name, variable, value, type }: MotionRowProps) {
  return (
    <div
      style={{
        ...baseStyle,
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '8px 0',
        borderBottom: '1px solid #f5f4f2',
      }}
    >
      {type === 'duration' && (
        <div
          style={{
            width: '32px',
            height: '32px',
            background: 'var(--color-accent-default, #6366f1)',
            borderRadius: '4px',
            flexShrink: 0,
            opacity: 0.7,
          }}
        />
      )}
      {type === 'easing' && (
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '2px solid var(--color-accent-default, #6366f1)',
            flexShrink: 0,
          }}
        />
      )}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#171615', minWidth: '100px' }}>
            {name}
          </span>
          <code
            style={{
              fontSize: '11px',
              color: '#7a7974',
              fontFamily: 'var(--typography-font-family-mono, monospace)',
            }}
          >
            {variable}
          </code>
          <span style={{ fontSize: '12px', color: '#a8a7a2', marginLeft: 'auto' }}>{value}</span>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Token section wrapper
// ---------------------------------------------------------------------------

interface TokenSectionProps {
  children: ReactNode
}

export function TokenSection({ children }: TokenSectionProps) {
  return (
    <div
      style={{
        border: '1px solid #e3e2df',
        borderRadius: '8px',
        padding: '0 16px',
        marginBottom: '32px',
        background: '#ffffff',
      }}
    >
      {children}
    </div>
  )
}
