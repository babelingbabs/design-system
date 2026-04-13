import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
}

export const Required: Story = {
  args: {
    children: 'Full name',
    htmlFor: 'name',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Account email',
    htmlFor: 'account-email',
    disabled: true,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label size="sm" htmlFor="field-sm">Small label (xs)</Label>
      <Label size="md" htmlFor="field-md">Medium label (sm) — default</Label>
    </div>
  ),
}

export const WithFormField: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '280px' }}>
      <Label htmlFor="username" required>Username</Label>
      <input
        id="username"
        type="text"
        placeholder="kingsley"
        style={{
          padding: '8px 12px',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--typography-font-family-sans)',
          fontSize: 'var(--typography-font-size-base)',
          background: 'var(--color-bg-raised)',
          color: 'var(--color-fg-default)',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  ),
}

export const DisabledField: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '280px' }}>
      <Label htmlFor="locked-email" disabled>Account email</Label>
      <input
        id="locked-email"
        type="email"
        defaultValue="kingsley@studio.com"
        disabled
        style={{
          padding: '8px 12px',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--typography-font-family-sans)',
          fontSize: 'var(--typography-font-size-base)',
          background: 'var(--color-bg-sunken)',
          color: 'var(--color-fg-muted)',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'not-allowed',
        }}
      />
    </div>
  ),
}
