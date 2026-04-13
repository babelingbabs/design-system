import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './index'

const meta: Meta<typeof Badge> = {
  title: 'Foundation/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    dot: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="default" dot>Idle</Badge>
      <Badge variant="primary" dot>In progress</Badge>
      <Badge variant="success" dot>Live</Badge>
      <Badge variant="warning" dot>Degraded</Badge>
      <Badge variant="error" dot>Offline</Badge>
    </div>
  ),
}

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--color-fg-default)', minWidth: '120px' }}>Deployment</span>
        <Badge variant="success" dot size="sm">Deployed</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--color-fg-default)', minWidth: '120px' }}>Build</span>
        <Badge variant="warning" dot size="sm">Building</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--color-fg-default)', minWidth: '120px' }}>Tests</span>
        <Badge variant="error" dot size="sm">Failed</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--color-fg-default)', minWidth: '120px' }}>Preview</span>
        <Badge variant="primary" dot size="sm">Ready</Badge>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{
        padding: '16px',
        border: '1px solid var(--color-border-default)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        minWidth: '200px',
        backgroundColor: 'var(--color-bg-raised)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-fg-default)' }}>API Gateway</span>
          <Badge variant="success" dot size="sm">Online</Badge>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--color-fg-muted)' }}>99.98% uptime</span>
      </div>
      <div style={{
        padding: '16px',
        border: '1px solid var(--color-border-default)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        minWidth: '200px',
        backgroundColor: 'var(--color-bg-raised)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-fg-default)' }}>Database</span>
          <Badge variant="warning" dot size="sm">Degraded</Badge>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--color-fg-muted)' }}>High latency detected</span>
      </div>
    </div>
  ),
}
