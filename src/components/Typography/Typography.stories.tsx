import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Copy, Label, Mono, H1, H2, H3, H4, H5, H6, Text, Caption, Lead } from './Typography'

/**
 * # Typography
 * Geist-inspired type scale on system fonts.
 *
 * Four categories — **heading**, **button**, **label**, **copy** — each
 * serving a distinct role in the interface hierarchy. All rendered with
 * the system font stack (SF Pro → system-ui) and JetBrains Mono.
 */
const meta: Meta = {
  title: 'Foundation/Typography',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

// ─── Story helpers ────────────────────────────────────

const wrap: React.CSSProperties = {
  backgroundColor: 'var(--color-bg-base)',
  padding: '32px',
  maxWidth: '720px',
}

const divider: React.CSSProperties = {
  borderBottom: '1px solid var(--color-border-subtle)',
  paddingBottom: '20px',
  marginBottom: '20px',
}

const lastRow: React.CSSProperties = {
  paddingBottom: '0',
  marginBottom: '0',
}

function SpecLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'uppercase' as const,
      color: 'var(--color-fg-tertiary)',
      marginBottom: '8px',
    }}>
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--color-fg-tertiary)',
      borderBottom: '1px solid var(--color-border-subtle)',
      paddingBottom: '12px',
      marginBottom: '24px',
    }}>
      {children}
    </div>
  )
}

// ─── Headings ────────────────────────────────────────

/**
 * Ten heading sizes for page titles, section headers, and marketing heroes.
 * Negative letter-spacing tightens at larger sizes for optical balance.
 */
export const Headings: StoryObj = {
  name: 'Headings',
  render: () => (
    <div style={wrap}>
      <SectionTitle>heading — 700/600 · tight tracking</SectionTitle>

      {([72, 64, 56, 48, 40, 32] as const).map((size, i, arr) => (
        <div key={size} style={i < arr.length - 1 ? divider : { ...divider }}>
          <SpecLabel>heading-{size} · {size}px</SpecLabel>
          <Heading size={size}>The quick brown fox</Heading>
        </div>
      ))}

      {([24, 20, 16, 14] as const).map((size, i, arr) => (
        <div key={size} style={i < arr.length - 1 ? divider : lastRow}>
          <SpecLabel>heading-{size} · {size}px</SpecLabel>
          <Heading size={size}>The quick brown fox jumps over the lazy dog</Heading>
        </div>
      ))}
    </div>
  ),
}

// ─── Labels ──────────────────────────────────────────

/**
 * Labels are single-line text with generous line-height for icon alignment.
 * Includes mono variants for technical contexts and an uppercase 12px tertiary style.
 */
export const Labels: StoryObj = {
  name: 'Labels',
  render: () => (
    <div style={wrap}>
      <SectionTitle>label — weight 400/500 · line-height 1.6</SectionTitle>

      {([20, 18, 16, 14, 13, 12] as const).map((size, i, arr) => (
        <div key={size} style={i < arr.length - 1 ? divider : { ...divider }}>
          <SpecLabel>label-{size} · {size}px{size === 12 ? ' · uppercase' : ''}{size === 16 ? ' · titles' : ''}{size === 14 ? ' · most common' : ''}</SpecLabel>
          <Label size={size} style={{ display: 'block', color: 'var(--color-fg-primary)' }}>
            {size === 12 ? 'Tertiary label' : 'The quick brown fox jumps over the lazy dog'}
          </Label>
        </div>
      ))}

      <SectionTitle style={{ marginTop: '32px' }}>label mono — weight 400 · line-height 1.6</SectionTitle>

      {([14, 13, 12] as const).map((size, i, arr) => (
        <div key={size} style={i < arr.length - 1 ? divider : lastRow}>
          <SpecLabel>label-{size}-mono · {size}px</SpecLabel>
          <Label size={size} mono style={{ display: 'block', color: 'var(--color-fg-primary)' }}>
            const value = &quot;{size}px monospace&quot;
          </Label>
        </div>
      ))}
    </div>
  ),
}

// ─── Copy ────────────────────────────────────────────

/**
 * Copy is for multi-line reading text. Higher line-height (1.6/1.55) improves
 * legibility. Negative letter-spacing on large sizes for optical balance.
 */
export const CopyScale: StoryObj = {
  name: 'Copy',
  render: () => (
    <div style={wrap}>
      <SectionTitle>copy — weight 400 · line-height 1.6</SectionTitle>

      {([24, 20, 18] as const).map((size, i) => (
        <div key={size} style={divider}>
          <SpecLabel>copy-{size} · {size}px{size === 24 || size === 20 ? ' · marketing' : ' · big quotes'}</SpecLabel>
          <Copy size={size}>
            Precision and restraint define a great type system. Every decision is deliberate.
          </Copy>
        </div>
      ))}

      {([16, 14] as const).map((size, i) => (
        <div key={size} style={divider}>
          <SpecLabel>copy-{size} · {size}px{size === 16 ? ' · modals' : ' · body'}</SpecLabel>
          <Copy size={size}>
            The spacing scale runs on a 4px grid. The type scale follows optical proportions.
            Nothing arbitrary. Every token is considered, every decision deliberate.
          </Copy>
        </div>
      ))}

      <div style={divider}>
        <SpecLabel>copy-13 · 13px · secondary / compact</SpecLabel>
        <Copy size={13} secondary>
          Secondary copy used for metadata, helper text, and compact UI surfaces where
          breathing room is limited.
        </Copy>
      </div>

      <div style={lastRow}>
        <SpecLabel>copy-13-mono · 13px · inline code</SpecLabel>
        <Copy size={13} mono>
          const typography = &#123; fontFamily, heading, label, copy &#125;
        </Copy>
      </div>
    </div>
  ),
}

// ─── Button Typography ────────────────────────────────

/**
 * Button typography is reserved for button components only.
 * Medium weight, neutral tracking, standard 1.5 line-height.
 */
export const ButtonTypography: StoryObj = {
  name: 'Buttons',
  render: () => {
    const buttonStyle = (fontSize: string): React.CSSProperties => ({
      fontFamily: 'var(--font-sans)',
      fontSize,
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0,
      color: 'var(--color-fg-primary)',
    })

    return (
      <div style={wrap}>
        <SectionTitle>button — weight 500 · line-height 1.5 · tracking 0</SectionTitle>

        <div style={divider}>
          <SpecLabel>button-16 · 16px</SpecLabel>
          <span style={buttonStyle('1rem')}>Continue to dashboard</span>
        </div>

        <div style={divider}>
          <SpecLabel>button-14 · 14px · default</SpecLabel>
          <span style={buttonStyle('0.875rem')}>Continue to dashboard</span>
        </div>

        <div style={lastRow}>
          <SpecLabel>button-12 · 12px · compact</SpecLabel>
          <span style={buttonStyle('0.75rem')}>Continue to dashboard</span>
        </div>
      </div>
    )
  },
}

// ─── Composition ─────────────────────────────────────

/**
 * Real-world composition showing how the type scale works together
 * across a page header, dashboard card, and metadata row.
 */
export const Composition: StoryObj = {
  name: 'Composition',
  render: () => (
    <div style={{ ...wrap, maxWidth: '600px' }}>

      {/* Marketing hero */}
      <div style={{ marginBottom: '48px' }}>
        <Label size={12} style={{ display: 'block', marginBottom: '16px' }}>
          Design System
        </Label>
        <Heading level="h1" size={48} style={{ marginBottom: '16px' }}>
          Type that scales.
        </Heading>
        <Copy size={20} secondary>
          A Geist-inspired system built on platform fonts. Four categories,
          one coherent rhythm.
        </Copy>
      </div>

      {/* Dashboard card */}
      <div style={{
        border: '1px solid var(--color-border-subtle)',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '24px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <Heading level="h2" size={16}>Total deployments</Heading>
          <Label size={12} style={{ color: 'var(--color-fg-tertiary)' }}>Last 30 days</Label>
        </div>
        <Heading level="h3" size={32} style={{ marginBottom: '8px' }}>2,847</Heading>
        <Copy size={13} secondary>
          ↑ 12% from previous period
        </Copy>
      </div>

      {/* Inline meta row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Mono size={12} style={{ color: 'var(--color-fg-tertiary)' }}>v0.2.0</Mono>
        <Caption>Kingsley Design System · 2026</Caption>
        <Caption level={2} muted={false}>MIT License</Caption>
      </div>
    </div>
  ),
}

// ─── Backward-compat exports (verified working) ───────

/**
 * Legacy Text component with string size aliases still works.
 * `lg` → copy-16, `base` → copy-14, `sm` → copy-13, `xs` → copy-13
 */
export const BackwardCompat: StoryObj = {
  name: 'Backward Compat (Text)',
  render: () => (
    <div style={{ ...wrap, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <H1>H1 — default size 48</H1>
      <H2>H2 — default size 32</H2>
      <H3>H3 — default size 24</H3>
      <H4>H4 — default size 20</H4>
      <H5>H5 — default size 16</H5>
      <H6>H6 — default size 14</H6>
      <Text size="lg">Text size=&quot;lg&quot; → copy-16</Text>
      <Text>Text default → copy-14</Text>
      <Text size="sm">Text size=&quot;sm&quot; → copy-13</Text>
      <Text size="xs" secondary>Text size=&quot;xs&quot; secondary → copy-13</Text>
      <Lead>Lead → copy-20 weight 300 secondary</Lead>
      <div>
        <Label htmlFor="demo" required>Form label with htmlFor + required</Label>
      </div>
      <Caption>Caption level=1 → label-13</Caption>
      <Caption level={2} muted={false}>Caption level=2 → label-12</Caption>
      <div>
        <Mono>Mono default (size 13)</Mono>
      </div>
      <div>
        <Mono accent size="xs">Mono accent size=&quot;xs&quot; (legacy)</Mono>
      </div>
    </div>
  ),
}
