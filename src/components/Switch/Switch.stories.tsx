import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './index'

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## When to use
- Settings that take effect immediately without a submit button (e.g., dark mode, notifications)
- Binary on/off states in configuration panels
- When the outcome of toggling is instantly visible

## When NOT to use
- Form fields that submit with a button (use Checkbox — Switch implies immediate effect)
- Multiple related binary options (use a Checkbox group for clarity)
- Complex state that requires confirmation before applying

## Best practices
- Label the switch with the feature being toggled, not "On" or "Off"
- Place the label on the right by default; use \`labelPosition="left"\` only when aligning to a list
- Pair with a visible status indicator if the current state needs to be explicit

## Accessibility
- Renders as a checkbox input with \`role="switch"\` semantics
- The label must describe what the switch controls, not the current state
- Ensure the toggle track has sufficient contrast in both on and off states
        `,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    labelPosition: { control: 'select', options: ['left', 'right'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    defaultChecked: false,
  },
}

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    defaultChecked: true,
  },
}

export const LabelLeft: Story = {
  args: {
    label: 'Sync across devices',
    labelPosition: 'left',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Two-factor authentication',
    disabled: true,
    defaultChecked: true,
  },
}

export const DisabledOff: Story = {
  args: {
    label: 'Beta features',
    disabled: true,
    defaultChecked: false,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch size="sm" label="Small switch" defaultChecked />
      <Switch size="md" label="Medium switch" defaultChecked />
      <Switch size="lg" label="Large switch" defaultChecked />
    </div>
  ),
}

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch labelPosition="right" label="Label on right (default)" defaultChecked />
      <Switch labelPosition="left" label="Label on left" defaultChecked />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Switch
          label={`Airplane mode: ${checked ? 'on' : 'off'}`}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p style={{ fontSize: '0.875rem', color: 'var(--color-fg-muted)' }}>
          Status: <strong>{checked ? 'Enabled' : 'Disabled'}</strong>
        </p>
      </div>
    )
  },
}

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      analytics: true,
      beta: false,
    })
    const toggle = (key: keyof typeof settings) =>
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }))

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '320px' }}>
        {(
          [
            ['notifications', 'Push notifications'],
            ['darkMode', 'Dark mode'],
            ['analytics', 'Usage analytics'],
            ['beta', 'Beta features'],
          ] as const
        ).map(([key, label]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid var(--color-border-default)',
            }}
          >
            <span style={{ fontSize: '0.875rem', color: 'var(--color-fg-default)' }}>
              {label}
            </span>
            <Switch
              checked={settings[key]}
              onChange={() => toggle(key)}
              size="sm"
            />
          </div>
        ))}
      </div>
    )
  },
}
