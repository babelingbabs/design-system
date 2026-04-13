import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './index'

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Above the divider</p>
      <Divider />
      <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Below the divider</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
      <span style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Left</span>
      <Divider orientation="vertical" spacing="md" />
      <span style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Right</span>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Divider label="or" />
      <Divider label="Continue with" />
      <Divider label="Section title" />
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>spacing="sm"</p>
      <Divider spacing="sm" />
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>spacing="md"</p>
      <Divider spacing="md" />
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>spacing="lg"</p>
      <Divider spacing="lg" />
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>End</p>
    </div>
  ),
}
