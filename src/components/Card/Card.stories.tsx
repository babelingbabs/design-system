import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'
import { Badge } from '../Badge'
import { Button } from '../Button'

const meta: Meta<typeof Card> = {
  title: 'Foundation/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['border', 'shadow', 'ghost'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    hoverable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          This is a simple card with default settings. Cards are surface containers
          that group related content and actions.
        </p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '360px' }}>
        <Story />
      </div>
    ),
  ],
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {(['border', 'shadow', 'ghost'] as const).map((v) => (
        <Card key={v} variant={v} style={{ width: '220px' }}>
          <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: 'var(--color-fg-default)' }}>
            {v.charAt(0).toUpperCase() + v.slice(1)} variant
          </p>
          <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'var(--color-fg-muted)', lineHeight: 1.5 }}>
            A simple card with the {v} visual style applied.
          </p>
        </Card>
      ))}
    </div>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <div style={{ maxWidth: '380px' }}>
      <Card
        variant="border"
        header={
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-fg-default)' }}>
                Monthly Overview
              </span>
              <Badge variant="success" dot size="sm">Live</Badge>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--color-fg-muted)' }}>
              April 2026
            </p>
          </div>
        }
      >
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Revenue up 12% from last month. New user signups are trending positively across all channels.
        </p>
      </Card>
    </div>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <div style={{ maxWidth: '380px' }}>
      <Card
        variant="shadow"
        header={
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--color-fg-default)' }}>
              Upgrade to Pro
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--color-fg-muted)' }}>
              Unlock unlimited projects and team collaboration.
            </p>
          </div>
        }
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button variant="ghost" size="sm">Maybe later</Button>
            <Button variant="primary" size="sm">Upgrade now</Button>
          </div>
        }
      >
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Unlimited projects', 'Custom domains', 'Priority support', 'Advanced analytics'].map((f) => (
            <li key={f} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: 'var(--color-fg-default)' }}>
              <span style={{ color: 'var(--color-success-default)', fontSize: '16px', lineHeight: 1 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <div style={{ maxWidth: '360px' }}>
      <Card
        variant="border"
        padding="none"
        hoverable
        media={
          <div style={{
            height: '180px',
            background: 'linear-gradient(135deg, var(--color-accent-subtle) 0%, var(--color-accent-default) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '48px' }}>🎨</span>
          </div>
        }
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Badge variant="primary" size="sm">Design</Badge>
            <Button variant="ghost" size="sm">View project →</Button>
          </div>
        }
      >
        <div>
          <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--color-fg-default)' }}>
            Design System v2
          </p>
          <p style={{ margin: '6px 0 0', fontSize: '13px', color: 'var(--color-fg-muted)', lineHeight: 1.5 }}>
            A comprehensive component library built with React and TypeScript.
          </p>
        </div>
      </Card>
    </div>
  ),
}

export const HoverableGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '720px' }}>
      {[
        { title: 'Button', count: '8 variants', icon: '⬡' },
        { title: 'Input', count: '5 states', icon: '▭' },
        { title: 'Badge', count: '5 types', icon: '◉' },
        { title: 'Card', count: '3 styles', icon: '▢' },
        { title: 'Modal', count: 'Coming soon', icon: '◫' },
        { title: 'Toast', count: 'Coming soon', icon: '▤' },
      ].map((item) => (
        <Card key={item.title} variant="border" hoverable padding="md">
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--color-fg-default)' }}>
            {item.title}
          </p>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--color-fg-muted)' }}>
            {item.count}
          </p>
        </Card>
      ))}
    </div>
  ),
}
