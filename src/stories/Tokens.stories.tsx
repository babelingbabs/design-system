import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

/**
 * # Design Tokens
 * The full token system — colors, typography, spacing, shadows, and border radius.
 * These are the atoms everything else is built from.
 */

// ─── Color Swatches ──────────────────────────────────

function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="w-full h-14 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]"
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="text-xs font-medium text-[var(--color-fg-primary)]">{name}</p>
        <p className="text-xs text-[var(--color-fg-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>{value}</p>
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xs font-medium uppercase tracking-widest text-[var(--color-fg-tertiary)] mb-6 pb-2 border-b border-[var(--color-border-subtle)]"
      style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
    >
      {children}
    </h2>
  )
}

function TokensPage() {
  return (
    <div className="p-8 max-w-4xl space-y-16" style={{ backgroundColor: 'var(--color-bg-base)' }}>

      {/* Colors */}
      <section>
        <SectionTitle>01 — Colors</SectionTitle>

        <div className="space-y-8">
          <div>
            <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Background</p>
            <div className="grid grid-cols-4 gap-4">
              <ColorSwatch name="bg.base"    value="#FAFAFA" />
              <ColorSwatch name="bg.subtle"  value="#F5F5F5" />
              <ColorSwatch name="bg.muted"   value="#EFEFEF" />
              <ColorSwatch name="bg.inverse" value="#1A1A1A" />
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Foreground</p>
            <div className="grid grid-cols-5 gap-4">
              <ColorSwatch name="fg.primary"   value="#1A1A1A" />
              <ColorSwatch name="fg.secondary" value="#555555" />
              <ColorSwatch name="fg.tertiary"  value="#8A8A8A" />
              <ColorSwatch name="fg.disabled"  value="#BBBBBB" />
              <ColorSwatch name="fg.inverse"   value="#FAFAFA" />
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Accent — Muted Architectural Blue</p>
            <div className="grid grid-cols-5 gap-4">
              {[
                ['50',  '#F0F4F8'],
                ['100', '#D9E4EE'],
                ['200', '#B3C9DD'],
                ['300', '#8DAECC'],
                ['400', '#6793BB'],
                ['500', '#4A7BA7'],
                ['600', '#3B6286'],
                ['700', '#2C4A65'],
                ['800', '#1E3144'],
                ['900', '#0F1922'],
              ].map(([step, hex]) => (
                <ColorSwatch key={step} name={`accent.${step}`} value={hex} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Semantic</p>
            <div className="grid grid-cols-4 gap-4">
              <ColorSwatch name="success"    value="#2D6A4F" />
              <ColorSwatch name="warning"    value="#7B5800" />
              <ColorSwatch name="error"      value="#9B1D20" />
              <ColorSwatch name="info"       value="#1A4A6E" />
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <SectionTitle>02 — Typography Scale</SectionTitle>
        <div className="space-y-4">
          {[
            { label: 'H1 / 3rem / Bold',     cls: 'text-5xl font-bold tracking-tight', text: 'The quick brown fox' },
            { label: 'H2 / 2.25rem / Semibold', cls: 'text-4xl font-semibold tracking-tight', text: 'The quick brown fox' },
            { label: 'H3 / 1.875rem / Semibold', cls: 'text-3xl font-semibold', text: 'The quick brown fox' },
            { label: 'H4 / 1.5rem / Medium', cls: 'text-2xl font-medium', text: 'The quick brown fox' },
            { label: 'H5 / 1.25rem / Medium', cls: 'text-xl font-medium', text: 'The quick brown fox' },
            { label: 'H6 / 1.125rem / Medium', cls: 'text-lg font-medium', text: 'The quick brown fox' },
            { label: 'Body Large / 1.125rem', cls: 'text-lg font-normal', text: 'The quick brown fox jumps over the lazy dog' },
            { label: 'Body / 1rem', cls: 'text-base font-normal', text: 'The quick brown fox jumps over the lazy dog' },
            { label: 'Body Small / 0.875rem', cls: 'text-sm font-normal', text: 'The quick brown fox jumps over the lazy dog' },
            { label: 'Caption / 0.75rem', cls: 'text-xs font-normal', text: 'The quick brown fox jumps over the lazy dog' },
          ].map(({ label, cls, text }) => (
            <div key={label} className="flex items-baseline gap-6 py-3 border-b border-[var(--color-border-subtle)]">
              <span
                className="text-[10px] text-[var(--color-fg-tertiary)] w-52 shrink-0"
                style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}
              >
                {label}
              </span>
              <span className={`${cls} text-[var(--color-fg-primary)]`} style={{ fontFamily: 'var(--font-sans)' }}>
                {text}
              </span>
            </div>
          ))}
          <div className="flex items-baseline gap-6 py-3 border-b border-[var(--color-border-subtle)]">
            <span
              className="text-[10px] text-[var(--color-fg-tertiary)] w-52 shrink-0"
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}
            >
              Mono / JetBrains Mono
            </span>
            <span className="text-sm text-[var(--color-accent-500)]" style={{ fontFamily: 'var(--font-mono)' }}>
              const design = {'{ precision: true }'}
            </span>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <SectionTitle>03 — Spacing Scale</SectionTitle>
        <div className="space-y-3">
          {[
            { label: '1 / 4px',   px: 4 },
            { label: '2 / 8px',   px: 8 },
            { label: '3 / 12px',  px: 12 },
            { label: '4 / 16px',  px: 16 },
            { label: '6 / 24px',  px: 24 },
            { label: '8 / 32px',  px: 32 },
            { label: '12 / 48px', px: 48 },
            { label: '16 / 64px', px: 64 },
            { label: '24 / 96px', px: 96 },
          ].map(({ label, px }) => (
            <div key={label} className="flex items-center gap-4">
              <span
                className="text-[10px] text-[var(--color-fg-tertiary)] w-20 shrink-0 text-right"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </span>
              <div
                className="h-4 rounded-sm bg-[var(--color-accent-200)]"
                style={{ width: `${px}px` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section>
        <SectionTitle>04 — Shadows</SectionTitle>
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: 'xs',     shadow: '0 1px 2px 0 rgba(0,0,0,0.04)' },
            { label: 'sm',     shadow: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)' },
            { label: 'md',     shadow: '0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)' },
            { label: 'lg',     shadow: '0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -4px rgba(0,0,0,0.04)' },
            { label: 'xl',     shadow: '0 20px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)' },
            { label: 'lifted', shadow: '0 8px 24px -4px rgba(0,0,0,0.10), 0 4px 8px -4px rgba(0,0,0,0.06)' },
            { label: 'focus',  shadow: '0 0 0 3px rgba(74,123,167,0.25)' },
            { label: 'inner',  shadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.05)' },
          ].map(({ label, shadow }) => (
            <div key={label} className="flex flex-col gap-3">
              <div
                className="h-16 rounded-[var(--radius-md)] bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)]"
                style={{ boxShadow: shadow }}
              />
              <span
                className="text-xs text-[var(--color-fg-secondary)] text-center"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section>
        <SectionTitle>05 — Border Radius</SectionTitle>
        <div className="flex items-end gap-8">
          {[
            { label: 'xs / 2px',   r: '2px' },
            { label: 'sm / 4px',   r: '4px' },
            { label: 'md / 6px',   r: '6px' },
            { label: 'lg / 8px',   r: '8px' },
            { label: 'xl / 12px',  r: '12px' },
            { label: 'full',       r: '9999px' },
          ].map(({ label, r }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 bg-[var(--color-accent-100)] border border-[var(--color-accent-300)]"
                style={{ borderRadius: r }}
              />
              <span
                className="text-[10px] text-[var(--color-fg-tertiary)] text-center"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The complete design token system. Colors, type scale, spacing, shadows, and border radii.',
      },
    },
  },
}
export default meta

export const AllTokens: StoryObj = {
  name: 'Token System',
  render: () => <TokensPage />,
}
