import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './Avatar'

/**
 * # Avatar
 * User representation with image or initials fallback.
 * Status indicators, multiple sizes, and group overflow.
 */
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: 'select', options: ['circle', 'rounded'] },
    status: { control: 'select', options: [undefined, 'online', 'offline', 'busy', 'away'] },
  },
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { name: 'Jamie Kingsley', size: 'md', shape: 'circle' },
}

export const WithImage: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jamie',
    name: 'Jamie Kingsley',
    size: 'lg',
  },
}

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex items-end gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Jamie Kingsley" size={size} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fg-tertiary)' }}>{size}</span>
        </div>
      ))}
    </div>
  ),
}

export const Shapes: Story = {
  name: 'Circle vs Rounded',
  render: () => (
    <div className="flex gap-6 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {(['circle', 'rounded'] as const).map(shape => (
        <div key={shape} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Jamie Kingsley" size="xl" shape={shape} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fg-tertiary)' }}>{shape}</span>
        </div>
      ))}
    </div>
  ),
}

export const StatusIndicators: Story = {
  name: 'Status Indicators',
  render: () => (
    <div className="flex flex-wrap gap-6 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {([undefined, 'online', 'offline', 'busy', 'away'] as const).map(status => (
        <div key={status ?? 'none'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Jamie Kingsley" size="lg" status={status} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fg-tertiary)' }}>
            {status ?? 'none'}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const Initials: Story = {
  name: 'Initials from Name',
  render: () => (
    <div className="flex flex-wrap gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {[
        'Jamie Kingsley',
        'Alex Chen',
        'Maria Gonzalez',
        'David K',
        'O',
      ].map(name => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Avatar name={name} size="md" />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--color-fg-tertiary)' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const Group: Story = {
  name: 'Avatar Group',
  render: () => (
    <div className="space-y-6 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fg-tertiary)', width: '20px' }}>{size}</span>
          <AvatarGroup size={size} max={4}>
            <Avatar name="Jamie Kingsley" size={size} />
            <Avatar name="Alex Chen" size={size} />
            <Avatar name="Maria Gonzalez" size={size} />
            <Avatar name="David Kim" size={size} />
            <Avatar name="Sara Lee" size={size} />
            <Avatar name="Tom Park" size={size} />
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
}

export const SizeMatrix: Story = {
  name: 'Size × Status Matrix',
  render: () => (
    <div className="p-6 space-y-4" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {(['online', 'offline', 'busy', 'away'] as const).map(status => (
        <div key={status} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fg-tertiary)', width: '48px' }}>{status}</span>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
            <Avatar key={size} name="JK" size={size} status={status} />
          ))}
        </div>
      ))}
    </div>
  ),
}
