import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './index'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: () => (
    <Avatar
      src="https://i.pravatar.cc/150?img=32"
      alt="Jane Doe"
      name="Jane Doe"
      size="md"
    />
  ),
}

export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
      <Avatar name="Kingsley Wong" />
      <Avatar name="Alice Johnson" />
      <Avatar name="Bob Smith" />
      <Avatar name="Carol White" />
      <Avatar name="David Lee" />
    </div>
  ),
}

export const WithIconFallback: Story = {
  render: () => <Avatar size="md" />,
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} name="Kingsley Wong" size={size} />
      ))}
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      <Avatar name="Kingsley Wong" status="online" />
      <Avatar name="Alice Johnson" status="away" />
      <Avatar name="Bob Smith" status="busy" />
      <Avatar name="Carol White" status="offline" />
    </div>
  ),
}

export const SquareShape: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} name="Kingsley Wong" size={size} shape="square" />
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Kingsley Wong" />
      <Avatar name="Alice Johnson" />
      <Avatar name="Bob Smith" />
    </AvatarGroup>
  ),
}

export const GroupWithOverflow: Story = {
  render: () => (
    <AvatarGroup max={3} size="md">
      <Avatar name="Kingsley Wong" />
      <Avatar name="Alice Johnson" />
      <Avatar name="Bob Smith" />
      <Avatar name="Carol White" />
      <Avatar name="David Lee" />
      <Avatar name="Emma Davis" />
    </AvatarGroup>
  ),
}

export const GroupSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <AvatarGroup key={size} max={4} size={size}>
          <Avatar name="Kingsley Wong" />
          <Avatar name="Alice Johnson" />
          <Avatar name="Bob Smith" />
          <Avatar name="Carol White" />
          <Avatar name="David Lee" />
        </AvatarGroup>
      ))}
    </div>
  ),
}
