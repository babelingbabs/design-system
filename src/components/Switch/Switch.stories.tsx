import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Switch } from './Switch'

/**
 * # Switch
 * Pill-style toggle with animated sliding thumb.
 * Three sizes, spring animation, fully keyboard accessible.
 */
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Switch>

function Controlled(props: Omit<React.ComponentProps<typeof Switch>, 'checked' | 'onChange'> & { defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  return <Switch {...props} checked={checked} onChange={setChecked} />
}

export const Default: Story = {
  render: () => <Controlled label="Enable notifications" />,
}

export const DefaultOn: Story = {
  render: () => <Controlled label="Dark mode" defaultChecked />,
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Controlled size="sm" label="Small" defaultChecked />
      <Controlled size="md" label="Medium" defaultChecked />
      <Controlled size="lg" label="Large" defaultChecked />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch checked={false} onChange={() => {}} label="Off" />
      <Switch checked={true} onChange={() => {}} label="On" />
      <Switch checked={false} onChange={() => {}} label="Disabled off" disabled />
      <Switch checked={true} onChange={() => {}} label="Disabled on" disabled />
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Controlled size="sm" />
      <Controlled size="md" defaultChecked />
      <Controlled size="lg" />
    </div>
  ),
}

export const SettingsPanel: Story = {
  name: 'Settings Panel',
  render: () => {
    function Panel() {
      const [settings, setSettings] = useState({
        wifi: true,
        bluetooth: true,
        airplane: false,
        hotspot: false,
        vpn: false,
      })

      const toggle = (key: keyof typeof settings) =>
        setSettings((s) => ({ ...s, [key]: !s[key] }))

      const items = [
        { key: 'wifi', label: 'Wi-Fi' },
        { key: 'bluetooth', label: 'Bluetooth' },
        { key: 'airplane', label: 'Airplane Mode' },
        { key: 'hotspot', label: 'Personal Hotspot' },
        { key: 'vpn', label: 'VPN' },
      ] as const

      return (
        <div
          style={{
            width: '360px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border-subtle)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-base)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-fg-primary)', margin: 0 }}>
              Connectivity
            </p>
          </div>
          <div style={{ padding: '0 20px' }}>
            {items.map(({ key, label }) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--color-border-subtle)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'var(--color-fg-primary)' }}>
                  {label}
                </span>
                <Switch checked={settings[key]} onChange={() => toggle(key)} size="md" />
              </div>
            ))}
          </div>
        </div>
      )
    }
    return <Panel />
  },
}
