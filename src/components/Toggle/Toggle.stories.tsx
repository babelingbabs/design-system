import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Toggle } from './Toggle'

/**
 * # Toggle / Switch
 * Apple-style toggle switch with spring animation.
 * Accessible: role="switch", aria-checked, keyboard support.
 */
const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Toggle>

// ─── Interactive ─────────────────────────────────────

function ControlledToggle(props: Omit<React.ComponentProps<typeof Toggle>, 'checked' | 'onChange'> & { defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  return <Toggle {...props} checked={checked} onChange={setChecked} />
}

export const Default: Story = {
  render: () => <ControlledToggle />,
}

export const DefaultOn: Story = {
  render: () => <ControlledToggle defaultChecked />,
}

// ─── Sizes ───────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <ControlledToggle size="sm" defaultChecked />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)' }}>sm</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <ControlledToggle size="md" defaultChecked />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)' }}>md</span>
      </div>
    </div>
  ),
}

// ─── States ──────────────────────────────────────────

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Toggle checked={false} onChange={() => {}} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-secondary)' }}>Off</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Toggle checked={true} onChange={() => {}} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-secondary)' }}>On</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Toggle checked={false} onChange={() => {}} disabled />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-disabled)' }}>Disabled (off)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Toggle checked={true} onChange={() => {}} disabled />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-disabled)' }}>Disabled (on)</span>
      </div>
    </div>
  ),
}

// ─── With labels ─────────────────────────────────────

export const WithLabels: Story = {
  render: () => (
    <div style={{ maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '0' }}>
      {[
        { label: 'Wi-Fi', defaultChecked: true },
        { label: 'Bluetooth', defaultChecked: true },
        { label: 'Airplane Mode', defaultChecked: false },
        { label: 'Personal Hotspot', defaultChecked: false, disabled: true },
        { label: 'VPN', defaultChecked: false },
      ].map(({ label, defaultChecked, disabled }) => (
        <div
          key={label}
          style={{
            padding: '12px 0',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <ControlledToggle label={label} defaultChecked={defaultChecked} disabled={disabled} />
        </div>
      ))}
    </div>
  ),
}

// ─── Settings panel ──────────────────────────────────

export const SettingsPanel: Story = {
  render: () => {
    function Panel() {
      const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        analytics: true,
        crashReports: true,
        betaFeatures: false,
      })

      const toggle = (key: keyof typeof settings) =>
        setSettings((s) => ({ ...s, [key]: !s[key] }))

      return (
        <div
          style={{
            width: '380px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border-subtle)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-base)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', fontWeight: '600', color: 'var(--color-fg-primary)', margin: 0 }}>
              Preferences
            </p>
          </div>
          <div style={{ padding: '0 20px' }}>
            {([
              { key: 'notifications', label: 'Push Notifications' },
              { key: 'darkMode', label: 'Dark Appearance' },
              { key: 'analytics', label: 'Share Analytics' },
              { key: 'crashReports', label: 'Crash Reports' },
              { key: 'betaFeatures', label: 'Beta Features' },
            ] as const).map(({ key, label }) => (
              <div key={key} style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <Toggle
                  checked={settings[key]}
                  onChange={() => toggle(key)}
                  label={label}
                  size="md"
                />
              </div>
            ))}
          </div>
        </div>
      )
    }
    return <Panel />
  },
}
