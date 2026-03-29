import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

/**
 * # Badge
 * Pill-shaped label for status, categories, and counts.
 * Subtle style: light tinted background + colored text — Apple tag pill aesthetic.
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Badge>

// ─── All Variants ─────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '8px' }}>
      <section>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          md — default size
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="accent">Accent</Badge>
        </div>
      </section>

      <section>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          sm — small size
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <Badge variant="default" size="sm">Default</Badge>
          <Badge variant="success" size="sm">Success</Badge>
          <Badge variant="warning" size="sm">Warning</Badge>
          <Badge variant="error" size="sm">Error</Badge>
          <Badge variant="info" size="sm">Info</Badge>
          <Badge variant="accent" size="sm">Accent</Badge>
        </div>
      </section>

      <section>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          dot indicators
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Badge variant="success" dot />
          <Badge variant="warning" dot />
          <Badge variant="error" dot />
          <Badge variant="info" dot />
          <Badge variant="accent" dot />
          <Badge variant="default" dot />
        </div>
      </section>

      <section>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          with icons
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <Badge variant="success" icon={<CheckIcon />}>Verified</Badge>
          <Badge variant="warning" icon={<WarnIcon />}>Pending</Badge>
          <Badge variant="error" icon={<ErrorIcon />}>Failed</Badge>
          <Badge variant="info" icon={<InfoIcon />}>Draft</Badge>
          <Badge variant="accent" icon={<StarIcon />}>Featured</Badge>
        </div>
      </section>
    </div>
  ),
}

// ─── Status use-case ──────────────────────────────────

export const StatusLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[
        { label: 'Production', variant: 'success' as const },
        { label: 'Staging', variant: 'warning' as const },
        { label: 'Failed', variant: 'error' as const },
        { label: 'Deploying', variant: 'info' as const },
        { label: 'Preview', variant: 'accent' as const },
        { label: 'Archived', variant: 'default' as const },
      ].map(({ label, variant }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Badge variant={variant} dot size="sm" />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-primary)' }}>
            {label}
          </span>
          <Badge variant={variant} size="sm">{label}</Badge>
        </div>
      ))}
    </div>
  ),
}

// ─── Inline with text ─────────────────────────────────

export const InlineWithText: Story = {
  render: () => (
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[
        { title: 'App Store Connect', badge: { text: 'Live', variant: 'success' as const } },
        { title: 'Push Notifications', badge: { text: 'Beta', variant: 'accent' as const } },
        { title: 'iCloud Sync', badge: { text: 'Error', variant: 'error' as const } },
        { title: 'Analytics', badge: { text: 'New', variant: 'info' as const } },
      ].map(({ title, badge }) => (
        <div
          key={title}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 0',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'var(--color-fg-primary)' }}>
            {title}
          </span>
          <Badge variant={badge.variant} size="sm">{badge.text}</Badge>
        </div>
      ))}
    </div>
  ),
}

// ─── Icons ────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WarnIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 2v3.5M5 7.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M3 3l4 4M7 3l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 4.5v3M5 2.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M5 1l1.12 2.27 2.5.36-1.81 1.77.43 2.49L5 6.75 2.76 7.89l.43-2.49L1.38 3.63l2.5-.36L5 1z" />
    </svg>
  )
}
